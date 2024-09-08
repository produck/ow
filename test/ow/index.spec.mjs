import * as assert from 'node:assert/strict';
import { describe, it } from 'mocha';
import * as Ow from '@produck/ow';

describe('Ow', function () {
	describe('.throw()', function () {
	});

	describe('.Error()', function () {
		describe('.Common()', function () {
			it('should throw a Error.', function () {
				try {
					Ow.Error.Common('foo');
				} catch (e) {
					assert.ok(e instanceof Error);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Eval()', function () {
			it('should throw a EvalError.', function () {
				try {
					Ow.Error.Eval('foo');
				} catch (e) {
					assert.ok(e instanceof EvalError);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Range()', function () {
			it('should throw a RangeError.', function () {
				try {
					Ow.Error.Range('foo');
				} catch (e) {
					assert.ok(e instanceof RangeError);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Reference()', function () {
			it('should throw a ReferenceError.', function () {
				try {
					Ow.Error.Reference('foo');
				} catch (e) {
					assert.ok(e instanceof ReferenceError);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Syntax()', function () {
			it('should throw a SyntaxError.', function () {
				try {
					Ow.Error.Syntax('foo');
				} catch (e) {
					assert.ok(e instanceof SyntaxError);
					assert.equal(e.message, 'foo');
				}
			});

		});

		describe('.Type()', function () {
			it('should throw a TypeError.', function () {
				try {
					Ow.Error.Type('foo');
				} catch (e) {
					assert.ok(e instanceof TypeError);
					assert.equal(e.message, 'foo');
				}
			});

		});

		describe('.URI()', function () {
			it('should throw a URIError.', function () {
				try {
					Ow.Error.URI('foo');
				} catch (e) {
					assert.ok(e instanceof URIError);
					assert.equal(e.message, 'foo');
				}
			});
		});

		describe('.Aggregate()', function () {
			it('should throw a AggregateError.', function () {
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

	describe('.Invalid()', function () {
		it('should throw a templated TypeError.', function () {
			try {
				Ow.Invalid('a', 'b');
			} catch (e) {
				assert.ok(e instanceof TypeError);
				assert.equal(e.message, 'Invalid "a", one "b" expected.');
			}
		});

		it('should throw if bad role.', function () {
			assert.throws(() => Ow.Invalid(), {
				name: 'TypeError',
				message: 'Invalid "role", one "string" expected.',
			});
		});

		it('should throw if bad expected.', function () {
			assert.throws(() => Ow.Invalid('a'), {
				name: 'TypeError',
				message: 'Invalid "expected", one "string" expected.',
			});
		});
	});
});
