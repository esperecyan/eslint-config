'use strict';

/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
	extends: 'eslint:recommended',
	env: {
		es2022: true,
		browser: true,
	},
	parserOptions: {
		sourceType: 'module',
	},
	rules: {
		'no-restricted-syntax': [
			'error',
			{
				selector: 'StaticBlock',
				message: 'Safari (2023-03現在最新のバージョン16) ではクラスの静的初期化ブロックがサポートされていません。',
			},
		],

		// ECMAScript 2015
		'no-var': 'warn',
		'prefer-const': ['warn', {destructuring: 'all', ignoreReadBeforeAssign: true}],
		'no-use-before-define': ['error', {functions: false, classes: false}],
		'rest-spread-spacing': 'warn',
		'require-await': 'warn',
		'no-irregular-whitespace': ['error', {
			skipStrings: true,
			skipComments: true,
			skipRegExps: true,
			skipTemplates: true,
		}],

		// eslint:recommended の構文エラー以外を warn に
		'no-case-declarations': 'warn',
		'no-empty-pattern': 'warn',
		'no-fallthrough': 'warn',
		'no-global-assign': 'warn',
		'no-redeclare': 'warn',
		'no-self-assign': 'warn',
		'no-unused-labels': 'warn',
		'no-useless-catch': 'warn',
		'no-useless-escape': 'warn',
		'no-delete-var': 'warn',
		'no-shadow-restricted-names': 'warn',
		'no-unused-vars': 'warn',
		'no-mixed-spaces-and-tabs': 'warn',
		'no-class-assign': 'warn',
		'no-dupe-class-members': 'warn',
		'require-yield': 'warn',
		'no-constant-condition': ['warn', {checkLoops: false}],

		// strict mode
		'no-caller': 'error',
		'no-octal-escape': 'error',

		// PSR-1 風
		'unicode-bom': 'warn',
		'new-cap': ['warn', {capIsNewExceptions: ['DateTimeFormat']}],

		// PSR-2 風
		'camelcase': ['warn', {properties: 'never'}],
		'curly': 'warn',
		'no-multi-spaces': 'warn',
		'eol-last': 'warn',
		'keyword-spacing': 'warn',
		'linebreak-style': 'warn',
		'max-len': ['warn', {code: 120}],
		'max-statements-per-line': 'warn',
		'func-call-spacing': 'warn',
		'no-trailing-spaces': 'warn',
		'no-underscore-dangle': 'warn',
		'semi-spacing': 'warn',
		'space-before-blocks': 'warn',
		'space-before-function-paren': ['warn', {anonymous: 'always', named: 'never'}],
		'space-in-parens': 'warn',
		'indent': ['warn', 'tab', {SwitchCase: 1, outerIIFEBody: 'off', ignoredNodes: ['TemplateLiteral *']}],

		// その他
		'quotes': ['warn', 'single', {avoidEscape: true}],
		'dot-location': ['warn', 'property'],
		'eqeqeq': 'warn',
		'no-alert': 'warn',
		'no-floating-decimal': 'warn',
		'no-unmodified-loop-condition': 'error',
		'yoda': ['warn', 'never', {exceptRange: true}],
		'comma-dangle': ['warn', 'always-multiline'],
		'comma-style': 'warn',
		'new-parens': 'warn',
		'no-whitespace-before-property': 'warn',
		'operator-linebreak': ['warn', 'before'],
		'quote-props': ['warn', 'as-needed'],
		'semi': 'warn',
		'spaced-comment': ['warn', 'always', {
			block: {markers: ['global', 'exported', 'eslint', 'eslint-disable', 'eslint-enable', 'eslint-env']},
			line: {exceptions: ['/'], markers: ['//////', 'eslint-disable-line', 'eslint-disable-next-line']},
		}],
		'prefer-spread': 'warn',
	},
};
