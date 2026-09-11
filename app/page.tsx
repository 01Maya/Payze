"use client";

import { useEffect, useState } from "react";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero, FloatingCards } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { navItems } from "./components/data";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sectionElements = navItems
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <Navbar
        active={active}
        menuOpen={menuOpen}
        scrolled={scrolled}
        onNavigate={go}
        onToggleMenu={() => setMenuOpen((open) => !open)}
      />
      <Hero go={go} />
      <FloatingCards go={go} />
      <About />
      <Services />
      <HowItWorks />
      <CTA go={go} />
      <Contact />
      <Footer go={go} />
    </main>
  );
}
