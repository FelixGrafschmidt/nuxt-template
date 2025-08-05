// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  buildDir: import.meta.env.NUXT_BUILD_DIR || '.nuxt',
  modules: ['@pinia/nuxt', '@unocss/nuxt', '@nuxt/icon', '@vueuse/nuxt', '@nuxt/eslint'],
  vite: {},
  unocss: {
    nuxtLayers: true,
  },
  compatibilityDate: '2025-03-29',
  eslint: {
    config: {
      standalone: false,
    },
  },
});
