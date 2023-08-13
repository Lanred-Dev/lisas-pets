/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            textColor: {
                brand: "#ff8bc9",
                primary: "#292e7f",
                secondary: "#f9efdc",
            },
            colors: {
                brand: {
                    DEFAULT: "#FF8BC9",
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FFFFFF",
                    300: "#FFDDEF",
                    400: "#FFB4DC",
                    500: "#FF8BC9",
                    600: "#FF53AF",
                    700: "#FF1B95",
                    800: "#E20079",
                    900: "#AA005B",
                    950: "#8E004C",
                },
                background: "#f9efdc",
                backgroundTransparent: "#f9efdc9e",
                backgroundSecondary: {
                    DEFAULT: "#292E7F",
                    50: "#C5C7EC",
                    100: "#B6B8E7",
                    200: "#979BDD",
                    300: "#787DD3",
                    400: "#5960C9",
                    500: "#3D44BD",
                    600: "#33399E",
                    700: "#292E7F",
                    800: "#1B1F55",
                    900: "#0E0F2A",
                    950: "#070815",
                },
                border: "#000000",
                button: "#333333",
                blue: "#77a2bc",
            },
            borderRadius: {
                normal: "10px",
            },
            fontFamily: {
                salmaPro: ["salmaPro", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("tailwind-children")],
    "tailwindCSS.includeLanguages": {
        Svelte: "html",
    },
};
