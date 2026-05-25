/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data/mockData";
import { Grid, Eye, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [filter, setFilter] = useState("semua");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "semua", label: "Semua Galeri" },
    { id: "rutaba", label: "Rumah Tahfidz Balita" },
    { id: "tahfidz", label: "Tahfidz Center" },
    { id: "pembangunan", label: "Pembangunan fisik" },
    { id: "kegiatan", label: "Kegiatan Sosial" },
  ];

  const filteredItems = filter === "semua"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section className="py-24 bg-brand-dark-50 relative overflow-hidden" id="section-gallery">
      <div className="absolute left-0 bottom-24 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
            GALERI FOTO DOKUMENTASI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Transparansi Visual Syariah & Kegiatan
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
            Menyajikan ruang belajar kondusif, sarana prasarana terpelihara, serta material fisik pembangunan. Sesuai tuntunan sunnah, kami menghindari publikasi close-up wajah santri sebagai bentuk pelindungan murni.
          </p>
        </div>

        {/* Filter categories tabs */}
        <div className="flex justify-center flex-wrap items-center gap-1.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`py-1.5 px-4 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-brand-teal-500 border-brand-teal-500 text-white shadow-sm"
                  : "bg-white border-gray-150 text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                onClick={() => setSelectedImage(item.imageUrl)}
                className="group relative h-72 rounded-2xl overflow-hidden bg-brand-dark-900 border border-gray-150 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                {/* Foreground Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
                
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />

                {/* Info Text Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-20 flex flex-col justify-end text-white">
                  <span className="text-[9px] font-extrabold tracking-widest text-brand-teal-300 uppercase mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-300 mt-1 line-clamp-1 font-medium select-none">
                    {item.description}
                  </p>
                </div>

                {/* Floating Preview zoom button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Big Preview Modal Pop-up */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-brand-dark-950/80 backdrop-blur-sm cursor-zoom-out"
            />
            <div className="relative z-10 max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl flex items-center justify-center">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 rounded-full bg-black/50 hover:bg-black/75 p-2 text-white border border-white/10 transition-colors"
                id="btn-close-gallery-preview"
              >
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Selected preview" 
                referrerPolicy="no-referrer"
                className="max-h-[85vh] object-contain" 
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
