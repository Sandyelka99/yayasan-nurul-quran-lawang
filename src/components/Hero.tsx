/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Heart, BookOpen, FileCheck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onNavigate: (viewId: string) => void;
  onDonateClick: () => void;
}

export default function Hero({ onNavigate, onDonateClick }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-dark-900 text-white">
      {/* Dynamic Background Image Layer with Heavy Dark-Teal Gradient Overlay */}
      <div 
         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay"
         style={{ 
           backgroundImage: `url('https://images.unsplash.com/photo-1512632511790-760901e47f5b?auto=format&fit=crop&q=80&w=1920')` 
         }}
      />
      
      {/* Islamic Abstract Geometric lines Overlay */}
      <div className="absolute inset-0 islamic-grid opacity-70 pointer-events-none" />
      
      {/* Decorative Radial Lighting Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f7fafb] to-transparent" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        
        {/* Humble Bismillah / Quran Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/30 text-brand-teal-100 text-[10px] sm:text-xs font-semibold mb-6 uppercase tracking-wider"
        >
          <BookOpen className="h-3.5 w-3.5 text-brand-teal-500 animate-pulse" />
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ • YAYASAN NURUL QURAN
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          Membangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-500 to-teal-300">Generasi Qurani</span>,<br className="hidden sm:inline" />
          Menebar <span className="border-b-4 border-brand-gold-500/80">Manfaat</span> untuk Umat
        </motion.h1>

        {/* Subheadline (Deskripsi) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xs sm:text-base md:text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed font-semibold"
        >
          Yayasan Nurul Quran Lawang Malang menghadirkan pendidikan Islam, pembinaan tahfidz, program sosial, dakwah digital, serta layanan donasi dan wakaf yang amanah, profesional, dan transparan.
        </motion.p>

        {/* CTA Button Actions Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          {/* 1. Donasi Sekarang */}
          <button
            onClick={() => onNavigate("donations")}
            id="btn-hero-donate-now"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-extrabold text-[#0c1c24] bg-white hover:bg-gray-100 rounded-full shadow-lg shadow-brand-teal-500/10 transition-all cursor-pointer"
          >
            <Heart className="h-4 w-4 text-brand-teal-500 fill-brand-teal-500" />
            Donasi Sekarang
          </button>
          
          {/* 2. Lihat Program Kami */}
          <button
            onClick={() => onNavigate("units")}
            id="btn-hero-see-programs"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-extrabold text-white bg-brand-teal-500 hover:bg-brand-teal-600 transition-all rounded-full border border-brand-teal-500/40 shadow-inner cursor-pointer"
          >
            <BookOpen className="h-4 w-4 text-teal-100" />
            Lihat Program Kami
          </button>

          {/* 3. Lihat Laporan & Transparansi */}
          <button
            onClick={() => onNavigate("progress")}
            id="btn-hero-see-reports"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-extrabold text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
          >
            <FileCheck className="h-4 w-4 text-teal-300" />
            Lihat Laporan & Transparansi
          </button>
        </motion.div>

        {/* Catatan Kecil */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-[11px] text-gray-400 font-semibold max-w-lg mx-auto"
        >
          Pengelolaan dana dilakukan secara amanah, transparan, dan berorientasi pada kemaslahatan umat.
        </motion.p>
      </div>
    </section>
  );
}
