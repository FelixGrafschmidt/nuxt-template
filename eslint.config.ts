import antfu from '@antfu/eslint-config';
import eslint from '@eslint/js';
import globals from 'globals';
import vueeslintparser from 'vue-eslint-parser';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  eslint.configs.recommended,
  antfu({ unocss: true, rules: { 'style/semi': 'off' } }),
  {
    files: ['**/*.{ts}'],
    languageOptions: {
      parser: vueeslintparser,
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
