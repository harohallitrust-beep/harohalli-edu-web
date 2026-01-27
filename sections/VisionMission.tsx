"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const VisionMission = () => {
  return (
    <section id="vision" className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              Our Vision & <br /> <span className="text-blue-300">Mission</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Guided by our motto of &quot;Knowledge is Power,&quot; we are committed to building a brighter future through academic excellence and personal growth.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="p-3 bg-accent rounded-xl shrink-0">
                  <Eye className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-200">Our Vision</h3>
                  <p className="text-white/60 leading-relaxed">
                    To be a globally recognized center of education that empowers students to achieve excellence in all facets of life while maintaining strong cultural and ethical values.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="p-3 bg-accent rounded-xl shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-200">Our Mission</h3>
                  <p className="text-white/60 leading-relaxed">
                    To provide a nurturing environment where students are encouraged to explore their potential, develop critical thinking, and build the character necessary to serve society.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
                alt="Students"
                className="rounded-2xl h-64 w-full object-cover"
              />
              <div className="p-8 bg-blue-800 rounded-2xl">
                <ShieldCheck size={40} className="text-blue-300 mb-4" />
                <h4 className="font-bold text-xl text-white">Ethical Values</h4>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="p-8 bg-accent rounded-2xl">
                <h4 className="text-4xl font-black text-white mb-2">100%</h4>
                <p className="font-bold text-white/80">Commitment to Growth</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop"
                alt="Learning"
                className="rounded-2xl h-64 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
