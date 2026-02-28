import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import * as Ow from '../src/index.mjs';

describe('Ow', () => {
	describe('.throw()', () => {
		it('should throw the given value.', () => {
			const error = new Error('foo');

			assert.throws(() => Ow.throw(error), {
				name: 'Error',
				message: 'foo',
			});
		});

		it('should throw a non-error value.', () => {
			assert.throws(() => Ow.throw('bar'), (thrown) => {
				assert.equal(thrown, 'bar');

				return true;
			});
		});
	});

	describe('.Thrower()', () => {
		it('should return a function.', () => {
			const thrower = Ow.Thrower(Error);

			assert.equal(typeof thrower, 'function');
		});

		it('should throw the specified error type.', () => {
			const thrower = Ow.Thrower(TypeError);

			assert.throws(() => thrower('bar'), {
				name: 'TypeError',
				message: 'bar',
			});
		});

		it('should create thrower for custom error class.', () => {
			class CustomError extends Error {
				constructor(message) {
					super(message);
					this.name = 'CustomError';
				}
			}

			const thrower = Ow.Thrower(CustomError);

			try {
				thrower('baz');
			} catch (e) {
				assert.ok(e instanceof CustomError);
				assert.equal(e.name, 'CustomError');
				assert.equal(e.message, 'baz');
			}
		});
	});

	describe('.Error()', () => {
		describe('.Common()', () => {
			it('should throw a Error.', () => {
				try {
					Ow.Error.Common('foo');
				} catch (e) {
					assert.ok(e instanceof Error);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Eval()', () => {
			it('should throw a EvalError.', () => {
				try {
					Ow.Error.Eval('foo');
				} catch (e) {
					assert.ok(e instanceof EvalError);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Range()', () => {
			it('should throw a RangeError.', () => {
				try {
					Ow.Error.Range('foo');
				} catch (e) {
					assert.ok(e instanceof RangeError);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Reference()', () => {
			it('should throw a ReferenceError.', () => {
				try {
					Ow.Error.Reference('foo');
				} catch (e) {
					assert.ok(e instanceof ReferenceError);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Syntax()', () => {
			it('should throw a SyntaxError.', () => {
				try {
					Ow.Error.Syntax('foo');
				} catch (e) {
					assert.ok(e instanceof SyntaxError);
					assert.equal(e.message, 'foo');
				}
			});

		});

		describe('.Type()', () => {
			it('should throw a TypeError.', () => {
				try {
					Ow.Error.Type('foo');
				} catch (e) {
					assert.ok(e instanceof TypeError);
					assert.equal(e.message, 'foo');
				}
			});

		});

		describe('.URI()', () => {
			it('should throw a URIError.', () => {
				try {
					Ow.Error.URI('foo');
				} catch (e) {
					assert.ok(e instanceof URIError);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Aggregate()', () => {
			it('should throw a AggregateError.', () => {
				try {
					Ow.Error.Aggregate([1, 2, 3], 'foo');
				} catch (e) {
					assert.ok(e instanceof AggregateError);
					assert.equal(e.message, 'foo');
					assert.deepEqual(e.errors, [1, 2, 3]);
				}
			});
		});
	});
});
