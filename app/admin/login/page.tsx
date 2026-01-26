"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, GraduationCap } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication
    if (username === "admin" && password === "harohalli2024") {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials. Use admin / harohalli2024");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md bg-white rounded-[32px] p-10 shadow-2xl border border-slate-100">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
            <GraduationCap fill="white" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-primary">Admin Portal</h1>
          <p className="text-slate-500">Manage Harohalli Educational Trust</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary ml-1">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-primary ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 font-medium">
              {error}
            </div>
          )}

          <button className="w-full py-4 bg-primary hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-all">
            Login to Dashboard
          </button>
        </form>
      </div>
    </main>
  );
}
