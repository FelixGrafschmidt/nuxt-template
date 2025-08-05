import antfu from '@antfu/eslint-config';
import * as eslint from '@eslint/js';
import * as globals from 'globals';
import * as vueParser from 'vue-eslint-parser'
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  eslint.configs.recommended,
  await antfu({
    unocss: true,
    rules: {
      'style/semi': 'off',
      'vue/block-order': ['error', {
        order: [['template', 'script'], 'style'],
      }],
    },
  }),
  {
    files: ['**/*.{ts}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'vue/multi-word-component-names': 'off',
      'no-case-declarations': 'off',
    },
    ignores: ['.nuxt/*'],
  },
);
