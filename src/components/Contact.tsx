/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, ShieldCheck, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Silaturahmi / Tanya Program");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = (account: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(account);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="section-contact">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 islamic-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0a8a9a] bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase font-sans">
            HUBUNGI KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
            Mari Jalin Silaturahmi Hangat
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
            Apakah Anda memiliki pertanyaan seputar pendaftaran santri baru, penyaluran wakaf khusus, atau rencana kunjungan lapangan? Silakan kontak kami kapan saja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Direct Address Details & Official Bank Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Address details */}
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-brand-teal-50 text-brand-teal-500 shrink-0 h-fit">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-extrabold text-brand-dark-900 uppercase tracking-wider">
                    Alamat Fisik Pesantren
                  </span>
                  <span className="block text-xs text-gray-500 mt-1 font-semibold leading-relaxed">
                    Jl. Raya Argopuro No. 42, Kelurahan Turirejo, Kec. Lawang, Kabupaten Malang, Jawa Timur 65211
                  </span>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-extrabold text-brand-teal-500 hover:text-brand-teal-600 mt-2.5 transition-colors"
                  >
                    Buka Google Maps
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* WhatsApp phone details */}
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-green-50 text-green-600 shrink-0 h-fit">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-extrabold text-brand-dark-900 uppercase tracking-wider">
                    WhatsApp & Hotline Syiar
                  </span>
                  <span className="block text-sm font-bold text-gray-700 mt-1 font-mono">
                    +62 822-3401-2041
                  </span>
                  <span className="block text-[10px] text-gray-400 font-medium mt-0.5">
                    Hadir melayani Senin-Sabtu jam 08.00 - 16.00 WIB
                  </span>
                </div>
              </div>

              {/* Email details */}
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-brand-teal-50 text-brand-teal-500 shrink-0 h-fit">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-extrabold text-brand-dark-900 uppercase tracking-wider">
                    Surat Elektronik Resmi
                  </span>
                  <span className="block text-sm font-bold text-gray-700 mt-1">
                    syiar@nurulquranlawang.org
                  </span>
                </div>
              </div>
            </div>

            {/* Official Bank Account Board */}
            <div className="bg-brand-dark-50 border border-gray-150 rounded-2xl p-6 shadow-inner">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-5 w-5 text-brand-teal-500" />
                <span className="text-xs font-extrabold text-brand-dark-900 uppercase tracking-tight">
                  No. Rekening Resmi Yayasan
                </span>
              </div>
              
              <div className="space-y-3">
                {/* Bank BSI */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-150">
                  <div>
                    <span className="block text-[8px] font-extrabold text-gray-400">BANK BSI (KODE 451)</span>
                    <span className="block text-xs font-bold text-brand-dark-900 font-mono mt-0.5">4510001245</span>
                  </div>
                  <button
                    onClick={() => handleCopy("bsi", "4510001245")}
                    className="p-1 px-2.5 rounded-lg border border-gray-100 bg-gray-50 text-[10px] font-bold text-brand-teal-500 hover:bg-brand-teal-50 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    {copiedAccount === "bsi" ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-green-500" />
                        <span className="text-green-500">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Bank Mandiri */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-150">
                  <div>
                    <span className="block text-[8px] font-extrabold text-gray-400">BANK MANDIRI (KODE 008)</span>
                    <span className="block text-xs font-bold text-brand-dark-900 font-mono mt-0.5">14400243000</span>
                  </div>
                  <button
                    onClick={() => handleCopy("mandiri", "14400243000")}
                    className="p-1 px-2.5 rounded-lg border border-gray-100 bg-gray-50 text-[10px] font-bold text-brand-teal-500 hover:bg-brand-teal-50 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    {copiedAccount === "mandiri" ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-green-500" />
                        <span className="text-green-500">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interaction form */}
          <div className="lg:col-span-7 bg-brand-dark-50 border border-gray-150 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-brand-dark-900 mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-brand-teal-500" />
              Kirim Pesan atau Konfirmasi Silahturahmi
            </h3>

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
                  <h4 className="text-sm font-extrabold text-emerald-900 uppercase tracking-wide">Pesan Berhasil Terkirim</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed font-semibold mt-1">
                    Alhamdulillah, pesan syiar Anda berhasil terekam. Tim admin Layanan Yayasan Nurul Quran Lawang Malang akan membalas via email atau WhatsApp Anda secepatnya.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="py-2 px-4 bg-white border border-emerald-200 text-emerald-700 text-xs font-bold rounded-xl hover:bg-emerald-100 transition-all cursor-pointer"
                >
                  Kirim Pesan Lainnya
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-brand-dark-900 uppercase tracking-widest mb-1.5">
                      Nama Lengkap Anda
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Akhina Ridho"
                      className="w-full text-xs font-semibold rounded-xl border border-gray-300 bg-white px-4 py-3 text-brand-dark-900 transition-all focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/10 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-brand-dark-900 uppercase tracking-widest mb-1.5">
                      Alamat Email Aktif
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@email.com"
                      className="w-full text-xs font-semibold rounded-xl border border-gray-300 bg-white px-4 py-3 text-brand-dark-900 transition-all focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/10 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-brand-dark-900 uppercase tracking-widest mb-1.5">
                    Topik / Perihal
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs font-semibold rounded-xl border border-gray-300 bg-white px-4 py-3 text-brand-dark-900 transition-all focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/10 outline-none"
                  >
                    <option value="Silaturahmi / Tanya Program">Silaturahmi / Tanya Program</option>
                    <option value="Konfirmasi Donasi Gedung">Konfirmasi Donasi Gedung</option>
                    <option value="Minat Jadi Orang Tua Asuh">Minat Jadi Orang Tua Asuh</option>
                    <option value="Pendaftaran Santri Baru">Pendaftaran Santri Baru</option>
                    <option value="Saran & Masukan">Saran & Masukan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-brand-dark-900 uppercase tracking-widest mb-1.5">
                    Isi Pesan Syiar Anda
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan pesan asatidzah, pendaftaran, pertolongan wakaf, dll secara santun..."
                    className="w-full text-xs font-semibold rounded-xl border border-gray-300 bg-white px-4 py-3 text-brand-dark-900 transition-all focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/10 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-brand-teal-500 hover:bg-brand-teal-600 shadow-md shadow-brand-teal-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="btn-submit-contact"
                >
                  Kirim Pesan Sekarang
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
