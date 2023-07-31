"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const url_1 = require("url");
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const defaultOptions = {
    method: 'get',
};
const sendRequest = (url, options, callback) => {
    const urlParse = new url_1.URL(url);
    const httpOptions = {
        host: urlParse.hostname,
        port: urlParse.port,
        path: urlParse.pathname + urlParse.search,
        method: options.method,
    };
    if (options.params) {
        httpOptions.path += `${urlParse.search ? '&' : '?'}${Object.entries(options.params)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&')}`;
    }
    if (options.headers)
        httpOptions.headers = { ...options.headers };
    if (options.agent)
        httpOptions.agent = options.agent;
    return urlParse.protocol == 'https:'
        ? https_1.default.request(httpOptions, callback)
        : http_1.default.request(httpOptions, callback);
};
const applyTimeout = (request, time) => {
    let timeout = setTimeout(() => {
        timeout = null;
        if (request.destroyed)
            return;
        request.destroy(new Error('Request timeout'));
    }, time);
    request.on('response', () => {
        if (!timeout)
            return;
        clearTimeout(timeout);
        timeout = null;
    });
};
// const isRequireRedirect = (response: http.IncomingMessage) => {
//   return response.statusCode &&
//     response.statusCode > 300 &&
//     response.statusCode < 400 &&
//     Object.hasOwn(response.headers, 'location') &&
//     response.headers.location
// }
// export function request(url: string, callback: HttpCallback)
// export function request(url: string, options: Partial<Options>, callback: HttpCallback)
function request(url, _options, callback) {
    let options = { ...defaultOptions, ..._options };
    const request = sendRequest(url, options, callback);
    if (options.timeout)
        applyTimeout(request, options.timeout);
    return request;
}
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdXRpbHMvZG93bmxvYWQvcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2QkFBeUI7QUFDekIsZ0RBQXVCO0FBQ3ZCLGtEQUF5QjtBQVd6QixNQUFNLGNBQWMsR0FBWTtJQUM5QixNQUFNLEVBQUUsS0FBSztDQUNkLENBQUE7QUFJRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQVcsRUFBRSxPQUFnQixFQUFFLFFBQXVCLEVBQUUsRUFBRTtJQUM3RSxNQUFNLFFBQVEsR0FBRyxJQUFJLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM3QixNQUFNLFdBQVcsR0FBK0M7UUFDOUQsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1FBQ3ZCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtRQUNuQixJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTTtRQUN6QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07S0FDdkIsQ0FBQTtJQUVELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNqQixXQUFXLENBQUMsSUFBZSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzVGLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2FBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBO0tBQ2Y7SUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPO1FBQUUsV0FBVyxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBRWpFLElBQUksT0FBTyxDQUFDLEtBQUs7UUFBRSxXQUFXLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7SUFFcEQsT0FBTyxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVE7UUFDbEMsQ0FBQyxDQUFDLGVBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztRQUN0QyxDQUFDLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDekMsQ0FBQyxDQUFBO0FBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUEyQixFQUFFLElBQVksRUFBRSxFQUFFO0lBQ2pFLElBQUksT0FBTyxHQUEwQixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ25ELE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDZCxJQUFJLE9BQU8sQ0FBQyxTQUFTO1lBQUUsT0FBTTtRQUM3QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtJQUMvQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDUixPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDMUIsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFNO1FBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRUQsa0VBQWtFO0FBQ2xFLGtDQUFrQztBQUNsQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLHFEQUFxRDtBQUNyRCxnQ0FBZ0M7QUFDaEMsSUFBSTtBQUVKLCtEQUErRDtBQUMvRCwwRkFBMEY7QUFDMUYsU0FBZ0IsT0FBTyxDQUFDLEdBQVcsRUFBRSxRQUEwQixFQUFFLFFBQXVCO0lBQ3RGLElBQUksT0FBTyxHQUFZLEVBQUUsR0FBRyxjQUFjLEVBQUUsR0FBRyxRQUFRLEVBQUUsQ0FBQTtJQUN6RCxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNuRCxJQUFJLE9BQU8sQ0FBQyxPQUFPO1FBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDM0QsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQztBQUxELDBCQUtDIn0=