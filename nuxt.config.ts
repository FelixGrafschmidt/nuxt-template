// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@unocss/nuxt', '@nuxt/icon', '@vueuse/nuxt', '@nuxt/eslint'],
  vite: {},
  unocss: {
    nuxtLayers: true,
  },
  compatibilityDate: '2024-11-22',
  eslint: {
    config: {
      standalone: false,
    },
  },
});
