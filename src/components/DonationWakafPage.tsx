import { useState } from "react";
import { Heart, Target, Users, Wallet, ArrowRight } from "lucide-react";
import Modal from "./Modal";

const programs = [
  {
    title: "Donasi Pembangunan Pesantren",
    category: "Pembangunan",
    target: "Rp1.000.000.000",
    collected: "Rp780.000.000",
    progress: 78,
    description:
      "Dukungan pembangunan dan pengembangan fasilitas pesantren agar kegiatan pendidikan Al-Qur’an semakin nyaman dan bermanfaat.",
  },
  {
    title: "Wakaf Al-Qur’an",
    category: "Wakaf",
    target: "Rp100.000.000",
    collected: "Rp45.000.000",
    progress: 45,
    description:
      "Program wakaf mushaf Al-Qur’an untuk santri, rumah tahfidz, dan kegiatan pembelajaran Al-Qur’an.",
  },
  {
    title: "Orang Tua Asuh Penghafal Al-Qur’an",
    category: "Orang Tua Asuh",
    target: "Rp300.000.000",
    collected: "Rp120.000.000",
    progress: 40,
    description:
      "Dukungan rutin bagi anak-anak penghafal Al-Qur’an agar dapat belajar dengan lebih tenang dan terarah.",
  },
  {
    title: "Program Makan Santri",
    category: "Sosial",
    target: "Rp150.000.000",
    collected: "Rp65.000.000",
    progress: 43,
    description:
      "Mendukung kebutuhan konsumsi santri dalam kegiatan belajar, tahfidz, dan pembinaan harian.",
  },
  {
    title: "Sarana Belajar",
    category: "Pendidikan",
    target: "Rp200.000.000",
    collected: "Rp88.000.000",
    progress: 44,
    description:
      "Pengadaan perlengkapan belajar, rak kitab, meja belajar, alat tulis, dan fasilitas pendukung pendidikan.",
  },
  {
    title: "Operasional Dakwah Yayasan",
    category: "Dakwah",
    target: "Rp250.000.000",
    collected: "Rp90.000.000",
    progress: 36,
    description:
      "Mendukung kegiatan kajian, materi dakwah, pembinaan keluarga, dan program sosial yayasan.",
  },
];

export default function DonationWakafPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const openDonationModal = (programName: string) => {
    setSelectedProgram(programName);
  };

  const closeDonationModal = () => {
    setSelectedProgram(null);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-900 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <Heart className="h-4 w-4 fill-cyan-100" />
            Donasi • Wakaf • Amal Jariyah
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Dukung Pendidikan Qurani dan Dakwah Yayasan
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
            Salurkan donasi, wakaf, dan dukungan terbaik Anda untuk pembangunan,
            pendidikan Al-Qur’an, anak-anak penghafal Al-Qur’an, dan program
            sosial Yayasan Nurul Quran Lawang Malang.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => openDonationModal("Donasi Pembangunan Pesantren")}
              className="rounded-full bg-white px-7 py-4 font-bold text-cyan-900 shadow-lg transition hover:-translate-y-0.5"
            >
              Donasi Sekarang
            </button>

            <a
              href="/progress-pembangunan"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Lihat Progress
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Wallet, label: "Dana Terkumpul", value: "Rp780 Juta" },
            { icon: Users, label: "Donatur", value: "2.430" },
            { icon: Target, label: "Program Aktif", value: "12" },
            { icon: Heart, label: "Dukungan Berjalan", value: "68%" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-black text-slate-900">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="font-bold uppercase tracking-wide text-cyan-700">
            Program Donasi & Wakaf
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
            Pilih Program Kebaikan
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Setiap dukungan akan dicatat secara amanah dan ditampilkan dalam
            laporan transparansi program yayasan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-gradient-to-br from-cyan-900 to-teal-700 p-6 text-white">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
                  {program.category}
                </span>
                <h3 className="mt-5 text-2xl font-black">{program.title}</h3>
              </div>

              <div className="space-y-5 p-6">
                <p className="leading-relaxed text-slate-600">
                  {program.description}
                </p>

                <div>
                  <div className="mb-2 flex justify-between text-sm font-bold text-slate-600">
                    <span>Terkumpul</span>
                    <span>{program.progress}%</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-cyan-700"
                      style={{ width: `${program.progress}%` }}
                    />
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-slate-400">Target</p>
                      <p className="font-bold text-slate-900">
                        {program.target}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400">Terkumpul</p>
                      <p className="font-bold text-cyan-700">
                        {program.collected}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openDonationModal(program.title)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-700 to-teal-600 px-5 py-4 font-bold text-white shadow-lg shadow-cyan-900/15 transition hover:-translate-y-0.5"
                >
                  Donasi Program Ini
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProgram && (
        <Modal
          isOpen={Boolean(selectedProgram)}
          onClose={closeDonationModal}
          program={selectedProgram}
        />
      )}
    </main>
  );
}