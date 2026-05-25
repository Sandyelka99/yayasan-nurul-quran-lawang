/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, BookOpen, Heart, Activity, Building2 } from "lucide-react";
import { STATISTICS } from "../data/mockData";
import { motion } from "motion/react";

interface StatsProps {
  onProgressClick?: () => void;
}

export default function Stats({ onProgressClick }: StatsProps) {
  const statItems = [
    {
      id: "students",
      label: "Santri Binaan Aktif",
      value: STATISTICS.activeStudents.toLocaleString("id-ID") + "+",
      description: "Rutaba, Tahfiz, & Bina Akademik",
      icon: GraduationCap,
      color: "text-brand-teal-500 bg-brand-teal-50",
    },
    {
      id: "teachers",
      label: "Asatidzah & Staff",
      value: STATISTICS.teachers.toString() + "+",
      description: "Pengajar berstandar sanad & Lc",
      icon: BookOpen,
      color: "text-amber-600 bg-amber-50",
    },
    {
      id: "donors",
      label: "Muzakki & Donatur",
      value: STATISTICS.donors.toLocaleString("id-ID") + "+",
      description: "Ikut berkontribusi dakwah",
      icon: Heart,
      color: "text-rose-500 bg-rose-50",
    },
    {
      id: "programs",
      label: "Program Pendidikan",
      value: STATISTICS.activePrograms.toString() + " Aktif",
      description: "Pendidikan & Sosial Sinergi",
      icon: Activity,
      color: "text-indigo-500 bg-indigo-50",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 z-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Core Quick Numerical Stats Card */}
        <div className="md:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-brand-dark-900/5 border border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={item.id}
                className="flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-gray-800 mt-1">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium mt-0.5">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real-time Construction Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={onProgressClick}
          className="md:col-span-4 bg-gradient-to-tr from-brand-teal-700 to-brand-teal-600 text-white rounded-2xl p-6 shadow-xl shadow-brand-teal-500/10 border border-brand-teal-600 flex flex-col justify-between cursor-pointer group hover:brightness-105 active:scale-99 transition-all"
          id="stats-construction-card"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-extrabold tracking-wider bg-black/15 text-brand-teal-100 rounded-full px-2.5 py-1 uppercase">
                Progress Pembangunan
              </span>
              <Building2 className="h-5 w-5 text-brand-teal-200" />
            </div>
            <div className="text-2xl font-extrabold tracking-tight mt-1">
              Gedung Pesantren {STATISTICS.constructionProgress}%
            </div>
            <p className="text-xs text-brand-teal-100/90 mt-1 font-medium leading-normal">
              Saat ini memasuki tahap penyelesaian atap cor masjid & pembagian porselen kluster asrama putra.
            </p>
          </div>

          <div className="mt-5">
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-brand-teal-200">Realisasi Anggaran</span>
              <span>Rp 1.17 M / Rp 1.50 M</span>
            </div>
            {/* Styled progress bar */}
            <div className="w-full bg-brand-teal-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-brand-gold-500 h-full rounded-full transition-all duration-1000" 
                style={{ width: `${STATISTICS.constructionProgress}%` }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
