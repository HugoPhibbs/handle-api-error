"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createError = require("http-errors");
/**
 * Handles an error within the program
 *
 * @param error an error that was thrown
 * @param event string for what was trying to be done when this error occured
 * @param status number for any status code to attach to a new HttpError
 * @param expose whether error message should be revealed to the client
 * @return HttpError the inputted error parsed into a HttpError
 */
function handleError(error, event, status, expose) {
    if (status === void 0) { status = 400; }
    if (expose === void 0) { expose = true; }
    var _msg = "Error occurred while ".concat(event);
    return createError(status, { originalError: error, msg: _msg, expose: expose });
}
module.exports = handleError;
//# sourceMappingURL=index.js.map