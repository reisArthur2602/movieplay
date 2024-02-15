/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {

				bluegray: {
					'-900': '#293056',
					'-800': '#3E4784',
					'-700': '#4E5BA6',
          '-600': '#9EA5D1',
				},

				gray: {
					'-50': '#EAECF5',
				},
			},
		},
	},
	plugins: [],
};
