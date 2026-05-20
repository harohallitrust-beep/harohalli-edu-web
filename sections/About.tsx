"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Users, GraduationCap, Building2, History, Award, BookOpen, Laptop, Milestone, Lightbulb, CheckCircle2 } from "lucide-react";
import { cn, societyCompletedYears } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { SCHOOLS_DATA, SOCIETY_STAFF, PUC_TOPPERS_2024 } from "@/lib/constants";


const AboutContent = () => {
  const t = useTranslations("About");
  const pucT = useTranslations("PUCollege");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<"trust" | "schools" | "journey">("trust");
  const [activeSchool, setActiveSchool] = useState("school1");

  // Sync state from URL on load
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    const schoolParam = searchParams.get("school");

    if (tabParam === "trust" || tabParam === "schools" || tabParam === "journey") {
      setActiveTab(tabParam as "trust" | "schools" | "journey");
    }
    if (schoolParam) {
      setActiveSchool(schoolParam);
    }
  }, []);

  // Sync URL when state changes
  const handleTabChange = (tab: "trust" | "schools" | "journey") => {
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
    name: school.isPUC ? pucT(school.nameKey as any) : t(school.nameKey as any),
    details: school.isPUC ? pucT(school.descKey as any) : t(school.descKey as any),
    history: school.historyKey ? t(school.historyKey as any) : undefined,
    featuresTitle: school.featuresTitleKey ? t(school.featuresTitleKey as any) : undefined,
    features: school.featuresKeys ? school.featuresKeys.map(k => t(k as any)) : undefined,
    toppersTitle: school.toppersTitleKey ? t(school.toppersTitleKey as any) : undefined,
    toppers: school.toppers ? school.toppers.map(topper => ({
      ...topper,
      name: t(topper.nameKey as any),
      desc: t(topper.descKey as any)
    })) : undefined,
    staff: school.staff.map(member => ({
      ...member,
      name: school.isPUC ? pucT(member.nameKey as any) : t(member.nameKey as any),
      role: school.isPUC ? pucT(member.roleKey as any) : t(member.roleKey as any)
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
          <div className="flex p-1 bg-white rounded-2xl shadow-xl border border-slate-100 flex-wrap justify-center gap-2">
            <button
              onClick={() => handleTabChange("trust")}
              className={cn(
                "px-6 py-4 rounded-xl font-bold transition-all flex items-center space-x-2 text-lg",
                activeTab === "trust" ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-primary"
              )}
            >
              <Building2 size={22} />
              <span>{t("the_trust")}</span>
            </button>
            <button
              onClick={() => handleTabChange("journey")}
              className={cn(
                "px-6 py-4 rounded-xl font-bold transition-all flex items-center space-x-2 text-lg",
                activeTab === "journey" ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-primary"
              )}
            >
              <Milestone size={22} />
              <span>{t("history_vision.tab_title")}</span>
            </button>
            <button
              onClick={() => handleTabChange("schools")}
              className={cn(
                "px-6 py-4 rounded-xl font-bold transition-all flex items-center space-x-2 text-lg",
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
              className="w-full"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-5xl font-black text-primary-dark leading-tight">{t("trust_heading")}</h3>
                  <p className="text-slate-700 text-xl leading-relaxed font-medium">
                    {t("trust_description", { societyCompletedYears: societyCompletedYears() })}
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
                    <span className="text-5xl font-black text-primary block mb-1">{societyCompletedYears()}+</span>
                    <span className="text-slate-500 font-bold tracking-wide uppercase text-sm">{t("legacy_years")}</span>
                  </div>
                </div>
              </div>

              {/* Society Staff Section */}
              <div className="space-y-10 pt-12 mt-12 border-t border-slate-100/60">
                <div className="text-center space-y-4 mb-8">
                  <h4 className="text-2xl md:text-4xl font-black text-primary-dark">{t("society_staff_title")}</h4>
                  <div className="w-16 h-1 bg-primary-light mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                  {SOCIETY_STAFF.map((member, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 card-shadow flex flex-col items-center text-center space-y-6 hover:border-primary-light transition-all hover:-translate-y-1 group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-[1.15] -z-10 transition-transform group-hover:bg-primary/10"></div>
                        <img
                          src={member.image}
                          alt={member.nameKey}
                          onError={(e) => {
                            e.currentTarget.src = "/images/staff/placeholder-staff.jpg";
                          }}
                          className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-md border-2 border-white"
                        />
                      </div>
                      <div className="space-y-2 w-full">
                        <h5 className="font-extrabold text-primary text-xl md:text-2xl break-words leading-tight">{t(member.nameKey as any)}</h5>
                        <p className="text-primary-light font-bold uppercase tracking-widest text-[11px] sm:text-xs">{t(member.roleKey as any)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : activeTab === "journey" ? (
            <motion.div
              key="journey-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-16"
            >
              {/* Story */}
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h3 className="text-3xl md:text-5xl font-black text-primary-dark leading-tight">{t("history_vision.title")}</h3>
                <div className="text-left text-slate-700 text-lg leading-relaxed font-medium space-y-4 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-inner">
                  <p>{t("history_vision.p1")}</p>
                  <p>{t("history_vision.p2")}</p>
                  <p>{t("history_vision.p3")}</p>
                  <p>{t("history_vision.p4")}</p>
                  <p>{t("history_vision.p5")}</p>
                  <p>{t("history_vision.p6")}</p>
                  <p>{t("history_vision.p7")}</p>
                  <p>{t("history_vision.p8")}</p>
                </div>
              </div>

              {/* Fulfilled Wishes */}
              <div className="space-y-8">
                <h4 className="text-2xl md:text-3xl font-bold text-primary flex items-center justify-center space-x-3">
                  <CheckCircle2 className="text-emerald-500" size={32} />
                  <span>{t("history_vision.fulfilled_wishes_title")}</span>
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 card-shadow">
                      <h5 className="font-bold text-primary text-xl mb-3">{t(`history_vision.fw_${i}_title` as any)}</h5>
                      <p className="text-slate-600 leading-relaxed font-medium">{t(`history_vision.fw_${i}_desc` as any)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Projects */}
              <div className="space-y-8">
                <h4 className="text-2xl md:text-3xl font-bold text-primary flex items-center justify-center space-x-3">
                  <Lightbulb className="text-amber-500" size={32} />
                  <span>{t("history_vision.upcoming_projects_title")}</span>
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary-light transition-colors">
                      <h5 className="font-bold text-primary-dark text-lg mb-2">{t(`history_vision.up_${i}_title` as any)}</h5>
                      <p className="text-slate-600 text-sm leading-relaxed">{t(`history_vision.up_${i}_desc` as any)}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto text-center p-8 bg-primary/5 rounded-3xl border border-primary/10">
                <p className="text-xl font-bold text-primary leading-relaxed">{t("history_vision.footer")}</p>
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

                        <div className="space-y-8 pt-12 mt-12 border-t border-slate-100/60">
                          <h5 className="text-2xl font-bold text-primary text-center">{pucT("toppers_title")}</h5>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                            {PUC_TOPPERS_2024.map((src, idx) => (
                              <div key={idx} className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100 card-shadow flex flex-col items-center hover:scale-105 transition-transform duration-300">
                                <img
                                  src={src}
                                  alt={`PUC Topper ${idx + 1}`}
                                  className="w-full h-auto rounded-xl object-contain"
                                />
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

                        {school.history && (
                          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-3xl sm:rounded-[2rem] border border-slate-100 shadow-sm card-shadow text-left space-y-8 mt-10">
                            <p className="text-slate-600 leading-[1.8] text-[15px] sm:text-lg font-normal whitespace-pre-line text-justify">{school.history}</p>
                            
                            {school.features && (
                              <div className="space-y-4 pt-6 border-t border-slate-100">
                                <h5 className="font-extrabold text-primary-dark text-xl">{school.featuresTitle}</h5>
                                <ul className="space-y-3">
                                  {school.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start space-x-3 text-slate-700 text-lg">
                                      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                                      <span className="font-medium">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

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

                        {school.toppers && (
                          <div className="space-y-8 pt-12 mt-12 border-t border-slate-100/60">
                            <h5 className="text-2xl font-bold text-primary text-center">{school.toppersTitle}</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                              {school.toppers.map((topper, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 card-shadow flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
                                  <img
                                    src={topper.image}
                                    alt={topper.name}
                                    className="w-32 h-32 rounded-2xl object-cover shadow-md border-2 border-white"
                                  />
                                  <div>
                                    <h6 className="font-extrabold text-primary text-lg leading-tight">{topper.name}</h6>
                                    <p className="text-amber-500 font-bold text-sm mt-1 uppercase tracking-wide">{topper.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
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
