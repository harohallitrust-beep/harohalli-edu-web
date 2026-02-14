"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { Menu, X, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { config } from "@/lib/config";
import { NAV_LINKS } from "@/lib/constants";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = NAV_LINKS.map(link => ({
    ...link,
    name: t(link.key),
    children: link.children?.map(subLink => ({
      ...subLink,
      name: t(subLink.key)
    }))
  }));

  const toggleMobileCategory = (key: string) => {
    setExpandedMobileCategory(expandedMobileCategory === key ? null : key);
  };

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
          className="flex items-center space-x-3 group"
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 group-hover:scale-110 transition-transform bg-linear-to-br from-white to-blue-50 shadow-lg">
            <img src="/images/logo/logo-128.png" alt="HES Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-lg md:text-xl xl:text-2xl font-black tracking-tight text-white uppercase italic leading-none max-w-[200px] md:max-w-none">
            {t("trust_name")}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <div
              key={link.key}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.children ? (
                <div className="flex items-center space-x-1 cursor-pointer py-4">
                  <span className={cn(
                    "text-sm font-bold tracking-wide transition-colors whitespace-nowrap",
                    scrolled ? "text-white hover:text-blue-300" : "text-white/90 hover:text-white"
                  )}>
                    {link.name}
                  </span>
                  <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === link.key && "rotate-180")} />

                  <AnimatePresence>
                    {activeDropdown === link.key && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] py-4 border border-slate-100 overflow-hidden z-50"
                      >
                        {link.children.map((subLink) => (
                          <Link
                            key={subLink.key}
                            href={`/${subLink.href}`}
                            className="block px-6 py-2.5 text-sm font-bold text-slate-600 hover:text-primary hover:bg-blue-50/50 transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={`/${link.href}`}
                  className={cn(
                    "text-sm font-bold tracking-wide transition-colors block py-4 whitespace-nowrap",
                    scrolled ? "text-white hover:text-blue-300" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden transition-colors p-2 -mr-2",
            scrolled ? "text-white" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-[60px] md:top-[80px] bg-white z-[100]"
          >
            <div className="flex flex-col p-6 space-y-2 h-full overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.key} className="border-b border-slate-50 last:border-0">
                  {link.children ? (
                    <div className="py-2">
                      <button
                        onClick={() => toggleMobileCategory(link.key)}
                        className="w-full flex justify-between items-center py-3 text-lg font-black text-primary uppercase tracking-tight"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={20}
                          className={cn("transition-transform duration-300 text-accent", expandedMobileCategory === link.key && "rotate-180")}
                        />
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ height: expandedMobileCategory === link.key ? "auto" : 0 }}
                        className="overflow-hidden bg-slate-50/50 rounded-2xl px-2"
                      >
                        <div className="grid grid-cols-1 gap-1 py-2">
                          {link.children.map((subLink) => (
                            <Link
                              key={subLink.key}
                              href={`/${subLink.href}`}
                              className="text-base font-bold text-slate-600 py-3 flex items-center px-4 hover:bg-white rounded-xl transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <Link
                      href={`/${link.href}`}
                      className="text-lg font-black text-primary py-5 block uppercase tracking-tight"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-auto pt-8 pb-12 space-y-6">
                <div className="flex justify-between items-center bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <span className="text-xs font-black text-primary uppercase tracking-widest italic">Organization</span>
                  <LanguageSwitcher className="text-primary border-primary/20 bg-white hover:bg-primary/5" />
                </div>

                <div className="flex justify-center space-x-6">
                  <Link href="#" className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Facebook size={24} /></Link>
                  <Link href="#" className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Instagram size={24} /></Link>
                  <Link href="#" className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Linkedin size={24} /></Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
