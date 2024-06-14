/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
        colors: {
            'purple': '#57068c',
            'white': '#ffffff',
            'black': '#333333',
            'gray': '#F5F5F5',
            'grayer': '#dbdbdb',
        },
        fontFamily: {
            'sans':['Helvetica Neue','Helvetica','Arial','sans-serif'],
        },
	},
	plugins: [],
}
