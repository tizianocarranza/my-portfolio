/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark": "#3B3030",
				"light": "#ebe9e1",
			},
			height : {
				"1/2-screen": "50vh"
			},
			fontSize: {
				"big": "100px",
				"bigger": "140px",
				"extra-big": "150px",
				"giant": "170px"
			},
		},
	},
	plugins: [],
}
