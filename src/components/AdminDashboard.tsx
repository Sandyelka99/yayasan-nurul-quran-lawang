import { useState } from "react";
import {
  LayoutDashboard,
  HandHeart,
  Users,
  UserRound,
  Building2,
  Image,
  BookOpen,
  Video,
  CalendarDays,
  FileText,
  Settings,
  Home,
  Menu,
  X,
  LogOut,
  Upload,
  Download,
  Plus,
  Edit,
  Eye,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Program Donasi", path: "/admin/program-donasi", icon: HandHeart },
  { label: "Donatur", path: "/admin/donatur", icon: Users },
  { label: "Orang Tua Asuh", path: "/admin/orang-tua-asuh", icon: UserRound },
  { label: "Anak Asuh", path: "/admin/anak-asuh", icon: UserRound },
  { label: "Progress", path: "/admin/progress", icon: Building2 },
  { label: "Galeri", path: "/admin/galeri", icon: Image },
  { label: "Asatidzah", path: "/admin/asatidzah", icon: Users },
  { label: "Dakwah Digital", path: "/admin/dakwah", icon: BookOpen },
  { label: "Kajian YouTube", path: "/admin/kajian-youtube", icon: Video },
  { label: "Jadwal Kajian", path: "/admin/jadwal-kajian", icon: CalendarDays },
  { label: "Materi Download", path: "/admin/materi-download", icon: FileText },
  { label: "Poster Dakwah", path: "/admin/poster-dakwah", icon: Image },
  { label: "Laporan", path: "/admin/laporan", icon: FileText },
  { label: "Laporan Keuangan", path: "/admin/laporan-keuangan", icon: FileText },
  { label: "Laporan Program", path: "/admin/laporan-program", icon: FileText },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const summaryCards = [
  { label: "Total Donasi", value: "Rp780 Juta", note: "Dana terkumpul" },
  { label: "Donatur", value: "2.430", note: "Total pendukung" },
  { label: "Program Aktif", value: "12", note: "Donasi & wakaf" },
  { label: "Anak Asuh", value: "86", note: "Dukungan aktif" },
  { label: "Progress Pembangunan", value: "68%", note: "Progress fisik" },
  { label: "Artikel Dakwah", value: "12", note: "Konten terbit" },
  { label: "Video Kajian", value: "24", note: "Video tersedia" },
  { label: "Laporan Terbit", value: "8", note: "Laporan publish" },
];

const latestDonations = [
  ["Hamba Allah", "Pembangunan Pesantren", "Rp1.000.000", "Berhasil"],
  ["Abdullah", "Wakaf Al-Qur’an", "Rp250.000", "Berhasil"],
  ["Ummu Maryam", "Orang Tua Asuh", "Rp300.000", "Berhasil"],
  ["Hamba Allah", "Program Makan Santri", "Rp150.000", "Berhasil"],
];

const genericRows = [
  ["Pembangunan Pesantren", "Donasi & Wakaf", "Aktif", "Edit"],
  ["Wakaf Al-Qur’an", "Wakaf", "Aktif", "Edit"],
  ["Program Makan Santri", "Sosial", "Aktif", "Edit"],
  ["Artikel Dakwah", "Dakwah Digital", "Draft", "Edit"],
  ["Laporan Bulanan", "Laporan", "Published", "Lihat"],
];

function goTo(path: string) {
  window.location.href = path;
}

function dummyAlert() {
  alert("Fitur ini akan aktif setelah integrasi backend.");
}

function getTitle(pathname: string) {
  if (pathname.includes("program-donasi")) return "Program Donasi";
  if (pathname.includes("donatur")) return "Data Donatur";
  if (pathname.includes("orang-tua-asuh")) return "Orang Tua Asuh";
  if (pathname.includes("anak-asuh")) return "Anak Asuh";
  if (pathname.includes("progress")) return "Progress Pembangunan";
  if (pathname.includes("galeri")) return "Galeri";
  if (pathname.includes("asatidzah")) return "Asatidzah";
  if (pathname.includes("kajian-youtube")) return "Kajian YouTube";
  if (pathname.includes("jadwal-kajian")) return "Jadwal Kajian";
  if (pathname.includes("materi-download")) return "Materi Download";
  if (pathname.includes("poster-dakwah")) return "Poster Dakwah";
  if (pathname.includes("laporan-keuangan")) return "Laporan Keuangan";
  if (pathname.includes("laporan-program")) return "Laporan Program";
  if (pathname.includes("laporan")) return "Pusat Laporan";
  if (pathname.includes("settings")) return "Settings Website";
  if (pathname.includes("dakwah")) return "Dakwah Digital";
  return "Dashboard";
}

function AdminLogin() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      goTo("/admin/dashboard");
    } else {
      alert("Username atau password belum sesuai.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-900 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <img
            src="/logo-nurul-quran.png"
            alt="Logo Yayasan Nurul Quran"
            className="mx-auto h-24 w-auto object-contain"
          />

          <h1 className="mt-6 text-2xl font-black text-slate-900">
            Admin Yayasan Nurul Quran
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Masuk untuk mengelola konten website, program, laporan, dan dakwah digital.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
              placeholder="admin123"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-700 to-teal-600 px-5 py-4 font-bold text-white shadow-lg"
          >
            Masuk Dashboard
          </button>

          <p className="rounded-xl bg-cyan-50 p-3 text-center text-xs text-cyan-800">
            Login ini masih dummy untuk kebutuhan prototype.
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={dummyAlert}
        className="inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-4 py-2 text-sm font-bold text-white"
      >
        <Plus className="h-4 w-4" />
        Tambah Data
      </button>

      <button
        type="button"
        onClick={dummyAlert}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700"
      >
        <Upload className="h-4 w-4" />
        Upload
      </button>

      <button
        type="button"
        onClick={dummyAlert}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700"
      >
        <Download className="h-4 w-4" />
        Export
      </button>
    </div>
  );
}

function DashboardHome() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">
          Dashboard Admin
        </h1>
        <p className="mt-1 text-slate-500">
          Ringkasan pengelolaan website, donasi, dakwah, dan laporan yayasan.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
          >
            <p className="text-sm font-bold text-slate-500">{card.label}</p>
            <p className="mt-3 text-2xl font-black text-slate-900">{card.value}</p>
            <p className="mt-1 text-xs font-medium text-cyan-700">{card.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-black text-slate-900">
            Perkembangan Donasi Bulanan
          </h2>

          <div className="mt-6 space-y-4">
            {[
              ["Januari", 35],
              ["Februari", 55],
              ["Maret", 65],
              ["April", 78],
              ["Mei", 90],
            ].map(([month, percent]) => (
              <div key={month as string}>
                <div className="mb-2 flex justify-between text-sm font-bold text-slate-600">
                  <span>{month}</span>
                  <span>{percent}%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-cyan-700"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-black text-slate-900">Donasi Terbaru</h2>

          <div className="mt-5 space-y-4">
            {latestDonations.map((item) => (
              <div key={item.join("-")} className="rounded-xl bg-slate-50 p-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-900">{item[0]}</p>
                    <p className="text-sm text-slate-500">{item[1]}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-cyan-700">{item[2]}</p>
                    <p className="text-xs text-emerald-600">{item[3]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <h2 className="text-xl font-black text-slate-900">Quick Actions</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Tambah Program Donasi",
            "Upload Progress",
            "Tambah Galeri",
            "Tambah Artikel Dakwah",
            "Tambah Video Kajian",
            "Buat Laporan",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={dummyAlert}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-left font-bold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function GenericAdminPage({ title }: { title: string }) {
  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900">{title}</h1>
          <p className="mt-1 text-slate-500">
            Halaman dummy untuk menggambarkan fitur admin versi produksi.
          </p>
        </div>

        <ActionButtons />
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-5 py-4">Nama</th>
              <th className="px-5 py-4">Kategori</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Aksi</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {genericRows.map((row) => (
              <tr key={row[0]}>
                <td className="px-5 py-4 font-bold text-slate-800">{row[0]}</td>
                <td className="px-5 py-4 text-slate-600">{row[1]}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                    {row[2]}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={dummyAlert}
                      className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={dummyAlert}
                      className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl bg-cyan-50 p-5 text-sm leading-relaxed text-cyan-900">
        Semua tombol pada halaman ini masih simulasi. Pada versi produksi,
        fitur tambah, edit, upload, export, publish, dan hapus akan tersambung
        dengan backend/database.
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = window.location.pathname;

  if (pathname === "/admin/login") {
    return <AdminLogin />;
  }

  const activePath =
    pathname === "/admin" || pathname === "/admin/" ? "/admin/dashboard" : pathname;

  const title = getTitle(activePath);

  const renderContent = () => {
    if (activePath === "/admin/dashboard") {
      return <DashboardHome />;
    }

    return <GenericAdminPage title={title} />;
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex items-center justify-between bg-slate-950 px-4 py-4 text-white lg:hidden">
        <button type="button" onClick={() => setSidebarOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
        <p className="font-bold">Admin Yayasan</p>
      </div>

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-950 text-white transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <div>
            <p className="text-sm text-cyan-200">Admin Panel</p>
            <h2 className="font-black">Yayasan Nurul Quran</h2>
          </div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="h-[calc(100vh-88px)] overflow-y-auto px-3 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activePath === item.path;

            return (
              <button
                key={item.path}
                type="button"
                onClick={() => goTo(item.path)}
                className={`mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                  active
                    ? "bg-cyan-700 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => goTo("/")}
            className="mt-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-300 hover:bg-white/10"
          >
            <Home className="h-4 w-4" />
            Kembali ke Website
          </button>

          <button
            type="button"
            onClick={() => goTo("/admin/login")}
            className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-300 hover:bg-white/10"
          >
            <LogOut className="h-4 w-4" />
            Keluar
          </button>
        </nav>
      </aside>

      <main className="lg:pl-72">
        <div className="border-b border-slate-200 bg-white px-6 py-5">
          <p className="text-sm font-bold text-cyan-700">Admin Dashboard</p>
          <h1 className="text-xl font-black text-slate-900">{title}</h1>
        </div>

        <div className="p-6 lg:p-8">{renderContent()}</div>
      </main>
    </div>
  );
}