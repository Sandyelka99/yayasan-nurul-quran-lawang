/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Info,
  Calendar,
  Compass,
  FileText,
  Plus,
  Minus
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    category: "Informasi Pendaftaran",
    message: ""
  });

  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [mapAlertOpen, setMapAlertOpen] = useState(false);

  const toggleFaq = (idx: number) => {
    setFaqOpen(faqOpen === idx ? null : idx);
  };

  const contactInfos = [
    {
      title: "Alamat Utama",
      content: "Yayasan Nurul Quran Lawang, Kecamatan Lawang, Kabupaten Malang, Jawa Timur",
      icon: MapPin,
      color: "text-brand-teal-600",
      bg: "bg-brand-teal-50"
    },
    {
      title: "WhatsApp Admin",
      content: "+62 812-0000-0000",
      icon: Phone,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Surat Elektronik",
      content: "info@nurulquranlawang.org",
      icon: Mail,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Jam Layanan",
      content: "Senin - Sabtu (08.00 - 16.00 WIB)",
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  const quickCtaLinks = [
    {
      title: "Tanya Program Pendidikan",
      message: "Assalamu’alaikum, saya ingin bertanya tentang program pendidikan Yayasan Nurul Quran."
    },
    {
      title: "Tanya Donasi & Wakaf",
      message: "Assalamu’alaikum, saya ingin bertanya tentang program donasi dan wakaf Yayasan Nurul Quran."
    },
    {
      title: "Tanya Orang Tua Asuh",
      message: "Assalamu’alaikum, saya ingin bertanya tentang program orang tua asuh penghafal Al-Qur’an."
    },
    {
      title: "Tanya Kunjungan Yayasan",
      message: "Assalamu’alaikum, saya ingin bertanya tentang jadwal kunjungan ke Yayasan Nurul Quran."
    }
  ];

  const handleQuickRedirect = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/6281200000000?text=${encoded}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.fullName}, pesan Anda telah dikirim dan simulasinya akan kami arahkan langsung ke WhatsApp atau terekam di dashboard admin.`);
    setSubmitted(true);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      category: "Informasi Pendaftaran",
      message: ""
    });
  };

  const handleOpenGoogleMapsAlert = () => {
    setMapAlertOpen(true);
  };

  const contactFaq = [
    {
      question: "Apakah bisa berkunjung langsung ke yayasan?",
      answer: "Bisa, namun sebaiknya menghubungi admin terlebih dahulu untuk menyesuaikan jadwal kunjungan agar tidak berbenturan dengan waktu murojaah santri."
    },
    {
      question: "Apakah donasi bisa dikonfirmasi langsung via WhatsApp?",
      answer: "Bisa. Admin bagian keuangan akan membantu memverifikasi mutasi bank yang dikirimkan sertakan menyempurnakan bukti transaksi cetak jika diperlukan."
    },
    {
      question: "Apakah asrama menerima konsultasi kurikulum tatap muka?",
      answer: "Bisa. Wali santri dapat menjadwalkan konsultasi program pendidikan dengan ustadzah pengampu kelas di waktu operasional kantor."
    },
    {
      question: "Apakah tersedia program beasiswa Orang Tua Asuh jangka panjang?",
      answer: "Ya, kami menjembatani ikhtiar mulia ini untuk para muhsinin melingkupi kebutuhan hidup tuntas santri dhuafa penghafal Al-Qur'an."
    }
  ];

  return (
    <div className="bg-[#fbfcff] text-brand-dark-900 min-h-screen pb-24">
      
      {/* SECTION 1: HERO KONTAK */}
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
              PUSAT KOMUNIKASI RESMI
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              Kontak Yayasan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-300 via-brand-teal-100 to-brand-gold-300 font-serif italic">
                Nurul Quran Lawang
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed font-semibold">
              Hubungi kepengurusan Yayasan Nurul Quran Lawang Malang untuk informasi program pendaftaran santri baru, donasi asrama, Orang Tua Asuh, rencana kunjungan syar'i, maupun sinergi dakwah Islam sunnah lainnya.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleQuickRedirect("Assalamu’alaikum, mohon informasi kontak pimpinan yayasan Nurul Quran Lawang Malang.")}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all rounded-full cursor-pointer shadow-lg shadow-brand-teal-500/25 text-center"
              >
                Hubungi WhatsApp
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("maps-placeholder-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-3 px-8 text-xs sm:text-sm font-extrabold text-[#99f6e4] bg-white/5 hover:bg-white/10 transition-all border border-brand-teal-500/30 rounded-full cursor-pointer"
              >
                Lihat Lokasi
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SECTION 2: KONTAK & PENGAJUAN PESAN FORM DUA KOLOM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Col: Info Cards list */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <span className="inline-block text-[9px] font-extrabold text-brand-teal-600 bg-brand-teal-50 border border-brand-teal-100 px-2.5 py-1 rounded-full uppercase tracking-widest">
                  ALAMAT & TELEPON RESMI
                </span>
                
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark-900 tracking-tight leading-snug">
                  Wisma Administrasi & Korespondensi
                </h3>
                <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                  Gunakan data legalitas alamat di bawah ini untuk mengirimkan surat pengajuan kerjasama atau mengontak langsung administrasi kantor.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1 pt-4">
                {contactInfos.map((info, i) => {
                  const IconComp = info.icon;
                  return (
                    <div key={i} className="p-4 rounded-2xl border border-gray-150 bg-gray-50/20 flex gap-4">
                      <div className={`w-10 h-10 rounded-xl ${info.bg} ${info.color} flex items-center justify-center shrink-0`}>
                        <IconComp className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">{info.title}</span>
                        <span className="block text-xs font-bold text-brand-dark-900 leading-normal">{info.content}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-2xl bg-brand-teal-500/5 text-brand-teal-700 text-[11px] font-semibold leading-normal border border-brand-teal-500/10">
                ⭐ Kegiatan pembelajaran, setoran tadarus tahfidz, dan operasional administrasi dikoordinasikan murni sesuai syariat sunnah rasulullah demi menjaga kesucian pondok pesantren.
              </div>

            </div>

            {/* Right Col: Messaging Form */}
            <div className="lg:col-span-7 bg-[#fbfcff] p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-sm space-y-6">
              
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-sm sm:text-base font-extrabold text-brand-dark-900">Form Pengiriman Pesan</h3>
                <span className="block text-[11px] text-gray-400 font-semibold mt-0.5">Kirimkan rincian pertanyaan Anda, sistem sandbox kami akan segera menyiapkan data.</span>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-emerald-950 uppercase tracking-wide">Pesan Terkirim</h4>
                    <p className="text-xs text-emerald-700 leading-relaxed font-semibold mt-1">
                      Terima kasih atas pesan yang Anda sampaikan. Pengurus/Admin Yayasan Nurul Quran Lawang Malang akan memproses data simulasi ini dan segera menghubungi Anda.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="py-2 px-4 bg-white border border-emerald-200 text-emerald-700 text-xs font-bold rounded-xl hover:bg-emerald-100 transition-all cursor-pointer"
                  >
                    Kirim Pesan Baru
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[8px] font-bold text-gray-400 uppercase mb-1.5">Nama Lengkap Anda</label>
                      <input 
                        type="text"
                        required
                        placeholder="Misal: Abu Fawwaz"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-xs font-bold rounded-xl border border-gray-200 bg-white p-2.5 text-brand-dark-900 focus:outline-none focus:border-brand-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[8px] font-bold text-gray-400 uppercase mb-1.5">Nomor WhatsApp Aktif</label>
                      <input 
                        type="tel"
                        required
                        placeholder="Misal: 0812XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs font-bold rounded-xl border border-gray-250 bg-white p-2.5 text-brand-dark-900 focus:outline-none focus:border-brand-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[8px] font-bold text-gray-400 uppercase mb-1.5 font-mono">Alamat Email (Opsional)</label>
                      <input 
                        type="email"
                        placeholder="Misal: abufawwaz@mail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs font-semibold rounded-xl border border-gray-250 bg-white p-2.5 text-brand-dark-900 focus:outline-none focus:border-brand-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[8px] font-bold text-gray-400 uppercase mb-1.5">Kategori Pertanyaan</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full text-xs font-semibold rounded-xl border border-gray-250 bg-white p-2.5 text-brand-dark-900 focus:outline-none focus:border-brand-teal-500 cursor-pointer"
                      >
                        <option>Informasi Pendaftaran</option>
                        <option>Donasi & Wakaf</option>
                        <option>Orang Tua Asuh</option>
                        <option>Kunjungan Yayasan</option>
                        <option>Kerja Sama</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[8px] font-bold text-gray-400 uppercase">Isi Pesan/Keperluan Anda</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Tulis sedalam mungkin perihal rincian koordinasi yang hendak dinegosiasikan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs font-semibold rounded-xl border border-gray-250 bg-white p-2.5 text-brand-dark-900 focus:outline-none focus:border-brand-teal-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-dark-950 hover:bg-brand-dark-900 text-white rounded-xl text-xs font-extrabold transition-all text-center cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="h-4 w-4" />
                    Kirim Pesan Administrasi
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 3: QUICK CHOSE CTAS (Pilih Kebutuhan Anda) */}
      <section className="py-24 bg-brand-dark-50/30 border-t border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-[#d97706] uppercase bg-amber-50 px-3 py-1 rounded-full">KONEKSI INSTAN WHATSAPP</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Pilih Kebutuhan Anda</h2>
            <p className="mt-2 text-xs text-gray-400 font-semibold">Tanyakan langsung pada sub-divisi terkait menggunakan format chat otomatis.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickCtaLinks.map((cta, i) => (
              <div 
                key={i} 
                onClick={() => handleQuickRedirect(cta.message)}
                className="bg-white p-6 rounded-3xl border border-gray-150 hover:border-brand-teal-300 hover:shadow-md transition-all flex flex-col justify-between h-44 cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 group-hover:text-brand-teal-600 transition-colors leading-tight">
                      {cta.title}
                    </h4>
                    <p className="text-[10px] text-gray-450 italic font-semibold leading-normal mt-1 text-gray-400">
                      "{cta.message.substring(0, 52)}..."
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-emerald-600 group-hover:underline flex items-center gap-0.5">
                  Mulai Chat WA →
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 4: GOOGLE MAPS PLACEHOLDER */}
      <section id="maps-placeholder-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-600 uppercase bg-brand-teal-100 px-3 py-1 rounded-full">KOORDINAT TITIK ASRAMA</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">Lokasi Administratif Yayasan</h2>
        </div>

        <div className="bg-[#0f232d] text-white p-8 sm:p-12 rounded-3xl border border-brand-teal-900/60 shadow-lg relative overflow-hidden text-center space-y-6">
          <div className="absolute inset-0 islamic-grid opacity-15 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-teal-500/10 text-brand-teal-400 border border-brand-teal-500/20 flex items-center justify-center mx-auto mb-2 animate-bounce">
              <MapPin className="h-6 w-6" />
            </div>
            
            <h3 className="text-sm sm:text-base font-extrabold text-white">Google Maps Integrator Placeholder</h3>
            <p className="text-xs text-gray-350 font-semibold leading-relaxed text-gray-300">
              Peta rute Google Maps interaktif akan ditambahkan pada panel sitemap ini setelah alamat titik koordinat wisma final terverfikasi oleh tim pertanahan yayasan Nurul Quran Lawang Malang.
            </p>

            {mapAlertOpen ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-teal-950/40 border border-brand-teal-500/20 rounded-2xl p-4 text-xs font-semibold text-brand-teal-300 leading-normal"
              >
                ℹ️ Link Google Maps akan segera terbit setelah legalitas tanah asrama asatidzah di Lawang Malang selesai dan terverifikasi secara resmi.
                <button 
                  onClick={() => setMapAlertOpen(false)}
                  className="mt-2.5 text-white bg-brand-teal-500 hover:bg-brand-teal-600 px-3 py-1.5 rounded-lg text-[10px] font-bold block mx-auto transition-colors"
                >
                  Tutup Notifikasi
                </button>
              </motion.div>
            ) : (
              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleOpenGoogleMapsAlert}
                  className="py-2.5 px-6 rounded-xl bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-bold text-xs transition-all cursor-pointer shadow-sm shadow-brand-teal-500/15"
                >
                  Buka Google Maps Rencana
                </button>
              </div>
            )}
          </div>

        </div>

      </section>


      {/* SECTION 5: FAQ CONTACT (Accordion) */}
      <section className="py-24 bg-white border-t border-gray-150">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-600 uppercase bg-brand-teal-50 px-3 py-1 rounded-full">INFO KOST & KUNJUNGAN</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 mt-3 tracking-tight">FAQ Pusat Komunikasi</h2>
          </div>

          <div className="space-y-4">
            {contactFaq.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div key={idx} className="border border-gray-150 rounded-2xl overflow-hidden bg-gray-50/40">
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
                        <div className="pb-5 px-6 text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed border-t border-gray-100 pt-3 bg-white">
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

    </div>
  );
}
