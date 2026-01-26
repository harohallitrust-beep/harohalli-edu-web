"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, FileDown, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      school: formData.get("school"),
      class: formData.get("class"),
    };

    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errData = await response.json();
        setError(errData.message || "Failed to submit request.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Admissions Open</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-8"></div>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Join the Harohalli family. We follow a transparent and merit-based admission process. Please fill out the request form, and our representative will contact you shortly.
            </p>

            <div className="space-y-6 mb-12">
              <h3 className="text-xl font-bold text-primary">Admission Process</h3>
              {[
                "Submit admission request form online.",
                "Visit the school for a campus tour and interaction.",
                "Completion of document verification.",
                "Finalize admission and fee payment."
              ].map((step, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-slate-700 font-medium">{step}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all border border-primary/20"
            >
              <FileDown size={20} />
              <span>Download Prospectus (PDF)</span>
            </a>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-slate-100">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Request Submitted!</h3>
                <p className="text-slate-500 mb-8">
                  Thank you for your interest. We will get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Enter student name"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Parent Phone</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="Contact number"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Select School</label>
                    <select
                      name="school"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    >
                      <option>Central School</option>
                      <option>High School</option>
                      <option>Little Flower KG</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Class Requested</label>
                    <input
                      required
                      name="class"
                      type="text"
                      placeholder="e.g., Grade 5"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center space-x-2 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                    <AlertCircle size={18} />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-5 rounded-2xl text-white font-bold text-lg shadow-xl transition-all flex items-center justify-center space-x-3",
                    isSubmitting ? "bg-slate-400" : "bg-accent hover:bg-blue-600 shadow-accent/20"
                  )}
                >
                  <Send size={20} />
                  <span>{isSubmitting ? "Submitting..." : "Send Admission Request"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
