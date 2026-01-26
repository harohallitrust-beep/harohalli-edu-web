"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Medal } from "lucide-react";

const toppers = [
  { name: "Rahul S.", class: "Grade 10", marks: "98.4%", school: "Central School", image: "https://images.unsplash.com/photo-1544717297-fa154da09f9b?q=80&w=2070&auto=format&fit=crop" },
  { name: "Sneha V.", class: "Grade 12", marks: "97.8%", school: "High School", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop" },
  { name: "Karthik J.", class: "Grade 10", marks: "96.5%", school: "Central School", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
];

const Toppers = () => {
  return (
    <section id="toppers" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Academic Toppers</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Celebrating the academic excellence and hard work of our brightest stars.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-8 text-center border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group lg:first:scale-110 lg:first:z-10 bg-gradient-to-b from-white to-slate-50"
            >
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-accent rounded-full scale-110 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 p-3 bg-accent rounded-2xl text-white shadow-lg">
                  {idx === 0 ? <Trophy size={20} /> : <Medal size={20} />}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-2">{topper.name}</h3>
              <p className="text-accent font-bold mb-4 uppercase tracking-wider text-sm">{topper.class} • {topper.school}</p>

              <div className="inline-flex items-center space-x-2 px-6 py-2 bg-primary text-white rounded-full font-black text-xl shadow-lg">
                <Star size={18} fill="currentColor" />
                <span>{topper.marks}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 italic">
            &quot;Success is the sum of small efforts, repeated day in and day out.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Toppers;
