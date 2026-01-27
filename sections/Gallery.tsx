"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryData = [
  { id: 1, school: "School 1", type: "image", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop", title: "New Lab Inauguration" },
  { id: 2, school: "School 2", type: "image", src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop", title: "Sports Day 2023" },
  { id: 3, school: "School 3", type: "video", thumbnail: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop", url: "https://youtube.com", title: "Kid's Annual Performance" },
  { id: 4, school: "School 1", type: "image", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1964&auto=format&fit=crop", title: "Morning Assembly" },
  { id: 5, school: "School 2", type: "image", src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop", title: "Cultural Event" },
  { id: 6, school: "School 3", type: "image", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", title: "Play Area" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All"
    ? galleryData
    : galleryData.filter(item => item.school === filter);

  const schools = ["All", "School 1", "School 2", "School 3"];

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Gallery</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>

          <div className="flex flex-wrap justify-center gap-4">
            {schools.map((school) => (
              <button
                key={school}
                onClick={() => setFilter(school)}
                className={cn(
                  "px-6 py-2 rounded-full font-bold transition-all",
                  filter === school
                    ? "bg-primary text-white shadow-lg"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                )}
              >
                {school}
              </button>
            ))}
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
                  src={item.type === "image" ? item.src : item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-white text-center">
                  <div className="p-3 bg-white/20 rounded-2xl mb-4 backdrop-blur-md">
                    {item.type === "video" ? <Play fill="currentColor" size={24} /> : <ImageIcon size={24} />}
                  </div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-white/70 mb-4">{item.school}</p>
                  {item.type === "video" ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-bold bg-accent px-4 py-2 rounded-lg"
                    >
                      <ExternalLink size={14} />
                      <span>Watch Video</span>
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Youtube Link CTA */}
        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Subscribe to our YouTube Channel</h3>
            <p className="text-white/60">Catch all the latest school events and performances live!</p>
          </div>
          <a
            href="#"
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center space-x-3"
          >
            <Play fill="white" size={20} />
            <span>Visit YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
