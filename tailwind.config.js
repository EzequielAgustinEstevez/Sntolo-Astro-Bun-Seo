/** @type {import('tailwindcss').Config} */
 const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}"],
	theme: {
		extend: {
			screens: {
				sm: "400px",
			},
			fontFamily: {
         sans: ["GrenzeGotisch-Regular", "Inter", ...defaultTheme.fontFamily.sans],
       },
		},
	},
	plugins: [],
};
