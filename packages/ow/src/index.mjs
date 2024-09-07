function _throw(any) {
	throw any;
}

const Thrower = NewTarget => (...args) => _throw(new NewTarget(...args));

export const _Error = Thrower(Error);
export const _EvalError = Thrower(EvalError);
export const _RangeError = Thrower(RangeError);
export const _ReferenceError = Thrower(ReferenceError);
export const _SyntaxError = Thrower(SyntaxError);
export const _TypeError = Thrower(TypeError);
export const _URIError = Thrower(URIError);
export const _AggregateError = Thrower(AggregateError);

export const Invalid = (role, expected) => {
	return TypeError(`Invalid "${role}", one "${expected}" expected.`);
};

export {
	_throw as throw,
	_Error as Error,
	_EvalError as EvalError,
	_RangeError as RangeError,
	_ReferenceError as ReferenceError,
	_SyntaxError as SyntaxError,
	_TypeError as TypeError,
	_URIError as URIError,
	_AggregateError as AggregateError,
};
