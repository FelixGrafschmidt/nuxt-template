import { NuxtConfig } from "@nuxt/types";
import { NuxtOptionsLoaders, NuxtWebpackEnv } from "@nuxt/types/config/build";
import { Configuration as WebpackConfiguration } from "@nuxt/types/node_modules/@types/webpack";
const config: NuxtConfig = {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "nuxt-template",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/storeProxies"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: ["~/components"],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
		// https://go.nuxtjs.dev/stylelint
		"@nuxtjs/stylelint-module",
		// https://go.nuxtjs.dev/tailwindcss
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"nuxt-vite",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://go.nuxtjs.dev/pwa
		"@nuxtjs/pwa",
		// https://go.nuxtjs.dev/content
		"@nuxt/content",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: "en",
		},
	},

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extend(
			config: WebpackConfiguration,
			ctx: {
				loaders: NuxtOptionsLoaders;
			} & NuxtWebpackEnv
		) {
			if (ctx.isDev) {
				config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
			}
		},
	},
	colorMode: {
		classSuffix: "",
		fallback: "dark",
	},
	purgeCSS: {
		whitelist: ["dark-mode"],
	},
};

export default config;
