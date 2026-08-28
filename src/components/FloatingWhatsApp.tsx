import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { studioInfo } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(
    studioInfo.whatsappDefaultMsg
  )}`;

  return (
    <aside
      aria-label="Floating WhatsApp Contact"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp with IMAGES MAKER STUDIO"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 border border-white/25 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* Subtle Ambient Pulse Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none opacity-60" />

        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5 fill-current stroke-[1.5]" />
        </div>

        {/* Text Label on Desktop / Tablet */}
        <div className="hidden sm:flex flex-col text-left pl-2.5 pr-1">
          <span className="text-[11px] font-sans font-semibold tracking-wider leading-none text-white uppercase whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <span className="text-[9px] font-mono text-white/90 leading-tight tracking-tight mt-0.5 whitespace-nowrap">
            +91 96380 76661
          </span>
        </div>

        {/* Tooltip for Mobile on Long Press / Hover */}
        <span className="sr-only">Chat on WhatsApp (+91 96380 76661)</span>
      </motion.a>
    </aside>
  );
};
