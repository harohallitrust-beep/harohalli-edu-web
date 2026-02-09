"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "kn" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all shadow-lg",
        "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
        "fixed bottom-24 right-6 z-50 md:bottom-10 md:right-10"
      )}
    >
      <Languages size={20} className="text-blue-300" />
      <span>{locale === "en" ? "ಕನ್ನಡ" : "English"}</span>
    </button>
  );
};

export default LanguageSwitcher;
