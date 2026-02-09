"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ClipboardCheck, Users, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

const Registration = () => {
  const t = useTranslations("Registration");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('student_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      parent: formData.get('parent_name'),
      school: formData.get('school'),
      class: formData.get('class'),
      message: formData.get('message')
    };

    try {
      const res = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormStatus("success");
      } else {
        throw new Error();
      }
    } catch (err) {
      alert(t("form.error") || "Submission failed. Please try again.");
      setFormStatus("idle");
    }
  };

  const steps = [
    { icon: ClipboardCheck, title: t("steps.form"), desc: t("steps.form_desc") },
    { icon: Calendar, title: t("steps.interaction"), desc: t("steps.interaction_desc") },
    { icon: Users, title: t("steps.final"), desc: t("steps.final_desc") },
  ];

  if (formStatus === "success") {
    return (
      <section id="registration" className="section-padding bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 bg-green-50 rounded-[3rem] border-2 border-green-100"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-200">
              <CheckCircle2 className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-black text-green-900 mb-4">{t("success_title")}</h2>
            <p className="text-green-700 text-lg mb-8">
              {t("success_desc")}
            </p>
            <button
              onClick={() => setFormStatus("idle")}
              className="text-green-800 font-bold underline"
            >
              {t("back_to_form")}
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-black tracking-[0.2em] uppercase text-sm mb-4 block">{t("admission_open")}</span>
            <h2 className="text-3xl md:text-6xl font-black text-primary-dark mb-8 leading-tight">
              {t("title")} <br /> <span className="text-accent">{t("title_highlight")}</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-12">
              {t("subtitle")}
            </p>

            <div className="space-y-10">
              {steps.map((s, idx) => (
                <div key={idx} className="flex space-x-6">
                  <div className="shrink-0 w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center relative">
                    <s.icon className="text-primary" size={28} />
                    <div className="absolute -top-2 -left-2 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-xs font-black">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{s.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] -rotate-2"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white p-12 rounded-[3.5rem] shadow-2xl border border-white"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{t("form.student_name")}</label>
                    <input
                      required
                      name="student_name"
                      type="text"
                      placeholder={t("form.student_name_placeholder")}
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all text-slate-900 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{t("form.applying_for")}</label>
                    <select name="school" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all text-slate-900 font-medium">
                      <option>SSLC</option>
                      <option>PUC - Science</option>
                      <option>PUC - Commerce</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{t("form.parent_name")}</label>
                  <input
                    required
                    name="parent_name"
                    type="text"
                    placeholder={t("form.parent_name_placeholder")}
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all text-slate-900 font-medium"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{t("form.phone")}</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all text-slate-900 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{t("form.email")}</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="example@mail.com"
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all text-slate-900 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{t("form.message")}</label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder={t("form.message_placeholder")}
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all text-slate-900 font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center space-x-3 text-lg disabled:bg-slate-300"
                >
                  {formStatus === "submitting" ? (
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>{t("form.submit")}</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Floating decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
