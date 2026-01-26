"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Contact Us</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-primary mb-2">Call Us</h4>
                <p className="text-slate-500 text-sm font-medium">+91 12345 67890</p>
                <p className="text-slate-500 text-sm font-medium">+91 080 234567</p>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-primary mb-2">Email Us</h4>
                <p className="text-slate-500 text-sm font-medium">info@harohalli-trust.org</p>
                <p className="text-slate-500 text-sm font-medium">admin@harohalli-trust.org</p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 text-xl">Our Address</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    #42, Harohalli Educational Building, <br />
                    M.G. Road, Bangalore - 560001, <br />
                    Karnataka, India.
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
                  <h4 className="font-bold mb-1 text-xl">Visiting Hours</h4>
                  <p className="text-white/70">Mon - Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/911234567890"
              className="flex items-center justify-center space-x-3 w-full py-5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow-xl shadow-green-500/20 transition-all"
            >
              <MessageSquare size={24} />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          <div className="h-[500px] lg:h-auto rounded-[32px] overflow-hidden border border-slate-100 shadow-sm grayscale shadow-inner">
            {/* Map Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2sHarohalli!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
