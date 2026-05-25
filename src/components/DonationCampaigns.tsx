/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Heart, Users, Flame, Star, Coins } from "lucide-react";
import { CAMPAIGNS } from "../data/mockData";
import { Campaign } from "../types";
import { motion } from "motion/react";

interface DonationCampaignsProps {
  onDonateSelect: (campaign: Campaign) => void;
  onViewDetail?: (slug: string) => void;
}

export default function DonationCampaigns({ onDonateSelect, onViewDetail }: DonationCampaignsProps) {
  const [filter, setFilter] = useState<string>("semua");

  const categories = [
    { id: "semua", label: "Semua Program" },
    { id: "pembangunan", label: "Pembangunan" },
    { id: "wakaf", label: "Wakaf" },
    { id: "sosial", label: "Makan & Sosial" },
    { id: "beasiswa", label: "Beasiswa" },
  ];

  const filteredCampaigns = filter === "semua"
    ? CAMPAIGNS
    : CAMPAIGNS.filter(c => c.category === filter);

  return (
    <section className="py-24 bg-brand-dark-50 relative overflow-hidden" id="section-campaigns">
      {/* Decorative Ornaments */}
      <div className="absolute left-0 top-10 w-64 h-64 bg-brand-teal-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-widest text-[#0a8a9a] bg-brand-teal-100/60 px-3.5 py-1.5 rounded-full uppercase">
              DONASI & WAKAF DIGITAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
              Peluang Amal Jariyah & Investasi Akhirat Anda
            </h2>
            <p className="mt-3 text-sm text-gray-500 font-medium leading-relaxed">
              Salurkan donasi, sedekah bulanan, serta wakaf produktif Anda secara digital, aman, dan berlandaskan keterbukaan laporan keuangan berstandar amanah.
            </p>
          </div>
          
          {/* Quick Informative Card */}
          <div className="hidden lg:flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-gray-150 shadow-sm max-w-sm">
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-500 shrink-0">
              <Coins className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs font-bold text-brand-dark-900">100% Disalurkan</span>
              <span className="block text-[10px] text-gray-400 font-medium">Dana terkumpul murni didedikasikan untuk kebutuhan santri, tanpa komisi pihak ketiga.</span>
            </div>
          </div>
        </div>

        {/* Filter Tab buttons */}
        <div className="flex flex-wrap items-center gap-1.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`py-2 px-4 text-xs font-bold rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                filter === cat.id
                  ? "bg-brand-teal-500 border-brand-teal-500 text-white shadow-sm"
                  : "bg-white border-gray-150 text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCampaigns.map((camp, index) => {
            const percent = Math.min(Math.round((camp.currentAmount / camp.targetAmount) * 100), 100);
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={camp.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl hover:shadow-brand-dark-900/5 transition-all flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div className="relative h-44 bg-brand-dark-900 overflow-hidden">
                  <img
                    src={camp.imageUrl}
                    alt={camp.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                  />
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] font-extrabold tracking-wider text-white bg-brand-dark-900/60 backdrop-blur-md px-2.5 py-1 rounded-full uppercase">
                      {camp.category}
                    </span>
                  </div>

                  {/* Urgent indicator */}
                  {camp.isUrgent && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 text-[9px] font-extrabold text-[#7f1d1d] bg-red-100 rounded-full">
                      <Flame className="h-3 w-3 fill-red-500 text-red-500" />
                      URGENT
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => onViewDetail && onViewDetail(camp.id === "pesantren-pembangunan" || camp.id === "pesantren-pembangunan" ? "pembangunan-pesantren" : camp.id)}
                      className="text-sm sm:text-base font-extrabold text-brand-dark-900 leading-snug line-clamp-2 hover:text-brand-teal-500 transition-colors cursor-pointer"
                    >
                      {camp.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 font-medium line-clamp-2 leading-relaxed">
                      {camp.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    {/* Progress Bar Container */}
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-3">
                      <div
                        className="bg-gradient-to-r from-brand-teal-500 to-teal-400 h-full rounded-full"
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    {/* Numeric tracking metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 uppercase">Terkumpul</span>
                        <span className="block text-xs font-extrabold text-brand-teal-600 font-mono">
                          Rp {camp.currentAmount.toLocaleString("id-ID")}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase">Target Dana</span>
                        <span className="block text-xs font-extrabold text-brand-dark-900 font-mono">
                          Rp {camp.targetAmount.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                        <Users className="h-3.5 w-3.5 text-brand-teal-400" />
                        <span className="text-[10px] font-bold">{camp.donorsCount} Donatur</span>
                      </div>
                      <span className="text-xs font-extrabold text-brand-teal-500 bg-brand-teal-50 px-2 py-0.5 rounded font-mono">
                        {percent}%
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-5">
                      <button
                        onClick={() => onViewDetail && onViewDetail(camp.id === "pesantren-pembangunan" || camp.id === "pesantren-pembangunan" ? "pembangunan-pesantren" : camp.id)}
                        className="flex items-center justify-center py-2.5 px-3 text-xs font-bold text-gray-500 hover:text-brand-teal-600 border border-gray-150 hover:border-brand-teal-200 hover:bg-brand-teal-50/20 rounded-xl transition-all cursor-pointer"
                      >
                        Lihat Detail
                      </button>
                      <button
                        onClick={() => onDonateSelect(camp)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-xl shadow-md shadow-brand-teal-500/10 cursor-pointer"
                      >
                        <Heart className="h-3 w-3 fill-white" />
                        Donasi
                      </button>
                    </div>
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
