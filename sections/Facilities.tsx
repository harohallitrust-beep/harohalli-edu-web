"use client";

import { motion } from "framer-motion";
import { BookOpen, Monitor, Coffee, Bus, Music, Trophy } from "lucide-react";

const facilities = [
  { icon: BookOpen, name: "Modern Library", description: "Vast collection of books and digital resources." },
  { icon: Monitor, name: "Computer Lab", description: "State-of-the-art IT lab with high-speed internet." },
  { icon: Bus, name: "Safe Transport", description: "Own fleet of buses covering major routes." },
  { icon: Coffee, name: "Hygiene Canteen", description: "Healthy and nutritious meals for students." },
  { icon: Music, name: "Art & Music", description: "Dedicated studios for creative arts." },
  { icon: Trophy, name: "Sports Arena", description: "Facilities for indoor and outdoor sports." },
];

const Facilities = () => {
  return (
    <section id="facilities" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Facilities</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            We provide a comprehensive range of facilities designed to support the academic and personal growth of our students.
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
              <h3 className="text-xl font-bold text-primary mb-3">{facility.name}</h3>
              <p className="text-slate-500 leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
