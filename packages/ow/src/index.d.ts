declare function _throw(any: any): never;

export { _throw as throw };

interface Thrower<ErrorConstructor extends abstract new (...args: any[]) => any> {
	(...args: ConstructorParameters<ErrorConstructor>): never;
}

export namespace Error {
	export const Common: Thrower<ErrorConstructor>;
	export const Eval: Thrower<EvalErrorConstructor>;
	export const Range: Thrower<RangeErrorConstructor>;
	export const Reference: Thrower<ReferenceErrorConstructor>;
	export const Syntax: Thrower<SyntaxErrorConstructor>;
	export const Type: Thrower<TypeErrorConstructor>;
	export const URI: Thrower<URIErrorConstructor>;
	export const Aggregate: Thrower<AggregateErrorConstructor>;
}

export function Invalid(role: string, expected: string): never;
