"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050335102-c3251d420f2b?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 px-6 lg:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground font-semibold text-sm mb-6">
            ESTABLISHED 1995
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Nurturing Excellence, <br />
            <span className="text-blue-300">Empowering Futures.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium">
            At Harohalli Educational Trust, we provide more than just education. We build the foundation for a lifetime of success and character.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#registration"
              className="px-8 py-4 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-all flex items-center group w-full sm:w-auto justify-center"
            >
              Apply for Admission
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-lg hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
            >
              Explore Our Schools
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-10 left-0 w-full hidden md:block">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="text-center">
              <span className="block text-3xl font-bold text-white mb-1">3+</span>
              <span className="text-white/60 text-sm uppercase tracking-wider font-semibold">Institutions</span>
            </div>
            <div className="text-center border-x border-white/10">
              <span className="block text-3xl font-bold text-white mb-1">5000+</span>
              <span className="text-white/60 text-sm uppercase tracking-wider font-semibold">Alumni</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-white mb-1">100%</span>
              <span className="text-white/60 text-sm uppercase tracking-wider font-semibold">Result Track Record</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
