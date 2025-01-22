import { defineConfig, presetWind, transformerDirectives } from 'unocss';
import { presetScrollbar } from 'unocss-preset-scrollbar';

export default defineConfig({
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
