/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onDonateClick: () => void;
  onFosterClick: () => void;
  onBrowsePrograms: () => void;
}

export default function Hero({ onDonateClick, onFosterClick, onBrowsePrograms }: HeroProps) {
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
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/30 text-brand-teal-100 text-xs font-semibold mb-6 uppercase tracking-wider"
        >
          <BookOpen className="h-3.5 w-3.5 text-brand-teal-500 animate-pulse" />
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • YAYASAN NURUL QURAN
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
        >
          Membangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-500 to-teal-300">Generasi Qurani</span>,<br />
          Menebar <span className="border-b-4 border-brand-gold-500/80">Manfaat</span> untuk Umat
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed font-medium"
        >
          Yayasan Nurul Quran Lawang Malang menghadirkan bimbingan pendidikan Islam terpadu, tahfidz Al-Qur’an intensif, pembinaan usia dini (tahfidz balita), serta program kemanusiaan sosial berbasis amanah dan akuntabilitas penuh.
        </motion.p>

        {/* CTA Button Actions Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
        >
          <button
            onClick={onDonateClick}
            id="btn-hero-donate"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 py-3 px-8 text-sm font-extrabold text-[#0c1c24] bg-gradient-to-tr from-brand-teal-100 to-white hover:brightness-105 active:scale-98 rounded-full shadow-lg shadow-brand-teal-500/10 transition-all cursor-pointer"
          >
            <Heart className="h-4 w-4 text-brand-teal-500 fill-brand-teal-500" />
            Donasi Sekarang
          </button>
          
          <button
            onClick={onFosterClick}
            id="btn-hero-foster"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 py-3 px-8 text-sm font-extrabold text-white bg-brand-teal-500 hover:bg-brand-teal-600 transition-all rounded-full border border-brand-teal-500/40 shadow-md shadow-brand-teal-500/10 cursor-pointer"
          >
            <Users className="h-4 w-4 text-teal-100" />
            Jadi Orang Tua Asuh
          </button>

          <button
            onClick={onBrowsePrograms}
            id="btn-hero-explore"
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-3 px-6 text-sm font-bold text-gray-300 hover:text-white transition-all hover:bg-white/5 rounded-full cursor-pointer"
          >
            Lihat Program Kami
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Quiet disclaimer about credentials / non-creatures conforming to pure sunnah style */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-[10px] text-gray-400 font-medium"
        >
          🔒 Pengelolaan Dana Syariah & Transparan • Diaudit Ikatan Akuntan Syariah Indonesia
        </motion.p>
      </div>
    </section>
  );
}
