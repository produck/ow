import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	{
		linterOptions: {
			noInlineConfig: true,
		},
		rules: {
			'indent': ['error', 'tab'],
			'linebreak-style': ['error', 'unix'],
			'quotes': ['error', 'single'],
			'semi': ['error', 'always'],
			'comma-dangle': ['error', 'always-multiline'],
		},
	},
];
