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
				'custom-gradient': 'radial-gradient(circle, #0F2027, #4B757B, #A8B7BC, #C4D8DC, #FBFCFD);',
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
