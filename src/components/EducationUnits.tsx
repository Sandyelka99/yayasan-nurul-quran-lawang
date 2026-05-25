/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, GraduationCap, BookOpen, Baby, Heart } from "lucide-react";
import { EDUCATION_UNITS } from "../data/mockData";
import { motion } from "motion/react";

interface EducationUnitsProps {
  onLearnMoreUnit?: (unitId: string) => void;
  onSponsorshipTrigger?: () => void;
}

export default function EducationUnits({ onLearnMoreUnit, onSponsorshipTrigger }: EducationUnitsProps) {
  // Map icons from string to actual Lucide react elements
  const iconMap: Record<string, any> = {
    GraduationCap: GraduationCap,
    BookOpen: BookOpen,
    Baby: Baby,
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="section-education-units">
      {/* Background Ornaments */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-brand-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
            UNIT PENDIDIKAN KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Pilar Pembinaan Generasi Harapan Masa Depan
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            Yayasan Nurul Quran mengintegrasikan pembekalan ilmu keislaman, penguasaan materi sekolah formal, hingga bimbingan interaktif tahfidz usia dini sejak usia balita.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EDUCATION_UNITS.map((unit, index) => {
            const IconComponent = iconMap[unit.iconName] || BookOpen;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                key={unit.id}
                className="group flex flex-col bg-brand-dark-50 rounded-2xl overflow-hidden border border-gray-150 transition-all hover:shadow-xl hover:shadow-brand-dark-900/5 hover:-translate-y-1.5"
              >
                {/* Thumbnail Image Container (no humans, pure classrooms/materials) */}
                <div className="relative h-48 overflow-hidden bg-brand-dark-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={unit.imageUrl}
                    alt={unit.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Unit Type Tag */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 text-[10px] font-extrabold tracking-wider text-white bg-brand-teal-500 rounded-full uppercase">
                    <IconComponent className="h-3.5 w-3.5" />
                    {unit.title}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-brand-dark-900 leading-tight">
                      {unit.subTitle}
                    </h3>
                    <p className="text-[11px] font-bold text-brand-teal-600 mt-1.5">
                      Sasaran: {unit.targetAudience}
                    </p>
                    <p className="text-xs text-gray-500 mt-3 font-medium leading-relaxed">
                      {unit.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-6 pt-5 border-t border-gray-200/60 space-y-3">
                      {unit.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="p-0.5 rounded-full bg-brand-teal-50 text-brand-teal-500 mt-0.5 shrink-0">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span className="text-xs font-semibold text-gray-700 leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => onLearnMoreUnit?.(unit.id)}
                      className="w-full py-2.5 px-4 text-xs font-bold text-center text-brand-teal-600 hover:text-white bg-white hover:bg-brand-teal-500 border border-brand-teal-500/30 rounded-xl transition-all shadow-sm cursor-pointer"
                    >
                      Pelajari Detail Kurikulum
                    </button>
                    {unit.id !== "learning-center" && (
                      <button
                        onClick={onSponsorshipTrigger}
                        className="w-full mt-2 py-1.5 text-[10px] text-center font-bold text-brand-gold-600 hover:underline flex items-center justify-center gap-1"
                      >
                        <Heart className="h-3 w-3 fill-brand-gold-500 text-brand-gold-500" /> Sponsori Program Ini
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
