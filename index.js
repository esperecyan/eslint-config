import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
			parserOptions: {
				sourceType: 'module',
			},
		},
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			// ECMAScript 2015
			'no-var': 'warn',
			'prefer-const': ['warn', {destructuring: 'all', ignoreReadBeforeAssign: true}],
			'no-use-before-define': ['error', {functions: false, classes: false}],
			'@stylistic/rest-spread-spacing': 'warn',
			'require-await': 'warn',
			'no-irregular-whitespace': ['error', {
				skipStrings: true,
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			}],

			// eslint:recommended の変更
			'no-constant-condition': ['error', {checkLoops: false}],

			// strict mode
			'no-caller': 'error',
			'no-octal-escape': 'error',

			// PSR-1 風
			'unicode-bom': 'warn',
			'new-cap': ['warn', {capIsNewExceptions: ['DateTimeFormat']}],

			// PSR-2 風
			'camelcase': ['warn', {properties: 'never'}],
			'curly': 'warn',
			'@stylistic/no-multi-spaces': 'warn',
			'@stylistic/eol-last': 'warn',
			'@stylistic/keyword-spacing': 'warn',
			'@stylistic/linebreak-style': 'warn',
			'@stylistic/max-len': ['warn', {code: 120}],
			'@stylistic/max-statements-per-line': 'warn',
			'@stylistic/func-call-spacing': 'warn',
			'@stylistic/no-trailing-spaces': 'warn',
			'no-underscore-dangle': 'warn',
			'@stylistic/semi-spacing': 'warn',
			'@stylistic/space-before-blocks': 'warn',
			'@stylistic/space-before-function-paren': ['warn', {anonymous: 'always', named: 'never'}],
			'@stylistic/space-in-parens': 'warn',
			'@stylistic/no-mixed-spaces-and-tabs': 'warn',
			'@stylistic/indent': [
				'warn',
				'tab',
				{SwitchCase: 1, outerIIFEBody: 'off', ignoredNodes: ['TemplateLiteral *']},
			],

			// その他
			'@stylistic/quotes': ['warn', 'single', {avoidEscape: true}],
			'@stylistic/dot-location': ['warn', 'property'],
			'eqeqeq': 'warn',
			'no-alert': 'warn',
			'@stylistic/no-floating-decimal': 'warn',
			'no-unmodified-loop-condition': 'error',
			'yoda': ['warn', 'never', {exceptRange: true}],
			'@stylistic/comma-dangle': ['warn', 'always-multiline'],
			'@stylistic/comma-style': 'warn',
			'@stylistic/new-parens': 'warn',
			'@stylistic/no-whitespace-before-property': 'warn',
			'@stylistic/operator-linebreak': ['warn', 'before'],
			'@stylistic/quote-props': ['warn', 'as-needed'],
			'@stylistic/semi': 'warn',
			'@stylistic/spaced-comment': ['warn', 'always', {
				block: {markers: ['global', 'exported', 'eslint', 'eslint-disable', 'eslint-enable', 'eslint-env']},
				line: {exceptions: ['/'], markers: ['//////', 'eslint-disable-line', 'eslint-disable-next-line']},
			}],
			'prefer-spread': 'warn',
		},
	},
];
