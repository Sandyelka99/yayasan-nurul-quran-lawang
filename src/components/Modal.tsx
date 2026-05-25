import { useMemo, useState } from "react";

type ProgramLike = {
  title?: string;
  name?: string;
  programName?: string;
};

type ModalProps = {
  isOpen?: boolean;
  open?: boolean;
  show?: boolean;
  visible?: boolean;
  onClose?: () => void;
  closeModal?: () => void;
  program?: ProgramLike | string;
  selectedProgram?: ProgramLike | string;
  title?: string;
};

const quickAmounts = [50000, 100000, 250000, 500000, 1000000];

const paymentMethods = [
  {
    id: "qris",
    label: "QRIS Instant",
    bankName: "QRIS Yayasan",
    accountNumber: "Scan QRIS yang tersedia",
    accountHolder: "YAYASAN NURUL QURAN LAWANG",
  },
  {
    id: "bsi",
    label: "Bank BSI",
    bankName: "BANK BSI",
    accountNumber: "0000000000",
    accountHolder: "YAYASAN NURUL QURAN LAWANG",
  },
  {
    id: "mandiri",
    label: "Bank Mandiri",
    bankName: "BANK MANDIRI",
    accountNumber: "14400243000",
    accountHolder: "YAYASAN NURUL QURAN LAWANG",
  },
];

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

export default function Modal(props: ModalProps) {
  const isOpen =
    props.isOpen ?? props.open ?? props.show ?? props.visible ?? true;

  const closeModal = props.onClose ?? props.closeModal ?? (() => {});

  const programName = useMemo(() => {
    const selected = props.selectedProgram ?? props.program;

    if (typeof selected === "string") return selected;

    return (
      selected?.title ||
      selected?.name ||
      selected?.programName ||
      props.title ||
      "Donasi Pembangunan Pesantren"
    );
  }, [props.selectedProgram, props.program, props.title]);

  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [amount, setAmount] = useState<number>(100000);
  const [customAmount, setCustomAmount] = useState<string>("100000");
  const [donorName, setDonorName] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [donorPhone, setDonorPhone] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("mandiri");

  if (!isOpen) return null;

  const selectedPayment =
    paymentMethods.find((method) => method.id === paymentMethod) ||
    paymentMethods[2];

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount(String(value));
  };

  const handleCustomAmountChange = (value: string) => {
    const numericValue = Number(value.replace(/[^\d]/g, ""));
    setCustomAmount(value.replace(/[^\d]/g, ""));
    setAmount(numericValue);
  };

  const validateForm = () => {
    if (!amount || amount <= 0) {
      alert("Mohon isi nominal donasi terlebih dahulu.");
      return false;
    }

    if (!isAnonymous && !donorName.trim()) {
      alert("Mohon isi nama lengkap atau pilih Hamba Allah.");
      return false;
    }

    if (!donorPhone.trim()) {
      alert("Mohon isi nomor WhatsApp donatur terlebih dahulu.");
      return false;
    }

    return true;
  };

  const handleContinuePayment = () => {
    if (!validateForm()) return;
    setStep("payment");
  };

  const handleFinishConfirmation = () => {
    alert(
      "Terima kasih. Konfirmasi donasi Anda berhasil disiapkan. Pada versi produksi, data ini akan dikirim ke admin keuangan Yayasan Nurul Quran."
    );

    setStep("success");
  };

  const resetAndClose = () => {
    setStep("form");
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Formulir Donasi & Wakaf
            </h2>
            <p className="mt-1 text-sm font-medium text-cyan-700">
              Program: {programName}
            </p>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Tutup modal"
          >
            ×
          </button>
        </div>

        {step === "form" && (
          <div className="space-y-6 px-6 py-6">
            <div>
              <label className="mb-3 block font-semibold text-slate-900">
                Pilih Jumlah Donasi
              </label>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {quickAmounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleAmountClick(value)}
                    className={`rounded-xl border px-4 py-3 text-base font-bold transition ${
                      amount === value
                        ? "border-cyan-700 bg-cyan-700 text-white"
                        : "border-slate-200 bg-white text-slate-800 hover:border-cyan-600 hover:bg-cyan-50"
                    }`}
                  >
                    Rp {formatRupiah(value)}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setAmount(0);
                    setCustomAmount("");
                  }}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-bold text-slate-800 transition hover:border-cyan-600 hover:bg-cyan-50"
                >
                  Lainnya
                </button>
              </div>

              <div className="mt-3 flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="mr-3 font-bold text-slate-500">Rp</span>
                <input
                  type="number"
                  min={0}
                  value={customAmount}
                  onChange={(event) =>
                    handleCustomAmountChange(event.target.value)
                  }
                  className="w-full bg-transparent text-xl font-bold text-slate-900 outline-none"
                  placeholder="Masukkan nominal"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={isAnonymous ? "Hamba Allah" : donorName}
                onChange={(event) => setDonorName(event.target.value)}
                disabled={isAnonymous}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 disabled:bg-slate-100"
                placeholder="Masukkan nama lengkap Anda"
              />

              <label className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(event) => setIsAnonymous(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-cyan-700"
                />
                Sembunyikan nama saya (Hamba Allah)
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-slate-900">
                  Email (opsional)
                </label>
                <input
                  type="email"
                  value={donorEmail}
                  onChange={(event) => setDonorEmail(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  placeholder="nama@email.com (opsional)"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-slate-900">
                  No. WhatsApp
                </label>
                <input
                  type="tel"
                  value={donorPhone}
                  onChange={(event) => setDonorPhone(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  placeholder="Contoh: 081234..."
                />
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-4 text-sm leading-relaxed text-cyan-900">
              Setiap dana masuk dicatat secara amanah dan transparan. Laporan
              program akan diperbarui secara berkala oleh pengurus yayasan.
            </div>

            <button
              type="button"
              onClick={handleContinuePayment}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-700 to-teal-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-cyan-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Lanjutkan Pembayaran
            </button>
          </div>
        )}

        {step === "payment" && (
          <div className="space-y-6 px-6 py-6">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
                Metode Pembayaran
              </p>
              <p className="mt-2 text-slate-600">
                Silakan transfer nominal sesuai rincian di bawah.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                    paymentMethod === method.id
                      ? "border-cyan-700 bg-cyan-700 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-cyan-600 hover:bg-cyan-50"
                  }`}
                >
                  {method.label}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-sm font-semibold text-slate-500">
                  Jumlah Transfer
                </span>
                <span className="text-2xl font-black text-slate-900">
                  Rp {formatRupiah(amount)}
                </span>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Nama Bank
                  </p>
                  <p className="mt-1 font-bold text-slate-900">
                    {selectedPayment.bankName}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Nomor Rekening / Instruksi
                  </p>
                  <div className="mt-2 rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-lg font-bold text-cyan-800">
                    {selectedPayment.accountNumber}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Atas Nama
                  </p>
                  <p className="mt-1 font-bold text-slate-900">
                    {selectedPayment.accountHolder}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4 text-sm leading-relaxed text-amber-900">
              Setelah melakukan transfer atau scan QRIS, klik tombol selesai
              konfirmasi. Pada versi produksi, data akan otomatis dikirim ke
              admin keuangan yayasan.
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <button
                type="button"
                onClick={() => setStep("form")}
                className="rounded-xl border border-slate-200 px-5 py-4 font-bold text-slate-600 transition hover:bg-slate-50 md:col-span-1"
              >
                Kembali
              </button>

              <button
                type="button"
                onClick={handleFinishConfirmation}
                className="rounded-xl bg-gradient-to-r from-cyan-700 to-teal-600 px-5 py-4 font-bold text-white shadow-lg shadow-cyan-900/15 transition hover:-translate-y-0.5 hover:shadow-xl md:col-span-2"
              >
                Selesai Konfirmasi
              </button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="space-y-6 px-6 py-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-3xl">
              ✓
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Konfirmasi Berhasil Disiapkan
              </h3>
              <p className="mt-3 text-slate-600">
                Terima kasih. Pada versi produksi, data konfirmasi donasi akan
                dikirim ke admin keuangan Yayasan Nurul Quran untuk pencatatan.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 text-left">
              <p className="text-sm text-slate-500">Program</p>
              <p className="font-bold text-slate-900">{programName}</p>

              <p className="mt-3 text-sm text-slate-500">Nominal</p>
              <p className="font-bold text-slate-900">
                Rp {formatRupiah(amount)}
              </p>

              <p className="mt-3 text-sm text-slate-500">Nama Donatur</p>
              <p className="font-bold text-slate-900">
                {isAnonymous ? "Hamba Allah" : donorName}
              </p>

              <p className="mt-3 text-sm text-slate-500">Email</p>
              <p className="font-bold text-slate-900">
                {donorEmail.trim() ? donorEmail : "-"}
              </p>
            </div>

            <button
              type="button"
              onClick={resetAndClose}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-700 to-teal-600 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-900/15"
            >
              Tutup
            </button>
          </div>
        )}
      </div>
    </div>
  );
}