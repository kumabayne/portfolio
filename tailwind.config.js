/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "pixel-weave": "url(/images/backgrounds/pixel_weave.webp)",
            },
            fontFamily: {
                monospace: "monospace",
                title: ["var(--font-title)"],
            },
            gridTemplateRows: {
                layout: "repeat(100vh)",
            },
        },
    },
    plugins: [],
};
