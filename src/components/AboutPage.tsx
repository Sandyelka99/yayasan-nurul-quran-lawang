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
  Award as StarIcon, 
  ShieldCheck, 
  FileText, 
  Video, 
  Heart, 
  Plus, 
  X, 
  ChevronRight, 
  ExternalLink,
  UsersRound,
  Sparkles,
  ArrowRight,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AboutPageProps {
  onNavigate: (viewId: string) => void;
}

interface Teacher {
  id: number;
  name: string;
  role: string;
  unit: string;
  focus: string;
  bio: string;
  initials: string;
}

interface VideoCard {
  id: number;
  title: string;
  category: string;
  duration: string;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const educationalUnits = [
    {
      title: "RUMAH BELAJAR",
      sub: "Nurul Quran Learning Center",
      desc: "Program pembelajaran intensif, pendampingan akademik kurikulum dasar, serta pembinaan karakter generasi Islami sejak dini.",
      icon: BookOpen,
      badge: "NQLC"
    },
    {
      title: "RUMAH TAHFIZZ",
      sub: "Nurul Quran Tahfidz Center",
      desc: "Program tahfidz terarah dan bimbingan murajaah berkelanjutan untuk melahirkan generasi handal penghafal Al-Qur’an Al-Karim.",
      icon: GraduationCap,
      badge: "NQTC"
    },
    {
      title: "RUTABA",
      sub: "Rumah Tahfidz Balita",
      desc: "Program bimbingan tahfidz terarah usia emas balita dengan metode pendekatan yang lembut, ceria, interaktif, sesuai tumbuh kembang anak.",
      icon: StarIcon,
      badge: "Usia Dini"
    }
  ];

  const valueCards = [
    {
      title: "Amanah",
      desc: "Menjalankan setiap program kepengurusan dengan rasa tanggung jawab tinggi di hadapan Allah dan diniatkan murni beribadah."
    },
    {
      title: "Qurani",
      desc: "Menjadikan firman mulia Al-Qur’anul Karim sebagai pondasi utama seluruh aspek pembinaan mental santri dan pengajaran ilmu."
    },
    {
      title: "Beradab",
      desc: "Mengutamakan penanaman adab luhur di atas pencapaian ilmu dalam setiap proses belajar, mengajar berkelompok, maupun bersosialisasi."
    },
    {
      title: "Transparan",
      desc: "Menyampaikan setiap laporan perkembangan belajar santri dan mutasi penyaluran dana donasi secara terbuka, akuntabel, dan rapi."
    },
    {
      title: "Bertahap",
      desc: "Mengembangkan kurikulum tarbiyah secara bertahap, realistis ke depan, disiplin serta terencana kokoh dalam jangka panjang."
    },
    {
      title: "Bermanfaat",
      desc: "Menghadirkan rangkaian program pemberdayaan pendidikan dan santunan sosial yang langsung dirasakan santri yatim dhuafa."
    }
  ];

  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Ustadzah Aisyah",
      role: "Tahfidz & Murajaah",
      unit: "Rumah Tahfizz",
      focus: "Hafalan Al-Qur'an intensif, murojaah mandiri terstruktur, pembinaan adab thalabul ilmi.",
      bio: "Berkomitmen penuh membina hafalan santri dengan setoran bertahap yang disiplin namun dipenuhi bimbingan penuh kelembutan.",
      initials: "UA"
    },
    {
      id: 2,
      name: "Ustadzah Maryam",
      role: "Pendidikan Anak Usia Dini",
      unit: "RUTABA",
      focus: "Pondasi pengenalan huruf hijaiyah, adab santun harian balita, metode bermain ceria Islami.",
      bio: "Memiliki keahlian khusus dalam membina hati dan atensi anak balita agar menyukai keindahan bunyi ayat suci Al-Qur’an.",
      initials: "UM"
    },
    {
      id: 3,
      name: "Ustadzah Khadijah",
      role: "Pembelajaran Dasar",
      unit: "Rumah Belajar",
      focus: "Sinergi bimbingan akademik sekolah dasar, calistung, pengokohan karakter akhlaqul karimah.",
      bio: "Membantu santri mengimbangi pelajaran umum sekolah dengan internalisasi kecintaan kepada adab sunnah sehari-hari.",
      initials: "UK"
    },
    {
      id: 4,
      name: "Ustadzah Hafshah",
      role: "Tahsin & Bacaan Al-Qur'an",
      unit: "Rumah Tahfizz",
      focus: "Bimbingan makharijul huruf, tajwid dasar bersertifikat, murattal tartil sejuk didengar.",
      bio: "Fokus mendalami pembenaran tajwid dasar santri agar lancar melantunkan mushaf dengan lisan yang fashih dan tartil.",
      initials: "UH"
    },
    {
      id: 5,
      name: "Ustadzah Zainab",
      role: "Adab & Pembinaan Harian",
      unit: "Rumah Belajar",
      focus: "Disiplin pembiasaan doa harian, tata cara shalat sunnah khusyu, etika bermuamalah santri.",
      bio: "Memfokuskan pengabdiannya pada pendampingan moral santri agar tangguh dan bernilaikan santun mulia dalam bermasyarakat.",
      initials: "UZ"
    },
    {
      id: 6,
      name: "Ustadzah Sumayyah",
      role: "Program Anak",
      unit: "RUTABA",
      focus: "Hafalan jus amma ringkas balita, tontonan kisah nabi teladan, kreativitas motorik islami.",
      bio: "Memandu santri cilik RUTABA agar selalu merindukan suasana masjid dan asyik berkegiatan positif bersama Al-Qur’an.",
      initials: "US"
    },
    {
      id: 7,
      name: "Ustadzah Fatimah",
      role: "Koordinasi Program",
      unit: "Yayasan",
      focus: "Penyusunan modul ajar asatidzah, rapat evaluasi santri berkala, komunikasi aktif wali murid.",
      bio: "Mengkoordinasikan setiap program akademis dan operasional agar tetap sejalan dengan pedoman amanah sunnah yayasan.",
      initials: "UF"
    }
  ];

  const videos: VideoCard[] = [
    { id: 1, title: "Kajian Keutamaan Menghafal Al-Qur'an sejak Dini", category: "Majelis Ilmu", duration: "45:20" },
    { id: 2, title: "Nasihat Penting untuk Orang Tua Santri Penghafal Quran", category: "Keluarga Sakinah", duration: "32:15" },
    { id: 3, title: "Adab Penuntut Ilmu dan Keberkahan di Majelis Sunnah", category: "Adab Islami", duration: "28:40" },
    { id: 4, title: "Pembinaan Karakter Anak Usia Dini dalam Pandangan Pesantren", category: "Tarbiyah Balita", duration: "38:10" },
    { id: 5, title: "Mengenal Metodologi Tahfidz dan Murojaah RUTABA", category: "Profil Belajar", duration: "19:50" },
    { id: 6, title: "Dakwah Sunnah dan Kepedulian Sosial Yayasan Nurul Quran", category: "Sosial Umat", duration: "12:30" }
  ];

  const handleYoutubeRedirect = () => {
    window.open("https://www.youtube.com", "_blank", "noopener,noreferrer");
  };

  const notifyUnitDevelopment = () => {
    onNavigate("home");
    setTimeout(() => {
      const el = document.getElementById("education-units-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <div className="bg-[#fbfcff] text-brand-dark-900 min-h-screen pb-24">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-[#0e2c3b] text-white py-24 sm:py-32 border-b border-brand-teal-900/40">
        <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[450px] h-[450px] bg-brand-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#d97706] bg-amber-500/15 border border-amber-500/20 rounded-full uppercase mb-6">
              <Compass className="h-4 w-4 text-brand-gold-500 animate-spin-slow" />
              PROFIL RESMI YAYASAN AMANAH SUNNAH
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              Tentang Yayasan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-300 via-brand-teal-100 to-brand-gold-300 font-serif italic">
                Nurul Quran Lawang Malang
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed font-semibold">
              Yayasan Nurul Quran hadir sebagai ikhtiar luhur di bidang pendidikan Islam sunnah, pembinaan hafalan Al-Qur’an usia dinis (RUTABA), kegiatan sosial yatim dhuafa, dan penyebaran dakwah mulia yang berlandaskan amanah, teliti, dan profesional.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={notifyUnitDevelopment}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full cursor-pointer shadow-lg shadow-brand-teal-500/25 text-center"
              >
                Lihat Unit Pendidikan
              </button>
              <button
                onClick={() => onNavigate("donasi-wakaf")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-[#99f6e4] bg-white/5 hover:bg-white/10 transition-all border border-brand-teal-500/30 rounded-full cursor-pointer"
              >
                Dukung Program Yayasan
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SECTION 2: PROFIL DETAIL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col - Identity Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-brand-teal-600 uppercase tracking-widest bg-brand-teal-50 border border-brand-teal-100 px-3 py-1 rounded-full">
                <Sparkles className="h-3.5 w-3.5" />
                Sekilas Lembaga
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 tracking-tight leading-snug">
                Ikhtiar Mulia Mencetak Generasi Istiqomah Penghafal Al-Qur'an
              </h2>
              
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold">
                Yayasan Nurul Quran Lawang Malang merupakan yayasan sosial keagamaan non-profit yang mendedikasikan seluruh potensi dakwahnya untuk membina anak usia dini (RUTABA), anak-anak sekolah dasar, hingga remaja dhuafa agar rindu dengan Al-Qur'an.
              </p>

              <blockquote className="p-4 bg-[#f8fbfa] border-l-4 border-brand-teal-500 rounded-r-xl italic text-xs text-brand-teal-950 font-semibold tracking-wide leading-relaxed">
                “Tujuan terbesar kami bukan sekedar mencetak anak menghafal ribuan baris ayat, melainkan menanamkan adab, kesabaran dalam murojaah, serta akhlak sunnah mulia dalam kehidupan bermuamalah santri.”
              </blockquote>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-semibold">
                Alhamdulillah, berkat rahmat Allah serta sokongan mulia dari para muhsinin di berbagai daerah, saat ini sarana fisik asrama tahfidz, ruang rehal belajar, dan penyaluran sembako dhuafa harian terus berkesinambungan teroganisir di asri sejuk Lawang Malang.
              </p>
            </div>

            {/* Right Col - Visual Info card */}
            <div className="lg:col-span-12 xl:col-span-5 bg-[#0b2430] p-8 rounded-3xl text-white relative overflow-hidden border border-brand-teal-900 shadow-xl">
              <div className="absolute inset-0 islamic-grid opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-6">
                
                <h3 className="text-sm font-extrabold text-brand-teal-300 uppercase tracking-widest pb-3 border-b border-brand-teal-900/80">
                  Legalitas & Entitas Resmi
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1">
                    <span className="block text-[8px] tracking-widest text-[#0ea5e9] uppercase font-bold">Label Resmi</span>
                    <span className="block font-bold text-gray-150">Yayasan Nurul Quran Lawang Malang</span>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1">
                    <span className="block text-[8px] tracking-widest text-[#0ea5e9] uppercase font-bold">Fokus Khusus</span>
                    <span className="block font-bold text-gray-150">Pendidikan Sunnah, Tahfidzul Quran, Sosial Dakwah</span>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1">
                    <span className="block text-[8px] tracking-widest text-[#0ea5e9] uppercase font-bold">Lokasi Korespondensi</span>
                    <span className="block font-bold text-gray-150 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-brand-teal-400 shrink-0" />
                      Kecamatan Lawang, Kabupaten Malang, Jawa Timur
                    </span>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1">
                    <span className="block text-[8px] tracking-widest text-[#0ea5e9] uppercase font-bold">Unit Yang Menaungi</span>
                    <span className="block font-bold text-gray-150">NQLC (Rumah Belajar), NQTC (Rumah Tahfizz), RUTABA (Balita)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] text-[#cbd5e1] font-medium leading-relaxed block">
                    *Seluruh pengelolaan dana masyarakat diaudit secara tahunan oleh akuntan independen demi menjamin transparansi 100%.
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 3: VISI MISI */}
      <section className="py-24 bg-brand-dark-50/50 border-t border-b border-gray-100 relative">
        <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Vision Container Widget */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-150 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-extrabold tracking-widest text-[#d97706] uppercase bg-amber-50 px-2.5 py-1 rounded-full">VISI LEMBAGA</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 tracking-tight leading-snug">Mengharap Ridha Ilahi</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed pt-2 border-t border-gray-100">
                  “Menjadi lembaga pendidikan Islam yang terpercaya dan amanah dalam membina generasi Qurani yang berakhlak mulia, kokoh adab sunnahnya, serta berdaya manfaat tinggi bagi umat Islam.”
                </p>
              </div>

              <div className="pt-8 flex items-center gap-2.5 text-brand-teal-600 text-[10px] font-extrabold uppercase mt-6">
                <span>Diperbaharui Dewan Syariah 2026</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>

            {/* Mision Lists */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[9px] font-extrabold tracking-widest text-brand-teal-600 uppercase bg-brand-teal-50 px-2.5 py-1 rounded-full">MISI STRATEGIS</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 tracking-tight leading-snug">5 Pilar Misi Yayasan</h3>

              <div className="space-y-4">
                {[
                  "Menyelenggarakan tata kelola tarbiyah Islam berbasis kurikulum Al-Qur’an dan penegakan adab sehari-hari.",
                  "Membimbing hati anak-anak agar cinta murajaah, mahir tajwid dasar makhroj, serta ikhlas mengamalkan kandungan ayat.",
                  "Mengembangkan sarana prasarana penunjang asrama tahfidz, wisma ustadz, dan bahan ajar secara berkala.",
                  "Memelihara sistem keuangan yayasan yang transparan, amanah, akuntabel, serta bebas dari potongan tidak jelas.",
                  "Mendorong andil aktif masyarakat dalam mensponsori kelangsungan beasiswa belajar para penghafal yatim dhuafa."
                ].map((misi, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-6 h-6 rounded-lg bg-brand-teal-50 text-brand-teal-600 border border-brand-teal-100 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 leading-normal font-semibold">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 4: UNIT YAYASAN */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-500 uppercase bg-brand-teal-100 px-3 py-1 rounded-full">STRUKTUR PENDIDIKAN</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Kategori Unit Pembinaan</h2>
          <p className="mt-2 text-xs text-gray-400 font-semibold">Tiga jenjang unit andalan yang dinaungi langsung kepengurusan yayasan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationalUnits.map((u, i) => {
            const IconComp = u.icon;
            return (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-brand-teal-50 text-brand-teal-600 border border-brand-teal-100 flex items-center justify-center shrink-0">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-lg bg-gray-50 text-gray-400 border border-gray-100">
                      {u.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="block text-[8px] font-bold tracking-widest text-[#0e7490] uppercase">Unit #{i + 1}</span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 uppercase tracking-tight">{u.title}</h4>
                    <span className="block text-[11px] text-gray-400 font-bold">{u.sub}</span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-gray-400 font-semibold leading-relaxed pt-2 border-t border-gray-50">
                    {u.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-50 mt-6 md:mt-8">
                  <button
                    onClick={() => {
                      onNavigate("home");
                      setTimeout(() => {
                        const el = document.getElementById("education-units-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }, 200);
                    }}
                    className="w-full py-2.5 text-center text-xs font-bold text-gray-500 hover:text-brand-teal-600 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer border border-gray-150/80"
                  >
                    Pelajari Layanan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* SECTION 5: NILAI YAYASAN */}
      <section className="py-24 bg-[#0a202a] text-white relative overflow-hidden border-t border-b border-brand-teal-900/60">
        <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
        <div className="absolute -top-1/4 -right-1/4 w-[450px] h-[450px] bg-brand-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-300 uppercase bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">FOUNDATIONAL VALUES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight font-serif italic">Nilai & Karakter Yayasan</h2>
            <p className="mt-2 text-xs text-gray-300 font-semibold">Urat nadi perjuangan dakwah kami berlandaskan prinsip moral syari.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueCards.map((val, idx) => (
              <div key={idx} className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-teal-500/10 text-brand-teal-400 border border-brand-teal-500/20 flex items-center justify-center font-bold font-mono text-sm shrink-0">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">{val.title}</h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-semibold leading-relaxed mt-1.5">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 6: PROFIL ASATIDZAH */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-600 uppercase bg-brand-teal-100 px-3 py-1 rounded-full flex items-center gap-1.5 w-max mx-auto">
            <UsersRound className="h-4 w-4" />
            STAFF AJAR MUTAKHIR
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Profil Ustadzat Nurul Quran</h2>
          <p className="mt-2 text-xs text-gray-400 font-semibold">Tujuh asatidzah berkomitmen tinggi yang mengawal kualitas tarbiyah adab.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachers.map((t) => (
            <div 
              key={t.id} 
              onClick={() => setSelectedTeacher(t)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-150 hover:border-brand-teal-300 hover:shadow-md transition-all flex flex-col justify-between p-6 cursor-pointer group"
            >
              <div className="space-y-4">
                
                {/* Clean Initial-Based Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal-50 group-hover:bg-brand-teal-100 transition-colors border border-brand-teal-100/60 flex items-center justify-center text-brand-teal-700 font-bold tracking-tight text-sm shrink-0 font-mono">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 leading-tight group-hover:text-brand-teal-700 transition-colors">
                      {t.name}
                    </h4>
                    <span className="text-[10px] font-bold text-gray-400 block mt-0.5">{t.role}</span>
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="inline-block text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {t.unit}
                  </span>
                  <p className="text-[11px] text-gray-500 font-semibold leading-relaxed pt-2">
                    <span className="font-extrabold text-brand-dark-900 block text-[9px] uppercase tracking-wider mb-0.5">Fokus Pembinaan:</span>
                    {t.focus}
                  </p>
                </div>

              </div>

              <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-4">
                <span className="text-[9px] font-bold text-gray-400 tracking-wide uppercase">Audit Ustadz OK</span>
                <span className="text-[10px] font-bold text-brand-teal-600 group-hover:underline transition-all flex items-center gap-0.5">
                  Lihat Profil
                  <ChevronRight className="h-3 w-3" />
                </span>
              </div>

            </div>
          ))}
        </div>
      </section>


      {/* SECTION 7: KAJIAN YOUTUBE */}
      <section className="py-24 bg-brand-dark-50/40 border-t border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] font-extrabold tracking-widest text-[#d97706] uppercase bg-amber-50 px-3 py-1 rounded-full flex items-center gap-1.5 w-max">
                <Video className="h-4 w-4" />
                DOKUMENTASI MAJELIS KAJIAN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Siaran Kajian & Dakwah Sunnah</h2>
              <p className="mt-2 text-xs text-gray-400 font-semibold max-w-xl">
                Arsip rekaman petuah tarbiyah islam, adab berpengetahuan, dan murojaah santri yang diunggah ke kanal YouTube resmi.
              </p>
            </div>
            <button
              onClick={handleYoutubeRedirect}
              className="py-2.5 px-6 rounded-xl bg-[#c2410c] hover:bg-[#a83a09] text-white text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
            >
              Kunjungi Kanal YouTube
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Embed Video Utama (Iframe Rick Astley Placeholder) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-brand-dark-950 shadow-md relative group border border-gray-250">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/l_yI2S26b5U" 
                  title="Kajian Pendidikan Qurani dan Adab Anak"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="p-1">
                <span className="text-[10px] uppercase font-extrabold text-brand-teal-600 block">Kajian Utama Terpilih</span>
                <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 mt-1">
                  Kajian Pendidikan Qurani dan Adab Anak Sejak Usia Emas
                </h3>
                <p className="text-[11px] text-gray-400 font-semibold leading-relaxed mt-1">
                  Penyampaian asatidzah seputar pentingnya menjaga lisan di depan balita, membiasakan tilawah maghrib, serta menanamkan rasa takut kepada maksiat sejak usia belia.
                </p>
              </div>
            </div>

            {/* List Mini Videos */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-extrabold text-brand-dark-400 block uppercase tracking-wider mb-2">Video Kajian Lainnya</span>
              
              <div className="space-y-3 max-h-[460px] overflow-y-auto scrollbar-thin pr-1">
                {videos.map((v) => (
                  <div 
                    key={v.id} 
                    onClick={handleYoutubeRedirect}
                    className="p-3 bg-white rounded-xl border border-gray-150 hover:border-brand-teal-300 transition-all flex gap-3 cursor-pointer group"
                  >
                    {/* Small visual mock thumbnail - absolute Islamic geometry pattern */}
                    <div className="w-20 h-16 rounded-lg bg-brand-dark-950 relative overflow-hidden flex items-center justify-center border border-white/5 shrink-0">
                      <div className="absolute inset-0 islamic-grid opacity-25" />
                      <Video className="h-4 w-4 text-brand-teal-400 animate-pulse relative z-10" />
                    </div>

                    <div className="space-y-1.5 flex flex-col justify-center">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] font-extrabold text-brand-teal-600 uppercase bg-brand-teal-50 px-1.5 py-0.5 rounded">
                          {v.category}
                        </span>
                        <span className="text-[8px] font-bold text-gray-400 font-mono">
                          {v.duration}
                        </span>
                      </div>
                      <h4 className="text-[11px] font-extrabold text-brand-dark-900 leading-tight group-hover:text-brand-teal-600 transition-colors">
                        {v.title}
                      </h4>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 8: TEACHER MODAL COMPONENT */}
      <AnimatePresence>
        {selectedTeacher && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop click out */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTeacher(null)}
              className="fixed inset-0 bg-brand-dark-950/85 backdrop-blur-md cursor-zoom-out"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-6 sm:p-8 space-y-6 text-brand-dark-900"
            >
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-teal-50 border border-brand-teal-100 flex items-center justify-center text-brand-teal-800 font-extrabold text-base font-mono">
                    {selectedTeacher.initials}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-brand-dark-900 leading-tight">
                      {selectedTeacher.name}
                    </h3>
                    <span className="text-xs font-bold text-brand-teal-600 block mt-0.5">{selectedTeacher.role}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedTeacher(null)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-950 transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-50 text-xs sm:text-sm">
                
                <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                  <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">Penugasan Unit</span>
                  <span className="block font-bold text-brand-dark-900 uppercase text-[10px] tracking-wide">
                    {selectedTeacher.unit}
                  </span>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                  <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">Fokus Pengajaran</span>
                  <span className="block font-semibold text-gray-500 text-[11px] leading-relaxed">
                    {selectedTeacher.focus}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">Biografi Singkat</span>
                  <p className="font-semibold text-gray-500 leading-relaxed text-[11px] pt-1">
                    {selectedTeacher.bio}
                  </p>
                </div>

              </div>

              <div className="pt-6 border-t border-gray-50 flex gap-3">
                <button
                  onClick={() => {
                    alert("Fitur orang tua asuh akan aktif setelah integrasi backend.");
                    setSelectedTeacher(null);
                    onNavigate("contact");
                  }}
                  className="flex-1 py-2.5 text-center text-xs font-bold text-white bg-brand-dark-950 hover:bg-brand-dark-900 rounded-xl transition-all cursor-pointer"
                >
                  Konsultasi Program Wali Santri
                </button>
                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="py-2.5 px-4 text-center text-xs font-bold text-gray-400 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all cursor-pointer"
                >
                  Tutup
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* SECTION 9: FINAL CTA ABOUT */}
      <section className="mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0c2633] via-brand-teal-950 to-brand-dark-950 text-white p-8 sm:p-16 rounded-3xl relative overflow-hidden text-center border border-brand-teal-900/30">
          <div className="absolute inset-0 islamic-grid opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block text-[10px] font-extrabold tracking-widest text-[#d97706] uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
              WAKAF & SEDEKAH GENERASI QURANI
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Bersama Mendukung Pendidikan Qurani
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed max-w-xl mx-auto">
              Setiap partisipasi santunan Anda diletakkan sepenuhnya pada pembiayaan beasiswa santri dhuafa yatim, asrama, dan ketersediaan gizi tahfidz.
            </p>

            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate("donasi-wakaf")}
                className="w-full sm:w-auto py-3 px-8 text-xs sm:text-sm font-extrabold text-brand-dark-900 bg-gradient-to-r from-brand-teal-300 to-brand-teal-400 hover:from-brand-teal-400 hover:to-brand-teal-500 rounded-full transition-all cursor-pointer shadow-lg shadow-brand-teal-400/25 flex items-center justify-center gap-1.5"
              >
                Donasi Sekarang
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate("foster")}
                className="w-full sm:w-auto py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-transparent hover:bg-white/5 border border-white/15 rounded-full transition-all cursor-pointer"
              >
                Jadi Orang Tua Asuh
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
