"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

const LanguageSwitcher = ({ className }: { className?: string }) => {
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
        "bg-white/10 border border-white/20 text-white hover:bg-white/20",
        className
      )}
    >
      <Languages size={20} className={cn("shrink-0", locale === "en" ? "text-blue-300" : "text-blue-400")} />
      <span>{locale === "en" ? "ಕನ್ನಡ" : "English"}</span>
    </button>
  );
};

export default LanguageSwitcher;
