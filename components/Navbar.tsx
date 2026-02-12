"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { Menu, X, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { config } from "@/lib/config";
import { NAV_LINKS } from "@/lib/constants";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = NAV_LINKS.map(link => ({
    ...link,
    name: t(link.key)
  }));

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrolled ? "bg-primary shadow-2xl py-2" : "bg-linear-to-b from-primary-dark/80 via-primary-dark/40 to-transparent py-4 text-white"
      )}
    >
      {/* Top Bar */}
      <div className={cn("hidden md:block transition-all", scrolled ? "py-1" : "border-b border-white/10 py-1")}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-sm font-bold text-white">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <Phone size={14} className="text-blue-300" />
              <span>{config.contact.phones[1]}</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="flex items-center space-x-2">
                <Mail size={14} className="text-blue-300" />
                <span>{config.contact.email}</span>
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-blue-300 transition-colors"><Facebook size={16} /></Link>
            <Link href="#" className="hover:text-blue-300 transition-colors"><Instagram size={16} /></Link>
            <Link href="#" className="hover:text-blue-300 transition-colors"><Linkedin size={16} /></Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center mt-2">
        <Link
          href="/#home"
          className={cn(
            "text-2xl font-black tracking-tight transition-colors",
            scrolled ? "text-white" : "text-white"
          )}
        >
          {t("trust_name")}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${link.href}`}
              className={cn(
                "text-sm font-bold tracking-wide transition-colors",
                scrolled ? "text-white hover:text-blue-300" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden transition-colors",
            scrolled ? "text-white" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen border-t" : "max-h-0"
        )}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${link.href}`}
              className="text-lg font-medium text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex justify-end pt-2">
            <LanguageSwitcher className="text-primary border-primary/20 bg-primary/10 hover:bg-primary/20 w-fit" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
