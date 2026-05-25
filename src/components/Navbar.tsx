import { useRef, useState } from "react";
import {
  BookOpen,
  ChevronDown,
  FileText,
  HandHeart,
  Heart,
  Menu,
  Megaphone,
  X,
} from "lucide-react";

type NavbarProps = {
  activeView?: string;
  onNavigate?: (view: string) => void;
  onOpenDonationModal?: () => void;
};

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

type NavItem = {
  id: string;
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  { id: "home", label: "Beranda", href: "/" },
  { id: "about", label: "Tentang Yayasan", href: "/tentang-yayasan" },
  {
    id: "education",
    label: "Pendidikan",
    href: "/pendidikan",
    dropdown: [
      {
        label: "Semua Pendidikan",
        href: "/pendidikan",
        description: "Lihat seluruh program pendidikan yayasan.",
      },
      {
        label: "Nurul Quran Learning Center",
        href: "/pendidikan",
        description: "Bimbingan belajar dan pembinaan karakter Islami.",
      },
      {
        label: "Nurul Quran Tahfidz Center",
        href: "/pendidikan",
        description: "Tahfidz, tahsin, setoran, dan murojaah.",
      },
      {
        label: "Rumah Tahfidz Balita",
        href: "/pendidikan",
        description: "Pembinaan Al-Qur’an sejak usia dini.",
      },
    ],
  },
  {
    id: "donation",
    label: "Donasi & Wakaf",
    href: "/donasi-wakaf",
    dropdown: [
      {
        label: "Semua Donasi & Wakaf",
        href: "/donasi-wakaf",
        description: "Seluruh program donasi dan wakaf yayasan.",
      },
      {
        label: "Donasi Pembangunan",
        href: "/donasi-wakaf",
        description: "Dukungan pembangunan fasilitas yayasan.",
      },
      {
        label: "Wakaf Al-Qur’an",
        href: "/donasi-wakaf",
        description: "Pengadaan dan penyaluran mushaf Al-Qur’an.",
      },
      {
        label: "Program Sosial",
        href: "/donasi-wakaf",
        description: "Program kepedulian santri dan masyarakat.",
      },
      {
        label: "Orang Tua Asuh",
        href: "/orang-tua-asuh",
        description: "Dukungan rutin bagi anak-anak penghafal Al-Qur’an.",
      },
    ],
  },
  {
    id: "reports",
    label: "Laporan",
    href: "/laporan",
    dropdown: [
      {
        label: "Semua Laporan",
        href: "/laporan",
        description: "Pusat laporan dan transparansi yayasan.",
      },
      {
        label: "Laporan Pembangunan",
        href: "/laporan",
        description: "Perkembangan pembangunan fasilitas yayasan.",
      },
      {
        label: "Laporan Donasi",
        href: "/laporan",
        description: "Ringkasan penerimaan dan penyaluran donasi.",
      },
      {
        label: "Laporan Program",
        href: "/laporan",
        description: "Capaian program pendidikan, sosial, dan dakwah.",
      },
      {
        label: "Laporan Dakwah",
        href: "/laporan",
        description: "Rekap kegiatan dakwah dan kajian digital.",
      },
    ],
  },
  {
    id: "dakwah",
    label: "Dakwah Digital",
    href: "/dakwah-digital",
    dropdown: [
      {
        label: "Semua Dakwah Digital",
        href: "/dakwah-digital",
        description: "Pusat artikel, kajian, poster, dan materi dakwah.",
      },
      {
        label: "Artikel Dakwah",
        href: "/dakwah-digital",
        description: "Tulisan ringan dan edukatif untuk umat.",
      },
      {
        label: "Kajian YouTube",
        href: "/dakwah-digital",
        description: "Video kajian dan materi pembinaan.",
      },
      {
        label: "Jadwal Kajian",
        href: "/dakwah-digital",
        description: "Agenda kajian dan kegiatan dakwah.",
      },
      {
        label: "Materi Download",
        href: "/dakwah-digital",
        description: "Materi dakwah yang dapat diunduh dan dibagikan.",
      },
    ],
  },
  { id: "gallery", label: "Galeri", href: "/galeri" },
  { id: "contact", label: "Kontak", href: "/kontak" },
];

function getViewFromHref(href: string) {
  if (href === "/") return "home";
  if (href === "/tentang-yayasan") return "about";
  if (href === "/pendidikan" || href === "/unit-pendidikan") return "units";
  if (href === "/donasi-wakaf") return "donation";
  if (href === "/orang-tua-asuh") return "foster-parent";
  if (href === "/laporan" || href === "/progress-pembangunan") return "progress";
  if (href === "/dakwah-digital" || href === "/dakwah") return "dakwah";
  if (href === "/galeri") return "gallery";
  if (href === "/kontak") return "contact";
  return "home";
}

function isItemActive(item: NavItem, activeView?: string) {
  if (!activeView) return false;

  if (item.id === "home" && activeView === "home") return true;
  if (item.id === "about" && activeView === "about") return true;
  if (item.id === "education" && activeView === "units") return true;
  if (item.id === "donation" && (activeView === "donation" || activeView === "foster-parent")) return true;
  if (item.id === "reports" && activeView === "progress") return true;
  if (item.id === "dakwah" && activeView === "dakwah") return true;
  if (item.id === "gallery" && activeView === "gallery") return true;
  if (item.id === "contact" && activeView === "contact") return true;

  return false;
}

export default function Navbar({
  activeView,
  onNavigate,
  onOpenDonationModal,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const navigateTo = (href: string) => {
    const view = getViewFromHref(href);

    if (onNavigate) {
      onNavigate(view);
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    } else {
      window.location.href = href;
    }

    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  };

  const openDropdown = (id: string) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(id);
  };

  const closeDropdownWithDelay = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
    }

    closeTimer.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const handleDonationClick = () => {
    if (onOpenDonationModal) {
      onOpenDonationModal();
      return;
    }

    navigateTo("/donasi-wakaf");
  };

  return (
    <header className="sticky top-0 z-[999] w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigateTo("/")}
          className="flex shrink-0 items-center"
          aria-label="Kembali ke Beranda"
        >
          <img
            src="/logo-nurul-quran-final.png"
            alt="Logo Nurul Quran"
            className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </button>

        <nav className="hidden items-center gap-1 whitespace-nowrap lg:flex">
          {navItems.map((item) => {
            const active = isItemActive(item, activeView);
            const hasDropdown = Boolean(item.dropdown?.length);

            if (!hasDropdown) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTo(item.href)}
                  className={`rounded-xl px-3 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                  }`}
                >
                  {item.label}
                </button>
              );
            }

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => openDropdown(item.id)}
                onMouseLeave={closeDropdownWithDelay}
              >
                <button
                  type="button"
                  onClick={() => navigateTo(item.href)}
                  className={`flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition ${
                      activeDropdown === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div className="absolute left-0 top-full h-3 w-full" />

                {activeDropdown === item.id && (
                  <div
                    className="absolute left-0 top-full z-[999] mt-3 w-80 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-slate-100"
                    onMouseEnter={() => openDropdown(item.id)}
                    onMouseLeave={closeDropdownWithDelay}
                  >
                    {item.dropdown?.map((dropdownItem) => (
                      <button
                        key={dropdownItem.label}
                        type="button"
                        onClick={() => navigateTo(dropdownItem.href)}
                        className="block w-full rounded-xl px-4 py-3 text-left transition hover:bg-cyan-50"
                      >
                        <span className="block text-sm font-extrabold text-slate-800">
                          {dropdownItem.label}
                        </span>
                        {dropdownItem.description && (
                          <span className="mt-1 block text-xs leading-relaxed text-slate-500">
                            {dropdownItem.description}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={handleDonationClick}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-700 to-teal-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-cyan-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Heart className="h-4 w-4 fill-white" />
            Donasi Sekarang
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
          aria-label="Buka menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="space-y-2">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.dropdown?.length);
              const active = isItemActive(item, activeView);

              if (!hasDropdown) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateTo(item.href)}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-bold ${
                      active
                        ? "bg-cyan-50 text-cyan-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <div key={item.id} className="rounded-xl border border-slate-100">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileDropdown((prev) => (prev === item.id ? null : item.id))
                    }
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold ${
                      active ? "text-cyan-700" : "text-slate-700"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        mobileDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileDropdown === item.id && (
                    <div className="border-t border-slate-100 bg-slate-50 p-2">
                      <button
                        type="button"
                        onClick={() => navigateTo(item.href)}
                        className="block w-full rounded-lg px-3 py-2 text-left text-sm font-bold text-cyan-700"
                      >
                        Buka {item.label}
                      </button>

                      {item.dropdown?.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          type="button"
                          onClick={() => navigateTo(dropdownItem.href)}
                          className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-white"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <button
              type="button"
              onClick={handleDonationClick}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-700 to-teal-600 px-5 py-4 text-sm font-extrabold text-white"
            >
              <Heart className="h-4 w-4 fill-white" />
              Donasi Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
}