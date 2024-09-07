declare function _throw(any: any): never;

export { _throw as throw };

interface Thrower<ErrorConstructor extends abstract new (...args: any) => any> {
	(...args: ConstructorParameters<ErrorConstructor>): never;
}

export const Error: Thrower<ErrorConstructor>;
export const EvalError: Thrower<EvalErrorConstructor>;
export const RangeError: Thrower<RangeErrorConstructor>;
export const ReferenceError: Thrower<ReferenceErrorConstructor>;
export const SyntaxError: Thrower<SyntaxErrorConstructor>;
export const TypeError: Thrower<TypeErrorConstructor>;
export const URIError: Thrower<URIErrorConstructor>;
export const AggregateError: Thrower<AggregateErrorConstructor>;
