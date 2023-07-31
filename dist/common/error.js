"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const ignoreErrorMessage = [
    'Possible side-effect in debug-evaluate',
    'Unexpected end of input',
];
process.on('uncaughtException', err => {
    if (ignoreErrorMessage.includes(err.message))
        return;
    console.error('An uncaught error occurred!');
    console.error(err);
    utils_1.log.error(err);
});
process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at: Promise ', p);
    console.error(' reason: ', reason);
    utils_1.log.error(reason);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uL2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTZCO0FBRTdCLE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsd0NBQXdDO0lBQ3hDLHlCQUF5QjtDQUMxQixDQUFBO0FBRUQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsRUFBRTtJQUNwQyxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQUUsT0FBTTtJQUNwRCxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUE7SUFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQixXQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2hCLENBQUMsQ0FBQyxDQUFBO0FBQ0YsT0FBTyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM3QyxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3BELE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ2xDLFdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbkIsQ0FBQyxDQUFDLENBQUEifQ==