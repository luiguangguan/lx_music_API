"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDownload = void 0;
const Downloader_1 = __importDefault(require("./Downloader"));
const util_1 = require("./util");
const utils_1 = require("@common/utils");
const noop = () => { };
const createDownload = ({ url, path, fileName, method = 'get', forceResume, proxy, 
// resumeTime = 5000,
onCompleted = noop, onError = noop, onFail = noop, onStart = noop, onStop = noop, onProgress = noop, }) => {
    const dl = new Downloader_1.default(url, path, fileName, {
        requestOptions: {
            method,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
            },
            agent: (0, util_1.getRequestAgent)(url, proxy),
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
        const speed = (0, utils_1.sizeFormate)(stats.speed);
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
exports.createDownload = createDownload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL3V0aWxzL2Rvd25sb2FkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUE0RTtBQUM1RSxpQ0FBd0M7QUFDeEMseUNBQTJDO0FBOEIzQyxNQUFNLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUE7QUFDZCxNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQzdCLEdBQUcsRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sR0FBRyxLQUFLLEVBQ2QsV0FBVyxFQUNYLEtBQUs7QUFDTCxxQkFBcUI7QUFDckIsV0FBVyxHQUFHLElBQUksRUFDbEIsT0FBTyxHQUFHLElBQUksRUFDZCxNQUFNLEdBQUcsSUFBSSxFQUNiLE9BQU8sR0FBRyxJQUFJLEVBQ2QsTUFBTSxHQUFHLElBQUksRUFDYixVQUFVLEdBQUcsSUFBSSxHQUNULEVBQUUsRUFBRTtJQUNaLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtRQUM3QyxjQUFjLEVBQUU7WUFDZCxNQUFNO1lBQ04sT0FBTyxFQUFFO2dCQUNQLFlBQVksRUFBRSxnSEFBZ0g7YUFDL0g7WUFDRCxLQUFLLEVBQUUsSUFBQSxzQkFBZSxFQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDbEMsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJO1NBQ25CO1FBRUQsV0FBVztLQUNaLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtRQUN0QixXQUFXLEVBQUUsQ0FBQTtJQUNmLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtRQUMxQixJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssZ0JBQWdCO1lBQUUsT0FBTTtRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNsQixPQUFPLEVBQUUsQ0FBQTtRQUNULG1DQUFtQztJQUNyQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBQSxtQkFBVyxFQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0QyxVQUFVLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEtBQUs7WUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ25CLENBQUMsQ0FBQTtRQUNGLHVCQUF1QjtRQUN2QixxREFBcUQ7UUFDckQsMkNBQTJDO1FBQzNDLHNFQUFzRTtRQUN0RSxJQUFJO0lBQ04sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDakIsTUFBTSxFQUFFLENBQUE7UUFDUix5Q0FBeUM7SUFDM0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDWix1Q0FBdUM7SUFDekMsQ0FBQyxDQUFDLENBQUE7SUFFRixxREFBcUQ7SUFFckQsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZCxDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sRUFBRSxDQUFBO0FBQ1gsQ0FBQyxDQUFBO0FBaEVZLFFBQUEsY0FBYyxrQkFnRTFCIn0=