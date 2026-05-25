/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Check, Copy, AlertCircle, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Campaign, FosterPackage } from "../types";
import { 
  WHATSAPP_FINANCE_PHONE, 
  generateWhatsAppURL, 
  generateDonationConfirmationMessage 
} from "../config";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign?: Campaign | null;
  fosterPackage?: FosterPackage | null;
  defaultTab?: "donation" | "foster";
}

export default function Modal({ isOpen, onClose, campaign, fosterPackage, defaultTab = "donation" }: ModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [amount, setAmount] = useState<string>(
    fosterPackage ? fosterPackage.price.toString() : "100000"
  );
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"qris" | "bsi" | "mandiri">("qris");
  const [copied, setCopied] = useState(false);
  const [customAmount, setCustomAmount] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const presetAmounts = ["50000", "100000", "250000", "500000", "1000000"];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseInt(amount) < 10000) {
      setValidationError("Amanah donasi minimal adalah Rp 10.000 agar dapat disalurkan secara efektif.");
      return;
    }
    setValidationError(null);
    setStep(2);
  };

  const resetForm = () => {
    setStep(1);
    setDonorName("");
    setEmail("");
    setPhone("");
    setIsAnonymous(false);
    setCopied(false);
    setValidationError(null);
  };

  const handleConfirmViaWhatsApp = () => {
    // Validasi data sebelum redirect WhatsApp
    if (!amount || parseInt(amount) < 10000) {
      setValidationError("Nominal donasi tidak valid.");
      return;
    }

    if (!donorName.trim() && !isAnonymous) {
      setValidationError("Nama donatur harus diisi atau pilih 'Hamba Allah'.");
      return;
    }

    if (!phone.trim()) {
      setValidationError("Nomor WhatsApp donatur wajib diisi.");
      return;
    }

    if (!paymentMethod) {
      setValidationError("Metode pembayaran harus dipilih.");
      return;
    }

    setIsProcessing(true);

    // Mapping nama program
    const programName = campaign?.title || fosterPackage?.name || "Program Donasi";

    // Mapping nama metode pembayaran
    const paymentMethodName = 
      paymentMethod === "qris" ? "QRIS Instant" :
      paymentMethod === "bsi" ? "Bank BSI" :
      "Bank Mandiri";

    // Nama donatur akhir (sesuai checkbox anonim)
    const finalDonorName = isAnonymous ? "Hamba Allah" : donorName.trim();

    // Generate pesan konfirmasi
    const message = generateDonationConfirmationMessage(
      programName,
      parseInt(amount),
      paymentMethodName,
      finalDonorName,
      email,
      phone
    );

    // Generate WhatsApp URL
    const whatsappURL = generateWhatsAppURL(WHATSAPP_FINANCE_PHONE, message);

    // Tunggu sedikit untuk UX yang lebih smooth
    setTimeout(() => {
      // Buka WhatsApp di tab/window baru dengan security parameters
      try {
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
      } catch (error) {
        console.error("Error opening WhatsApp URL:", error);
        setValidationError("Gagal membuka WhatsApp. Silakan coba lagi.");
        setIsProcessing(false);
        return;
      }
      
      // Tampilkan pesan terima kasih
      alert("Terima kasih! Anda akan diarahkan ke WhatsApp admin keuangan untuk konfirmasi donasi.");
      
      // Reset form dan tutup modal
      resetForm();
      onClose();
      setIsProcessing(false);
    }, 300);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-brand-dark-950/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="relative border-b border-gray-150 p-6">
            <h3 className="text-xl font-bold text-brand-dark-900 pr-8">
              {fosterPackage ? "Sponsori Anak Asuh" : "Formulir Donasi & Wakaf"}
            </h3>
            {campaign && (
              <p className="mt-1 text-sm font-medium text-brand-teal-500 line-clamp-1">
                Program: {campaign.title}
              </p>
            )}
            {fosterPackage && (
              <p className="mt-1 text-sm font-medium text-brand-teal-500">
                Sponsorship: {fosterPackage.name}
              </p>
            )}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-brand-dark-900 transition-colors"
              id="btn-close-modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {step === 1 ? (
            <form onSubmit={handleNext} className="p-6">
              {/* Amount input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-dark-900 mb-2">
                  {fosterPackage ? "Nominal Pembayaran Paket" : "Pilih Jumlah Donasi"}
                </label>
                
                {!fosterPackage && (
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => {
                          setAmount(preset);
                          setCustomAmount(false);
                        }}
                        className={`py-2 px-3 text-sm font-semibold rounded-lg border transition-all ${
                          amount === preset && !customAmount
                            ? "bg-brand-teal-500 border-brand-teal-500 text-white shadow-sm"
                            : "bg-white border-gray-200 text-brand-dark-900 hover:bg-gray-50"
                        }`}
                      >
                        Rp {parseInt(preset).toLocaleString("id-ID")}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setCustomAmount(true)}
                      className={`py-2 px-3 text-sm font-semibold rounded-lg border transition-all ${
                        customAmount
                          ? "bg-brand-teal-500 border-brand-teal-500 text-white shadow-sm"
                          : "bg-white border-gray-200 text-brand-dark-900 hover:bg-gray-50"
                      }`}
                    >
                      Lainnya
                    </button>
                  </div>
                )}

                {/* Amount field */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg text-brand-dark-900/60">
                    Rp
                  </span>
                  <input
                    type="number"
                    disabled={fosterPackage ? true : !customAmount && amount !== ""}
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setValidationError(null);
                    }}
                    className="w-full text-lg font-bold rounded-xl border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 text-brand-dark-900 transition-all focus:border-brand-teal-500 focus:bg-white focus:ring-2 focus:ring-brand-teal-500/20 outline-none"
                    placeholder="Minimal 10.000"
                    required
                  />
                  {fosterPackage && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-1 rounded bg-brand-teal-50 text-brand-teal-600">
                      /{fosterPackage.period}
                    </span>
                  )}
                </div>

                {validationError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs font-bold text-red-600 bg-red-50 border border-red-100 p-3 rounded-xl flex items-center gap-2"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{validationError}</span>
                  </motion.div>
                )}
              </div>

              {/* Personal details */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark-900 mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required={!isAnonymous}
                    disabled={isAnonymous}
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder={isAnonymous ? "Hamba Allah (Anonim)" : "Masukkan nama lengkap Anda"}
                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-brand-dark-900 transition-all focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/20 outline-none disabled:bg-gray-100 disabled:text-gray-400"
                  />
                  <div className="mt-2 flex items-center">
                    <input
                      type="checkbox"
                      id="anon"
                      checked={isAnonymous}
                      onChange={(e) => {
                        setIsAnonymous(e.target.checked);
                        if (e.target.checked) setDonorName("Hamba Allah");
                        else setDonorName("");
                      }}
                      className="rounded border-gray-300 text-brand-teal-500 focus:ring-brand-teal-500 h-4 w-4"
                    />
                    <label htmlFor="anon" className="ml-2 text-xs font-medium text-gray-600 select-none">
                      Sembunyikan nama saya (Hamba Allah)
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark-900 mb-1.5">
                      Email (opsional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@email.com (opsional)"
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-brand-dark-900 transition-all focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark-900 mb-1.5">
                      No. WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Contoh: 081234..."
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-brand-dark-900 transition-all focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/20 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Secure checkout info indicator */}
              <div className="mb-6 flex items-start gap-2.5 rounded-xl bg-brand-teal-50/50 border border-brand-teal-100 p-3.5">
                <AlertCircle className="h-5 w-5 text-brand-teal-500 shrink-0 mt-0.5" />
                <p className="text-xs text-brand-teal-800 leading-relaxed font-medium">
                  Setiap dana masuk dicatat secara syar'i dan transparan. Laporan audit berkala dikirimkan via email dan dipublikasikan di menu Progress.
                </p>
              </div>

              {/* Next Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all duration-300 shadow-md shadow-brand-teal-500/10 focus:ring-2 focus:ring-brand-teal-500/20"
                id="btn-modal-next"
              >
                <Heart className="h-4 w-4 fill-white" />
                Lanjutkan Pembayaran
              </button>
            </form>
          ) : (
            /* Step 2: Payment Details with Instructions */
            <div className="p-6">
              <div className="mb-5 text-center">
                <span className="text-xs font-semibold tracking-wider text-brand-teal-500 uppercase">
                  Metode Pembayaran
                </span>
                <p className="text-sm font-medium text-gray-500 mt-1">
                  Harap transfer nominal sesuai rincian di bawah
                </p>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { id: "qris", name: "QRIS Instant" },
                  { id: "bsi", name: "Bank BSI" },
                  { id: "mandiri", name: "Bank Mandiri" },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all ${
                      paymentMethod === m.id
                        ? "bg-brand-teal-500 border-brand-teal-500 text-white"
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>

              {/* Payment Detail Content */}
              <div className="rounded-2xl border border-gray-150 bg-gray-50 p-5 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200/60 mb-4">
                  <span className="text-xs font-semibold text-gray-500">Jumlah Transfer</span>
                  <span className="text-lg font-bold text-brand-dark-900 font-mono">
                    Rp {parseInt(amount).toLocaleString("id-ID")}
                  </span>
                </div>

                {paymentMethod === "qris" ? (
                  <div className="flex flex-col items-center">
                    {/* Fake QRIS QR Container */}
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-indigo-500" />
                      <div className="text-[9px] font-extrabold tracking-widest text-[#0c1c24] text-center mb-1">
                        QRIS GPN NASIONAL
                      </div>
                      <div className="bg-gray-150 p-2 border border-gray-100 flex items-center justify-center w-40 h-40">
                        {/* High Quality geometric SVG that looks like QR code */}
                        <svg className="w-full h-full text-brand-dark-900 border" viewBox="0 0 100 100" fill="currentColor">
                          <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="5" />
                          <rect x="10" y="10" width="15" height="15" />
                          <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="5" />
                          <rect x="75" y="10" width="15" height="15" />
                          <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="5" />
                          <rect x="10" y="75" width="15" height="15" />
                          {/* Random noise bits */}
                          <rect x="40" y="10" width="8" height="8" />
                          <rect x="50" y="20" width="10" height="10" />
                          <rect x="40" y="40" width="15" height="15" />
                          <rect x="70" y="40" width="8" height="8" />
                          <rect x="10" y="40" width="12" height="12" />
                          <rect x="45" y="70" width="10" height="20" />
                          <rect x="75" y="75" width="15" height="15" />
                        </svg>
                      </div>
                      <div className="text-[8px] font-bold text-center text-gray-400 mt-2">
                        Scan QR menggunakan E-Wallet / Mobile Banking
                      </div>
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-3 leading-relaxed">
                      Atas Nama: <strong className="text-brand-dark-900">YAYASAN NURUL QURAN LAWANG</strong>
                    </p>
                  </div>
                ) : (
                  <div>
                    {/* Bank Transfer Details */}
                    <div className="space-y-3.5">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">
                          NAMA BANK
                        </span>
                        <span className="text-sm font-bold text-brand-dark-900">
                          {paymentMethod === "bsi"
                            ? "BANK SYARIAH INDONESIA (BSI)"
                            : "BANK MANDIRI"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">
                          NOMOR REKENING
                        </span>
                        <div className="flex items-center justify-between mt-1 rounded-lg border border-gray-200 bg-white px-3 py-2.5">
                          <span className="font-mono text-base font-bold text-brand-teal-600">
                            {paymentMethod === "bsi" ? "4510001245" : "14400243000"}
                          </span>
                          <button
                            onClick={() => handleCopy(paymentMethod === "bsi" ? "4510001245" : "14400243000")}
                            className="flex items-center gap-1 text-xs font-bold text-brand-teal-500 hover:text-brand-teal-600 cursor-pointer"
                          >
                            {copied ? (
                              <>
                                <Check className="h-3 w-3 text-green-500" />
                                <span className="text-green-500 text-[10px]">Tersalin</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5" />
                                <span className="text-[10px]">Salin</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">
                          ATAS NAMA YAYASAN
                        </span>
                        <span className="text-xs font-bold text-brand-dark-900">
                          YAYASAN NURUL QURAN LAWANG
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirmation instruction */}
              <div className="mb-6 rounded-xl bg-orange-50 border border-orange-100 p-4 text-xs text-orange-800 leading-relaxed font-medium">
                PENTING: Setelah menyalurkan dana Anda, mohon kirim bukti transfer ke nomor WhatsApp resmi kami <strong>+62 822-3401-2041</strong> agar dicatat sebagai mutasi program {fosterPackage ? "Orang Tua Asuh" : "Donasi"}.
              </div>

              <div className="mb-6 rounded-xl bg-brand-teal-50/50 border border-brand-teal-200/50 p-4 text-xs text-brand-teal-700 leading-relaxed font-semibold">
                💡 Setelah melakukan transfer/scan QRIS, klik tombol konfirmasi agar admin keuangan dapat mencatat donasi Anda dengan segera.
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 border border-gray-200 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-all text-sm"
                >
                  Kembali
                </button>
                <button
                  onClick={handleConfirmViaWhatsApp}
                  disabled={isProcessing}
                  className="w-2/3 py-3 rounded-xl font-bold text-white bg-brand-teal-500 hover:bg-brand-teal-600 disabled:bg-gray-400 shadow-lg shadow-brand-teal-500/10 transition-all text-sm flex justify-center items-center gap-2 disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" />
                      Konfirmasi via WhatsApp
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
