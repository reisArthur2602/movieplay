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
					'-400': '#3538CD',
				},

				grey: {
					'-50': '#EAECF5',
				},
			},
			fontSize: {
				cardTitle: {
					title: '1.75rem',
				},
			},
		},

		screens: {
			'sm': {'max': '52.125rem'} ,

			"md":{ 'max':'26.75rem'},
		},
	},
	plugins: [],
};
