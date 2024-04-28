import globals from 'globals';
import esperecyanConfig from './index.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...esperecyanConfig,
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
			parserOptions: {
				sourceType: 'script',
			},
		},
		rules: {
			'quote-props': ['warn', 'consistent-as-needed'],
		},
	},
];
