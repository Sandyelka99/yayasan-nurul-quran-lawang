/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from "react";
import { Campaign } from "../types";
import { 
  Heart, 
  Users, 
  Flame, 
  Coins, 
  ShieldCheck, 
  FileText, 
  BookOpen, 
  Award,
  Sparkles, 
  Search,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DonationWakafPageProps {
  onDonateSelect: (campaign: Campaign) => void;
  onViewDetail: (campaignId: string) => void;
  campaignsList: Campaign[];
}

// Fixed 8 campaign items precisely as requested by the user
export const STAGE_CAMPAIGNS: Campaign[] = [
  {
    id: "pembangunan-pesantren",
    title: "Donasi Pembangunan Pesantren",
    category: "pembangunan",
    description: "Mendukung pembangunan dan pengembangan fasilitas pesantren agar kegiatan belajar dan tahfidz berjalan lebih nyaman.",
    targetAmount: 1000000000,
    currentAmount: 780000000,
    donorsCount: 320,
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    isUrgent: true,
  },
  {
    id: "wakaf-quran-pesantren",
    title: "Wakaf Al-Qur’an",
    category: "wakaf",
    description: "Menyediakan mushaf Al-Qur’an untuk santri, rumah tahfidz, dan program pembelajaran Qurani.",
    targetAmount: 30000000,
    currentAmount: 16800000,
    donorsCount: 210,
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200",
    isUrgent: false,
  },
  {
    id: "makan-santri-program",
    title: "Program Makan Santri",
    category: "pendidikan",
    description: "Membantu kebutuhan makan santri agar mereka dapat belajar dan menghafal Al-Qur’an dengan tenang.",
    targetAmount: 30000000,
    currentAmount: 18600000,
    donorsCount: 195,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
    isUrgent: true,
  },
  {
    id: "beasiswa-santri-tahfidz",
    title: "Beasiswa Santri Penghafal Al-Qur’an",
    category: "orang-tua-asuh",
    description: "Membantu biaya pendidikan dan pembinaan anak-anak penghafal Al-Qur’an.",
    targetAmount: 30000000,
    currentAmount: 21000000,
    donorsCount: 140,
    imageUrl: "https://images.unsplash.com/photo-1512632511790-760901e47f5b?auto=format&fit=crop&q=80&w=1200",
    isUrgent: false,
  },
  {
    id: "sarana-belajar-rutaba",
    title: "Pengembangan Sarana Belajar",
    category: "pendidikan",
    description: "Pengadaan meja belajar, rak kitab, papan tulis, dan perlengkapan belajar santri.",
    targetAmount: 50000000,
    currentAmount: 25000000,
    donorsCount: 180,
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200",
    isUrgent: false,
  },
  {
    id: "operasional-dakwah-yayasan",
    title: "Operasional Dakwah Yayasan",
    category: "operasional-dakwah",
    description: "Mendukung kegiatan dakwah, kajian, pembinaan, dan program sosial Yayasan Nurul Quran.",
    targetAmount: 75000000,
    currentAmount: 33750000,
    donorsCount: 125,
    imageUrl: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?auto=format&fit=crop&q=80&w=1200",
    isUrgent: false,
  },
  {
    id: "wakaf-ruang-belajar",
    title: "Wakaf Ruang Belajar",
    category: "wakaf",
    description: "Program wakaf untuk pembangunan dan renovasi ruang belajar santri.",
    targetAmount: 250000000,
    currentAmount: 87500000,
    donorsCount: 98,
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    isUrgent: false,
  },
  {
    id: "wakaf-kitab-rak",
    title: "Wakaf Kitab dan Rak Buku",
    category: "wakaf",
    description: "Pengadaan kitab, buku pelajaran, dan rak penyimpanan untuk unit pendidikan yayasan.",
    targetAmount: 40000000,
    currentAmount: 22000000,
    donorsCount: 160,
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1200",
    isUrgent: false,
  }
];

export default function DonationWakafPage({ 
  onDonateSelect, 
  onViewDetail,
  campaignsList 
}: DonationWakafPageProps) {
  const [activeTab, setActiveTab] = useState<string>("semua");

  const categories = [
    { id: "semua", label: "Semua Kategori" },
    { id: "pembangunan", label: "Pembangunan" },
    { id: "wakaf", label: "Wakaf" },
    { id: "pendidikan", label: "Pendidikan" },
    { id: "orang-tua-asuh", label: "Orang Tua Asuh" },
    { id: "operasional-dakwah", label: "Operasional Dakwah" },
  ];

  // Merge runtime simulated donations into STAGE_CAMPAIGNS to ensure synchronization with the sandbox dashboard
  const displayCampaigns = STAGE_CAMPAIGNS.map(sc => {
    const freshRef = campaignsList.find(c => c.id === sc.id || (sc.id === "pembangunan-pesantren" && c.id === "pesantren-pembangunan"));
    if (freshRef) {
      return {
        ...sc,
        currentAmount: freshRef.currentAmount,
        donorsCount: freshRef.donorsCount
      };
    }
    return sc;
  });

  const filteredCampaigns = activeTab === "semua"
    ? displayCampaigns
    : displayCampaigns.filter(c => c.category === activeTab);

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-brand-dark-900 pb-20">
      
      {/* SECTION 1: HERO CONTAINER HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-brand-teal-950 text-white py-24 sm:py-32 border-b border-brand-teal-900/40">
        
        {/* Intricate Islamic Geometric Grid Overlay & Vector Lines */}
        <div className="absolute inset-0 islamic-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-brand-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-5%] w-[350px] h-[350px] bg-brand-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Elegant Small Decorative Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-brand-teal-200 bg-brand-teal-500/15 border border-brand-teal-500/20 rounded-full uppercase mb-6">
              <Sparkles className="h-3.5 w-3.5 text-brand-teal-400" />
              INVESTASI AKHIRAT AMANAH & SYAR'I
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
              Donasi & Wakaf untuk <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-300 via-brand-teal-100 to-brand-gold-300">
                Pendidikan Qurani
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-sm sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-semibold">
              Setiap dukungan Anda membantu pembangunan pesantren, pendidikan santri, program tahfidz, dan dakwah Yayasan Nurul Quran Lawang Malang.
            </p>

            {/* Call to Actions (CTAs) */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  const targetElement = document.getElementById("program-listing-section");
                  if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all duration-300 shadow-lg shadow-brand-teal-500/20 hover:shadow-brand-teal-600/30 rounded-full cursor-pointer"
              >
                Donasi Sekarang
              </button>
              <button
                onClick={() => {
                  setActiveTab("wakaf");
                  const targetElement = document.getElementById("program-listing-section");
                  if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-teal-300 bg-transparent hover:bg-white/5 transition-all duration-300 border border-brand-teal-500/35 rounded-full cursor-pointer"
              >
                Lihat Program Wakaf
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SECTION 2: CATEGORICAL TABS & CAMPAIGN GRID */}
      <section id="program-listing-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header Text */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] bg-brand-teal-100/60 px-3 py-1 rounded-full uppercase">
            PROGRAM AKTIF
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">
            Peluang Amal Jariyah Anda
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-gray-500 font-semibold">
            Silakan pilih program kemanfaatan umat yang ingin Anda sokong demi melahirkan generasi penghafal Al-Qur'an.
          </p>
        </div>

        {/* Filter Tab buttons */}
        <div className="flex items-center justify-center mb-12 border-b border-gray-100 pb-2">
          <div className="flex flex-wrap items-center justify-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`py-2 px-4 text-xs font-bold rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === cat.id
                    ? "bg-brand-teal-500 border-brand-teal-500 text-white shadow-md shadow-brand-teal-500/10"
                    : "bg-white border-gray-150 text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCampaigns.map((camp, index) => {
              const percent = Math.min(Math.round((camp.currentAmount / camp.targetAmount) * 100), 100);
              
              // We want to link the Pembangunan Pesantren specifically to /donasi-wakaf/pembangunan-pesantren slug page
              const slugLink = camp.id === "pembangunan-pesantren" || camp.id === "pesantren-pembangunan"
                ? "pembangunan-pesantren"
                : camp.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={camp.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl hover:shadow-brand-dark-900/5 transition-all flex flex-col justify-between"
                  id={`campaign-${camp.id}`}
                >
                  {/* Thumbnail non-living, complying to requirements */}
                  <div className="relative h-48 bg-brand-dark-950 overflow-hidden">
                    <img
                      src={camp.imageUrl}
                      alt={camp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                    />
                    
                    {/* Category overlay */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[9px] font-extrabold tracking-wider text-white bg-brand-dark-900/60 backdrop-blur-md px-2.5 py-1 rounded-full uppercase">
                        {camp.category.replace("-", " ")}
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
                      <h3 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 leading-snug hover:text-brand-teal-500 transition-colors cursor-pointer" onClick={() => onViewDetail(slugLink)}>
                        {camp.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 mt-2 font-medium leading-relaxed min-h-[3.5rem] line-clamp-3">
                        {camp.description}
                      </p>
                    </div>

                    {/* Funding and progress bar */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-3">
                        <div
                          className="bg-gradient-to-r from-brand-teal-500 via-brand-teal-400 to-teal-300 h-full rounded-full"
                          style={{ width: `${percent}%` }}
                        />
                      </div>

                      {/* Cash value details */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <span className="block text-[9px] font-bold text-gray-400 uppercase">Terkumpul</span>
                          <span className="block text-xs font-extrabold text-brand-teal-600 font-mono">
                            Rp {camp.currentAmount.toLocaleString("id-ID")}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block text-[9px] font-bold text-gray-400 uppercase">Target</span>
                          <span className="block text-xs font-extrabold text-brand-dark-900 font-mono">
                            Rp {camp.targetAmount.toLocaleString("id-ID")}
                          </span>
                        </div>
                      </div>

                      {/* Donors count with percentages */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-1.5 text-gray-500 font-semibold">
                          <Users className="h-3.5 w-3.5 text-brand-teal-400" />
                          <span className="text-[10px] font-semibold">{camp.donorsCount} Donatur</span>
                        </div>
                        <span className="text-[10px] font-extrabold text-brand-teal-500 bg-brand-teal-50 px-2 py-0.5 rounded font-mono">
                          {percent}%
                        </span>
                      </div>

                      {/* Navigation buttons */}
                      <div className="grid grid-cols-2 gap-2 mt-5">
                        <button
                          onClick={() => onViewDetail(slugLink)}
                          className="flex items-center justify-center py-2.5 px-3 text-[11px] font-extrabold text-gray-500 hover:text-brand-teal-600 border border-gray-150 hover:border-brand-teal-200 hover:bg-brand-teal-50/20 rounded-xl transition-all cursor-pointer"
                        >
                          Lihat Detail
                        </button>
                        <button
                          onClick={() => onDonateSelect(camp)}
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-[11px] font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-xl shadow-sm shadow-brand-teal-500/15 cursor-pointer"
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
          </AnimatePresence>
        </div>
      </section>


      {/* SECTION 3: TRUST & TRANSPARANSI VALUE CARDS */}
      <section className="py-24 bg-white border-t border-b border-gray-100 relative overflow-hidden">
        
        {/* Background Decors */}
        <div className="absolute right-0 top-1/4 w-80 h-80 bg-brand-teal-500/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 text-[10px] font-extrabold tracking-widest text-brand-teal-500 bg-brand-teal-50 rounded-full uppercase">
              TATA KELOLA AMANAH & TERPERCAYA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
              Mengapa Berdonasi Melalui Yayasan Nurul Quran?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
              Kami memegang teguh komitmen keterbukaan dan pelaporan dana umat secara berkala sesuai syariat Al-Qur'an dan Sunnah nabi saw.
            </p>
          </div>

          {/* Grid Value Cards, non-living creatures, complying with sunnah guidelines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Value 1 */}
            <div className="p-6 rounded-2xl border border-gray-150 bg-brand-dark-50/50 hover:bg-white hover:border-brand-teal-200 hover:shadow-lg hover:shadow-brand-teal-600/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-teal-50 text-brand-teal-500 flex items-center justify-center mb-5 border border-brand-teal-100">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 mb-2">Amanah</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Dana dikelola untuk program pendidikan, tahfidz, pembangunan, dan dakwah yayasan.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-6 rounded-2xl border border-gray-150 bg-brand-dark-50/50 hover:bg-white hover:border-brand-teal-200 hover:shadow-lg hover:shadow-brand-teal-600/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-teal-50 text-brand-teal-500 flex items-center justify-center mb-5 border border-brand-teal-100">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 mb-2">Transparan</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Progress dan laporan penggunaan dana ditampilkan secara berkala.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-6 rounded-2xl border border-gray-150 bg-brand-dark-50/50 hover:bg-white hover:border-brand-teal-200 hover:shadow-lg hover:shadow-brand-teal-600/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-teal-50 text-brand-teal-500 flex items-center justify-center mb-5 border border-brand-teal-100">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 mb-2">Bermanfaat</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Setiap donasi mendukung pendidikan Qurani dan pembinaan generasi Islam.
              </p>
            </div>

            {/* Value 4 */}
            <div className="p-6 rounded-2xl border border-gray-150 bg-brand-dark-50/50 hover:bg-white hover:border-brand-teal-200 hover:shadow-lg hover:shadow-brand-teal-600/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-teal-50 text-brand-gold-600 flex items-center justify-center mb-5 border border-brand-gold-100">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 mb-2">Sesuai Sunnah</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Program diarahkan untuk pendidikan dan pembinaan berdasarkan nilai Islam yang lurus.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4: STEP BY STEP GUIDE ON HOW TO DONATE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
            PANDUAN TRANSAKSI
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Bagaimana Cara Berdonasi?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
            Metode donasi sangat mudah dilakukan melalui smartphone maupun komputer Anda.
          </p>
        </div>

        {/* Steps Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Arrow vectors connecting cards (hidden on mobile) */}
          <div className="hidden md:block absolute top-[2.2rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-teal-200 via-brand-teal-100 to-brand-teal-200 z-0 pointer-events-none" />

          {/* Step 1 */}
          <div className="relative z-10 text-center flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-150 hover:shadow-md transition-shadow">
            <span className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-teal-500 font-extrabold text-white text-xs flex items-center justify-center shadow-lg shadow-brand-teal-500/15">
              1
            </span>
            <div className="w-12 h-12 rounded-full bg-brand-teal-50 text-brand-teal-500 flex items-center justify-center mt-3 mb-4">
              <Search className="h-5 w-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mb-1.5">Pilih Program</h4>
            <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
              Pilih program donasi atau wakaf yang ingin didukung sesuai kata hati Anda.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 text-center flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-150 hover:shadow-md transition-shadow">
            <span className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-teal-500 font-extrabold text-white text-xs flex items-center justify-center shadow-lg shadow-brand-teal-500/15">
              2
            </span>
            <div className="w-12 h-12 rounded-full bg-brand-teal-50 text-brand-teal-500 flex items-center justify-center mt-3 mb-4">
              <Coins className="h-5 w-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mb-1.5">Isi Nominal</h4>
            <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
              Masukkan nominal donasi sesuai keleluasaan rezeki serta kelonggaran harta Anda.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 text-center flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-150 hover:shadow-md transition-shadow">
            <span className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-teal-500 font-extrabold text-white text-xs flex items-center justify-center shadow-lg shadow-brand-teal-500/15">
              3
            </span>
            <div className="w-12 h-12 rounded-full bg-brand-teal-50 text-brand-teal-500 flex items-center justify-center mt-3 mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mb-1.5">Transfer / QRIS</h4>
            <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
              Lakukan pembayaran murni melalui rekening bank resmi yayasan maupun scan QRIS cepat.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 text-center flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-150 hover:shadow-md transition-shadow">
            <span className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-teal-500 font-extrabold text-white text-xs flex items-center justify-center shadow-lg shadow-brand-teal-500/15">
              4
            </span>
            <div className="w-12 h-12 rounded-full bg-brand-teal-50 text-[#0f766e] flex items-center justify-center mt-3 mb-4">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mb-1.5">Terima Konfirmasi</h4>
            <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
              Donatur mendapatkan laporan bukti akad penerimaan, rincian ZISWAF, dan update progress berkala.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
