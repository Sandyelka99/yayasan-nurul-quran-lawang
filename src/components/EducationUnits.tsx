/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, BookOpen, GraduationCap, Baby, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface EducationUnitsProps {
  onLearnMoreUnit?: (unitId: string) => void;
}

export default function EducationUnits({ onLearnMoreUnit }: EducationUnitsProps) {
  const units = [
    {
      id: "learning-center",
      title: "Nurul Quran Learning Center",
      targetAudience: "Siswa SD, SMP, hingga SMA",
      description: "Program bimbingan belajar akademik dan pembinaan karakter Islami untuk mendukung prestasi belajar sekaligus membentuk pribadi yang beradab.",
      features: [
        "Metode belajar adaptif & personal",
        "Dukungan tugas sekolah formal lengkap",
        "Pembiasaan adab harian & aqidah shahihah",
      ],
      imageUrl: "https://images.unsplash.com/photo-1512632511790-760901e47f5b?auto=format&fit=crop&q=80&w=800",
      icon: GraduationCap,
      color: "bg-teal-50 text-brand-teal-500 border-brand-teal-100",
    },
    {
      id: "tahfiz-center",
      title: "Nurul Quran Tahfidz Center",
      targetAudience: "Anak-anak & remaja",
      description: "Program tahfidz Al-Qur’an dengan pembinaan setoran hafalan, murojaah, tahsin, dan pendampingan berkelanjutan.",
      features: [
        "Metode hafalan menyenangkan & mutqin",
        "Target capaian jelas per tingkatan",
        "Evaluasi berkala pendampingan asatidzah",
      ],
      imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=800",
      icon: BookOpen,
      color: "bg-amber-50 text-amber-500 border-amber-100",
    },
    {
      id: "rutaba",
      title: "Rumah Tahfidz Balita",
      targetAudience: "Balita & anak usia dini",
      description: "Pembinaan awal kecintaan terhadap Al-Qur’an melalui pendekatan menyenangkan, interaktif, dan sesuai tahap tumbuh kembang anak.",
      features: [
        "Media ajar interaktif ramah balita",
        "Pengajaran makhraj fasih bertahap",
        "Suasana belajar hangat, riang, & aman",
      ],
      imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800",
      icon: Baby,
      color: "bg-rose-50 text-rose-50 border-rose-100",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="section-home-education">
      {/* Decorative BG Circles */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
            Pendidikan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Pilar Pembinaan Generasi Harapan Masa Depan
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
            Yayasan Nurul Quran mengembangkan layanan pendidikan yang terintegrasi, mulai dari pembiasaan nilai-nilai Islam, bimbingan belajar, tahfidz Al-Qur’an, hingga pembinaan karakter sejak usia dini.
          </p>
        </div>

        {/* 3 Columns Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {units.map((unit, index) => {
            const Icon = unit.icon;
            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-brand-dark-50 rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Upper Image placeholder (conforming to sunnah with no human faces) */}
                <div className="h-48 relative overflow-hidden bg-brand-dark-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={unit.imageUrl}
                    alt={unit.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 bg-brand-teal-500 text-white rounded-full text-[9px] font-extrabold uppercase tracking-wider">
                    <Icon className="h-3 w-3" />
                    PESERTA BINAAN
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-brand-dark-900 leading-tight">
                      {unit.title}
                    </h3>
                    
                    <span className="inline-block text-[10px] font-bold text-brand-teal-600 bg-brand-teal-50 px-2.5 py-1 rounded-md mt-2.5">
                      Sasaran: {unit.targetAudience}
                    </span>

                    <p className="text-xs text-gray-500 mt-4 leading-relaxed font-semibold">
                      {unit.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-6 pt-5 border-t border-gray-150 space-y-3">
                      {unit.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-gray-700">
                          <Check className="h-3.5 w-3.5 text-brand-teal-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => onLearnMoreUnit?.(unit.id)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-bold text-brand-teal-600 hover:text-white bg-white hover:bg-brand-teal-500 border border-brand-teal-500/30 rounded-xl transition-all cursor-pointer shadow-sm"
                    >
                      Pelajari Program Lengkap
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Global Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => onLearnMoreUnit?.("units")}
            className="inline-flex items-center gap-2 py-3 px-8 text-xs font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full shadow-md shadow-brand-teal-500/10 cursor-pointer"
          >
            Lihat Selengkapnya di Menu Pendidikan
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
