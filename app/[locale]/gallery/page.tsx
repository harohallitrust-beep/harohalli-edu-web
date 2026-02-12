"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";

// Expanded gallery data (Mocking more images for the full gallery)
const allGalleryData = [
  { id: 4, school: "PU College", src: "/images/gallery/pu-college/pu-college-1.jpeg", title: "College Event" },
  { id: 5, school: "PU College", src: "/images/gallery/pu-college/pu-college-2.jpeg", title: "Campus Life" },
  { id: 6, school: "PU College", src: "/images/gallery/pu-college/pu-college-3.jpeg", title: "Student Activities" },
  { id: 7, school: "PU College", src: "/images/gallery/pu-college/pu-college-4.jpeg", title: "Classroom Session" },
  { id: 8, school: "PU College", src: "/images/gallery/pu-college/pu-college-5.jpeg", title: "Institutional Event" },
  { id: 9, school: "PU College", src: "/images/gallery/pu-college/pu-college-6.jpeg", title: "Cultural Program" },
  // Adding more from the 58 images available
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: 100 + i,
    school: "PU College",
    src: `/images/gallery/pu-college/pu-college-${i + 7}.jpeg`,
    title: `PU College Event ${i + 7}`
  })),
];

const GalleryContent = () => {
  const t = useTranslations("Gallery");
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || "All";
  const [filter, setFilter] = useState(initialFilter);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const filteredItems = filter === "All"
    ? allGalleryData
    : allGalleryData.filter(item => item.school === filter);

  const categories = [
    { id: "All", label: t("filter_all") },
    { id: "PU College", label: t("pu_college") },
  ];

  const relatedImages = selectedImage
    ? allGalleryData.filter(item => item.school === selectedImage.school && item.id !== selectedImage.id)
    : [];

  const navigateImage = (direction: 'next' | 'prev') => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex >= filteredItems.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = filteredItems.length - 1;

    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <div className={cn("min-h-screen bg-slate-50 py-20", selectedImage && "overflow-hidden")}>
      <div className="container mx-auto px-4">
        {/* Navigation Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-primary font-bold hover:translate-x-[-4px] transition-transform cursor-pointer"
          >
            <ArrowLeft size={20} />
            <span>{t("back_to_home")}</span>
          </button>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-primary mb-4 italic">{t("title")}</h1>
            <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="w-[100px] hidden md:block"></div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={cn(
                "px-8 py-3 rounded-2xl font-black transition-all text-sm uppercase tracking-wider shadow-sm",
                filter === category.id
                  ? "bg-primary text-white shadow-xl scale-105"
                  : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-lg bg-white cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                  <div className="p-3 bg-white/20 rounded-2xl w-fit mb-4 backdrop-blur-md">
                    <ImageIcon size={20} />
                  </div>
                  <h3 className="font-black text-xl mb-1">{item.title}</h3>
                  <p className="text-sm font-bold text-white/70 uppercase tracking-widest">{item.school}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-bold text-xl">No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 bg-white/10 rounded-full z-50 hidden md:block"
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 bg-white/10 rounded-full z-50 hidden md:block"
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            >
              <ChevronRight size={48} />
            </button>

            {/* Main Image Container */}
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl gap-8" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="relative w-full h-[50vh] md:h-[65vh] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain bg-slate-900"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-slate-950/80 to-transparent text-white">
                  <h2 className="text-3xl font-black mb-1">{selectedImage.title}</h2>
                  <p className="text-white/60 font-bold uppercase tracking-widest">{selectedImage.school}</p>
                </div>
              </motion.div>

              {/* Related Images Section */}
              <div className="w-full space-y-4">
                <h3 className="text-white/40 font-bold text-sm uppercase tracking-widest text-center px-4">Related Images from {selectedImage.school}</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 justify-center">
                  {allGalleryData.filter(img => img.school === selectedImage.school).map((img) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedImage(img)}
                      className={cn(
                        "relative shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all",
                        selectedImage.id === img.id ? "border-primary scale-110 shadow-lg" : "border-transparent opacity-50 hover:opacity-100"
                      )}
                    >
                      <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-primary">Loading Gallery...</div>}>
      <GalleryContent />
    </Suspense>
  );
}
