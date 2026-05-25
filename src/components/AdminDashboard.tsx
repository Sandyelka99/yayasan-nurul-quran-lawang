/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, Coins, Users, Heart, User, Building2, Image as ImageIcon, 
  BookOpen, Video, Calendar, FileText, Settings, Menu, X, Sparkles, 
  LogOut, Home, Bell
} from "lucide-react";
import { Campaign } from "../types";

// Import modular sub-components
import AdminLogin from "./admin/AdminLogin";
import { 
  AdminDashboardView, 
  AdminProgramDonasiView, 
  AdminDonaturView, 
  AdminOrangTuaAsuhView, 
  AdminAnakAsuhView, 
  AdminProgressView, 
  AdminGaleriView, 
  AdminAsatidzahView, 
  AdminDakwahView, 
  AdminKajianYoutubeView, 
  AdminJadwalKajianView, 
  AdminMateriDownloadView, 
  AdminPosterDakwahView, 
  AdminLaporanView, 
  AdminLaporanKeuanganView, 
  AdminLaporanProgramView, 
  AdminSettingsView
} from "./admin/AdminPages";

interface AdminDashboardProps {
  campaigns: Campaign[];
  onUpdateCampaign: (campaignId: string, updated: Partial<Campaign>) => void;
  constructionPercent: number;
  onUpdateConstruction: (percent: number) => void;
  totalDonation: number;
  onAddManualDonation: (amount: number, donorName: string, campaignId: string) => void;
  onNavigate?: (view: string) => void;
}

export default function AdminDashboard({
  campaigns,
  onUpdateCampaign,
  constructionPercent,
  onUpdateConstruction,
  totalDonation,
  onAddManualDonation,
  onNavigate
}: AdminDashboardProps) {

  // Authentication State with LocalStorage persistence
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem("admin_is_logged_in") === "true";
  });
  const [isLoginView, setIsLoginView] = useState(false);

  // Active Tab State (mapped to the 17 specified sub-views)
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sidebar controls for responsive viewports
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Modern persistent Toast Notification system
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // All 17 menu items
  const menuItems = [
    { id: "dashboard", label: "Dashboard", category: "Utama", icon: LayoutDashboard },
    { id: "program-donasi", label: "Program Donasi & Wakaf", category: "Zakat & Infaq", icon: Coins },
    { id: "donatur", label: "Donatur", category: "Zakat & Infaq", icon: Users },
    { id: "orang-tua-asuh", label: "Orang Tua Asuh", category: "Sosial Santri", icon: Heart },
    { id: "anak-asuh", label: "Anak Asuh (Santri)", category: "Sosial Santri", icon: User },
    { id: "progress", label: "Progress Pembangunan", category: "Fasilitas Belajar", icon: Building2 },
    { id: "galeri", label: "Galeri Media", category: "Fasilitas Belajar", icon: ImageIcon },
    { id: "asatidzah", label: "Profil Asatidzah", category: "Kurikulum & Dakwah", icon: Sparkles },
    { id: "dakwah", label: "Modul Dakwah Digital", category: "Kurikulum & Dakwah", icon: BookOpen },
    { id: "kajian-youtube", label: "Kajian YouTube", category: "Kurikulum & Dakwah", icon: Video },
    { id: "jadwal-kajian", label: "Jadwal Kajian", category: "Kurikulum & Dakwah", icon: Calendar },
    { id: "materi-download", label: "Materi Download", category: "Kurikulum & Dakwah", icon: FileText },
    { id: "poster-dakwah", label: "Poster Dakwah", category: "Kurikulum & Dakwah", icon: ImageIcon },
    { id: "laporan", label: "Laporan", category: "Transparansi & Keuangan", icon: FileText },
    { id: "laporan-keuangan", label: "Laporan Keuangan", category: "Transparansi & Keuangan", icon: FileText },
    { id: "laporan-program", label: "Laporan Program", category: "Transparansi & Keuangan", icon: FileText },
    { id: "settings", label: "Pengaturan Website", category: "Website", icon: Settings },
  ];

  // Sync tab with URL location parameters
  useEffect(() => {
    const handleLocationChange = () => {
      const pathname = window.location.pathname;
      if (pathname === "/admin/login") {
        setIsLoginView(true);
      } else if (pathname.startsWith("/admin/")) {
        const subPath = pathname.replace("/admin/", "");
        // Match specific tab
        const matched = menuItems.find(item => item.id === subPath);
        if (matched) {
          setActiveTab(matched.id);
          setIsLoginView(false);
        } else {
          setActiveTab("dashboard");
          setIsLoginView(false);
        }
      } else if (pathname === "/admin" || pathname === "/admin/") {
        if (isLoggedIn) {
          window.history.replaceState(null, "", "/admin/dashboard");
          setActiveTab("dashboard");
          setIsLoginView(false);
        } else {
          window.history.replaceState(null, "", "/admin/login");
          setIsLoginView(true);
        }
      }
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, [isLoggedIn]);

  // Auth Guard redirect
  useEffect(() => {
    if (!isLoggedIn && window.location.pathname !== "/admin/login") {
      window.history.replaceState(null, "", "/admin/login");
      setIsLoginView(true);
    }
  }, [isLoggedIn]);

  // Toast Trigger Helper
  const triggerToast = (actionName: string) => {
    setToastMessage(`Simulasi Admin: Fitur tambah/edit/hapus akan berfungsi penuh setelah integrasi database.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Login handler
  const handleLoginSuccess = () => {
    localStorage.setItem("admin_is_logged_in", "true");
    setIsLoggedIn(true);
    setIsLoginView(false);
    setActiveTab("dashboard");
    window.history.pushState(null, "", "/admin/dashboard");
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("admin_is_logged_in");
    setIsLoggedIn(false);
    setIsLoginView(true);
    window.history.pushState(null, "", "/admin/login");
  };

  // Navigates between panels inside the sidebar
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    window.history.pushState(null, "", `/admin/${tabId}`);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Back to home
  const handleBackToWebsite = () => {
    if (onNavigate) {
      onNavigate("home");
    } else {
      window.location.href = "/";
    }
  };

  // If showing Login View
  if (!isLoggedIn || isLoginView) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  // Render content panel depending on active tab
  const renderActiveView = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <AdminDashboardView 
            campaigns={campaigns} 
            constructionPercent={constructionPercent} 
            totalDonation={totalDonation} 
            onHandleAlert={triggerToast} 
          />
        );
      case "program-donasi":
        return <AdminProgramDonasiView campaigns={campaigns} onHandleAlert={triggerToast} />;
      case "donatur":
        return <AdminDonaturView onHandleAlert={triggerToast} />;
      case "orang-tua-asuh":
        return <AdminOrangTuaAsuhView onHandleAlert={triggerToast} />;
      case "anak-asuh":
        return <AdminAnakAsuhView onHandleAlert={triggerToast} />;
      case "progress":
        return <AdminProgressView onHandleAlert={triggerToast} />;
      case "galeri":
        return <AdminGaleriView onHandleAlert={triggerToast} />;
      case "asatidzah":
        return <AdminAsatidzahView onHandleAlert={triggerToast} />;
      case "dakwah":
        return <AdminDakwahView onHandleAlert={triggerToast} />;
      case "kajian-youtube":
        return <AdminKajianYoutubeView onHandleAlert={triggerToast} />;
      case "jadwal-kajian":
        return <AdminJadwalKajianView onHandleAlert={triggerToast} />;
      case "materi-download":
        return <AdminMateriDownloadView onHandleAlert={triggerToast} />;
      case "poster-dakwah":
        return <AdminPosterDakwahView onHandleAlert={triggerToast} />;
      case "laporan":
        return <AdminLaporanView onHandleAlert={triggerToast} />;
      case "laporan-keuangan":
        return <AdminLaporanKeuanganView onHandleAlert={triggerToast} />;
      case "laporan-program":
        return <AdminLaporanProgramView onHandleAlert={triggerToast} />;
      case "settings":
        return <AdminSettingsView onHandleAlert={triggerToast} />;
      default:
        return (
          <div className="p-8 text-center bg-white border border-gray-150 rounded-2xl">
            <span className="text-gray-400 font-bold block">Tab "{activeTab}" Belum Tersedia.</span>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F9] text-[#0C1F28] flex font-sans selection:bg-brand-teal-500 selection:text-white">
      
      {/* 1. TOAST NOTIFICATION BANNER */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 select-none animate-bounce">
          <div className="bg-brand-dark-950 text-white rounded-2xl shadow-xl border border-brand-teal-500/20 p-4 flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-gold-500 text-brand-dark-950 flex items-center justify-center font-extrabold text-[11px] shrink-0">
              i
            </div>
            <div className="flex-1 space-y-1">
              <span className="block text-[11px] font-black text-brand-gold-400 uppercase tracking-widest">Aksi Prototype</span>
              <p className="text-[10px] text-gray-200 font-semibold leading-relaxed">{toastMessage}</p>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-gray-400 hover:text-white transition-colors p-0.5 pointer-events-auto">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. SIDEBAR NAVIGATION */}
      {/* Sidebar background overlay for mobile screens */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)} 
          className="fixed inset-0 bg-brand-dark-950/40 backdrop-blur-xs z-30 lg:hidden pointer-events-auto"
        />
      )}

      <aside className={`fixed inset-y-0 left-0 w-64 bg-[#0B1E26] border-r border-brand-dark-900 z-40 transform transition-transform duration-300 lg:translate-x-0 lg:static flex flex-col justify-between ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        {/* Brand Banner */}
        <div className="p-4 border-b border-brand-dark-900 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-teal-600 to-brand-teal-500 flex items-center justify-center font-black text-white text-base">
              NQ
            </div>
            <div>
              <span className="block text-xs font-black text-white uppercase tracking-tight">Nurul Quran</span>
              <span className="block text-[9px] font-bold text-brand-teal-400 tracking-wider uppercase">Portal Pengurus</span>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white transition-colors">
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Categories based navigation list */}
        <div className="flex-1 overflow-y-auto px-2 py-4 space-y-5">
          {Object.entries(
            menuItems.reduce((acc, item) => {
              if (!acc[item.category]) acc[item.category] = [];
              acc[item.category].push(item);
              return acc;
            }, {} as Record<string, typeof menuItems>)
          ).map(([cat, items]) => (
            <div key={cat} className="space-y-1">
              <span className="px-3 text-[9px] font-extrabold text-brand-teal-500 uppercase tracking-widest block select-none">
                {cat}
              </span>
              <div className="space-y-0.5">
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleTabClick(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-all group cursor-pointer ${
                        isActive
                          ? "bg-brand-teal-600 text-white font-bold"
                          : "text-gray-400 hover:bg-brand-dark-900 hover:text-white"
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-gray-500 group-hover:text-brand-teal-400 transition-colors"}`} />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer Controls */}
        <div className="p-4 border-t border-brand-dark-900 space-y-1.5 bg-brand-dark-950/40">
          <button 
            onClick={handleBackToWebsite}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-brand-dark-900 text-gray-500 hover:text-brand-teal-400 text-xs font-bold transition-all cursor-pointer"
          >
            <Home className="h-4 w-4" />
            <span>Ke Website Utama</span>
          </button>
          
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-red-950/20 text-gray-500 hover:text-red-400 text-xs font-bold transition-all cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            <span>Keluar Sesi</span>
          </button>
        </div>
      </aside>

      {/* 3. MAIN CONTENT VIEWPORT */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar with quick user settings */}
        <header className="bg-white border-b border-gray-150 h-14 flex items-center justify-between px-4 sm:px-6 shrink-0 shadow-xs z-10">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-gray-50 px-3 py-1.5 border border-gray-150 rounded-xl w-64 text-xs">
              <span className="text-gray-400 shrink-0 font-bold select-none">[🔍]</span>
              <input 
                type="text" 
                placeholder="Pencarian cepat berkas..." 
                className="bg-transparent border-none text-gray-700 placeholder:text-gray-300 focus:outline-none w-full"
                onClick={() => triggerToast("Pencarian global")}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick alert bar */}
            <button 
              onClick={() => triggerToast("Notifikasi Sirekap")} 
              className="relative p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-all cursor-pointer"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-gold-500 rounded-full border border-white" />
            </button>

            {/* User profile */}
            <div className="flex items-center gap-2.5 pl-4 border-l border-gray-100">
              <div className="w-8 h-8 rounded-full bg-brand-teal-50 border border-brand-teal-100 flex items-center justify-center font-bold text-xs text-brand-teal-800 select-none">
                UA
              </div>
              <div className="hidden md:block">
                <span className="block text-xs font-black text-gray-900 leading-none">Ustadzah Admin</span>
                <span className="block text-[9px] text-gray-400 font-extrabold uppercase mt-1 tracking-wider">Super Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic page content layout scroll */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {renderActiveView()}
        </main>
      </div>

    </div>
  );
}
