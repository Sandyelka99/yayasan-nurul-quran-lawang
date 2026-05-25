/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Lock, User, Sparkles } from "lucide-react";

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLoginSuccess();
    } else {
      alert("Username atau password belum sesuai.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-brand-dark-950 via-brand-dark-900 to-[#122e3b] flex items-center justify-center p-4 selection:bg-brand-teal-500 selection:text-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 space-y-6 relative">
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-teal-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="text-center space-y-2">
          {/* Logo */}
          <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-teal-600 to-brand-teal-500 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-brand-teal-500/20">
            NQ
          </div>
          <h2 className="text-xl font-extrabold text-[#0B1E26] font-sans tracking-tight">
            Admin Yayasan Nurul Quran
          </h2>
          <p className="text-xs text-gray-400 font-semibold max-w-xs mx-auto leading-relaxed">
            Masuk untuk mengelola konten website, program, laporan, dan dakwah digital.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
              Email / Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <User className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-[#0B1E26] placeholder:text-gray-300 focus:outline-none focus:border-brand-teal-500 focus:bg-white transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock className="h-4 w-4" />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-[#0B1E26] placeholder:text-gray-300 focus:outline-none focus:border-brand-teal-500 focus:bg-white transition-colors"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-brand-teal-600 hover:bg-brand-teal-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-brand-teal-600/10 cursor-pointer hover:shadow-brand-teal-600/20 active:scale-95 flex items-center justify-center gap-1.5"
          >
            Masuk Dashboard
          </button>
        </form>

        <div className="pt-4 border-t border-gray-100 flex flex-col items-center gap-1.5 text-center">
          <div className="flex items-center gap-1 bg-brand-teal-50 text-brand-teal-700 py-1 px-2.5 rounded-full text-[9px] font-extrabold uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Prototype Version</span>
          </div>
          <span className="text-[9px] text-gray-400 leading-normal font-semibold">
            Login ini masih dummy untuk kebutuhan prototype.<br />
            Gunakan username: <strong className="font-mono text-[#0B1E26]">admin</strong> & password: <strong className="font-mono text-[#0B1E26]">admin123</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
