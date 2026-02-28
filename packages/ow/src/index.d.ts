declare function _throw(any: unknown): never;

export { _throw as throw };

type Thrower<C extends ErrorConstructor> = (
	...args: ConstructorParameters<C>
) => never;

export function Thrower<C extends ErrorConstructor>(
	ErrorConstructor: C,
): Thrower<C>;

export namespace Error {
	export const Common: Thrower<ErrorConstructor>;
	export const Eval: Thrower<EvalErrorConstructor>;
	export const Range: Thrower<RangeErrorConstructor>;
	export const Reference: Thrower<ReferenceErrorConstructor>;
	export const Syntax: Thrower<SyntaxErrorConstructor>;
	export const Type: Thrower<TypeErrorConstructor>;
	export const URI: Thrower<URIErrorConstructor>;
	export const Aggregate: Thrower<AggregateErrorConstructor & ErrorConstructor>;
}
