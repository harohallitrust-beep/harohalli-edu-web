"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, GraduationCap, Building2, History, Award, BookOpen, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const schoolImages = [
  {
    id: "school1",
    staffImages: [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "school2",
    staffImages: [
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    ]
  },
  {
    id: "school3",
    staffImages: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
    ]
  }
];

const About = () => {
  const t = useTranslations("About");
  const pucT = useTranslations("PUCollege");
  const [activeTab, setActiveTab] = useState<"trust" | "schools">("trust");
  const [activeSchool, setActiveSchool] = useState("school1");

  const schoolsData = [
    {
      id: "school1",
      name: t("schools.central"),
      details: t("schools.central_desc"),
      staff: [
        { name: "Smt. Roopa A P", role: t("roles.principal"), image: "/images/staff/placeholder-staff.jpg" },
        { name: "Smt. Kavitha N", role: t("roles.coordinator"), image: "/images/staff/placeholder-staff.jpg" },
      ]
    },
    {
      id: "school2",
      name: t("schools.high"),
      details: t("schools.high_desc"),
      staff: [
        { name: "Smt. Roopa A P", role: t("roles.principal"), image: "/images/staff/placeholder-staff.jpg" },
        { name: "Smt. Sunanda M M", role: t("roles.coordinator"), image: "/images/staff/placeholder-staff.jpg" },
      ]
    },
    {
      id: "school3",
      name: t("schools.kg"),
      details: t("schools.kg_desc"),
      staff: [
        { name: "Smt. Lavanya", role: t("roles.principal"), image: "/images/staff/placeholder-staff.jpg" },
        { name: "Smt. Shwetha", role: t("roles.coordinator"), image: "/images/staff/placeholder-staff.jpg" },
      ]
    },
    {
      id: "puc",
      name: pucT("title"),
      details: pucT("history_desc"),
      staff: [
        { name: "Sri. Puttegowda M C", role: pucT("staff.puttegowda.role"), image: "/images/staff/puttegowda-m-c.jpg" },
        { name: "Smt. Swarnagowri S.", role: pucT("staff.swarnagowri.role"), image: "/images/staff/swarnagowri-s.jpg" },
        { name: "Smt. Anitha H B", role: pucT("staff.anitha.role"), image: "/images/staff/anitha-h-b.jpg" },
        { name: "Smt. Radha M.M.", role: pucT("staff.radha.role"), image: "/images/staff/radha-m-m.jpeg" },
        { name: "Sri. Nagendraswamy G.", role: pucT("staff.nagendraswamy.role"), image: "/images/staff/nagendraswamy-j.jpg" },
        { name: "Kum. Harshitha R.", role: pucT("staff.harshitha.role"), image: "/images/staff/harshitha-r.jpg" },
        { name: "Smt. Rathnamma", role: pucT("staff.rathnamma.role"), image: "/images/staff/placeholder-staff.jpg" },
        { name: "Sri. Raju C.K.", role: pucT("staff.raju.role"), image: "/images/staff/placeholder-staff.jpg" },
        { name: "Sri. Naveen Kumar", role: pucT("staff.naveen.role"), image: "/images/staff/placeholder-staff.jpg" },
        { name: "Smt. M. Begum", role: pucT("staff.begum.role"), image: "/images/staff/placeholder-staff.jpg" },
      ]
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">{t("title")}</h2>
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
              <span>{t("the_trust")}</span>
            </button>
            <button
              onClick={() => setActiveTab("schools")}
              className={cn(
                "px-8 py-4 rounded-xl font-bold transition-all flex items-center space-x-2 text-lg",
                activeTab === "schools" ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-primary"
              )}
            >
              <GraduationCap size={22} />
              <span>{t("group_of_schools")}</span>
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
                <h3 className="text-2xl md:text-5xl font-black text-primary-dark leading-tight">{t("trust_heading")}</h3>
                <p className="text-slate-700 text-xl leading-relaxed font-medium">
                  {t("trust_description")}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 card-shadow">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                        <Users className="text-primary" size={28} />
                      </div>
                    </div>
                    <h4 className="font-bold text-primary text-xl mb-3">{t("trustee_title")}</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">{t("trustee_desc")}</p>
                  </div>
                  <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 card-shadow">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                      <GraduationCap className="text-primary" size={28} />
                    </div>
                    <h4 className="font-bold text-primary text-xl mb-3">{t("growth_title")}</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">{t("growth_desc")}</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10"></div>
                <img
                  src="/images/about/trust-campus.jpg"
                  alt="Trust Campus"
                  className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 hidden md:block">
                  <span className="text-5xl font-black text-primary block mb-1">25+</span>
                  <span className="text-slate-500 font-bold tracking-wide uppercase text-sm">{t("legacy_years")}</span>
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
                {schoolsData.map((school) => (
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
              {schoolsData.map((school) => (
                activeSchool === school.id && (
                  <div key={school.id} className="space-y-16">
                    {school.id === "puc" ? (
                      <div className="space-y-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8">
                            <h4 className="text-3xl font-bold text-primary flex items-center space-x-3">
                              <History className="text-primary-light" size={28} />
                              <span>{pucT("history_title")}</span>
                            </h4>
                            <p className="text-slate-600 text-lg leading-relaxed">{school.details}</p>

                            <div className="grid grid-cols-3 gap-3">
                              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                <Award className="text-amber-500 mx-auto mb-2" size={24} />
                                <span className="text-slate-700 font-bold text-xs block leading-tight">{pucT("stats.years")}</span>
                              </div>
                              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                <BookOpen className="text-blue-500 mx-auto mb-2" size={24} />
                                <span className="text-slate-700 font-bold text-xs block leading-tight">{pucT("stats.results")}</span>
                              </div>
                              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                <History className="text-emerald-500 mx-auto mb-2" size={24} />
                                <span className="text-slate-700 font-bold text-xs block leading-tight">{pucT("stats.established")}</span>
                              </div>
                            </div>

                            <div className="p-6 bg-primary rounded-3xl text-white flex items-center space-x-4">
                              <Laptop size={28} className="shrink-0" />
                              <div className="text-sm">
                                <h5 className="font-bold">New Combined Stream Available</h5>
                                <p className="opacity-80">EBACS - Commerce with Computer Science</p>
                              </div>
                            </div>
                          </div>

                          <div className="relative">
                            <img
                              src="/images/pu-college/building.jpg"
                              alt="PU College"
                              className="rounded-3xl shadow-xl w-full h-80 object-cover"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-white px-6 py-4 rounded-2xl shadow-lg border border-slate-50">
                              <span className="text-2xl font-black text-primary block">90%</span>
                              <span className="text-slate-500 font-bold uppercase text-[10px]">Consistent Results</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <h5 className="text-2xl font-bold text-primary text-center">{pucT("staff_title")}</h5>
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {school.staff.map((member, idx) => (
                              <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 card-shadow flex flex-col items-center text-center space-y-4">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-20 h-20 rounded-2xl object-cover shadow-md"
                                />
                                <div>
                                  <h6 className="font-extrabold text-primary text-sm">{member.name}</h6>
                                  <p className="text-primary-light font-bold uppercase tracking-wider text-[10px] mt-1">{member.role}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="text-center max-w-3xl mx-auto space-y-4">
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
                      </>
                    )}
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
