/**
 * Throws the given value as an exception.
 *
 * @param any - The value to throw.
 * @throws Always throws the provided value.
 */
declare function _throw(any: unknown): never;

export { _throw as throw };

/**
 * A function type bound to a specific error constructor.
 * When called, it instantiates the error and throws it immediately.
 */
type Thrower<C extends ErrorConstructor> = (
	...args: ConstructorParameters<C>
) => never;

/**
 * Creates a Thrower function bound to the given error constructor.
 * The returned function instantiates the error with the provided arguments and
 * throws it.
 *
 * @param ErrorConstructor - The error constructor to bind.
 * @returns A Thrower function that throws an error of the corresponding type.
 *
 * @example
 * ```ts
 * const throwTypeError = Thrower(TypeError);
 * throwTypeError('invalid type'); // throws TypeError: invalid type
 * ```
 */
export function Thrower<C extends ErrorConstructor>(
	ErrorConstructor: C,
): Thrower<C>;

/**
 * A collection of pre-bound error thrower functions.
 * Each property is a Thrower bound to the corresponding built-in error
 * constructor,
 * and can be called directly to throw that error type.
 *
 * @example
 * ```ts
 * Error.Type('not a number');    // throws TypeError
 * Error.Range('out of range');   // throws RangeError
 * Error.Syntax('bad syntax');    // throws SyntaxError
 * ```
 */
export namespace Error {
	/** Throws a generic Error. */
	export const Common: Thrower<ErrorConstructor>;

	/** Throws an EvalError. */
	export const Eval: Thrower<EvalErrorConstructor>;

	/** Throws a RangeError. */
	export const Range: Thrower<RangeErrorConstructor>;

	/** Throws a ReferenceError. */
	export const Reference: Thrower<ReferenceErrorConstructor>;

	/** Throws a SyntaxError. */
	export const Syntax: Thrower<SyntaxErrorConstructor>;

	/** Throws a TypeError. */
	export const Type: Thrower<TypeErrorConstructor>;

	/** Throws a URIError. */
	export const URI: Thrower<URIErrorConstructor>;

	/** Throws an AggregateError. */
	export const Aggregate: Thrower<ErrorConstructor & AggregateErrorConstructor>;
}
