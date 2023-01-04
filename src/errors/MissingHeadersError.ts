/**
 * Error representing when headers aren't present but requested in Axios Helper
 */
export default class MissingHeadersError extends Error {
  /**
   * @param {string} error - Error message
   */
  constructor(error: string) {
    // For some reason coverage thinks ';' is uncovered
    super(error) /* istanbul ignore next */;

    this.name = MissingHeadersError.name;

    Error.captureStackTrace(this, MissingHeadersError);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MissingHeadersError.prototype);
  }
}
