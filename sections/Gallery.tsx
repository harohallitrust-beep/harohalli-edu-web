"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { config } from "../lib/config";

const galleryData = [
  { id: 1, school: "School 1", type: "image", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop", title: "New Lab Inauguration" },
  { id: 2, school: "School 2", type: "image", src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop", title: "Sports Day 2023" },
  { id: 4, school: "PU College", type: "image", src: "/images/gallery/pu-college/pu-college-1.jpeg", title: "College Event" },
  { id: 5, school: "PU College", type: "image", src: "/images/gallery/pu-college/pu-college-2.jpeg", title: "Campus Life" },
  { id: 11, school: "School 2", type: "image", src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop", title: "Cultural Event" },
  { id: 12, school: "School 3", type: "image", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", title: "Play Area" },
];

const Gallery = () => {
  const t = useTranslations("Gallery");
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All"
    ? galleryData
    : galleryData.filter(item => item.school === filter);

  const categories = [
    { id: "All", label: t("filter_all") },
    { id: "PU College", label: t("pu_college") },
    { id: "School 1", label: "School 1" },
    { id: "School 2", label: "School 2" },
    { id: "School 3", label: "School 3" }
  ];

  return (
    <section id="gallery" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 italic leading-tight">{t("title")}</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.slice(0, 3).map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={cn(
                  "px-6 py-2 rounded-xl font-bold transition-all text-sm",
                  filter === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                )}
              >
                {category.label}
              </button>
            ))}
            <Link
              href={`/gallery?filter=${filter !== 'All' ? filter : ''}`}
              className="px-6 py-2 rounded-xl font-bold bg-primary/10 text-primary hover:bg-primary/20 transition-all text-sm flex items-center space-x-2"
            >
              <span>View Full Gallery</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-white text-center">
                  <div className="p-3 bg-white/20 rounded-2xl mb-4 backdrop-blur-md">
                    <ImageIcon size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.school}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Youtube Link CTA */}
        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">{t("youtube_subscribe")}</h3>
            <p className="text-white/60">{t("youtube_desc")}</p>
          </div>
          <a
            href={config.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center space-x-3"
          >
            <Play fill="white" size={20} />
            <span>{t("visit_youtube")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
