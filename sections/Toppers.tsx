"use client";

import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { TOPPERS_DATA } from "@/lib/constants";



const Toppers = () => {
  const t = useTranslations("Toppers");
  const toppersData = TOPPERS_DATA;
  return (
    <section id="toppers" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-primary/5 rounded-3xl mb-6">
            <Award className="text-primary w-10 h-10 mx-auto" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 uppercase tracking-tighter italic">{t("title")}</h2>
          <div className="w-40 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {toppersData.map((topper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                <Star size={120} strokeWidth={1} />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform"></div>
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-32 h-32 rounded-[2.5rem] object-cover relative z-10 shadow-xl"
                  />
                </div>
                <h3 className="text-2xl font-black text-primary mb-6">{topper.name}</h3>

                <div className="grid grid-cols-3 gap-6 w-full pt-6 border-t border-slate-50">
                  <div className="space-y-1">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">{t("marks")}</span>
                    <span className="block font-black text-primary">{topper.marks}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">{t("class")}</span>
                    <span className="block font-black text-primary">{topper.class}</span>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">{t("school")}</span>
                    <span className="block font-black text-primary truncate text-xs">{topper.school}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
