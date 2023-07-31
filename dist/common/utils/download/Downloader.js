"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const events_1 = require("events");
const perf_hooks_1 = require("perf_hooks");
const util_1 = require("./util");
const request_1 = require("./request");
const defaultChunkInfo = {
    path: '',
    startByte: '0',
    endByte: '',
};
const defaultRequestOptions = {
    method: 'get',
    headers: {},
};
const defaultOptions = {
    forceResume: true,
    requestOptions: { ...defaultRequestOptions },
};
class Task extends events_1.EventEmitter {
    resumeLastChunk;
    downloadUrl;
    chunkInfo;
    status;
    options;
    requestOptions;
    ws = null;
    progress = { total: 0, downloaded: 0, speed: 0, progress: 0 };
    statsEstimate = { time: 0, bytes: 0, prevBytes: 0 };
    requestInstance = null;
    maxRedirectNum = 2;
    redirectNum = 0;
    constructor(url, savePath, filename, options = {}) {
        super();
        this.resumeLastChunk = null;
        this.downloadUrl = url;
        this.chunkInfo = Object.assign({}, defaultChunkInfo, {
            path: path_1.default.join(savePath, filename),
            startByte: '0',
        });
        // if (!this.chunkInfo.endByte) this.chunkInfo.endByte = ''
        this.options = Object.assign({}, defaultOptions, options);
        this.requestOptions = Object.assign({}, defaultRequestOptions, this.options.requestOptions || {});
        this.requestOptions.headers = this.requestOptions.headers ? { ...this.requestOptions.headers } : {};
        this.status = util_1.STATUS.idle;
    }
    async __init() {
        const { path, startByte, endByte } = this.chunkInfo;
        this.redirectNum = 0;
        this.progress.downloaded = 0;
        this.progress.progress = 0;
        this.progress.speed = 0;
        if (startByte)
            this.requestOptions.headers.range = `bytes=${startByte}-${endByte}`;
        if (!path)
            return;
        return new Promise((resolve, reject) => {
            fs_1.default.stat(path, (errStat, stats) => {
                if (errStat) {
                    // console.log(errStat.code)
                    if (errStat.code !== 'ENOENT') {
                        this.__handleError(errStat);
                        reject(errStat);
                        return;
                    }
                }
                else if (stats.size >= 10) {
                    fs_1.default.open(path, 'r', (errOpen, fd) => {
                        if (errOpen) {
                            this.__handleError(errOpen);
                            reject(errOpen);
                            return;
                        }
                        fs_1.default.read(fd, Buffer.alloc(10), 0, 10, stats.size - 10, (errRead, bytesRead, buffer) => {
                            if (errRead) {
                                this.__handleError(errRead);
                                reject(errRead);
                                return;
                            }
                            fs_1.default.close(fd, errClose => {
                                if (errClose) {
                                    this.__handleError(errClose);
                                    reject(errClose);
                                    return;
                                }
                                // resume download
                                // console.log(buffer)
                                this.resumeLastChunk = buffer;
                                this.progress.downloaded = stats.size;
                                this.requestOptions.headers.range = `bytes=${stats.size - 10}-${endByte || ''}`;
                                resolve();
                            });
                        });
                    });
                    return;
                }
                resolve();
            });
        });
    }
    __httpFetch(url, options) {
        // console.log(options)
        let redirected = false;
        this.requestInstance = (0, request_1.request)(url, options)
            .on('response', response => {
            if (response.statusCode !== 200 && response.statusCode !== 206) {
                if (response.statusCode == 416) {
                    fs_1.default.unlink(this.chunkInfo.path, (err) => {
                        this.__handleError(new Error(response.statusMessage));
                        this.chunkInfo.startByte = '0';
                        this.resumeLastChunk = null;
                        this.progress.downloaded = 0;
                        if (err)
                            this.__handleError(err);
                    });
                    return;
                }
                if ((response.statusCode == 301 || response.statusCode == 302) && response.headers.location && this.redirectNum < this.maxRedirectNum) {
                    console.log('current url:', url);
                    console.log('redirect to:', response.headers.location);
                    redirected = true;
                    this.redirectNum++;
                    const location = response.headers.location;
                    this.__httpFetch(location, options);
                    return;
                }
                this.status = util_1.STATUS.failed;
                this.emit('fail', response);
                this.__closeRequest();
                void this.__closeWriteStream();
                return;
            }
            this.emit('response', response);
            try {
                this.__initDownload(response);
            }
            catch (error) {
                this.__handleError(error);
                return;
            }
            this.status = util_1.STATUS.running;
            response
                .on('data', this.__handleWriteData.bind(this))
                .on('error', err => { this.__handleError(err); })
                .on('end', () => {
                if (response.complete) {
                    this.__handleComplete();
                }
                else {
                    // this.__handleError(new Error('The connection was terminated while the message was still being sent'))
                    void this.stop();
                }
            });
        })
            .on('error', err => { this.__handleError(err); })
            .on('close', () => {
            if (redirected)
                return;
            void this.__closeWriteStream();
        })
            .end();
    }
    __initDownload(response) {
        this.progress.total = response.headers['content-length'] ? parseInt(response.headers['content-length']) : 0;
        if (!this.progress.total) {
            this.__handleError(new Error('Content length is 0'));
            return;
        }
        let options = {};
        let isResumable = this.options.forceResume ||
            response.headers['accept-ranges'] !== 'none' ||
            (typeof response.headers['accept-ranges'] == 'string' &&
                parseInt(response.headers['accept-ranges'].replace(/^bytes=(\d+)/, '$1')) > 0);
        if (isResumable) {
            options.flags = 'a';
            if (this.progress.downloaded)
                this.progress.total -= 10;
        }
        else {
            if (this.chunkInfo.startByte != '0') {
                this.__handleError(new Error('The resource cannot be resumed download.'));
                return;
            }
        }
        this.progress.total += this.progress.downloaded;
        this.statsEstimate.prevBytes = this.progress.downloaded;
        if (!this.chunkInfo.path) {
            this.__handleError(new Error('Chunk save Path is not set.'));
            return;
        }
        this.ws = fs_1.default.createWriteStream(this.chunkInfo.path, options);
        this.ws.on('finish', () => {
            void this.__closeWriteStream();
        });
        this.ws.on('error', err => {
            fs_1.default.unlink(this.chunkInfo.path, (unlinkErr) => {
                this.__handleError(err);
                this.chunkInfo.startByte = '0';
                this.resumeLastChunk = null;
                this.progress.downloaded = 0;
                if (unlinkErr && unlinkErr.code !== 'ENOENT')
                    this.__handleError(unlinkErr);
            });
        });
    }
    __handleComplete() {
        if (this.status == util_1.STATUS.error)
            return;
        void this.__closeWriteStream().then(() => {
            if (this.progress.downloaded == this.progress.total) {
                this.status = util_1.STATUS.completed;
                this.emit('completed');
            }
            else {
                this.status = util_1.STATUS.stopped;
                this.emit('stop');
            }
        });
        // console.log('end')
    }
    __handleError(error) {
        if (this.status == util_1.STATUS.error)
            return;
        this.status = util_1.STATUS.error;
        this.__closeRequest();
        void this.__closeWriteStream();
        if (error.message == 'aborted')
            return;
        this.emit('error', error);
    }
    async __closeWriteStream() {
        return new Promise((resolve, reject) => {
            if (!this.ws) {
                resolve();
                return;
            }
            // console.log('close write stream')
            this.ws.close(err => {
                if (err) {
                    this.status = util_1.STATUS.error;
                    this.emit('error', err);
                    reject(err);
                    return;
                }
                this.ws = null;
                resolve();
            });
        });
    }
    __closeRequest() {
        if (!this.requestInstance || this.requestInstance.destroyed)
            return;
        // console.log('close request')
        this.requestInstance.destroy();
        this.requestInstance = null;
    }
    __handleWriteData(chunk) {
        if (this.resumeLastChunk) {
            const result = this.__handleDiffChunk(chunk);
            if (result)
                chunk = result;
            else {
                this.__handleStop().finally(() => {
                    // this.__handleError(new Error('Resume failed, response chunk does not match.'))
                    // Resume failed, response chunk does not match, remove file and restart download
                    console.log('Resume failed, response chunk does not match.');
                    fs_1.default.unlink(this.chunkInfo.path, (unlinkErr) => {
                        // this.__handleError(err)
                        this.chunkInfo.startByte = '0';
                        this.resumeLastChunk = null;
                        if (unlinkErr && unlinkErr.code !== 'ENOENT') {
                            this.__handleError(unlinkErr);
                            return;
                        }
                        void this.start();
                    });
                });
                return;
            }
        }
        // console.log('data', chunk)
        if (this.status == util_1.STATUS.stopped || this.ws == null) {
            console.log('cancel write');
            return;
        }
        this.__calculateProgress(chunk.length);
        this.ws.write(chunk, err => {
            if (!err)
                return;
            console.log(err);
            this.__handleError(err);
            void this.stop();
        });
    }
    __handleDiffChunk(chunk) {
        // console.log('diff', chunk)
        let resumeLastChunkLen = this.resumeLastChunk.length;
        let chunkLen = chunk.length;
        let isOk;
        if (chunkLen >= resumeLastChunkLen) {
            isOk = chunk.slice(0, resumeLastChunkLen).toString('hex') === this.resumeLastChunk.toString('hex');
            if (!isOk)
                return null;
            this.resumeLastChunk = null;
            return chunk.slice(resumeLastChunkLen);
        }
        else {
            isOk = chunk.slice(0, chunkLen).toString('hex') === this.resumeLastChunk.slice(0, chunkLen).toString('hex');
            if (!isOk)
                return null;
            this.resumeLastChunk = this.resumeLastChunk.slice(chunkLen);
            return chunk.slice(chunkLen);
        }
    }
    async __handleStop() {
        return new Promise((resolve, reject) => {
            this.__closeRequest();
            if (this.ws) {
                this.ws.close(err => {
                    if (err) {
                        reject(err);
                        this.emit('error', err);
                        return;
                    }
                    this.ws = null;
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }
    __calculateProgress(receivedBytes) {
        const currentTime = perf_hooks_1.performance.now();
        const elaspsedTime = currentTime - this.statsEstimate.time;
        const progress = this.progress;
        progress.downloaded += receivedBytes;
        progress.progress = progress.total ? (progress.downloaded / progress.total) * 100 : -1;
        // emit the progress every second or if finished
        if (progress.downloaded === progress.total || elaspsedTime > 1000) {
            this.statsEstimate.time = currentTime;
            this.statsEstimate.bytes = progress.downloaded - this.statsEstimate.prevBytes;
            this.statsEstimate.prevBytes = progress.downloaded;
            this.emit('progress', {
                total: progress.total,
                downloaded: progress.downloaded,
                progress: progress.progress,
                speed: this.statsEstimate.bytes,
            });
        }
    }
    async start() {
        this.status = util_1.STATUS.init;
        await this.__init();
        if (this.status !== util_1.STATUS.init)
            return;
        this.status = util_1.STATUS.running;
        this.__httpFetch(this.downloadUrl, this.requestOptions);
        this.emit('start');
    }
    async stop() {
        if (this.status == util_1.STATUS.stopped || this.status == util_1.STATUS.completed)
            return;
        this.status = util_1.STATUS.stopped;
        await this.__handleStop();
        this.emit('stop');
    }
    refreshUrl(url) {
        this.downloadUrl = url;
    }
    updateSaveInfo(filePath, fileName) {
        this.chunkInfo.path = path_1.default.join(filePath, fileName);
    }
}
exports.default = Task;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG93bmxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdXRpbHMvZG93bmxvYWQvRG93bmxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUFtQjtBQUNuQixnREFBdUI7QUFDdkIsbUNBQXFDO0FBQ3JDLDJDQUF3QztBQUN4QyxpQ0FBK0I7QUFFL0IsdUNBQW1FO0FBT25FLE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIsSUFBSSxFQUFFLEVBQUU7SUFDUixTQUFTLEVBQUUsR0FBRztJQUNkLE9BQU8sRUFBRSxFQUFFO0NBQ1osQ0FBQTtBQUVELE1BQU0scUJBQXFCLEdBQThCO0lBQ3ZELE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEVBQUU7Q0FDWixDQUFBO0FBQ0QsTUFBTSxjQUFjLEdBQVk7SUFDOUIsV0FBVyxFQUFFLElBQUk7SUFDakIsY0FBYyxFQUFFLEVBQUUsR0FBRyxxQkFBcUIsRUFBRTtDQUM3QyxDQUFBO0FBRUQsTUFBTSxJQUFLLFNBQVEscUJBQVk7SUFDN0IsZUFBZSxDQUFlO0lBQzlCLFdBQVcsQ0FBUTtJQUNuQixTQUFTLENBQXNEO0lBQy9ELE1BQU0sQ0FBb0M7SUFDMUMsT0FBTyxDQUFTO0lBQ2hCLGNBQWMsQ0FBMkI7SUFDekMsRUFBRSxHQUEwQixJQUFJLENBQUE7SUFDaEMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFBO0lBQzdELGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUE7SUFDbkQsZUFBZSxHQUE4QixJQUFJLENBQUE7SUFDakQsY0FBYyxHQUFHLENBQUMsQ0FBQTtJQUNWLFdBQVcsR0FBRyxDQUFDLENB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