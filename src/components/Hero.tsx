import { ArrowRight, BookOpen, Heart, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(135deg,transparent_24%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.2)_75%,rgba(255,255,255,.2)_76%,transparent_77%,transparent)] bg-[length:48px_48px]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-50 shadow-lg backdrop-blur">
          <BookOpen className="h-4 w-4 text-cyan-200" />
          بسم الله الرحمن الرحيم • Yayasan Nurul Quran
        </div>

        <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          Membangun{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
            Generasi Qurani
          </span>
          , Menebar Manfaat untuk Umat
        </h1>

        <div className="mx-auto mt-5 h-1 w-56 rounded-full bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-slate-200 md:text-xl">
          Yayasan Nurul Quran Lawang Malang menghadirkan bimbingan pendidikan
          Islam terpadu, tahfidz Al-Qur’an intensif, pembinaan usia dini
          tahfidz balita, serta program kemanusiaan sosial berbasis amanah dan
          akuntabilitas penuh.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            id="hero-donate"
            href="/donasi-wakaf"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-cyan-950 shadow-xl shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <Heart className="h-4 w-4 fill-cyan-700 text-cyan-700" />
            Donasi Sekarang
          </a>

          <a
            href="/orang-tua-asuh"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-700 to-teal-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <Users className="h-4 w-4" />
            Jadi Orang Tua Asuh
          </a>

          <a
            href="/unit-pendidikan"
            className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-extrabold text-white transition hover:bg-white/10"
          >
            Lihat Program Kami
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 text-xs font-medium text-slate-400">
          🔒 Pengelolaan dana syariah & transparan • Diaudit ikatan Akuntan
          Syariah Indonesia
        </div>
      </div>
    </section>
  );
}