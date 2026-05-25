/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, Heart, HelpCircle, FileCheck, ArrowRight, Rss } from "lucide-react";
import { motion } from "motion/react";

interface MainPillarsProps {
  onNavigate: (viewId: string) => void;
}

export default function MainPillars({ onNavigate }: MainPillarsProps) {
  const pillars = [
    {
      id: "units",
      title: "Pendidikan Al-Qur'an (Tahfidz)",
      description: "Pondasi utama pembinaan generasi sejak dini demi membiasakan adab islami dan hafalan mutqin.",
      ctaText: "Lihat Pendidikan",
      icon: GraduationCap,
      color: "text-brand-teal-500 bg-brand-teal-50 border-brand-teal-100",
      target: "units",
    },
    {
      id: "donations",
      title: "Sosial Keumatan (Yatim Duafa)",
      description: "Layanan bantuan, asupan gizi, santunan yatim piatu, serta beasiswa gratis bagi dhuafaa.",
      ctaText: "Donasi Program Sosial",
      icon: Heart,
      color: "text-rose-500 bg-rose-50 border-rose-100",
      target: "donations/program-sosial",
    },
    {
      id: "dakwah",
      title: "Dakwah Digital (Kebermanfaatan Umat)",
      description: "Syiar video kajian sunnah, infografis islami, penyebaran rekaman tahfidz, dan materi sunnah berkualitas yang dapat diakses siapa saja.",
      ctaText: "Jelajahi Dakwah",
      icon: Rss,
      color: "text-amber-500 bg-amber-50 border-amber-100",
      target: "dakwah",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="section-main-pillars">
      {/* Visual background accents */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0a8a9a] bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
            Pilar Utama Yayasan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Tiga Pilar Utama Jati Diri Yayasan
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 font-bold leading-relaxed">
            Seluruh aktivitas Yayasan Nurul Quran diarahkan dan berkomitmen menyelenggarakan pilar-pilar penting demi kemaslahatan umat.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col justify-between bg-brand-dark-50 rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div>
                  {/* Icon Panel container */}
                  <div className={`p-3 rounded-2xl border ${pillar.color} w-fit mb-5 shadow-sm`}>
                    <IconComponent className="h-6 w-6 stroke-2" />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-extrabold text-brand-dark-900 mb-2.5">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-150">
                  <button
                    onClick={() => onNavigate(pillar.target)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-teal-600 hover:text-brand-teal-700 transition-colors cursor-pointer group/btn"
                  >
                    <span>{pillar.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
