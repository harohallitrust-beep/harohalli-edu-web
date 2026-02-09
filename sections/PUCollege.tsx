"use client";

import { motion } from "framer-motion";
import { GraduationCap, History, Users, Award, BookOpen, Laptop } from "lucide-react";
import { useTranslations } from "next-intl";

const StaffCard = ({ member, image }: { member: any; image?: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center space-x-6 hover:shadow-xl transition-all"
    >
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-6 transition-transform group-hover:rotate-12"></div>
        {image ? (
          <img
            src={image}
            alt={member.name}
            className="w-24 h-24 rounded-2xl object-cover relative z-10 shadow-md border-2 border-white"
          />
        ) : (
          <div className="w-24 h-24 rounded-2xl bg-slate-100 flex items-center justify-center relative z-10 shadow-md border-2 border-white">
            <Users className="text-slate-300" size={32} />
          </div>
        )}
      </div>
      <div>
        <h4 className="font-extrabold text-primary text-xl leading-tight">{member.name}</h4>
        <p className="text-primary-light font-bold uppercase tracking-wider text-xs mt-1">{member.role}</p>
      </div>
    </motion.div>
  );
};

const PUCollege = () => {
  const t = useTranslations("PUCollege");

  const staffList = [
    { id: "puttegowda", image: "/images/staff/puttegowda-m-c.jpg" },
    { id: "swarnagowri", image: "/images/staff/swarnagowri-s.jpg" },
    { id: "anitha", image: "/images/staff/anitha-h-b.jpg" },
    { id: "radha", image: "/images/staff/radha-m-m.jpeg" },
    { id: "nagendraswamy", image: "/images/staff/nagendraswamy-j.jpg" },
    { id: "harshitha", image: "/images/staff/harshitha-r.jpg" },
    { id: "rathnamma" },
    { id: "raju" },
    { id: "naveen" },
    { id: "begum" },
  ];

  const highlights = [
    { icon: <Award className="text-amber-500" />, label: t("stats.years") },
    { icon: <BookOpen className="text-blue-500" />, label: t("stats.results") },
    { icon: <History className="text-emerald-500" />, label: t("stats.established") },
  ];

  return (
    <section id="pu-college" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
            <GraduationCap size={18} />
            <span>Mahathma PU College</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary-dark mb-6">{t("title")}</h2>
          <div className="w-24 h-2 bg-primary-light rounded-full mb-8"></div>
        </div>

        {/* History Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary flex items-center space-x-3">
                <History className="text-primary-light" size={28} />
                <span>{t("history_title")}</span>
              </h3>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                {t("history_desc")}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <span className="text-slate-700 font-bold text-sm block leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-primary rounded-3xl text-white shadow-xl flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Laptop size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">New Combination Available</h4>
                <p className="text-white/80 font-medium">EBACS - Commerce with Computer Science since 2023-24</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] translate-x-6 translate-y-6 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-152305085306e-8a4342c44f8b?q=80&w=2070&auto=format&fit=crop"
              alt="PU College Building"
              className="rounded-[3rem] shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 hidden md:block">
              <span className="text-4xl font-black text-primary block text-center">90%</span>
              <span className="text-slate-500 font-bold tracking-tight uppercase text-xs">Consistent Results</span>
            </div>
          </div>
        </div>

        {/* Faculty Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">{t("staff_title")}</h3>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              Our experienced and dedicated faculty members are committed to providing the highest quality education and guidance to our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staffList.map((staff) => (
              <StaffCard key={staff.id} member={t.raw(`staff.${staff.id}`)} image={staff.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PUCollege;
