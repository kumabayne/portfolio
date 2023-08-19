import { Lato, Josefin_Sans as Title } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SocialNav from "./components/SocialNav";
import "./globals.css";

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

const title = Title({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-title",
});

export const metadata = {
    title: "Kuma Bayne - Porfolio",
    description:
        "Crafting digital experiences that blend creativity and functionality. I'm a front-end engineer, utilizing a diverse range of technologies to build web applications.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${title.variable} scroll-smooth`}>
            <body
                className={`${lato.className} bg-light-pattern relative before:fixed before:border-8 before:border-white before:inset-0 before:pointer-events-none before:z-0`}
            >
                <header className="mb-6 sticky top-0 w-full z-10 md:mb-0">
                    <Navigation />
                </header>
                {children}
                <Footer />
                <SocialNav className="bg-dark-pattern fixed flex-col gap-4 hidden px-3.5 py-3 left-2 top-1/2 -translate-y-1/2 xl:flex" />
            </body>
        </html>
    );
}
