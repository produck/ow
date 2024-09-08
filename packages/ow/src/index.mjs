import * as Error from './Error.mjs';

export const Invalid = (role, expected) => {
	if (typeof role !== 'string') {
		Invalid('role', 'string');
	}

	if (typeof expected !== 'string') {
		Invalid('expected', 'string');
	}

	return Error.Type(`Invalid "${role}", one "${expected}" expected.`);
};

export { _throw as throw } from './throw.mjs';
export { Error };
