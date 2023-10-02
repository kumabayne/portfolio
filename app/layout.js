import { Lato, Josefin_Sans as Title } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
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
            <body className={`${lato.className}`}>
                <header className="sticky top-0 w-full z-50">
                    <Navigation />
                </header>
                {children}
                <Footer />
            </body>
        </html>
    );
}
