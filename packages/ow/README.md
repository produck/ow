# @produck/ow

Throwing exception regularly.

## Installation

```bash
npm install @produck/ow
```

## Usage

```js
import * as Ow from "@produck/ow";
```

### `Ow.throw(value)`

Throws the given value directly.

```js
Ow.throw(new Error("something went wrong"));
// => throws Error: something went wrong

Ow.throw("plain string");
// => throws 'plain string'
```

### `Ow.Thrower(ErrorConstructor)`

Creates a thrower function bound to the specified error constructor. The returned function
accepts the same arguments as the error constructor and throws the constructed error.

```js
const throwTypeError = Ow.Thrower(TypeError);

throwTypeError("invalid type");
// => throws TypeError: invalid type

class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = "CustomError";
	}
}

const throwCustom = Ow.Thrower(CustomError);

throwCustom("custom message");
// => throws CustomError: custom message
```

### `Ow.Error`

A collection of pre-built thrower functions for all built-in error types.

| Thrower              | Error Type       |
| -------------------- | ---------------- |
| `Ow.Error.Common`    | `Error`          |
| `Ow.Error.Eval`      | `EvalError`      |
| `Ow.Error.Range`     | `RangeError`     |
| `Ow.Error.Reference` | `ReferenceError` |
| `Ow.Error.Syntax`    | `SyntaxError`    |
| `Ow.Error.Type`      | `TypeError`      |
| `Ow.Error.URI`       | `URIError`       |
| `Ow.Error.Aggregate` | `AggregateError` |

```js
Ow.Error.Type("expected a string");
// => throws TypeError: expected a string

Ow.Error.Range("index out of bounds");
// => throws RangeError: index out of bounds

Ow.Error.Aggregate([err1, err2], "multiple errors");
// => throws AggregateError: multiple errors
```

## TypeScript

Type definitions are included. All thrower functions are fully typed with
`ConstructorParameters` inference.

```ts
import * as Ow from "@produck/ow";

Ow.Error.Type("msg"); // (...args: ConstructorParameters<TypeErrorConstructor>) => never
Ow.throw(new Error()); // (any: unknown) => never
```

## Why

In JavaScript, `throw` is a statement, not an expression. This means
it cannot be used directly in arrow functions, ternary expressions,
or logical chains. `@produck/ow` wraps `throw` into function calls,
making exception throwing more flexible and composable.

```js
// Without ow — statement only, cannot inline
if (!input) {
	throw new TypeError("input is required");
}

// With ow — works as an expression
const value = input ?? Ow.Error.Type("input is required");

// Arrow function — throw is not allowed in expression body
const assertString = (v) =>
	typeof v === "string" || Ow.Error.Type("expected a string");
```

`Thrower()` creates reusable thrower functions that can be assigned,
passed around, and shared — no need to repeat
`throw new XxxError(...)` everywhere.

All thrower functions return `never` in TypeScript, so the compiler
correctly infers that control flow does not continue past the call.

## License

MIT © Produck Shop
