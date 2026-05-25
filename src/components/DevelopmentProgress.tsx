/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PROGRESS_UPDATES } from "../data/mockData";
import { Calendar, CheckCircle2, Award, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export default function DevelopmentProgress() {
  const [activeCategory, setActiveCategory] = useState<string>("semua");

  const categories = [
    { id: "semua", label: "Semua Update" },
    { id: "pembangunan", label: "Konstruksi Fisik" },
    { id: "keuangan", label: "Realisasi Keuangan" },
    { id: "kegiatan", label: "Penyaluran Program" },
  ];

  const filteredUpdates = activeCategory === "semua"
    ? PROGRESS_UPDATES
    : PROGRESS_UPDATES.filter(u => u.category === activeCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="section-progress">
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0a8a9a] bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
            TRANSPARANSI & PROGRESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Perkembangan Lapangan Secara Transparan
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
            Dipandu komitmen amanah mutu, setiap rupiah dana dari donatur disalurkan dan didokumentasikan di sini secara real-time demi ketenangan batin Anda.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex justify-center flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`py-1.5 px-4 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-brand-teal-500 border-brand-teal-500 text-white shadow-sm"
                  : "bg-white border-gray-150 text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 pointer-events-none hidden sm:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 pointer-events-none sm:hidden" />

          <div className="space-y-12">
            {filteredUpdates.map((update, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  key={update.id}
                  className={`relative flex flex-col sm:flex-row gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing central check point circle */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-teal-500 -translate-x-1/2 z-10 top-1.5 shadow" />

                  {/* Left content block (or right depending on layout position) */}
                  <div className="w-full sm:w-1/2 sm:px-8 pl-10 sm:pl-0">
                    <div className="bg-brand-dark-50 rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition-shadow">
                      
                      {/* Meta information */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5 text-gray-400 font-bold text-[10px] tracking-wider uppercase">
                          <Calendar className="h-3.5 w-3.5 text-brand-teal-400" />
                          {update.date}
                        </div>
                        <span className={`text-[8px] font-extrabold tracking-wider px-2 py-0.5 rounded-full uppercase ${
                          update.category === "pembangunan" 
                            ? "bg-amber-50 text-amber-600" 
                            : update.category === "keuangan" 
                            ? "bg-green-50 text-green-600" 
                            : "bg-indigo-50 text-indigo-600"
                        }`}>
                          {update.category === "pembangunan" 
                            ? "konstruksi" 
                            : update.category === "keuangan" 
                            ? "keuangan" 
                            : "kegiatan"}
                        </span>
                      </div>

                      {/* Header and Details */}
                      <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 leading-snug">
                        {update.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2.5 font-medium leading-relaxed">
                        {update.description}
                      </p>

                      {/* Procurement statistical metrics */}
                      <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-gray-200/60 bg-white/60 p-3 rounded-lg border border-gray-100">
                        {update.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="text-center">
                            <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-tight">
                              {stat.label}
                            </span>
                            <span className="block text-[11px] font-bold text-brand-teal-600 mt-0.5 truncate">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Visual indicator progress scale */}
                      <div className="mt-4 pt-3 border-t border-gray-100/60 flex items-center justify-between">
                        <span className="text-[10px] text-gray-400 font-bold">REQUISITION METRIC</span>
                        <span className="text-[10px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded font-mono">
                          Realisasi {update.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right decorative panel box */}
                  <div className="hidden sm:block w-1/2 px-8">
                    <div className="h-44 rounded-2xl overflow-hidden bg-brand-dark-900 border border-gray-150 group">
                      <img 
                        src={update.imageUrl} 
                        alt="Requisite view" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-75 group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
