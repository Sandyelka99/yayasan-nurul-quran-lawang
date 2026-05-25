/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Menu, X, Heart, Settings, ChevronDown } from "lucide-react";

interface NavbarProps {
  activeView: string;
  onNavigate: (viewId: string) => void;
  onOpenDonationModal: () => void;
}

export default function Navbar({ activeView, onNavigate, onOpenDonationModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const [isMobileUnitsSubmenuOpen, setIsMobileUnitsSubmenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const [isMobileReportSubmenuOpen, setIsMobileReportSubmenuOpen] = useState(false);
  const [isMobileDakwahSubmenuOpen, setIsMobileDakwahSubmenuOpen] = useState(false);

  const closeTimeoutRef = React.useRef<any>(null);

  const handleMouseEnter = (menuId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  // Match menu strictly with user requirements, adding Dakwah and optimization
  const menuItems = [
    { id: "home", label: "Beranda" },
    { id: "about", label: "Tentang Yayasan" },
    { id: "units", label: "Pendidikan" },
    { id: "donations", label: "Donasi & Wakaf" },
    { id: "progress", label: "Laporan" },
    { id: "dakwah", label: "Dakwah Digital" },
    { id: "gallery", label: "Galeri" },
    { id: "contact", label: "Kontak" },
  ];

  const unitsSublinks = [
    { id: "units", label: "Semua Pendidikan" },
    { id: "units/rumah-belajar", label: "Nurul Quran Learning Center" },
    { id: "units/rumah-tahfizz", label: "Nurul Quran Tahfidz Center" },
    { id: "units/rutaba", label: "Rumah Tahfidz Balita" },
  ];

  const donationSublinks = [
    { id: "donations", label: "Semua Donasi & Wakaf" },
    { id: "donations/wakaf-pembangunan", label: "Donasi Pembangunan" },
    { id: "donations/wakaf-alquran", label: "Wakaf Al-Qur’an" },
    { id: "donations/program-sosial", label: "Program Sosial" },
    { id: "foster", label: "Orang Tua Asuh" },
  ];

  const reportSublinks = [
    { id: "progress", label: "Semua Laporan" },
    { id: "laporan/wakaf-pembangunan", label: "Laporan Pembangunan" },
    { id: "laporan/program-sosial", label: "Laporan Donasi" },
    { id: "laporan/pendidikan", label: "Laporan Program" },
    { id: "laporan/dakwah-digital", label: "Laporan Dakwah" },
  ];

  const dakwahSublinks = [
    { id: "dakwah", label: "Semua Dakwah Digital" },
    { id: "dakwah/artikel-islami", label: "Artikel Dakwah" },
    { id: "dakwah/video-dakwah", label: "Kajian YouTube" },
    { id: "dakwah/jadwal-kajian", label: "Jadwal Kajian" },
    { id: "dakwah/poster-dakwah", label: "Materi Download" },
  ];

  const handleMenuClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand Logo Identity */}
          <div 
            onClick={() => onNavigate("home")} 
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
            id="brand-logo"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-teal-600 to-brand-teal-500 text-white shadow-md shadow-brand-teal-500/20 font-extrabold text-lg tracking-tighter">
              NQ
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-brand-gold-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <span className="block font-extrabold tracking-tight text-brand-dark-900 text-base leading-none group-hover:text-brand-teal-500 transition-colors">
                Nurul Qur'an
              </span>
              <span className="block text-[8px] tracking-widest font-bold text-brand-teal-500 mt-1 uppercase">
                Mendidik generasi qurani sejak dini
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 whitespace-nowrap">
            {menuItems.map((item) => {
              const isActive = 
                activeView === item.id || 
                (item.id === "about" && (activeView === "about" || activeView === "tentang-yayasan" || activeView === "/tentang-yayasan")) ||
                (item.id === "units" && (activeView === "units" || activeView === "unit-pendidikan" || activeView === "/unit-pendidikan" || activeView === "pendidikan" || activeView === "/pendidikan" || activeView.startsWith("units/"))) ||
                (item.id === "contact" && (activeView === "contact" || activeView === "kontak" || activeView === "/kontak")) ||
                (item.id === "donations" && (activeView === "donasi-wakaf" || activeView === "donations" || activeView.startsWith("donasi-wakaf") || activeView.startsWith("donations/"))) ||
                (item.id === "progress" && (activeView === "progress" || activeView === "progress-pembangunan" || activeView === "/progress-pembangunan" || activeView === "laporan" || activeView === "/laporan" || activeView.startsWith("laporan/"))) ||
                (item.id === "gallery" && (activeView === "gallery" || activeView === "galeri" || activeView === "/galeri")) ||
                (item.id === "dakwah" && (activeView === "dakwah" || activeView === "/dakwah" || activeView === "dakwah-digital" || activeView === "/dakwah-digital" || activeView.startsWith("dakwah/")));

              if (item.id === "units") {
                const isOpenDropdown = activeDropdown === "units";
                return (
                  <div
                    key={item.id}
                    className="relative py-2 px-1"
                    onMouseEnter={() => handleMouseEnter("units")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleMenuClick("units")}
                      id={`nav-${item.id}`}
                      className={`flex items-center gap-1.5 px-1.5 xl:px-2.5 py-1.5 rounded-lg text-[11px] xl:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "text-brand-teal-500 bg-brand-teal-50/50 font-extrabold"
                          : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-3 w-3 text-gray-400 group-hover:text-brand-teal-500 transition-all duration-205 ${isOpenDropdown ? "rotate-180 text-brand-teal-500" : ""}`} />
                    </button>

                    {/* Invisible bridge/padding area to prevent losing hover state */}
                    <div className="absolute top-full left-0 w-full h-3 bg-transparent" />

                    {/* Premium Dropdown with stable hover & selection */}
                    <div
                      onMouseEnter={handleDropdownMouseEnter}
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl ring-1 ring-slate-150 py-2.5 z-[999] transition-all duration-200 transform origin-top ${
                        isOpenDropdown
                          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-95 pointer-events-none -translate-y-1"
                      }`}
                    >
                      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 rounded-t-2xl" />
                      
                      {unitsSublinks.map((sublink) => {
                        const isSubActive = 
                          (sublink.id === "units" && (activeView === "units" || activeView === "pendidikan")) ||
                          (sublink.id !== "units" && activeView === sublink.id);
                        return (
                          <button
                            key={sublink.id}
                            onClick={() => {
                              onNavigate(sublink.id);
                              setActiveDropdown(null);
                            }}
                            className={`flex items-center justify-between w-full text-left px-4.5 py-2.5 text-[11px] xl:text-xs font-bold transition-all ${
                              isSubActive
                                ? "text-brand-teal-600 bg-brand-teal-50/40"
                                : "text-gray-700 hover:text-brand-teal-600 hover:bg-brand-teal-50/20"
                            }`}
                          >
                            <span>{sublink.label}</span>
                            <span className={`w-1.5 h-1.5 rounded-full bg-brand-teal-500 transition-transform ${isSubActive ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (item.id === "donations") {
                const isOpenDropdown = activeDropdown === "donations";
                return (
                  <div
                    key={item.id}
                    className="relative py-2 px-1"
                    onMouseEnter={() => handleMouseEnter("donations")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleMenuClick("donations")}
                      id={`nav-${item.id}`}
                      className={`flex items-center gap-1.5 px-1.5 xl:px-2.5 py-1.5 rounded-lg text-[11px] xl:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "text-brand-teal-500 bg-brand-teal-50/50 font-extrabold"
                          : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-3 w-3 text-gray-400 group-hover:text-brand-teal-500 transition-all duration-205 ${isOpenDropdown ? "rotate-180 text-brand-teal-500" : ""}`} />
                    </button>

                    {/* Invisible bridge/padding area to prevent losing hover state */}
                    <div className="absolute top-full left-0 w-full h-3 bg-transparent" />

                    {/* Premium Dropdown with stable hover & selection */}
                    <div
                      onMouseEnter={handleDropdownMouseEnter}
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl ring-1 ring-slate-150 py-2.5 z-[999] transition-all duration-200 transform origin-top ${
                        isOpenDropdown
                          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-95 pointer-events-none -translate-y-1"
                      }`}
                    >
                      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 rounded-t-2xl" />
                      
                      {donationSublinks.map((sublink) => {
                        const isSubActive = 
                          (sublink.id === "donations" && (activeView === "donations" || activeView === "donasi-wakaf")) ||
                          (sublink.id === "foster" && activeView === "foster") ||
                          (sublink.id !== "donations" && sublink.id !== "foster" && (activeView === sublink.id || activeView.replace("donasi-wakaf/", "donations/") === sublink.id || activeView.replace("donations/", "donasi-wakaf/") === sublink.id));
                        return (
                          <button
                            key={sublink.id}
                            onClick={() => {
                              onNavigate(sublink.id);
                              setActiveDropdown(null);
                            }}
                            className={`flex items-center justify-between w-full text-left px-4.5 py-2.5 text-[11px] xl:text-xs font-bold transition-all ${
                              isSubActive
                                ? "text-brand-teal-600 bg-brand-teal-50/40"
                                : "text-gray-700 hover:text-brand-teal-600 hover:bg-brand-teal-50/20"
                            }`}
                          >
                            <span>{sublink.label}</span>
                            <span className={`w-1.5 h-1.5 rounded-full bg-brand-teal-500 transition-transform ${isSubActive ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (item.id === "progress") {
                const isOpenDropdown = activeDropdown === "progress";
                return (
                  <div
                    key={item.id}
                    className="relative py-2 px-1"
                    onMouseEnter={() => handleMouseEnter("progress")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleMenuClick("laporan")}
                      id={`nav-${item.id}`}
                      className={`flex items-center gap-1.5 px-1.5 xl:px-2.5 py-1.5 rounded-lg text-[11px] xl:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "text-brand-teal-500 bg-brand-teal-50/50 font-extrabold"
                          : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-3 w-3 text-gray-400 group-hover:text-brand-teal-500 transition-all duration-205 ${isOpenDropdown ? "rotate-180 text-brand-teal-500" : ""}`} />
                    </button>

                    {/* Invisible bridge/padding area to prevent losing hover state */}
                    <div className="absolute top-full left-0 w-full h-3 bg-transparent" />

                    {/* Premium Dropdown with stable hover & selection */}
                    <div
                      onMouseEnter={handleDropdownMouseEnter}
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl ring-1 ring-slate-150 py-2.5 z-[999] transition-all duration-200 transform origin-top ${
                        isOpenDropdown
                          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-95 pointer-events-none -translate-y-1"
                      }`}
                    >
                      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 rounded-t-2xl" />
                      
                      {reportSublinks.map((sublink) => {
                        const isSubActive = 
                          (sublink.id === "progress" && (activeView === "progress" || activeView === "laporan")) ||
                          (sublink.id !== "progress" && (activeView === sublink.id || activeView.replace("laporan/", "progress/") === sublink.id || activeView.replace("progress/", "laporan/") === sublink.id));
                        return (
                          <button
                            key={sublink.id}
                            onClick={() => {
                              onNavigate(sublink.id);
                              setActiveDropdown(null);
                            }}
                            className={`flex items-center justify-between w-full text-left px-4.5 py-2.5 text-[11px] xl:text-xs font-bold transition-all ${
                              isSubActive
                                ? "text-brand-teal-600 bg-brand-teal-50/40"
                                : "text-gray-700 hover:text-brand-teal-600 hover:bg-brand-teal-50/20"
                            }`}
                          >
                            <span>{sublink.label}</span>
                            <span className={`w-1.5 h-1.5 rounded-full bg-brand-teal-500 transition-transform ${isSubActive ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (item.id === "dakwah") {
                const isOpenDropdown = activeDropdown === "dakwah";
                return (
                  <div
                    key={item.id}
                    className="relative py-2 px-1"
                    onMouseEnter={() => handleMouseEnter("dakwah")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleMenuClick("dakwah")}
                      id={`nav-${item.id}`}
                      className={`flex items-center gap-1.5 px-1.5 xl:px-2.5 py-1.5 rounded-lg text-[11px] xl:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "text-brand-teal-500 bg-brand-teal-50/50 font-extrabold"
                          : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-3 w-3 text-gray-400 group-hover:text-brand-teal-500 transition-all duration-205 ${isOpenDropdown ? "rotate-180 text-brand-teal-500" : ""}`} />
                    </button>

                    {/* Invisible bridge/padding area to prevent losing hover state */}
                    <div className="absolute top-full left-0 w-full h-3 bg-transparent" />

                    {/* Premium Dropdown with stable hover & selection */}
                    <div
                      onMouseEnter={handleDropdownMouseEnter}
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl ring-1 ring-slate-150 py-2.5 z-[999] transition-all duration-200 transform origin-top ${
                        isOpenDropdown
                          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-95 pointer-events-none -translate-y-1"
                      }`}
                    >
                      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 rounded-t-2xl" />
                      
                      {dakwahSublinks.map((sublink) => {
                        const isSubActive = 
                          (sublink.id === "dakwah" && (activeView === "dakwah" || activeView === "dakwah-digital")) ||
                          (sublink.id !== "dakwah" && activeView === sublink.id);
                        return (
                          <button
                            key={sublink.id}
                            onClick={() => {
                              onNavigate(sublink.id);
                              setActiveDropdown(null);
                            }}
                            className={`flex items-center justify-between w-full text-left px-4.5 py-2.5 text-[11px] xl:text-xs font-bold transition-all ${
                              isSubActive
                                ? "text-brand-teal-600 bg-brand-teal-50/40"
                                : "text-gray-700 hover:text-brand-teal-600 hover:bg-brand-teal-50/20"
                            }`}
                          >
                            <span>{sublink.label}</span>
                            <span className={`w-1.5 h-1.5 rounded-full bg-brand-teal-500 transition-transform ${isSubActive ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  id={`nav-${item.id}`}
                  className={`px-1.5 xl:px-2.5 py-1.5 rounded-lg text-[11px] xl:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-brand-teal-500 bg-brand-teal-50/50 font-extrabold"
                      : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA "Donasi Sekarang" */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDonationModal}
              id="btn-navbar-donate"
              className="relative flex items-center gap-2 py-2 px-4 text-xs font-extrabold text-white rounded-full bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 hover:from-brand-teal-600 hover:to-brand-teal-700 transition-all duration-300 shadow-md shadow-brand-teal-500/10 cursor-pointer"
            >
              <Heart className="h-3.5 w-3.5 fill-white" />
              Donasi Sekarang
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDonationModal}
              className="py-1.5 px-3 text-[10px] font-bold text-white bg-brand-teal-500 rounded-full flex items-center gap-1 sm:hidden cursor-pointer"
            >
              <Heart className="h-3 w-3 fill-white" />
              Donasi
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-gray-500 hover:text-brand-teal-500 hover:bg-gray-50 transition-colors cursor-pointer"
              id="btn-sidebar-toggle"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md shadow-inner">
          <div className="space-y-1 px-3 py-4">
            {menuItems.map((item) => {
              const isActive = 
                activeView === item.id || 
                (item.id === "about" && (activeView === "about" || activeView === "tentang-yayasan" || activeView === "/tentang-yayasan")) ||
                (item.id === "units" && (activeView === "units" || activeView === "unit-pendidikan" || activeView === "/unit-pendidikan" || activeView === "pendidikan" || activeView === "/pendidikan" || activeView.startsWith("units/"))) ||
                (item.id === "contact" && (activeView === "contact" || activeView === "kontak" || activeView === "/kontak")) ||
                (item.id === "donations" && (activeView === "donasi-wakaf" || activeView === "donations" || activeView.startsWith("donasi-wakaf"))) ||
                (item.id === "progress" && (activeView === "progress" || activeView === "progress-pembangunan" || activeView === "/progress-pembangunan" || activeView === "laporan" || activeView === "/laporan")) ||
                (item.id === "gallery" && (activeView === "gallery" || activeView === "galeri" || activeView === "/galeri")) ||
                (item.id === "dakwah" && (activeView === "dakwah" || activeView === "/dakwah" || activeView === "dakwah-digital" || activeView === "/dakwah-digital" || activeView.startsWith("dakwah/")));

              if (item.id === "units") {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => setIsMobileUnitsSubmenuOpen(!isMobileUnitsSubmenuOpen)}
                      className={`flex items-center justify-between w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? "text-brand-teal-500 bg-brand-teal-50"
                          : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isMobileUnitsSubmenuOpen ? "rotate-180 text-brand-teal-500" : ""}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-350 pl-4 space-y-1 bg-gray-50/50 rounded-lg ${isMobileUnitsSubmenuOpen ? "max-h-80 opacity-100 py-1.5" : "max-h-0 opacity-0 pointer-events-none"}`}>
                      {unitsSublinks.map((sublink) => {
                        const isSubActive = 
                          (sublink.id === "units" && (activeView === "units" || activeView === "unit-pendidikan" || activeView === "/unit-pendidikan" || activeView === "pendidikan" || activeView === "/pendidikan")) ||
                          (sublink.id !== "units" && activeView === sublink.id);
                        return (
                          <button
                            key={sublink.id}
                            onClick={() => {
                              onNavigate(sublink.id);
                              setIsOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-[11px] font-bold rounded ${
                              isSubActive
                                ? "text-brand-teal-500 bg-brand-teal-50"
                                : "text-gray-600 hover:text-brand-teal-500 font-semibold"
                            }`}
                          >
                            • {sublink.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (item.id === "donations") {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                      className={`flex items-center justify-between w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? "text-brand-teal-500 bg-brand-teal-50"
                          : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isMobileSubmenuOpen ? "rotate-180 text-brand-teal-500" : ""}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-350 pl-4 space-y-1 bg-gray-50/50 rounded-lg ${isMobileSubmenuOpen ? "max-h-80 opacity-100 py-1.5" : "max-h-0 opacity-0 pointer-events-none"}`}>
                      {donationSublinks.map((sublink) => {
                        const isSubActive = 
                          (sublink.id === "donations" && (activeView === "donations" || activeView === "donasi-wakaf")) ||
                          (sublink.id === "foster" && activeView === "foster") ||
                          (sublink.id !== "donations" && sublink.id !== "foster" && (activeView === sublink.id || activeView.replace("donasi-wakaf/", "donations/") === sublink.id || activeView.replace("donations/", "donasi-wakaf/") === sublink.id));
                        return (
                          <button
                            key={sublink.id}
                            onClick={() => {
                              onNavigate(sublink.id);
                              setIsOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-[11px] font-bold rounded ${
                              isSubActive
                                ? "text-brand-teal-500 bg-brand-teal-50"
                                : "text-gray-600 hover:text-brand-teal-500 font-semibold"
                            }`}
                          >
                            • {sublink.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (item.id === "progress") {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => setIsMobileReportSubmenuOpen(!isMobileReportSubmenuOpen)}
                      className={`flex items-center justify-between w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? "text-brand-teal-500 bg-brand-teal-50"
                          : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isMobileReportSubmenuOpen ? "rotate-180 text-brand-teal-500" : ""}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-350 pl-4 space-y-1 bg-gray-50/50 rounded-lg ${isMobileReportSubmenuOpen ? "max-h-96 opacity-100 py-1.5" : "max-h-0 opacity-0 pointer-events-none"}`}>
                      {reportSublinks.map((sublink) => {
                        const isSubActive = 
                          (sublink.id === "progress" && (activeView === "progress" || activeView === "laporan")) ||
                          (sublink.id !== "progress" && (activeView === sublink.id || activeView.replace("laporan/", "progress/") === sublink.id || activeView.replace("progress/", "laporan/") === sublink.id));
                        return (
                          <button
                            key={sublink.id}
                            onClick={() => {
                              onNavigate(sublink.id);
                              setIsOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-[11px] font-bold rounded ${
                              isSubActive
                                ? "text-brand-teal-500 bg-brand-teal-50"
                                : "text-gray-600 hover:text-brand-teal-500 font-semibold"
                            }`}
                          >
                            • {sublink.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (item.id === "dakwah") {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => setIsMobileDakwahSubmenuOpen(!isMobileDakwahSubmenuOpen)}
                      className={`flex items-center justify-between w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? "text-brand-teal-500 bg-brand-teal-50"
                          : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isMobileDakwahSubmenuOpen ? "rotate-180 text-brand-teal-500" : ""}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-350 pl-4 space-y-1 bg-gray-50/50 rounded-lg ${isMobileDakwahSubmenuOpen ? "max-h-96 opacity-100 py-1.5" : "max-h-0 opacity-0 pointer-events-none"}`}>
                      {dakwahSublinks.map((sublink) => {
                        const isSubActive = 
                          (sublink.id === "dakwah" && (activeView === "dakwah" || activeView === "dakwah-digital")) ||
                          (sublink.id !== "dakwah" && activeView === sublink.id);
                        return (
                          <button
                            key={sublink.id}
                            onClick={() => {
                              onNavigate(sublink.id);
                              setIsOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-[11px] font-bold rounded ${
                              isSubActive
                                ? "text-brand-teal-500 bg-brand-teal-50"
                                : "text-gray-600 hover:text-brand-teal-500 font-semibold"
                            }`}
                          >
                            • {sublink.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? "text-brand-teal-500 bg-brand-teal-50"
                      : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleMenuClick("admin")}
              className={`flex items-center gap-2 w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeView === "admin"
                  ? "text-brand-teal-500 bg-brand-teal-50"
                  : "text-gray-500 hover:text-brand-teal-500 hover:bg-gray-50"
              }`}
            >
              <Settings className="h-4 w-4" />
              Admin Dashboard (Dummy)
            </button>
            <div className="pt-4 px-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDonationModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-extrabold text-white rounded-full bg-brand-teal-500 hover:bg-brand-teal-600 transition-all text-center"
              >
                <Heart className="h-3.5 w-3.5 fill-white" />
                Donasi Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
