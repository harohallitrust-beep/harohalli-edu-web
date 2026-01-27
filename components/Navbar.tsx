"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Vision & Mission", href: "#vision" },
    { name: "Facilities", href: "#facilities" },
    { name: "Activities", href: "#activities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Registration", href: "#registration" },
    { name: "Toppers", href: "#toppers" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4 text-white"
      )}
    >
      {/* Top Bar */}
      <div className={cn("hidden md:block border-b border-white/10 py-1 transition-all", scrolled ? "hidden" : "block")}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-sm font-medium">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 12345 67890</span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@harohalli-trust.org</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-blue-200 transition-colors"><Facebook size={16} /></Link>
            <Link href="#" className="hover:text-blue-200 transition-colors"><Instagram size={16} /></Link>
            <Link href="#" className="hover:text-blue-200 transition-colors"><Linkedin size={16} /></Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center mt-2">
        <Link
          href="#home"
          className={cn(
            "text-2xl font-black tracking-tight transition-colors",
            scrolled ? "text-primary" : "text-white"
          )}
        >
          HAROHALLI TRUST
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold transition-colors",
                scrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
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
            scrolled ? "text-primary" : "text-white"
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
              href={link.href}
              className="text-lg font-medium text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
