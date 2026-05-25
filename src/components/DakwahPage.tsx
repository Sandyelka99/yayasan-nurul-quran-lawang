/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Clock, 
  ArrowRight, 
  CornerDownRight, 
  Play, 
  CheckCircle2, 
  HelpingHand, 
  FileDown, 
  HelpCircle, 
  X, 
  Calendar, 
  Image, 
  ChevronDown, 
  Smartphone 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DakwahPageProps {
  onNavigate: (viewId: string) => void;
  activeSubSection?: string;
}

interface Article {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  readTime: string;
}

interface Lecture {
  id: string;
  title: string;
  duration: string;
  speaker: string;
  videoUrl: string;
  description: string;
}

interface ShortClip {
  id: string;
  title: string;
  speaker: string;
  views: string;
  duration: string;
}

interface Poster {
  id: string;
  title: string;
  source: string;
  quote: string;
  colorClass: string;
}

export default function DakwahPage({ onNavigate, activeSubSection }: DakwahPageProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string>("https://www.youtube.com/embed/dQw4w9WgXcQ");
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>("Keutamaan Belajar Al-Qur’an");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Smooth scroll logic on URL anchor or dropdown section change
  useEffect(() => {
    if (activeSubSection) {
      const scrollTarget = activeSubSection;
      const element = document.getElementById(scrollTarget);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [activeSubSection]);

  const pillars = [
    {
      icon: BookOpen,
      title: "Faedah Ilmu",
      desc: "Artikel harian ringkas, nasihat parenting Islami, dan mutiara hadits shahih bimbingan asatidzah.",
      color: "from-brand-teal-500 to-brand-teal-600"
    },
    {
      icon: Video,
      title: "Kajian & Pembelajaran",
      desc: "Dokumentasi rekaman kajian fiqih, tadabbur Al-Qur'an, dan bimbingan membaca Al-Qur'an (RUTABA) bagi balita.",
      color: "from-sky-500 to-sky-600"
    },
    {
      icon: FileText,
      title: "Materi Cetak & Digital",
      desc: "Distribusi buklet adab anak, poster hadits syar'i non-makhluk hidup, serta ringkasan doa dzikir harian gratis.",
      color: "from-amber-500 to-amber-600"
    }
  ];

  const articles: Article[] = [
    {
      id: "cinta-quran",
      category: "Pendidikan Anak",
      title: "Menumbuhkan Cinta Al-Qur’an Sejak Dini",
      summary: "Langkah-langkah praktis mengenalkan suara tilawah kepada balita dengan penuh kelembutan tanpa paksaan.",
      readTime: "3 Min",
      content: "Menanamkan rasa cinta kepada Al-Qur'an pada anak usia dini bukanlah dengan menuntut target hafalan yang kaku, melainkan dengan memulainya dari keteladan orang tua di rumah. Biasakan memperdengarkan bacaan Al-Qur'an (murottal) dengan suara yang lirih dan berirama lembut di sela-sela waktu bermain dan istirahat balita. Hindari memarahi atau menekan fisik anak kala belajar makhraj. Buatlah suasana menghafal layaknya berkisah gembira (storytelling). Sparing waktu 10-15 menit bercengkerama bersama Al-Qur'an pasca shalat maghrib merupakan fondasi luhur bagi jiwa suci mereka."
    },
    {
      id: "adab-ilmu",
      category: "Tazkiyatun Nufus",
      title: "Adab Sebelum Ilmu",
      summary: "Mengapa pembiasaan sopan santun dan penghormatan kepada orang tua mendahului setoran hafalan Al-Qur'an.",
      readTime: "4 Min",
      content: "Para ulama salaf terdahulu senantiasa menempuh bimbingan adab selama berpuluh-puluh tahun sebelum akhirnya duduk mempelajari cabang ilmu syariat. Adab menyucikan wadah hati penuntut ilmu, sehingga ilmu yang masuk mendatangkan keberkahan, ketundukan jiwa, dan rasa takut yang tulus kepada Allah subhanahu wa ta'ala. Melatih lisan anak untuk berkata santun, merendahkan suara di hadapan asatidzah dan orang tua, serta tertib merespons perintah kebaikan adalah langkah hulu yang mendahului kelancaran hafalan lembar demi lembar."
    },
    {
      id: "murajaah-rumah",
      category: "Tips Parenting",
      title: "Membantu Anak Murajaah di Rumah",
      summary: "Metode menyenangkan bagi wali santri untuk menyimak hafalan tanpa memicu kejenuhan pada anak.",
      readTime: "5 Min",
      content: "Menyimak murajaah (mengulang hafalan) santri balita di rumah memerlukan seni tersendiri. Agar tidak membosankan, gunakan metode 'sambung ayat' secara rileks sembari berjalan-jalan sore atau sebelum tidur. Hindari koreksi yang kasar; bila anak keliru, cukup bacakan potongan kata yang benar dengan nada lembut, lalu puji usaha kerasnya. Konsistensi harian (istiqomah) jauh lebih utama daripada kuantitas setoran yang dipaksakan. Keberadaan ayah bundanya yang tulus mendengarkan merupakan dukungan psikologis terbesar bagi pembentukan generasi Qurani."
    },
    {
      id: "jaga-hafalan",
      category: "Tahfidz Al-Qur'an",
      title: "Menjaga Hafalan dengan Murajaah",
      summary: "Pentingnya mengulang hafalan lama secara teratur demi mendapatkan kualitas hafalan yang kokoh dan mutqin.",
      readTime: "3 Min",
      content: "Seringkali santri atau dhuafa penghafal Al-Qur'an terlalu bersemangat mengejar setoran hafalan baru sehingga melalaikan hafalan lama yang telah disisihkan. Al-Qur'an bersumber dari riwayat shahih nabi shallallahu 'alaihi wa sallam sangat cepat terlepas dari ingatan melebihi unta yang lepas dari ikatannya. Solusinya, alokasikan porsi waktu minimal 70% untuk mengulang (murajaah) ayat lama secara melodi tartil yang konsisten, barulah sisa 30% difokuskan menambah lembaran hafalan baru."
    },
    {
      id: "doa-harian",
      category: "Adab Harian",
      title: "Membiasakan Doa Harian pada Anak",
      summary: "Panduan asatidzah mengajarkan doa makan, tidur, dan berkendara lewat teladan aktivitas sehari-hari.",
      readTime: "2 Min",
      content: "Doa adalah senjata sekaligus ibadah agung seorang muslim. Membiasakan anak mengucapkan basmalah di permulaan bersantap, kalimat hamdalah kala tersadar dari tidur, hingga bacaan safar (perjalanan) merupakan ikhtiar nyata membungkus seluruh desah hidup generasi penerus dengan rasa ketergantungan yang mutlak kepada Allah Ta'ala. Terapkan visualisasi non-makhluk hidup seperti kartu hafalan doa berwarna krem-teal lembut di dinding kamar makan atau asrama guna memicu kemudahan ingatan visual."
    },
    {
      id: "sedikit-rutin",
      category: "Motivasi Islam",
      title: "Sedikit Tapi Rutin (Dawaam)",
      summary: "Membentuk kebiasaan membaca Al-Qur'an 1 lembar sehari secara istiqomah lebih dicintai Allah dibanding sekali banyak.",
      readTime: "3 Min",
      content: "Amalan yang paling dicintai oleh Allah adalah amalan yang kontinu (terus-menerus), meskipun jumlahnya sedikit secara kalkulasi manusia. Daripada melahap satu juz penuh namun hanya dikerjakan sekali sebulan yang menyisakan kekosongan hati, lebih utama melantunkan setengah halaman setiap selepas shalat fardhu secara patuh harian. Kebiasaan kecil yang dibangun dengan disiplin tinggi merupakan kunci utama perubahan akhlak luhur serta mengikat berkah waktu dalam hidup harian keluarga muslim."
    }
  ];

  const lectures: Lecture[] = [
    {
      id: "kajian-1",
      title: "Keutamaan Belajar Al-Qur’an",
      duration: "45 Menit",
      speaker: "Ustadz Abu Dzarr, Lc.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Menjelaskan sabda Rasulullah shallallahu 'alaihi wasallam bahwa sebaik-baik dari kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya."
    },
    {
      id: "kajian-2",
      title: "Adab Penuntut Ilmu Syar'i",
      duration: "38 Menit",
      speaker: "Ustadz Abu Dzarr, Lc.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?start=60",
      description: "Bagaimana meluruskan niat murni mencari ridha Allah saja, menghindari riya', kesombongan lisan, serta mempraktikkan ilmu dalam amal nyata."
    },
    {
      id: "kajian-3",
      title: "Mendidik Anak dengan Sunnah & Kelembutan",
      duration: "52 Menit",
      speaker: "Pemateri Syariah Yayasan",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?start=120",
      description: "Kaidah Nabawi dalam mengarahkan tingkah laku anak usia dini, memperkuat kedekatan batin, serta membiasakan keteladanan yang shaleh sehari-hari."
    },
    {
      id: "kajian-4",
      title: "Pentingnya Menjaga Murajaah Balita",
      duration: "41 Menit",
      speaker: "Tim Kurikulum Tahfidz Center",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?start=180",
      description: "Ulasan teknik-teknik mengulang hafalan (murajaah) yang ramah anak, pembagian waktu setor harian, dan cara menjaga murajaah gembira."
    }
  ];

  const shortClips: ShortClip[] = [
    {
      id: "clip-1",
      title: "Pencegah Penyakit Riya' pada Hati",
      speaker: "Ustadz Abu Dzarr, Lc.",
      views: "1.2k Kali Ditonton",
      duration: "02:15"
    },
    {
      id: "clip-2",
      title: "Adab Anak Menghormati Guru Ngaji",
      speaker: "Ustadz Abu Dzarr, Lc.",
      views: "940 Kali Ditonton",
      duration: "01:50"
    },
    {
      id: "clip-3",
      title: "Metode Isyarat Anak RUTABA Lawang",
      speaker: "Ustadzah Binaan",
      views: "2.4k Kali Ditonton",
      duration: "03:10"
    },
    {
      id: "clip-4",
      title: "Keberkahan Senyum Guru pada Santri",
      speaker: "Tim Litbang Pendidikan",
      views: "850 Kali Ditonton",
      duration: "01:25"
    }
  ];

  const jadwalKajian = [
    {
      id: "jadwal-1",
      day: "Sabtu Pekan ke-2 & ke-4",
      time: "16.00 WIB - Selesai",
      title: "Kajian Rutin Kitab Fiqih Sunnah Lil-Balat",
      speaker: "Ustadz Abu Dzarr, Lc.",
      location: "Masjid Utama Al-Qur'an Lawang",
      audience: "Ikhwan & Akhwat",
      status: "Live & Offline"
    },
    {
      id: "jadwal-2",
      day: "Setiap Ahad Pagi",
      time: "08.30 WIB - 10.00 WIB",
      title: "Tadabbur Juz Amma & Tahsin Metode Isyarat",
      speaker: "Tim Asatidzah Yayasan",
      location: "Aula Tahfizz Nurul Qur'an",
      audience: "Wali Santri & Umum (Akhwat)",
      status: "Offline Terbatas"
    },
    {
      id: "jadwal-3",
      day: "Selasa Malam (Keluarga)",
      time: "19.30 WIB - Selesai",
      title: "Keluarga Sakinah Sesuai Tuntunan Nabi",
      speaker: "Ustadz Abu Dzarr, Lc.",
      location: "Kajians Online (Zoom & YouTube)",
      audience: "Keluarga Muslim",
      status: "Live Online Only"
    }
  ];

  const posters: Poster[] = [
    {
      id: "poster-1",
      title: "Nasihat Dawaam",
      source: "HR. Bukhari no. 6465",
      quote: "Amalan yang paling dicintai oleh Allah adalah amalan yang kontinu walaupun sedikit.",
      colorClass: "bg-gradient-to-br from-teal-500/10 to-brand-teal-500/2"
    },
    {
      id: "poster-2",
      title: "Penuntut Ilmu",
      source: "HR. Muslim no. 2699",
      quote: "Siapa yang menempuh jalan untuk mencari ilmu, Allah mudahkan baginya jalan menuju surga.",
      colorClass: "bg-gradient-to-br from-amber-500/10 to-brand-gold-500/2"
    },
    {
      id: "poster-3",
      title: "Perkataan Baik",
      source: "HR. Bukhari & Muslim",
      quote: "Siapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam.",
      colorClass: "bg-gradient-to-br from-sky-500/10 to-sky-600/2"
    }
  ];

  const faqs = [
    {
      q: "Apakah seluruh konten dan materi Dakwah Digital di sini berbayar?",
      a: "Sama sekali tidak. Alhamdulillah, seluruh materi bimbingan syariat, video kajian rutin, e-book adab harian, serta poster hadits shahih di website Yayasan Nurul Qur'an Lawang disediakan secara gratis demi menyebarkan syiar sunnah dan kelurusan aqidah tanpa tujuan komersial hulu."
    },
    {
      q: "Bagaimana aturan menyebarkan atau mengunduh ulang materi poster dakwah di atas?",
      a: "Setiap muslim diperkenankan (dan dianjurkan) menyebarluaskan kembali poster, buklet, maupun tautan video kajian kami selama tidak diniatkan untuk meraup profit secara komersial, serta tidak merekayasa/mengubah isi materi syariat yang telah disahkan oleh komite penasihat syariah yayasan."
    },
    {
      q: "Bagaimana cara mendukung operasional pengadaan perangkat tim Dakwah Digital?",
      a: "Anda dapat mendukung secara finansial dengan menyisihkan infaq berkala melalui menu utama Donasi & Wakaf program khusus 'Dukung Dakwah Digital' (infaq operasional). Kontribusi Anda sangat membantu kami membiayai sewa server video, kebutuhan audio visual kajian, bensin asatidzah pondok dhuafa, serta pencetakan buku saku."
    },
    {
      q: "Apakah yayasan menyelenggarakan grup bimbingan berkala atau WhatsApp update?",
      a: "Ya! Melalui form pendaftaran 'Update Khabar Syiar' di halaman ini, Anda dapat mendaftarkan email atau nomor WhatsApp untuk dikirimi jadwal kajian akhir pekan, ringkasan do'a syirik & sunnah, serta video tutorial tahsin isyarat terpopuler secara gratis."
    }
  ];

  const handleSelectLecture = (lec: Lecture) => {
    setActiveVideoUrl(lec.videoUrl);
    setActiveVideoTitle(lec.title);
    const playerEl = document.getElementById("master-video-player");
    if (playerEl) {
      playerEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-[#fbfcff] min-h-screen text-brand-dark-900 font-sans" id="hero-dakwah">
      
      {/* SECTION 1: HERO DAKWAH */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-[#faf7f2]/50 border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#0d9488 2px, transparent 2px)", backgroundSize: "32px 32px" }} />
        <div className="absolute bottom-[-150px] right-[-150px] w-96 h-96 rounded-full bg-brand-teal-500/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider text-brand-teal-600 bg-brand-teal-50 uppercase border border-brand-teal-100">
              <BookOpen className="h-3 w-3" /> MEDIA PUBLIKASI RESMI YAYASAN
            </span>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark-900 tracking-tight leading-[1.12]">
              Menyebarkan Manfaat <br />
              <span className="text-brand-teal-600 font-sans">Lewat Dakwah Digital Syar'i</span>
            </h1>
            
            <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed max-w-2xl">
              Yayasan Nurul Qur'an Lawang Malang menghadirkan pangkalan materi edukasi syar'i secara gratis. Temukan artikel mutiara ilmu, video rekaman kajian asatidzah, buku panduan adab, jadwal kajian offline/online, serta poster hadits shahih untuk kemandirian umat Islam.
            </p>
            
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#artikel-islami"
                className="py-3 px-6 rounded-xl bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-bold text-xs text-center transition-all shadow-md shadow-brand-teal-500/15"
              >
                Baca Artikel Faedah
              </a>
              <a
                href="#kajian-online"
                className="py-3 px-6 rounded-xl bg-white border border-gray-200 hover:border-brand-teal-500 hover:text-brand-teal-500 text-gray-700 font-bold text-xs text-center transition-all shadow-sm"
              >
                Kanal Kajian Online
              </a>
              <button
                onClick={() => onNavigate("donations/dukung-dakwah-digital")}
                className="py-3 px-6 rounded-xl bg-brand-dark-900 hover:bg-brand-dark-950 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Dukung Dakwah Digital
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PILAR UTAMA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[9px] font-extrabold text-brand-teal-600 tracking-widest block uppercase">METODE SYIAR KAMI</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 mt-2 tracking-tight">
            Pilar Pembinaan Dakwah Digital
          </h2>
          <div className="h-0.5 w-12 bg-brand-teal-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-150 shadow-sm relative group hover:shadow-md hover:border-brand-teal-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${p.color} text-white flex items-center justify-center shadow-inner`}>
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-brand-dark-900 uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-1.5 text-[10px] font-extrabold text-brand-teal-600 uppercase tracking-wider">
                  <span>Materi Pembinaan</span>
                  <CornerDownRight className="h-3 w-3" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: ARTIKEL ISLAMI */}
      <section id="artikel-islami" className="py-20 bg-brand-dark-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-600 uppercase block">KUMPULAN NASIHAT TEMATIS</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 tracking-tight">Artikel Islami &amp; Faedah Ilmu</h2>
            </div>
            <div className="text-xs text-gray-400 font-semibold max-w-sm sm:text-right">
              Ditelaah langsung berdasarkan dalil Al-Qur'an dan mutiara hadits shahih bimbingan asatidzah pondok.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-150 p-6 flex flex-col justify-between hover:border-brand-teal-300 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-450">
                      <Clock className="h-3 w-3 text-brand-teal-500" /> {item.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-brand-dark-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-5 flex items-center justify-between">
                  <span className="text-[9px] text-gray-400 font-extrabold uppercase">ASATIDZAH BINAAN</span>
                  <button
                    onClick={() => setSelectedArticle(item)}
                    id={`btn-read-article-${item.id}`}
                    className="py-1.5 px-3 bg-brand-teal-50 hover:bg-brand-teal-100 text-brand-teal-600 text-[10px] font-extrabold rounded-lg transition-colors cursor-pointer"
                  >
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: KAJIAN ONLINE HUB */}
      <section id="kajian-online" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-[10px] font-extrabold tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full uppercase border border-amber-250/20">
            KANAL REKAMAN SYIAR WAL-KHABAR
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-brand-dark-900 tracking-tight">Kajian Online &amp; Video Hub</h2>
          <p className="text-xs sm:text-sm text-gray-400 font-semibold leading-relaxed">
            Daftar rekaman bimbingan tajwid, tadabbur hafalan balita, dan kultum fiqih sunnah komprehensif yang diampu oleh asatidzah berkompeten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Selected Player (65%) */}
          <div id="master-video-player" className="lg:col-span-8 space-y-4">
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-brand-dark-900 shadow-md relative group border border-gray-200">
              <iframe 
                className="w-full h-full"
                src={activeVideoUrl} 
                title={activeVideoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <div className="p-5 bg-white border border-gray-150 rounded-2xl space-y-4">
              <div>
                <span className="text-[9px] font-extrabold text-brand-teal-500 uppercase tracking-widest block">SEDANG DIPUTAR</span>
                <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 mt-1">{activeVideoTitle}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 border-t border-gray-100 text-[10px] font-semibold text-gray-500">
                  <span>Pembicara: <strong className="text-brand-dark-900">Asatidzah Yayasan Nurul Qur'an</strong></span>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <span>Kategori: <strong className="text-brand-dark-900">Edukasi Adab, Fiqih &amp; Tahfizz</strong></span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
                <button 
                  onClick={() => alert("Kajian ini sedang ditayangkan melalui streaming legal.")} 
                  className="py-1.5 px-3 bg-brand-teal-50 hover:bg-brand-teal-100 text-brand-teal-600 text-[10px] font-extrabold rounded-md flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Play className="h-3 w-3 fill-current" />
                  Mulai Streaming
                </button>
                <button 
                  onClick={() => alert("Pengingat jadwal kajian berhasil ditambahkan ke kalender perangkat.")}
                  className="py-1.5 px-3 bg-gray-50 hover:bg-gray-100 text-gray-600 text-[10px] font-extrabold rounded-md flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Ingatkan Saya
                </button>
              </div>
            </div>
          </div>

          {/* Video List Playlist (35%) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold text-[#0d2230] uppercase tracking-wider block px-1">Daftar Rekaman Kajian</h4>
            <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
              {lectures.map((lec) => {
                const isActive = activeVideoTitle === lec.title;
                return (
                  <button
                    key={lec.id}
                    onClick={() => handleSelectLecture(lec)}
                    id={`btn-select-lecture-${lec.id}`}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                      isActive 
                        ? "bg-brand-teal-50 border-brand-teal-200 text-brand-teal-900" 
                        : "bg-white border-gray-150 hover:border-brand-teal-250 hover:bg-gray-50"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-brand-teal-500 text-white" : "bg-gray-100 text-gray-500"}`}>
                      <Play className="h-4 w-4 shrink-0 fill-current" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="block text-[11px] font-extrabold truncate">{lec.title}</span>
                      <span className="block text-[9px] text-gray-400 font-bold uppercase">{lec.speaker} • {lec.duration}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 bg-amber-50/60 border border-amber-250/30 rounded-xl text-[10px] leading-relaxed text-amber-800 font-semibold">
              💡 <em>Insya Allah:</em> Semua rekaman publikasi di atas bebas diunduh &amp; didistribusikan secara cuma-cuma demi dakwah tauhid yang seluas-luasnya.
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: VIDEO DAKWAH SHORT CLIPS */}
      <section id="video-dakwah" className="py-20 bg-brand-dark-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-600 bg-brand-teal-50 px-3 py-1 rounded-full uppercase">
              FAEDAH ILMU RINGKAS (CLIPS)
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 tracking-tight">Koleksi Video Dakwah Singkat</h2>
            <p className="text-xs text-gray-400 font-semibold leading-relaxed">
              Klip edukasi berdurasi 1-3 menit berisi potongan ringkas nasihat sunnah, adab harian anak, serta motivasi istiqomah menghafal Al-Qur’an di rumah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shortClips.map((clip) => (
              <div 
                key={clip.id} 
                className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:border-brand-teal-300 hover:shadow transition-all group duration-200"
              >
                {/* Horizontal design mock represent video thumbnails (conforming with sunnah, no realistic human faces) */}
                <div className="relative aspect-[3/4] w-full bg-gradient-to-tr from-[#132c33] to-[#0a151a] flex flex-col justify-end p-5 overflow-hidden">
                  {/* Glowing non-living geometric design element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-teal-500/10 flex items-center justify-center border border-brand-teal-500/30 group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 text-brand-teal-400 fill-current ml-0.5" />
                  </div>
                  <span className="absolute top-3 right-3 text-[9px] font-bold text-gray-200 bg-black/60 px-2 py-0.5 rounded-md">
                    {clip.duration}
                  </span>
                  
                  {/* Little bottom content overlay */}
                  <div className="relative z-10 space-y-1 text-left">
                    <span className="text-[8px] font-extrabold text-brand-teal-400 uppercase tracking-widest block">{clip.speaker}</span>
                    <h4 className="text-xs font-extrabold text-white leading-snug tracking-tight">
                      {clip.title}
                    </h4>
                    <span className="block text-[9px] text-gray-400 font-bold">{clip.views}</span>
                  </div>
                </div>
                
                <div className="p-4 text-center">
                  <button 
                    onClick={() => {
                      setActiveVideoUrl("https://www.youtube.com/embed/dQw4w9WgXcQ");
                      setActiveVideoTitle(clip.title);
                      alert(`Klip "${clip.title}" berhasil dimuat ke Video Player Utama di atas.`);
                      const player = document.getElementById("master-video-player");
                      if (player) player.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    id={`btn-play-clip-${clip.id}`}
                    className="w-full py-2 bg-brand-dark-50 hover:bg-brand-teal-50 hover:text-brand-teal-600 text-brand-dark-900 text-[10px] font-extrabold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Play className="h-3 w-3 fill-current" /> Putar di Player Utama
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: JADWAL KAJIAN */}
      <section id="jadwal-kajian" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-600 bg-brand-teal-50 px-3 py-1 rounded-full uppercase">
              TABEL AGENDA DAURAH &amp; MUHA-DHARAH
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 tracking-tight">Jadwal Kajian Sunnah Berkala</h2>
            <p className="text-xs text-gray-400 font-semibold leading-relaxed">
              Hadirilah majelis ilmu syar'i secara langsung di Masjid Yayasan Lawang, maupun pantau siaran live streaming di media sosial resmi kami.
            </p>
          </div>

          <div className="space-y-5">
            {jadwalKajian.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#fafbfc] rounded-2xl border border-gray-150 p-5 sm:p-6 hover:border-brand-teal-300 hover:shadow-sm transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-left"
              >
                <div className="space-y-3 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {item.day}
                    </span>
                    <span className="text-[9px] font-extrabold text-[#d97706] bg-amber-50 px-2.5 py-1 rounded-md">
                      {item.time}
                    </span>
                    <span className={`text-[8px] font-extrabold uppercase px-2 py-0.5 rounded ${item.status.includes("Live") ? "bg-red-50 text-red-650 border border-red-200" : "bg-gray-100 text-gray-500"}`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-gray-400 font-bold">
                      <span>Pemateri: <strong className="text-gray-600">{item.speaker}</strong></span>
                      <span>Lokasi: <strong className="text-gray-600">{item.location}</strong></span>
                      <span>Peserta: <strong className="text-gray-600">{item.audience}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex gap-2 w-full md:w-auto">
                  <button 
                    onClick={() => alert(`Informasi lokasi ke "${item.location}" telah disalin.`)}
                    className="flex-1 md:flex-none py-2 px-3.5 bg-white border border-gray-200 hover:border-brand-teal-500 hover:text-brand-teal-500 text-gray-600 text-[10px] font-extrabold rounded-xl transition-all cursor-pointer text-center"
                  >
                    Petunjuk Rute
                  </button>
                  <button 
                    onClick={() => alert(`Pendaftaran kehadiran kajian "${item.title}" berhasil disimpan.`)}
                    className="flex-1 md:flex-none py-2 px-4 bg-brand-dark-900 hover:bg-brand-dark-950 text-white text-[10px] font-extrabold rounded-xl transition-colors cursor-pointer text-center"
                  >
                    Daftar Hadir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: POSTER DAKWAH */}
      <section id="poster-dakwah" className="py-20 bg-brand-dark-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[10px] font-extrabold tracking-widest text-[#d97706] bg-amber-50 px-3.5 py-1.5 rounded-full uppercase">
              POSTER MUTIARA HADITS SHAHIH
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 tracking-tight">Katalog Poster Dakwah &amp; Faedah</h2>
            <p className="text-xs text-gray-400 font-semibold leading-relaxed">
              Unduh dan sebarluaskan poster dakwah dengan tipografi hadits yang indah tanpa gambar makhluk hidup (sesuai tuntunan syar’i).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {posters.map((poster) => (
              <div 
                key={poster.id} 
                className={`${poster.colorClass} border border-gray-150 rounded-2xl p-6 hover:shadow-md hover:border-brand-teal-300 transition-all flex flex-col justify-between`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-[10px] font-extrabold text-brand-teal-600 uppercase tracking-widest">{poster.title}</span>
                    <span className="text-[9px] font-bold text-gray-450 bg-white px-2 py-0.5 rounded border border-gray-150">{poster.source}</span>
                  </div>
                  
                  {/* Hadits Quotation layout */}
                  <div className="relative pt-4 text-center">
                    <span className="absolute top-0 left-0 text-5xl text-brand-teal-400/25 select-none font-serif leading-none">“</span>
                    <p className="text-xs sm:text-sm text-gray-700 italic font-semibold leading-relaxed relative z-10 px-4">
                      {poster.quote}
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex gap-2">
                  <button 
                    onClick={() => alert(`Teks hadits "${poster.quote}" disalin ke clipboard.`)}
                    className="flex-1 py-1 px-2.5 bg-white border border-gray-200 hover:border-brand-teal-300 hover:text-brand-teal-500 text-gray-500 text-[10px] font-extrabold rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Salin Teks
                  </button>
                  <button 
                    onClick={() => alert("Mengunduh file JPG resolusi tinggi untuk dicetak...")}
                    className="flex-1 py-1.5 px-3 bg-brand-teal-500 hover:bg-brand-teal-600 text-white text-[10px] font-extrabold rounded-lg transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    <FileDown className="h-3.5 w-3.5" /> Unduh JPG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: NEWNEWSLETTER & CATALOG DOWNLOAD */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f5fbfb] border border-brand-teal-150 rounded-3xl my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-600 uppercase bg-brand-teal-50 px-2.5 py-1 rounded-full">
              UPDATE KHABAR SYIAR
            </span>
            <h3 className="text-xl font-extrabold text-brand-dark-900">Dapatkan Materi &amp; Jadwal Kajian Terbaru</h3>
            <p className="text-xs text-gray-400 font-semibold leading-relaxed">
              Daftarkan email atau nomor WhatsApp Anda untuk memperoleh kiriman materi khutbah, poster mutiara salaf harian, serta tautan video RUTABA secara otomatis setiap pekan.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Pendaftaran update khabar syiar berhasil. Syukran jazakumullahu khairan!"); }} className="flex gap-2 max-w-md pt-2">
              <input 
                type="text" 
                placeholder="Masukkan Email atau No WhatsApp..." 
                className="flex-1 text-xs font-semibold p-3 border border-gray-250 focus:border-brand-teal-500 rounded-xl bg-white outline-none"
                required
              />
              <button 
                type="submit" 
                className="py-3 px-5 bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-extrabold text-xs rounded-xl cursor-pointer"
              >
                Daftar Update
              </button>
            </form>
          </div>

          <div className="space-y-4 text-left">
            <h4 className="text-xs font-extrabold text-brand-dark-900 uppercase tracking-wider pl-1">Katalog E-Book &amp; Ringkasan Materi</h4>
            <div className="space-y-3">
              {[
                { title: "Buku Saku Adab Anak Sebelum Ilmu", format: "PDF - 4.2 MB" },
                { title: "Panduan Murajaah Rutin RUTABA Malang", format: "PDF - 2.8 MB" },
                { title: "Poster Ringkasan Do'a & Harta Jariyah", format: "JPG - 1.5 MB" }
              ].map((doc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-gray-150 flex items-center justify-between text-xs font-bold hover:shadow-xs transition-shadow">
                  <div>
                    <span className="block text-brand-dark-900">{doc.title}</span>
                    <span className="block text-[10px] text-gray-400 mt-0.5">{doc.format}</span>
                  </div>
                  <button 
                    onClick={() => alert("Mengunduh dokumen saku syariah kesukaan Anda...")}
                    className="py-1.5 px-3 bg-gray-50 hover:bg-gray-100 text-brand-dark-900 text-[10px] font-extrabold rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <FileDown className="h-3.5 w-3.5" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA DUKUNG DAKWAH DIGITAL */}
      <section className="py-20 bg-[#0d2230] text-white relative overflow-hidden border-t-2 border-brand-gold-500">
        <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-extrabold tracking-widest text-brand-gold-400 bg-brand-gold-500/15 px-3 py-1 rounded-full uppercase">
            PROGRAM AMALIYAH DAKWAH DIGITAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Dukung Keberlangsungan Dakwah Sunnah</h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-semibold max-w-2xl mx-auto">
            Mari berinvestasi akhirat dengan memberikan dukungan infaq operasional terbaik guna penyediaan alat rekaman, publikasi asrama gratis dhuafa serta operasional asatidzah di Lawang.
          </p>
          
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate("donations/dukung-dakwah-digital")}
              id="btn-cta-donasi-dakwah-main"
              className="py-3.5 px-7 rounded-xl bg-brand-teal-500 hover:bg-brand-teal-600 text-white text-xs font-extrabold tracking-wide transition-colors cursor-pointer shadow-md shadow-brand-teal-500/10"
            >
              Donasi Dakwah Digital Sekarang
            </button>
            <button
              onClick={() => onNavigate("kontak")}
              className="py-3.5 px-7 rounded-xl bg-transparent border-2 border-white hover:bg-white hover:text-brand-dark-900 text-white text-xs font-extrabold tracking-wide transition-all cursor-pointer"
            >
              Hubungi Admin Syariah
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ DAKWAH DIGITAL */}
      <section id="faq-dakwah" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3 py-1 rounded-full uppercase">
              TANYA &amp; JAWAB SYARIAH MEDIA
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 tracking-tight">FAQ Dakwah Digital</h2>
            <p className="text-xs text-gray-400 font-semibold leading-relaxed">
              Temukan klarifikasi seputar perizinan penyebaran materi keislaman, metode isyarat Al-Qur'an, dan akuntabilitas bantuan infaq dakwah.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? "bg-[#fafbfc] border-brand-teal-300" : "bg-white border-gray-150"}`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    id={`btn-faq-toggle-${idx}`}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-brand-dark-900 hover:text-brand-teal-650 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-brand-teal-500" : ""}`} />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 border-t border-gray-100 p-5 sm:p-6" : "max-h-0 opacity-0 overflow-hidden"}`}>
                    <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED SUMMARY MODAL POPUP */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative z-10 border border-gray-150 shadow-2xl space-y-5 text-left"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-extrabold tracking-wider text-brand-teal-600 bg-brand-teal-50 px-3 py-1 rounded-md uppercase">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 px-2.5 rounded-lg text-gray-400 hover:text-brand-teal-600 hover:bg-gray-50 transition-colors text-xs font-bold focus:outline-none"
                >
                  Tutup
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900 tracking-tight leading-snug">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold">
                  <Clock className="h-3.5 w-3.5 text-brand-teal-500" /> Estimasi Bacaan: {selectedArticle.readTime}
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed font-semibold bg-gray-50 p-5 rounded-2xl border border-gray-100">
                {selectedArticle.content}
              </p>

              <div className="flex gap-2">
                <button 
                  onClick={() => alert("Mengunduh naskah ringkasan dakwah syariah...")}
                  className="py-1.5 px-3 bg-gray-50 hover:bg-gray-100 text-gray-600 text-[10px] font-extrabold rounded-md flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  Salin File
                </button>
                <button 
                  onClick={() => alert("Teks tautan artikel bermanfaat berhasil disalin untuk dibagikan.")}
                  className="py-1.5 px-3 bg-gray-50 hover:bg-gray-100 text-gray-600 text-[10px] font-extrabold rounded-md flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Bagikan Tautan
                </button>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-extrabold uppercase">Yayasan Nurul Quran Lawang</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="py-2 px-4 bg-brand-teal-500 hover:bg-brand-teal-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  Selesai Membaca
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
