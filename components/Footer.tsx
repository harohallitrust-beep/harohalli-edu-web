"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, GraduationCap } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <GraduationCap fill="white" size={24} />
              </div>
              <span>HAROHALLI</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering students with knowledge, values, and skills for a lifetime of success. Since 1995.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-accent rounded-full flex items-center justify-center transition-all"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {["Home", "About Us", "Vision & Mission", "Facilities", "Activities"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(/ /g, "")}`} className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              {["Registration", "Gallery", "Toppers", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(/ /g, "")}`} className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
              <li><Link href="/admin/login" className="hover:text-white transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>#42, Harohalli Educational Building,</li>
              <li>M.G. Road, Bangalore - 560001</li>
              <li className="pt-2">info@harohalli-trust.org</li>
              <li>+91 12345 67890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 Harohalli Educational Trust. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
