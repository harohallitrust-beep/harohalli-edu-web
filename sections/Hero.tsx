"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const imageUrls = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg"
];

const Hero = () => {
  const t = useTranslations("Hero");
  const [current, setCurrent] = useState(0);

  // Get translated slides and merge with image URLs
  const slides = t.raw("slides").map((slide: any, idx: number) => ({
    ...slide,
    url: imageUrls[idx]
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[current].url}')` }}
          >
            {/* Stronger overlay for better contrast */}
            <div className="absolute inset-0 bg-linear-to-r from-primary-dark/90 via-primary-dark/60 to-transparent"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 px-6 lg:px-12 pt-24 md:pt-32">
        <div className="max-w-4xl">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-bold text-sm mb-6 backdrop-blur-md uppercase tracking-widest">
              {t("est")}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] text-white">
              {slides[current].title} <br />
              <span className="text-trust-blue-light">{slides[current].highlight}</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium">
              {slides[current].description}
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#registration"
                className="px-10 py-5 bg-accent text-white font-black rounded-2xl shadow-2xl hover:bg-blue-600 transition-all flex items-center group w-full sm:w-auto justify-center text-lg"
              >
                {t("cta_admission")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </a>
              <a
                href="#about"
                className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white border border-white/20 font-black rounded-2xl hover:bg-white/20 transition-all w-full sm:w-auto justify-center text-lg"
              >
                {t("cta_explore")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex space-x-4">
        <button onClick={prevSlide} className="p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all border border-white/10">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all border border-white/10">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
