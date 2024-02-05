/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/pages/**/*.vue", "./app/components/**/*.vue"],
    plugins: [require("tailwind-fontawesome")],
    safelist: [
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
        "text-6xl",
        "text-7xl",
        "text-8xl",
        "text-9xl",
        "font-light",
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
            },
        },
    },
};
