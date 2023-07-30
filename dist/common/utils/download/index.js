import Downloader from './Downloader';
import { getRequestAgent } from './util';
import { sizeFormate } from '@common/utils';
const noop = () => { };
export const createDownload = ({ url, path, fileName, method = 'get', forceResume, proxy, 
// resumeTime = 5000,
onCompleted = noop, onError = noop, onFail = noop, onStart = noop, onStop = noop, onProgress = noop, }) => {
    const dl = new Downloader(url, path, fileName, {
        requestOptions: {
            method,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
            },
            agent: getRequestAgent(url, proxy),
            timeout: 60 * 1000,
        },
        forceResume,
    });
    dl.on('completed', () => {
        onCompleted();
    }).on('error', (err) => {
        if (err.message === 'socket hang up')
            return;
        onError(err);
    }).on('start', () => {
        onStart();
        // pauseResumeTimer(dl, resumeTime)
    }).on('progress', (stats) => {
        const speed = sizeFormate(stats.speed);
        onProgress({
            progress: parseInt(stats.progress.toFixed(2)),
            speed,
            downloaded: stats.downloaded,
            total: stats.total,
        });
        // if (debugDownload) {
        //   const downloaded = sizeFormate(stats.downloaded)
        //   const total = sizeFormate(stats.total)
        //   console.log(`${speed}/s - ${progress}% [${downloaded}/${total}]`)
        // }
    }).on('stop', () => {
        onStop();
        // debugDownload && console.log('paused')
    }).on('fail', resp => {
        onFail(resp);
        // debugDownload && console.log('fail')
    });
    // debugDownload && console.log('Downloading: ', url)
    dl.start().catch(err => {
        onError(err);
    });
    return dl;
};
