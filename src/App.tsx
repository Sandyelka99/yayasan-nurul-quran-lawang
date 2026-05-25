import React, { useEffect, useState } from "react";
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
import DonationWakafPage from "./components/DonationWakafPage";
import DonationDetailPage from "./components/DonationDetailPage";
import FosterParentPage from "./components/FosterParentPage";
import DevelopmentProgressPage from "./components/DevelopmentProgressPage";
import GalleryPage from "./components/GalleryPage";
import AboutPage from "./components/AboutPage";
import EducationalUnitsPage from "./components/EducationalUnitsPage";
import ContactPage from "./components/ContactPage";
import FloatingWhatsAppCTA from "./components/FloatingWhatsAppCTA";
import DakwahPage from "./components/DakwahPage";

function getViewFromPath(pathname: string) {
  if (pathname === "/" || pathname === "") return "home";
  if (pathname === "/tentang-yayasan" || pathname === "/about") return "about";
  if (pathname === "/unit-pendidikan" || pathname === "/units") return "units";
  if (pathname === "/donasi-wakaf") return "donation";
  if (pathname.startsWith("/donasi-wakaf/")) return "donation-detail";
  if (pathname === "/orang-tua-asuh") return "foster-parent";
  if (pathname === "/progress-pembangunan") return "progress";
  if (pathname === "/galeri") return "gallery";
  if (pathname === "/kontak" || pathname === "/contact") return "contact";
  if (pathname === "/admin") return "admin";
  if (pathname === "/dakwah") return "dakwah";
  return "home";
}

export default function App() {
  const [activeView, setActiveView] = useState<string>(() =>
    getViewFromPath(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setActiveView(getViewFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      ) {
        return;
      }

      event.preventDefault();
      window.history.pushState({}, "", href);
      setActiveView(getViewFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const isAdmin = activeView === "admin";

  const renderPage = () => {
    switch (activeView) {
      case "about":
        return <AboutPage />;

      case "units":
        return <EducationalUnitsPage />;

      case "donation":
        return <DonationWakafPage />;

      case "donation-detail":
        return <DonationDetailPage />;

      case "foster-parent":
        return <FosterParentPage />;

      case "progress":
        return <DevelopmentProgressPage />;

      case "gallery":
        return <GalleryPage />;

      case "contact":
        return <ContactPage />;

      case "admin":
        return <AdminDashboard />;

      case "dakwah":
        return <DakwahPage />;

      case "home":
      default:
        return (
          <>
            <Hero />
            <Stats />
            <EducationUnits />
            <DonationCampaigns />
            <FosterParent />
            <DevelopmentProgress />
            <CoreValues />
            <Gallery />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {!isAdmin && <Navbar />}
      {renderPage()}
      {!isAdmin && <FloatingWhatsAppCTA />}
    </div>
  );
}