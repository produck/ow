export function _throw(any) {
	throw any;
}

export function Thrower(ErrorConstructor) {
	return (...args) => _throw(new ErrorConstructor(...args));
}
