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
import MainPillars from "./components/MainPillars";
import HomeReportsPreview from "./components/HomeReportsPreview";
import HomeDakwahPreview from "./components/HomeDakwahPreview";
import ClosingCTA from "./components/ClosingCTA";
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
import SocialLinks from "./components/SocialLinks";
import DakwahPage from "./components/DakwahPage";

import { CAMPAIGNS, STATISTICS, TESTIMONIALS } from "./data/mockData";
import { Campaign, FosterPackage } from "./types";
import { BookOpen, ShieldCheck, Landmark, HelpCircle, Heart, ArrowRight, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const [activeView, setActiveView] = useState<string>("home");
  const [initialDonationCategory, setInitialDonationCategory] = useState<string>("semua");
  const [initialReportCategory, setInitialReportCategory] = useState<string>("semua");

  // Synchronize browser native pathnames on layout load or popstate
  React.useEffect(() => {
    const handleUrlSync = () => {
      const path = window.location.pathname;
      if (path.startsWith("/admin")) {
        setActiveView("admin");
      } else if (path === "/tentang-yayasan" || path === "/about") {
        setActiveView("about");
      } else if (path === "/unit-pendidikan" || path === "/units" || path === "/pendidikan") {
        setActiveView("units");
      } else if (path === "/pendidikan/rumah-belajar") {
        setActiveView("units/rumah-belajar");
      } else if (path === "/pendidikan/rumah-tahfizz") {
        setActiveView("units/rumah-tahfizz");
      } else if (path === "/pendidikan/rutaba") {
        setActiveView("units/rutaba");
      } else if (path === "/kontak" || path === "/contact") {
        setActiveView("contact");
      } else if (path === "/donasi-wakaf") {
        setActiveView("donations");
        setInitialDonationCategory("semua");
      } else if (path === "/donasi-wakaf/donasi-pendidikan") {
        setActiveView("donations");
        setInitialDonationCategory("pendidikan");
      } else if (path === "/donasi-wakaf/orang-tua-asuh") {
        setActiveView("donations");
        setInitialDonationCategory("orang-tua-asuh");
      } else if (path === "/donasi-wakaf/program-sosial") {
        setActiveView("donations");
        setInitialDonationCategory("program-sosial");
      } else if (path === "/donasi-wakaf/wakaf-alquran") {
        setActiveView("donations");
        setInitialDonationCategory("wakaf-alquran");
      } else if (path === "/donasi-wakaf/wakaf-pembangunan") {
        setActiveView("donations");
        setInitialDonationCategory("wakaf-pembangunan");
      } else if (path === "/donasi-wakaf/dukung-dakwah-digital") {
        setActiveView("donations");
        setInitialDonationCategory("dukung-dakwah");
      } else if (path === "/orang-tua-asuh") {
        setActiveView("foster");
      } else if (path === "/progress-pembangunan" || path === "/laporan") {
        setActiveView("progress");
        setInitialReportCategory("semua");
      } else if (path === "/laporan/pendidikan") {
        setActiveView("progress");
        setInitialReportCategory("pendidikan");
      } else if (path === "/laporan/orang-tua-asuh") {
        setActiveView("progress");
        setInitialReportCategory("orang-tua-asuh");
      } else if (path === "/laporan/program-sosial") {
        setActiveView("progress");
        setInitialReportCategory("program-sosial");
      } else if (path === "/laporan/wakaf-alquran") {
        setActiveView("progress");
        setInitialReportCategory("wakaf-alquran");
      } else if (path === "/laporan/wakaf-pembangunan") {
        setActiveView("progress");
        setInitialReportCategory("wakaf-pembangunan");
      } else if (path === "/laporan/dakwah-digital") {
        setActiveView("progress");
        setInitialReportCategory("dakwah-digital");
      } else if (path === "/dakwah" || path === "/dakwah-digital") {
        setActiveView("dakwah");
      } else if (path === "/dakwah-digital/kajian-online") {
        setActiveView("dakwah/kajian-online");
      } else if (path === "/dakwah-digital/video-dakwah") {
        setActiveView("dakwah/video-dakwah");
      } else if (path === "/dakwah-digital/artikel-islami") {
        setActiveView("dakwah/artikel-islami");
      } else if (path === "/dakwah-digital/jadwal-kajian") {
        setActiveView("dakwah/jadwal-kajian");
      } else if (path === "/dakwah-digital/poster-dakwah") {
        setActiveView("dakwah/poster-dakwah");
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
    if (viewId === "units" || viewId === "unit-pendidikan" || viewId === "pendidikan") {
      finalPath = viewId === "unit-pendidikan" ? "/unit-pendidikan" : "/pendidikan";
    }
    if (viewId === "units/rumah-belajar") {
      finalPath = "/pendidikan/rumah-belajar";
    }
    if (viewId === "units/rumah-tahfizz") {
      finalPath = "/pendidikan/rumah-tahfizz";
    }
    if (viewId === "units/rutaba") {
      finalPath = "/pendidikan/rutaba";
    }
    if (viewId === "contact" || viewId === "kontak") finalPath = "/kontak";
    if (viewId === "donations" || viewId === "donasi-wakaf") {
      finalPath = "/donasi-wakaf";
      setInitialDonationCategory("semua");
    }
    if (viewId === "donations/donasi-pendidikan" || viewId === "donasi-wakaf/donasi-pendidikan") {
      finalPath = "/donasi-wakaf/donasi-pendidikan";
      setInitialDonationCategory("pendidikan");
      setActiveView("donations");
    }
    if (viewId === "donations/orang-tua-asuh" || viewId === "donasi-wakaf/orang-tua-asuh") {
      finalPath = "/donasi-wakaf/orang-tua-asuh";
      setInitialDonationCategory("orang-tua-asuh");
      setActiveView("donations");
    }
    if (viewId === "donations/program-sosial" || viewId === "donasi-wakaf/program-sosial") {
      finalPath = "/donasi-wakaf/program-sosial";
      setInitialDonationCategory("program-sosial");
      setActiveView("donations");
    }
    if (viewId === "donations/wakaf-alquran" || viewId === "donasi-wakaf/wakaf-alquran") {
      finalPath = "/donasi-wakaf/wakaf-alquran";
      setInitialDonationCategory("wakaf-alquran");
      setActiveView("donations");
    }
    if (viewId === "donations/wakaf-pembangunan" || viewId === "donasi-wakaf/wakaf-pembangunan") {
      finalPath = "/donasi-wakaf/wakaf-pembangunan";
      setInitialDonationCategory("wakaf-pembangunan");
      setActiveView("donations");
    }
    if (viewId === "donations/dukung-dakwah-digital" || viewId === "donasi-wakaf/dukung-dakwah-digital") {
      finalPath = "/donasi-wakaf/dukung-dakwah-digital";
      setInitialDonationCategory("dukung-dakwah");
      setActiveView("donations");
    }
    if (viewId === "foster" || viewId === "orang-tua-asuh") finalPath = "/orang-tua-asuh";
    if (viewId === "progress" || viewId === "progress-pembangunan" || viewId === "laporan") {
      finalPath = viewId === "progress-pembangunan" ? "/progress-pembangunan" : "/laporan";
      setInitialReportCategory("semua");
    }
    if (viewId === "laporan/pendidikan" || viewId === "progress/pendidikan") {
      finalPath = "/laporan/pendidikan";
      setInitialReportCategory("pendidikan");
      setActiveView("progress");
    }
    if (viewId === "laporan/orang-tua-asuh" || viewId === "progress/orang-tua-asuh") {
      finalPath = "/laporan/orang-tua-asuh";
      setInitialReportCategory("orang-tua-asuh");
      setActiveView("progress");
    }
    if (viewId === "laporan/program-sosial" || viewId === "progress/program-sosial") {
      finalPath = "/laporan/program-sosial";
      setInitialReportCategory("program-sosial");
      setActiveView("progress");
    }
    if (viewId === "laporan/wakaf-alquran" || viewId === "progress/wakaf-alquran") {
      finalPath = "/laporan/wakaf-alquran";
      setInitialReportCategory("wakaf-alquran");
      setActiveView("progress");
    }
    if (viewId === "laporan/wakaf-pembangunan" || viewId === "progress/wakaf-pembangunan") {
      finalPath = "/laporan/wakaf-pembangunan";
      setInitialReportCategory("wakaf-pembangunan");
      setActiveView("progress");
    }
    if (viewId === "laporan/dakwah-digital" || viewId === "progress/dakwah-digital") {
      finalPath = "/laporan/dakwah-digital";
      setInitialReportCategory("dakwah-digital");
      setActiveView("progress");
    }
    if (viewId === "gallery" || viewId === "galeri") finalPath = "/galeri";
    if (viewId === "dakwah" || viewId === "dakwah-digital") {
      finalPath = "/dakwah-digital";
      setActiveView("dakwah");
    }
    if (viewId === "dakwah/kajian-online") {
      finalPath = "/dakwah-digital/kajian-online";
    }
    if (viewId === "dakwah/video-dakwah") {
      finalPath = "/dakwah-digital/video-dakwah";
    }
    if (viewId === "dakwah/artikel-islami") {
      finalPath = "/dakwah-digital/artikel-islami";
    }
    if (viewId === "dakwah/jadwal-kajian") {
      finalPath = "/dakwah-digital/jadwal-kajian";
    }
    if (viewId === "dakwah/poster-dakwah") {
      finalPath = "/dakwah-digital/poster-dakwah";
    }
    if (viewId === "home") finalPath = "/";
    if (viewId === "admin") finalPath = "/admin/dashboard";
    if (viewId.startsWith("admin/")) finalPath = "/" + viewId;
    if (viewId.startsWith("/")) finalPath = viewId;

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
    alert("Fitur orang tua asuh akan aktif setelah integrasi backend.");
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

  const isAdmin = activeView === "admin" || window.location.pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <AdminDashboard
        campaigns={campaignsList}
        onUpdateCampaign={handleUpdateCampaign}
        constructionPercent={constructionRate}
        onUpdateConstruction={setConstructionRate}
        totalDonation={totalCollected}
        onAddManualDonation={handleAddManualDonation}
        onNavigate={handleNavigate}
      />
    );
  }

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
            {/* 1. Cinematic Hero with custom badge and targeted CTAs */}
            <Hero
              onNavigate={handleNavigate}
              onDonateClick={handleOpenGeneralDonation}
            />

            {/* 2. Real statistics and metrics (Sekilas Tentang Kami) */}
            <Stats onProgressClick={() => handleNavigate("progress")} />

            {/* 3. Main Pillars of the Foundation (Pilar Utama Yayasan) */}
            <MainPillars onNavigate={handleNavigate} />

            {/* 4. Education Preview Section */}
            <EducationUnits onLearnMoreUnit={(id) => handleNavigate("units")} />

            {/* 5. Donasi & Wakaf Campaigns Preview Section */}
            <DonationCampaigns 
              onDonateSelect={handleOpenCampaignDonation} 
              onNavigate={handleNavigate}
            />

            {/* 6. Laporan & Transparansi updates preview */}
            <HomeReportsPreview onNavigate={handleNavigate} />

            {/* 7. Dakwah Digital preview */}
            <HomeDakwahPreview onNavigate={handleNavigate} />

            {/* 8. Photographic Gallery preview mapping to filters */}
            <Gallery onNavigate={handleNavigate} />

            {/* 9. Closing CTA Section */}
            <ClosingCTA onNavigate={handleNavigate} />

            {/* 10. Contact Section and Coordinates */}
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
        {(activeView === "units" || activeView === "unit-pendidikan" || activeView === "/unit-pendidikan" || activeView.startsWith("units/")) && (
          <div className="bg-white">
            <EducationalUnitsPage 
              onNavigate={handleNavigate} 
              activeSubUnit={activeView.replace("units/", "")} 
            />
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
            onNavigate={handleNavigate}
            initialCategory={initialDonationCategory}
            onCategoryChange={setInitialDonationCategory}
          />
        )}

        {/* Focused 'Detail Program Donasi' View */}
        {(activeView === "donasi-wakaf/pembangunan-pesantren" || activeView === "pembangunan-pesantren" || (activeView.startsWith("donasi-wakaf/") && activeView !== "donasi-wakaf" && !["donasi-pendidikan", "orang-tua-asuh", "program-sosial", "wakaf-alquran", "wakaf-pembangunan", "dukung-dakwah-digital"].includes(activeView.replace("donasi-wakaf/", "")))) && (() => {
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
            <DevelopmentProgressPage 
              onNavigate={handleNavigate}
              initialCategory={initialReportCategory}
              onCategoryChange={setInitialReportCategory}
            />
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

        {/* Focused 'Dakwah' View */}
        {(activeView === "dakwah" || activeView === "/dakwah" || activeView === "dakwah-digital" || activeView.startsWith("dakwah/")) && (
          <div className="bg-white">
            <DakwahPage 
              onNavigate={handleNavigate} 
              activeSubSection={activeView.includes("/") ? activeView.substring(activeView.indexOf("/") + 1) : undefined}
            />
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

        {/* Active Sandbox Admin Dashboard Controller block removed for early return */}
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
                <button onClick={() => handleNavigate("dakwah")} className="hover:text-brand-teal-400 transition-colors">
                  Dakwah Digital
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
