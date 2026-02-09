"use client";

import { motion } from "framer-motion";
import { BookOpen, Monitor, Coffee, Bus, Music, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap = {
  library: BookOpen,
  comp_lab: Monitor,
  transport: Bus,
  canteen: Coffee,
  art_music: Music,
  sports: Trophy
};

const Facilities = () => {
  const t = useTranslations("Facilities");

  const facilities = [
    { key: "library", icon: iconMap.library },
    { key: "comp_lab", icon: iconMap.comp_lab },
    { key: "transport", icon: iconMap.transport },
    { key: "canteen", icon: iconMap.canteen },
    { key: "art_music", icon: iconMap.art_music },
    { key: "sports", icon: iconMap.sports },
  ];

  return (
    <section id="facilities" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">{t("title")}</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <facility.icon size={28} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {t(`items.${facility.key}`)}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {t(`items.${facility.key}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
