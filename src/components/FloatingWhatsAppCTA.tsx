import { useState } from "react";
import {
  Instagram,
  MessageCircle,
  Music2,
  Share2,
  X,
  Youtube,
} from "lucide-react";

const whatsappNumber = "6281234012041";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
    iconClass: "text-pink-600",
    buttonClass:
      "border-pink-200 bg-pink-50 text-pink-700 hover:bg-pink-100 hover:border-pink-300",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: Music2,
    iconClass: "text-black",
    buttonClass:
      "border-slate-300 bg-slate-50 text-slate-800 hover:bg-slate-100 hover:border-slate-400",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: Youtube,
    iconClass: "text-red-600",
    buttonClass:
      "border-red-200 bg-red-50 text-red-700 hover:bg-red-100 hover:border-red-300",
  },
];

export default function FloatingWhatsAppCTA() {
  const [openSocial, setOpenSocial] = useState(false);

  const openWhatsApp = () => {
    const message =
      "Assalamu'alaikum, saya ingin menghubungi admin Yayasan Nurul Quran.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-5 z-[9999] flex flex-col items-end gap-3">
      {openSocial && (
        <div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 ${item.buttonClass}`}
              >
                <Icon className={`h-4 w-4 ${item.iconClass}`} />
                {item.label}
              </a>
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpenSocial((prev) => !prev)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200 bg-gradient-to-r from-cyan-700 via-teal-600 to-emerald-600 px-5 py-3 text-sm font-extrabold text-white shadow-2xl shadow-cyan-950/25 transition hover:-translate-y-0.5 hover:shadow-cyan-950/35"
      >
        {openSocial ? (
          <X className="h-4 w-4" />
        ) : (
          <Share2 className="h-4 w-4" />
        )}
        Ikuti Kami
      </button>

      <button
        type="button"
        onClick={openWhatsApp}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-sm font-extrabold text-white shadow-2xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:shadow-emerald-950/30"
      >
        <MessageCircle className="h-4 w-4 fill-white/20" />
        Hubungi Admin
      </button>
    </div>
  );
}