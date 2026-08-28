import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { heroPhoto, studioInfo } from '../data/studioData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Subtle parallax effect on scroll
  const imageY = useTransform(scrollY, [0, 800], [0, 100]);
  const textY = useTransform(scrollY, [0, 800], [0, 40]);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative w-full overflow-hidden bg-[#3D2B1F]"
    >
      {/* Full-width Photograph Container */}
      <div className="relative w-full h-[65vh] sm:h-[72vh] md:h-[78vh] min-h-[500px] max-h-[820px] overflow-hidden">
        <motion.div
          style={{ y: imageY }}
          className="w-full h-full will-change-transform"
        >
          <motion.img
            initial={{ scale: 1.05, opacity: 0.75 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              scale: { duration: 8, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 1.2, ease: 'easeOut' },
            }}
            src={heroPhoto.url}
            alt={heroPhoto.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.06] will-change-transform"
          />
        </motion.div>

        {/* Warm Cinematic Film Overlays */}
        <div className="absolute inset-0 bg-[#3D2B1F]/25 backdrop-contrast-[1.02] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/90 via-[#3D2B1F]/30 to-[#3D2B1F]/20 pointer-events-none" />

        {/* Center Editorial Headline & Script Overlay */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-5xl mx-auto z-20 pb-16 sm:pb-20"
        >
          <div className="flex flex-col items-center">
            {/* Small Top Tagline - 1st to reveal */}
            <motion.span
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#E5DDD0] mb-3 font-medium"
            >
              {studioInfo.brandName.toUpperCase()} &bull; EST. 2014
            </motion.span>

            {/* Large Cursive / Handwritten Display Heading - 2nd to reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#F2EDE4] italic font-light drop-shadow-md mb-4 max-w-4xl leading-[1.1]"
            >
              Stories We've Written with Light
            </motion.h1>

            {/* Small Supporting Text - 3rd to reveal */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.3em] text-[#D8CEBF] mb-8 font-light max-w-xl"
            >
              FINE ART & EDITORIAL PHOTOGRAPHY &bull; SIDHPUR & GUJARAT
            </motion.p>

            {/* Minimal CTA Buttons - 4th to reveal with hover animations */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5"
            >
              <motion.a
                href="#photo-collage-section"
                id="hero-explore-btn"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="px-7 sm:px-8 py-3 bg-transparent text-[#F2EDE4] text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase hover:bg-[#F2EDE4]/15 transition-colors border border-[#F2EDE4]/50 backdrop-blur-xs shadow-xs"
              >
                EXPLORE STORIES
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  id="hero-contact-btn"
                  className="inline-block px-7 sm:px-8 py-3 bg-[#F2EDE4] text-[#3D2B1F] text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase hover:bg-white transition-colors font-medium shadow-md"
                >
                  BOOK A SESSION
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
