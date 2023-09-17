/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                luxury: {
                    ...require("daisyui/src/theming/themes")["[data-theme=luxury]"],
                    "base-100": "#000",
                    "primary": "#F2C83B",
                },
            },
        ],
    },
}