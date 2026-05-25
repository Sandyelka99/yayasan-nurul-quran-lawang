/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Image as ImageIcon,
  Calendar, 
  Tag, 
  Eye, 
  X, 
  Compass, 
  ShieldCheck, 
  FileText, 
  Heart, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  BookOpen,
  Award,
  Maximize2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryPageProps {
  onNavigate: (viewId: string) => void;
}

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  imageUrl: string;
}

export default function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    "Semua",
    "Pendidikan",
    "Tahfidz",
    "RUTABA",
    "Sarana Belajar",
    "Pembangunan",
    "Sosial Dakwah",
    "Wakaf"
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Ruang Belajar Nurul Quran",
      category: "Pendidikan",
      date: "12 Mei 2026",
      description: "Dokumentasi ruang belajar untuk kegiatan pembinaan dan pembelajaran yang bersih, luas, dan berudara sejuk.",
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Mushaf untuk Program Tahfidz",
      category: "Tahfidz",
      date: "10 Mei 2026",
      description: "Pengadaan mushaf Al-Qur’an terstandar rasm utsmani untuk mendukung kelancaran hafalan para santri.",
      imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Ruang RUTABA",
      category: "RUTABA",
      date: "8 Mei 2026",
      description: "Ruang belajar usia dini (Rumah Tahfidz Balita) dengan suasana yang lembut, aman, hangat, dan edukatif.",
      imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Rak Kitab dan Buku Pembelajaran",
      category: "Sarana Belajar",
      date: "5 Mei 2026",
      description: "Sarana kokoh untuk merapikan penyimpanan kitab-kitab syar'i dan buku modul pembelajaran ustadz.",
      imageUrl: "https://images.unsplash.com/photo-1512632511790-760901e47f5b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Progress Pembangunan Pesantren",
      category: "Pembangunan",
      date: "3 Mei 2026",
      description: "Dokumentasi tahapan pengecoran pilar penyangga dak atas asrama santri tahfidz Lawang.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Material Bangunan Tahap Dua",
      category: "Pembangunan",
      date: "1 Mei 2026",
      description: "Pengadaan bata merah bakar, pasir cor gunung, dan tumpukan besi ulir baja galvanis berstandar SNI.",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      title: "Program Wakaf Al-Qur'an Tikrar",
      category: "Wakaf",
      date: "28 April 2026",
      description: "Sinergi penyaluran mushaf wakaf dari para muhsinin langsung ke asrama demi keberkahan pahala jariyah.",
      imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      title: "Meja Belajar Kayu Santri",
      category: "Sarana Belajar",
      date: "25 April 2026",
      description: "Rehal menulis dan meja lipat kayu jati belanda yang halus permukaannya untuk kenyamanan belajar.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 9,
      title: "Ruang Kelas dan Halaqah Tahfidz",
      category: "Tahfidz",
      date: "22 April 2026",
      description: "Suasana tenang ruang serbaguna asrama untuk setoran hafalan mandiri santri di pagi hari.",
      imageUrl: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 10,
      title: "Kegiatan Sosial Yayasan",
      category: "Sosial Dakwah",
      date: "18 April 2026",
      description: "Penyediaan paket sembako bahan pangan pokok bulanan bagi keluarga dhuafa di lingkar Lawang.",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 11,
      title: "Area Lingkungan Pesantren",
      category: "Pendidikan",
      date: "15 April 2026",
      description: "Lingkungan pesantren asri berhawa pegunungan sejuk mendukung keberkahan santri dalam belajar.",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 12,
      title: "Dokumentasi Laporan Program",
      category: "Wakaf",
      date: "10 April 2026",
      description: "Pengarsipan berkas pertanggungjawaban penyaluran dana sosial masyarakat secara terbuka dan legalitas jelas.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredItems = activeFilter === "Semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#fbfcff] text-brand-dark-900 min-h-screen pb-24">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-brand-teal-950 text-white py-24 sm:py-32 border-b border-brand-teal-900/40">
        <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-1/4 -right-1/4 w-[450px] h-[450px] bg-brand-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#d97706] bg-amber-500/15 border border-amber-500/20 rounded-full uppercase mb-6">
              <Sparkles className="h-4 w-4 text-brand-gold-500" />
              DOKUMENTASI JARIYAH AMANAH & SYAR'I
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              Galeri Kegiatan & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-300 via-brand-teal-100 to-brand-gold-300 font-serif italic">
                Dokumentasi Yayasan
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-semibold">
              Dokumentasi kegiatan pendidikan, tahfidz, pembangunan asrama, dan bakti sosial kemasyarakatan Yayasan Nurul Quran Lawang Malang disajikan secara transparan, santun, dan terjaga adab syariat tanpa menampilkan close-up wajah santri.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#kumpulan-galeri"
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full cursor-pointer shadow-lg shadow-brand-teal-500/20 text-center"
              >
                Lihat Dokumentasi
              </a>
              <button
                onClick={() => onNavigate("donasi-wakaf")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-teal-300 bg-transparent hover:bg-white/5 transition-all border border-brand-teal-500/35 rounded-full cursor-pointer animate-pulse"
              >
                Dukung Program Pendidikan
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SECTION 2: CATEGORY FILTER ROW */}
      <section id="kumpulan-galeri" className="py-12 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 text-brand-dark-900">
              <Compass className="h-5 w-5 text-brand-teal-600 shrink-0" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">Pilih Klasifikasi Arsip</span>
            </div>

            {/* Horizontal Filter container (scrollable on mobile) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`py-2 px-4 text-xs font-extrabold rounded-full whitespace-nowrap border transition-all cursor-pointer shrink-0 ${
                    activeFilter === filter
                      ? "bg-brand-dark-950 border-brand-dark-950 text-white shadow-sm"
                      : "bg-[#fcfdfe] border-gray-150 text-gray-500 hover:text-brand-teal-600 hover:bg-gray-50 hover:border-brand-teal-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 3: RESPONSIVE GALLERY GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-white rounded-3xl border border-gray-150/80 shadow-sm hover:shadow-xl hover:border-brand-teal-200 transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                <div>
                  
                  {/* Aspect Ratio Container for visual precision */}
                  <div className="aspect-[4/3] w-full bg-gray-50 overflow-hidden relative border-b border-gray-100">
                    
                    {/* Dark gradient shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-102"
                    />

                    {/* Floating Zoom Action Badge */}
                    <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-2 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-brand-dark-900 text-[10px] font-extrabold border border-gray-100 flex items-center gap-1">
                        <Maximize2 className="h-3 w-3 text-brand-teal-600" />
                        Detail
                      </div>
                    </div>

                    {/* Floating Date Badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className="text-[9px] font-extrabold px-2.5 py-1 bg-white/95 backdrop-blur-md text-brand-dark-900 rounded-lg border border-gray-100 shadow-sm flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-brand-teal-600" />
                        {item.date}
                      </span>
                    </div>

                  </div>

                  <div className="p-6 space-y-3">
                    <span className="inline-block text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 leading-snug group-hover:text-brand-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-400 font-semibold leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>

                <div className="p-6 pt-0 border-t border-gray-50 flex items-center justify-between mt-4">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Audit Syar'i OK</span>
                  <div className="text-brand-teal-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lihat Besar
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="p-16 text-center bg-white rounded-3xl border border-gray-150 max-w-lg mx-auto mt-10">
            <ImageIcon className="h-10 w-10 text-gray-300 mx-auto" />
            <span className="block mt-4 text-xs font-extrabold text-brand-dark-900">Arsip Tidak Ditemukan</span>
            <span className="block text-[11px] text-gray-400 font-medium mt-1">Maaf, kategori dokumen ini sedang diperbarui ustadz administrator kami.</span>
          </div>
        )}
      </section>


      {/* SECTION 4: FEATURED DOCUMENTATION SECTION ("Dokumentasi Pilihan") */}
      <section className="py-24 bg-brand-dark-50/50 border-t border-b border-gray-100 relative">
        <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-600 uppercase bg-brand-teal-100 px-3 py-1 rounded-full">PINNED HIGH-TRUST</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Dokumentasi Pilihan Utama</h2>
            <p className="mt-2 text-xs text-gray-400 font-semibold">Tiga pilar laporan foto utama yang paling banyak ditanyakan muhsinin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feat 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-150/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600" 
                    alt="Progress Pembangunan Pesantren" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[9px] font-extrabold text-brand-teal-500 uppercase tracking-widest">TRANSPARANSI FISIK</span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Progress Pembangunan Pesantren</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    Pantau kurva-S fisik, kuitansi semen pasir, foto terkini, dan jadwal selesai renovasi asrama santri putra Lawang Malang.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-gray-50 mt-4">
                <button
                  onClick={() => onNavigate("progress-pembangunan")}
                  className="w-full py-2.5 text-xs font-extrabold text-white bg-brand-dark-950 hover:bg-brand-dark-900 rounded-xl transition-colors cursor-pointer text-center"
                >
                  Lihat Detail Progress Pembangunan
                </button>
              </div>
            </div>

            {/* Feat 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-150/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600" 
                    alt="Program Wakaf Al-Qur'an" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[9px] font-extrabold text-brand-teal-500 uppercase tracking-widest">WAKAF JARIYAH</span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Program Wakaf Al-Qur'an Tikrar</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    Setiap huruf mulia dilantunkan berulang oleh hafiz quran asrama. Salurkan wakaf mushaf hafalan cetak tebal terbaik.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-gray-50 mt-4">
                <button
                  onClick={() => onNavigate("donasi-wakaf")}
                  className="w-full py-2.5 text-xs font-extrabold text-white bg-brand-dark-950 hover:bg-brand-dark-900 rounded-xl transition-colors cursor-pointer text-center"
                >
                  Dukung Distribusi Wakaf Qur'an
                </button>
              </div>
            </div>

            {/* Feat 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-150/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1512632511790-760901e47f5b?auto=format&fit=crop&q=80&w=600" 
                    alt="Sarana Belajar Santri" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[9px] font-extrabold text-brand-teal-500 uppercase tracking-widest">SARANA KONDUSIF</span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Sarana Belajar & Meja Tulis</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    Inspeksi meja jati lapis halus, rak partisi buku tahan lembab, pencahayaan led sejuk ramah kornea anak belita.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-gray-50 mt-4">
                <button
                  onClick={() => onNavigate("donasi-wakaf")}
                  className="w-full py-2.5 text-xs font-extrabold text-white bg-brand-dark-950 hover:bg-brand-dark-900 rounded-xl transition-colors cursor-pointer text-center"
                >
                  Sponsori Perabotan Kamar Kelas
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 5: PRINSIP DOKUMENTASI YAYASAN ("Prinsip Dokumentasi Yayasan") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold tracking-widest text-[#d97706] uppercase bg-amber-50 px-3 py-1 rounded-full">EDUKASI ADAB</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Prinsip Dokumentasi Yayasan</h2>
          <p className="mt-2 text-xs text-gray-400 font-semibold">Kami teguh menghormati adab syariat pesantren sunnah Lawang dalam berpublikasi.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Val 1 */}
          <div className="p-6 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center border border-brand-teal-100 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mt-1">1. Bersikap Santun</h4>
            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
              Dokumentasi ditampilkan dengan menjaga penuh kemuliaan adab, privasi personal, serta kehormatan peserta didik tahfidz balita.
            </p>
          </div>

          {/* Val 2 */}
          <div className="p-6 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center border border-brand-teal-100 shrink-0">
              <FileText className="h-5 w-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mt-1">2. Transparan & Jujur</h4>
            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
              Dokumentasi murni apa adanya membantu donatur melihat nyata perkembangan program berkala tanpa rekayasa angle drama.
            </p>
          </div>

          {/* Val 3 */}
          <div className="p-6 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center border border-brand-teal-100 shrink-0">
              <BookOpen className="h-5 w-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mt-1">3. Amanah Terpelihara</h4>
            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
              Setiap foto laporan murni memperkuat bukti pertanggungjawaban legal syakih bagi auditor dan penyumbang dana umat.
            </p>
          </div>

          {/* Val 4 */}
          <div className="p-6 bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center border border-brand-teal-100 shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mt-1">4. Edukasi Positif</h4>
            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
              Galeri menjadi sarana dakwah mendidik masyarakat untuk menyukai program tahfidzul quran asri sejak masa balita.
            </p>
          </div>

        </div>

      </section>


      {/* SECTION 6: LIGHTBOX PREVIEW DUMMY MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop cover click out handler */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-brand-dark-950/85 backdrop-blur-md cursor-zoom-out"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* Image side */}
              <div className="lg:col-span-7 bg-brand-dark-950 flex items-center justify-center aspect-[4/3] lg:aspect-auto">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[80vh]"
                />
              </div>

              {/* Text metadata side */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white text-brand-dark-900">
                <div className="space-y-4">
                  
                  <div className="flex justify-between items-start gap-2">
                    <span className="inline-block text-[10px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {selectedItem.category}
                    </span>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-brand-dark-900 leading-tight">
                    {selectedItem.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold font-mono">
                    <Calendar className="h-3.5 w-3.5 text-brand-teal-600" />
                    {selectedItem.date}
                  </div>

                  <p className="text-xs text-gray-500 font-semibold leading-relaxed pt-2 border-t border-gray-100">
                    {selectedItem.description}
                  </p>

                </div>

                <div className="pt-6 border-t border-gray-50 flex gap-3 mt-6">
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      if (selectedItem.category === "Pembangunan") {
                        onNavigate("progress-pembangunan");
                      } else {
                        onNavigate("donasi-wakaf");
                      }
                    }}
                    className="flex-1 py-2.5 text-center text-xs font-extrabold text-white bg-brand-dark-950 hover:bg-brand-dark-900 rounded-xl transition-all cursor-pointer"
                  >
                    Dukung Program Terkait
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="py-2.5 px-4 text-center text-xs font-extrabold text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all cursor-pointer"
                  >
                    Tutup
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* SECTION 7: END BIG CTA FOR SPONSORSHIP / DONATION */}
      <section className="mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0c2633] via-brand-teal-950 to-brand-dark-950 text-white p-8 sm:p-16 rounded-3xl relative overflow-hidden text-center border border-brand-teal-800/30">
          <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-brand-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block text-[10px] font-extrabold tracking-widest text-brand-teal-300 uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              YAYASAN NURUL QURAN MALANG
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Dukung Program Pendidikan & <br />
              Dakwah Syiar Umat
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed max-w-xl mx-auto">
              Setiap lembar mushaf wakaf, batu bata, serta sumbangan nutrisi konsumsi santri adalah tabungan abadi Anda di akhirat kelak. Mari berpartisipasi uuntuk mencetak santri hafidz dhuafa generasi masa depan Islam!
            </p>

            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate("donasi-wakaf")}
                className="w-full sm:w-auto py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-dark-900 bg-gradient-to-r from-brand-teal-300 to-brand-teal-400 hover:from-brand-teal-400 hover:to-brand-teal-500 rounded-full transition-all cursor-pointer shadow-lg shadow-brand-teal-400/25 flex items-center justify-center gap-1.5"
              >
                Infaq Sekarang
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate("progress-pembangunan")}
                className="w-full sm:w-auto py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-transparent hover:bg-white/5 border border-white/15 rounded-full transition-all cursor-pointer"
              >
                Intip Progress Pembangunan
              </button>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
