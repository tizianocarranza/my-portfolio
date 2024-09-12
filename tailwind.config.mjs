/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"detail": "#FF8225",
				"dark": "#757575",
				"light": "#cbcbcb" 
			},
			height : {
				"1/2-screen": "50vh"
			},
		},
	},
	plugins: [],
}
