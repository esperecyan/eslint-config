import globals from 'globals';
import { readGitignoreFiles } from 'eslint-gitignore';
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
		ignores: readGitignoreFiles(),
		rules: {
			'@stylistic/quote-props': ['warn', 'consistent-as-needed'],
		},
	},
];
