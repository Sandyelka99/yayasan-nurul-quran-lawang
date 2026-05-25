/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Menu, X, Heart, Settings } from "lucide-react";

interface NavbarProps {
  activeView: string;
  onNavigate: (viewId: string) => void;
  onOpenDonationModal: () => void;
}

export default function Navbar({ activeView, onNavigate, onOpenDonationModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Match menu strictly with user requirements, adding an elegant Admin Link at the end
  const menuItems = [
    { id: "home", label: "Beranda" },
    { id: "about", label: "Tentang Yayasan" },
    { id: "units", label: "Unit Pendidikan" },
    { id: "donations", label: "Donasi & Wakaf" },
    { id: "foster", label: "Orang Tua Asuh" },
    { id: "progress", label: "Progress" },
    { id: "gallery", label: "Galeri" },
    { id: "contact", label: "Kontak" },
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
            className="flex items-center gap-3 cursor-pointer group select-none"
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
          <nav className="hidden lg:flex items-center gap-1.5">
            {menuItems.map((item) => {
              const isActive = 
                activeView === item.id || 
                (item.id === "about" && (activeView === "about" || activeView === "tentang-yayasan" || activeView === "/tentang-yayasan")) ||
                (item.id === "units" && (activeView === "units" || activeView === "unit-pendidikan" || activeView === "/unit-pendidikan")) ||
                (item.id === "contact" && (activeView === "contact" || activeView === "kontak" || activeView === "/kontak")) ||
                (item.id === "donations" && (activeView === "donasi-wakaf" || activeView === "donations" || activeView.startsWith("donasi-wakaf"))) ||
                (item.id === "foster" && (activeView === "foster" || activeView === "orang-tua-asuh" || activeView === "/orang-tua-asuh")) ||
                (item.id === "progress" && (activeView === "progress" || activeView === "progress-pembangunan" || activeView === "/progress-pembangunan")) ||
                (item.id === "gallery" && (activeView === "gallery" || activeView === "galeri" || activeView === "/galeri"));
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  id={`nav-${item.id}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "text-brand-teal-500 bg-brand-teal-50/50"
                      : "text-gray-600 hover:text-brand-teal-500 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Admin Dashboard shortcut trigger */}
            <button
              onClick={() => onNavigate("admin")}
              id="nav-admin"
              className={`ml-2 p-1.5 rounded-lg text-gray-400 hover:text-brand-teal-500 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-1 ${
                activeView === "admin" ? "text-brand-teal-500 bg-brand-teal-50/50" : ""
              }`}
              title="Admin Dashboard"
            >
              <Settings className="h-4 w-4" />
              <span className="text-[10px] font-bold">Admin</span>
            </button>
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
                (item.id === "units" && (activeView === "units" || activeView === "unit-pendidikan" || activeView === "/unit-pendidikan")) ||
                (item.id === "contact" && (activeView === "contact" || activeView === "kontak" || activeView === "/kontak")) ||
                (item.id === "donations" && (activeView === "donasi-wakaf" || activeView === "donations" || activeView.startsWith("donasi-wakaf"))) ||
                (item.id === "foster" && (activeView === "foster" || activeView === "orang-tua-asuh" || activeView === "/orang-tua-asuh")) ||
                (item.id === "progress" && (activeView === "progress" || activeView === "progress-pembangunan" || activeView === "/progress-pembangunan")) ||
                (item.id === "gallery" && (activeView === "gallery" || activeView === "galeri" || activeView === "/galeri"));
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
