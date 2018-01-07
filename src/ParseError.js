/**
 * @module @sendanor/cloud-backend
 */

/**
 * Our parsing error for GenericParser and PromptParser.
 *
 * @example
 *
 * import ParseError from '@sendanor/cloud-backend';
 * throw new ParseError("At line 123");
 *
 * @extends Error
 * @static
 */
class ParseError extends Error {

	/**
	 * Create a ParseError
	 * @param {string} message - Error message
	 */
	constructor (message) {
		super(message);
		this.name = 'ParseError';
		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = (new Error(message)).stack;
		}
		Object.setPrototypeOf(this, ParseError.prototype);
	}

}

export default ParseError;