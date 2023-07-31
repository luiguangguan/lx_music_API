"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestAgent = exports.STATUS = void 0;
const tunnel_1 = require("tunnel");
exports.STATUS = {
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
const getRequestAgent = (url, proxy) => {
    let options;
    if (proxy) {
        options = {
            proxy: {
                host: proxy.host,
                port: proxy.port,
            },
        };
    }
    return options ? (httpsRxp.test(url) ? tunnel_1.httpsOverHttp : tunnel_1.httpOverHttp)(options) : undefined;
};
exports.getRequestAgent = getRequestAgent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdXRpbHMvZG93bmxvYWQvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBb0Q7QUFFdkMsUUFBQSxNQUFNLEdBQUc7SUFDcEIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLFFBQVE7Q0FDUixDQUFBO0FBRVYsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFBO0FBQ25CLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQXNDLEVBQUUsRUFBRTtJQUNyRixJQUFJLE9BQU8sQ0FBQTtJQUNYLElBQUksS0FBSyxFQUFFO1FBQ1QsT0FBTyxHQUFHO1lBQ1IsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtnQkFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2FBQ2pCO1NBQ0YsQ0FBQTtLQUNGO0lBQ0QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQWEsQ0FBQyxDQUFDLENBQUMscUJBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7QUFDM0YsQ0FBQyxDQUFBO0FBWFksUUFBQSxlQUFlLG1CQVczQiJ9