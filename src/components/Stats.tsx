/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Users, GraduationCap, Heart, HelpCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface StatsProps {
  onProgressClick?: () => void;
}

export default function Stats({ onProgressClick }: StatsProps) {
  const statItems = [
    {
      id: "penerima_manfaat",
      label: "Penerima Manfaat",
      value: "1.245+",
      description: "Yatim, dhuafa, & keluarga lingkar Lawang",
      icon: Users,
      color: "text-brand-teal-500 bg-brand-teal-50",
    },
    {
      id: "santri_binaan",
      label: "Santri & Peserta Binaan",
      value: "85+",
      description: "Rutaba, Tahfidz, & Bina Akademik",
      icon: GraduationCap,
      color: "text-amber-500 bg-amber-50",
    },
    {
      id: "donatur_mitra",
      label: "Donatur & Mitra Kebaikan",
      value: "2.430+",
      description: "Sinergi amal jariyah seantero umat",
      icon: Heart,
      color: "text-rose-500 bg-rose-50",
    },
    {
      id: "program_aktif",
      label: "Program Aktif",
      value: "12",
      description: "Pilar pendidikan, sosial, & dakwah",
      icon: HelpCircle,
      color: "text-indigo-500 bg-indigo-50",
    },
  ];

  return (
    <section className="py-24 bg-brand-dark-50 relative overflow-hidden" id="section-stats-summary">
      {/* Visual ornaments */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statistics Headings block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#0a8a9a] bg-brand-teal-100/60 px-3.5 py-1.5 rounded-full uppercase">
              Sekilas Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight leading-tight">
              Lembaga Pembinaan, Pendidikan, dan Pelayanan Umat
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm text-gray-500 leading-relaxed font-semibold">
              Yayasan Nurul Quran terus bertumbuh sebagai lembaga yang berfokus pada pendidikan, dakwah, kepedulian sosial, serta pembangunan ekosistem generasi Qurani yang berkelanjutan.
            </p>
          </div>
        </div>

        {/* 4 Beautiful Numeric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-150 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 rounded-2xl w-fit ${item.color} mb-5 shadow-sm`}>
                    <Icon className="h-5 w-5 stroke-2" />
                  </div>
                  
                  <div className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight font-sans">
                    {item.value}
                  </div>
                  
                  <div className="text-xs font-bold text-gray-800 mt-2">
                    {item.label}
                  </div>
                </div>

                <div className="text-[11px] text-gray-400 font-semibold mt-3 pt-3 border-t border-gray-100">
                  {item.description}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
