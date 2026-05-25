import {
  BookOpen,
  Video,
  FileText,
  CalendarDays,
  Download,
  Megaphone,
  Star,
  ShieldCheck,
} from "lucide-react";

export default function DakwahPage() {
  const articles = [
    {
      title: "Menumbuhkan Cinta Al-Qur’an Sejak Dini",
      category: "Al-Qur’an",
      summary:
        "Langkah sederhana bagi keluarga untuk mengenalkan Al-Qur’an dalam keseharian anak.",
    },
    {
      title: "Adab Sebelum Ilmu",
      category: "Adab",
      summary:
        "Mengapa adab menjadi pondasi penting dalam proses belajar dan menghafal.",
    },
    {
      title: "Membantu Anak Murajaah di Rumah",
      category: "Parenting Islami",
      summary:
        "Tips ringan agar orang tua dapat mendampingi hafalan anak dengan lembut dan konsisten.",
    },
    {
      title: "Menjaga Hafalan dengan Murajaah",
      category: "Tahfidz",
      summary:
        "Hafalan Al-Qur’an membutuhkan pengulangan yang terarah dan suasana yang baik.",
    },
    {
      title: "Membiasakan Doa Harian pada Anak",
      category: "Fiqih Dasar",
      summary:
        "Mengenalkan doa harian sebagai bagian dari pembiasaan ibadah di rumah.",
    },
    {
      title: "Sedikit Tapi Rutin",
      category: "Nasihat Ringkas",
      summary:
        "Amalan kecil yang dijaga terus-menerus dapat membentuk kebiasaan baik.",
    },
  ];

  const schedules = [
    {
      date: "Sabtu, 8 Juni 2026",
      title: "Mendidik Anak Dekat dengan Al-Qur’an",
      speaker: "Asatidzah Yayasan Nurul Quran",
      location: "Aula Yayasan",
    },
    {
      date: "Ahad, 16 Juni 2026",
      title: "Adab Penuntut Ilmu",
      speaker: "Asatidzah Yayasan Nurul Quran",
      location: "Online / YouTube",
    },
    {
      date: "Sabtu, 22 Juni 2026",
      title: "Menjaga Hafalan dengan Murajaah",
      speaker: "Tim Tahfidz",
      location: "Rumah Tahfizz",
    },
    {
      date: "Ahad, 30 Juni 2026",
      title: "Peran Orang Tua dalam Pendidikan Qurani",
      speaker: "Yayasan Nurul Quran",
      location: "Aula Yayasan",
    },
  ];

  const materials = [
    {
      title: "Panduan Murajaah Anak di Rumah",
      category: "Tahfidz",
    },
    {
      title: "10 Adab Penuntut Ilmu",
      category: "Adab",
    },
    {
      title: "Checklist Hafalan Surat Pendek",
      category: "Tahfidz",
    },
    {
      title: "Doa Harian untuk Anak",
      category: "Fiqih Dasar",
    },
    {
      title: "Panduan Mendampingi Anak Belajar",
      category: "Parenting Islami",
    },
    {
      title: "Ringkasan Kajian Pendidikan Qurani",
      category: "Kajian",
    },
  ];

  const posters = [
    {
      title: "Cintai Al-Qur’an",
      quote:
        "Dekatkan hati dengan Al-Qur’an, mulai dari membaca dan mengulanginya setiap hari.",
    },
    {
      title: "Adab Sebelum Ilmu",
      quote: "Ilmu yang baik tumbuh di atas adab yang baik.",
    },
    {
      title: "Murajaah Itu Menjaga",
      quote:
        "Hafalan dijaga dengan pengulangan yang sabar dan terarah.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-900 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <BookOpen className="h-4 w-4" />
            Pendidikan • Dakwah • Amal Jariyah
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Dakwah Digital Yayasan Nurul Quran
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
            Ruang dakwah, faedah ilmu, kajian, dan materi pembelajaran Islam
            yang disusun untuk membantu keluarga, santri, dan masyarakat semakin
            dekat dengan Al-Qur’an dan adab.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#faedah"
              className="rounded-full bg-white px-7 py-4 font-bold text-cyan-900 shadow-lg transition hover:-translate-y-0.5"
            >
              Baca Faedah
            </a>
            <a
              href="#kajian"
              className="rounded-full bg-cyan-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Lihat Kajian
            </a>
            <a
              href="/donasi-wakaf"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Dukung Dakwah
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Faedah Ilmu",
              desc: "Ringkasan nasihat, artikel, dan pembelajaran Islam yang mudah dibaca.",
            },
            {
              icon: Video,
              title: "Kajian & Pembelajaran",
              desc: "Siaran kajian, nasihat, dan pembelajaran yang dapat disaksikan kembali.",
            },
            {
              icon: FileText,
              title: "Materi Dakwah",
              desc: "Poster, PDF, dan bahan belajar yang dapat diunduh dan dibagikan.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="faedah" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-bold uppercase tracking-wide text-cyan-700">
            Artikel & Faedah
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
            Catatan Ringkas untuk Keluarga dan Santri
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Catatan ringkas seputar Al-Qur’an, adab, pendidikan anak, tahfidz,
            dan nasihat harian.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
            >
              <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                {article.category}
              </span>
              <h3 className="mt-5 text-xl font-black text-slate-900">
                {article.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {article.summary}
              </p>
              <button
                type="button"
                onClick={() =>
                  alert("Artikel ringkas akan tersedia pada versi produksi.")
                }
                className="mt-6 font-bold text-cyan-700 hover:text-cyan-900"
              >
                Baca Ringkas →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="kajian" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-wide text-cyan-700">
              Kajian YouTube
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
              Kajian & Siaran Dakwah
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Kajian dan pembelajaran yang dapat disaksikan kembali melalui
              kanal YouTube yayasan.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-lg">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Kajian Pendidikan Qurani dan Adab Anak"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-5 text-2xl font-black text-slate-900">
                Kajian Pendidikan Qurani dan Adab Anak
              </h3>
              <p className="mt-2 text-slate-600">
                Link video ini masih contoh dan akan diganti dengan kanal resmi
                yayasan.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Keutamaan Belajar Al-Qur’an",
                "Adab Penuntut Ilmu",
                "Mendidik Anak dengan Kelembutan",
                "Pentingnya Murajaah",
              ].map((title) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                    <Video className="h-5 w-5" />
                  </div>
                  <h4 className="font-black text-slate-900">{title}</h4>
                  <p className="mt-1 text-sm text-slate-500">Kajian pilihan</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <CalendarDays className="h-7 w-7 text-cyan-700" />
              <h2 className="text-3xl font-black text-slate-900">
                Jadwal Kajian
              </h2>
            </div>

            <div className="space-y-4">
              {schedules.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
                >
                  <p className="text-sm font-bold text-cyan-700">{item.date}</p>
                  <h3 className="mt-2 text-lg font-black text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{item.speaker}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  <button
                    type="button"
                    onClick={() =>
                      alert("Fitur pengingat kajian akan tersedia pada versi produksi.")
                    }
                    className="mt-4 rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700 hover:bg-cyan-100"
                  >
                    Ingatkan Saya
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3">
              <Download className="h-7 w-7 text-cyan-700" />
              <h2 className="text-3xl font-black text-slate-900">
                Materi Download
              </h2>
            </div>

            <div className="grid gap-4">
              {materials.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() =>
                    alert(
                      "Materi download akan tersedia setelah file resmi yayasan diunggah."
                    )
                  }
                  className="flex items-center justify-between rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-100 transition hover:bg-cyan-50"
                >
                  <span>
                    <span className="block font-bold text-slate-800">
                      {item.title}
                    </span>
                    <span className="text-sm text-slate-500">{item.category}</span>
                  </span>
                  <FileText className="h-5 w-5 text-cyan-700" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-wide text-cyan-700">
              Poster Dakwah
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
              Poster Nasihat Ringkas
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {posters.map((poster) => (
              <div
                key={poster.title}
                className="rounded-3xl bg-gradient-to-br from-cyan-900 to-teal-700 p-8 text-white shadow-lg"
              >
                <Star className="h-8 w-8 text-cyan-100" />
                <h3 className="mt-6 text-2xl font-black">{poster.title}</h3>
                <p className="mt-4 leading-relaxed text-cyan-50">
                  “{poster.quote}”
                </p>
                <button
                  type="button"
                  onClick={() =>
                    alert("Fitur berbagi poster akan tersedia pada versi produksi.")
                  }
                  className="mt-6 rounded-full bg-white px-5 py-3 font-bold text-cyan-900"
                >
                  Bagikan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-cyan-700" />
            <h2 className="text-3xl font-black text-slate-900">
              Tanya Jawab Ringan
            </h2>
          </div>

          <div className="mt-8 space-y-5">
            {[
              {
                q: "Bagaimana membiasakan anak membaca Al-Qur’an?",
                a: "Mulai dari waktu yang singkat, suasana yang lembut, dan pendampingan yang konsisten.",
              },
              {
                q: "Apa perbedaan tahsin dan tahfidz?",
                a: "Tahsin berfokus pada perbaikan bacaan, sedangkan tahfidz berfokus pada hafalan Al-Qur’an.",
              },
              {
                q: "Apakah materi dakwah bisa dibagikan?",
                a: "Materi dakwah dapat dibagikan selama menjaga adab, sumber, dan tidak mengubah isi secara tidak tepat.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-slate-100 pb-5">
                <h3 className="font-black text-slate-900">{item.q}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-2xl bg-cyan-50 p-4 text-sm leading-relaxed text-cyan-900">
            Untuk pertanyaan fikih yang membutuhkan rincian, silakan merujuk
            kepada asatidzah yang berkompeten.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-cyan-900 to-teal-800 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Megaphone className="mx-auto h-10 w-10 text-cyan-100" />
          <h2 className="mt-6 text-3xl font-black md:text-5xl">
            Dukung Dakwah dan Pendidikan Qurani
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-cyan-50">
            Setiap dukungan Anda membantu Yayasan Nurul Quran menghadirkan
            pendidikan, kajian, materi dakwah, dan program sosial yang lebih
            bermanfaat.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/donasi-wakaf"
              className="rounded-full bg-white px-7 py-4 font-bold text-cyan-900"
            >
              Donasi Dakwah
            </a>
            <a
              href="/orang-tua-asuh"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white"
            >
              Jadi Orang Tua Asuh
            </a>
            <a
              href="/kontak"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white"
            >
              Hubungi Admin
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}