import withNuxt from "./.nuxt/eslint.config.mjs";
import vueeslintparser from "vue-eslint-parser";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import unocss from "@unocss/eslint-config/flat";

export default withNuxt(eslintPluginPrettierRecommended, unocss, {
	languageOptions: {
		parser: vueeslintparser,
		parserOptions: {
			ecmaVersion: "latest",
			parser: "@typescript-eslint/parser",
			sourceType: "module",
		},
	},
	rules: {
		"no-console": "off",
		"no-debugger": "off",
		"vue/multi-word-component-names": "off",
		"no-case-declarations": "off",
	},
	ignores: [".nuxt/*"],
});
