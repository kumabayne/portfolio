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
                "brush-1": "url(/images/backgrounds/brush-1.svg)",
                "brush-2": "url(/images/backgrounds/brush-2.svg)",
                "brush-3": "url(/images/backgrounds/brush-3.svg)",
                "brush-4": "url(/images/backgrounds/brush-4.svg)",
                "dark-pattern": "url(/images/backgrounds/ep_naturalblack.webp)",
                "light-pattern": "url(/images/backgrounds/p1.webp)",
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
