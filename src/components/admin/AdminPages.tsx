/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Coins, Users, Heart, User, Building2, Image as ImageIcon, 
  BookOpen, Video, Calendar, FileText, Settings, Sparkles, 
  Download, Plus, Search, HelpCircle, ArrowRight, Share2, 
  Trash2, Edit, CheckCircle, Clock, AlertTriangle, ToggleLeft, ToggleRight
} from "lucide-react";
import { Campaign } from "../../types";

interface ActionProps {
  onHandleAlert: (action: string) => void;
}

// ----------------------------------------------------------------------
// 1. DASHBOARD OVERVIEW
// ----------------------------------------------------------------------
interface DashboardViewProps extends ActionProps {
  campaigns: Campaign[];
  constructionPercent: number;
  totalDonation: number;
}

export function AdminDashboardView({ campaigns, constructionPercent, totalDonation, onHandleAlert }: DashboardViewProps) {
  // Pure Tailwind CSS Bar Chart Data
  const chartData = [
    { month: "Januari", val: "80 Juta", pct: "h-[35%]", bg: "bg-brand-teal-500" },
    { month: "Februari", val: "125 Juta", pct: "h-[55%]", bg: "bg-brand-teal-600" },
    { month: "Maret", val: "160 Juta", pct: "h-[70%]", bg: "bg-teal-500" },
    { month: "April", val: "185 Juta", pct: "h-[80%]", bg: "bg-emerald-500" },
    { month: "Mei", val: "230 Juta", pct: "h-[100%]", bg: "bg-emerald-600" },
  ];

  const transactions = [
    { name: "Hamba Allah", prog: "Pembangunan Pesantren", amount: "Rp1.000.000", status: "Berhasil", date: "25 Mei 2026" },
    { name: "Abdullah", prog: "Wakaf Al-Qur’an", amount: "Rp250.000", status: "Berhasil", date: "24 Mei 2026" },
    { name: "Ummu Maryam", prog: "Orang Tua Asuh", amount: "Rp300.000", status: "Berhasil", date: "24 Mei 2026" },
    { name: "Hamba Allah", prog: "Program Makan Santri", amount: "Rp150.000", status: "Berhasil", date: "23 Mei 2026" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Ikhtisar Pengurus Yayasan</h2>
          <p className="text-xs text-gray-500 font-semibold">Pantau real-time progress, statistik donasi, dan dakwah dalam satu pintu.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => onHandleAlert("Sinkronisasi Seluruh Modul")}
            className="px-3.5 py-2 rounded-xl bg-brand-teal-50 hover:bg-brand-teal-100 text-brand-teal-700 text-xs font-bold transition-all"
          >
            Sinkronkan State
          </button>
        </div>
      </div>

      {/* 8 Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Donasi", val: "Rp780.000.000", bg: "bg-emerald-50 text-emerald-700 font-mono", icon: Coins },
          { label: "Donatur", val: "2.430", bg: "bg-blue-50 text-blue-700", icon: Users },
          { label: "Program Aktif", val: "12", bg: "bg-teal-50 text-teal-700", icon: Heart },
          { label: "Anak Asuh Aktif", val: "86", bg: "bg-purple-50 text-purple-700", icon: User },
          { label: "Progress Fisik", val: `${constructionPercent}%`, bg: "bg-amber-50 text-amber-700", icon: Building2 },
          { label: "Artikel Dakwah", val: "12", bg: "bg-pink-50 text-pink-700", icon: BookOpen },
          { label: "Video Kajian", val: "24", bg: "bg-rose-50 text-rose-700", icon: Video },
          { label: "Laporan Terbit", val: "8", bg: "bg-slate-100 text-slate-800", icon: FileText },
        ].map((c, i) => (
          <div key={i} className="p-4 bg-white border border-gray-150 rounded-2xl flex items-center gap-3.5 shadow-sm">
            <div className={`p-2 rounded-xl ${c.bg}`}>
              <c.icon className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-wider">{c.label}</span>
              <span className="text-xs sm:text-sm font-extrabold text-gray-900 block mt-0.5">{c.val}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart & Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Bar Chart */}
        <div className="lg:col-span-7 bg-white p-6 border border-gray-150 rounded-2xl shadow-sm space-y-4">
          <h3 className="text-xs uppercase font-extrabold text-gray-900 tracking-wider">Perkembangan Donasi Bulanan (Januari - Mei 2026)</h3>
          
          <div className="flex h-56 items-end justify-between pt-6 border-b border-gray-100 pb-2.5">
            {chartData.map((d, index) => (
              <div key={index} className="flex flex-col items-center flex-1 group">
                <div className="text-[10px] font-mono font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mb-1.5">
                  {d.val}
                </div>
                <div className={`w-8 sm:w-12 rounded-t-lg transition-all duration-500 ease-out ${d.pct} ${d.bg} hover:brightness-95 cursor-pointer shadow-sm`} />
                <span className="text-[9px] font-bold text-gray-500 mt-2 block">{d.month}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[9px] text-gray-400 font-bold uppercase tracking-wider">
            <span>Metrik Satuan: Rupiah (Akumulatif Kas)</span>
            <span>Target Tahun Berjalan: Rp2 Milyar</span>
          </div>
        </div>

        {/* Right: Quick actions */}
        <div className="lg:col-span-5 bg-white p-6 border border-gray-150 rounded-2xl shadow-sm space-y-4">
          <h3 className="text-xs uppercase font-extrabold text-gray-900 tracking-wider">Quick Actions Portal</h3>
          <p className="text-[11px] text-gray-400 font-medium">Bypass langsung ke modul input cepat.</p>
          
          <div className="grid grid-cols-2 gap-2.5">
            {[
              "Tambah Program Donasi",
              "Upload Progress",
              "Tambah Galeri",
              "Tambah Artikel Dakwah",
              "Tambah Video Kajian",
              "Buat Laporan"
            ].map((act, idx) => (
              <button
                key={idx}
                onClick={() => onHandleAlert(act)}
                className="p-3 text-left bg-gray-50 hover:bg-gray-100 border border-gray-150 rounded-xl text-[10px] font-bold text-gray-700 transition-colors flex flex-col justify-between h-20 group"
              >
                <div className="w-5 h-5 rounded bg-white border border-gray-150 flex items-center justify-center text-brand-teal-600 group-hover:text-brand-teal-500 transition-colors">
                  <Plus className="h-3.5 w-3.5" />
                </div>
                <span className="mt-2 block leading-snug">{act}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recents Transactions */}
      <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-4">
        <h3 className="text-xs uppercase font-extrabold text-gray-900 tracking-wider">Transaksi Donasi Terbaru</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
                <th className="p-3.5">Donatur</th>
                <th className="p-3.5">Program Penyaluran</th>
                <th className="p-3.5">Nominal</th>
                <th className="p-3.5">Tanggal</th>
                <th className="p-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((t, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-3.5 font-bold text-gray-900">{t.name}</td>
                  <td className="p-3.5 font-medium text-gray-600">{t.prog}</td>
                  <td className="p-3.5 font-bold font-mono text-emerald-600">{t.amount}</td>
                  <td className="p-3.5 text-gray-400 font-semibold">{t.date}</td>
                  <td className="p-3.5">
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-bold rounded-full">
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. PROGRAM DONASI
// ----------------------------------------------------------------------
interface ProgramDonasiViewProps extends ActionProps {
  campaigns: Campaign[];
}

export function AdminProgramDonasiView({ campaigns, onHandleAlert }: ProgramDonasiViewProps) {
  const dummyPrograms = [
    { title: "Pembangunan Pesantren", cat: "Wakaf Pembangunan", target: "Rp500.000.000", current: "Rp340.000.000", progress: "68%", status: "Aktif" },
    { title: "Wakaf Al-Qur’an", cat: "Wakaf Mushaf", target: "Rp15.000.000", current: "Rp15.000.000", progress: "100%", status: "Selesai" },
    { title: "Program Makan Santri", cat: "Sosial/Pangan", target: "Rp30.000.000", current: "Rp18.500.000", progress: "61%", status: "Aktif" },
    { title: "Beasiswa Santri Penghafal Qur’an", cat: "Pendidikan", target: "Rp100.000.000", current: "Rp72.000.000", progress: "72%", status: "Aktif" },
    { title: "Sarana Belajar", cat: "Pendidikan", target: "Rp25.000.000", current: "Rp12.000.000", progress: "48%", status: "Aktif" },
    { title: "Operasional Dakwah", cat: "Humas & Dakwah", target: "Rp50.000.000", current: "Rp22.500.000", progress: "45%", status: "Aktif" },
  ];

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Program Donasi & Wakaf</h2>
          <p className="text-[11px] text-gray-400 font-semibold">Kelola sasaran target dana donatur dan realokasi pos anggaran.</p>
        </div>
        <button
          onClick={() => onHandleAlert("Tambah Program")}
          className="px-3 py-2 bg-brand-teal-600 hover:bg-brand-teal-500 text-white rounded-xl text-xs font-bold transition-transform cursor-pointer"
        >
          + Tambah Program
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
              <th className="p-3">Nama Program</th>
              <th className="p-3">Kategori</th>
              <th className="p-3 text-right">Target Dana</th>
              <th className="p-3 text-right">Terkumpul</th>
              <th className="p-3">Progress</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-600">
            {dummyPrograms.map((p, idx) => (
              <tr key={idx} className="hover:bg-gray-50/40">
                <td className="p-3 font-bold text-gray-900">{p.title}</td>
                <td className="p-3 font-semibold text-gray-400">{p.cat}</td>
                <td className="p-3 text-right font-mono text-gray-500 font-bold">{p.target}</td>
                <td className="p-3 text-right font-mono text-emerald-600 font-bold">{p.current}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-teal-500 h-full rounded-full" style={{ width: p.progress }} />
                    </div>
                    <span className="font-bold text-[10px] text-gray-500">{p.progress}</span>
                  </div>
                </td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold uppercase ${
                    p.status === "Selesai" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-blue-50 text-blue-600 border border-blue-100"
                  }`}>
                    {p.status}
                  </span>
                </td>
                <td className="p-3 text-right space-x-1.5">
                  <button onClick={() => onHandleAlert(`Lihat ${p.title}`)} className="text-[10px] font-bold text-gray-400 hover:text-brand-teal-600">Lihat</button>
                  <button onClick={() => onHandleAlert(`Edit ${p.title}`)} className="text-[10px] font-bold text-[#b45309] hover:text-amber-600">Edit</button>
                  <button onClick={() => onHandleAlert(`Arsipkan ${p.title}`)} className="text-[10px] font-bold text-red-400 hover:text-red-600">Nonaktifkan</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 3. DONATUR LIST
// ----------------------------------------------------------------------
export function AdminDonaturView({ onHandleAlert }: ActionProps) {
  const [filterState, setFilterState] = useState("Semua");

  const donaturList = [
    { name: "Hamba Allah", prog: "Pembangunan Pesantren", amount: "Rp1.000.000", method: "BSI Transfer", date: "25 Mei 2026", status: "Berhasil", contact: "+62 812-7001-xxx" },
    { name: "Abdullah", prog: "Wakaf Al-Qur’an", amount: "Rp250.000", method: "Mandiri Online", date: "24 Mei 2026", status: "Berhasil", contact: "+62 853-4011-xxx" },
    { name: "Ummu Maryam", prog: "Orang Tua Asuh", amount: "Rp300.000", method: "QRIS", date: "24 Mei 2026", status: "Berhasil", contact: "+62 819-2114-xxx" },
    { name: "Hamba Allah", prog: "Program Makan Santri", amount: "Rp150.000", method: "QRIS", date: "23 Mei 2026", status: "Berhasil", contact: "+62 821-9988-xxx" },
    { name: "Ahmad Syahputra", prog: "Beasiswa Santri", amount: "Rp500.000", method: "BSI Transfer", date: "22 Mei 2026", status: "Berhasil", contact: "+62 878-1234-xxx" },
    { name: "Khadijah Malang", prog: "Pembangunan Pesantren", amount: "Rp2.500.000", method: "Mandiri Online", date: "22 Mei 2026", status: "Berhasil", contact: "+62 811-9080-xxx" },
    { name: "Syarif Hidayat", prog: "Sarana Belajar", amount: "Rp100.000", method: "QRIS", date: "21 Mei 2026", status: "Menunggu Konfirmasi", contact: "+62 851-5055-xxx" },
    { name: "Aisyah Putri", prog: "Wakaf Al-Qur'an", amount: "Rp500.000", method: "BSI Transfer", date: "20 Mei 2026", status: "Berhasil", contact: "+62 896-1212-xxx" },
  ];

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Arsip Donatur Yayasan</h2>
          <p className="text-[11px] text-gray-400 font-semibold">Tabel registrasi harian dan pencatatan kas masuk terverifikasi.</p>
        </div>
        <button
          onClick={() => onHandleAlert("Export")}
          className="px-3.5 py-2 border border-gray-200 hover:bg-gray-100/60 rounded-xl text-xs font-bold text-gray-600 transition-colors cursor-pointer"
        >
          Export Data (.Excel)
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 border-b border-gray-100 pb-3">
        {["Semua", "Hari Ini", "Bulan Ini", "Berhasil", "Menunggu Konfirmasi"].map((f) => (
          <button
            key={f}
            onClick={() => setFilterState(f)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              filterState === f
                ? "bg-[#0B1E26] text-white"
                : "bg-gray-50 text-gray-500 hover:text-brand-teal-500"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
              <th className="p-3">Nama Donatur</th>
              <th className="p-3">Program</th>
              <th className="p-3 text-right">Nominal</th>
              <th className="p-3">Metode</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Kontak</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-600">
            {donaturList
              .filter((d) => filterState === "Semua" || d.status === filterState || filterState === "Bulan Ini")
              .map((d, index) => (
                <tr key={index} className="hover:bg-gray-50/40">
                  <td className="p-3 font-bold text-gray-900">{d.name}</td>
                  <td className="p-3 font-medium text-gray-500">{d.prog}</td>
                  <td className="p-3 text-right font-mono text-emerald-600 font-bold">{d.amount}</td>
                  <td className="p-3 text-gray-400 font-semibold">{d.method}</td>
                  <td className="p-3 text-gray-400 font-semibold">{d.date}</td>
                  <td className="p-3 font-mono text-[10px] font-bold text-gray-400">{d.contact}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[8px] font-bold ${
                      d.status === "Berhasil" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-amber-50 text-amber-700 border border-amber-100"
                    }`}>
                      {d.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => onHandleAlert(`Lihat Detail ${d.name}`)}
                      className="px-2 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-150 rounded text-[9px] font-bold text-gray-500"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 4. ORANG TUA ASUH (Foster System)
// ----------------------------------------------------------------------
export function AdminOrangTuaAsuhView({ onHandleAlert }: ActionProps) {
  const fosterParents = [
    { name: "Dr. Farhan", program: "Paket Sinergi (NQ-SA-04)", pck: "Paket A", val: "Rp500.000", status: "Aktif", start: "01 Jan 2026" },
    { name: "Zainab Az-Zahra", program: "RUTABA (NQ-SA-12)", pck: "Paket B", val: "Rp300.000", status: "Aktif", start: "15 Feb 2026" },
    { name: "Hamba Allah Malang", program: "Rumah Belajar", pck: "Paket Penuh", val: "Rp1.000.000", status: "Aktif", start: "12 Mar 2026" },
    { name: "Prof. Rudi Hermawan", program: "Beasiswa Dasar", pck: "Paket A", val: "Rp500.000", status: "Aktif", start: "22 Mar 2026" },
    { name: "Ummu Salamah", program: "Katersediaan Gizi", pck: "Paket B", val: "Rp300.000", status: "Aktif", start: "05 Apr 2026" },
    { name: "Yusuf Hamdan", program: "Paket Pendidikan", pck: "Paket Penuh", val: "Rp1.000.000", status: "Aktif", start: "10 Mei 2026" },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { title: "Total Dukungan Bulanan", amount: "Rp45.200.000", col: "text-brand-teal-600 bg-brand-teal-50" },
          { title: "Orang Tua Asuh Aktif", amount: "142 Orang", col: "text-blue-600 bg-blue-50" },
          { title: "Anak Terbantu", amount: "86 Santri", col: "text-purple-600 bg-purple-50" },
          { title: "Kebutuhan Bulanan", amount: "Rp60.000.000", col: "text-amber-600 bg-amber-50" },
        ].map((c, i) => (
          <div key={i} className="p-4 bg-white border border-gray-150 shadow-sm rounded-2xl">
            <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-wider">{c.title}</span>
            <span className={`text-base font-extrabold mt-1 inline-block px-2 py-0.5 rounded-lg ${c.col}`}>
              {c.amount}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-4">
        <h3 className="text-xs uppercase font-extrabold text-gray-900 tracking-wider">Daftar Orang Tua Asuh Terdata</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
                <th className="p-3">Nama Donatur</th>
                <th className="p-3">Anak / Program Sasaran</th>
                <th className="p-3">Jenis Paket</th>
                <th className="p-3 text-right">Nominal Bulanan</th>
                <th className="p-3">Mulai Aktif</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              {fosterParents.map((fp, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="p-3 font-bold text-gray-900">{fp.name}</td>
                  <td className="p-3 font-medium text-gray-500">{fp.program}</td>
                  <td className="p-3"><span className="px-2 py-0.5 text-[9px] font-bold bg-gray-100 border border-gray-200 rounded text-gray-700">{fp.pck}</span></td>
                  <td className="p-3 text-right font-mono font-bold text-emerald-600">{fp.val}</td>
                  <td className="p-3 font-semibold text-gray-400">{fp.start}</td>
                  <td className="p-3">
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 font-bold border border-emerald-100 text-[8px] rounded-full uppercase">
                      {fp.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button onClick={() => onHandleAlert(`Kelola ${fp.name}`)} className="text-[10px] font-bold text-brand-teal-600 hover:underline">Kelola</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 5. ANAK ASUH (Circle Badges Initial)
// ----------------------------------------------------------------------
export function AdminAnakAsuhView({ onHandleAlert }: ActionProps) {
  const children = [
    { initials: "SF", name: "Syeikhah F.", age: "4 Tahun", unit: "RUTABA Balita", need: "Gizi & Mushaf", target: "Rp500.000", current: "Rp500.000", pct: "100%", status: "Terpenuhi" },
    { initials: "MA", name: "Muhammad A.", age: "5 Tahun", unit: "RUTABA Balita", need: "Mukim & Tarbiyah", target: "Rp500.000", current: "Rp300.000", pct: "60%", status: "Sebagian" },
    { initials: "MZ", name: "Maryam Z.", age: "6 Tahun", unit: "Rumah Tahfizz NQTC", need: "Kitab & Saku", target: "Rp400.000", current: "Rp400.000", pct: "100%", status: "Terpenuhi" },
    { initials: "AI", name: "Abdurrahman I.", age: "7 Tahun", unit: "Rumah Tahfizz NQTC", need: "SPP & Buku", target: "Rp550.000", current: "Rp150.000", pct: "27%", status: "Butuh Sponsor" },
    { initials: "FH", name: "Fatimah H.", age: "4 Tahun", unit: "RUTABA Balita", need: "Susu & Nutrisi", target: "Rp300.000", current: "Rp300.000", pct: "100%", status: "Terpenuhi" },
    { initials: "YK", name: "Yahya K.", age: "8 Tahun", unit: "Rumah Belajar NQLC", need: "Seragam & Kertas", target: "Rp350.000", current: "Rp0", pct: "0%", status: "Butuh Sponsor" },
  ];

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Arsip Profil Anak Asuh (Santri)</h2>
          <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
            Identitas asli dilindungi dengan inisial sesuai adab syar'i pesantren tanpa visualisasi foto wajah langsung.
          </p>
        </div>
        <button
          onClick={() => onHandleAlert("Tambah Anak Asuh")}
          className="px-3.5 py-2 bg-[#0B1E26] hover:bg-brand-dark-900 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          + Tambah Anak Asuh
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children.map((c, i) => (
          <div key={i} className="p-4 bg-gray-50/50 border border-gray-150 rounded-xl space-y-4 flex flex-col justify-between hover:border-brand-teal-300 transition-all">
            <div className="flex items-start gap-3">
              {/* No features geometric badge */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-dark-900 to-[#1b3440] text-brand-teal-300 flex items-center justify-center font-extrabold text-xs shrink-0 select-none border border-brand-teal-900/30">
                {c.initials}
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-extrabold text-[#0B1E26]">{c.name}</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 text-gray-400 rounded text-[8px] font-bold">{c.age}</span>
                  <span className="px-1.5 py-0.5 bg-brand-teal-50 text-brand-teal-700 border border-brand-teal-100 rounded text-[8px] font-bold">{c.unit}</span>
                </div>
              </div>
            </div>

            <div className="space-y-1 text-[11px]">
              <span className="block text-gray-400 font-bold uppercase text-[8px]">Rincian Kebutuhan:</span>
              <span className="block text-gray-600 font-semibold">{c.need}</span>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-gray-100">
              <div className="flex justify-between text-[10px] text-gray-500 font-bold font-mono">
                <span>Dukungan: {c.current} / {c.target}</span>
                <span>{c.pct}</span>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-brand-teal-500 h-full rounded-full" style={{ width: c.pct }} />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className={`px-2 py-0.5 text-[8px] font-black rounded uppercase ${
                c.status === "Terpenuhi" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-700"
              }`}>
                {c.status}
              </span>
              <div className="space-x-1">
                <button onClick={() => onHandleAlert(`Edit anak ${c.name}`)} className="text-[10px] font-bold text-[#b45309] hover:underline">Edit</button>
                <button onClick={() => onHandleAlert(`Detail anak ${c.name}`)} className="text-[10px] font-bold text-brand-teal-600 hover:underline">Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 6. PROGRESS PEMBANGUNAN
// ----------------------------------------------------------------------
export function AdminProgressView({ onHandleAlert }: ActionProps) {
  const progressLogs = [
    { date: "20 Mei 2026", title: "Pemasangan Pondasi Tiang Utama", desc: "Pengecoran tiang pancang gedung asrama lantai 2 selesai dengan aman.", cat: "Fisik Gedung", status: "Terbit" },
    { date: "12 Mei 2026", title: "Pembelian Semen & Besi Behel", desc: "Pembelian material tahap III sebanyak 150 sak semen dan besi struktural.", cat: "Pengadaan Bahan", status: "Terbit" },
    { date: "02 Mei 2026", title: "Plaster Dinding Samping Lantai 1", desc: "Pengerjaan plester dinding asrama putri sisi luar menggunakan bata hebel ringan.", cat: "Fisik Gedung", status: "Terbit" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Progress Fisik", val: "68%", color: "text-brand-teal-600" },
          { label: "Progress Dana", val: "78%", color: "text-emerald-600" },
          { label: "Dana Terkumpul", val: "Rp390.000.000", color: "text-gray-900 font-mono" },
          { label: "Dana Digunakan", val: "Rp342.000.000", color: "text-gray-900 font-mono" },
          { label: "Sisa Kebutuhan", val: "Rp110.000.000", color: "text-[#b45309] font-mono" },
        ].map((v, i) => (
          <div key={i} className="p-4 bg-white border border-gray-150 rounded-2xl shadow-sm">
            <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-wider">{v.label}</span>
            <span className={`text-sm sm:text-base font-extrabold mt-1 block ${v.color}`}>{v.val}</span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-3">
          <h3 className="text-xs uppercase font-extrabold text-gray-900 tracking-wider">Log Update Pembangunan Fisik</h3>
          <div className="flex gap-2">
            <button onClick={() => onHandleAlert("Tambah Update Progress")} className="px-3 py-1.5 bg-[#0B1E26] text-white rounded-lg text-[10px] font-bold">Tambah Log</button>
            <button onClick={() => onHandleAlert("Upload Foto Progress")} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-[10px] font-bold">Upload Foto</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
                <th className="p-3">Tanggal</th>
                <th className="p-3">Judul Update</th>
                <th className="p-3">Deskripsi Kemajuan</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              {progressLogs.map((log, index) => (
                <tr key={index} className="hover:bg-gray-50/50">
                  <td className="p-3 font-semibold text-gray-400">{log.date}</td>
                  <td className="p-3 font-bold text-gray-900">{log.title}</td>
                  <td className="p-3 max-w-sm font-medium leading-relaxed">{log.desc}</td>
                  <td className="p-3"><span className="px-2 py-0.5 text-[9px] font-bold bg-brand-teal-50 border border-brand-teal-100 rounded text-brand-teal-700">{log.cat}</span></td>
                  <td className="p-3"><span className="text-[9px] uppercase font-black text-emerald-600">{log.status}</span></td>
                  <td className="p-3 text-right">
                    <button onClick={() => onHandleAlert(`Edit log ${log.title}`)} className="text-[10px] font-bold text-[#b45309] hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 7. GALERI MANAGEMENT (No Living figures)
// ----------------------------------------------------------------------
export function AdminGaleriView({ onHandleAlert }: ActionProps) {
  const galeriGrid = [
    { title: "Gedung Asrama Tampak Samping", cat: "Pembangunan", date: "18 Mei 2026", status: "Terbit" },
    { title: "Meja Belajar Baru Santri NQLC", cat: "Pendidikan", date: "10 Mei 2026", status: "Terbit" },
    { title: "Penyerahan Mushaf Wakaf di Lawang", cat: "Wakaf", date: "04 Mei 2026", status: "Terbit" },
    { title: "Ruang Kelas RUTABA Balita Ceria", cat: "RUTABA", date: "28 Apr 2026", status: "Terbit" },
    { title: "Dokumentasi Halaqah Murajaah", cat: "Tahfidz", date: "15 Apr 2026", status: "Terbit" },
  ];

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Arsip Galeri Media Dokumentasi</h2>
          <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
            Menampilkan album representasi abstrak (tanpa gambar figur hidup utuh) demi menjaga kekhidmatan syariat pesantren.
          </p>
        </div>
        <button
          onClick={() => onHandleAlert("Tambah Foto")}
          className="px-3.5 py-2 bg-brand-teal-600 hover:bg-brand-teal-500 text-white rounded-xl text-xs font-bold transition-all"
        >
          + Tambah Foto
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galeriGrid.map((g, i) => (
          <div key={i} className="border border-gray-150 rounded-2xl overflow-hidden hover:shadow-md transition-all group bg-white">
            {/* Geometric representation box */}
            <div className="h-44 bg-gradient-to-tr from-brand-dark-900 to-[#102934] relative flex items-center justify-center p-4">
              {/* Grid abstract patterns */}
              <div className="absolute inset-0 opacity-10 space-y-1 py-4 px-2 select-none pointer-events-none">
                <div className="border-t border-dashed border-white h-0 w-full" />
                <div className="border-t border-dashed border-white h-0 w-full" />
                <div className="border-t border-dashed border-white h-0 w-full" />
              </div>
              <div className="text-center z-10 space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 text-brand-teal-400 flex items-center justify-center mx-auto">
                  <ImageIcon className="h-4 w-4" />
                </div>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-teal-300 font-bold">Dokumentasi Digital</span>
              </div>
              <div className="absolute top-2.5 right-2.5">
                <span className="px-2 py-0.5 bg-brand-teal-500/20 text-brand-teal-300 rounded text-[8px] font-extrabold uppercase tracking-wide border border-brand-teal-500/10">
                  {g.cat}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <span className="text-[10px] text-gray-400 font-bold block">{g.date}</span>
                <h4 className="text-xs font-extrabold text-gray-900 mt-1 leading-snug">{g.title}</h4>
              </div>
              <div className="flex items-center justify-between text-[11px] pt-3 border-t border-gray-100">
                <span className="text-[9px] font-black text-emerald-600 uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> {g.status}
                </span>
                <div className="space-x-2">
                  <button onClick={() => onHandleAlert(`Edit foto ${g.title}`)} className="text-[10px] font-bold text-[#b45309] hover:underline">Edit</button>
                  <button onClick={() => onHandleAlert(`Hapus foto ${g.title}`)} className="text-[10px] font-bold text-red-500 hover:underline">Hapus</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 8. ASATIDZAH PROFIL
// ----------------------------------------------------------------------
export function AdminAsatidzahView({ onHandleAlert }: ActionProps) {
  const teachers = [
    { initials: "AA", name: "Ustadzah Aisyah", bid: "Syir / Aqidah & Akhlak", unit: "RUTABA Balita", focus: "Tahsin Al-Qur'an Balita", status: "Aktif" },
    { initials: "UM", name: "Ustadzah Maryam", bid: "Tahfidz Al-Qur'an", unit: "Rumah Tahfizz NQTC", focus: "Hafalan Juz 30 & 29", status: "Aktif" },
    { initials: "UK", name: "Ustadzah Khadijah", bid: "Bahasa Arab Dasar", unit: "Rumah Belajar NQLC", focus: "Durusul Lughah Balita", status: "Aktif" },
    { initials: "UH", name: "Ustadzah Hafshah", bid: "Adab Harian", unit: "RUTABA Balita", focus: "Doa & Adab Harian", status: "Aktif" },
    { initials: "UZ", name: "Ustadzah Zainab", bid: "Murajaah Mandiri", unit: "Rumah Tahfizz NQTC", focus: "Talaqqi Surat Pendek", status: "Aktif" },
    { initials: "US", name: "Ustadzah Sumayyah", bid: "Kisah Para Nabi", unit: "Rumah Belajar NQLC", focus: "Tarikh Islam & Siroh", status: "Aktif" },
    { initials: "UF", name: "Ustadzah Fatimah", bid: "Kreativitas & Seni", unit: "RUTABA Balita", focus: "Motorik Islami", status: "Aktif" },
  ];

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Direktori Asatidzah Pembina</h2>
          <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
            Profil 7 Ustadzah pembimbing syariah terdata. Identitas dipetakan amanah dengan initial melingkar.
          </p>
        </div>
        <button
          onClick={() => onHandleAlert("Tambah Profil")}
          className="px-3.5 py-2 bg-[#0B1E26] text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          + Tambah Profil
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teachers.map((t, i) => (
          <div key={i} className="p-4 bg-gray-50/50 border border-gray-150 rounded-xl space-y-3 hover:border-brand-teal-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-teal-600 text-white flex items-center justify-center font-extrabold text-xs select-none">
                {t.initials}
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[#0B1E26]">{t.name}</h4>
                <span className="text-[9px] text-gray-400 font-bold block">{t.unit}</span>
              </div>
            </div>

            <div className="space-y-1.5 text-[11px] border-t border-gray-100 pt-2 text-gray-600">
              <div className="flex justify-between">
                <span className="text-gray-400 font-bold uppercase text-[8px]">Keahlian:</span>
                <span className="font-semibold">{t.bid}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-bold uppercase text-[8px]">Fokus Bina:</span>
                <span className="font-semibold">{t.focus}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-400 font-bold uppercase text-[8px]">Status:</span>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-black rounded text-[8px] uppercase tracking-wider">{t.status}</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button onClick={() => onHandleAlert(`Edit Profil ${t.name}`)} className="text-[10px] font-bold text-[#b45309] hover:underline">Edit Profil</button>
              <button onClick={() => onHandleAlert(`Sembunyikan Profil ${t.name}`)} className="text-[10px] font-bold text-gray-400 hover:underline">Sembunyikan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 9. DAKWAH DIGITAL
// ----------------------------------------------------------------------
export function AdminDakwahView({ onHandleAlert }: ActionProps) {
  const articlesList = [
    { title: "Menumbuhkan Cinta Al-Qur’an Sejak Dini", cat: "Tips Parenting", date: "24 Mei 2026", status: "Terbit", views: "342" },
    { title: "Adab Sebelum Ilmu", cat: "Adab & Akhlak", date: "22 Mei 2026", status: "Terbit", views: "281" },
    { title: "Membantu Anak Murajaah di Rumah", cat: "Tips Murajaah", date: "18 Mei 2026", status: "Terbit", views: "198" },
    { title: "Menjaga Hafalan dengan Murajaah", cat: "Tahfidz", date: "14 Mei 2026", status: "Terbit", views: "220" },
    { title: "Membiasakan Doa Harian pada Anak", cat: "Adab & Akhlak", date: "08 Mei 2026", status: "Terbit", views: "199" },
  ];

  return (
    <div className="space-y-6">
      {/* Mini Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Artikel Terbit", val: "12" },
          { label: "Draft Materi", val: "4" },
          { label: "Kategori Bidang", val: "6" },
          { label: "Total Dibaca", val: "1.240" },
        ].map((v, i) => (
          <div key={i} className="p-4 bg-white border border-gray-150 rounded-2xl shadow-sm">
            <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-wider">{v.label}</span>
            <span className="text-base font-extrabold mt-1 block text-gray-900">{v.val}</span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-3">
          <div>
            <h3 className="text-xs uppercase font-extrabold text-gray-900 tracking-wider">Kelola Rubrik Faedah & Artikel Dakwah</h3>
            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">Publikasikan resep ilmu syariat dan kontrol tulisan.</p>
          </div>
          <button onClick={() => onHandleAlert("Tambah Artikel")} className="px-3.5 py-2 bg-brand-teal-600 text-white rounded-xl text-xs font-bold">+ Tambah Artikel</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
                <th className="p-3">Judul Artikel</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Tanggal Publish</th>
                <th className="p-3 text-right">Dibaca (Hits)</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              {articlesList.map((a, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="p-3 font-bold text-gray-900">{a.title}</td>
                  <td className="p-3 font-semibold text-gray-400">{a.cat}</td>
                  <td className="p-3 text-gray-400 font-medium">{a.date}</td>
                  <td className="p-3 text-right font-mono font-bold text-[#0B1E26]">{a.views}x</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[8px] font-bold rounded uppercase">
                      {a.status}
                    </span>
                  </td>
                  <td className="p-3 text-right space-x-1.5">
                    <button onClick={() => onHandleAlert(`Edit ${a.title}`)} className="text-[10px] font-bold text-[#b45309] hover:underline">Edit</button>
                    <button onClick={() => onHandleAlert(`Preview ${a.title}`)} className="text-[10px] font-bold text-brand-teal-600 hover:underline">Preview</button>
                    <button onClick={() => onHandleAlert(`Publish ${a.title}`)} className="text-[10px] font-bold text-green-500 hover:underline text-emerald-600 font-bold">Publish</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 10. KAJIAN YOUTUBE
// ----------------------------------------------------------------------
export function AdminKajianYoutubeView({ onHandleAlert }: ActionProps) {
  const youtubeList = [
    { title: "Kajian Parenting: Menanamkan Aqidah pada Anak Balita", cat: "Kajian Utama", link: "https://youtube.com/watch?v=k1", dur: "01:24:15", status: "Terbit" },
    { title: "Adab Menuntut Ilmu Bagi Santri Penghafal Al-Qur'an", cat: "Adab Akhlak", link: "https://youtube.com/watch?v=k2", dur: "45:20", status: "Terbit" },
    { title: "Tips Dampingi Balita Murajaah Tanpa Jenuh", cat: "Tips Tahfidz", link: "https://youtube.com/watch?v=k3", dur: "12:45", status: "Terbit" },
  ];

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Akses Link Kajian YouTube</h2>
          <p className="text-[11px] text-gray-400 font-semibold">Tentukan link embed video pembinaan walimurid & santri.</p>
        </div>
        <button
          onClick={() => onHandleAlert("Tambah Video")}
          className="px-3.5 py-2 bg-brand-teal-600 text-white rounded-xl text-xs font-bold transition-all"
        >
          + Tambah Video
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
              <th className="p-3">Judul Video</th>
              <th className="p-3">Kategori</th>
              <th className="p-3">Link YouTube</th>
              <th className="p-3 text-right">Durasi</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-600">
            {youtubeList.map((y, i) => (
              <tr key={i} className="hover:bg-gray-50/40">
                <td className="p-3 font-bold text-gray-900">{y.title}</td>
                <td className="p-3 font-semibold text-gray-400">{y.cat}</td>
                <td className="p-3 font-mono text-[10px] text-brand-teal-600 underline">{y.link}</td>
                <td className="p-3 text-right font-mono font-bold text-gray-500">{y.dur}</td>
                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[8px] font-bold rounded uppercase">{y.status}</span></td>
                <td className="p-3 text-right space-x-1.5">
                  <button onClick={() => onHandleAlert(`Edit ${y.title}`)} className="text-[10px] font-bold text-[#b45309] hover:underline">Edit</button>
                  <button onClick={() => onHandleAlert(`Preview ${y.title}`)} className="text-[10px] font-bold text-brand-teal-600 hover:underline">Preview</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 11. JADWAL KAJIAN
// ----------------------------------------------------------------------
export function AdminJadwalKajianView({ onHandleAlert }: ActionProps) {
  const schedule = [
    { date: "Sabtu, 30 Mei 2026", theme: "Adab Harian Seorang Penghafal Quran", speaker: "Ustadzah Maryam", loc: "Masjid Nurul Quran", status: "Aktif" },
    { date: "Ahad, 31 Mei 2026", theme: "Tips Parenting: Mendidik Anak Cinta Masjid", speaker: "Ustadzah Aisyah", loc: "Aula Serbaguna RT 04", status: "Aktif" },
    { date: "Kamis, 04 Juni 2026", theme: "Keutamaan Wakaf Al-Qur'an dan Sedekah", speaker: "Ustadzah Khadijah", loc: "Rumah Belajar NQLC", status: "Aktif" },
  ];

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Jadwal Kajian Tarbiyah Syar'i</h2>
          <p className="text-[11px] text-gray-400 font-semibold">Tentukan tanggal halaqah rutin asrama.</p>
        </div>
        <button
          onClick={() => onHandleAlert("Tambah Jadwal")}
          className="px-3.5 py-2 bg-[#0B1E26] text-white rounded-xl text-xs font-bold transition-all"
        >
          + Tambah Jadwal
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
              <th className="p-3">Hari & Tanggal</th>
              <th className="p-3">Tema Kajian</th>
              <th className="p-3">Pemateri / Ustadzah</th>
              <th className="p-3">Lokasi / Ruang</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-600">
            {schedule.map((s, i) => (
              <tr key={i} className="hover:bg-gray-50/40">
                <td className="p-3 font-bold text-gray-900">{s.date}</td>
                <td className="p-3 font-semibold text-gray-600 max-w-xs">{s.theme}</td>
                <td className="p-3 font-bold text-brand-teal-600">{s.speaker}</td>
                <td className="p-3 text-gray-400 font-semibold">{s.loc}</td>
                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[8px] font-bold rounded uppercase">{s.status}</span></td>
                <td className="p-3 text-right space-x-1.5">
                  <button onClick={() => onHandleAlert(`Edit Jadwal ${s.theme}`)} className="text-[10px] font-bold text-[#b45309] hover:underline">Edit</button>
                  <button onClick={() => onHandleAlert(`Batalkan Jadwal ${s.theme}`)} className="text-[10px] font-bold text-red-400 hover:underline">Batalkan</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 12. MATERI DOWNLOAD (PDF files)
// ----------------------------------------------------------------------
export function AdminMateriDownloadView({ onHandleAlert }: ActionProps) {
  const fileDownloads = [
    { name: "Panduan Murajaah Anak di Rumah", cat: "Panduan Tahfidz", type: "PDF Document", status: "Terbit", hits: "142" },
    { name: "10 Adab Penuntut Ilmu", cat: "Booklet Akhlak", type: "PDF Document", status: "Terbit", hits: "98" },
    { name: "Checklist Hafalan Surat Pendek", cat: "Tabel Kontrol", type: "PDF Spreadsheet", status: "Terbit", hits: "230" },
    { name: "Doa Harian untuk Anak", cat: "Flashcard Doa", type: "PDF Document", status: "Terbit", hits: "189" },
    { name: "Panduan Mendampingi Anak Belajar", cat: "Lembar Kerja", type: "PDF Document", status: "Terbit", hits: "76" },
  ];

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Katalog Lembaran / Materi Download</h2>
          <p className="text-[11px] text-gray-400 font-semibold">Lampirkan modul kependidikan bebas download bagi walimurid.</p>
        </div>
        <button
          onClick={() => onHandleAlert("Upload Materi PDF")}
          className="px-3.5 py-2 bg-brand-teal-600 text-white rounded-xl text-xs font-bold transition-all"
        >
          + Upload Materi (.PDF)
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
              <th className="p-3">Judul Materi</th>
              <th className="p-3">Kategori</th>
              <th className="p-3">Tipe File</th>
              <th className="p-3 text-right">Download (Hits)</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-600">
            {fileDownloads.map((fd, i) => (
              <tr key={i} className="hover:bg-gray-50/40">
                <td className="p-3 font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#ef4444]" />
                  <span>{fd.name}</span>
                </td>
                <td className="p-3 font-semibold text-gray-400">{fd.cat}</td>
                <td className="p-3 font-mono text-[10px] text-gray-400">{fd.type}</td>
                <td className="p-3 text-right font-mono font-bold text-gray-800">{fd.hits}x</td>
                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[8px] font-bold rounded uppercase">{fd.status}</span></td>
                <td className="p-3 text-right space-x-1.5">
                  <button onClick={() => onHandleAlert(`Download Preview ${fd.name}`)} className="text-[10px] font-bold text-brand-teal-600 hover:underline">Preview</button>
                  <button onClick={() => onHandleAlert(`Hapus ${fd.name}`)} className="text-[10px] font-bold text-red-500 hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 13. POSTER DAKWAH
// ----------------------------------------------------------------------
export function AdminPosterDakwahView({ onHandleAlert }: ActionProps) {
  const posters = [
    { title: "Poster Meraih Keberkahan Subuh", quote: "Dua rakaat subuh lebih baik dari dunia dan seisinya", cat: "Amalan Harian", status: "Terbit" },
    { title: "Poster Kemuliaan Penuntut Ilmu", quote: "Barangsiapa meniti jalan menuntut ilmu, Allah mudahkan jalannya ke surga", cat: "Motivasi Belajar", status: "Terbit" },
    { title: "Poster Indahnya Membaca Al-Qur'an", quote: "Bacalah Al-Qur'an, sesungguhnya ia akan datang memberi syafaat", cat: "Quranic Life", status: "Terbit" },
  ];

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Galeri Poster Dakwah Digital</h2>
          <p className="text-[11px] text-gray-400 font-semibold">Tampilkan selembar kutipan hadist syar'i pelengkap visual dakwah.</p>
        </div>
        <button
          onClick={() => onHandleAlert("Tambah Poster Baru")}
          className="px-3.5 py-2 bg-brand-teal-600 text-white rounded-xl text-xs font-bold transition-all"
        >
          + Tambah Poster
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posters.map((post, i) => (
          <div key={i} className="border border-gray-150 rounded-2xl overflow-hidden hover:shadow shadow-sm bg-gray-50/20">
            <div className="h-40 bg-gradient-to-tr from-brand-dark-900 via-brand-dark-950 to-[#1D3540] flex items-center justify-center p-4 relative text-center">
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-brand-gold-500/10 text-brand-gold-400 text-[8px] font-bold border border-brand-gold-500/10 rounded uppercase">
                {post.cat}
              </div>
              <div className="space-y-1.5 p-4 z-10">
                <p className="text-[10px] text-gray-300 italic font-semibold leading-relaxed">
                  "{post.quote}"
                </p>
                <span className="block font-sans text-[8px] uppercase tracking-widest text-brand-teal-300 font-bold">Kutipan Hadist Populer</span>
              </div>
            </div>
            <div className="p-4 space-y-3 bg-white border-t border-gray-150">
              <div>
                <h4 className="text-xs font-extrabold text-gray-900 leading-snug">{post.title}</h4>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px]">
                <span className="text-[9px] font-extrabold text-emerald-600 uppercase">
                  {post.status}
                </span>
                <div className="space-x-2">
                  <button onClick={() => onHandleAlert(`Edit ${post.title}`)} className="text-[10px] font-bold text-[#b45309] hover:underline">Edit</button>
                  <button onClick={() => onHandleAlert(`Share ${post.title}`)} className="text-[10px] font-bold text-brand-teal-600 hover:underline">Share</button>
                  <button onClick={() => onHandleAlert(`Hapus ${post.title}`)} className="text-[10px] font-bold text-red-500 hover:underline">Hapus</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 14. LAPORAN UMUM / SYARIAH
// ----------------------------------------------------------------------
export function AdminLaporanView({ onHandleAlert }: ActionProps) {
  const reportsList = [
    { title: "Laporan Reasumsi Keuangan Triwulan I", type: "Keuangan", period: "Q1 2026", status: "Disetujui", file: "laporan_q1_25.pdf" },
    { title: "Laporan Program Sembako Santri Yatim", type: "Program", period: "April 2026", status: "Selesai", file: "sembako_yatim.pdf" },
    { title: "Update Pembangunan Gedung Asrama Lt. 2", type: "Progress Pembangunan", period: "Mei 2026", status: "Disetujui", file: "pembangunan_asrama.pdf" },
    { title: "Rekap Donasi Harian Ramadan", type: "Donasi", period: "Ramadan 1447H", status: "Selesai", file: "donasi_ramadan.pdf" },
    { title: "Evaluasi Kinerja Belajar Balita RUTABA", type: "Orang Tua Asuh", period: "Semester I 2026", status: "Terbit", file: "evaluasi_rutaba.pdf" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Laporan", val: "12" },
          { label: "Laporan Keuangan", val: "6" },
          { label: "Laporan Program", val: "4" },
          { label: "Laporan Progress", val: "2" },
        ].map((v, i) => (
          <div key={i} className="p-4 bg-white border border-gray-150 rounded-2xl shadow-sm">
            <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-wider">{v.label}</span>
            <span className="text-base font-extrabold mt-1 block text-gray-900">{v.val}</span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-3">
          <div>
            <h3 className="text-xs uppercase font-extrabold text-gray-900 tracking-wider font-sans">Pusat Laporan Pertanggungjawaban</h3>
            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">Unduh pdf fisik verifikasi dewan pengawas.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onHandleAlert("Buat Laporan Baru")} className="px-3.5 py-2 bg-[#0B1E26] text-white rounded-xl text-xs font-bold">Buat Laporan</button>
            <button onClick={() => onHandleAlert("Upload Laporan PDF")} className="px-3.5 py-2 bg-gray-100 text-gray-600 rounded-xl text-xs font-bold">Upload PDF</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
                <th className="p-3">Nama Laporan</th>
                <th className="p-3">Jenis Laporan</th>
                <th className="p-3">Periode</th>
                <th className="p-3">File Lampiran</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              {reportsList.map((r, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="p-3 font-bold text-gray-900">{r.title}</td>
                  <td className="p-3"><span className="px-2 py-0.5 text-[8px] font-extrabold bg-brand-teal-50 text-brand-teal-700 border border-brand-teal-100 rounded uppercase">{r.type}</span></td>
                  <td className="p-3 text-gray-400 font-bold">{r.period}</td>
                  <td className="p-3 font-mono text-[10px] text-gray-400 italic font-bold">{r.file}</td>
                  <td className="p-3"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[8px] font-bold rounded uppercase">{r.status}</span></td>
                  <td className="p-3 text-right space-x-1.5">
                    <button onClick={() => onHandleAlert(`Download ${r.title}`)} className="text-[10px] font-bold text-brand-teal-600 hover:underline">Download</button>
                    <button onClick={() => onHandleAlert(`Publish ${r.title}`)} className="text-[10px] font-bold text-[#b45309] hover:underline">Publish</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 15. LAPORAN KEUANGAN
// ----------------------------------------------------------------------
export function AdminLaporanKeuanganView({ onHandleAlert }: ActionProps) {
  const mutation = [
    { date: "25 Mei 2026", desc: "Donasi Hamba Allah Pembangunan", d: "Rp1.000.000", k: "-", prog: "Pembangunan Pesantren", proof: "BS-98124.jpg", status: "Sukses" },
    { date: "24 Mei 2026", desc: "Pembelian Pasir Cor Tahap III", d: "-", k: "Rp4.500.000", prog: "Pembangunan Pesantren", proof: "FKT-3012.jpg", status: "Sukses" },
    { date: "24 Mei 2026", desc: "Wakaf Al-Qur'an 25 Mushaf", d: "Rp1.250.000", k: "-", prog: "Wakaf Al-Qur'an", proof: "BS-98115.jpg", status: "Sukses" },
    { date: "23 Mei 2026", desc: "Belanja Bahan Makan Pokok Santri", d: "-", k: "Rp2.100.000", prog: "Program Makan Santri", proof: "ALM-4412.jpg", status: "Lunas" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Dana Masuk", val: "Rp780.000.000", col: "text-emerald-600" },
          { label: "Total Dana Keluar", val: "Rp624.500.000", col: "text-red-500" },
          { label: "Saldo Semua Program", val: "Rp155.500.000", col: "text-brand-teal-600" },
          { label: "Dana Belum Disalurkan", val: "Rp12.000.000", col: "text-[#b45309]" },
        ].map((v, i) => (
          <div key={i} className="p-4 bg-white border border-gray-150 rounded-2xl shadow-sm">
            <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-wider">{v.label}</span>
            <span className={`text-sm sm:text-base font-mono font-extrabold mt-1 block ${v.col}`}>{v.val}</span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-3">
          <div>
            <h3 className="text-xs uppercase font-extrabold text-gray-900 tracking-wider">Jurnal Transaksi Kas Bulanan</h3>
            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">Catatan keluar masuk bendahara umum asrama.</p>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <button onClick={() => onHandleAlert("Tambah Transaksi")} className="px-3 py-1.5 bg-[#0B1E26] hover:bg-black text-white text-[10px] font-bold rounded-lg">+ Transaksi</button>
            <button onClick={() => onHandleAlert("Upload Bukti Pembayaran")} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-[10px] font-bold rounded-lg">Upload Bukti</button>
            <button onClick={() => onHandleAlert("Export Excel")} className="px-3 py-1.5 border border-gray-200 hover:bg-gray-50 text-gray-500 text-[10px] font-bold rounded-lg">Excel</button>
            <button onClick={() => onHandleAlert("Buat PDF Laporan")} className="px-3 py-1.5 border border-gray-200 hover:bg-gray-50 text-gray-500 text-[10px] font-bold rounded-lg">PDF</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
                <th className="p-3">Tanggal</th>
                <th className="p-3">Keterangan</th>
                <th className="p-3 text-right">Debet (Masuk)</th>
                <th className="p-3 text-right">Kredit (Keluar)</th>
                <th className="p-3">Alokasi Program</th>
                <th className="p-3 font-mono">Kode Bukti</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-150 text-gray-600">
              {mutation.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="p-3 font-semibold text-gray-400">{item.date}</td>
                  <td className="p-3 font-bold text-gray-900">{item.desc}</td>
                  <td className="p-3 text-right font-mono text-emerald-600 font-bold">{item.d}</td>
                  <td className="p-3 text-right font-mono text-red-500 font-bold">{item.k}</td>
                  <td className="p-3 text-gray-400 font-bold">{item.prog}</td>
                  <td className="p-3 font-mono text-[10px] font-bold text-gray-400">{item.proof}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.2 bg-emerald-50 text-emerald-700 text-[8px] font-bold rounded uppercase">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 16. LAPORAN PROGRAM
// ----------------------------------------------------------------------
export function AdminLaporanProgramView({ onHandleAlert }: ActionProps) {
  const progMetrics = [
    { label: "Program Berjalan", val: "12" },
    { label: "Program Rampung", val: "4" },
    { label: "Anak Asuh Mukim", val: "86" },
    { label: "Santri Tarbiyah", val: "124" },
    { label: "Mushaf Wakaf Tersebar", val: "250 pcs" },
  ];

  const impactLogs = [
    { prog: "Operasional Rumah Belajar NQLC", period: "Mei 2026", cap: "42 santri belajar tertib dengan 4 guru asrama.", block: "Stok buku tulis menipis di perbendaharaan.", plan: "Pengadaan logistik ATK baru tahap I", status: "Berjalan" },
    { prog: "Penyaluran Wakaf Al-Qur'an Jilid 2", period: "April 2026", cap: "100 mushaf tersalurkan di Lawang Selatan harian.", block: "Cuaca hujan intensif memperlambat laju motor penyerahan.", plan: "Distribusi lanjutan di daerah Lawang Utara", status: "Selesai" },
    { prog: "Program Gizi Balita RUTABA", period: "Mei 2026", cap: "25 balita mendapatkan susu & lauk bernutrisi harian.", block: "Kenaikan harga susu formula di swalayan.", plan: "Penyesuaian anggaran gizi bulutahun berjalan.", status: "Berjalan" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {progMetrics.map((v, i) => (
          <div key={i} className="p-4 bg-white border border-gray-150 rounded-2xl shadow-sm">
            <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-wider">{v.label}</span>
            <span className="text-base font-extrabold mt-1 block text-gray-900">{v.val}</span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-3">
          <div>
            <h3 className="text-xs uppercase font-extrabold text-gray-900 tracking-wider">Audit Evaluasi Capaian Program</h3>
            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">Pantau penyerapan manfaat donasi di lapangan.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onHandleAlert("Tambah Laporan Program")} className="px-3.5 py-2 bg-brand-teal-600 text-white rounded-xl text-xs font-bold">+ Tambah Laporan</button>
            <button onClick={() => onHandleAlert("Publish Laporan Program")} className="px-3.5 py-2 bg-[#0B1E26] text-white rounded-xl text-xs font-bold">Publish Laporan</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-150 text-gray-400 font-extrabold text-[9px] uppercase tracking-wider">
                <th className="p-3">Program Sasaran</th>
                <th className="p-3">Periode</th>
                <th className="p-3 max-w-xs">Capaian Real (Outcome)</th>
                <th className="p-3">Kendala Lapangan</th>
                <th className="p-3">Rencana Lanjut</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              {impactLogs.map((log, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="p-3 font-bold text-gray-900">{log.prog}</td>
                  <td className="p-3 font-semibold text-gray-400">{log.period}</td>
                  <td className="p-3 font-medium leading-relaxed max-w-xs">{log.cap}</td>
                  <td className="p-3 font-medium text-red-500">{log.block}</td>
                  <td className="p-3 font-medium text-brand-teal-700 font-bold">{log.plan}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-0.5 rounded text-[8px] font-black uppercase ${
                      log.status === "Selesai" ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 17. SETTINGS WEBSITE
// ----------------------------------------------------------------------
export function AdminSettingsView({ onHandleAlert }: ActionProps) {
  const [formData, setFormData] = useState({
    name: "Yayasan Nurul Quran Lawang Malang",
    addr: "Jl. Sumber Suko No. 24, Lawang, Malang, Jawa Timur",
    waAdmin: "+62 812-3456-7890",
    waKeu: "+62 856-7890-1234",
    email: "nurulquranlawang@gmail.com",
    youtube: "https://youtube.com/@nurulquranlawang",
    maps: "https://maps.app.goo.gl/LawangMalang",
    reksBsi: "7112026044 a.n. Yayasan Nurul Quran",
    reksMandiri: "1440026112026 a.n. Nurul Quran Yayasan",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onHandleAlert("Simpan Pengaturan");
  };

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-sm uppercase font-extrabold text-gray-900 tracking-wider">Pengaturan Website & Rekening</h2>
        <p className="text-[11px] text-gray-400 font-semibold">Ubah nomor rekening donasi, qris, alamat, dan narasi dasar landing page.</p>
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Nama Yayasan Resmi</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full text-xs font-bold p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-brand-teal-500 focus:bg-white"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Alamat Kantor Yayasan</label>
            <textarea
              value={formData.addr}
              rows={2}
              onChange={(e) => setFormData({ ...formData, addr: e.target.value })}
              className="w-full text-xs font-medium p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-brand-teal-500 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">WhatsApp Admin</label>
              <input
                type="text"
                value={formData.waAdmin}
                onChange={(e) => setFormData({ ...formData, waAdmin: e.target.value })}
                className="w-full text-xs font-bold p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-brand-teal-500 focus:bg-white"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">WhatsApp Keuangan</label>
              <input
                type="text"
                value={formData.waKeu}
                onChange={(e) => setFormData({ ...formData, waKeu: e.target.value })}
                className="w-full text-xs font-bold p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-brand-teal-500 focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Email Yayasan</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full text-xs font-bold p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-brand-teal-500 focus:bg-white"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Rekening BSI</label>
            <input
              type="text"
              value={formData.reksBsi}
              onChange={(e) => setFormData({ ...formData, reksBsi: e.target.value })}
              className="w-full text-xs font-bold p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-brand-teal-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Rekening Mandiri</label>
            <input
              type="text"
              value={formData.reksMandiri}
              onChange={(e) => setFormData({ ...formData, reksMandiri: e.target.value })}
              className="w-full text-xs font-bold p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-brand-teal-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-1.5">
            {/* QRIS Simulator Box */}
            <div className="border border-dashed border-gray-200 rounded-2xl p-4 bg-gray-50 flex flex-col justify-center items-center text-center">
              <ImageIcon className="h-6 w-6 text-gray-300" />
              <span className="text-[9px] font-extrabold text-gray-400 mt-2 block uppercase">QRIS PNG</span>
              <span className="text-[8px] text-gray-300 block">qris_rekap.png</span>
            </div>

            <div className="space-y-2 flex flex-col justify-center">
              <button
                type="button"
                onClick={() => onHandleAlert("Upload QRIS Baru")}
                className="w-full text-center py-2 px-3 border border-gray-200 hover:bg-gray-100/40 text-gray-500 rounded-xl text-[10px] font-bold"
              >
                Ganti Gambar QRIS
              </button>
              <button
                type="button"
                onClick={() => onHandleAlert("Check integrasi google maps")}
                className="w-full text-center py-2 px-3 border border-gray-200 hover:bg-gray-100/40 text-gray-500 rounded-xl text-[10px] font-bold"
              >
                Cek Kordinasi Maps
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 pt-6 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-brand-teal-600 hover:bg-brand-teal-500 text-white rounded-xl text-xs font-bold shadow-md shadow-brand-teal-600/10 cursor-pointer"
          >
            Simpan Pengaturan
          </button>
        </div>
      </form>
    </div>
  );
}
