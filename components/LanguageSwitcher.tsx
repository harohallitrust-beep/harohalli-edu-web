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
        "flex items-center space-x-2 px-4 py-2 rounded-xl font-bold transition-all text-sm",
        "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20"
      )}
    >
      <Languages size={20} className="text-blue-300" />
      <span>{locale === "en" ? "ಕನ್ನಡ" : "English"}</span>
    </button>
  );
};

export default LanguageSwitcher;
