/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"detail": "#cc7330",
				"dark": "#ababab",
				"light": "#cbcbcb" 
			},
			height : {
				"1/2-screen": "50vh"
			},
			fontSize: {
				"big": "100px",
				"bigger": "140px",
				"extra-big": "170px",
				"giant": "200px"
			},
		},
	},
	plugins: [],
}
