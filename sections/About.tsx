"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Users, GraduationCap, Building2, History, Award, BookOpen, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { SCHOOLS_DATA } from "@/lib/constants";


const AboutContent = () => {
  const t = useTranslations("About");
  const pucT = useTranslations("PUCollege");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<"trust" | "schools">("trust");
  const [activeSchool, setActiveSchool] = useState("school1");

  // Sync state from URL on load
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    const schoolParam = searchParams.get("school");

    if (tabParam === "trust" || tabParam === "schools") {
      setActiveTab(tabParam);
    }
    if (schoolParam) {
      setActiveSchool(schoolParam);
    }
  }, []);

  // Sync URL when state changes
  const handleTabChange = (tab: "trust" | "schools") => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams);
    params.set("tab", tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSchoolChange = (school: string) => {
    setActiveSchool(school);
    const params = new URLSearchParams(searchParams);
    params.set("tab", "schools");
    params.set("school", school);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const schoolsData = SCHOOLS_DATA.map(school => ({
    ...school,
    name: school.isPUC ? pucT(school.nameKey) : t(school.nameKey),
    details: school.isPUC ? pucT(school.descKey) : t(school.descKey),
    staff: school.staff.map(member => ({
      ...member,
      role: school.isPUC ? pucT(member.roleKey) : t(member.roleKey)
    }))
  }));

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
              onClick={() => handleTabChange("trust")}
              className={cn(
                "px-8 py-4 rounded-xl font-bold transition-all flex items-center space-x-2 text-lg",
                activeTab === "trust" ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-primary"
              )}
            >
              <Building2 size={22} />
              <span>{t("the_trust")}</span>
            </button>
            <button
              onClick={() => handleTabChange("schools")}
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
                    onClick={() => handleSchoolChange(school.id)}
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
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {school.staff.map((member, idx) => (
                              <div key={idx} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-100 card-shadow flex flex-col items-center text-center space-y-3 sm:space-y-4">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl object-cover shadow-md"
                                />
                                <div>
                                  <h6 className="font-extrabold text-primary text-xs sm:text-sm leading-tight">{member.name}</h6>
                                  <p className="text-primary-light font-bold uppercase tracking-wider text-[8px] sm:text-[10px] mt-1">{member.role}</p>
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                          {school.staff.map((member, idx) => (
                            <div key={idx} className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-8 shadow-sm border border-slate-100 card-shadow flex items-center space-x-4 sm:space-x-6">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-lg"
                              />
                              <div className="space-y-1">
                                <h5 className="font-extrabold text-primary text-lg sm:text-xl">{member.name}</h5>
                                <p className="text-primary-light font-bold uppercase tracking-wider text-[10px] sm:text-xs">{member.role}</p>
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

const About = () => {
  return (
    <Suspense>
      <AboutContent />
    </Suspense>
  );
};

export default About;
