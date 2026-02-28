import { Thrower } from './throw.mjs';

export const Common = Thrower(Error);
export const Eval = Thrower(EvalError);
export const Range = Thrower(RangeError);
export const Reference = Thrower(ReferenceError);
export const Syntax = Thrower(SyntaxError);
export const Type = Thrower(TypeError);
export const URI = Thrower(URIError);
export const Aggregate = Thrower(AggregateError);
