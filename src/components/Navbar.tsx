import { useState } from "react";
import { Menu, X, Heart, Settings } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Yayasan", href: "/tentang-yayasan" },
  { label: "Unit Pendidikan", href: "/unit-pendidikan" },
  { label: "Donasi & Wakaf", href: "/donasi-wakaf" },
  { label: "Orang Tua Asuh", href: "/orang-tua-asuh" },
  { label: "Progress", href: "/progress-pembangunan" },
  { label: "Dakwah", href: "/dakwah" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center">
          <img
            src="/logo-nurul-quran.png"
            alt="Logo Yayasan Nurul Quran Lawang Malang"
            className="h-16 w-auto object-contain sm:h-18 md:h-20 lg:h-24"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/admin"
            className="flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <Settings className="h-4 w-4" />
            Admin
          </a>

          <a
            href="/donasi-wakaf"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-700 to-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Heart className="h-4 w-4 fill-white" />
            Donasi Sekarang
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <Settings className="h-4 w-4" />
              Admin
            </a>

            <a
              href="/donasi-wakaf"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-700 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg"
            >
              <Heart className="h-4 w-4 fill-white" />
              Donasi Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}