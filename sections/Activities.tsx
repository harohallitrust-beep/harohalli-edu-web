"use client";

import { motion } from "framer-motion";
import { Camera, Palette, Microscope, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { ACTIVITIES_DATA } from "@/lib/constants";

const iconMap = {
  science: Microscope,
  cultural: Palette,
  tours: Globe
};

const Activities = () => {
  const t = useTranslations("Activities");
  const activitiesData = ACTIVITIES_DATA.map(activity => ({
    ...activity,
    icon: iconMap[activity.key as keyof typeof iconMap]
  }));



  return (
    <section id="activities" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 uppercase tracking-tight">{t("title")}</h2>
            <div className="w-24 h-2 bg-accent rounded-full mb-8"></div>
            <p className="text-slate-700 text-xl font-medium leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
          <button className="px-8 py-3 bg-white border border-slate-200 text-primary font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center space-x-2 shadow-sm">
            <Camera size={20} />
            <span>{t("view_all")}</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {activitiesData.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img
                src={activity.image}
                alt={t(`items.${activity.key}`)}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="p-3 bg-accent rounded-xl w-fit mb-4">
                  <activity.icon size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t(`items.${activity.key}`)}</h3>
                <p className="text-white/70">{t(`items.${activity.key}_desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
