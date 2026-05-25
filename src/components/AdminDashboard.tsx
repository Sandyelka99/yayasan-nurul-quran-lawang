/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Coins, 
  Users, 
  Heart, 
  GraduationCap, 
  Building, 
  Image as ImageIcon, 
  FileText, 
  Video, 
  Settings, 
  Menu, 
  X, 
  TrendingUp, 
  CheckCircle, 
  Plus, 
  Sparkles,
  ToggleLeft,
  ToggleRight,
  HandHeart,
  Calendar,
  Eye,
  Trash
} from "lucide-react";
import { Campaign } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface AdminDashboardProps {
  campaigns: Campaign[];
  onUpdateCampaign: (campaignId: string, updated: Partial<Campaign>) => void;
  constructionPercent: number;
  onUpdateConstruction: (percent: number) => void;
  totalDonation: number;
  onAddManualDonation: (amount: number, donorName: string, campaignId: string) => void;
}

type AdminTab = 
  | "dashboard" 
  | "program" 
  | "donator" 
  | "foster" 
  | "children" 
  | "progress" 
  | "gallery" 
  | "about" 
  | "teachers" 
  | "youtube" 
  | "reports" 
  | "settings";

export default function AdminDashboard({
  campaigns,
  onUpdateCampaign,
  constructionPercent,
  onUpdateConstruction,
  totalDonation,
  onAddManualDonation,
}: AdminDashboardProps) {
  
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Local Simulator Form state for manual donation injections
  const [donorName, setDonorName] = useState("");
  const [donateAmount, setDonateAmount] = useState("1000000");
  const [selectedCampaignId, setSelectedCampaignId] = useState(campaigns[0]?.id || "pesantren-pembangunan");

  const [newCampaignTitle, setNewCampaignTitle] = useState("");
  const [adminToast, setAdminToast] = useState<{ message: string; type: "success" | "info" } | null>(null);

  const showToast = (message: string, type: "success" | "info" = "info") => {
    setAdminToast({ message, type });
    setTimeout(() => {
      setAdminToast(null);
    }, 4500);
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "program", label: "Program Donasi", icon: Coins },
    { id: "donator", label: "Donatur", icon: Users },
    { id: "foster", label: "Orang Tua Asuh", icon: Heart },
    { id: "children", label: "Anak Asuh", icon: GraduationCap },
    { id: "progress", label: "Progress Pembangunan", icon: Building },
    { id: "gallery", label: "Galeri", icon: ImageIcon },
    { id: "about", label: "Profil Yayasan", icon: Building },
    { id: "teachers", label: "Asatidzah", icon: Sparkles },
    { id: "youtube", label: "Kajian YouTube", icon: Video },
    { id: "reports", label: "Laporan", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleActionAlert = (actionName: string) => {
    showToast(`Simulasi: Fitur "${actionName}" akan aktif penuh setelah integrasi database riil yayasan diimplementasikan.`, "info");
  };

  const handleManualInfaqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donateAmount || !selectedCampaignId) return;
    
    onAddManualDonation(parseInt(donateAmount), donorName, selectedCampaignId);
    setDonorName("");
    setDonateAmount("1000000");
    showToast(`Alhamdulillah, kontribusi donasi oleh "${donorName}" senilai Rp ${parseInt(donateAmount).toLocaleString("id-ID")} berhasil disimulasikan!`, "success");
  };

  // Recent dummy transactions matching prompt specifications
  const recentTransactions = [
    { name: "Hamba Allah", program: "Pembangunan Pesantren", nominal: 1000000, date: "25 Mei 2026", status: "Berhasil" },
    { name: "Abdullah", program: "Wakaf Al-Qur’an", nominal: 250000, date: "24 Mei 2026", status: "Berhasil" },
    { name: "Ummu Maryam", program: "Orang Tua Asuh", nominal: 300000, date: "24 Mei 2026", status: "Berhasil" },
    { name: "Hamba Allah", program: "Program Makan Santri", nominal: 150000, date: "23 Mei 2026", status: "Berhasil" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row text-brand-dark-900 font-sans relative">
      
      {/* 1. SIDEBAR (Left on Desktop, Drawer on Mobile) */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-brand-dark-950 text-white transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between border-r border-[#102b38]`}>
        
        <div>
          {/* Sidebar Top: Branding Section */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-brand-teal-900/40 bg-brand-dark-900">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-teal-500 flex items-center justify-center font-extrabold text-sm text-white shadow-sm font-mono">
                NQ
              </div>
              <div>
                <span className="block font-bold text-xs">Nurul Quran Admin</span>
                <span className="block text-[8px] text-brand-teal-400 font-bold uppercase tracking-wider">SANDBOX ENGINE v1.2</span>
              </div>
            </div>
            {/* Close side panel button (Mobile only) */}
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1 rounded-lg hover:bg-white/10 text-gray-400 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="p-3.5 space-y-1 overflow-y-auto max-h-[80vh] scrollbar-none">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as AdminTab);
                    setIsSidebarOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-brand-teal-500/15 text-brand-teal-300 border border-brand-teal-500/10 shadow-sm"
                      : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <IconComponent className="h-4 w-4 shrink-0 text-brand-teal-400" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom: Auditor/Developer footprint */}
        <div className="p-4 border-t border-[#122e3b] bg-[#07131a] text-center">
          <span className="text-[9px] uppercase font-extrabold tracking-widest text-gray-500 block">Syar'i Audit Cleared</span>
          <span className="text-[8px] text-brand-gold-500 font-semibold block mt-1">Amanah 100% Bebas Riba</span>
        </div>

      </aside>

      {/* Backdrop cover for mobile drawer view */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-brand-dark-950/60 backdrop-blur-sm"
        />
      )}


      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        
        {/* TOPBAR PANEL */}
        <header className="h-16 bg-white border-b border-gray-150 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-30 shadow-none">
          
          <div className="flex items-center gap-4">
            {/* Hamburger trigger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kepengurusan:</span>
              <span className="text-xs font-mono font-extrabold text-brand-teal-600 bg-brand-teal-50 px-2.5 py-1 rounded-lg border border-brand-teal-100">
                PONDOK SUNNAH LAWANG
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 py-1.5 px-3.5 rounded-full border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping shrink-0" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider">Live Sandbox State</span>
            </div>
          </div>

        </header>

        {/* ADMIN SCROLLABLE CONTENTS CONTAINER */}
        <main className="flex-1 p-4 sm:p-8 space-y-8 relative">
          
          {/* TOAST PANEL */}
          <AnimatePresence>
            {adminToast && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className={`fixed top-20 right-4 sm:right-8 z-55 p-4 rounded-2xl shadow-xl max-w-sm border flex items-start gap-3 leading-normal font-semibold text-xs ${
                  adminToast.type === "success" 
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-brand-teal-50 border-brand-teal-150 text-brand-teal-800"
                }`}
              >
                <span className="text-sm shrink-0">
                  {adminToast.type === "success" ? "✓" : "ℹ️"}
                </span>
                <div className="flex-1">
                  <span className="block font-extrabold uppercase text-[9px] tracking-wide mb-0.5">
                    {adminToast.type === "success" ? "Operasi Sukses" : "Informasi Simulasi"}
                  </span>
                  <p>{adminToast.message}</p>
                </div>
                <button 
                  onClick={() => setAdminToast(null)}
                  className="text-gray-400 hover:text-brand-teal-600 font-bold ml-1 text-sm focus:outline-none shrink-0"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* TAB 1: CORE DASHBOARD VISUALizer */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">

              {/* Header Title Grid */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold tracking-tight text-brand-dark-900">
                    Sistem Manajemen Keuangan & Asset
                  </h1>
                  <p className="text-xs text-gray-400 font-semibold mt-1">
                    Berikut mutasi ringkasan donasi, progress asrama, serta andil santri yang diawasi ustadz pengawas.
                  </p>
                </div>
                
                {/* Simulator manual sync button */}
                <button
                  onClick={() => handleActionAlert("Tarik Laporan PDF Tahun Berjalan")}
                  className="py-2.5 px-5 bg-brand-dark-950 hover:bg-brand-dark-900 transition-colors text-white text-xs font-bold rounded-xl cursor-pointer flex items-center gap-1.5 w-max"
                >
                  <FileText className="h-4 w-4" />
                  Eksport Laporan Keuangan (.PDF)
                </button>
              </div>

              {/* Summary Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                
                <div className="p-4 bg-white rounded-2xl border border-gray-150 shadow-sm flex items-center gap-3.5">
                  <div className="p-2.5 bg-brand-teal-50 text-brand-teal-600 rounded-xl shrink-0">
                    <Coins className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">Total Donasi Yayasan</span>
                    <span className="block text-sm font-extrabold font-mono text-brand-dark-900 mt-0.5">
                      Rp780.000.000
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-150 shadow-sm flex items-center gap-3.5">
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">Donatur Terdaftar</span>
                    <span className="block text-sm font-extrabold font-mono text-brand-dark-900 mt-0.5">
                      2.430 Akun
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-150 shadow-sm flex items-center gap-3.5">
                  <div className="p-2.5 bg-[#eff6ff] text-blue-600 rounded-xl shrink-0">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">Program Aktif</span>
                    <span className="block text-sm font-extrabold font-mono text-brand-dark-900 mt-0.5">
                      12 Program
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-150 shadow-sm flex items-center gap-3.5">
                  <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl shrink-0">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">Anak Asuh Aktif</span>
                    <span className="block text-sm font-extrabold font-mono text-brand-dark-900 mt-0.5">
                      86 Anak
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-150 shadow-sm flex items-center gap-3.5">
                  <div className="p-2.5 bg-pink-50 text-pink-600 rounded-xl shrink-0">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">Progress Pembangunan</span>
                    <span className="block text-sm font-extrabold font-mono text-brand-dark-900 mt-0.5">
                      {constructionPercent}% Stabil
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-150 shadow-sm flex items-center gap-3.5">
                  <div className="p-2.5 bg-[#fef2f2] text-red-600 rounded-xl shrink-0">
                    <Video className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest">Video Kajian</span>
                    <span className="block text-sm font-extrabold font-mono text-brand-dark-900 mt-0.5">
                      24 Video
                    </span>
                  </div>
                </div>

              </div>

              {/* Main row layouts: Chart vs Recent transaction logs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Chart Box */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-gray-150 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <span className="text-[10px] text-brand-teal-600 font-extrabold block uppercase tracking-wider">Laporan Pertumbuhan Kas</span>
                      <h3 className="text-sm font-extrabold text-brand-dark-900 mt-0.5">Perkembangan Donasi Bulanan</h3>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold font-mono">Tahun 2026 (Jan-Mei)</span>
                  </div>

                  {/* Tailwind div-based bar chart simulator */}
                  <div className="h-56 flex items-end justify-between px-4 pt-4 border-b border-l border-gray-200">
                    
                    {/* Jan */}
                    <div className="flex flex-col items-center flex-1 group">
                      <div className="w-10 sm:w-12 bg-gray-100 group-hover:bg-brand-teal-100 transition-colors rounded-t-lg h-[80px] relative flex flex-col justify-end">
                        <div className="absolute top-[-1.5rem] left-0 right-0 text-center font-mono font-bold text-[9px] text-gray-400">80jt</div>
                        <div className="bg-brand-teal-500 rounded-t-lg h-[45px] group-hover:bg-brand-teal-600 transition-colors" />
                      </div>
                      <span className="text-[9px] font-extrabold mt-2 text-gray-500">Januari</span>
                    </div>

                    {/* Feb */}
                    <div className="flex flex-col items-center flex-1 group">
                      <div className="w-10 sm:w-12 bg-gray-100 group-hover:bg-brand-teal-100 transition-colors rounded-t-lg h-[125px] relative flex flex-col justify-end">
                        <div className="absolute top-[-1.5rem] left-0 right-0 text-center font-mono font-bold text-[9px] text-gray-400">125jt</div>
                        <div className="bg-brand-teal-500 rounded-t-lg h-[75px] group-hover:bg-brand-teal-600 transition-colors" />
                      </div>
                      <span className="text-[9px] font-extrabold mt-2 text-gray-500">Februari</span>
                    </div>

                    {/* Mar */}
                    <div className="flex flex-col items-center flex-1 group">
                      <div className="w-10 sm:w-12 bg-gray-100 group-hover:bg-brand-teal-100 transition-colors rounded-t-lg h-[160px] relative flex flex-col justify-end">
                        <div className="absolute top-[-1.5rem] left-0 right-0 text-center font-mono font-bold text-[9px] text-gray-400">160jt</div>
                        <div className="bg-brand-teal-500 rounded-t-lg h-[98px] group-hover:bg-brand-teal-600 transition-colors" />
                      </div>
                      <span className="text-[9px] font-extrabold mt-2 text-gray-500">Maret</span>
                    </div>

                    {/* Apr */}
                    <div className="flex flex-col items-center flex-1 group">
                      <div className="w-10 sm:w-12 bg-gray-100 group-hover:bg-brand-teal-100 transition-colors rounded-t-lg h-[185px] relative flex flex-col justify-end">
                        <div className="absolute top-[-1.5rem] left-0 right-0 text-center font-mono font-bold text-[9px] text-gray-400">185jt</div>
                        <div className="bg-brand-teal-500 rounded-t-lg h-[115px] group-hover:bg-brand-teal-600 transition-colors" />
                      </div>
                      <span className="text-[9px] font-extrabold mt-2 text-gray-500">April</span>
                    </div>

                    {/* Mei */}
                    <div className="flex flex-col items-center flex-1 group">
                      <div className="w-10 sm:w-12 bg-brand-teal-50 group-hover:bg-brand-teal-100 transition-colors rounded-t-lg h-[230px] relative flex flex-col justify-end">
                        <div className="absolute top-[-1.5rem] left-0 right-0 text-center font-mono font-bold text-[9px] text-[#0f766e]">230jt</div>
                        <div className="bg-brand-teal-600 rounded-t-lg h-[150px]" />
                      </div>
                      <span className="text-[9px] font-extrabold mt-2 text-[#0f766e]">Mei</span>
                    </div>

                  </div>
                </div>

                {/* Recent Transactions list */}
                <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-gray-150 shadow-sm space-y-4">
                  <div className="border-b border-gray-100 pb-3 flex justify-between items-center">
                    <h3 className="text-sm font-extrabold text-brand-dark-900">Pembayaran Terkini</h3>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-brand-teal-50 text-brand-teal-600 border border-brand-teal-100 font-bold uppercase tracking-wider">Amanah</span>
                  </div>

                  <div className="space-y-3.5">
                    {recentTransactions.map((tx, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-3 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="space-y-1">
                          <span className="block font-bold text-brand-dark-900">{tx.name}</span>
                          <span className="block text-[10px] text-gray-400 font-semibold">{tx.program} • {tx.date}</span>
                        </div>
                        <div className="text-right space-y-1">
                          <span className="block font-extrabold font-mono text-emerald-600">
                            +Rp{tx.nominal.toLocaleString("id-ID")}
                          </span>
                          <span className="inline-block text-[8px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded uppercase">
                            {tx.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Quick Actions Panel */}
              <div className="bg-[#0c202a] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 islamic-grid opacity-10 pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-brand-gold-500 uppercase block">KONTROL AKSI INSTAN</span>
                    <h3 className="text-sm sm:text-base font-extrabold text-white mt-1">Aksi Cepat Administrator</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {[
                      "Tambah Program Donasi",
                      "Upload Progress Pembangunan",
                      "Tambah Dokumentasi Galeri",
                      "Tambah Guru Asatidzah",
                      "Tambah Link Video Kajian",
                      "Buat Laporan Evaluasi"
                    ].map((act, i) => (
                      <button
                        key={i}
                        onClick={() => handleActionAlert(act)}
                        className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-teal-500 rounded-2xl transition-all cursor-pointer flex flex-col justify-between text-left h-28"
                      >
                        <Plus className="h-5 w-5 text-brand-teal-400 shrink-0" />
                        <span className="text-[10px] font-extrabold leading-normal text-gray-200">
                          {act}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* State Modifier Sandbox Row (Retaining current Campaign slider + Infaq simulator logic) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
                
                {/* Construction Slider */}
                <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-gray-150 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-brand-dark-900 pb-2 border-b border-gray-100">
                      Ubah Progress Pesantren
                    </h3>
                    <p className="text-[11px] text-gray-400 font-semibold mt-1 leading-relaxed">
                      Geser slider di bawah ini untuk mensimulasikan perubahan kurva asrama pada homepage secara dinamis.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between items-center text-xs font-mono font-extrabold text-[#0d7490]">
                      <span>Kemajuan:</span>
                      <span className="text-base font-extrabold font-mono">{constructionPercent}%</span>
                    </div>
                    
                    <input 
                      type="range"
                      min="1"
                      max="100"
                      value={constructionPercent}
                      onChange={(e) => onUpdateConstruction(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-150 rounded-lg appearance-none cursor-pointer accent-brand-teal-500"
                    />
                    
                    <div className="flex justify-between text-[9px] font-bold text-gray-400">
                      <span>Struktur</span>
                      <span>Renovasi</span>
                      <span>Finishing</span>
                    </div>
                  </div>
                </div>

                {/* Cash Infaq Injectory Form */}
                <div className="lg:col-span-8 bg-white p-6 sm:p-7 rounded-3xl border border-gray-150 shadow-sm space-y-4">
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-brand-dark-900 pb-2 border-b border-gray-100">
                    Sistem Penyetoran Donasi Kas (Simulator)
                  </h3>

                  <form onSubmit={handleManualInfaqSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[8px] font-bold text-gray-400 uppercase mb-1.5">Nama Muhsinin</label>
                        <input 
                          type="text"
                          required
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          placeholder="Misal: Uzzam Al-Khattab"
                          className="w-full text-xs font-bold rounded-xl border border-gray-150 bg-gray-50 p-2.5 text-brand-dark-900 focus:bg-white focus:outline-none focus:border-brand-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] font-bold text-gray-400 uppercase mb-1.5">Alokasi Program</label>
                        <select
                          value={selectedCampaignId}
                          onChange={(e) => setSelectedCampaignId(e.target.value)}
                          className="w-full text-xs font-semibold rounded-xl border border-gray-150 bg-gray-50 p-2.5 text-brand-dark-900 focus:bg-white focus:outline-none focus:border-brand-teal-500"
                        >
                          {campaigns.map((camp) => (
                            <option key={camp.id} value={camp.id}>
                              {camp.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[8px] font-bold text-gray-400 uppercase mb-1.5">Jumlah Nominal (Rupiah)</label>
                        <input 
                          type="number"
                          required
                          value={donateAmount}
                          onChange={(e) => setDonateAmount(e.target.value)}
                          className="w-full text-xs font-mono font-bold rounded-xl border border-gray-150 bg-gray-50 p-2.5 text-brand-dark-900 focus:bg-white focus:outline-none focus:border-brand-teal-500"
                        />
                      </div>
                      
                      <div className="flex items-end">
                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 font-extrabold text-xs text-white shadow-md shadow-brand-teal-500/15 cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Suntik Mutasi Berhasil
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>

            </div>
          )}


          {/* TAB 2: PROGRAM LIST & THRESHOLD CRITERIAs */}
          {activeTab === "program" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-gray-150 pb-4">
                <div>
                  <h3 className="text-base font-extrabold text-brand-dark-900">Program Penyaluran Aktif</h3>
                  <p className="text-xs text-gray-400 font-semibold">Tentukan nominal pencapaian target dan status mendesak.</p>
                </div>
                <button
                  onClick={() => handleActionAlert("Tambah Kampanye Baru")}
                  className="py-2.5 px-4 text-xs font-extrabold text-white bg-brand-dark-950 rounded-xl hover:bg-brand-dark-900 transition-colors"
                >
                  Tambah Saluran Baru
                </button>
              </div>

              <div className="space-y-4">
                {campaigns.map((c) => (
                  <div key={c.id} className="p-4 rounded-2xl border border-gray-150 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="max-w-md">
                      <span className="text-[9px] uppercase font-bold text-brand-teal-600 bg-brand-teal-50 px-2.5 py-0.5 rounded">
                        Kategori: {c.category || "Infaq"}
                      </span>
                      <h4 className="text-xs sm:text-sm font-extrabold text-brand-dark-900 mt-1">{c.title}</h4>
                      <p className="text-[11px] text-gray-400 font-medium leading-relaxed mt-0.5">{c.description}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="space-y-1">
                        <span className="block text-[8px] text-gray-400 uppercase tracking-widest">Terkumpul</span>
                        <input 
                          type="number"
                          value={c.currentAmount}
                          onChange={(e) => onUpdateCampaign(c.id, { currentAmount: parseInt(e.target.value) || 0 })}
                          className="w-32 py-1 px-2.5 text-xs font-mono font-bold bg-white border border-gray-150 rounded"
                        />
                      </div>

                      <div className="space-y-1">
                        <span className="block text-[8px] text-gray-400 uppercase tracking-widest">Target Biaya</span>
                        <input 
                          type="number"
                          value={c.targetAmount}
                          onChange={(e) => onUpdateCampaign(c.id, { targetAmount: parseInt(e.target.value) || 0 })}
                          className="w-32 py-1 px-2.5 text-xs font-mono font-bold bg-white border border-gray-150 rounded"
                        />
                      </div>

                      <div className="pt-3">
                        <button
                          onClick={() => onUpdateCampaign(c.id, { isUrgent: !c.isUrgent })}
                          className={`flex items-center gap-1 py-1 px-3 rounded-xl text-[10px] font-extrabold border ${
                            c.isUrgent 
                              ? "bg-red-50 border-red-100 text-red-600" 
                              : "bg-white border-gray-150 text-gray-500"
                          }`}
                        >
                          {c.isUrgent ? "Darurat" : "Normal"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* OTHER TABS FALLBACK AND MINI SECTIONS RENDERS */}
          {activeTab !== "dashboard" && activeTab !== "program" && (
            <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm max-w-4xl space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-teal-50 border border-brand-teal-100 flex items-center justify-center text-brand-teal-600 shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-brand-dark-900 uppercase">
                    Kelola {activeTab.replace(/^\w/, (c) => c.toUpperCase())}
                  </h3>
                  <span className="block text-[11px] text-gray-400 font-semibold mt-0.5">
                    Modul kepengurusan internal asrama sunnah Lawang.
                  </span>
                </div>
              </div>

              {activeTab === "donator" && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    Daftar 2.430 donatur terdaftar secara tertib. Gunakan rekap rincian di bawah ini untuk audit bulanan.
                  </p>
                  <table className="w-full text-left text-xs text-gray-500 border-collapse">
                    <thead>
                      <tr className="bg-gray-150 text-brand-dark-900 font-extrabold text-[10px]">
                        <th className="p-3 rounded-l-lg">Donatur</th>
                        <th className="p-3">Program</th>
                        <th className="p-3">Sertifikasi</th>
                        <th className="p-3 text-right rounded-r-lg">Nominal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-3 font-bold">Umar Syihab</td>
                        <td className="p-3">Pembangunan Pesantren</td>
                        <td className="p-3"><span className="text-emerald-600 uppercase font-extrabold text-[8px] bg-emerald-50 px-2 py-0.5 rounded">Verified</span></td>
                        <td className="p-3 text-right font-mono font-bold">Rp5.000.000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold">Abdurrahman Fauzan</td>
                        <td className="p-3">Wakaf Qur’an</td>
                        <td className="p-3"><span className="text-emerald-600 uppercase font-extrabold text-[8px] bg-emerald-50 px-2 py-0.5 rounded">Verified</span></td>
                        <td className="p-3 text-right font-mono font-bold text-gray-800">Rp2.000.000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold">Suad Humairoh</td>
                        <td className="p-3">Orang Tua Asuh Sinergi</td>
                        <td className="p-3"><span className="text-emerald-600 uppercase font-extrabold text-[8px] bg-emerald-50 px-2 py-0.5 rounded">Verified</span></td>
                        <td className="p-3 text-right font-mono font-bold text-gray-800">Rp450.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "foster" && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    Rangkuman status Orang Tua Asuh beasiswa santri tahfidz usia balita (RUTABA).
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-150 space-y-1">
                      <span className="text-[9px] uppercase font-bold text-[#b45309] block">Beasiswa Dasar</span>
                      <span className="font-extrabold text-base block text-brand-dark-900">42 Paket</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-150 space-y-1">
                      <span className="text-[9px] uppercase font-bold text-teal-600 block">Ketersediaan Gizi</span>
                      <span className="font-extrabold text-base block text-brand-dark-900">28 Paket</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-150 space-y-1">
                      <span className="text-[9px] uppercase font-bold text-brand-dark-400 block">Beasiswa Penuh</span>
                      <span className="font-extrabold text-base block text-brand-dark-900">16 Paket</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "children" && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    Arsip 86 Anak Asuh/Santri yang berdomisili di Lawang Malang. Identitas asli dilindungi undang-undang sosial & syariat adab pesantren.
                  </p>
                  <table className="w-full text-left text-xs text-gray-500 border-collapse">
                    <thead>
                      <tr className="bg-gray-150 text-brand-dark-900 font-extrabold text-[10px]">
                        <th className="p-3 rounded-l-lg">ID Santri</th>
                        <th className="p-3">Jenjang</th>
                        <th className="p-3">Hafalan</th>
                        <th className="p-3 text-right rounded-r-lg">Status Donatur</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-3 font-mono font-bold">NQ-SA-04</td>
                        <td className="p-3">RUTABA (Balita)</td>
                        <td className="p-3 font-semibold">1.5 Juz</td>
                        <td className="p-3 text-right"><span className="text-brand-teal-600 uppercase font-extrabold text-[8px] bg-brand-teal-50 px-2 py-0.5 rounded">Aktif</span></td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold">NQ-SA-12</td>
                        <td className="p-3">Rumah Tahfizz (Anak)</td>
                        <td className="p-3 font-semibold">4 Juz</td>
                        <td className="p-3 text-right"><span className="text-brand-teal-600 uppercase font-extrabold text-[8px] bg-brand-teal-50 px-2 py-0.5 rounded">Aktif</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "progress" && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    Kelola persentase kemajuan pembangunan pesantren Nurul Quran Lawang Malang.
                  </p>
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-150 space-y-4 max-w-md">
                    <span className="text-[10px] font-extrabold text-brand-teal-600 uppercase block tracking-wider">Fisik Gedung Asrama</span>
                    <div className="flex justify-between font-mono font-extrabold text-xs text-brand-dark-900">
                      <span>Prosentase:</span>
                      <span>{constructionPercent}%</span>
                    </div>
                    <input 
                      type="range"
                      min="1"
                      placeholder="Slide"
                      max="100"
                      value={constructionPercent}
                      onChange={(e) => onUpdateConstruction(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <button
                      onClick={() => handleActionAlert("Update progress ke database")}
                      className="py-2 px-4 rounded-xl text-xs font-bold text-white bg-brand-dark-950 hover:bg-brand-dark-900 w-full"
                    >
                      Kirim Update Progress
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    Kelola 12 item arsip visual dokumentasi yayasan agar tetap santun & murni.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-150 text-center">
                      <ImageIcon className="h-6 w-6 text-gray-400 mx-auto" />
                      <span className="block text-[11px] font-bold text-gray-800 mt-2">Pendidikan (3 item)</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-150 text-center">
                      <ImageIcon className="h-6 w-6 text-gray-400 mx-auto" />
                      <span className="block text-[11px] font-bold text-gray-800 mt-2">Pembangunan (2 item)</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-150 text-center">
                      <button
                        onClick={() => handleActionAlert("Tambah foto galeri")}
                        className="w-full text-center text-xs font-extrabold text-brand-teal-600 hover:underline"
                      >
                        + Tambah Foto
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "teachers" && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    Daftar 7 Ustadzat Pembina Tarbiyah di Lapangan.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Ustadzah Aisyah", "Ustadzah Maryam", "Ustadzah Khadijah", "Ustadzah Hafshah"].map((name, i) => (
                      <div key={i} className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-brand-dark-900 block">{name}</span>
                          <span className="text-[10px] text-gray-400 font-semibold block mt-0.5">Bidang Syir / Tarbiyah</span>
                        </div>
                        <button
                          onClick={() => handleActionAlert(`Edit profil ${name}`)}
                          className="py-1 px-3 bg-white border border-gray-200 text-gray-500 rounded hover:bg-gray-100 text-[10px] font-bold"
                        >
                          Kelola Profil
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "youtube" && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    Daftar video kajian yang disiarkan di media sosial.
                  </p>
                  <div className="p-4 bg-brand-teal-50 border border-brand-teal-100 rounded-2xl text-brand-teal-800 text-xs font-semibold leading-normal">
                    *Alamat video terpilih terpasang: https://www.youtube.com/embed/l_yI2S26b5U
                  </div>
                  <button
                    onClick={() => handleActionAlert("Masukkan link video youtube baru")}
                    className="py-2.5 px-4 bg-[#b91c1c] text-white rounded-xl text-xs font-bold hover:bg-[#991b1b]"
                  >
                    Tambah Video Kajian Youtube
                  </button>
                </div>
              )}

              {activeTab === "reports" && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    Silakan download atau cetak laporan PDF pertanggungjawaban di bawah ini:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                    <button onClick={() => handleActionAlert("Download Lap Keuangan Q1")} className="p-4 rounded-xl border border-gray-150 hover:bg-gray-50 text-left flex justify-between">
                      <span>Laporan Kas Q1-2026.pdf</span>
                      <span className="text-brand-teal-600">Download</span>
                    </button>
                    <button onClick={() => handleActionAlert("Download Lap Wisuda Qur'an")} className="p-4 rounded-xl border border-gray-150 hover:bg-gray-50 text-left flex justify-between">
                      <span>Laporan Wisuda Qur'an 2026.pdf</span>
                      <span className="text-brand-teal-600">Download</span>
                    </button>
                    <button onClick={() => handleActionAlert("Download Laporan Audit Syariah")} className="p-4 rounded-xl border border-gray-150 hover:bg-gray-50 text-left flex justify-between">
                      <span>Laporan Audit Syariah Tahunan.pdf</span>
                      <span className="text-brand-teal-600">Download</span>
                    </button>
                    <button onClick={() => handleActionAlert("Download Inventaris Meja Belajar")} className="p-4 rounded-xl border border-gray-150 hover:bg-gray-50 text-left flex justify-between">
                      <span>Buku Inventaris Meja Belajar.pdf</span>
                      <span className="text-brand-teal-600">Download</span>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    Atur legalitas legalisasi kearsipan digital, nama website, dan email notifikasi sistem.
                  </p>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-150 space-y-2">
                    <span className="text-[10px] font-extrabold text-brand-dark-500 block uppercase">Notifikasi Email Pengurus</span>
                    <span className="font-mono text-xs text-gray-500 italic block">ebond.ig@gmail.com</span>
                  </div>
                  <button
                    onClick={() => handleActionAlert("Simpan pengaturan sistem")}
                    className="py-2 px-5 bg-brand-dark-950 text-white font-bold text-xs rounded-xl hover:bg-brand-dark-900"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              )}

              {/* General action fallback button */}
              <div className="pt-6 border-t border-gray-100 flex gap-4">
                <button
                  onClick={() => {
                    showToast("Sinkronisasi simulasi state berhasil dikonfigurasi.", "success");
                    setActiveTab("dashboard");
                  }}
                  className="py-2.5 px-6 rounded-xl bg-brand-teal-50 text-brand-teal-600 hover:bg-brand-teal-100 transition-colors text-xs font-bold cursor-pointer"
                >
                  Kembali ke Dashboard Utama
                </button>
              </div>

            </div>
          )}

        </main>
      </div>

    </div>
  );
}
