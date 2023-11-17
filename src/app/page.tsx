'use client';
import { HomePage } from "@/components/home/HomePage";
import { Logo } from "../components/Logo";
import { AboutSection } from "../components/about/AboutSection";
import { ContactSection } from "../components/contact/ContactSection";
import { ServicesSection } from "../components/services/ServicesSection";

export default function Home() {
    return (
        <main>
            <HomePage />
            <div className="flex flex-col justify-between mt-16">
                <AboutSection />
                <ServicesSection />
                <ContactSection />
            </div>
        </main>
    );
}
