"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_errors_1 = require("http-errors");
/**
 * Handles an error within the program
 *
 * @param error an error that was thrown
 * @param event string for what was trying to be done when this error occured
 * @param status number for any status code to attach to a new HttpError
 * @return HttpError the inputted error parsed into a HttpError
 */
function handleError(error, event, status) {
    if (status === void 0) { status = 400; }
    var _msg = "Error occurred while ".concat(event);
    return (0, http_errors_1.default)(status, { msg: _msg, originalError: error });
}
module.exports = handleError;
//# sourceMappingURL=index.js.map