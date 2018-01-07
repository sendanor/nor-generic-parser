import 'babel-polyfill';
import assert from 'assert';
import debug from 'nor-debug';
import ParseError from '../src/ParseError.js';

describe('ParseError', () => {

	describe('#constructor()', () => {

		it('can create a ParseError error', () => {
			const error = new ParseError('Message');
			debug.assert(error).is('object');
			debug.assert(''+error).is('string').equals('ParseError: Message');
			debug.assert(error.name).is('string').equals('ParseError');
			debug.assert(error.message).is('string').equals('Message');
			debug.assert(error).instanceOf(Error);
			debug.assert(error).instanceOf(ParseError);
		});

	});

});