import { httpOverHttp, httpsOverHttp } from 'tunnel';
export const STATUS = {
    idle: 'IDLE',
    init: 'INIT',
    running: 'RUNNING',
    paused: 'PAUSED',
    stopped: 'STOPPED',
    completed: 'COMPLETED',
    error: 'ERROR',
    failed: 'FAILED',
};
const httpsRxp = /^https:/;
export const getRequestAgent = (url, proxy) => {
    let options;
    if (proxy) {
        options = {
            proxy: {
                host: proxy.host,
                port: proxy.port,
            },
        };
    }
    return options ? (httpsRxp.test(url) ? httpsOverHttp : httpOverHttp)(options) : undefined;
};
