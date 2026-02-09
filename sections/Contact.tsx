"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import { config } from "@/lib/config";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">{t("title")}</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-primary mb-2">{t("phone")}</h4>
                {config.contact.phones.map((phone, idx) => (
                  <p key={idx} className="text-slate-500 text-sm font-medium">{phone}</p>
                ))}
              </div>

              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-primary mb-2">{t("email")}</h4>
                <p className="text-slate-500 text-sm font-medium">{config.contact.email}</p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 text-xl">{t("address_label")}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {t("address")}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary rounded-3xl text-white">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-xl">{t("office_hours")}</h4>
                  <p className="text-white/70">{t("office_hours_desc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-black text-primary mb-8 italic">{t("form.title")}</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());

                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  if (res.ok) alert(t("form.success"));
                  else throw new Error();
                } catch (err) {
                  alert(t("form.error"));
                }
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t("form.name")}</label>
                <input required name="name" type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all font-medium" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t("form.email")}</label>
                  <input required name="email" type="email" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t("form.subject")}</label>
                  <input required name="subject" type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t("form.message")}</label>
                <textarea required name="message" rows={4} className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-hidden transition-all font-medium resize-none" />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center space-x-3 text-lg"
              >
                <span>{t("form.submit")}</span>
                <MessageSquare size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 h-[400px] rounded-[32px] overflow-hidden border border-slate-100 shadow-sm grayscale shadow-inner">
          <iframe
            src={config.contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
