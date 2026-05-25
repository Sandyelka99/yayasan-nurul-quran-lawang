/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, Video, Calendar, Download, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HomeDakwahPreviewProps {
  onNavigate: (viewId: string) => void;
}

export default function HomeDakwahPreview({ onNavigate }: HomeDakwahPreviewProps) {
  const mediaItems = [
    {
      id: "artikel",
      title: "Artikel Dakwah",
      description: "Tinjauan literatur syar'i, adab balita muslim, panduan mendidik anak mencintai Al-Qur'an, dan nasihat hikmah harian.",
      icon: BookOpen,
      color: "text-amber-500 bg-amber-50 border-amber-100",
      target: "dakwah/artikel-islami",
    },
    {
      id: "video",
      title: "Video Kajian",
      description: "Koleksi video rekaman kajian asatidzah, nasihat berdurasi pendek (shorts), murottal balita, serta visualisator adab.",
      icon: Video,
      color: "text-[#0a8a9a] bg-brand-teal-50 border-brand-teal-100",
      target: "dakwah/video-dakwah",
    },
    {
      id: "jadwal",
      title: "Jadwal Kajian",
      description: "Informasi tanggal, jam, dan judul silaturahmi kajian rutin Sabtu sore serta tabligh akbar yang terbuka untuk umum.",
      icon: Calendar,
      color: "text-purple-500 bg-purple-50 border-purple-100",
      target: "dakwah/jadwal-kajian",
    },
    {
      id: "unduhan",
      title: "Materi Unduhan",
      description: "Unduh cuma-cuma lembar aktivitas mewarnai hijaiyah balita, e-book ringkasan doa, dan templat hafalan praktis.",
      icon: Download,
      color: "text-rose-500 bg-rose-50 border-rose-100",
      target: "dakwah/poster-dakwah", // or similar download target
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="section-home-dakwah">
      {/* Background Accent Gradients */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
            Dakwah Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Menyebarkan Ilmu dan Kebaikan Melalui Media Digital
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
            Yayasan Nurul Quran menghadirkan dakwah digital sebagai sarana syiar yang relevan dengan perkembangan zaman, agar ilmu dan nasihat dapat menjangkau lebih banyak kalangan.
          </p>
        </div>

        {/* Media Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => onNavigate(item.target)}
                className="bg-brand-dark-50 rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className={`p-3 rounded-2xl border ${item.color} w-fit mb-5 shadow-inner`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 mb-2 leading-tight group-hover:text-brand-teal-500 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-150 flex items-center justify-between text-[11px] font-bold text-brand-teal-600 group-hover:text-brand-teal-700">
                  <span>Akses Media</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore Dakwah Button CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("dakwah")}
            className="inline-flex items-center gap-2 py-3 px-8 text-xs font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full shadow-md shadow-brand-teal-500/10 cursor-pointer"
          >
            Jelajahi Dakwah Digital
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
