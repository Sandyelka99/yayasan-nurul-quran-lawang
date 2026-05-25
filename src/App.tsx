/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import EducationUnits from "./components/EducationUnits";
import DonationCampaigns from "./components/DonationCampaigns";
import FosterParent from "./components/FosterParent";
import CoreValues from "./components/CoreValues";
import DevelopmentProgress from "./components/DevelopmentProgress";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import AdminDashboard from "./components/AdminDashboard";
import Modal from "./components/Modal";
import DonationWakafPage from "./components/DonationWakafPage";
import DonationDetailPage from "./components/DonationDetailPage";
import FosterParentPage from "./components/FosterParentPage";
import DevelopmentProgressPage from "./components/DevelopmentProgressPage";
import GalleryPage from "./components/GalleryPage";
import AboutPage from "./components/AboutPage";
import EducationalUnitsPage from "./components/EducationalUnitsPage";
import ContactPage from "./components/ContactPage";
import FloatingWhatsAppCTA from "./components/FloatingWhatsAppCTA";

import { CAMPAIGNS, STATISTICS, TESTIMONIALS } from "./data/mockData";
import { Campaign, FosterPackage } from "./types";
import { BookOpen, ShieldCheck, Landmark, HelpCircle, Heart, ArrowRight, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const [activeView, setActiveView] = useState<string>("home");

  // Synchronize browser native pathnames on layout load or popstate
  React.useEffect(() => {
    const handleUrlSync = () => {
      const path = window.location.pathname;
      if (path === "/tentang-yayasan" || path === "/about") {
        setActiveView("about");
      } else if (path === "/unit-pendidikan" || path === "/units") {
        setActiveView("units");
      } else if (path === "/kontak" || path === "/contact") {
        setActiveView("contact");
      } else if (path === "/admin") {
        setActiveView("admin");
      } else if (path === "/donasi-wakaf") {
        setActiveView("donations");
      } else if (path === "/orang-tua-asuh") {
        setActiveView("foster");
      } else if (path === "/progress-pembangunan") {
        setActiveView("progress");
      } else if (path === "/galeri") {
        setActiveView("gallery");
      } else {
        setActiveView("home");
      }
    };

    handleUrlSync();
    window.addEventListener("popstate", handleUrlSync);
    return () => window.removeEventListener("popstate", handleUrlSync);
  }, []);
  
  // App state sync simulator (Sandbox)
  const [campaignsList, setCampaignsList] = useState<Campaign[]>(CAMPAIGNS);
  const [constructionRate, setConstructionRate] = useState<number>(STATISTICS.constructionProgress);
  const [totalCollected, setTotalCollected] = useState<number>(STATISTICS.totalDonationCollected);
  const [extraDonors, setExtraDonors] = useState<number>(0);

  // Modal State Control
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState<Campaign | null>(null);
  const [selectedFoster, setSelectedFoster] = useState<FosterPackage | null>(null);

  // Smooth scroll helper for landing sections
  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Switch navigation handlers
  const handleNavigate = (viewId: string) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Sync HTML5 Location bar
    let finalPath = "/" + viewId;
    if (viewId === "about" || viewId === "tentang-yayasan") finalPath = "/tentang-yayasan";
    if (viewId === "units" || viewId === "unit-pendidikan") finalPath = "/unit-pendidikan";
    if (viewId === "contact" || viewId === "kontak") finalPath = "/kontak";
    if (viewId === "donations" || viewId === "donasi-wakaf") finalPath = "/donasi-wakaf";
    if (viewId === "foster" || viewId === "orang-tua-asuh") finalPath = "/orang-tua-asuh";
    if (viewId === "progress" || viewId === "progress-pembangunan") finalPath = "/progress-pembangunan";
    if (viewId === "gallery" || viewId === "galeri") finalPath = "/galeri";
    if (viewId === "home") finalPath = "/";
    if (viewId === "admin") finalPath = "/admin";

    if (window.location.pathname !== finalPath) {
      window.history.pushState(null, "", finalPath);
    }
  };

  const handleOpenGeneralDonation = () => {
    setSelectedCamp(null);
    setSelectedFoster(null);
    setIsModalOpen(true);
  };

  const handleOpenCampaignDonation = (campaign: Campaign) => {
    setSelectedCamp(campaign);
    setSelectedFoster(null);
    setIsModalOpen(true);
  };

  const handleOpenFosterSponsorship = (pck: FosterPackage) => {
    setSelectedCamp(null);
    setSelectedFoster(pck);
    setIsModalOpen(true);
  };

  // State modifiers linked with Admin Dashboard sandbox
  const handleUpdateCampaign = (id: string, updatedParams: Partial<Campaign>) => {
    setCampaignsList((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updatedParams } : c))
    );
  };

  const handleAddManualDonation = (amount: number, donorName: string, campaignId: string) => {
    setTotalCollected((prev) => prev + amount);
    setExtraDonors((prev) => prev + 1);
    
    // Also increment campaign individual details
    setCampaignsList((prev) =>
      prev.map((c) =>
        c.id === campaignId
          ? {
              ...c,
              currentAmount: c.currentAmount + amount,
              donorsCount: c.donorsCount + 1,
            }
          : c
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#f7fafb] text-brand-dark-900 selection:bg-brand-teal-500 selection:text-white flex flex-col justify-between">
      
      {/* Sticky Header Navbar with official Logo */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenDonationModal={handleOpenGeneralDonation}
      />

      {/* Main content viewport containing layouts based on active route */}
      <main className="flex-1">
        {activeView === "home" && (
          <>
            {/* 1. Cinematic Hero section with high-contrast text overlay */}
            <Hero
              onDonateClick={handleOpenGeneralDonation}
              onFosterClick={() => handleNavigate("foster")}
              onBrowsePrograms={() => scrollToSection("section-campaigns")}
            />

            {/* 2. Overlapping floats stats section showing metrics */}
            <Stats onProgressClick={() => handleNavigate("progress")} />

            {/* 3. Core Values Sunnah guidelines */}
            <CoreValues />

            {/* 4. Education units division program */}
            <EducationUnits
              onLearnMoreUnit={(id) => handleNavigate("units")}
              onSponsorshipTrigger={() => handleNavigate("foster")}
            />

            {/* 5. Crowdfund listing */}
            <DonationCampaigns 
              onDonateSelect={handleOpenCampaignDonation} 
              onViewDetail={(slug) => handleNavigate("donasi-wakaf/" + slug)}
            />

            {/* 6. Foster parents sponsorship section */}
            <FosterParent onFosterSelect={handleOpenFosterSponsorship} />

            {/* 7. Real-time development progress timeline */}
            <DevelopmentProgress />

            {/* 8. Pristine filterable photograph gallery without face closeups */}
            <Gallery />

            {/* 9. Testimonials of Trust & Sincerity */}
            <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
              <div className="absolute right-0 bottom-10 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[90px] pointer-events-none" />
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-xl mx-auto mb-14">
                  <span className="text-[10px] font-extrabold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3 py-1 rounded-full uppercase">
                    KATA MEREKA
                  </span>
                  <h2 className="text-2xl font-extrabold text-brand-dark-900 mt-3">
                    Kepercayaan Donatur & Tim Lapangan
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((testi) => (
                    <div key={testi.id} className="bg-brand-dark-50 p-6 rounded-2xl border border-gray-150 relative">
                      <span className="text-4xl text-brand-teal-200 font-serif absolute top-4 left-4 select-none">“</span>
                      <p className="text-xs text-gray-600 leading-relaxed italic relative z-10 pt-4">
                        {testi.content}
                      </p>
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-gold-500 rounded-full" />
                        <div>
                          <span className="block text-xs font-bold text-brand-dark-900">{testi.author}</span>
                          <span className="block text-[10px] text-gray-400 font-semibold">{testi.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 10. Contact form & coordinates */}
            <Contact />
          </>
        )}

        {/* Focused 'Tentang Yayasan' View */}
        {activeView === "about" && (
          <div className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-xs font-bold tracking-widest text-brand-teal-500 bg-brand-teal-50 px-3.5 py-1.5 rounded-full uppercase">
                  PROFIL RESMI YAYASAN
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 mt-4 tracking-tight">
                  Yayasan Nurul Quran Lawang Malang
                </h1>
                <p className="mt-3 text-sm text-gray-500 font-semibold">
                  Mendidik Generasi Qurani Sejak Usia Dini Berlandaskan Al-Qur'an dan As-Sunnah
                </p>
              </div>

              {/* Cover layout */}
              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden bg-brand-dark-900 mb-10 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1512632511790-760901e47f5b?auto=format&fit=crop&q=80&w=1200"
                  alt="Pesantren View" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Body narrative content */}
              <div className="space-y-8 text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold">
                <div>
                  <h3 className="text-lg font-bold text-brand-dark-900 mb-3 border-b border-gray-150 pb-2">
                    Sejarah Singkat & Komitmen Syiar
                  </h3>
                  <p>
                    Didirikan dengan tekad suci di Kecamatan Lawang, Malang, Jawa Timur, Yayasan Nurul Quran lahir atas keprihatinan mendalam terhadap berkurangnya pengajaran adab serta kecintaan Al-Qur'an bagi anak-anak usia emas (toddler dan balita). Kami berkomitmen tinggi menyelenggarakan pangkalan edukasi syar'i tanpa kompromi, mengutamakan pembiasaan makhraj yang fasih secara gratis dan terjangkau bagi yatim duafa dhu'afa.
                  </p>
                  <p className="mt-3">
                    Kini Yayasan mengampu tiga pilar utama: Nurul Quran Learning Center (binaan pemantapan akademik sekolah formal), Nurul Quran Tahfidz Center, serta Rumah Tahfidz Balita (RUTABA) yang membimbing balita menghafal Al-Qur'an dengan suasana bermain yang gembira.
                  </p>
                </div>

                {/* Vision / Mission grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="p-5 rounded-2xl border border-gray-150 bg-brand-dark-50">
                    <h4 className="text-sm font-bold text-brand-teal-600 mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" /> Visi Agung
                    </h4>
                    <p className="text-xs">
                      Menjadi yayasan mercusuar percontohan dakwah islamiyah terpadu yang mencetak hafizh-hafizhah mutqin, mandiri, berakhlak mulia, serta teguh mengamalkan sunnah nabi sejak dini.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl border border-gray-150 bg-brand-dark-50">
                    <h4 className="text-sm font-bold text-brand-teal-600 mb-2 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" /> Misi Operasional
                    </h4>
                    <ul className="text-xs list-disc pl-4 space-y-1.5">
                      <li>Menyelenggarakan metode tahfidz balita inovatif yang ramah anak.</li>
                      <li>Mengembangkan asrama tahfidz gratis bagi santri dhu'afa berprestasi.</li>
                      <li>Mengelola dana umat (ZISWAF) secara profesional dan transparan.</li>
                    </ul>
                  </div>
                </div>

                {/* Management Structure card (conforming to sunnah with no user pictures) */}
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-brand-dark-900 mb-4 border-b border-gray-150 pb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-brand-teal-500" /> Pengurus Yayasan Periode 2026-2030
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="p-4 rounded-xl bg-white border border-gray-150">
                      <span className="block text-[8px] font-extrabold text-gray-400">PEMBINA SYARIAH</span>
                      <span className="block font-bold text-xs text-brand-dark-900 mt-1">Ustadz Abu Dzarr, Lc.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-150">
                      <span className="block text-[8px] font-extrabold text-gray-400">KETUA YAYASAN</span>
                      <span className="block font-bold text-xs text-brand-dark-900 mt-1">H. Ridwan Siregar, S.Pd.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-150">
                      <span className="block text-[8px] font-extrabold text-gray-400">SEKRETARIS</span>
                      <span className="block font-bold text-xs text-brand-dark-900 mt-1">Akhina Thariq Al-Atsary</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-150">
                      <span className="block text-[8px] font-extrabold text-gray-400">BENDAHARA YATIM</span>
                      <span className="block font-bold text-xs text-brand-dark-900 mt-1">Akhina Abu Bakar Siddiq</span>
                    </div>
                  </div>
                </div>

                {/* Back button */}
                <div className="text-center pt-8 border-t border-gray-150">
                  <button 
                    onClick={() => handleNavigate("home")}
                    className="py-2.5 px-6 rounded-full bg-brand-teal-500 text-white font-bold text-xs hover:bg-brand-teal-600 transition-colors cursor-pointer"
                  >
                    Kembali ke Beranda Utama
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Focused 'Unit Pendidikan' View */}
        {(activeView === "units" || activeView === "unit-pendidikan" || activeView === "/unit-pendidikan") && (
          <div className="bg-white">
            <EducationalUnitsPage onNavigate={handleNavigate} />
            <div className="max-w-4xl mx-auto pb-20 text-center bg-[#fbfcff]">
              <button 
                onClick={() => handleNavigate("home")}
                className="py-2.5 px-6 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                ← Kembali ke Beranda Utama
              </button>
            </div>
          </div>
        )}

        {/* Focused 'Donasi & Wakaf' List View */}
        {(activeView === "donations" || activeView === "donasi-wakaf") && (
          <DonationWakafPage 
            onDonateSelect={handleOpenCampaignDonation}
            onViewDetail={(slug) => handleNavigate("donasi-wakaf/" + slug)}
            campaignsList={campaignsList}
          />
        )}

        {/* Focused 'Detail Program Donasi' View */}
        {(activeView === "donasi-wakaf/pembangunan-pesantren" || activeView === "pembangunan-pesantren" || (activeView.startsWith("donasi-wakaf/") && activeView !== "donasi-wakaf")) && (() => {
          const slug = activeView.replace("donasi-wakaf/", "");
          
          // Match the current campaign from list
          let selectedCampaignInView = campaignsList.find(c => c.id === slug || (slug === "pembangunan-pesantren" && c.id === "pesantren-pembangunan"));
          
          // Fallback safely to pesantren-pembangunan if not found
          if (!selectedCampaignInView) {
            selectedCampaignInView = campaignsList.find(c => c.id === "pesantren-pembangunan" || c.id === "pembangunan-pesantren") || campaignsList[0];
          }

          return (
            <DonationDetailPage 
              campaign={selectedCampaignInView}
              onNavigateBack={() => handleNavigate("donasi-wakaf")}
              onAddManualDonation={handleAddManualDonation}
            />
          );
        })()}

        {/* Focused 'Orang Tua Asuh' View */}
        {(activeView === "foster" || activeView === "orang-tua-asuh" || activeView === "/orang-tua-asuh") && (
          <div className="bg-white">
            <FosterParentPage onNavigate={handleNavigate} />
            <div className="max-w-4xl mx-auto pb-20 text-center">
              <button 
                onClick={() => handleNavigate("home")}
                className="py-2 px-5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xs font-bold transition-colors cursor-pointer"
              >
                ← Kembali ke Beranda
              </button>
            </div>
          </div>
        )}

        {/* Focused 'Progress' View */}
        {(activeView === "progress" || activeView === "progress-pembangunan" || activeView === "/progress-pembangunan") && (
          <div className="bg-white">
            <DevelopmentProgressPage onNavigate={handleNavigate} />
            <div className="max-w-4xl mx-auto pb-20 text-center bg-[#fbfcff]">
              <button 
                onClick={() => handleNavigate("home")}
                className="py-2.5 px-6 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                ← Kembali ke Beranda
              </button>
            </div>
          </div>
        )}

        {/* Focused 'Galeri' View */}
        {(activeView === "gallery" || activeView === "galeri" || activeView === "/galeri") && (
          <div className="bg-white">
            <GalleryPage onNavigate={handleNavigate} />
            <div className="max-w-4xl mx-auto pb-20 text-center bg-[#fbfcff]">
              <button 
                onClick={() => handleNavigate("home")}
                className="py-2.5 px-6 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                ← Kembali ke Beranda
              </button>
            </div>
          </div>
        )}

        {/* Focused 'Tentang Yayasan' View */}
        {(activeView === "about" || activeView === "tentang-yayasan" || activeView === "/tentang-yayasan") && (
          <div className="bg-white">
            <AboutPage onNavigate={handleNavigate} />
            <div className="max-w-4xl mx-auto pb-20 text-center bg-[#fbfcff]">
              <button 
                onClick={() => handleNavigate("home")}
                className="py-2.5 px-6 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xs font-bold transition-colors cursor-pointer shadow-sm animate-pulse"
              >
                ← Kembali ke Beranda
              </button>
            </div>
          </div>
        )}

        {/* Focused 'Kontak' View */}
        {(activeView === "contact" || activeView === "kontak" || activeView === "/kontak") && (
          <div className="bg-white">
            <ContactPage />
            <div className="max-w-4xl mx-auto pb-20 text-center bg-[#fbfcff]">
              <button 
                onClick={() => handleNavigate("home")}
                className="py-2.5 px-6 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                ← Kembali ke Beranda Utama
              </button>
            </div>
          </div>
        )}

        {/* Active Sandbox Admin Dashboard Controller */}
        {activeView === "admin" && (
          <AdminDashboard
            campaigns={campaignsList}
            onUpdateCampaign={handleUpdateCampaign}
            constructionPercent={constructionRate}
            onUpdateConstruction={setConstructionRate}
            totalDonation={totalCollected}
            onAddManualDonation={handleAddManualDonation}
          />
        )}
      </main>

      {/* Dark Teal Premium Footer */}
      <footer className="bg-brand-dark-900 border-t border-[#122e3b] text-gray-300 py-16 relative overflow-hidden">
        <div className="absolute inset-0 islamic-grid opacity-25 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-teal-600 to-brand-teal-500 text-white font-extrabold text-lg shadow-md shadow-brand-teal-500/15">
                NQ
              </div>
              <div>
                <span className="block font-extrabold text-white text-base leading-none">
                  Nurul Qur'an
                </span>
                <span className="block text-[8px] tracking-wider text-brand-teal-300 mt-1 uppercase font-bold">
                  Mendidik generasi qurani sejak dini
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-medium leading-relaxed">
              Yayasan Nurul Quran Lawang Malang adalah ekosistem pendidikan Islam, tahfidz balita, anak-anak, dan sosial keumatan berbasis tata kelola amanah, teliti, dan terbuka.
            </p>
            <div className="text-[10px] text-gray-500 font-bold">
              Legalitas Kemenkumham RI No. AHU-0012450.AH.01.04 • Akta Notaris No. 12/2026/MLG
            </div>
          </div>

          {/* Col 2: Unit Pendidikan */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Unit Pendidikan</h4>
            <ul className="space-y-2.5 text-xs font-medium text-gray-400">
              <li>
                <button onClick={() => handleNavigate("units")} className="hover:text-brand-teal-400 transition-colors">
                  Rumah Belajar (NQLC)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("units")} className="hover:text-brand-teal-400 transition-colors">
                  Rumah Tahfizz (NQTC)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("units")} className="hover:text-brand-teal-400 transition-colors">
                  Rumah Tahfidz Balita (RUTABA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("admin")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-amber-400 rounded-full" /> Sandbox Simulation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Pintasan Pintar */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider font-sans">Pintasan Sitemap</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <button onClick={() => handleNavigate("about")} className="hover:text-brand-teal-400 transition-colors">
                  Tentang Yayasan
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("units")} className="hover:text-brand-teal-400 transition-colors">
                  Unit Pendidikan
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("donations")} className="hover:text-brand-teal-400 transition-colors">
                  Donasi & Wakaf
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("foster")} className="hover:text-brand-teal-400 transition-colors">
                  Orang Tua Asuh
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("progress")} className="hover:text-brand-teal-400 transition-colors">
                  Progress Pembangunan
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("gallery")} className="hover:text-brand-teal-400 transition-colors">
                  Galeri Foto Kegiatan
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("contact")} className="hover:text-brand-teal-400 text-brand-teal-300 transition-colors font-bold">
                  Hubungi Kontak Layanan
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: QRIS Placeholder Trust */}
          <div className="md:col-span-3 space-y-4 bg-[#08151c]/60 p-5 rounded-2xl border border-white/6 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-extrabold text-brand-teal-300 block uppercase tracking-wider">QRIS STANDARDIZED</span>
              <span className="text-xs font-bold text-white block mt-1">Donasi QRIS Cepat & Resmi</span>
              <span className="text-[10px] text-gray-500 font-medium block mt-0.5">Dukung operasional asrama secara harian.</span>
            </div>
            
            {/* Small abstract geometric lines mimicking secure seal */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-[8px] font-extrabold text-gray-400 tracking-widest">BEBAS POTONGAN</span>
              <span className="text-[8px] font-extrabold text-brand-gold-500 bg-brand-gold-500/10 px-2 py-0.5 rounded uppercase">
                Amanah 100%
              </span>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
          <div>
            © 2026 Yayasan Nurul Quran Lawang Malang. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>Syarat & Ketentuan</span>
            <span>Kebijakan Privasi Syar'i</span>
          </div>
        </div>
      </footer>

      {/* Shared Donation checkout modal popup */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        campaign={selectedCamp}
        fosterPackage={selectedFoster}
      />

      {/* Floating global administrative WhatsApp CTA */}
      <FloatingWhatsAppCTA activeView={activeView} />

    </div>
  );
}
