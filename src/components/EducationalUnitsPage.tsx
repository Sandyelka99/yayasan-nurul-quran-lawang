/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  BookOpen, 
  Compass, 
  MapPin, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Video, 
  Heart, 
  Plus, 
  Minus,
  X, 
  ChevronRight, 
  ExternalLink,
  UsersRound,
  ArrowRight,
  GraduationCap,
  Library,
  BookMarked,
  MessageCircle,
  ClipboardList,
  Calendar,
  FileCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface EducationalUnitsPageProps {
  onNavigate: (viewId: string) => void;
  activeSubUnit?: string;
}

export default function EducationalUnitsPage({ onNavigate, activeSubUnit }: EducationalUnitsPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  React.useEffect(() => {
    const targetId = activeSubUnit || (window.location.hash ? window.location.hash.substring(1) : "");
    if (targetId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [activeSubUnit]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const overviewValues = [
    {
      title: "Belajar",
      description: "Pendampingan akademik intensif dan pembinaan adab/karakter Islami mulia sehari-hari.",
      icon: BookOpen,
      iconColor: "text-brand-teal-500",
      bgColor: "bg-brand-teal-50/60"
    },
    {
      title: "Tahfidz",
      description: "Sistem talaqqi hafalan terarah, murajaah istiqomah, dan sertifikasi bacaan tajwid.",
      icon: BookMarked,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50/60"
    },
    {
      title: "Usia Dini",
      description: "Pembinaan Qurani menyenangkan sejak golden age balita dengan kesantunan & kelembutan.",
      icon: GraduationCap,
      iconColor: "text-[#0ea5e9]",
      bgColor: "bg-sky-50/65"
    }
  ];

  const handleWhatsappRedirect = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/6281200000000?text=${encoded}`, "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqItems = [
    {
      question: "Apa perbedaan Rumah Belajar, Rumah Tahfizz, dan RUTABA?",
      answer: "Rumah Belajar (Nurul Quran Learning Center) berfokus pada asimilasi & pendampingan belajar umum bersanding karakter Islami, Rumah Tahfizz mendedikasikan program khusus menghafal, perbaikan makharijul huruf & murajaah Al-Qur’an intensif, sedangkan RUTABA (Rumah Tahfidz Balita) memfokuskan tarbiyah usia balita & golden age dengan pendekatan bermain edukatif yang penuh kelembutan."
    },
    {
      question: "Apakah bisa berkonsultasi langsung secara tatap muka dengan asatidzah sebelum mendaftar?",
      answer: "Sangat bisa. Kami menganjurkan calon wali santri untuk menghubungi admin asrama terlebih dahulu guna menjadwalkan kunjungan syar'i agar bisa melihat langsung kenyamanan rehal belajar tanpa mengganggu iklim murojaah santri yang ada."
    },
    {
      question: "Apakah program pengajaran ini terbuka bagi santri di luar wilayah Lawang Malang?",
      answer: "Ya, program terbuka untuk umum. Ketentuan ketersediaan kuota balita RUTABA serta asrama santri tahfidz dapat dikonfirmasi secara berkala dengan menanyakan langsung grafik kuota sisa pendaftaran kepada admin yayasan."
    },
    {
      question: "Apakah ada kurikulum tahfidz khusus untuk batita atau balita usia dini?",
      answer: "Ada, yaitu unit RUTABA. Pendekatan kami sangat ramah balita, tidak memaksakan hafalan melebihi porsinya melainkan membiasakan dengungan murottal indah sehingga anak secara natural merekam serta menyukai hafalan surat-surat pendek."
    },
    {
      question: "Bagaimana masyarakat luar kota dapat ikut mendukung sarana pendidikan yang ada di yayasan?",
      answer: "Para muhsinin dapat menyalurkan donasi operasional harian, wakaf produktif untuk perluasan rehal, maupun menjadi Orang Tua Asuh beasiswa penuh bagi santri yatim dhuafa berprestasi melalui laman Donasi & Wakaf kami."
    }
  ];

  return (
    <div className="bg-[#fbfcff] text-brand-dark-900 min-h-screen pb-24">
      
      {/* SECTION 1: HERO CONTAINER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-[#0e2c3b] text-white py-24 sm:py-32 border-b border-brand-teal-900/40">
        <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[420px] h-[420px] bg-brand-teal-500/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#d97706] bg-amber-500/15 border border-amber-500/20 rounded-full uppercase mb-6">
              <Compass className="h-4 w-4 text-brand-gold-500 animate-spin-slow" />
              SISTEM KURIKULUM TERARAH
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              Unit Pendidikan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-300 via-brand-teal-100 to-brand-gold-300 font-serif italic">
                Yayasan Nurul Quran Lawang
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed font-semibold">
              Yayasan Nurul Quran Lawang Malang menghadirkan program pendidikan Islam terpadu, tahfidz Al-Qur’an berkelanjutan, serta pembinaan usia balita melalui unit-unit terpisah yang dikembangkan secara bertahap, teratur, penuh amanah, dan dilayani asatidzah mumpuni.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection("rumah-belajar")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full cursor-pointer shadow-lg shadow-brand-teal-500/25 text-centerInside"
              >
                Lihat Program Pendidikan
              </button>
              <button
                onClick={() => onNavigate("donations")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-[#99f6e4] bg-white/5 hover:bg-white/10 transition-all border border-brand-teal-500/30 rounded-full cursor-pointer"
              >
                Dukung Pendidikan Qurani
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SECTION 2: OVERVIEW DUA KOLOM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-[9px] font-extrabold text-[#0d7490] bg-brand-teal-50 border border-brand-teal-100 px-2.5 py-1 rounded-full uppercase tracking-widest">
                METODOLOGI TARBIYAH SUNNAH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 tracking-tight leading-snug">
                Pendidikan Qurani yang Bertahap dan Terarah
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                Setiap unit pendidikan di bawah pelindung Yayasan Nurul Quran memiliki target serta peran terpadu dalam mendampingi anak-anak asuh dan santri agar mantap mengenal ilmu syari umum, mencintai ayat-ayat Al-Qur'an, memperkuat akhlak terpuji, serta bersungguh-sungguh mengamalkannya dalam iklim masyarakat.
              </p>
              
              <div className="p-4 bg-amber-50/50 border-l-4 border-brand-gold-500 rounded-r-xl">
                <p className="text-[11px] sm:text-xs text-[#854d0e] font-bold leading-relaxed italic">
                  “Menuntut ilmu syari adalah salah satu ibadah terbesar, dan kami memastikan setiap tahapan santri dilalui dengan gembira, tulus, tanpa tekanan mental berlebih.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {overviewValues.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl border border-gray-150 bg-gray-50/20 shadow-sm flex flex-col gap-3">
                    <div className={`w-10 h-10 rounded-xl ${val.bgColor} ${val.iconColor} flex items-center justify-center shrink-0`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-brand-dark-900 uppercase tracking-tight">{val.title}</h4>
                      <p className="text-[10px] text-gray-400 font-semibold leading-relaxed mt-1">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 3: UNIT 1 DETAIL - RUMAH BELAJAR */}
      <section id="rumah-belajar" className="py-20 bg-brand-dark-50/40 border-t border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col - Graphic Representation (no human illustration) */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 islamic-grid opacity-[0.06] pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <span className="text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-brand-teal-50 text-brand-teal-600 border border-brand-teal-100">
                  Sarana Pendidikan
                </span>
                
                {/* Visual outline mockup representing a study area layout */}
                <div className="bg-gray-50 rounded-2xl border border-gray-150 p-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-white border border-gray-150 rounded-xl flex items-center justify-center text-gray-400">
                      <Library className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="h-3.5 bg-gray-200 rounded w-1/3" />
                      <div className="h-2.5 bg-gray-150 rounded w-2/3" />
                    </div>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-gray-100 text-[10px] text-gray-400 font-bold font-mono">
                    <div className="flex justify-between">
                      <span>Kapasitas Kursi Belajar</span>
                      <span className="text-brand-dark-900">30 Santri / Sesi</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gedung Fasilitas</span>
                      <span className="text-brand-dark-900">Wisma Utama Lawang</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">
                  Ruang belajar rehal modern dihiasi lemari buku rujukan tafsir dan buku pelajaran penunjang akreditasi, bebas dari bising luar, ber-AC, sejuk, dan amanah.
                </p>
              </div>
            </div>

            {/* Right Col - Details Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] font-extrabold tracking-widest text-brand-teal-600 uppercase bg-brand-teal-50 px-2.5 py-1 rounded-full border border-brand-teal-100 w-max block">
                  UNIT #1 — PENDAMPINGAN AKADEMIK
                </span>
                <h3 className="text-2xl font-extrabold text-brand-dark-900 leading-snug">
                  RUMAH BELAJAR
                </h3>
                <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Nurul Quran Learning Center (NQLC)
                </span>
                <p className="text-sm font-serif italic text-brand-gold-600 font-semibold">
                  “Belajar, Beradab, dan Bertumbuh dalam Lingkungan Islami”
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                Rumah Belajar merupakan unit pendidikan yang dirancang khusus untuk mendampingi santri dalam menguasai dasar-dasar pelajaran sekolah umum, memfasilitasi minat baca literat, melengkapi ketrampilan calistung dasar, yang keseluruhannya dipadukan secara harmonis dengan penguatan karakter adab sunnah penuntut ilmu harian.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-[#0ea5e9] tracking-wider mb-2">Fokus Utama Program:</h4>
                  <ul className="space-y-1.5 text-xs text-gray-500 font-semibold">
                    <li className="flex items-center gap-1.5">• Pendampingan PR Sekolah</li>
                    <li className="flex items-center gap-1.5">• Kursus Baca Tulis Berhitung</li>
                    <li className="flex items-center gap-1.5">• Pengokohan Adab Belajar</li>
                    <li className="flex items-center gap-1.5">• Literasi Buku Islam Terpilih</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-[#0ea5e9] tracking-wider mb-2">Target Partisipan:</h4>
                  <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                    Terbuka bagi seluruh anak usia sekolah dasar (SD/MI) di sekitar kecamatan Lawang Malang yang menginginkan pengayaan mutu adab.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleWhatsappRedirect("Assalamu’alaikum, saya ingin bertanya tentang program pendidikan Rumah Belajar Nurul Quran.")}
                  className="py-3 px-6 rounded-xl bg-brand-dark-950 hover:bg-brand-dark-900 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 text-brand-teal-400 animate-pulse" />
                  Tanya Program Rumah Belajar
                </button>
                <button
                  onClick={() => onNavigate("donations")}
                  className="py-3 px-6 rounded-xl bg-white hover:bg-gray-50 text-gray-600 text-xs font-bold transition-all border border-gray-250 text-center cursor-pointer"
                >
                  Dukung Sarana Belajar
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4: UNIT 2 DETAIL - RUMAH TAHFIZZ */}
      <section id="rumah-tahfizz" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col - Details Copy (Alternating Layout) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <span className="text-[9px] font-extrabold tracking-widest text-[#d97706] uppercase bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100 w-max block">
                  UNIT #2 — TALAQQI & HAFALAN INTENSIF
                </span>
                <h3 className="text-2xl font-extrabold text-brand-dark-900 leading-snug">
                  RUMAH TAHFIZZ
                </h3>
                <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Nurul Quran Tahfidz Center (NQTC)
                </span>
                <p className="text-sm font-serif italic text-brand-gold-600 font-semibold">
                  “Menumbuhkan Kecintaan kepada Al-Qur’an”
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                Rumah Tahfizz mendedikasikan seluruh metode akademisnya pada hafalan Al-Qur’an mutqin (matang), murojaah kelompok berkelanjutan, serta bimbingan kelas tajwid fashih. Kami berusaha menancapkan rasa bangga dan cinta membaca mushaf sejak dini di kalbu setiap santri.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#fcfdfd] p-6 rounded-2xl border border-gray-150 shadow-sm">
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-brand-teal-600 tracking-wider mb-2">Kurikulum Pokok:</h4>
                  <ul className="space-y-1.5 text-xs text-gray-500 font-semibold">
                    <li className="flex items-center gap-1.5">• Setoran Hafalan Baru (Ziyadah)</li>
                    <li className="flex items-center gap-1.5">• Pengokohan Hafalan Lama (Murojaah)</li>
                    <li className="flex items-center gap-1.5">• Kelas Tahsin Tajwid Khusus</li>
                    <li className="flex items-center gap-1.5">• Adab & Etika Penghafal Al-Qur'an</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-brand-teal-600 tracking-wider mb-2">Target Santri:</h4>
                  <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                    Dikhususkan bagi anak-anak usia sekolah dasar hingga remaja dhuafa yatim yang siap dibina berdisiplin menyetorkan hafalan di hadapan ustadzah.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleWhatsappRedirect("Assalamu’alaikum, saya ingin bertanya tentang program Tahfidz Al-Qur’an di Yayasan Nurul Quran.")}
                  className="py-3 px-6 rounded-xl bg-brand-dark-950 hover:bg-brand-dark-900 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 text-brand-teal-400 animate-pulse" />
                  Tanya Program Tahfidz
                </button>
                <button
                  onClick={() => onNavigate("donations")}
                  className="py-3 px-6 rounded-xl bg-brand-teal-50 hover:bg-brand-teal-100 text-brand-teal-700 text-xs font-bold transition-all border border-brand-teal-100/60 text-center cursor-pointer"
                >
                  Wakaf Al-Qur'an & Gizi Santri
                </button>
              </div>

            </div>

            {/* Right Col - Visual representation (No human) */}
            <div className="lg:col-span-5 bg-[#0d222b] p-8 rounded-3xl text-white relative overflow-hidden text-center order-1 lg:order-2 border border-brand-teal-900 shadow-lg">
              <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <span className="text-[9px] font-extrabold text-brand-teal-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">
                  Gedung Tahfidz Terpadu
                </span>
                
                {/* Visual study bench mockup layout outline */}
                <div className="py-8 px-4 border border-dashed border-brand-teal-800 rounded-2xl bg-black/10 flex flex-col items-center justify-center space-y-3">
                  <BookMarked className="h-10 w-10 text-brand-teal-400 animate-bounce" />
                  <span className="block text-xs font-extrabold text-white">Al-Qur'an Al-Karim Talaqqi</span>
                  <span className="block text-[10px] text-gray-400 font-medium">Mushaf cetakan Madinah berstandar rasm utsmani disiapkan lengkap gratis untuk santri asuh.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 5: UNIT 3 DETAIL - RUTABA */}
      <section id="rutaba" className="py-20 bg-brand-dark-50/40 border-t border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col - Visual representation (no humans or live characters) */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-150 shadow-sm text-center relative overflow-hidden">
              <div className="absolute inset-0 islamic-grid opacity-5 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <span className="text-[9px] font-extrabold text-amber-700 bg-amber-50 border border-amber-150 px-3 py-1 rounded-full uppercase tracking-wider">
                  Metode Belajar Anak Ceria
                </span>
                
                <div className="py-8 px-4 border border-dashed border-gray-200 bg-gray-50 rounded-2xl flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-extrabold font-mono text-xs">
                    R
                  </div>
                  <span className="block text-xs font-extrabold text-brand-dark-900 uppercase">Papan Abjad Hijaiyah Magnetik</span>
                  <span className="block text-[10px] text-gray-400 font-semibold leading-relaxed">
                    Mainan kayu edukasi pasang bongkar huruf hijaiyah warna-warni demi merangsang ketertarikan visual kognitif motorik anak.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col - Details Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] font-extrabold tracking-widest text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 w-max block">
                  UNIT #3 — KELAS BALITA EMAS
                </span>
                <h3 className="text-2xl font-extrabold text-brand-dark-900 leading-snug">
                  RUTABA
                </h3>
                <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Rumah Tahfidz Balita Nurul Quran Lawang
                </span>
                <p className="text-sm font-serif italic text-brand-gold-600 font-semibold">
                  “Pembinaan Qurani Sejak Usia Dini”
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                RUTABA merupakan program perintis inovatif yang menangani bimbingan rohani balita dan anak usia pra-sekolah secara lembut, penuh canda ceria, penuh toleransi kasih sayang, serta menanamkan adat shalat khusyu dan hafalan surah-surah pendek juz amma sejak lisan pertama berbunyi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-sky-600 tracking-wider mb-2">Metode Penyelenggaraan:</h4>
                  <ul className="space-y-1.5 text-xs text-gray-500 font-semibold">
                    <li className="flex items-center gap-1.5">• Pengenalan Hijaiyah Bertahap</li>
                    <li className="flex items-center gap-1.5">• Hafalan Surah Pendek Ceria</li>
                    <li className="flex items-center gap-1.5">• Doa Harian Santun Visual</li>
                    <li className="flex items-center gap-1.5">• Permainan Edukatif Kayu Syar'i</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-sky-600 tracking-wider mb-2">Target Anak:</h4>
                  <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                    Terbuka bagi balita usia emas pra-sekolah (3 s/d 5 tahun) dalam bimbingan asuhan ustadzah yang sabar.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleWhatsappRedirect("Assalamu’alaikum, saya ingin bertanya tentang prosedur pendaftaran kelas RUTABA Balita Yayasan Nurul Quran.")}
                  className="py-3 px-6 rounded-xl bg-brand-dark-950 hover:bg-brand-dark-900 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 text-brand-teal-400 animate-pulse" />
                  Tanya Program RUTABA
                </button>
                <button
                  onClick={() => onNavigate("donations")}
                  className="py-3 px-6 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold transition-all text-center cursor-pointer shadow-sm"
                >
                  Sponsori Pendidikan Usia Dini
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 6: STEPS OF REGISTRATION INFO */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold tracking-widest text-[#d97706] uppercase bg-amber-50 px-3 py-1 rounded-full">ALUR RESMI PROSEDUR</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Alur Informasi & Pendaftaran</h2>
          <p className="mt-2 text-xs text-gray-400 font-semibold">Ikuti 4 langkah amanah bagi kenyamanan administrasi calon santri asuh.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Hubungi Admin",
              desc: "Calon wali santri menghubungi admin yayasan secara praktis via pesan WhatsApp online.",
              icon: MessageCircle
            },
            {
              title: "Konsultasi Program",
              desc: "Admin asrama membantu menjabarkan kecocokan kurikulum terhadap kemandirian balita / santri.",
              icon: ClipboardList
            },
            {
              title: "Kunjungan / Observasi",
              desc: "Wali santri dipersilakan meninjau langsung kenyamanan sarana fisik ruang rehal belajar kami.",
              icon: Calendar
            },
            {
              title: "Pendaftaran Final",
              desc: "Penginputan data biodata, verifikasi komitmen adab wali santri, dan penempatan jadwal belajar.",
              icon: FileCheck
            }
          ].map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm relative space-y-4">
                <span className="absolute top-4 right-4 text-3xl font-extrabold font-mono text-gray-100 select-none">
                  0{idx + 1}
                </span>
                
                <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal-600 border border-brand-teal-100 flex items-center justify-center shrink-0">
                  <IconComp className="h-5 w-5" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>


      {/* SECTION 7: FAQ ACCORDION ACCENT */}
      <section className="py-24 bg-white border-t border-b border-gray-150">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-[#0e7490] uppercase bg-brand-teal-50 px-3 py-1 rounded-full">INFORMASI TAMBAHAN</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Tanya Jawab Unit Pendidikan</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-gray-150 rounded-2xl overflow-hidden transition-all bg-gray-50/50">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4.5 px-6 text-left flex justify-between items-center text-xs sm:text-sm font-extrabold text-brand-dark-900 hover:text-brand-teal-600 transition-colors select-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-brand-teal-500" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-gray-400" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="pb-5 px-6 text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed border-t border-gray-100/60 pt-3 bg-white">
                          {faq.answer}
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


      {/* SECTION 8: FINAL UNIT CTA */}
      <section className="mx-4 sm:mx-6 lg:mx-8 pt-24">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0c2633] via-brand-teal-950 to-brand-dark-950 text-white p-8 sm:p-16 rounded-3xl relative overflow-hidden text-center border border-brand-teal-900/30">
          <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block text-[10px] font-extrabold tracking-widest text-[#d97706] uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
              WAKAF SARANA AJAR
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Dukung Pendidikan Qurani di Yayasan Nurul Quran
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed max-w-xl mx-auto">
              Bantu ketersediaan asrama, buku rehal, pembersih udara, gizi bubur balita pra-sekolah, demi berjalannya roda tarbiyah islami sunnah di Lawang.
            </p>

            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate("donations")}
                className="w-full sm:w-auto py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-dark-900 bg-gradient-to-r from-brand-teal-300 to-brand-teal-400 hover:from-brand-teal-400 hover:to-brand-teal-500 rounded-full transition-all cursor-pointer shadow-lg shadow-brand-teal-400/25 flex items-center justify-center gap-1.5"
              >
                Donasi Pendidikan
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleWhatsappRedirect("Assalamu’alaikum, saya ingin dikoordinasikan lebih lanjut mengenai kelayakan beasiswa santri di Yayasan Nurul Quran.")}
                className="w-full sm:w-auto py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-transparent hover:bg-white/5 border border-white/15 rounded-full transition-all cursor-pointer"
              >
                Hubungi Admin Yayasan
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
