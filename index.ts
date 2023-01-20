import { HttpError } from "http-errors";

const createError = require("http-errors");

/**
 * Handles an error within the program
 *
 * @param error an error that was thrown
 * @param event string for what was trying to be done when this error occured
 * @param status number for any status code to attach to a new HttpError
 * @return HttpError the inputted error parsed into a HttpError
 */
function handleError(
    error: any,
    event: string,
    status: number = 400
): HttpError {
    let _msg = `Error occurred while ${event}`;
    return createError(status, { msg: _msg, originalError: error });
}

module.exports = handleError