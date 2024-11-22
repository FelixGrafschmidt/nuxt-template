import { presetScrollbar } from "unocss-preset-scrollbar";
import { presetWind, transformerDirectives, defineConfig } from "unocss";
import config from "@una-ui/nuxt/una.config";

export default defineConfig({
	...config,
	// presets

	// core options
	shortcuts: [],
	rules: [],
	presets: [
		presetWind(),
		presetScrollbar({
			// config
		}),
	],
	transformers: [transformerDirectives()],
});
