import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/nav/NavBar";
import { Footer } from "../components/nav/Footer";
import { Playfair_Display } from "next/font/google";

const inter = Raleway({ subsets: ["latin"] });

const logoFont = Playfair_Display({
    weight: "500",
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-logo",
});

export const metadata: Metadata = {
    title: "MindfulWork",
    description: "Enterprise Wellness Trainings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${logoFont.variable} bg-default`}>
                <main className="relative">
                    <NavBar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
