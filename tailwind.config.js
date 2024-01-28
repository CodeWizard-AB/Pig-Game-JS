/** @type {import('tailwindcss').Config} */
export const content = ["./**/*.{html,js}"];
export const theme = {
	extend: {},
	theme: {
		fontFamily: {
			sans: ['"Nunito Sans", sans-serif'],
		},
	},
};
export const plugins = [require("daisyui")];
