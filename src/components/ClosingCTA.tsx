/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Heart, MessagesSquare, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ClosingCTAProps {
  onNavigate: (viewId: string) => void;
}

export default function ClosingCTA({ onNavigate }: ClosingCTAProps) {
  return (
    <section className="py-20 bg-brand-dark-900 text-white relative overflow-hidden" id="section-closing-cta">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 islamic-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Label icon */}
          <div className="w-12 h-12 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 text-brand-teal-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
            <Heart className="h-5 w-5 fill-brand-teal-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Mari Bersama Menjadi Bagian dari Kebaikan Ini
          </h2>

          <p className="mt-4 text-xs sm:text-base max-w-2xl mx-auto text-gray-300 leading-relaxed font-semibold">
            Dukung langkah Yayasan Nurul Quran Lawang Malang dalam mencetak generasi Qurani yang tangguh dan menebar kebaikan yang luas bagi umat melalui donasi dan doa tulus Anda.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button
              onClick={() => onNavigate("donations")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 text-xs font-extrabold text-[#0c1c24] bg-white hover:bg-gray-100 rounded-full transition-all cursor-pointer shadow-md"
            >
              <Heart className="h-4 w-4 text-brand-teal-500 fill-brand-teal-500 animate-pulse" />
              Donasi Sekarang
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 text-xs font-extrabold text-white bg-brand-teal-500 hover:bg-brand-teal-600 border border-brand-teal-500/40 rounded-full transition-all cursor-pointer shadow-inner shadow-brand-teal-500/10"
            >
              <MessagesSquare className="h-4 w-4 text-teal-100" />
              Hubungi Kami
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
