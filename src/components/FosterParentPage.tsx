/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from "react";
import { 
  Heart, 
  BookOpen, 
  Utensils, 
  FileText, 
  Award, 
  Sparkles, 
  ChevronDown, 
  Check, 
  ShieldCheck, 
  HelpCircle,
  Coins,
  Send,
  MessageCircle,
  Clock,
  ThumbsUp,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FosterPackage } from "../types";

interface FosterParentPageProps {
  onNavigate: (viewId: string) => void;
}

interface ChildCandidate {
  id: string;
  name: string;
  age: number;
  program: string;
  needs: string;
  targetPrice: number;
  progressPercent: number;
  avatarBg: string; // Tailwind colour theme
}

const CHILDREN_DATA: ChildCandidate[] = [
  {
    id: "child-ahmad",
    name: "Ahmad F.",
    age: 9,
    program: "Rumah Tahfizz",
    needs: "Pendidikan & Makan",
    targetPrice: 500000,
    progressPercent: 60,
    avatarBg: "from-teal-500 to-emerald-600"
  },
  {
    id: "child-maryam",
    name: "Maryam A.",
    age: 7,
    program: "RUTABA",
    needs: "Kitab & Pembinaan",
    targetPrice: 300000,
    progressPercent: 40,
    avatarBg: "from-amber-400 to-amber-600"
  },
  {
    id: "child-abdullah",
    name: "Abdullah R.",
    age: 10,
    program: "Rumah Tahfizz",
    needs: "Pendidikan Lengkap",
    targetPrice: 500000,
    progressPercent: 75,
    avatarBg: "from-sky-500 to-indigo-600"
  },
  {
    id: "child-fatimah",
    name: "Fatimah Z.",
    age: 8,
    program: "Rumah Belajar",
    needs: "Pendidikan & Perlengkapan",
    targetPrice: 300000,
    progressPercent: 35,
    avatarBg: "from-rose-400 to-pink-600"
  },
  {
    id: "child-umar",
    name: "Umar H.",
    age: 11,
    program: "Rumah Tahfizz",
    needs: "Makan & Tahfidz",
    targetPrice: 500000,
    progressPercent: 50,
    avatarBg: "from-cyan-500 to-blue-600"
  },
  {
    id: "child-aisyah",
    name: "Aisyah M.",
    age: 6,
    program: "RUTABA",
    needs: "Pembinaan Usia Dini",
    targetPrice: 300000,
    progressPercent: 45,
    avatarBg: "from-indigo-400 to-purple-600"
  }
];

export default function FosterParentPage({ onNavigate }: FosterParentPageProps) {
  // Page interaction states
  const [selectedChild, setSelectedChild] = useState<ChildCandidate | null>(null);
  const [selectedPack, setSelectedPack] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  // Modal display states
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [donorName, setDonorName] = useState<string>("");
  const [whatsAppNo, setWhatsAppNo] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // FAQ Expanded indices
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setFaqOpenIdx(faqOpenIdx === idx ? null : idx);
  };

  const handleOpenSponsorship = (child: ChildCandidate) => {
    alert("Fitur orang tua asuh akan aktif setelah integrasi backend.");
    setSelectedChild(child);
    setSelectedPack("Paket Sinergi Khusus: " + child.name);
    setSelectedPrice(child.targetPrice);
    setFormSuccess(false);
    setValidationError(null);
    setIsModalOpen(true);
  };

  const handleOpenPackSponsorship = (packName: string, price: number) => {
    alert("Fitur orang tua asuh akan aktif setelah integrasi backend.");
    setSelectedChild(null);
    setSelectedPack(packName);
    setSelectedPrice(price);
    setFormSuccess(false);
    setValidationError(null);
    setIsModalOpen(true);
  };

  const handleSubmitSponsorship = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsAppNo.trim()) {
      setValidationError("Silakan masukkan Nomor WhatsApp untuk konfirmasi akad.");
      return;
    }
    setValidationError(null);
    // Success simulation
    setFormSuccess(true);
  };

  const faqs = [
    {
      q: "Apakah harus mendukung satu anak penuh?",
      a: "Tidak harus. Anda dibebaskan untuk memilih paket dukungan patungan sebagian (Rp150.000 atau Rp300.000) maupun memilih dukungan penuh senilai Rp500.000 sebulan demi menyokong satu anak asuh secara 1-on-1."
    },
    {
      q: "Apakah donasi harus dilakukan secara konsisten bulanan?",
      a: "Program Orang Tua Asuh dirancang sebagai pembiayaan rutin dan berkelanjutan bulanan demi menjamin kelancaran makan & sekolah anak. Namun, jika sewaktu-waktu kondisi keuangan Anda berubah, Anda dipersilakan mengonfirmasi pembatalan tanpa denda, atau memberi donasi satu kali jika berkehendak."
    },
    {
      q: "Apakah saya bisa menyembunyikan identitas saya?",
      a: "Sangat bisa. Dalam sistem digital pendaftaran, silakan centang pilihan 'Sembunyikan nama saya (Hamba Allah)'. Nama Anda tidak akan dipublikasikan di papan donatur transparan yayasan."
    },
    {
      q: "Apakah yayasan akan mengirimkan laporan perkembangan santri?",
      a: "Benar. Admin pengasuh asrama Nurul Quran mengirimkan resume perkembangan tahfidz, lembar setoran murajaah berkala, serta laporan keuangan tersalurkan tiap semester melalui email atau pesan WhatsApp aktif Anda."
    },
    {
      q: "Apakah bisa memilih nominal paket dukungan sesuai kemampuan?",
      a: "Tentu. Kami menyediakan opsi custom nominal sehingga Anda dapat mengetik nilai kemantapan donasi harian/bulanan secara fleksibel mulai dari Rp10.000 rupiah."
    }
  ];

  return (
    <div className="bg-[#fbfcff] text-brand-dark-900 min-h-screen">
      
      {/* SECTION 1: CINEMATIC HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-brand-teal-950 text-white py-24 sm:py-32 border-b border-brand-teal-900/30">
        <div className="absolute inset-0 islamic-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/3 right-[-10%] w-[450px] h-[450px] bg-brand-teal-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-5 left-[-5%] w-[330px] h-[330px] bg-brand-gold-500/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Small decorative Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#d97706] bg-amber-500/15 border border-amber-500/20 rounded-full uppercase mb-6">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold-500" />
              PROGRAM DUKUNGAN RUTIN BULANAN
            </span>

            {/* Main Display Typography Heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              Jadilah Orang Tua Asuh bagi <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-300 via-brand-teal-100 to-brand-gold-300 font-serif italic">
                Penghafal Al-Qur'an
              </span>
            </h1>

            {/* Support Copy paragraph */}
            <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-semibold">
              Dukung kebutuhan pendidikan, makan, kitab, dan pembinaan anak-anak penghafal Al-Qur’an agar mereka dapat belajar, menghafal, dan bertumbuh dalam lingkungan yang baik.
            </p>

            {/* Interactive Navigation Calls actions */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  const target = document.getElementById("pilihan-paket-bulanan");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full cursor-pointer shadow-lg shadow-brand-teal-500/20"
              >
                Mulai Menjadi Orang Tua Asuh
              </button>
              
              <button
                onClick={() => {
                  const target = document.getElementById("daftar-anak-asuh");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-teal-300 bg-transparent hover:bg-white/5 transition-all border border-brand-teal-500/35 rounded-full cursor-pointer"
              >
                Lihat Anak Asuh
              </button>
            </div>

          </motion.div>
        </div>
      </section>


      {/* SECTION 2: ONE SUPPORT - MANY BENEFITS ("Satu Dukungan, Banyak Manfaat") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Detail text summary intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100/50 px-2.5 py-1 rounded-full">
              KONTRIBUSI NYATA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 tracking-tight leading-snug">
              Satu Dukungan, Banyak Manfaat
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
              Program Orang Tua Asuh Yayasan Nurul Quran Lawang Malang adalah program dukungan rutin untuk membantu anak-anak penghafal Al-Qur’an mendapatkan kebutuhan pendidikan, makan, kitab, perlengkapan belajar, dan pembinaan harian.
            </p>
          </div>

          {/* 4 Multi values Card Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Value 1: Pendidikan */}
            <div className="p-6 bg-white border border-gray-150 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-brand-teal-50 text-brand-teal-500 rounded-xl flex items-center justify-center shrink-0 border border-brand-teal-100">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-brand-dark-900">Pendidikan</h4>
                <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">
                  Membantu biaya pembelajaran, renovasi kelas, gaji ustadz pengajar, dan pembinaan harian santri.
                </p>
              </div>
            </div>

            {/* Value 2: Makan harian */}
            <div className="p-6 bg-white border border-gray-150 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-brand-teal-50 text-brand-teal-500 rounded-xl flex items-center justify-center shrink-0 border border-brand-teal-100">
                <Utensils className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-brand-dark-900">Makan Harian</h4>
                <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">
                  Mendukung kebutuhan gizi, lauk pauk, makanan bersih agar santri belajar menghafal dengan tenang.
                </p>
              </div>
            </div>

            {/* Value 3: Kitab & Perlengkapan */}
            <div className="p-6 bg-white border border-gray-150 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-brand-teal-50 text-brand-teal-500 rounded-xl flex items-center justify-center shrink-0 border border-brand-teal-100">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-brand-dark-900">Kitab & Perlengkapan</h4>
                <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">
                  Membantu pemenuhan seragam harian ponpes, buku tajwid, mushaf tikrar hafalan, alat tulis, dan asrama.
                </p>
              </div>
            </div>

            {/* Value 4: Pembinaan Qurani */}
            <div className="p-6 bg-white border border-gray-150 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-amber-50 text-brand-gold-600 rounded-xl flex items-center justify-center shrink-0 border border-amber-100">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-brand-dark-900">Pembinaan Qurani</h4>
                <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">
                  Sokongan terhadap program khalaqah tahfidz asuhan ustadz sanad, ujian tasmi', dan adab sunnah mulia.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 3: MONTHLY PACKAGES ("Pilihan Paket Bulanan") */}
      <section id="pilihan-paket-bulanan" className="py-24 bg-brand-dark-50/50 border-t border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100/60 px-3 py-1 rounded-full">
              PILIHAN PAKET SOSIAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">
              Pilih Paket Dukungan Bulanan Anda
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
              Pilihan paket kami persiapkan untuk disesuaikan dengan keleluasaan rezeki Anda secara rutin tiap bulan.
            </p>
          </div>

          {/* Pricing tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            
            {/* Package 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">PAKET REKENING BELAJAR</span>
                <h3 className="text-base font-extrabold text-brand-dark-900 mt-1">Paket Belajar</h3>
                <p className="text-xs text-gray-400 mt-1 font-semibold min-h-[2.5rem]">Dukungan harian fasilitas ruang belajar syafii.</p>
                <div className="my-5 flex items-baseline gap-1">
                  <span className="text-xs font-bold text-gray-400">Rp</span>
                  <span className="text-2xl font-extrabold text-brand-dark-900 font-mono">150.000</span>
                  <span className="text-xs text-gray-400">/bln</span>
                </div>
                
                <ul className="space-y-3.5 pt-4 border-t border-gray-100 text-xs text-gray-600 font-semibold">
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Dukungan kegiatan belajar di RUTABA</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Perlengkapan belajar standar dasar</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Sebagian kebutuhan sewa kitab/mushaf</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenPackSponsorship("Paket Belajar", 150000)}
                className="w-full mt-8 py-2.5 px-4 font-extrabold text-xs text-center border border-gray-150 hover:border-brand-teal-300 text-gray-700 hover:text-brand-teal-600 hover:bg-brand-teal-50/20 rounded-xl transition-all cursor-pointer"
              >
                Pilih Paket
              </button>
            </div>

            {/* Package 2: RECOMMENDED (Paket Makan & Belajar) */}
            <div className="bg-white rounded-2xl p-6 border-2 border-brand-teal-500 flex flex-col justify-between shadow-lg relative -translate-y-1.5 md:-translate-y-2">
              
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-teal-500 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                TERFAVORIT • REKOMENDASI
              </span>

              <div>
                <span className="text-[9px] font-extrabold text-brand-teal-600 uppercase tracking-widest block mt-2">PAKET PRIMER GIZI</span>
                <h3 className="text-base font-extrabold text-brand-dark-900 mt-1">Paket Makan & Belajar</h3>
                <p className="text-xs text-gray-400 mt-1 font-semibold min-h-[2.5rem]">Dukungan vital asupan gizi fisik & batiniah santri.</p>
                
                <div className="my-5 flex items-baseline gap-1 border-b border-gray-150 pb-4">
                  <span className="text-xs font-bold text-gray-400">Rp</span>
                  <span className="text-2xl font-extrabold text-brand-dark-900 font-mono">300.000</span>
                  <span className="text-xs text-gray-400">/bln</span>
                </div>
                
                <ul className="space-y-3.5 pt-2 text-xs text-gray-600 font-semibold">
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Dukungan makan santri duafa dhuafa</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Fasilitas kegiatan belajar tahfidz umum</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Perlengkapan belajar, seragam khas</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Pembinaan harian adab lurus</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenPackSponsorship("Paket Makan & Belajar (Favorit)", 300000)}
                className="w-full mt-8 py-3 px-4 font-extrabold text-xs text-center text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:brightness-105 rounded-xl shadow-lg shadow-brand-teal-500/10 transition-all cursor-pointer"
              >
                Pilih Paket Favorit
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">SPONSOR ADIDAS ASRAMA</span>
                <h3 className="text-base font-extrabold text-brand-dark-900 mt-1">Paket Pendidikan Lengkap</h3>
                <p className="text-xs text-gray-400 mt-1 font-semibold min-h-[2.5rem]">Pembiayaan ekosistem asuhan santri menyeluruh.</p>
                <div className="my-5 flex items-baseline gap-1 animate-pulse">
                  <span className="text-xs font-bold text-gray-400">Rp</span>
                  <span className="text-2xl font-extrabold text-brand-dark-900 font-mono">500.000</span>
                  <span className="text-xs text-gray-400">/bln</span>
                </div>
                
                <ul className="space-y-3.5 pt-4 border-t border-gray-100 text-xs text-gray-600 font-semibold">
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Pendidikan formal & syariah terpadu</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Ketersediaan pangan menu sehat asrama</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Mushaf tikrar cetakan mewah, buku tulis</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Pembinaan tahfidz 1-on-1 ustadz sanad</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenPackSponsorship("Paket Pendidikan Lengkap", 500000)}
                className="w-full mt-8 py-2.5 px-4 font-extrabold text-xs text-center border border-gray-150 hover:border-brand-teal-300 text-gray-700 hover:text-brand-teal-600 hover:bg-brand-teal-50/20 rounded-xl transition-all cursor-pointer"
              >
                Pilih Paket
              </button>
            </div>

            {/* Package 4: Custom */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">BEBAS TEKSTUR</span>
                <h3 className="text-base font-extrabold text-brand-dark-900 mt-1">Custom Nominal</h3>
                <p className="text-xs text-gray-400 mt-1 font-semibold min-h-[2.5rem]">Kemudahan memberi semampu kelonggaran tabungan.</p>
                <div className="my-5 flex items-baseline gap-1 bg-[#fbfdff] p-2 rounded-xl border border-gray-100 text-center">
                  <span className="text-xs font-bold text-brand-teal-500 uppercase tracking-wider mx-auto">Sesuai Kemampuan</span>
                </div>
                
                <ul className="space-y-3.5 pt-2 text-xs text-gray-600 font-semibold">
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Donasi rutin bulanan berapapun disyukuri</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Dapat dialokasikan pada kebutuhan mendesak</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-4 w-4 text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>Sangat cocok untuk pemula amal jariyah</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenPackSponsorship("Custom Paket Mandiri", 50000)}
                className="w-full mt-8 py-2.5 px-4 font-extrabold text-xs text-center border border-gray-150 hover:border-brand-teal-300 text-gray-700 hover:text-brand-teal-600 hover:bg-brand-teal-50/20 rounded-xl transition-all cursor-pointer"
              >
                Isi Nominal
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4: CHILD LIST DUMMY SPONSORSHIPS ("Anak Asuh yang Membutuhkan Dukungan") */}
      <section id="daftar-anak-asuh" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (No Human illustration, strictly letter marks) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold tracking-widest text-[#0a8a9a] uppercase bg-brand-teal-100/60 px-3 py-1 rounded-full">
            KANDIDAT PENERIMA MANFAAT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Anak Asuh yang Membutuhkan Dukungan
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
            Demi menjaga marwah, martabat, serta psikologi tulus anak-anak santri dhu'afa, kami menyajikan inisial tanpa memamerkan foto wajah anak secara vulgar.
          </p>
        </div>

        {/* Children Candidates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHILDREN_DATA.map((child) => (
            <div 
              key={child.id} 
              className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              
              {/* Header card representation (Using Initials circle, complying with sunnah guidelines) */}
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${child.avatarBg} text-white font-serif font-extrabold text-lg flex items-center justify-center shadow-inner shrink-0`}>
                  {child.name.substring(0, 1)}
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-dark-900 text-sm sm:text-base">{child.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px] font-bold text-gray-400 uppercase">
                    <span>{child.age} Tahun</span>
                    <span>•</span>
                    <span className="text-brand-teal-600 font-extrabold">{child.program}</span>
                  </div>
                </div>
              </div>

              {/* Data parameters */}
              <div className="space-y-2.5 text-xs text-gray-600 font-semibold mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Prioritas Kebutuhan</span>
                  <span>{child.needs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Target Sponsor</span>
                  <span className="font-mono text-brand-dark-900">Rp {child.targetPrice.toLocaleString("id-ID")}/bln</span>
                </div>
                
                {/* Budget Progress bar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold mb-1">
                    <span>SPONSORSHIP PROGRESS</span>
                    <span className="text-brand-teal-500 font-mono italic">{child.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-teal-500 h-full rounded-full"
                      style={{ width: `${child.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* CTA elements */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleOpenSponsorship(child)}
                  className="py-2 px-3 text-[10px] sm:text-xs text-center border border-gray-150 hover:bg-gray-50 text-gray-600 font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Detail Profil
                </button>
                <button
                  onClick={() => handleOpenSponsorship(child)}
                  className="py-2 px-3 text-[10px] sm:text-xs text-center bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-extrabold rounded-xl transition-all shadow-sm shadow-brand-teal-500/10 cursor-pointer"
                >
                  Jadi Orang Tua Asuh
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>


      {/* SECTION 5: STEP BY STEP GUIDE ("Cara Menjadi Orang Tua Asuh") */}
      <section className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
              PROSEDUR RESMI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
              Cara Menjadi Orang Tua Asuh
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
              Kami menyusun administrasi akad donatur yang sangat sederhana dan amanah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative text-center">
            
            {/* Horizontal connect vectors for desktop */}
            <div className="hidden md:block absolute top-[2.2rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-teal-200/50 to-brand-teal-200/50 z-0 pointer-events-none" />

            {/* Step 1 */}
            <div className="relative z-10 p-5 bg-[#fafbfc] rounded-2xl border border-gray-150">
              <span className="w-8 h-8 rounded-full bg-brand-teal-500 text-white font-bold text-xs flex items-center justify-center mx-auto mb-4 shadow-md shadow-brand-teal-500/15">1</span>
              <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mb-1">Pilih Anak atau Paket</h4>
              <p className="text-[11px] text-gray-400 font-semibold mt-1 leading-normal">
                Tentukan santri binaan asuh spesifik maupun pilih paket patungan umum bulanan.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 p-5 bg-[#fafbfc] rounded-2xl border border-gray-150">
              <span className="w-8 h-8 rounded-full bg-brand-teal-500 text-white font-bold text-xs flex items-center justify-center mx-auto mb-4 shadow-md shadow-brand-teal-500/15">2</span>
              <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mb-1">Tentukan Nilai Bulanan</h4>
              <p className="text-[11px] text-gray-400 font-semibold mt-1 leading-normal">
                Sesuaikan nominal kelonggaran harta bulanan dari tabel paket atau custom.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 p-5 bg-[#fafbfc] rounded-2xl border border-gray-150">
              <span className="w-8 h-8 rounded-full bg-brand-teal-500 text-white font-bold text-xs flex items-center justify-center mx-auto mb-4 shadow-md shadow-brand-teal-500/15">3</span>
              <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mb-1">Konfirmasi Donasi</h4>
              <p className="text-[11px] text-gray-400 font-semibold mt-1 leading-normal">
                Selesaikan transaksi murni lewat BSI Syariah resmi yayasan maupun scan QRIS cepat.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 p-5 bg-[#fafbfc] rounded-2xl border border-gray-150">
              <span className="w-8 h-8 rounded-full bg-[#0a8a9a] text-white font-bold text-xs flex items-center justify-center mx-auto mb-4 shadow-md shadow-brand-teal-500/15">4</span>
              <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mb-1">Terima Update Berkala</h4>
              <p className="text-[11px] text-gray-400 font-semibold mt-1 leading-normal">
                Pengurus asrama akan rutin memberi laporan setoran hafalan & syiar santri tiap semester.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 6: TRANSPARENCY HISTORIES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-2.5 py-1 rounded-full uppercase">
              SISTEM TRANSPARAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 tracking-tight leading-tight">
              Transparansi Dukungan Orang Tua Asuh
            </h2>
            
            <ul className="space-y-4 text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed">
              <li className="flex gap-3 items-start">
                <Check className="h-4.5 w-4.5 text-brand-teal-500 shrink-0 mt-0.5" />
                <span>Dana yang terkumpul 100% disalurkan untuk kebutuhan primer pendidikan dan makanan asrama santri dhu'afa.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="h-4.5 w-4.5 text-brand-teal-500 shrink-0 mt-0.5" />
                <span>Laporan keuangan program serta audit disajikan terbuka dan berkala di halaman transparansi.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="h-4.5 w-4.5 text-brand-teal-500 shrink-0 mt-0.5" />
                <span>Setiap donatur mendapatkan nomor registrasi kode santri asuh demi melihat historikal donasi secara online.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="h-4.5 w-4.5 text-brand-teal-500 shrink-0 mt-0.5" />
                <span>Update kebutuhan terkini, program asrama, maupun berita duka/suka disampaikan hangat oleh pengurus yayasan.</span>
              </li>
            </ul>
          </div>

          {/* Visual dummy metrics */}
          <div className="grid grid-cols-2 gap-4">
            
            <div className="p-6 bg-white rounded-2xl border border-gray-150 hover:shadow-md transition-shadow">
              <span className="block text-[9px] font-extrabold text-gray-400 uppercase">Total Dukungan Terkumpul</span>
              <span className="block text-xl sm:text-2xl font-extrabold text-brand-teal-600 mt-2 font-mono">Rp 48.500.300</span>
              <span className="block text-[8px] text-gray-400 font-semibold mt-1">Bulan Mei 2026</span>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-150 hover:shadow-md transition-shadow">
              <span className="block text-[9px] font-extrabold text-gray-400 uppercase">Santri Binaan Terbantu</span>
              <span className="block text-xl sm:text-2xl font-extrabold text-brand-dark-900 mt-2 font-mono">42 Anak</span>
              <span className="block text-[8px] text-[#0f766e] font-bold mt-1">100% Duafa Terjamin</span>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-150 hover:shadow-md transition-shadow">
              <span className="block text-[9px] font-extrabold text-gray-400 uppercase">Paket Aktif Tersalurkan</span>
              <span className="block text-xl sm:text-2xl font-extrabold text-brand-dark-900 mt-2 font-mono">78 Paket</span>
              <span className="block text-[8px] text-gray-400 font-semibold mt-1">Sponsor Aktif</span>
            </div>

            <div className="p-6 bg-[#f0f9fa] rounded-2xl border border-brand-teal-100 hover:shadow-md transition-shadow">
              <span className="block text-[9px] font-extrabold text-brand-teal-600 uppercase">Nisbah Kebutuhan</span>
              <span className="block text-xl sm:text-2xl font-extrabold text-[#0a8a9a] mt-2 font-mono">100% Amanah</span>
              <span className="block text-[8px] text-brand-teal-500 font-extrabold mt-1">Bebas Potongan Agen</span>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 7: FAQ ACCORDION */}
      <section className="py-24 bg-white border-t border-b border-gray-100 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3 py-1 rounded-full uppercase">
              PERTANYAAN UMUM FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpenIdx === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl transition-all overflow-hidden ${
                    isOpen ? "border-brand-teal-200 bg-brand-teal-50/10" : "border-gray-150 bg-[#fbfdff]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-xs sm:text-sm font-extrabold text-brand-dark-900 focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4.5 w-4.5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-teal-600" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold border-t border-gray-100/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* SECTION 8: LAUNCH CONCLUDING BANNER CTA ("Bantu Mereka Menghafal Al-Qur'an dengan Tenang") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-brand-teal-950 text-white rounded-3xl p-8 sm:p-14 border border-brand-teal-900">
          
          <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
          <div className="absolute top-[-30%] right-[-10%] w-[350px] h-[350px] bg-brand-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-[10px] font-extrabold tracking-widest text-[#d97706] bg-amber-500/15 border border-amber-500/20 px-2.5 py-1 rounded-full uppercase">
              AKSI KEBAIKAN SEKARANG
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Bantu Mereka Menghafal Al-Qur’an dengan Tenang
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed">
              Dukungan Anda hari ini dapat menjadi sebab hadirnya generasi Qurani yang bermanfaat untuk umat. Insya Allah menjadi investasi jariah kekal mendulang hisab kebaikan di yaumil akhir.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const target = document.getElementById("pilihan-paket-bulanan");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-[#0f766e] hover:bg-[#0d655e] transition-all rounded-full cursor-pointer shadow-lg"
              >
                Mulai Menjadi Orang Tua Asuh
              </button>
              <button
                onClick={() => onNavigate("donations")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-teal-200 bg-transparent hover:bg-white/5 transition-all border border-brand-teal-500/35 rounded-full cursor-pointer"
              >
                Donasi Sekarang
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* INTERACTIVE FORM MODAL DUMMY */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg overflow-hidden border border-gray-150 shadow-2xl relative"
            >
              
              {/* Header */}
              <div className="bg-brand-dark-950 text-white p-6 relative">
                <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-xs font-bold text-gray-400 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg border border-white/10"
                >
                  Batal
                </button>
                
                <span className="text-[8px] font-extrabold text-brand-teal-300 uppercase tracking-widest block mb-1">FORMULIR PENDAFTARAN</span>
                <h3 className="text-base font-extrabold">Akad Orang Tua Asuh</h3>
                <p className="text-[11px] text-gray-300 font-medium mt-1 leading-normal">
                  Penyokongan Program Asrama Nurul Quran Lawang Malang
                </p>
              </div>

              {/* Form viewport */}
              <div className="p-6">
                
                {!formSuccess ? (
                  <form onSubmit={handleSubmitSponsorship} className="space-y-4">
                    
                    {/* Selected Package summary */}
                    <div className="p-3.5 bg-[#f0f9fa] rounded-2xl border border-brand-teal-100 flex items-center justify-between text-xs font-bold">
                      <div>
                        <span className="block text-[8px] text-brand-teal-600 uppercase">PAKET TERPILIH</span>
                        <span className="block text-brand-dark-900 mt-0.5">{selectedPack}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[8px] text-brand-teal-600 uppercase">KONTRIBUSI</span>
                        <span className="block text-[#0a8a9a] font-mono">Rp {selectedPrice.toLocaleString("id-ID")}/bln</span>
                      </div>
                    </div>

                    {/* Donor Name field */}
                    <div>
                      <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                        Nama Lengkap Donatur (KTP / Nama Samaran)
                      </label>
                      <input 
                        type="text" 
                        required={!isAnonymous}
                        placeholder="Nama donatur..."
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        disabled={isAnonymous}
                        className="w-full text-xs font-semibold p-3 border border-gray-200 focus:border-brand-teal-500 focus:outline-none rounded-xl disabled:bg-gray-100 disabled:text-gray-400"
                      />
                    </div>

                    {/* WhatsApp field */}
                    <div>
                      <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                        Nomor WhatsApp Aktif (Guna Kirim Laporan)
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="Contoh: 08123456789"
                        value={whatsAppNo}
                        onChange={(e) => {
                          setWhatsAppNo(e.target.value);
                          setValidationError(null);
                        }}
                        className="w-full text-xs font-mono font-bold p-3 border border-gray-200 focus:border-brand-teal-500 focus:outline-none rounded-xl"
                      />
                    </div>

                    {validationError && (
                      <div className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-100 p-2.5 rounded-xl flex items-center gap-1.5">
                        <span className="shrink-0 text-red-500 font-extrabold">!</span>
                        <span>{validationError}</span>
                      </div>
                    )}

                    {/* Checkbox Sembunyikan Nama */}
                    <label className="flex items-center gap-2 select-none cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="rounded text-brand-teal-500 focus:ring-brand-teal-500 h-3.5 w-3.5"
                      />
                      <span className="text-[11px] font-bold text-gray-500">
                        Sembunyikan nama saya (Hamba Allah)
                      </span>
                    </label>

                    {/* Submit Registration button */}
                    <button
                      type="submit"
                      className="w-full py-3 px-4 font-extrabold text-xs sm:text-sm text-center text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-xl shadow-md cursor-pointer transition-all"
                    >
                      Lanjutkan Konfirmasi Akad Rp {selectedPrice.toLocaleString("id-ID")}
                    </button>

                  </form>
                ) : (
                  
                  // Success confirmation overlay
                  <div className="space-y-6 text-center py-6">
                    <div className="w-12 h-12 rounded-full bg-brand-teal-50 text-brand-teal-500 flex items-center justify-center mx-auto border border-brand-teal-100">
                      <Check className="h-6 w-6 stroke-[3]" />
                    </div>

                    <div>
                      <h4 className="font-bold text-brand-dark-900 text-base">Alhamdulillah, Akad Terdaftar!</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-semibold mt-1">
                        Terima kasih. Data pendaftaran Orang Tua Asuh atas nama <b className="text-brand-teal-600">{isAnonymous ? "Hamba Allah" : donorName || "Hamba Allah"}</b> senilai <b className="text-brand-teal-600 font-mono">Rp {selectedPrice.toLocaleString("id-ID")}/bulan</b> berhasil disiapkan di sandbox simulator kami.
                      </p>
                    </div>

                    <div className="bg-[#f0f9fa] p-4 rounded-xl border border-brand-teal-100/50 text-left space-y-2 text-xs font-semibold text-brand-dark-900">
                      <span className="block text-[8px] font-extrabold text-brand-teal-600 uppercase tracking-widest border-b border-brand-teal-100 pb-1.5">REKENING TRANSFER DEBET</span>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Bank BSI Syariah (451)</span>
                        <span className="font-mono text-xs font-bold">789-2244-556</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Penerima</span>
                        <span>Yayasan Nurul Quran Lawang</span>
                      </div>
                    </div>

                    <p className="text-[10px] text-gray-400 font-semibold italic">
                      Layanan customer care kami akan menghubungi Anda di WhatsApp {whatsAppNo} guna melengkapi berkas data diri santri asuh.
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="w-full py-2.5 px-4 bg-brand-dark-900 hover:bg-brand-dark-950 text-white font-bold text-xs rounded-xl cursor-pointer"
                    >
                      Selesai & Tutup
                    </button>
                  </div>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
