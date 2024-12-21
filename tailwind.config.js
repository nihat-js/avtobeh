/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				accent: '#3E3E3E', // Primary Accent (Red-Orange)
				accentLight: '#FF7F51', // Light Accent (Soft Coral)
				accentDark: '#D1481E', // Dark Accent (Deep Red-Orange)

				// Neutral Colors
				neutral: {
					light: '#FFE4D1', // Light Neutral (Soft Peach)
					medium: '#F2C6A1', // Medium Neutral (Warm Beige)
					dark: '#333333', // Dark Neutral (Rich Charcoal)
				},

				// Additional Support Colors
				mutedAccent: '#F2A29B', // Muted Red-Orange
				lightOrange: '#FFB87C', // Light Orange (for hover)
				offWhite: '#FAF4EC', // Off-White (general backgrounds)
			}
		}
	},
	plugins: [
		require('daisyui'),
		require("tailwindcss-animate")
	],
};
