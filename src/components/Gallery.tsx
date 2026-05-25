/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data/mockData";
import { Eye, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryProps {
  onNavigate: (viewId: string) => void;
}

export default function Gallery({ onNavigate }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<string>("Semua");

  const categories = [
    { id: "Semua", label: "Semua" },
    { id: "Pendidikan", label: "Kegiatan Pendidikan" },
    { id: "Tahfidz", label: "Kegiatan Tahfidz" },
    { id: "Sosial", label: "Program Sosial" },
    { id: "Pembangunan", label: "Pembangunan" },
    { id: "Dakwah", label: "Dakwah & Kajian" },
  ];

  // Helper matching filter function
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === "Semua") return true;
    if (activeTab === "Pendidikan") return item.category === "Pendidikan" && !item.title.toLowerCase().includes("tahfidz");
    if (activeTab === "Tahfidz") return item.category === "Pendidikan" && item.title.toLowerCase().includes("tahfidz") || item.category === "Kegiatan Santri";
    if (activeTab === "Sosial") return item.category === "Sosial" || item.category === "Wakaf";
    if (activeTab === "Pembangunan") return item.category === "Pembangunan";
    if (activeTab === "Dakwah") return item.category === "Dakwah";
    return true;
  }).slice(0, 6); // Cap preview count to 6 for clean aesthetic grid on Beranda

  return (
    <section className="py-24 bg-brand-dark-50 relative overflow-hidden" id="section-home-gallery">
      {/* Visual Ambient Light */}
      <div className="absolute left-0 bottom-24 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0a8a9a] bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
            Galeri Kegiatan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Dokumentasi Aktivitas dan Perjalanan Yayasan
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
            Berbagai kegiatan pendidikan, dakwah, sosial, dan pembangunan yayasan terdokumentasi sebagai bagian dari perjalanan dakwah dan pelayanan kepada umat.
          </p>
        </div>

        {/* Categories Tab selector bar */}
        <div className="flex justify-center flex-wrap items-center gap-1.5 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`py-1.5 px-4 text-xs font-bold rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                activeTab === cat.id
                  ? "bg-brand-teal-500 border-brand-teal-500 text-white shadow-sm"
                  : "bg-white border-gray-150 text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Six Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => onNavigate("gallery")}
                className="group relative h-72 rounded-2xl overflow-hidden bg-brand-dark-900 border border-gray-150 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                {/* Visual Shade Filter overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity z-10" />

                {/* Pure image representation (no human faces closeups in line with sunnah guidelines) */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />

                {/* Meta details Overlay text block */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-20 flex flex-col justify-end text-white">
                  <span className="text-[9px] font-extrabold tracking-widest text-brand-teal-300 uppercase mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-300 mt-1 line-clamp-1 font-semibold select-none leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global section button view complete gallery */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("gallery")}
            className="inline-flex items-center gap-2 py-3 px-8 text-xs font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full shadow-md shadow-brand-teal-500/10 cursor-pointer"
          >
            Lihat Galeri Lengkap
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
