import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	stylistic.configs.customize({
		indent: 'tab',
		semi: true,
		quoteProps: 'as-needed',
		severity: 'warn',
	}),
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
			'@stylistic/brace-style': 'off', // 対応するオプションがない
			'@stylistic/linebreak-style': 'warn',
			'@stylistic/max-len': ['warn', {code: 120}],
			'@stylistic/function-call-spacing': 'warn',
			'no-underscore-dangle': 'warn',
			'@stylistic/object-curly-spacing': ['warn', 'never'],
			'@stylistic/indent': [
				'warn',
				'tab',
				{SwitchCase: 1, outerIIFEBody: 'off', ignoredNodes: ['TemplateLiteral *']},
			],

			// その他
			'@stylistic/quotes': ['warn', 'single', {avoidEscape: true}],
			'eqeqeq': 'warn',
			'no-alert': 'warn',
			'no-unmodified-loop-condition': 'error',
			'yoda': ['warn', 'never', {exceptRange: true}],
			'@stylistic/spaced-comment': ['warn', 'always', {
				block: {markers: ['global', 'exported', 'eslint', 'eslint-disable', 'eslint-enable', 'eslint-env']},
				line: {exceptions: ['/'], markers: ['//////', 'eslint-disable-line', 'eslint-disable-next-line']},
			}],
			'prefer-spread': 'warn',
		},
	},
];
