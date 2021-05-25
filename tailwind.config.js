const darkmode = require("tailwindcss-dark-mode");
const forms = require("@tailwindcss/forms");
const scrollbar = require("tailwind-scrollbar");
const typography = require("tailwindcss-typography");

module.exports = {
	mode: "jit",
	theme: {
		extend: {},
		darkSelector: ".dark",
	},
	darkMode: "class",
	variants: {
		backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
		borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
		textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"],
		scrollbar: ["dark", "rounded"],
	},
	plugins: [darkmode(), forms, scrollbar, typography],
	purge: {
		// enable remove unused CSS only in production
		enabled: process.env.NODE_ENV === "production",
		// any file that may contain the reference of CSS styles by class name.
		content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.ts"],
	},
};
