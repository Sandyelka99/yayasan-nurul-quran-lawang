/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  TrendingUp, 
  Coins, 
  Clock, 
  ArrowUpRight, 
  Download, 
  Share2, 
  FileText, 
  Layout, 
  Calendar, 
  ArrowLeft, 
  Database, 
  HardHat, 
  CheckCircle2, 
  Image as ImageIcon, 
  AlertCircle,
  ShieldCheck,
  ChevronRight,
  Share
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DevelopmentProgressPageProps {
  onNavigate: (viewId: string) => void;
  initialCategory?: string;
  onCategoryChange?: (category: string) => void;
}

interface ReportData {
  title: string;
  subtitle: string;
  targetBudget: string;
  received: string;
  disbursed: string;
  remaining: string;
  progressPercent: number;
  progressText: string;
  bgColor: string;
  accentColor: string;
  summary: string;
  objective: string;
  useCases: Array<{ item: string; amount: string; ratio: string; status: string; desc: string }>;
  activities: Array<{ date: string; title: string; desc: string }>;
  photos: Array<{ title: string; desc: string; url: string }>;
}

const REPORT_CATEGORIES = [
  { id: "semua", label: "Ringkasan Transparansi" },
  { id: "pendidikan", label: "Laporan Pendidikan" },
  { id: "orang-tua-asuh", label: "Laporan Orang Tua Asuh" },
  { id: "program-sosial", label: "Laporan Program Sosial" },
  { id: "wakaf-alquran", label: "Laporan Wakaf Al-Qur'an" },
  { id: "wakaf-pembangunan", label: "Laporan Wakaf Pembangunan" },
  { id: "dakwah-digital", label: "Laporan Dakwah Digital" },
];

const REPORTS_DATA: Record<string, ReportData> = {
  "pendidikan": {
    title: "Laporan Pendidikan",
    subtitle: "Penyaluran beasiswa bulanan santri tahfidz yatim du'afa, buku makhraj, dan sarana balita RUTABA Lawang.",
    targetBudget: "Rp 150.000.000",
    received: "Rp 125.000.000",
    disbursed: "Rp 98.000.000",
    remaining: "Rp 25.000.000",
    progressPercent: 85,
    progressText: "Pembagian Selesai",
    bgColor: "from-brand-teal-950 via-brand-dark-900 to-brand-dark-950",
    accentColor: "brand-teal",
    summary: "Program ini difokuskan pada pemenuhan kebutuhan akademis santri, pengadaan kitab rujukan penunjang mufradat, sebaran buku Tajwid gratis, dan bantuan SPP bulanan bagi santri yatim du'afa berprestasi agar belajar dengan tenang.",
    objective: "Mewujudkan pemerataan sarana edukasi yang setara bagi anak-anak usia emas di Lawang berkelanjutan.",
    useCases: [
      { item: "Kitab Mufradat & Sebaran Tajwid", amount: "Rp 15.000.000", ratio: "12%", status: "Selesai", desc: "Penyaluran mushaf/buku penunjang makhraj balita RUTABA." },
      { item: "Subsidi Pendidikan & SPP Yatim", amount: "Rp 60.000.000", ratio: "48%", status: "Berjalan", desc: "Sponsorship beasiswa bulanan santri dhuafa berprestasi." },
      { item: "Sarana Belajar RUTABA Lawang", amount: "Rp 23.000.000", ratio: "18%", status: "Selesai", desc: "Pengadaan alat peraga edukatif non-plastik ramah anak." }
    ],
    activities: [
      { date: "20 Mei 2026", title: "Serahan Pembagian Buku Tajwid Baru", desc: "Sebanyak 150 buku dibagikan langsung bagi kelompok belajar RUTABA Lawang." },
      { date: "10 Mei 2026", title: "Penyaluran Subsidi SPP Yatim Cerdas", desc: "Pelepasan dana hibah SPP untuk 35 anak dhuafa binaan yayasan." }
    ],
    photos: [
      { title: "Meja Belajar Jati RUTABA", desc: "Meja lipat santri buatan pengrajin lokal berbahan jati awet.", url: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600" },
      { title: "Pojok Bacaan Santri", desc: "Rak buku kokoh tempat menyimpan mushaf hafalan santri.", url: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  "orang-tua-asuh": {
    title: "Laporan Orang Tua Asuh",
    subtitle: "Pemberdayaan bulanan intensif, jaminan makan bergizi, dan pemeriksaan medis santri mukim takhasus.",
    targetBudget: "Rp 240.000.000",
    received: "Rp 180.000.000",
    disbursed: "Rp 144.000.000",
    remaining: "Rp 60.000.000",
    progressPercent: 75,
    progressText: "Terbina Rutin",
    bgColor: "from-brand-dark-950 via-brand-dark-900 to-emerald-950",
    accentColor: "emerald",
    summary: "Dana asuh digunakan sepenuhnya untuk menjamin biaya makan 3 kali sehari bersertifikasi halal & sehat, pengawasan medis berkala, asrama inap layak, dan honorarium asatidzah sanad yang membimbing santri mukim 24 jam.",
    objective: "Menyediakan lingkungan hidup islami mandiri yang penuh kasih sayang bagi santri binaan dhuafa.",
    useCases: [
      { item: "Nutrisi & Konsumsi Sehat", amount: "Rp 90.000.000", ratio: "50%", status: "Berjalan", desc: "Penyediaan beras, daging, protein, dan buah segar dapur asrama." },
      { item: "Insentif Asatidzah Pengampu", amount: "Rp 34.000.000", ratio: "19%", status: "Berjalan", desc: "Umaro pendamping tahfidz sanad mukim terjadwal bulanan." },
      { item: "Layanan Kesehatan & Sanitasi", amount: "Rp 20.000.000", ratio: "11%", status: "Siap Sedia", desc: "Penyediaan obat-obatan P3K asrama dan rujukan klinik dhu'afa." }
    ],
    activities: [
      { date: "18 Mei 2026", title: "Pemeriksaan Kesehatan Berkala", desc: "Tim dokter relawan sunnah melakukan tensi dan cek nutrisi santri." },
      { date: "05 Mei 2026", title: "Penyaluran Paket Protein Segar", desc: "Suplai susu murni, daging kambing Aqiqah, dan sayur organik dapur." }
    ],
    photos: [
      { title: "Dapur Bersih Nutrisi", desc: "Pengolahan bahan makanan higienis standar kebersihan tinggi.", url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" },
      { title: "Laci Makan Stainless", desc: "Penggunaan alat makan stainless steril anti karat aman jangka panjang.", url: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  "program-sosial": {
    title: "Laporan Program Sosial",
    subtitle: "Penyaluran sembako dhu'afa Lawang, hidangan Jumat berkah, dan tebas hutang kelontong janda miskin.",
    targetBudget: "Rp 120.000.000",
    received: "Rp 102.000.000",
    disbursed: "Rp 88.000.000",
    remaining: "Rp 18.000.000",
    progressPercent: 90,
    progressText: "Tersalurkan",
    bgColor: "from-blue-950 via-brand-dark-900 to-brand-dark-950",
    accentColor: "blue",
    summary: "Realisasi khidmat sosial yayasan untuk warga prasejahtera di Kecamatan Lawang. Penyaluran melibatkan sembako berkala (beras, minyak, telur), pembebasan hutang konsumsi janda miskin di warung sekitar, dan hidangan Jumat berkah.",
    objective: "Meringankan beban hidup tetangga dekat pesantren sesuai adab-adab tetangga sunnah nabi.",
    useCases: [
      { item: "Sebaran Sembako Warga", amount: "Rp 55.000.000", ratio: "54%", status: "Selesai", desc: "Distribusi sembako bagi puluhan keluarga du'afa binaan luar." },
      { item: "Pembebasan Hutang Sembako", amount: "Rp 18.000.000", ratio: "18%", status: "Selesai", desc: "Tebas tagihan kebutuhan pokok janda miskin di warung sekitar Lawang." },
      { item: "Konsumsi Jumat Berkah Berbagi", amount: "Rp 15.000.000", ratio: "15%", status: "Berjalan", desc: "Pemberian porsi hidangan bergizi jumat siang selepas sholat." }
    ],
    activities: [
      { date: "22 Mei 2026", title: "Sinergi Penyaluran 50 Paket Sembako", desc: "Telah tersalurkan tulus beras rojolele & vitamin bagi warga sekitar." },
      { date: "15 Mei 2026", title: "Tebas Hutang 4 Janda Dhu'afa", desc: "Pelunasan bon sembako kelontong meringankan beban harian mereka." }
    ],
    photos: [
      { title: "Stok Gudang Logistik Sembako", desc: "Beras berkarung dikemas di gudang kering steril pengurus.", url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  "wakaf-alquran": {
    title: "Laporan Wakaf Al-Qur'an",
    subtitle: "Penyediaan Mushaf hafalan standar madinah kualitas tinggi anti silau & kitab syarah hadits ulama.",
    targetBudget: "Rp 50.000.000",
    received: "Rp 42.500.000",
    disbursed: "Rp 35.000.000",
    remaining: "Rp 7.500.000",
    progressPercent: 85,
    progressText: "Tersalurkan",
    bgColor: "from-brand-dark-950 via-brand-dark-900 to-amber-950",
    accentColor: "amber",
    summary: "Program pengadaan dan penyaluran mushaf Al-Qur'an terjemah tajwid warna standar internasional, khusus dicetak di atas kertas QPP anti-silau yang awet agar santri balita dhuafa dan dewasa merasa terbantu saat menghafal seharian.",
    objective: "Memastikan satu santri miliki satu mushaf hafalan pribadi.",
    useCases: [
      { item: "Mushaf Standar Madinah QPP", amount: "Rp 25.000.000", ratio: "59%", status: "Selesai", desc: "Pengadaan 500 eks mushaf mulia kertas impor premium." },
      { item: "Kitab Syarah Aqidah & Hadits", amount: "Rp 10.000.000", ratio: "24%", status: "Selesai", desc: "Kitab rujukan perpustakaan asatidzah sanad pesantren." }
    ],
    activities: [
      { date: "12 Mei 2026", title: "Pengiriman 150 Mushaf ke Cabang", desc: "Sebaran mushaf hafalan menyasar santri binaan asrama pinggiran." },
      { date: "28 April 2026", title: "Penerimaan Paket Kitab Arbain", desc: "Kitab syarah nasyid hadits diletakkan di lemari utama pesantren." }
    ],
    photos: [
      { title: "Mushaf Bersih di Lemari", desc: "Kerapian tata simpan mushaf balita di asrama berhawa sejuk.", url: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  "wakaf-pembangunan": {
    title: "Laporan Wakaf Pembangunan",
    subtitle: "Realisasi fisik konstruksi lantai dua asrama, sanitasi tandon air dan pengecoran pilar asrama.",
    targetBudget: "Rp 1.000.000.000",
    received: "Rp 780.000.000",
    disbursed: "Rp 520.000.000",
    remaining: "Rp 220.000.000",
    progressPercent: 68,
    progressText: "Pembangunan Fisik",
    bgColor: "from-brand-dark-950 via-brand-dark-900 to-brand-teal-950",
    accentColor: "brand-teal",
    summary: "Realisasi ikhtiar konstruksi fisik pesantren Lawang di atas sisa tanah hibah yayasan. Meliputi pembangunan asrama dua tingkat putra, saluran air lancar tumpukan paralon sumur bor bukit, serta dak utama beton masjid jami'.",
    objective: "Menghadirkan lingkungan sarana tholabul ilmi yang selamat, bertata besi kokoh dan bersih.",
    useCases: [
      { item: "Besi Baja & Semen Cor Dasar", amount: "Rp 250.000.000", ratio: "48%", status: "Selesai", desc: "Pengadaan semen gresik merah, batu belah, besi ulir SNI." },
      { item: "Upah Harian Sipil & Tukang", amount: "Rp 120.000.000", ratio: "23%", status: "Berjalan", desc: "Pembayaran upah buruh bangunan lokal sekitar pesisir bukit." },
      { item: "Instalasi Air Bersih Gunung", amount: "Rp 150.000.000", ratio: "29%", status: "Berjalan", desc: "Pengeboran sumur sedalam 80m & tandon penyimpanan air." }
    ],
    activities: [
      { date: "19 Mei 2026", title: "Pengecoran Kolom Liang Lantai Dua", desc: "Paku bumi dan pilar ring balok tersambung mapan berestetika sipil." },
      { date: "02 Mei 2026", title: "Pemasangan Jalur Token Kelistrikan", desc: "Instalasi kabel pengaman mencegah percikan api asrama anak balita." }
    ],
    photos: [
      { title: "Pondasi Masjid Baitul Quran", desc: "Proses pengecoran semen rata di asrama santri putra Lawang.", url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600" },
      { title: "Siku Konstruksi Tiang Besi", desc: "Konstruksi besi pilar penyangga dak asrama lantai tingkat dua.", url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  "dakwah-digital": {
    title: "Laporan Dakwah Digital",
    subtitle: "Pengadaan mixer sound siaran streaming, soundcard audio, sewa server website resmi.",
    targetBudget: "Rp 80.000.000",
    received: "Rp 64.000.000",
    disbursed: "Rp 51.200.000",
    remaining: "Rp 16.000.000",
    progressPercent: 80,
    progressText: "Syiar Mengudara",
    bgColor: "from-brand-dark-950 via-brand-dark-900 to-purple-950",
    accentColor: "purple",
    summary: "Realisasi anggaran pengelolaan operasional dakwah visual dan rekam audio. Digunakan untuk melengkapi kamera lensa jernih, mic podcast kedap gema, mixer streaming stabil, fiber bandwith internet cepat untuk menyuguhkan streaming kajian lurus.",
    objective: "Penyebaran syiar sunnah rujukan shahih dari Lawang menyebar ke penjuru tanah air secara gratis.",
    useCases: [
      { item: "Alat Rekaman & Mic Podcasting", amount: "Rp 18.000.000", ratio: "28%", status: "Selesai", desc: "Paket mic audio shure & soundcard mikser." },
      { item: "Sewa Internet Fiber & Hosting", amount: "Rp 12.000.000", ratio: "19%", status: "Berjalan", desc: "Langganan server website & bandwith streaming 50 Mbps." },
      { item: "Kamera Siaran Langsung HD", amount: "Rp 21.200.000", ratio: "33%", status: "Selesai", desc: "Kamera lensa f/1.8 stabil untuk siaran ustadz pemateri." }
    ],
    activities: [
      { date: "16 Mei 2026", title: "Tes Siaran Kualitas Tinggi 1080p", desc: "Konektivitas live lancar di youtube & fb media resmi yayasan." },
      { date: "01 Mei 2026", title: "Instalasi Panel Kedap Suara Studio", desc: "Peredam suara terpasang di ruangan rekam demi kenyamanan pendengar." }
    ],
    photos: [
      { title: "Meja Studio Mixer Audio", desc: "Konfigurasi alat mixer sound jernih siap memancarkan dakwah.", url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600" }
    ]
  }
};

const categoryCards = [
  { id: "pendidikan", title: "Laporan Pendidikan", funds: "Rp 125.000.000", target: "Rp 150.000.000", percent: 83, desc: "Sponsorship beasiswa tahfidz yatim du'afa & buku tajwid RUTABA Lawang." },
  { id: "orang-tua-asuh", title: "Laporan Orang Tua Asuh", funds: "Rp 180.000.000", target: "Rp 240.000.000", percent: 75, desc: "Asrama mukim, makan sehat 3x sehari, cek kesehatan & insentif asatidzah." },
  { id: "program-sosial", title: "Laporan Program Sosial", funds: "Rp 102.000.000", target: "Rp 120.000.000", percent: 85, desc: "Bantuan sembako berkala, fidyah, tebas hutang kelontong janda dhuafa." },
  { id: "wakaf-alquran", title: "Laporan Wakaf Al-Qur’an", funds: "Rp 42.500.000", target: "Rp 50.000.000", percent: 85, desc: "Pengadaan mushaf kertas QPP anti-silau standar madinah cetak lokal." },
  { id: "wakaf-pembangunan", title: "Laporan Wakaf Pembangunan", funds: "Rp 780.000.000", target: "Rp 1.000.000.000", percent: 78, desc: "Konstruksi asrama 2 lantai, sanitasi mapan & sumur bor pipa gunung." },
  { id: "dakwah-digital", title: "Laporan Dakwah Digital", funds: "Rp 64.000.000", target: "Rp 80.000.000", percent: 80, desc: "Soundcard mixer audio, sewa server website & fiber streaming kajian." }
];

export default function DevelopmentProgressPage({ onNavigate, initialCategory, onCategoryChange }: DevelopmentProgressPageProps) {
  const [activeTab, setActiveTab] = useState(initialCategory || "semua");
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("semua");
  const [downloadAlert, setDownloadAlert] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialCategory) {
      setActiveTab(initialCategory);
    }
  }, [initialCategory]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onCategoryChange) {
      onCategoryChange(tabId);
    }
    if (tabId === "semua") {
      onNavigate("laporan");
    } else {
      onNavigate(`laporan/${tabId}`);
    }
    // Smooth scroll page to top on segment click
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownload = (docName: string) => {
    setDownloadAlert(`Laporan "${docName}" sedang diekspor dalam format dokumen PDF bertanda tangan digital Syariah. File akan otomatis terunduh beberapa saat lagi.`);
    setTimeout(() => {
      setDownloadAlert(null);
    }, 4500);
  };

  const handleShare = (docName: string) => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setDownloadAlert(`Tautan Laporan "${docName}" berhasil disalin ke papan klip Anda. Siap dibubuhkan ke saluran komunikasi WhatsApp atau komunitas Muhsinin.`);
    }).catch(() => {
      setDownloadAlert(`Fitur salin tautan sedang dipersiapkan.`);
    });
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

  const reportDetail = REPORTS_DATA[activeTab];

  return (
    <div ref={containerRef} className="bg-[#fbfcff] text-brand-dark-900 min-h-screen pb-24">
      
      {/* SECTION 1: HERO CONTAINER (Switches according to active tab for immersion) */}
      <section className={`relative overflow-hidden bg-gradient-to-br transition-all duration-350 ${
        activeTab === "semua" 
          ? "from-brand-dark-950 via-brand-dark-900 to-brand-teal-950 border-b border-brand-teal-900/30" 
          : reportDetail?.bgColor || "from-brand-dark-950 via-brand-dark-900 to-brand-teal-950"
      } text-white py-20 sm:py-28`}>
        <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-[-5%] w-[400px] h-[400px] bg-brand-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {activeTab !== "semua" && (
              <button 
                onClick={() => handleTabChange("semua")}
                className="mb-6 flex items-center gap-1.5 py-1 px-3.5 bg-white/10 hover:bg-white/15 transition-all text-[11px] font-bold uppercase tracking-wider rounded-full border border-white/10"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Kembali Ke Ringkasan
              </button>
            )}

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#d97706] bg-amber-500/15 border border-amber-500/20 rounded-full uppercase mb-5">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold-500" />
              TRANSPARANSI PONPES SUNNAH AMANAH
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              {activeTab === "semua" ? (
                <>
                  Laporan Program & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-300 via-brand-teal-100 to-brand-gold-300">
                    Pembangunan
                  </span>
                </>
              ) : (
                <>
                  {reportDetail?.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-300 via-brand-teal-100 to-brand-gold-300">
                    {categoryCards.find(c => c.id === activeTab)?.funds || "Capaian"}
                  </span>
                </>
              )}
            </h1>

            <p className="mt-5 text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed font-semibold">
              {activeTab === "semua" 
                ? "Sistem pelaporan berkala pertanggungjawaban dana umat, progress konstruksi fisik, dan kemaslahatan santri Pondok Pesantren Nurul Quran Lawang Malang."
                : reportDetail?.subtitle
              }
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {activeTab === "semua" ? (
                <>
                  <a
                    href="#ringkasan-semua"
                    className="py-2.5 px-6 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full cursor-pointer shadow-lg shadow-brand-teal-500/20 text-center"
                  >
                    Mulai Penelusuran
                  </a>
                  <button
                    onClick={() => onNavigate("donations")}
                    className="py-2.5 px-6 text-xs sm:text-sm font-extrabold text-brand-teal-300 bg-transparent hover:bg-white/5 transition-all border border-brand-teal-500/35 rounded-full cursor-pointer"
                  >
                    Dukung Program Donasi
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleDownload(reportDetail?.title || "Laporan")}
                    className="py-2.5 px-6 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full cursor-pointer flex items-center gap-2 shadow-lg text-center"
                  >
                    <Download className="h-4 w-4" /> Download Laporan (PDF)
                  </button>
                  <button
                    onClick={() => handleShare(reportDetail?.title || "Laporan")}
                    className="py-2.5 px-6 text-xs sm:text-sm font-extrabold text-brand-teal-200 bg-transparent hover:bg-white/5 transition-all border border-brand-teal-500/35 rounded-full cursor-pointer flex items-center gap-1.5"
                  >
                    <Share2 className="h-4 w-4" /> Bagikan Laporan
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALERT BANNER SYSTEM FOR DOWNLOAD SIMULATION */}
      <AnimatePresence>
        {downloadAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md p-4 bg-brand-dark-900 text-white rounded-2xl shadow-2xl border border-brand-teal-500 flex gap-3.5 items-start"
          >
            <AlertCircle className="h-5 w-5 text-brand-teal-400 shrink-0 mt-0.5" />
            <div>
              <span className="block text-[10px] font-extrabold text-brand-teal-400 uppercase tracking-widest mb-1">PROMPT SIMULASI DUMMY</span>
              <p className="text-[11px] text-gray-300 font-semibold">{downloadAlert}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEGMENT TAB BAR (Scrollable navigation row for extreme ease of segment clicks) */}
      <div className="sticky top-0 bg-white/95 backdrop-blur z-30 border-b border-gray-150 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
            {REPORT_CATEGORIES.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`py-2 px-4 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected 
                      ? "bg-brand-teal-500 text-white shadow-md shadow-brand-teal-500/20"
                      : "bg-gray-100 text-gray-500 hover:text-brand-teal-500 hover:bg-brand-teal-50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div id="ringkasan-semua" className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === "semua" ? (
            <motion.div
              key="summary-transparency"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              
              {/* SECTION: GENERAL SUMMARY METRICS CARDS */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
                    <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">Total Target Biaya</span>
                    <span className="block text-base sm:text-lg font-extrabold text-brand-dark-900 mt-2 font-mono">Rp 1M</span>
                    <span className="text-[8px] text-gray-400 font-bold uppercase mt-1">RAB Total</span>
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

              {/* SECTION: PERSATUAN KARTU KATEGORI LAPORAN (REPORT SUB-CARDS LINKING TO TABS) */}
              <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-150 px-2.5 py-1 rounded">SUBKATEGORI DETAIL</span>
                    <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-brand-dark-900 mt-2.5">Klik Kategori Laporan Penggunaan</h2>
                  </div>
                  <p className="max-w-md text-xs sm:text-sm text-gray-400 font-semibold leading-relaxed">
                    Arahkan kursor atau ketuk kartu di bawah untuk menembus detail ledger, kwitansi, dokumentasi, dan target spesifik donasi Anda.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryCards.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => handleTabChange(card.id)}
                      className="p-6 bg-white rounded-2xl border border-gray-150 hover:border-brand-teal-500 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group h-full relative"
                    >
                      <div className="absolute top-4 right-4 bg-gray-50 group-hover:bg-brand-teal-50 text-gray-400 group-hover:text-brand-teal-600 p-2 rounded-full transition-colors">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>

                      <div className="space-y-3 pr-8">
                        <span className="text-[9px] font-extrabold tracking-widest text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded uppercase">
                          {card.percent}% Terpenuhi
                        </span>
                        <h3 className="text-base sm:text-lg font-extrabold text-brand-dark-900 group-hover:text-brand-teal-600 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-xs text-gray-400 leading-normal font-medium">
                          {card.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                        <div className="space-y-0.5">
                          <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">Terkumpul</span>
                          <span className="block text-[13px] font-extrabold font-mono text-brand-teal-600">{card.funds}</span>
                        </div>
                        <div className="space-y-0.5 text-right">
                          <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">Kebutuhan RAB</span>
                          <span className="block text-[13px] font-extrabold font-mono text-gray-500">{card.target}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: CIRCULAR FISIK GAUGE (PRESERVED FROM ORIGINAL PROGRESS VIEW) */}
              <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#fafcfe] rounded-2xl border border-gray-100">
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest text-center mb-6">PROGRESS FISIK AKTUAL</span>
                      
                      <div className="relative w-40 h-40 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="80" cy="80" r="70" className="stroke-gray-100 fill-transparent" strokeWidth="10" />
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

                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <span className="text-[9px] font-extrabold tracking-widest text-brand-teal-500 uppercase bg-brand-teal-50 px-2 py-0.5 rounded">RAB DAN ESTIMASI</span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 mt-2">Detail Capaian & Verifikasi Data</h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed mt-2">
                          Pengawasan dilakukan oleh dewan insinyur sipil mandiri bersama pengurus pesantren Lawang. Kami menjamin efisiensi material dengan memangkas segala bentuk komisi agen atau mark-up harga demi menjaga berkah harta wakaf mulia.
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold text-gray-600 mb-1">
                            <span>Dana Masuk (Muhsinin Terdaftar)</span>
                            <span className="font-mono text-brand-teal-600 text-sm">78%</span>
                          </div>
                          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 h-full rounded-full" style={{ width: "78%" }} />
                          </div>
                        </div>

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
                        <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-[10px] sm:text-xs font-semibold text-amber-800 leading-normal">
                          <b>Catatan Transparansi:</b> Data kuantitatif, kurva s, dan nominal yang tertera merupakan visualisasi sandbox tepercaya yang dapat diaudit langsung ke mutasi rekening yayasan secara murni bagi para pengurus syariah.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* TIMELINE CONSTRUCTION (PRESERVED FROM SECTION 5 ORIGINAL) */}
              <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                  <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-600 bg-brand-teal-50 px-2.5 py-1 rounded uppercase">TAHAPAN REALISASI</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold mt-2 text-brand-dark-900">Agenda Milestones Konstruksi</h3>
                </div>

                <div className="relative pl-6 border-l border-gray-150 space-y-6">
                  <div className="relative">
                    <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-brand-teal-500 rounded-full border-4 border-white flex items-center justify-center shadow-md shadow-brand-teal-500/20" />
                    <div className="p-5 bg-white rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">1. Akuisisi & Wakaf Tanah Nurul Qur'an</h4>
                          <span className="text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded-full uppercase">Selesai</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1 font-semibold leading-relaxed">Penyelesaian sertifikat ikrar wakaf sebidang tanah dari keluarga besar muhsinin dhuha di pegunungan Lawang.</p>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold font-mono uppercase bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Januari 2026</span>
                    </div>
                  </div>

                  <div className="relative">
                    <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-brand-teal-500 rounded-full border-4 border-white flex items-center justify-center shadow-md shadow-brand-teal-500/20" />
                    <div className="p-5 bg-white rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">2. Persiapan Lokasi & Bahan Konstruksi</h4>
                          <span className="text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded-full uppercase">Selesai</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1 font-semibold leading-relaxed">Perataan area kebun Lawang, perizinan dinas tata kota setempat, dan pengiriman material fondasi baja/batu cor lapis pertama.</p>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold font-mono uppercase bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Februari 2026</span>
                    </div>
                  </div>

                  <div className="relative">
                    <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center shadow-md shadow-blue-500/20 animate-pulse" />
                    <div className="p-5 bg-white rounded-2xl border-2 border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">3. Pengerjaan Struktur Utama & Asrama</h4>
                          <span className="text-[9px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase">Sedang Berjalan</span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-1 font-semibold leading-relaxed">Pengecoran tiang-tiang fondasi asrama kelas, pembuatan dinding batu bata merah bakar, tiang atap masjid utama.</p>
                      </div>
                      <span className="text-[10px] text-blue-600 font-extrabold font-mono uppercase bg-blue-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Maret - Juni 2026</span>
                    </div>
                  </div>

                  <div className="relative">
                    <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
                    <div className="p-5 bg-[#fafbfc] rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-gray-400">4. Instalasi Listrik, Air & Sanitasi Bersih</h4>
                          <span className="text-[9px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase">Berikutnya</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1 font-medium leading-relaxed">Pemasangan kabel dalam dinding kwh token, pipa air tawar tandon atas bukit, septic-tank modern higienis.</p>
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium font-mono uppercase bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Juli - September 2026</span>
                    </div>
                  </div>

                  <div className="relative">
                    <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
                    <div className="p-5 bg-[#fafbfc] rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-extrabold text-gray-400">5. Pengadaan Sarana Belajar & Kitab</h4>
                          <span className="text-[9px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase">Berikutnya</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1 font-medium leading-relaxed">Sourcing meja tahfidz kayu halus anti selip, lemari rapi, pengadaan mushaf syafii cetakan Madinah.</p>
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium font-mono uppercase bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">Okt - Nov 2026</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* BEFORE & AFTER SHOWCASE (PRESERVED FROM ORIGINAL SECTION 4) */}
              <section className="py-20 bg-brand-dark-50/50 border-t border-b border-gray-100 relative">
                <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="text-center max-w-xl mx-auto mb-16">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100 px-3 py-1 rounded-full">VISUAL AKURASI</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Sebelum & Sesudah Pembangunan</h2>
                    <p className="mt-2 text-xs text-gray-400 font-semibold">Transformasi luhur lahan Lawang menjadi pusat pencetakan generasi Qurani.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="aspect-[4/3] bg-gray-100 border-b border-gray-150">
                          <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=400" alt="Kondisi Awal" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                        </div>
                        <div className="p-5 space-y-2">
                          <span className="inline-block text-[9px] font-extrabold text-gray-400 bg-gray-100 px-2 py-0.5 rounded uppercase">FASE AWAL (FEBRUARI)</span>
                          <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Perataan Kebun Lawang</h4>
                          <p className="text-[11px] text-gray-450 leading-relaxed font-semibold">Awal mula lahan berupa lereng kebun bambu liar sebelum dilakukan pemancangan.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="aspect-[4/3] bg-gray-100 border-b border-gray-150">
                          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400" alt="Konstruksi Pondasi" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="p-5 space-y-2">
                          <span className="inline-block text-[9px] font-extrabold text-[#0a8a9a] bg-brand-teal-50 px-2 py-0.5 rounded uppercase">FASE STRUKTUR (APRIL)</span>
                          <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Pengecoran Pilar Mutu K-300</h4>
                          <p className="text-[11px] text-gray-455 leading-relaxed font-semibold">Memasuki pengerjaan balok sloof beton bertulang anti retak gempa.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="aspect-[4/3] bg-gray-100 border-b border-gray-150">
                          <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400" alt="Fase Selesai" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="p-5 space-y-2">
                          <span className="inline-block text-[9px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded uppercase">RENCANA FINISHING (DESEMBER)</span>
                          <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">Estetika Kompleks Islami</h4>
                          <p className="text-[11px] text-gray-450 leading-relaxed font-semibold">Konsep ramah sanitasi alami berhiaskan pepohonan kurma hijau.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              
              {/* SECTION: SPECIFIC SUB-METRICS OVERVIEW */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
                    <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">Target Aggregat Program</span>
                    <span className="block text-base sm:text-lg font-extrabold text-brand-dark-900 mt-2 font-mono">{reportDetail?.targetBudget}</span>
                    <span className="text-[8px] text-gray-400 font-bold uppercase mt-1">Estimasi RAB</span>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
                    <span className="text-[9px] font-extrabold text-[#0f766e] uppercase tracking-wider">Total Dana Masuk</span>
                    <span className="block text-base sm:text-lg font-extrabold text-[#0f766e] mt-2 font-mono">{reportDetail?.received}</span>
                    <span className="text-[8px] text-brand-teal-500 font-bold uppercase mt-1">Muhsinin Terdaftar</span>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
                    <span className="text-[9px] font-extrabold text-amber-600 uppercase tracking-wider">Kas Tersalurkan</span>
                    <span className="block text-base sm:text-lg font-extrabold text-brand-dark-900 mt-2 font-mono">{reportDetail?.disbursed}</span>
                    <span className="text-[8px] text-gray-400 font-bold uppercase mt-1">Realisasi Pos</span>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-md flex flex-col justify-between">
                    <span className="text-[9px] font-extrabold text-[#d97706] uppercase tracking-wider">Kebutuhan Lanjutan</span>
                    <span className="block text-base sm:text-lg font-extrabold text-brand-gold-600 mt-2 font-mono">{reportDetail?.remaining}</span>
                    <span className="text-[8px] text-gray-400 font-bold uppercase mt-1">Defisit Tersisa</span>
                  </div>

                  <div className="p-5 col-span-2 lg:col-span-1 bg-brand-dark-950 text-white rounded-2xl border border-brand-teal-900 shadow-md flex flex-col justify-between">
                    <span className="text-[9px] font-extrabold text-brand-teal-300 uppercase tracking-wider">Status Capaian</span>
                    <span className="block text-base sm:text-lg font-extrabold text-white mt-2 font-mono">{reportDetail?.progressPercent}%</span>
                    <span className="text-[8px] text-brand-teal-400 font-bold uppercase mt-1">{reportDetail?.progressText}</span>
                  </div>
                </div>
              </section>

              {/* SECTION: RINGKASAN PROGRAM & DESKRIPSI (PROGRAM SUMMARY CARD) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-50 px-2 py-0.5 rounded">
                        RINGKASAN UTAMA
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900">Uraian & Objektif Program</h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                      {reportDetail?.summary}
                    </p>
                    <div className="p-3 bg-[#f6f9fc] rounded-xl flex items-center gap-2 border border-gray-100">
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-teal-600 shrink-0" />
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-600">
                        <b>Komitmen Sunnah:</b> Dana dialokasikan murni tanpa komisi perantara atau mark-up untuk melestarikan integritas keuangan amanah.
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-1" />

                  <div className="md:col-span-4 p-6 bg-brand-dark-950 text-white rounded-2xl space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal-500/10 rounded-full blur-xl pointer-events-none" />
                    <span className="text-[9px] font-extrabold text-[#d97706] uppercase tracking-wider">Tujuan Utama</span>
                    <h4 className="text-xs sm:text-sm font-extrabold">Target Kemaslahatan</h4>
                    <p className="text-[10px] sm:text-xs text-brand-teal-100 font-semibold leading-relaxed">
                      {reportDetail?.objective}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate("donations")}
                        className="w-full py-2 bg-brand-teal-500 hover:bg-brand-teal-600 transition-colors text-white font-extrabold text-[10px] rounded-full uppercase"
                      >
                        Ikut Berdonasi Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION: DANA MASUK & DANA DIGUNAKAN TABLE (TABULAR DETAIL OF ESTIMATION) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-sm space-y-6">
                  <div>
                    <span className="text-[9px] font-extrabold tracking-widest text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded uppercase">AUDIT TRANSPARANSI</span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark-900 mt-2">Penyaluran Anggaran Berjalan (Kas Fisik)</h3>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-brand-dark-950 text-white text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase border-b border-brand-teal-950">
                          <th className="p-4 pl-6">Deskripsi Kebutuhan Pokok</th>
                          <th className="p-4">Nominal Anggaran</th>
                          <th className="p-4 text-center">Rasio Alokasi</th>
                          <th className="p-4 text-center">Status</th>
                          <th className="p-4 pr-6">Keterangan Teknis Penyaluran</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs text-brand-dark-900 font-semibold divide-y divide-gray-100">
                        {reportDetail?.useCases.map((use, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/50">
                            <td className="p-4 pl-6 flex items-center gap-2">
                              <Database className="h-4 w-4 text-brand-teal-500 shrink-0" />
                              <span>{use.item}</span>
                            </td>
                            <td className="p-4 font-mono text-brand-teal-600">{use.amount}</td>
                            <td className="p-4 text-center font-mono text-gray-400">{use.ratio}</td>
                            <td className="p-4 text-center">
                              <span className={`px-2.5 py-0.5 text-[8px] font-extrabold rounded-full uppercase ${
                                use.status === "Selesai" 
                                  ? "bg-brand-teal-50 text-brand-teal-600"
                                  : "bg-blue-50 text-blue-600"
                              }`}>
                                {use.status}
                              </span>
                            </td>
                            <td className="p-4 pr-6 text-gray-400 text-[11px] font-medium max-w-xs">{use.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION: AKTIVITAS & PROGRESS PROGRAM TIMELINE LOGGER */}
              <section className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8">
                  <span className="text-[9px] font-extrabold tracking-widest text-purple-600 bg-purple-50 px-2 py-0.5 rounded uppercase">PROGRESS TIMELINE</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark-900 mt-2">Daftar Aktivitas & Update Riil Berjalan</h3>
                </div>

                <div className="relative pl-6 border-l border-gray-150 space-y-6">
                  {reportDetail?.activities.map((act, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 bg-brand-teal-500 rounded-full border-4 border-white flex items-center justify-center shadow" />
                      <div className="p-5 bg-white rounded-2xl border border-gray-150 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">{act.title}</h4>
                          <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">{act.desc}</p>
                        </div>
                        <span className="inline-block text-[9px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded shrink-0 self-start sm:self-center">
                          {act.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: DOKUMENTASI PENYALURAN (SECTION INSIDE DETAILED Lapporans) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-sm space-y-8">
                  <div className="text-center max-w-xl mx-auto">
                    <span className="text-[9px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100 px-3 py-1 rounded-full">DOKUMENTASI RIIL</span>
                    <h3 className="text-lg sm:text-2xl font-extrabold text-brand-dark-900 mt-2">Visual Mutasi & Kegiatan Penyaluran</h3>
                    <p className="mt-1.5 text-xs text-gray-400 font-semibold">Dokumentasi sunnah riil tanpa close-up manusia, demi menjaga adab amanah yayasan.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {reportDetail?.photos.map((ph, idx) => (
                      <div key={idx} className="bg-[#fbfcff] rounded-2xl overflow-hidden border border-gray-150 shadow-sm group hover:shadow-md transition-shadow">
                        <div className="aspect-[4/3] bg-gray-150 overflow-hidden relative">
                          <img 
                            src={ph.url} 
                            alt={ph.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-4 space-y-1">
                          <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900">{ph.title}</h4>
                          <p className="text-[11px] text-gray-450 font-semibold leading-relaxed">{ph.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* BUTTON ACTIONS IN DETAIL */}
              <section className="max-w-7xl mx-auto px-4 text-center">
                <div className="inline-flex flex-wrap items-center justify-center gap-4 p-6 bg-[#fafcfe] rounded-2xl border border-gray-100 shadow-sm">
                  <span className="text-xs font-bold text-gray-500">Pertanyaan atau butuh log bank luring?</span>
                  <button
                    onClick={() => handleDownload(reportDetail?.title || "Laporan")}
                    className="py-2.5 px-5 text-xs font-extrabold text-white bg-brand-dark-950 hover:bg-black rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="h-4 w-4" /> Download Lampiran Lengkap
                  </button>
                  <button
                    onClick={() => handleShare(reportDetail?.title || "Laporan")}
                    className="py-2.5 px-5 text-xs font-extrabold text-gray-600 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors flex items-center gap-1.5 cursor-pointer animate-pulse"
                  >
                    <Share className="h-4 w-4 text-brand-teal-600" /> Share Laporan Ke Rekan
                  </button>
                </div>
              </section>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* INTERACTIVE GALERI DOKUMENTASI LENGKAP (ONLY VISIBLE ON RINGKASAN OVERVIEW MAIN VIEW) */}
      {activeTab === "semua" && (
        <section className="py-20 bg-white border-t border-b border-gray-100 mt-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100 px-3 py-1 rounded-full">DOKUMENTASI RIIL</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Galeri Progress Riil Lapangan</h2>
              <p className="mt-2 text-xs text-gray-400 font-semibold">Konsep sunnah: Foto murni arsitektural asrama & alat konstruksi, bebas dari human close-up.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-xl mx-auto animate-fade">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {filteredGallery.map((img) => (
                <div key={img.id} className="bg-[#fbfcff] rounded-2xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] bg-gray-150 overflow-hidden relative">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-955/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <div className="p-5">
                    <span className="text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded-full uppercase tracking-wider block w-max mb-2">{img.category}</span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 leading-snug">{img.title}</h4>
                    <p className="text-[11px] text-gray-400 mt-1 font-semibold leading-relaxed">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CONCLUDING BANNER CTA (PRESERVED FROM ORIGINAL PROGRESS VIEW) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-brand-teal-950 text-white rounded-3xl p-8 sm:p-14 border border-brand-teal-900 shadow-xl">
          <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
          <div className="absolute top-[-30%] right-[-10%] w-[350px] h-[350px] bg-brand-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-[10px] font-extrabold tracking-widest text-[#d97706] bg-amber-500/15 border border-amber-500/20 px-2.5 py-1 rounded-full uppercase">
              AMAL JARIYAH ABADI
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Bersama Membangun Fasilitas Pendidikan Qurani
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed">
              Setiap dukungan Anda menjadi bagian dari ikhtiar asuransi akhirat menghadirkan tempat belajar dan tahfidz yang lebih mulia untuk generasi tahfidz Qur'an. Harta berkurang murni untuk asrama, tulus bernaung sunnah wal jamaah.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate("donations")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-[#0f766e] hover:bg-[#0d655e] transition-all rounded-full cursor-pointer shadow-lg"
              >
                Dukung Sekarang
              </button>
              <button
                onClick={() => handleTabChange("semua")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-teal-100 bg-transparent hover:bg-white/5 transition-all border border-brand-teal-500/35 rounded-full cursor-pointer"
              >
                Kembali ke Ringkasan
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
