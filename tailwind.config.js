/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				Roboto: ['Roboto Mono', 'monospace'],
				Inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
