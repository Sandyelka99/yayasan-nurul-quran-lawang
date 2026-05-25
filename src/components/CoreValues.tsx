/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, FileCheck, Sparkles, BookOpen } from "lucide-react";
import { CORE_VALUES } from "../data/mockData";
import { motion } from "motion/react";

export default function CoreValues() {
  const iconMap: Record<string, any> = {
    ShieldCheck: ShieldCheck,
    FileCheck: FileCheck,
    Sparkles: Sparkles,
    BookOpen: BookOpen,
  };

  return (
    <section className="py-24 bg-brand-dark-900 text-white relative overflow-hidden" id="section-core-values">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 islamic-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-300 bg-brand-teal-500/10 border border-brand-teal-500/20 px-3.5 py-1.5 rounded-full uppercase">
            NILAI-NILAI UTAMA KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Menjaga Kepercayaan demi Ketenangan Muzakki & Santri
          </h2>
          <p className="mt-4 text-sm text-gray-300 font-medium leading-relaxed">
            Dalam mendidik generasi penghafal Qur'an dan mengelola dana umat, kami mengutamakan nilai kesyariahan, keterbukaan keuangan, serta pengawasan berstandar profesional.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_VALUES.map((val, idx) => {
            const Icon = iconMap[val.iconName] || ShieldCheck;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={val.id}
                className="bg-white/5 border border-white/8 backdrop-blur-md rounded-2xl p-6 sm:p-7 transition-all hover:bg-white/10"
              >
                <div className="p-3 rounded-xl bg-brand-teal-500/10 border border-brand-teal-500/20 text-brand-teal-400 w-fit mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {val.title}
                </h3>
                <p className="text-xs text-gray-300 font-medium leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
