// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@pinia/nuxt", "@unocss/nuxt", "nuxt-icon", "@vueuse/nuxt", "@nuxt/eslint", "@una-ui/nuxt"],
	vite: {},
	unocss: {
		nuxtLayers: true,
	},
	una: {
		prefix: "U",
	},
	compatibilityDate: "2024-11-22",
});
