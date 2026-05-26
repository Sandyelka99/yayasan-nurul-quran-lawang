import { useState } from "react";
import { Instagram, Music2, Youtube, Share2, X } from "lucide-react";

type SocialLinksProps = {
  variant?: "mobile" | "floating" | "footer";
};

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: Music2,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: Youtube,
  },
];

function SocialButton({
  label,
  href,
  icon: Icon,
  showLabel = false,
}: {
  label: string;
  href: string;
  icon: typeof Instagram;
  showLabel?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
    >
      <Icon className="h-4 w-4" />
      {showLabel && <span>{label}</span>}
    </a>
  );
}

export default function SocialLinks({ variant = "footer" }: SocialLinksProps) {
  const [open, setOpen] = useState(false);

  if (variant === "floating") {
    return (
      <div className="fixed bottom-36 right-5 z-[9999] flex flex-col items-end gap-2">
        {open && (
          <div className="mb-1 flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl">
            {links.map((item) => (
              <SocialButton
                key={item.label}
                label={item.label}
                href={item.href}
                icon={item.icon}
                showLabel
              />
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-100 bg-white px-5 py-3 text-sm font-extrabold text-cyan-700 shadow-2xl shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
        >
          {open ? <X className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
          Ikuti Kami
        </button>
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-slate-500">
          Ikuti Kami
        </p>

        <div className="flex items-center justify-center gap-2">
          {links.map((item) => (
            <SocialButton
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="mb-3 text-sm font-extrabold text-slate-700">
        Ikuti Kanal Resmi Yayasan
      </p>

      <div className="flex items-center justify-center gap-2">
        {links.map((item) => (
          <SocialButton
            key={item.label}
            label={item.label}
            href={item.href}
            icon={item.icon}
            showLabel
          />
        ))}
      </div>
    </div>
  );
}