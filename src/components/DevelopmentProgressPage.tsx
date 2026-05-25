/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from "react";
import { 
  Building, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  HardHat, 
  Database,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Check,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DevelopmentProgressPageProps {
  onNavigate: (viewId: string) => void;
}

export default function DevelopmentProgressPage({ onNavigate }: DevelopmentProgressPageProps) {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("semua");
  const [downloadAlert, setDownloadAlert] = useState<string | null>(null);

  const handleDownload = (docName: string) => {
    setDownloadAlert(`File "${docName}" sedang disiapkan. File laporan akan tersedia secara real-time setelah integrasi backend.`);
    setTimeout(() => {
      setDownloadAlert(null);
    }, 4500);
  };

  // Gallery items - strict Sunnah architectural/material themes
  const galleryItems = [
    {
      id: 1,
      category: "bangunan",
      title: "Pondasi Masjid Baitul Quran",
      desc: "Cor dasar semen dan paku bumi asrama putra.",
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      category: "material",
      title: "Stok Pasir Cor Kualitas Tinggi",
      desc: "Pengiriman material cor lapis baja & semen gresik.",
      url: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      category: "interior",
      title: "Ruang Kelas Kosong Berhawa Sejuk",
      desc: "Pengecatan dinding bebas timbal berestrika tenang.",
      url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      category: "sarana",
      title: "Meja Belajar Jati Sederhana",
      desc: "Meja lipat tahfidz kualitas premium buatan lokal Malang.",
      url: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 5,
      category: "bangunan",
      title: "Pilar Utama Gedung Lantai Dua",
      desc: "Konstruksi besi pilar penyangga kelas asrama.",
      url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 6,
      category: "sarana",
      title: "Lemari Buku & Mushaf",
      desc: "Penempatan lemari partisi kaca tahan rayap.",
      url: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const filteredGallery = activeGalleryFilter === "semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeGalleryFilter);

  return (
    <div className="bg-[#fbfcff] text-brand-dark-900 min-h-screen pb-24">
      
      {/* SECTION 1: HERO CONTAINER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-brand-teal-950 text-white py-24 sm:py-32 border-b border-brand-teal-900/30">
        <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-[-5%] w-[400px] h-[400px] bg-brand-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#d97706] bg-amber-500/15 border border-amber-500/20 rounded-full uppercase mb-6">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold-500" />
              TRANSPARANSI PONPES SUNNAH AMANAH
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              Progress Pembangunan & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-300 via-brand-teal-100 to-brand-gold-300 font-serif italic">
                Transparansi Laporan Umat
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-semibold">
              Yayasan Nurul Quran Lawang Malang berkomitmen menyampaikan perkembangan pembangunan fisik dan keuangan secara terbuka, komprehensif, jujur, serta berkala demi menjaga amanah muhsinin.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#laporan-keuangan"
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full cursor-pointer shadow-lg shadow-brand-teal-500/20 text-center"
              >
                Lihat Laporan Sisa Hibah
              </a>
              <button
                onClick={() => onNavigate("donasi-wakaf/pembangunan-pesantren")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-teal-300 bg-transparent hover:bg-white/5 transition-all border border-brand-teal-500/35 rounded-full cursor-pointer"
              >
                Dukung Pembangunan
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALERT BANNER SYSTEM FOR DOWNLOAD SIMULATION */}
      <AnimatePresence>
        {downloadAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md p-4 bg-brand-dark-900 text-white rounded-2xl shadow-2xl border border-brand-teal-500 flex gap-3.5 items-start"
          >
            <AlertCircle className="h-5 w-5 text-brand-teal-400 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-extrabold text-brand-teal-400 uppercase tracking-widest mb-1">PROMPT SIMULASI DUMMY</span>
              <p className="text-[11px] text-gray-300 font-semibold">{downloadAlert}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* SECTION 2: SUMMARY METRICS DASHBOARD CARDS */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
            <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">Total Target Biaya</span>
            <span className="block text-base sm:text-lg font-extrabold text-brand-dark-900 mt-2 font-mono">Rp 1M</span>
            <span className="text-[8px] text-gray-400 font-bold uppercase mt-1">RAB Final</span>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
            <span className="text-[9px] font-extrabold text-[#0f766e] uppercase tracking-wider">Dana Masuk Terkumpul</span>
            <span className="block text-base sm:text-lg font-extrabold text-[#0f766e] mt-2 font-mono">Rp 780Jt</span>
            <span className="text-[8px] text-brand-teal-500 font-bold uppercase mt-1">78% Terpenuhi</span>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
            <span className="text-[9px] font-extrabold text-amber-600 uppercase tracking-wider">Dana Sudah Digunakan</span>
            <span className="block text-base sm:text-lg font-extrabold text-brand-dark-900 mt-2 font-mono">Rp 520Jt</span>
            <span className="text-[8px] text-gray-400 font-bold uppercase mt-1">Alokasi Kas</span>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
            <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">Sisa Kebutuhan Dana</span>
            <span className="block text-base sm:text-lg font-extrabold text-red-600 mt-2 font-mono">Rp 220Jt</span>
            <span className="text-[8px] text-gray-400 font-bold uppercase mt-1">Sisa Defisit</span>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
            <span className="text-[9px] font-extrabold text-purple-600 uppercase tracking-wider">Progress Fisik Lapangan</span>
            <span className="block text-base sm:text-lg font-extrabold text-brand-teal-600 mt-2 font-mono">68%</span>
            <span className="text-[8px] text-brand-teal-500 font-bold uppercase mt-1">Struktur Siap</span>
          </div>

          <div className="p-5 bg-brand-dark-950 text-white rounded-2xl border border-brand-teal-900 shadow-md flex flex-col justify-between">
            <span className="text-[9px] font-extrabold text-brand-teal-300 uppercase tracking-wider">Audit Syariah</span>
            <span className="block text-base sm:text-lg font-extrabold text-white mt-2 font-mono">100%</span>
            <span className="text-[8px] text-brand-teal-400 font-bold uppercase mt-1">Amanah Tanpa Agen</span>
          </div>

        </div>
      </section>


      {/* SECTION 3: VISUAL GAUGES & PROGRESS STATS ("Progress Pembangunan Pesantren") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Gauge visualization */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#fafcfe] rounded-2xl border border-gray-100">
              <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest text-center mb-6">PROGRESS FISIK AKTUAL</span>
              
              {/* Circular gauge Simulation */}
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle 
                    cx="80" 
                    cy="80" 
                    r="70" 
                    className="stroke-gray-100 fill-transparent" 
                    strokeWidth="10"
                  />
                  <circle 
                    cx="80" 
                    cy="80" 
                    r="70" 
                    className="stroke-[#0f766e] fill-transparent transition-all duration-1000" 
                    strokeWidth="12"
                    strokeDasharray={440}
                    strokeDashoffset={440 - (440 * 68) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-center bg-white w-28 h-28 rounded-full flex flex-col justify-center items-center shadow-inner">
                  <span className="text-3xl font-extrabold font-mono text-brand-dark-900">68%</span>
                  <span className="text-[8px] font-extrabold text-brand-teal-500 uppercase tracking-widest mt-1">SELESAI</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="text-[10px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2.5 py-1 rounded-full uppercase">SEDANG BERJALAN</span>
                <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">Est. Desember 2026</span>
              </div>
            </div>

            {/* Right details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[9px] font-extrabold tracking-widest text-brand-teal-500 uppercase bg-brand-teal-50 px-2 py-0.5 rounded">RAB DAN ESTIMASI</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 mt-2">Detail Capaian & Verifikasi Data</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed mt-2">
                  Pengawasan dilakukan oleh dewan insinyur sipil mandiri bersama pengurus pesantren Lawang. Kami menjamin efisiensi material dengan memangkas segala bentuk komisi agen atau mark-up harga demi menjaga berkah harta wakaf mulia.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                
                {/* Progress bar 1 */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-gray-600 mb-1">
                    <span>Dana Masuk (Muhsinin Terdaftar)</span>
                    <span className="font-mono text-brand-teal-600 text-sm">78%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 h-full rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>

                {/* Progress bar 2 */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-gray-600 mb-1">
                    <span>Kas Tersalurkan ke Pelaksana Bangunan</span>
                    <span className="font-mono text-[#0a8a9a] text-sm">52%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0a8a9a] to-emerald-500 h-full rounded-full" style={{ width: "52%" }} />
                  </div>
                </div>

              </div>

              <div className="p-3 bg-[#fffbeb] rounded-xl border border-amber-200/50 flex gap-2.5 items-start mt-4">
                <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5 animate-bounce" />
                <span className="text-[10px] sm:text-xs font-semibold text-amber-800 leading-normal">
                  <b>Catatan Transparansi:</b> Data kuantitatif, kurva s, dan nominal yang tertera di atas merupakan visualisasi sandbox yang dapat dialihkan ke database real-time database server pada rilis final.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4: BEFORE AFTER CONDITIONAL SHOWCASE ("Sebelum & Sesudah") */}
      <section className="py-24 bg-brand-dark-50/50 border-t border-b border-gray-100 relative">
        <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100 px-3 py-1 rounded-full">VISUAL AKURASI</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Sebelum & Sesudah Pembangunan</h2>
            <p className="mt-2 text-xs text-gray-400 font-semibold">Transformasi sepetak tanah kosong Lawang menjadi pusat studi Quran santri dhu'afa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-gray-100 border-b border-gray-150">
                  <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=400" alt="Kondisi Awal" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="p-5 space-y-2">
                  <span className="inline-block text-[9px] font-extrabold text-gray-400 bg-gray-100 px-2 py-0.5 rounded uppercase">FASE AWAL (FEBRUARI)</span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">1. Kondisi Lahan Asli</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    Area tanah datar berupa perkebunan sepi sebelum diratakan oleh alat berat ustad laskar lapangan.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-[10px] font-bold text-gray-400 border-t border-gray-50 mt-4 py-2.5">
                Status: Selesai Diratakan
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-brand-teal-500 shadow-md flex flex-col justify-between relative">
              <span className="absolute top-2.5 right-2.5 text-[9px] font-extrabold text-white bg-brand-teal-500 px-2.5 py-0.5 rounded-full">BERJALAN</span>
              <div>
                <div className="aspect-[4/3] bg-gray-100 border-b border-gray-150">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400" alt="Progress Saat Ini" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <span className="inline-block text-[9px] font-extrabold text-[#0f766e] bg-brand-teal-50 px-2 py-0.5 rounded uppercase">FASE BERJALAN (MEI)</span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">2. Proses Konstruksi Struktur</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    Tiang-tiang beton cakar ayam cor gantung sudah selesai dipasang menjamin integritas fisis tahan gempa.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-[10px] font-bold text-brand-teal-600 border-t border-brand-teal-50 mt-4 py-2.5">
                Status: Tahap Pembetonan Dinding
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-gray-100 border-b border-gray-150">
                  <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=400" alt="Target Akhir" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <span className="inline-block text-[9px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded uppercase">DESAIN AKHIR (DESEMBER)</span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">3. Target Fasilitas Akhir</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    Kelas asrama bersih dengan fasilitas karpet tahfidz, meja jati, kipas angin, sirkulasi udara optimal.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-[10px] font-bold text-gray-400 border-t border-gray-50 mt-4 py-2.5">
                Status: Perencanaan Interior
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 5: TIMELINE PEMBANGUNAN VERTIKAL */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100 px-3 py-1 rounded-full">ROADMAP</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Timeline Pembangunan</h2>
        </div>

        <div className="relative border-l-2 border-brand-teal-100 pl-6 ml-4 sm:ml-8 max-w-4xl mx-auto space-y-10">
          
          {/* Timeline 1 */}
          <div className="relative">
            <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-brand-teal-500 rounded-full border-4 border-white flex items-center justify-center shadow-md shadow-brand-teal-500/20" />
            <div className="p-5 bg-white rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">1. Perencanaan & Anggaran</h4>
                  <span className="text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded-full uppercase">Selesai</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-1 font-semibold leading-relaxed">
                  Penyusunan rencana kebutuhan, desain sipil arsitek, uji kelayakan tanah sda, dan estimasi anggaran belanja (RAB) Pondok.
                </p>
              </div>
              <span className="text-[10px] text-gray-400 font-bold font-mono uppercase bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Januari 2026</span>
            </div>
          </div>

          {/* Timeline 2 */}
          <div className="relative">
            <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-brand-teal-500 rounded-full border-4 border-white flex items-center justify-center shadow-md shadow-brand-teal-500/20" />
            <div className="p-5 bg-white rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">2. Persiapan Lokasi & Bahan</h4>
                  <span className="text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded-full uppercase">Selesai</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-1 font-semibold leading-relaxed">
                  Perataan area kebun Lawang, perizinan dinas tata kota setempat, dan pengiriman material fondasi baja/batu cor lapis pertama.
                </p>
              </div>
              <span className="text-[10px] text-gray-400 font-bold font-mono uppercase bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Februari 2026</span>
            </div>
          </div>

          {/* Timeline 3 */}
          <div className="relative">
            <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center shadow-md shadow-blue-500/20 animate-pulse" />
            <div className="p-5 bg-white rounded-2xl border-2 border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">3. Pengerjaan Struktur Utama</h4>
                  <span className="text-[9px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase">Sedang Berjalan</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1 font-semibold leading-relaxed">
                  Pengecoran tiang-tiang fondasi asrama kelas, pembuatan dinding batu bata merah bakar, tiang atap masjid utama.
                </p>
              </div>
              <span className="text-[10px] text-blue-600 font-extrabold font-mono uppercase bg-blue-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Maret - Juni 2026</span>
            </div>
          </div>

          {/* Timeline 4 */}
          <div className="relative">
            <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
            <div className="p-5 bg-[#fafbfc] rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-400">4. Instalasi Listrik, Air & Sanitasi</h4>
                  <span className="text-[9px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase">Berikutnya</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-1 font-medium leading-relaxed">
                  Pemasangan kabel dalam dinding kwh token, pipa air tawar tandon atas bukit, septic-tank modern higienis.
                </p>
              </div>
              <span className="text-[10px] text-gray-400 font-medium font-mono uppercase bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Juli - September 2026</span>
            </div>
          </div>

          {/* Timeline 5 */}
          <div className="relative">
            <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
            <div className="p-5 bg-[#fafbfc] rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-400">5. Pengadaan Sarana Belajar</h4>
                  <span className="text-[9px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase">Berikutnya</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-1 font-medium leading-relaxed">
                  Sourcing meja tahfidz kayu halus anti selip, lemari rapi, pengadaan mushaf syafii cetakan Madinah.
                </p>
              </div>
              <span className="text-[10px] text-gray-400 font-medium font-mono uppercase bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Okt - Nov 2026</span>
            </div>
          </div>

          {/* Timeline 6 */}
          <div className="relative">
            <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
            <div className="p-5 bg-[#fafbfc] rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-400">6. Finalisasi & Peresmian Kamar</h4>
                  <span className="text-[9px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase">Berikutnya</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-1 font-medium leading-relaxed">
                  Inspeksi sipil akhir demi kelayakan, selamatan tumpengan santri, pengaktifan kwh, peresmian gedung baru.
                </p>
              </div>
              <span className="text-[10px] text-gray-400 font-medium font-mono uppercase bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Desember 2026</span>
            </div>
          </div>

        </div>

      </section>


      {/* SECTION 6: FINANCIAL LEDGER TRANSPARENCY ("Transparansi Penggunaan Dana") */}
      <section id="laporan-keuangan" className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100 px-3 py-1 rounded-full">AUDIT TERBUKA</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Transparansi Penggunaan Dana</h2>
            <p className="mt-2 text-xs text-gray-400 font-semibold">Tabel alokasi penyaluran kas fisik wakaf pembangunan terkini.</p>
          </div>

          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-150 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-brand-dark-950 text-white text-[10px] font-extrabold tracking-wider uppercase border-b border-brand-teal-950">
                  <th className="p-4 pl-6">Kategori Alokasi</th>
                  <th className="p-4">Nominal Penggunaan</th>
                  <th className="p-4 text-center">Rasio %</th>
                  <th className="p-4 text-center">Status Pekerjaan</th>
                  <th className="p-4 pr-6">Keterangan Teknis</th>
                </tr>
              </thead>
              <tbody className="text-xs text-brand-dark-900 font-semibold split-y divide-y divide-gray-100">
                
                {/* Item 1 */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 pl-6 flex items-center gap-2">
                    <Database className="h-4 w-4 text-brand-teal-500 shrink-0" />
                    <span>Material Konstruksi Utama</span>
                  </td>
                  <td className="p-4 font-mono text-brand-teal-600">Rp 250.000.000</td>
                  <td className="p-4 text-center font-mono text-gray-400">48%</td>
                  <td className="p-4 text-center">
                    <span className="px-2 py-0.5 text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 rounded-full">DIGUNAKAN</span>
                  </td>
                  <td className="p-4 pr-6 text-gray-400 text-[11px] font-medium">Batu pondasi cor, semen gresik merah, kusen besi asrama putra.</td>
                </tr>

                {/* Item 2 */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 pl-6 flex items-center gap-2">
                    <HardHat className="h-4 w-4 text-brand-teal-500 shrink-0" />
                    <span>Upah Tenaga Kerja Lokal</span>
                  </td>
                  <td className="p-4 font-mono text-brand-teal-600">Rp 120.000.000</td>
                  <td className="p-4 text-center font-mono text-gray-400">23%</td>
                  <td className="p-4 text-center">
                    <span className="px-2 py-0.5 text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 rounded-full">DIGUNAKAN</span>
                  </td>
                  <td className="p-4 pr-6 text-gray-400 text-[11px] font-medium">Sponsorship tukang sipil dhu'afa Lawang sbg pemberdayaan ekonomi.</td>
                </tr>

                {/* Item 3 */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 pl-6 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#0a8a9a] shrink-0" />
                    <span>Instalasi Listrik & Saluran Air</span>
                  </td>
                  <td className="p-4 font-mono text-[#0a8a9a]">Rp 60.000.000</td>
                  <td className="p-4 text-center font-mono text-gray-400">12%</td>
                  <td className="p-4 text-center">
                    <span className="px-2 py-0.5 text-[9px] font-extrabold text-blue-600 bg-blue-50 rounded-full">PROSES</span>
                  </td>
                  <td className="p-4 pr-6 text-gray-400 text-[11px] font-medium">Instalasi kabel tembaga bawah tanah, pengeboran sumur artesis.</td>
                </tr>

                {/* Item 4 */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 pl-6 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-brand-gold-500 shrink-0" />
                    <span>Finishing & Cat Ruang Kelas</span>
                  </td>
                  <td className="p-4 font-mono text-gray-500">Rp 50.000.000</td>
                  <td className="p-4 text-center font-mono text-gray-400">10%</td>
                  <td className="p-4 text-center">
                    <span className="px-2 py-0.5 text-[9px] font-extrabold text-gray-400 bg-gray-100 rounded-full">DIRENCANAKAN</span>
                  </td>
                  <td className="p-4 pr-6 text-gray-400 text-[11px] font-medium">Cat cat eksterior anti jamur & kebas luntur air hujan.</td>
                </tr>

                {/* Item 5 */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 pl-6 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#d97706] shrink-0" />
                    <span>Meja & Lemari Kitab Santri</span>
                  </td>
                  <td className="p-4 font-mono text-gray-500">Rp 40.000.000</td>
                  <td className="p-4 text-center font-mono text-gray-400">7%</td>
                  <td className="p-4 text-center">
                    <span className="px-2 py-0.5 text-[9px] font-extrabold text-gray-400 bg-gray-100 rounded-full">DIRENCANAKAN</span>
                  </td>
                  <td className="p-4 pr-6 text-gray-400 text-[11px] font-medium">Pembelian perabot kayu jati, rak mushaf anak RUTABA Lawang.</td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Mobile responsive Cards instead of Table */}
          <div className="md:hidden space-y-4">
            
            {/* Mob 1 */}
            <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-extrabold text-brand-dark-900">Material Utama</span>
                <span className="px-2 py-0.5 text-[8px] font-extrabold text-brand-teal-600 bg-brand-teal-50 rounded-full">DIGUNAKAN</span>
              </div>
              <div className="flex justify-between border-t border-gray-50 pt-2 text-xs font-semibold">
                <span className="text-gray-400">Biaya:</span>
                <span className="font-mono text-brand-teal-600">Rp 250.000.000 (48%)</span>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold leading-normal">Keterangan: Semen, pasir, besi, batu bata murni pondasi.</p>
            </div>

            {/* Mob 2 */}
            <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-extrabold text-brand-dark-900">Upah Tenaga Kerja</span>
                <span className="px-2 py-0.5 text-[8px] font-extrabold text-brand-teal-600 bg-brand-teal-50 rounded-full">DIGUNAKAN</span>
              </div>
              <div className="flex justify-between border-t border-gray-50 pt-2 text-xs font-semibold">
                <span className="text-gray-400">Biaya:</span>
                <span className="font-mono text-brand-teal-600">Rp 120.000.000 (23%)</span>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold leading-normal">Keterangan: Biaya upah tukang lokal dan harian pengawas.</p>
            </div>

            {/* Mob 3 */}
            <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-extrabold text-brand-dark-900">Listrik & Saluran Air</span>
                <span className="px-2 py-0.5 text-[8px] font-extrabold text-blue-600 bg-blue-50 rounded-full">PROSES</span>
              </div>
              <div className="flex justify-between border-t border-gray-50 pt-2 text-xs font-semibold">
                <span className="text-gray-400">Biaya:</span>
                <span className="font-mono text-[#0a8a9a]">Rp 60.000.000 (12%)</span>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold leading-normal">Keterangan: Jalur token asrama, sumur artesis pompa bor.</p>
            </div>

            {/* Mob 4 */}
            <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-extrabold text-brand-dark-900">Cat & Finishing</span>
                <span className="px-2 py-0.5 text-[8px] font-bold text-gray-400 bg-gray-100 rounded-full">DIRENCANAKAN</span>
              </div>
              <div className="flex justify-between border-t border-gray-50 pt-2 text-xs font-semibold">
                <span className="text-gray-400">Biaya:</span>
                <span className="font-mono text-gray-500">Rp 50.000.000 (10%)</span>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold leading-normal">Keterangan: Pengecatan kelas, lantai cor halus.</p>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 7: MONTHLY GRAPHS BAR CHARTS ("Perkembangan Dana Masuk") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
            <div>
              <span className="text-[9px] font-extrabold text-brand-teal-500 uppercase tracking-widest bg-brand-teal-50 px-2 py-0.5 rounded">HISTORIK TERPADU</span>
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark-900 mt-1">Perkembangan Dana Masuk Bulanan (2026)</h3>
            </div>
            <span className="text-[10px] font-bold text-gray-400 font-mono uppercase bg-gray-50 px-2 py-1 rounded">Update: Mei 2026</span>
          </div>

          {/* Simple but extremely aesthetic CSS bar chart representation (highly secure and lightweight) */}
          <div className="space-y-6 max-w-4xl mx-auto">
            
            {/* Jan */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-gray-600 mb-1.5">
                <span className="font-serif italic font-extrabold">Januari</span>
                <span className="font-mono text-brand-teal-600">Rp 80.000.000</span>
              </div>
              <div className="w-full bg-gray-50 h-5 rounded-lg overflow-hidden border border-gray-100/50">
                <div className="bg-brand-dark-950 h-full rounded-lg text-white text-[9px] font-bold font-mono pl-3 flex items-center" style={{ width: "35%" }}>
                  35%
                </div>
              </div>
            </div>

            {/* Feb */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-gray-600 mb-1.5">
                <span className="font-serif italic font-extrabold font-serif">Februari</span>
                <span className="font-mono text-brand-teal-600">Rp 125.000.000</span>
              </div>
              <div className="w-full bg-gray-50 h-5 rounded-lg overflow-hidden border border-gray-100/50">
                <div className="bg-[#0f766e] h-full rounded-lg text-white text-[9px] font-bold font-mono pl-3 flex items-center" style={{ width: "55%" }}>
                  55%
                </div>
              </div>
            </div>

            {/* Mar */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-gray-600 mb-1.5">
                <span className="font-serif italic font-extrabold">Maret</span>
                <span className="font-mono text-brand-teal-600">Rp 160.000.000</span>
              </div>
              <div className="w-full bg-gray-50 h-5 rounded-lg overflow-hidden border border-gray-100/50">
                <div className="bg-[#0f766e] h-full rounded-lg text-white text-[9px] font-bold font-mono pl-3 flex items-center" style={{ width: "70%" }}>
                  70%
                </div>
              </div>
            </div>

            {/* Apr */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-gray-600 mb-1.5">
                <span className="font-serif italic font-extrabold">April</span>
                <span className="font-mono text-brand-teal-600">Rp 185.000.000</span>
              </div>
              <div className="w-full bg-gray-50 h-5 rounded-lg overflow-hidden border border-gray-100/50">
                <div className="bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 h-full rounded-lg text-white text-[9px] font-bold font-mono pl-3 flex items-center" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>

            {/* May */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-gray-600 mb-1.5 animate-pulse">
                <span className="font-serif italic font-extrabold text-brand-teal-600">Mei (Tinggi Kas Ramadan)</span>
                <span className="font-mono text-brand-teal-600 font-extrabold">Rp 230.000.000</span>
              </div>
              <div className="w-full bg-gray-50 h-5 rounded-lg overflow-hidden border border-gray-100/50">
                <div className="bg-gradient-to-r from-brand-teal-500 via-brand-teal-400 to-amber-500 h-full rounded-lg text-white text-[9px] font-bold font-mono pl-3 flex items-center" style={{ width: "100%" }}>
                  100% Puncak Donasi
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 8: PERIODIC PDF REPORTS DOWNLOADS ("Laporan Berkala") */}
      <section className="py-24 bg-brand-dark-50/50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100 px-3 py-1 rounded-full">ARSIP UTAMU</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Unduh Laporan Berkala (PDF)</h2>
            <p className="mt-2 text-xs text-gray-400 font-semibold">Silakan klik tombol unduh demi menguji integrasi file laporan pembangunan.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Rep 1 */}
            <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Laporan Pembangunan Januari 2026</h4>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-bold mt-1 block">Tipe: PDF Document</span>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-50 pt-4 flex items-center justify-between gap-2">
                <span className="text-[9px] font-extrabold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full uppercase">TERSEDIA</span>
                <button
                  type="button"
                  onClick={() => handleDownload("Laporan Januari 2026")}
                  className="py-1.5 px-3 bg-brand-teal-50 hover:bg-brand-teal-100 text-brand-teal-600 font-extrabold text-[10px] rounded-lg transition-colors cursor-pointer"
                >
                  Download
                </button>
              </div>
            </div>

            {/* Rep 2 */}
            <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Laporan Pembangunan Februari 2026</h4>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-bold mt-1 block">Tipe: PDF Document</span>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-50 pt-4 flex items-center justify-between gap-2">
                <span className="text-[9px] font-extrabold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full uppercase">TERSEDIA</span>
                <button
                  type="button"
                  onClick={() => handleDownload("Laporan Februari 2026")}
                  className="py-1.5 px-3 bg-brand-teal-50 hover:bg-brand-teal-100 text-brand-teal-600 font-extrabold text-[10px] rounded-lg transition-colors cursor-pointer"
                >
                  Download
                </button>
              </div>
            </div>

            {/* Rep 3 */}
            <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Laporan Pembangunan Maret 2026</h4>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-bold mt-1 block">Tipe: PDF Document</span>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-50 pt-4 flex items-center justify-between gap-2">
                <span className="text-[9px] font-extrabold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full uppercase">TERSEDIA</span>
                <button
                  type="button"
                  onClick={() => handleDownload("Laporan Maret 2026")}
                  className="py-1.5 px-3 bg-brand-teal-50 hover:bg-brand-teal-100 text-brand-teal-600 font-extrabold text-[10px] rounded-lg transition-colors cursor-pointer"
                >
                  Download
                </button>
              </div>
            </div>

            {/* Rep 4 */}
            <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Laporan Pembangunan April 2026</h4>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-bold mt-1 block">Tipe: PDF Document</span>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-50 pt-4 flex items-center justify-between gap-2">
                <span className="text-[9px] font-extrabold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full uppercase">TERSEDIA</span>
                <button
                  type="button"
                  onClick={() => handleDownload("Laporan April 2026")}
                  className="py-1.5 px-3 bg-brand-teal-50 hover:bg-brand-teal-100 text-brand-teal-600 font-extrabold text-[10px] rounded-lg transition-colors cursor-pointer"
                >
                  Download
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 9: LATEST WRITTEN CHRONOLOGIES AND ANNOUNCEMENTS ("Update Terbaru") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3 py-1.5 rounded-full uppercase">WARTA INFORMASI</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">Kliping Berita Lapangan Terkini</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Post 1 */}
          <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-extrabold font-mono text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded">20 MEI 2026</span>
                <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Pengecoran Area Kelas Tuntas</h4>
              <p className="text-[11px] text-gray-450 leading-relaxed font-semibold">
                Tim laskar konstruksi asrama putra selesai mengecor balok cor gantung lantai dua Lawang.
              </p>
            </div>
            <span className="text-[9px] text-[#0f766e] font-bold uppercase mt-6 tracking-wide block">Diperbarui Mandor Sipil</span>
          </div>

          {/* Post 2 */}
          <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-extrabold font-mono text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded">15 MEI 2026</span>
                <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Pengadaan Material Semen Tahap II</h4>
              <p className="text-[11px] text-gray-450 leading-relaxed font-semibold">
                Pengiriman susulan 150 sak semen gresik merah untuk plesteran dinding ruang kelas tahfidz.
              </p>
            </div>
            <span className="text-[9px] text-[#0f766e] font-bold uppercase mt-6 tracking-wide block">Diperbarui Logistik Nyata</span>
          </div>

          {/* Post 3 */}
          <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-extrabold font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">10 MEI 2026</span>
                <Clock className="h-4 w-4 text-blue-500" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Persiapan Penjaluran Kabel KWH</h4>
              <p className="text-[11px] text-gray-450 leading-relaxed font-semibold">
                Teknisi listrik mulai menggali jalur pipa pipa pvc kelistrikan pengaman asrama asuh Lawang.
              </p>
            </div>
            <span className="text-[9px] text-[#0a8a9a] font-bold uppercase mt-6 tracking-wide block">Diperbarui Teknisi Token</span>
          </div>

          {/* Post 4 */}
          <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-extrabold font-mono text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded">05 MEI 2026</span>
                <ImageIcon className="h-4 w-4 text-brand-gold-500" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Galeri Foto Udara Drone Diperbarui</h4>
              <p className="text-[11px] text-gray-450 leading-relaxed font-semibold">
                Ustadz humas memperbarui portofolio visual kemajuan pembangunan di papan mading digital.
              </p>
            </div>
            <span className="text-[9px] text-brand-gold-600 font-bold uppercase mt-6 tracking-wide block">Diperbarui Humas Laskar</span>
          </div>

        </div>

      </section>


      {/* SECTION 10: INTERACTIVE GALERI PROGRESS GALLERY Grid with filter buttons */}
      <section className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100 px-3 py-1 rounded-full">DOKUMENTASI RIIL</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Galeri Progress Riil Lapangan</h2>
            <p className="mt-2 text-xs text-gray-400 font-semibold">Konsep sunnah: Foto murni arsitektural asrama & alat konstruksi, bebas dari human close-up.</p>
          </div>

          {/* Filter options buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-xl mx-auto">
            {["semua", "bangunan", "material", "interior", "sarana"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveGalleryFilter(f)}
                className={`py-1.5 px-3.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeGalleryFilter === f 
                    ? "bg-brand-teal-500 text-white shadow-md shadow-brand-teal-500/10"
                    : "bg-brand-dark-50 text-gray-500 hover:text-brand-teal-500 hover:bg-brand-teal-50/20"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.substring(1)}
              </button>
            ))}
          </div>

          {/* Gallery display cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((img) => (
              <div 
                key={img.id} 
                className="bg-[#fbfcff] rounded-2xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] bg-gray-150 overflow-hidden relative">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-955/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                
                <div className="p-5">
                  <span className="text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded-full uppercase tracking-wider block w-max mb-2">
                    {img.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 leading-snug">{img.title}</h4>
                  <p className="text-[11px] text-gray-400 mt-1 font-semibold leading-relaxed leading-normal">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 11: FINAL CONCLUDING BANNER CTA ("Bersama Membangun Fasilitas Pendidikan Qurani") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-brand-teal-950 text-white rounded-3xl p-8 sm:p-14 border border-brand-teal-900">
          
          <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
          <div className="absolute top-[-30%] right-[-10%] w-[350px] h-[350px] bg-brand-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-[10px] font-extrabold tracking-widest text-[#d97706] bg-amber-500/15 border border-amber-500/20 px-2.5 py-1 rounded-full uppercase">
              AMAL JARIYAH ABADI
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight col-cyan-100">
              Bersama Membangun Fasilitas Pendidikan Qurani
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed">
              Setiap dukungan Anda menjadi bagian dari ikhtiar asuransi akhirat menghadirkan tempat belajar dan tahfidz yang lebih mulia untuk generasi tahfidz Qur'an. Harta berkurang murni untuk asrama, tulus bernaung sunnah wal jamaah.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate("donasi-wakaf/pembangunan-pesantren")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-[#0f766e] hover:bg-[#0d655e] transition-all rounded-full cursor-pointer shadow-lg"
              >
                Dukung Pembangunan
              </button>
              <button
                onClick={() => onNavigate("donations")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-teal-200 bg-transparent hover:bg-white/5 transition-all border border-brand-teal-500/35 rounded-full cursor-pointer"
              >
                Lihat Program Donasi
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
