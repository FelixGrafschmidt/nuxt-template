module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"@nuxtjs/eslint-config-typescript",
		"plugin:vue/vue3-recommended",
		"plugin:prettier/recommended",
		"plugin:vue/base",
		"plugin:nuxt/recommended",
		"@unocss",
	],
	plugins: ["prettier", "@typescript-eslint", "vitest"],
	// add your custom rules here
	rules: {
		"no-console": "off",
		"no-debugger": "off",
		"vue/multi-word-component-names": "off",
		"no-case-declarations": "off",
	},
	ignorePatterns: [".nuxt/"],
};
