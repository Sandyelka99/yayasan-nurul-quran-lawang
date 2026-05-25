/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

interface FloatingWhatsAppProps {
  activeView: string;
}

export default function FloatingWhatsAppCTA({ activeView }: FloatingWhatsAppProps) {
  // Hide Floating WhatsApp CTA on the admin dashboard view so it doesn't obstruct administrative charts
  if (activeView === "admin") {
    return null;
  }

  const handleFloatingClick = () => {
    const textQuery = encodeURIComponent("Assalamu’alaikum, saya ingin bertanya tentang Yayasan Nurul Quran Lawang Malang.");
    window.open(`https://wa.me/6281200000000?text=${textQuery}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <motion.button
        onClick={handleFloatingClick}
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 10px 25px -5px rgba(16, 185, 129, 0.3)", 
            "0 15px 30px -5px rgba(16, 185, 129, 0.5)", 
            "0 10px 25px -5px rgba(16, 185, 129, 0.3)"
          ]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        id="btn-floating-wa"
        className="flex items-center gap-2 px-4.5 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs shadow-xl cursor-pointer transition-all duration-300 border border-emerald-400/20"
      >
        <span className="relative flex h-3 w-3 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <MessageCircle className="h-3.5 w-3.5 relative inline-flex text-white fill-current" />
        </span>
        
        {/* Responsive layout: Text on desk, compact indicator on mobile */}
        <span className="hidden sm:inline">Hubungi Admin</span>
        <span className="inline sm:hidden">WA</span>
      </motion.button>
    </div>
  );
}
