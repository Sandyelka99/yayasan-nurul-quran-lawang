/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { FileCheck, Building2, BookOpen, Heart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HomeReportsPreviewProps {
  onNavigate: (viewId: string) => void;
}

export default function HomeReportsPreview({ onNavigate }: HomeReportsPreviewProps) {
  const reports = [
    {
      id: "building",
      title: "Laporan Pembangunan",
      subtitle: "Fasilitas Fisik",
      description: "Perkembangan pembangunan fasilitas yayasan saat ini telah mencapai 78%.",
      icon: Building2,
      meta: "Target Selesai: Akhir 2026",
      color: "bg-amber-50 text-amber-600 border-amber-100",
      progress: 78,
    },
    {
      id: "programs",
      title: "Laporan Program",
      subtitle: "Pendidikan & Sosial",
      description: "Ringkasan kegiatan pendidikan, sosial, dan dakwah yang telah dilaksanakan secara berkala.",
      icon: BookOpen,
      meta: "Update berkala per bulan",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      progress: 100,
    },
    {
      id: "donations",
      title: "Laporan Donasi",
      subtitle: "Penyaluran Dana",
      description: "Informasi penyaluran dana dan dukungan umat untuk berbagai program yayasan.",
      icon: Heart,
      meta: "Transparansi 100% Akurat",
      color: "bg-rose-50 text-rose-600 border-rose-100",
      progress: 100,
    },
  ];

  return (
    <section className="py-24 bg-brand-dark-50 relative overflow-hidden" id="section-home-reports">
      {/* Background Ornaments */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0a8a9a] bg-brand-teal-100/60 px-3.5 py-1.5 rounded-full uppercase">
            Laporan Transparansi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Laporan Program & Transparansi
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
            Transparansi perkembangan pembangunan, penggunaan dana, dan capaian program Yayasan Nurul Quran.
          </p>
        </div>

        {/* Reports Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reports.map((report, idx) => {
            const Icon = report.icon;
            return (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => onNavigate("progress")}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-150 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                      {report.subtitle}
                    </span>
                    <div className={`p-2.5 rounded-xl border ${report.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-brand-dark-900 leading-snug group-hover:text-brand-teal-500 transition-colors">
                    {report.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-3 leading-relaxed font-semibold">
                    {report.description}
                  </p>

                  {/* Progressive visual bar for Construction report specifically */}
                  {report.id === "building" && (
                    <div className="mt-6 bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase mb-1.5">
                        <span>Pembangunan Fisik</span>
                        <span className="text-brand-teal-600 font-mono">{report.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-150 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-teal-500 h-full rounded-full" style={{ width: "78%" }} />
                      </div>
                    </div>
                  )}

                  {report.id !== "building" && (
                    <div className="mt-6 text-[10px] text-brand-teal-600 bg-brand-teal-50/50 border border-brand-teal-100/40 px-3 py-1.5 rounded-lg font-bold w-fit">
                      {report.meta}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-teal-600 group-hover:text-brand-teal-700">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Action CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("progress")}
            className="inline-flex items-center gap-2 py-3 px-8 text-xs font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full shadow-md shadow-brand-teal-500/10 cursor-pointer"
          >
            Lihat Semua Laporan
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
