/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light': '#fbfcfd',
				'medium': '#203A43',
				'dark': '#0F2027',
			},
			backgroundImage: {
				'rainbow-gradient': 'linear-gradient(to right, #FFB3BA, #FFDFBA, #FFFFBA, #BAFFC9, #BAE1FF)',
			  },
			height: {
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
