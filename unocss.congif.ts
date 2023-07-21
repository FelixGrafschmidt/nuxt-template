import { presetScrollbar } from "unocss-preset-scrollbar";
import { presetWind, presetAttributify, transformerDirectives, defineConfig } from "unocss";

export default defineConfig({
	// presets

	// core options
	shortcuts: [],
	rules: [],
	presets: [
		presetWind(),
		presetAttributify(),
		presetScrollbar({
			// config
		}),
	],
	transformers: [transformerDirectives()],
});
