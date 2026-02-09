"use client";

import { motion } from "framer-motion";
import { School, Users, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

const StatsSection = () => {
  const t = useTranslations("Stats");

  const stats = [
    {
      icon: School,
      value: "3+",
      label: t("institutions"),
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Users,
      value: "5000+",
      label: t("alumni"),
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Trophy,
      value: "100%",
      label: t("success_rate"),
      color: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="hidden md:block relative z-20 container mx-auto px-6 lg:px-12 mt-6 md:mt-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-3 gap-0 bg-white shadow-[0_25px_80px_-15px_rgba(30,58,138,0.2)] border border-slate-100/80 rounded-[2.5rem] overflow-hidden"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`relative group px-10 py-8 transition-all duration-500 hover:bg-slate-50 flex flex-col items-start gap-0 ${idx !== stats.length - 1 ? "border-r border-slate-100" : ""
              }`}
          >
            <div className={`p-3 rounded-xl bg-linear-to-br ${stat.color} text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-500`}>
              <stat.icon className="w-7 h-7" strokeWidth={2.5} />
            </div>

            <div className="space-y-0 text-left">
              <span className="block text-4xl font-black text-primary-dark tracking-tighter leading-none mb-1">
                {stat.value}
              </span>
              <span className="block text-slate-500 text-xs uppercase tracking-[0.15em] font-black">
                {stat.label}
              </span>
            </div>

            {/* Subtle decorative element */}
            <div className={`absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r ${stat.color} group-hover:w-full transition-all duration-700`}></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsSection;
