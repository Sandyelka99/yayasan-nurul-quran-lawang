/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Heart, Building2, BookMarked, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface DonationCampaignsProps {
  onDonateSelect: (campaign: any) => void;
  onNavigate: (viewId: string) => void;
}

export default function DonationCampaigns({ onDonateSelect, onNavigate }: DonationCampaignsProps) {
  const donationPrograms = [
    {
      id: "pembangunan",
      title: "Donasi Pembangunan",
      description: "Pembangunan prasarana fisik pesantren, asrama santri tahfidz Lawang, dan sarana ibadah jamaah.",
      icon: Building2,
      tag: "Fisik & Prasarana",
      percentage: "78%",
      color: "text-amber-500 bg-amber-50 border-amber-100",
    },
    {
      id: "wakaf-quran",
      title: "Wakaf Al-Qur’an",
      description: "Pengadaan mushaf Al-Qur'an terstandar syar'i untuk dibagikan gratis kepada santri, majelis taklim, dan masyarakat binaan.",
      icon: BookMarked,
      tag: "Amal Jariyah",
      percentage: "90%",
      color: "text-[#0a8a9a] bg-brand-teal-50 border-brand-teal-100",
    },
    {
      id: "sosial",
      title: "Program Sosial",
      description: "Penyaluran paket sembako dhuafa, beasiswa santri berprestasi, ramadhan berkah, dan santunan yatim.",
      icon: Users,
      tag: "Kemaslahatan Umum",
      percentage: "85%",
      color: "text-indigo-500 bg-indigo-50 border-indigo-100",
    },
    {
      id: "foster",
      title: "Orang Tua Asuh",
      description: "Program dukungan pendidikan dan pembinaan bagi anak-anak yang membutuhkan melalui kontribusi rutin dari para dermawan.",
      icon: Heart,
      tag: "Sponsorship Rutin",
      percentage: "60%",
      color: "text-rose-500 bg-rose-50 border-rose-100",
    },
  ];

  return (
    <section className="py-24 bg-brand-dark-50 relative overflow-hidden" id="section-home-donations">
      {/* Ornaments in background */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
            Donasi & Wakaf Yayasan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Salurkan Kebaikan untuk Pendidikan, Dakwah, dan Sosial Umat
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
            Every donasi dan wakaf yang dititipkan menjadi bagian dari ikhtiar bersama dalam mendidik generasi Qurani dan melayani kebutuhan umat rujukan amanat syariah.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donationPrograms.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => {
                  if (prog.id === "foster") {
                    onNavigate("foster");
                  } else {
                    onNavigate("donations");
                  }
                }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-150 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">
                      {prog.tag}
                    </span>
                    <div className={`p-2.5 rounded-xl border ${prog.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-brand-dark-900 group-hover:text-brand-teal-500 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-3.5 leading-relaxed font-semibold">
                    {prog.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-teal-600">
                  <span>
                    {prog.id === "foster" ? "Jadi Orang Tua Asuh" : "Salurkan Donasi"}
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Beautiful footer alert banner */}
        <div className="mt-14 max-w-4xl mx-auto flex items-center justify-between flex-col md:flex-row bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm gap-6">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block p-3 rounded-2xl bg-brand-teal-50 text-brand-teal-500">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-brand-dark-900">Garansi Penyaluran 100% Bebas Korupsi & Transparan</h4>
              <p className="text-xs text-gray-400 font-semibold mt-1">Kami menerapkan pelaporan real-time, audit keuangan rapi, serta pembukuan syariah.</p>
            </div>
          </div>
          
          <div className="flex shrink-0 gap-3 w-full md:w-auto">
            <button
              onClick={() => onNavigate("donations")}
              className="flex-1 md:flex-none text-center py-2.5 px-5 bg-brand-teal-500 hover:bg-brand-teal-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-brand-teal-500/10"
            >
              Salurkan Donasi Sekarang
            </button>
            <button
              onClick={() => onNavigate("foster")}
              className="flex-1 md:flex-none text-center py-2.5 px-5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              Jadi Orang Tua Asuh
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
