/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from "react";
import { Campaign } from "../types";
import { 
  Heart, 
  Users, 
  Flame, 
  Target, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  Smile, 
  Sparkles, 
  Share2, 
  CornerDownRight, 
  ArrowLeft,
  FileText,
  Lock,
  MessageSquare,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DonationDetailPageProps {
  campaign: Campaign;
  onNavigateBack: () => void;
  onAddManualDonation: (amount: number, donorName: string, campaignId: string) => void;
}

export default function DonationDetailPage({ 
  campaign, 
  onNavigateBack, 
  onAddManualDonation 
}: DonationDetailPageProps) {
  
  // Nominal quick presets
  const presets = [50000, 100000, 250000, 500000, 1000000];
  
  // Custom interactive state
  const [selectedPreset, setSelectedPreset] = useState<number | null>(100000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [donatedAmount, setDonatedAmount] = useState<number>(0);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Dynamic comment states so the user can actually write a prayer
  const [prayers, setPrayers] = useState([
    { name: "Hamba Allah", time: "Baru saja", text: "Semoga Allah mudahkan pembangunan pesantren ini." },
    { name: "Abdullah", time: "2 jam yang lalu", text: "Semoga menjadi amal jariyah yang terus mengalir." },
    { name: "Ummu Maryam", time: "1 hari yang lalu", text: "Semoga lahir generasi penghafal Al-Qur'an dari tempat ini." },
  ]);
  const [newPrayerText, setNewPrayerText] = useState("");

  const actualAmount = selectedPreset !== null ? selectedPreset : (parseInt(customAmount) || 0);
  const percent = Math.min(Math.round((campaign.currentAmount / campaign.targetAmount) * 100), 100);
  const sisaKebutuhan = Math.max(campaign.targetAmount - campaign.currentAmount, 0);

  const handlePresetSelect = (val: number) => {
    setSelectedPreset(val);
    setCustomAmount("");
    setValidationError(null);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPreset(null);
    setCustomAmount(e.target.value);
    setValidationError(null);
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (actualAmount < 10000) {
      setValidationError("Nominal donasi minimal adalah Rp 10.000 agar dapat dicatat secara tertib.");
      return;
    }
    setValidationError(null);

    const finalName = isAnonymous || !donorName.trim() ? "Hamba Allah" : donorName.trim();
    
    // Wire up to our root state simulator!
    onAddManualDonation(actualAmount, finalName, campaign.id);
    
    // Log personal success overlay
    setDonatedAmount(actualAmount);
    setIsSuccess(true);

    // Automatically append user prayer if any text was entered
    if (newPrayerText.trim()) {
      setPrayers(prev => [
        { name: finalName, time: "Baru saja", text: newPrayerText.trim() },
        ...prev
      ]);
      setNewPrayerText("");
    } else {
      setPrayers(prev => [
        { name: finalName, time: "Baru saja", text: "Insya Allah dilimpahkan berkah jariyah teruji dan terkabul." },
        ...prev
      ]);
    }
  };

  const handleAddLivePrayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPrayerText.trim()) return;
    const finalName = donorName.trim() ? donorName.trim() : "Hamba Allah";
    setPrayers(prev => [
      { name: finalName, time: "Baru saja", text: newPrayerText.trim() },
      ...prev
    ]);
    setNewPrayerText("");
  };

  return (
    <div className="bg-[#fbfcff] min-h-screen text-brand-dark-900 pb-24">
      
      {/* SECTION 1: DUSTY TEAL METEORIC DETAIL HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-brand-teal-900 text-white pt-20 pb-24 border-b border-brand-teal-950">
        <div className="absolute inset-0 islamic-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-[-10%] w-[350px] h-[350px] bg-brand-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back button link safety standard */}
          <button 
            onClick={onNavigateBack}
            className="inline-flex items-center gap-2 mb-8 py-2 px-3.5 text-xs font-bold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar Program
          </button>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-extrabold tracking-widest text-brand-teal-300 bg-brand-teal-500/10 border border-brand-teal-500/20 rounded-full uppercase mb-4">
              <Sparkles className="h-3.5 w-3.5 text-brand-teal-400" />
              WAKAF PEMBANGUNAN GEDRUNG UTAMA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mt-2">
              {campaign.title}
            </h1>
            <p className="mt-4 text-xs sm:text-base text-gray-300 font-semibold leading-relaxed">
              Mari ikut membangun fasilitas pendidikan Qurani yang nyaman, amanah, dan bermanfaat untuk generasi penghafal Al-Qur'an.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: CONTENT COHESION (2 Columns layout to standard requirements) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COL: Description, updates, timetable (SPAN 7) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Elegant Hero Architectural visual (No living organisms) */}
            <div className="rounded-3xl overflow-hidden bg-brand-dark-950 aspect-[16/9] border border-gray-150 shadow-sm relative">
              <img 
                src={campaign.imageUrl} 
                alt="Pembangunan Pesantren Gedung"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-900/60 to-transparent pointer-events-none" />
            </div>

            {/* Description Copywriting */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-brand-dark-900 border-b border-gray-100 pb-3">
                Deskripsi Program Mulia
              </h3>
              
              <div className="text-xs sm:text-sm text-gray-600 space-y-4 leading-relaxed font-semibold">
                <p>
                  “Pembangunan pesantren ini menjadi bagian dari ikhtiar Yayasan Nurul Quran Lawang Malang dalam menyediakan fasilitas pendidikan Islam yang lebih layak, nyaman, dan mendukung proses pembelajaran serta tahfidz Al-Qur'an.”
                </p>
                <p>
                  “Donasi yang terkumpul akan digunakan untuk pembangunan ruang belajar, fasilitas tahfidz, perbaikan sarana pendukung, serta pengembangan lingkungan belajar yang lebih baik.”
                </p>
                <p>
                  Kami berkomitmen penuh bahwa setiap rupiah yang Anda wakafkan akan mengalir tanpa potongan komisi agen, dialokasikan langsung untuk pengadaan bahan konstruksi semen, pondasi batu cor, kusen kelas, dan material asrama putra yang berlokasi sejuk di Lawang, Malang.
                </p>
              </div>
            </div>

            {/* TIMELINE PENGGUNAAN DANA */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-brand-dark-900 border-b border-gray-100 pb-3 mb-6">
                Timeline Penggunaan Dana
              </h3>
              
              <div className="relative border-l-2 border-brand-teal-100 pl-6 ml-3 space-y-8">
                
                {/* Stage 1 */}
                <div className="relative">
                  <span className="absolute left-[-31px] top-0 w-4.5 h-4.5 bg-brand-teal-500 rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 flex items-center gap-2">
                    Tahap Persiapan
                    <span className="text-[10px] font-semibold text-brand-teal-600 bg-brand-teal-50 px-2 py-0.5 rounded-full">Selesai 100%</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-1 font-semibold leading-relaxed">
                    Perencanaan kebutuhan teknis arsitektur sipil, pengesahan izin tata kota, dan penyusunan anggaran rinci (RAB).
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="relative">
                  <span className="absolute left-[-31px] top-0 w-4.5 h-4.5 bg-brand-teal-500 rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
                  <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 flex items-center gap-2">
                    Tahap Pembangunan Struktur
                    <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Berjalan</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-1 font-semibold leading-relaxed">
                    Pengerjaan bangunan utama masjid pondok, tiang-tiang fondasi beton bertingkat, pilar, pengecoran atap, dan fasilitas dasar sanitasi.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="relative">
                  <span className="absolute left-[-31px] top-0 w-4.5 h-4.5 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-500">
                    Tahap Sarana Belajar
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-1 font-semibold leading-relaxed">
                    Pengadaan meja tulis tahfidz, lemari buku jati, rak mushaf balita, papan tulis kaca interaktif, dan perlengkapan utama belajar santri.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="relative">
                  <span className="absolute left-[-31px] top-0 w-4.5 h-4.5 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center shadow-sm" />
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-500">
                    Tahap Finalisasi
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-1 font-semibold leading-relaxed">
                    Penyelesaian akhir (cat interior aman lingkungan), pengecekan kekuatan material oleh tim teknisi independen, dan serah terima penggunaan secara resmi.
                  </p>
                </div>

              </div>
            </div>

            {/* UPDATE TERBARU */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-brand-dark-900 border-b border-gray-100 pb-3">
                Update Terbaru Pembangunan
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-brand-teal-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="block font-bold text-brand-dark-900">Pengecoran area ruang belajar telah selesai</span>
                    <span className="block text-[10px] text-gray-400 mt-0.5">Disampaikan 3 hari lalu oleh Logistik Lapangan</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-brand-teal-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="block font-bold text-brand-dark-900">Pengadaan material semen & pasir cor tahap kedua sedang berjalan</span>
                    <span className="block text-[10px] text-gray-400 mt-0.5">Disampaikan 1 minggu lalu oleh Tim Keuangan</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-brand-teal-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="block font-bold text-brand-dark-900">Persiapan penarikan instalasi listrik dan perlengkapan ruang belajar</span>
                    <span className="block text-[10px] text-gray-400 mt-0.5">Disampaikan 2 minggu lalu oleh Ops Lapangan</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-brand-teal-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="block font-bold text-brand-dark-900">Dokumentasi progress pembangunan diperbarui secara berkala</span>
                    <span className="block text-[10px] text-gray-400 mt-0.5">Kontinu terintegrasi di papan progress yayasan</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* GALERI PROGRESS */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-brand-dark-900 border-b border-gray-100 pb-3 mb-6">
                Galeri Realitas Lapangan
              </h3>
              
              {/* Aesthetic grid of real Unsplash architecture / build material (strictly no people) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square border border-gray-150">
                  <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&q=80&w=400" alt="Material" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square border border-gray-150">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400" alt="Gedung" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square border border-gray-150">
                  <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=400" alt="Bata semen" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square border border-gray-150">
                  <img src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=400" alt="Mushaf" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square border border-gray-150">
                  <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=400" alt="Ruangan" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square border border-gray-150">
                  <img src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400" alt="Rak buku" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* DOA & DUKUNGAN DONATUR */}
            <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-base sm:text-lg font-bold text-brand-dark-900">
                  Doa & Dukungan Donatur ({prayers.length})
                </h3>
                <span className="text-[10px] font-extrabold text-brand-teal-500 bg-brand-teal-50 px-2.5 py-1 rounded-full uppercase">Paling Syahdu</span>
              </div>

              {/* Input for a new prayer manually without having to donate */}
              <form onSubmit={handleAddLivePrayer} className="space-y-3">
                <textarea 
                  rows={2}
                  value={newPrayerText}
                  onChange={(e) => setNewPrayerText(e.target.value)}
                  placeholder="Tuliskan doa kebaikan atau kalimat penyemangat untuk santri di sini..."
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-teal-400 focus:outline-none text-xs sm:text-sm font-semibold text-brand-dark-900 bg-[#fafcfe]"
                />
                <div className="flex items-center justify-between gap-2">
                  <input 
                    type="text" 
                    placeholder="Nama Anda (Kosongkan jika Hamba Allah)"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="p-2 px-3 rounded-lg border border-gray-200 focus:border-brand-teal-400 focus:outline-none text-xs font-semibold text-brand-dark-900 max-w-[200px]"
                  />
                  <button 
                    type="submit"
                    className="py-2 px-4 rounded-xl bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-bold text-[11px] transition-colors cursor-pointer"
                  >
                    Kirim Doa
                  </button>
                </div>
              </form>
              
              {/* Prayer Listings */}
              <div className="space-y-4 pt-2">
                {prayers.map((p, i) => (
                  <div key={i} className="p-4 rounded-xl bg-brand-dark-50/50 border border-gray-100 flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-teal-50 text-brand-teal-600 font-bold text-xs flex items-center justify-center shrink-0">
                      {p.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-brand-dark-900">{p.name}</span>
                        <span className="text-[9px] text-gray-400 font-medium">{p.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 italic font-semibold leading-relaxed">
                        “{p.text}”
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COL: STICKY DONATION INTERACTIVE CARD (SPAN 5) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-md">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="donation-form"
                    onSubmit={handleSubmitDonation}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <span className="block text-[10px] font-extrabold text-brand-teal-500 tracking-wider uppercase mb-1">
                        DANA DIBUTUHKAN SISA
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 font-mono tracking-tight leading-none">
                        Rp {sisaKebutuhan.toLocaleString("id-ID")}
                      </h4>
                      
                      <div className="mt-4 flex items-center justify-between text-xs font-semibold text-gray-500">
                        <span>Terkumpul: <b className="text-[#0f766e] font-mono">Rp {campaign.currentAmount.toLocaleString("id-ID")}</b></span>
                        <span className="font-mono">{percent}%</span>
                      </div>
                      
                      {/* Budget Progress Bar */}
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-2">
                        <div 
                          className="bg-gradient-to-r from-brand-teal-500 via-brand-teal-400 to-brand-gold-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>

                      {/* Donor summary */}
                      <div className="flex items-center justify-between mt-3 text-[10px] text-gray-400 font-bold uppercase">
                        <span>{campaign.donorsCount} Orang Mujahid Muhsinin</span>
                        <span>Target: Rp {campaign.targetAmount.toLocaleString("id-ID")}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-5 space-y-4">
                      
                      {/* Presets Grid Selector */}
                      <div>
                        <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-2.5">
                          Pilih Nominal Cepat
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {presets.map((val) => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => handlePresetSelect(val)}
                              className={`py-2 px-1 text-center font-mono text-xs font-bold rounded-xl border transition-all ${
                                selectedPreset === val
                                  ? "bg-brand-teal-500 border-brand-teal-500 text-white shadow-md shadow-brand-teal-500/10"
                                  : "bg-brand-dark-50 border-gray-200 text-gray-600 hover:bg-white hover:border-brand-teal-300"
                              }`}
                            >
                              Rp {val.toLocaleString("id-ID").replace(",00", "")}
                            </button>
                          ))}
                          
                          {/* Custom Button state */}
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedPreset(null);
                              setCustomAmount("150000"); // initial fallback value
                            }}
                            className={`py-2 px-1 text-center text-[10px] font-bold rounded-xl border transition-all ${
                              selectedPreset === null
                                ? "bg-brand-teal-500 border-brand-teal-500 text-white"
                                : "bg-brand-dark-50 border-gray-200 text-gray-600 hover:bg-white"
                            }`}
                          >
                            Custom Nominal
                          </button>
                        </div>
                      </div>

                      {/* Input for custom nominal, visible only when selecting custom */}
                      {selectedPreset === null && (
                        <div className="transition-all duration-300">
                          <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                            Masukkan Nominal Kustom (Rp)
                          </label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-400">Rp</span>
                            <input 
                              type="number" 
                              min="1000"
                              placeholder="Ketik nominal Anda di sini"
                              value={customAmount}
                              onChange={handleCustomChange}
                              className="w-full text-xs font-mono font-bold p-3 pl-9 border border-brand-teal-200 focus:border-brand-teal-500 focus:outline-none rounded-xl"
                            />
                          </div>
                        </div>
                      )}

                      {validationError && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[11px] font-bold text-red-600 bg-red-50 border border-red-100 p-3 rounded-xl flex items-center gap-2"
                        >
                          <span className="shrink-0 text-red-500 font-extrabold font-mono">!</span>
                          <span>{validationError}</span>
                        </motion.div>
                      )}

                      {/* Donor Personal Data Input area */}
                      <div>
                        <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                          Nama Donatur (Sesuai KTP / Samaran)
                        </label>
                        <input 
                          type="text" 
                          placeholder="Masukkan nama donatur..."
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          disabled={isAnonymous}
                          className="w-full text-xs font-semibold p-3 border border-gray-200 focus:border-brand-teal-500 focus:outline-none rounded-xl bg-white disabled:bg-gray-50 disabled:text-gray-400"
                        />
                      </div>

                      {/* Sembunyikan nama saya checkmark */}
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

                    </div>

                    {/* Donasi Button Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:brightness-105 rounded-xl shadow-lg shadow-brand-teal-500/15 cursor-pointer hover:scale-[1.01] active:scale-99 transition-all"
                    >
                      <Heart className="h-4 w-4 fill-white" />
                      Lanjutkan Donasi (Rp {actualAmount.toLocaleString("id-ID")})
                    </button>

                    <div className="flex items-center justify-center gap-1 text-[9px] text-gray-400 font-bold uppercase text-center mt-3">
                      <Lock className="h-3 w-3 text-brand-teal-400" />
                      Proses Transaksi Aman Syariah & Dilindungi Enkripsi SSL
                    </div>

                  </motion.form>
                ) : (
                  
                  // SUCCESS SCREEN - MANUAL TRANSFER & STANDARDIZED QRIS INSTRUCTIONS
                  <motion.div 
                    key="donation-success"
                    className="space-y-6 text-center py-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-teal-50 text-brand-teal-500 flex items-center justify-center mx-auto border border-brand-teal-200">
                      <Check className="h-8 w-8 stroke-[3]" />
                    </div>
                    
                    <div>
                      <span className="text-[10px] font-extrabold text-brand-teal-500 bg-brand-teal-50 px-2.5 py-1 rounded-full uppercase">
                        BUKTI AKAD DONASI TERCATAT
                      </span>
                      <h4 className="text-lg font-bold text-brand-dark-900 mt-3">
                        Jazakumullah Khairan Katsiran!
                      </h4>
                      <p className="text-xs text-gray-500 font-semibold mt-1 leading-relaxed">
                        Terima kasih {isAnonymous ? "Hamba Allah" : donorName || "Hamba Allah"}, pendaftaran donasi Anda sebesar <b className="text-brand-teal-600 font-mono">Rp {donatedAmount.toLocaleString("id-ID")}</b> telah disimpan di sandbox simulator kami.
                      </p>
                    </div>

                    <div className="bg-[#f0f9fa] p-4 rounded-2xl border border-brand-teal-100/50 text-left space-y-3">
                      <span className="block text-[9px] font-extrabold text-brand-teal-500 uppercase tracking-widest border-b border-brand-teal-200 pb-1.5">
                        REKENING TRANSFER RESMI YAYASAN
                      </span>
                      
                      <div className="space-y-2 text-xs text-brand-dark-900 font-semibold">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Bank BSI Syariah (451)</span>
                          <span className="font-mono text-xs font-bold">789-2244-556</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Atas Nama</span>
                          <span>Yayasan Nurul Quran Lawang</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Nominal Transfer</span>
                          <span className="font-mono font-bold text-brand-teal-600">Rp {donatedAmount.toLocaleString("id-ID")}</span>
                        </div>
                      </div>
                    </div>

                    {/* QRIS Placeholder illustration */}
                    <div className="p-4 bg-white border border-gray-150 rounded-2xl flex flex-col items-center">
                      <div className="w-28 h-28 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-2 relative">
                        <span className="absolute text-[8px] font-extrabold text-white bg-brand-teal-500 px-1 py-0.2 rounded top-2">QRIS DIGITAL</span>
                        <div className="w-20 h-20 bg-brand-dark-900 flex flex-col justify-between p-1.5 rounded items-center">
                          <div className="w-full flex justify-between">
                            <span className="w-4 h-4 bg-white" />
                            <span className="w-4 h-4 bg-white" />
                          </div>
                          <span className="text-[6px] text-white tracking-widest leading-none font-bold uppercase">NURUL QURAN</span>
                          <div className="w-full flex justify-between">
                            <span className="w-4 h-4 bg-white" />
                            <span className="w-4 h-4 bg-white" />
                          </div>
                        </div>
                      </div>
                      <span className="text-[9px] font-extrabold text-[#0f766e] uppercase tracking-wider mt-2.5">
                        Scan QRIS Cepat (Bebas Potongan)
                      </span>
                    </div>

                    <div className="space-y-2">
                      <button 
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="w-full py-2.5 px-4 text-xs font-bold text-gray-500 hover:text-brand-dark-900 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all cursor-pointer"
                      >
                        Donasi Lagi
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
