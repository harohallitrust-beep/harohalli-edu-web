"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Youtube, Image as ImageIcon, LayoutDashboard, LogOut, Save } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAdmin");
    if (!auth) {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const [activeTab, setActiveTab] = useState("Gallery");

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-8 border-b">
          <h2 className="text-xl font-bold text-primary">Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {["Dashboard", "Gallery", "Admissions", "Toppers"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all",
                activeTab === item ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-50"
              )}
            >
              <LayoutDashboard size={20} />
              <span>{item}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={() => { localStorage.removeItem("isAdmin"); router.push("/admin/login"); }}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 font-bold hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-primary">{activeTab} Management</h1>
          <button className="flex items-center space-x-2 px-6 py-3 bg-accent text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all">
            <Plus size={20} />
            <span>Add New {activeTab === "Gallery" ? "Photo/Video" : activeTab}</span>
          </button>
        </div>

        {activeTab === "Gallery" ? (
          <div className="space-y-8">
            {/* Upload Form Mockup */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm max-w-2xl">
              <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
                <Plus size={20} className="text-accent" />
                <span>Fast Upload</span>
              </h3>
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <select className="px-4 py-3 bg-slate-50 border rounded-xl outline-none">
                    <option>School 1</option>
                    <option>School 2</option>
                    <option>School 3</option>
                  </select>
                  <select className="px-4 py-3 bg-slate-50 border rounded-xl outline-none">
                    <option>Photo</option>
                    <option>YouTube Link</option>
                  </select>
                </div>
                <input type="text" placeholder="Title for the item" className="px-4 py-3 bg-slate-50 border rounded-xl outline-none" />
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                  <ImageIcon className="mx-auto text-slate-300 mb-2" size={40} />
                  <p className="text-slate-500 font-bold text-sm">Drag & Drop or Click to Upload</p>
                </div>
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all">
                  <Save size={20} />
                  <span>Save to Gallery</span>
                </button>
              </div>
            </div>

            {/* Management List */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="px-8 py-4 font-bold text-primary">Preview</th>
                    <th className="px-8 py-4 font-bold text-primary">Title</th>
                    <th className="px-8 py-4 font-bold text-primary">School</th>
                    <th className="px-8 py-4 font-bold text-primary">Type</th>
                    <th className="px-8 py-4 font-bold text-primary">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4">
                        <div className="w-16 h-12 bg-slate-200 rounded-lg"></div>
                      </td>
                      <td className="px-8 py-4 font-semibold">Event Image {i}</td>
                      <td className="px-8 py-4 text-slate-500">School {i}</td>
                      <td className="px-8 py-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                          Photo
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white p-20 rounded-[32px] text-center border-2 border-dashed border-slate-200">
            <LayoutDashboard size={48} className="mx-auto text-slate-300 mb-4" />
            <h2 className="text-xl font-bold text-slate-400">Section Coming Soon</h2>
            <p className="text-slate-400">We are currently building the management tools for this section.</p>
          </div>
        )}
      </main>
    </div>
  );
}
