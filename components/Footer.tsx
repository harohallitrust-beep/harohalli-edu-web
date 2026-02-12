"use client";

import { Link } from "@/i18n/routing";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { NAV_LINKS, FOOTER_RESOURCES } from "@/lib/constants";

const Footer = () => {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navbar");

  const quickLinks = NAV_LINKS.slice(0, 5).map(link => ({
    ...link,
    name: navT(link.key)
  }));

  const resources = FOOTER_RESOURCES.map(link => ({
    ...link,
    name: t(link.nameKey)
  }));

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tight">{navT("trust_name")}</h3>
            <p className="text-white/60 leading-relaxed font-medium">
              {t("mission_short")}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-300">{t("quick_links")}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={`/${link.href}`} className="text-white/60 hover:text-white transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-300">{t("resources")}</h4>
            <ul className="space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link href={`/${link.href}`} className="text-white/60 hover:text-white transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-300">{t("contact_info")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4 text-white/60">
                <MapPin className="text-blue-300 shrink-0" size={20} />
                <span className="font-medium">Harohalli, Bangalore, Karnataka</span>
              </li>
              <li className="flex items-center space-x-4 text-white/60">
                <Phone className="text-blue-300 shrink-0" size={20} />
                <span className="font-medium">+91 12345 67890</span>
              </li>
              <li className="flex items-center space-x-4 text-white/60">
                <Mail className="text-blue-300 shrink-0" size={20} />
                <span className="font-medium">info@harohalli-trust.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} {navT("trust_name")}. {t("all_rights_reserved")}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex space-x-8 text-sm text-white/40 font-medium">
              <Link href="#" className="hover:text-white transition-colors">{t("privacy_policy")}</Link>
              <Link href="#" className="hover:text-white transition-colors">{t("terms_of_service")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
