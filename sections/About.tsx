"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, GraduationCap, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schools = [
  {
    id: "school1",
    name: "Harohalli Central School",
    details: "Affiliated with CBSE, focusing on holistic development and modern pedagogical techniques.",
    staff: [
      { name: "Dr. Rajesh Kumar", role: "Principal", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
      { name: "Ms. Sunita Sharma", role: "Vice Principal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
      { name: "Mr. Amit Singh", role: "Dept. Head", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
    ]
  },
  {
    id: "school2",
    name: "Harohalli High School",
    details: "Established in 1995, following the state curriculum with a strong emphasis on academic discipline.",
    staff: [
      { name: "Ms. Priya Reddy", role: "Principal", image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop" },
      { name: "Mr. Ramesh Babu", role: "Sr. Teacher", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
    ]
  },
  {
    id: "school3",
    name: "Little Flower Kindergarten",
    details: "A playful environment for our youngest learners to Bloom and Grow.",
    staff: [
      { name: "Ms. Ananya Das", role: "Coordinator", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" },
    ]
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState<"trust" | "schools">("trust");
  const [activeSchool, setActiveSchool] = useState(schools[0].id);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">About Us</h2>
          <div className="w-20 h-1.5 bg-primary-light mx-auto rounded-full"></div>
        </div>

        {/* Main Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-white rounded-2xl shadow-xl border border-slate-100">
            <button
              onClick={() => setActiveTab("trust")}
              className={cn(
                "px-8 py-4 rounded-xl font-bold transition-all flex items-center space-x-2 text-lg",
                activeTab === "trust" ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-primary"
              )}
            >
              <Building2 size={22} />
              <span>The Trust</span>
            </button>
            <button
              onClick={() => setActiveTab("schools")}
              className={cn(
                "px-8 py-4 rounded-xl font-bold transition-all flex items-center space-x-2 text-lg",
                activeTab === "schools" ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-primary"
              )}
            >
              <GraduationCap size={22} />
              <span>Group of Schools</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "trust" ? (
            <motion.div
              key="trust-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-8">
                <h3 className="text-2xl md:text-5xl font-black text-primary-dark leading-tight">Empowering Minds Since 1995</h3>
                <p className="text-slate-700 text-xl leading-relaxed font-medium">
                  Founded with a vision to make quality education accessible to every child, Harohalli Educational Trust has been a beacon of knowledge for over 25 years. We believe in nurturing not just students, but future leaders who are ethically grounded and socially responsible.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 card-shadow">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                      <Users className="text-primary" size={28} />
                    </div>
                    <h4 className="font-bold text-primary text-xl mb-3">Expert Trustees</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">Led by dedicated educators and social reformers.</p>
                  </div>
                  <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 card-shadow">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                      <GraduationCap className="text-primary" size={28} />
                    </div>
                    <h4 className="font-bold text-primary text-xl mb-3">Holistic Growth</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">Focusing on physical, mental, and spiritual well-being.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=2070&auto=format&fit=crop"
                  alt="Trust Campus"
                  className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 hidden md:block">
                  <span className="text-5xl font-black text-primary block mb-1">25+</span>
                  <span className="text-slate-500 font-bold tracking-wide uppercase text-sm">Years of Legacy</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="schools-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* School Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {schools.map((school) => (
                  <button
                    key={school.id}
                    onClick={() => setActiveSchool(school.id)}
                    className={cn(
                      "px-8 py-3 rounded-2xl font-bold border-2 transition-all text-lg",
                      activeSchool === school.id
                        ? "bg-primary-light/5 border-primary-light text-primary"
                        : "border-slate-100 text-slate-400 hover:border-slate-200"
                    )}
                  >
                    {school.name}
                  </button>
                ))}
              </div>

              {/* School Details */}
              {schools.map((school) => (
                activeSchool === school.id && (
                  <div key={school.id} className="space-y-16">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                      <h4 className="text-3xl font-bold text-primary">{school.name}</h4>
                      <p className="text-slate-600 text-lg leading-relaxed">{school.details}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {school.staff.map((member, idx) => (
                        <div key={idx} className="bg-white rounded-4xl p-8 shadow-sm border border-slate-100 card-shadow flex items-center space-x-6">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                          />
                          <div className="space-y-1">
                            <h5 className="font-extrabold text-primary text-xl">{member.name}</h5>
                            <p className="text-primary-light font-bold uppercase tracking-wider text-xs">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
