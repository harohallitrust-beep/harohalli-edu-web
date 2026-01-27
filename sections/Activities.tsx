"use client";

import { motion } from "framer-motion";
import { Camera, Palette, Microscope, Globe } from "lucide-react";

const activities = [
  { image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", title: "Science Expo", description: "Annual exhibition showcasing student innovations.", icon: Microscope },
  { image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop", title: "Cultural Fest", description: "Celebrating diversity through dance and music.", icon: Palette },
  { image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop", title: "Study Tours", description: "Learning beyond walls with educational trips.", icon: Globe },
];

const Activities = () => {
  return (
    <section id="activities" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 uppercase tracking-tight">Activities & Events</h2>
            <div className="w-24 h-2 bg-accent rounded-full mb-8"></div>
            <p className="text-slate-700 text-xl font-medium leading-relaxed">
              Life at Harohalli is vibrant and full of learning opportunities. Explore the various activities that help our students discover their passions.
            </p>
          </div>
          <button className="px-8 py-3 bg-white border border-slate-200 text-primary font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center space-x-2 shadow-sm">
            <Camera size={20} />
            <span>View All Gallery</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {activities.map((activity, idx) => (
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
                alt={activity.title}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="p-3 bg-accent rounded-xl w-fit mb-4">
                  <activity.icon size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
                <p className="text-white/70">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
