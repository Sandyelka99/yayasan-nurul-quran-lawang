/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Users, Check, Star, Shield, Heart } from "lucide-react";
import { FOSTER_PACKAGES } from "../data/mockData";
import { FosterPackage } from "../types";
import { motion } from "motion/react";

interface FosterParentProps {
  onFosterSelect: (pck: FosterPackage) => void;
}

export default function FosterParent({ onFosterSelect }: FosterParentProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="section-foster-parents">
      {/* Decorative Blur Vectors */}
      <div className="absolute right-0 bottom-10 w-96 h-96 bg-brand-gold-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute left-1/4 top-1/4 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#d97706] bg-amber-50 px-3.5 py-1.5 rounded-full uppercase">
            PROGRAM ORANG TUA ASUH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Jadilah Orang Tua Asuh bagi Penghafal Al-Qur’an
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            Dukung penuh kebutuhan primer berupa pendidikan terpadu, makanan bergizi, kitab-kitab hafalan, dan sandang layak para santri yatim-duafa dhu'afa agar mereka dapat menghafal kalamullah dengan tulus dan tenang.
          </p>
        </div>

        {/* Foster Packages Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {FOSTER_PACKAGES.map((pck, idx) => {
            const isFeatured = pck.badge === "Terfavorit";
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={pck.id}
                className={`relative flex flex-col justify-between rounded-3xl bg-white p-7 sm:p-8 transition-all hover:shadow-2xl ${
                  isFeatured
                    ? "border-2 border-brand-teal-500 shadow-xl shadow-brand-teal-500/5 -translate-y-2.5 md:-translate-y-4"
                    : "border border-gray-150 shadow-md shadow-brand-dark-900/5 hover:-translate-y-1.5"
                }`}
              >
                {/* Featured Badge */}
                {pck.badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-extrabold tracking-wider uppercase ${
                    isFeatured 
                      ? "bg-brand-teal-500 text-white shadow-sm" 
                      : "bg-brand-dark-900 text-brand-gold-50"
                  }`}>
                    {pck.badge}
                  </span>
                )}

                <div>
                  {/* Package Meta */}
                  <div className="mb-6">
                    <h3 className="text-lg font-extrabold text-brand-dark-900 leading-snug">
                      {pck.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 font-medium leading-normal">
                      {pck.description}
                    </p>
                  </div>

                  {/* Pricing tier */}
                  <div className="mb-6 pb-6 border-b border-gray-100 flex items-baseline gap-1">
                    <span className="text-sm font-bold text-gray-400">Rp</span>
                    <span className="text-3xl font-extrabold text-brand-dark-900 tracking-tight font-mono">
                      {pck.price.toLocaleString("id-ID")}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">/{pck.period}</span>
                  </div>

                  {/* Benefits check list */}
                  <div className="space-y-3.5 mb-8">
                    {pck.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${
                          isFeatured ? "bg-brand-teal-50 text-brand-teal-500" : "bg-gray-100 text-gray-500"
                        }`}>
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Action Call to action */}
                <button
                  onClick={() => onFosterSelect(pck)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs text-center transition-all cursor-pointer ${
                    isFeatured
                      ? "bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:brightness-105 text-white shadow-lg shadow-brand-teal-500/10"
                      : "bg-brand-dark-50 hover:bg-gray-100 border border-gray-150 text-brand-dark-900"
                  }`}
                >
                  {isFeatured ? "Pilih Paket Terfavorit" : "Jadi Orang Tua Asuh"}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Emotion-evoking bottom security notification banner */}
        <div className="mt-14 max-w-3xl mx-auto flex items-start gap-3 bg-brand-dark-50 rounded-2xl p-5 border border-gray-150 shadow-sm">
          <Shield className="h-6 w-6 text-brand-teal-500 shrink-0 mt-0.5" />
          <div>
            <span className="block text-xs font-extrabold text-brand-dark-900">Garansi Layanan Laporan Kemanusiaan</span>
            <span className="block text-xs text-gray-500 mt-1 font-medium leading-relaxed">
              Sebagai Orang Tua Asuh, Anda akan dipasangkan dengan 1 santri asuh secara khusus (1-on-1 sponsorship). Tiap semester kami mengirimkan rekaman video setoran hafalan terbaru dari santri tersebut beserta kartu laporan kemajuan akhlak langsung ke alamat email atau WhatsApp Anda.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
