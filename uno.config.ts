import { defineConfig, presetWind3, transformerDirectives } from 'unocss';
import { presetScrollbar } from 'unocss-preset-scrollbar';

export default defineConfig({
  // presets

  // core options
  shortcuts: [],
  rules: [],
  presets: [
    presetWind3(),
    presetScrollbar({
      // config
    }),
  ],
  transformers: [transformerDirectives()],
});
