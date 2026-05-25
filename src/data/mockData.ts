/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Campaign, FosterPackage, EducationUnit, ProgressUpdate, GalleryItem, Testimony } from "../types";

export const STATISTICS = {
  activeStudents: 1245,
  teachers: 85,
  donors: 2430,
  activePrograms: 12,
  constructionProgress: 78,
  totalDonationCollected: 3120000000, // IDR
};

export const CORE_VALUES = [
  {
    id: "amanah",
    title: "Amanah & Transparan",
    description: "Laporan keuangan, penggunaan dana donasi, dan progress pembangunan dilaporkan secara periodik, terbuka, serta dapat diakses kapan saja oleh para donatur.",
    iconName: "ShieldCheck",
  },
  {
    id: "itqan",
    title: "Akreditasi & Terpercaya",
    description: "Kurikulum terintegrasi, manajemen tata kelola yang profesional, dan memiliki legalitas resmi di bawah Kementerian Agama dan Hukum RI.",
    iconName: "FileCheck",
  },
  {
    id: "manfaat",
    title: "Menebar Manfaat",
    description: "Fokus mencetak da'i dan generasi Qurani yang tidak hanya hafal Al-Qur'an, namun memiliki akhlakul karimah yang berdampak positif bagi masyarakat.",
    iconName: "Sparkles",
  },
  {
    id: "sunnah",
    title: "Sesuai Sunnah",
    description: "Pendekatan materi pendidikan, aqidah, moral, dan etika berlandaskan Al-Qur'an dan As-Sunnah sesuai yang dicontohkan generasi shahabat.",
    iconName: "BookOpen",
  },
];

export const EDUCATION_UNITS: EducationUnit[] = [
  {
    id: "learning-center",
    title: "RUMAH BELAJAR",
    subTitle: "Nurul Quran Learning Center",
    description: "Program pembelajaran bimbingan akademik, pemantapan sains-humaniora, dan pembinaan karakter Islami mendalam demi melahirkan insan cerdas berkarakter rabbani.",
    targetAudience: "Siswa SD, SMP, hingga SMA",
    features: [
      "Bimbingan belajar Matematika, IPA, dan Bahasa Inggris",
      "Pendidikan akhlak mulia & adab sehari-hari",
      "Sesi konsultasi belajar & motivasi secara intensif",
      "Ruang belajar representatif dan minim gangguan"
    ],
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200",
    iconName: "GraduationCap"
  },
  {
    id: "tahfidz-center",
    title: "RUMAH TAHFIZZ",
    subTitle: "Nurul Quran Tahfidz Center",
    description: "Mencetak hafizh dan hafizhah melalui program tahfidzhul Quran terstruktur, bimbingan tajwid makharijul huruf, serta pendalaman muraja'ah dengan target mutqin.",
    targetAudience: "Anak-anak & Remaja (Usia 6 - 18 tahun)",
    features: [
      "Bimbingan intensif setoran hafalan baru & murajaah",
      "Pembelajaran sanad Al-Qur'an & matan hukum tajwid",
      "Karantina tahfidz ramadhan & khotmil Quran periodik",
      "Fasilitas asrama kondusif dengan lingkungan santri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200",
    iconName: "BookOpen"
  },
  {
    id: "rutaba",
    title: "RUTABA",
    subTitle: "Rumah Tahfidz Balita",
    description: "Pendidikan Al-Qur'an usia dini (toddler & balita) menggunakan metodologi interaktif, kreatif, dan menyenangkan yang disesuaikan dengan tumbuh kembang emosi anak.",
    targetAudience: "Balita & Anak-anak Usia 3 - 6 tahun",
    features: [
      "Metode talaqqi visual & auditori yang menyenangkan",
      "Pengenalan kosakata bahasa Arab dasar melalui nasyid",
      "Pembiasaan doa harian dan hadits pendek aplikatif",
      "Ruang stimulasi anak bercorak ornamen Islami ceria"
    ],
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=1200",
    iconName: "Baby"
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: "pesantren-pembangunan",
    title: "Pembangunan Gedung Pesantren & Ruang Kelas Baru",
    category: "pembangunan",
    description: "Membantu perluasan area dan pembangunan gedung pesantren bertingkat guna menampung gelombang santri yatim & tahfidz yang terus meningkat tahun ini.",
    targetAmount: 1500000000,
    currentAmount: 1170000000,
    donorsCount: 1420,
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    isUrgent: true,
  },
  {
    id: "wakaf-quran",
    title: "Wakaf Al-Qur'an Hafalan & Kitab Penunjang Santri",
    category: "wakaf",
    description: "Penyaluran mushaf Al-Qur'an berpemetaan khusus hafalan beserta kumpulan kitab adab, tafsir, dan aqidah sunnah untuk menunjang kegiatan belajar mengajar santri.",
    targetAmount: 150000000,
    currentAmount: 125000000,
    donorsCount: 480,
    imageUrl: "https://images.unsplash.com/photo-1512632511790-760901e47f5b?auto=format&fit=crop&q=80&w=1200",
    isUrgent: false,
  },
  {
    id: "makan-santri",
    title: "Sedekah Penyediaan Makan Bergizi Santri Tahfidz",
    category: "sosial",
    description: "Program penyediaan katering harian bergizi tinggi (beras kualitatif, bersayur, protein harian) demi menjaga stamina fisik para penuntut ilmu Qur'an.",
    targetAmount: 300000000,
    currentAmount: 185000000,
    donorsCount: 312,
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1200",
    isUrgent: true,
  },
  {
    id: "beasiswa-hafidz",
    title: "Beasiswa Pendidikan Santri Yatim & Duafa Penghafal Quran",
    category: "beasiswa",
    description: "Sponsori biaya hidup bulanan, SPP, pakaian seragam, serta fasilitas kesehatan santri berbakat yang berasal dari latar belakang yatim atau dhuafa.",
    targetAmount: 450000000,
    currentAmount: 340000000,
    donorsCount: 198,
    imageUrl: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1200",
    isUrgent: false,
  },
  {
    id: "sarana-belajar",
    title: "Pengembangan Sarana Kelas & Meja Tulis Rutaba",
    category: "pembangunan",
    description: "Pengadaan sarana prasarana baru berupa papan tulis interaktif, AC, meja kayu khusus tahfidz balita, kipas angin, dan bantal duduk untuk anak-anak balita.",
    targetAmount: 120000000,
    currentAmount: 85000000,
    donorsCount: 220,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=1200",
    isUrgent: false,
  }
];

export const FOSTER_PACKAGES: FosterPackage[] = [
  {
    id: "paket-belajar",
    name: "Paket Belajar Saja",
    price: 150000,
    period: "bulan",
    description: "Membantu mensubsidi kebutuhan buku pelajaran, perlengkapan tulis, kitab hafalan, dan alat penunjang kelas santri.",
    benefits: [
      "Mendapat laporan akademis rutin tiap 3 bulan",
      "Wakaf 1 mushaf atas nama donatur",
      "Grup laporan WA perkembangan program yayasan",
      "Doa bersama dari para santri penghafal"
    ],
  },
  {
    id: "paket-makan-belajar",
    name: "Paket Makan & Belajar",
    price: 300000,
    period: "bulan",
    description: "Menutupi kebutuhan operasional harian terpenting: beasiswa belajar sekaligus suplai makan sehat 3 kali sehari.",
    benefits: [
      "Mendapat profil santri asuh binaan",
      "Laporan perkembangan hafalan Al-Qur'an berkala",
      "Penyediaan makan & gizi harian yang higienis",
      "Nama donatur disematkan pada papan doa harian santri"
    ],
    badge: "Terfavorit"
  },
  {
    id: "paket-lengkap",
    name: "Paket Pendidikan Lengkap",
    price: 500000,
    period: "bulan",
    description: "Sponsorship menyeluruh yang membiayai pengasuhan penuh, kesehatan, kesejahteraan asrama, makan, dan pendidikan santri.",
    benefits: [
      "Laporan personal komprehensif video setoran santri",
      "Pertemuan silaturahmi online via Zoom per semester",
      "Pembiayaan santri asuh secara eksklusif (1-on-1)",
      "Sertifikat Orang Tua Asuh resmi dari Yayasan"
    ],
    badge: "Utama"
  }
];

export const PROGRESS_UPDATES: ProgressUpdate[] = [
  {
    id: "progress-1",
    title: "Pengecoran Lantai 2 Gedung Asrama Khusus Putra",
    date: "20 Mei 2026",
    percentage: 85,
    description: "Alhamdulillah pengecoran struktur lantai 2 berjalan lancar menggunakan semen berkualitas tinggi dan besi cor berstandar SNI. Saat ini masuk tahap pengeringan cor beton.",
    category: "pembangunan",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Semen Terpakai", value: "450 Sak" },
      { label: "Batu Pecah", value: "35 Voltase" },
      { label: "Tenaga Ahli", value: "18 Pekerja" }
    ]
  },
  {
    id: "progress-2",
    title: "Pembelian 50 Meja Belajar Kayu untuk Santri Rutaba",
    date: "12 April 2026",
    percentage: 100,
    description: "Laporan realisasi dana program sarana: Meja belajar mini dari kayu jati belanda yang aman dan bersudut tumpul telah diserahkan langsung ke ruang belajar Rutaba.",
    category: "keuangan",
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Total Unit", value: "50 Unit Meja" },
      { label: "Anggaran Terpakai", value: "Rp 12.500.000" },
      { label: "Status Distribusi", value: "Selesai 100%" }
    ]
  },
  {
    id: "progress-3",
    title: "Penyaluran 300 Al-Qur'an Tikrar Hafalan di Lawang",
    date: "28 Maret 2026",
    percentage: 100,
    description: "Dalam mendukung kelancaran hafalan santri, Yayasan Nurul Quran Lawang menyalurkan wakaf donatur berupa mushaf Al-Qur'an khusus metode tikrar terbaik.",
    category: "kegiatan",
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Penerima Manfaat", value: "300 Santri" },
      { label: "Sisa Mushaf Asrama", value: "15 Unit" },
      { label: "Lokasi Distribusi", value: "Kec. Lawang, Malang" }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Meja Belajar Kayu Rutaba",
    description: "Meja belajar mini bernuansa alami diletakkan rapi di ruang kelas Rumah Tahfidz Balita.",
    category: "rutaba",
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "gal-2",
    title: "Buku Kajian & Mushaf",
    description: "Kitab-kitab aqidah dan Al-Qur'an hafalan santri tersusun rapi untuk pembinaan subuh.",
    category: "tahfidz",
    imageUrl: "https://images.unsplash.com/photo-1512632511790-760901e47f5b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "gal-3",
    title: "Pengecoran Tiang Masjid",
    description: "Dokumentasi detail pondasi dan sengkang besi konstruksi penunjang masjid asrama putra.",
    category: "pembangunan",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "gal-4",
    title: "Mushaf Al-Qur'an Terbuka",
    description: "Buku panduan tajwid terstandar yang dibaca santri sebelum menyetorkan hafalan di rehal.",
    category: "tahfidz",
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "gal-5",
    title: "Perpustakaan Mini Santri",
    description: "Konsep sudut literasi tenang untuk santri mengulang murajaah mandiri di sore hari.",
    category: "kegiatan",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "gal-6",
    title: "Sarana Lemari & Rak Kelas",
    description: "Lemari loker penempatan tas dan perlengkapan mengaji anak balita yang aman dan kokoh.",
    category: "rutaba",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1200"
  }
];

export const TESTIMONIALS: Testimony[] = [
  {
    id: "testi-1",
    author: "H. Abu Sulaiman",
    role: "Wakif Utama & Wali Santri",
    content: "Alhamdulillah, mempercayakan investasi akhirat saya di Yayasan Nurul Quran Lawang membuat hati tenang. Laporan dikirimkan transparan setiap bulan, dan tidak ada drama non-syari dalam kegiatannya."
  },
  {
    id: "testi-2",
    author: "Dr. Muhammad Ridwan",
    role: "Donatur Bulanan / Orang Tua Asuh",
    content: "Melihat video setoran bacaan hafalan santri asuh secara personal membuat saya sangat terharu. Uang yang kami sisihkan betul-betul dioptimalkan untuk menyuplai kalori bergizi tinggi dan ilmu yang mengalir tiada henti."
  },
  {
    id: "testi-3",
    author: "Ustadz H. Abdurrahman, Lc.",
    role: "Kepala Kurikulum Binaan",
    content: "Kami berikhtiar semaksimal mungkin mengawal kualitas tahfidz santri balita maupun remaja agar sesuai dengan sunnah rasulullah sallallahu alaihi wa sallam, mengedepankan adab di atas ilmu."
  }
];
