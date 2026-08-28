import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TornPaperEdge } from './TornPaperEdge';
import { WashiTape } from './WashiTape';
import { studioInfo } from '../data/studioData';

export const BrownStorySection: React.FC = () => {
  return (
    <section id="brown-story-section" className="relative w-full bg-[#3D2B1F] text-[#F2EDE4] overflow-hidden pt-0 pb-20 md:pb-28">
      {/* Torn-paper top transition from cream section into deep brown story section */}
      <TornPaperEdge position="top" fillColor="#F2EDE4" />

      {/* Background subtle texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F2EDE4_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-10 sm:pt-14">
        
        {/* Main Editorial Story Header with Scrapbook Overlaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-24">
          
          {/* Left Decorative Vertical Text & Floating Polaroid 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 hidden lg:flex flex-col items-center justify-center space-y-6"
          >
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05, y: -4, transition: { duration: 0.25 } }}
              className="relative group bg-white p-2.5 pb-6 shadow-2xl border border-[#E2D9CB] cursor-pointer w-52"
            >
              <WashiTape type="corner" />
              <div className="aspect-[4/5] overflow-hidden bg-[#E8E1D5]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                  alt="Story Polaroid"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="font-editorial italic text-[#3D2B1F] text-xs text-center pt-2">
                Unscripted joy
              </p>
            </motion.div>
            
            <div className="flex items-center space-x-3 text-[#A58B74] pt-2">
              <div className="w-8 h-[1px] bg-[#A58B74]" />
              <span className="text-[9px] font-sans tracking-[0.3em] uppercase">
                EST. 2014 &bull; GUJARAT
              </span>
            </div>
          </motion.div>

          {/* Center Story Text & Handwritten Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-center space-y-5 px-2 sm:px-6"
          >
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#C4B2A0] font-sans font-light block">
              OUR PHILOSOPHY &amp; APPROACH
            </span>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F2EDE4] italic font-light leading-tight">
              Every Season of Life
            </h2>

            <div className="w-16 h-[1px] bg-[#A58B74]/60 mx-auto" />

            <p className="text-xs sm:text-sm text-[#D4CBBF] font-light leading-relaxed max-w-lg mx-auto">
              We photograph with quiet intention — attuned to the unspoken glances, the nervous smiles before walking down the aisle, and the golden sunlight filtering through open vineyard trees.
            </p>

            <p className="text-[11px] sm:text-xs text-[#A58B74] font-light tracking-wide italic">
              "It's not just about taking pictures. It's about preserving who you were in this exact moment."
            </p>
          </motion.div>

          {/* Right Floating Polaroid 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 6 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 hidden lg:flex flex-col items-center justify-center space-y-6"
          >
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05, y: -4, transition: { duration: 0.25 } }}
              className="relative group bg-white p-2.5 pb-6 shadow-2xl border border-[#E2D9CB] cursor-pointer w-52"
            >
              <WashiTape type="left-corner" />
              <div className="aspect-[4/5] overflow-hidden bg-[#E8E1D5]">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80"
                  alt="Story Polaroid"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="font-editorial italic text-[#3D2B1F] text-xs text-center pt-2">
                Pure intimacy
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Large Cream/White Scrapbook CTA Card inside the Brown Section */}
        <div className="relative max-w-4xl mx-auto">
          {/* Overlapping Polaroid top-left edge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block absolute -top-8 -left-8 md:-top-10 md:-left-10 z-20 w-36 md:w-44 pointer-events-none"
          >
            <div className="relative bg-white p-2 pb-4 shadow-xl border border-[#E2D9CB]">
              <WashiTape type="corner" />
              <div className="aspect-square overflow-hidden bg-[#E8E1D5]">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80"
                  alt="CTA Polaroid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Overlapping Polaroid bottom-right edge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block absolute -bottom-8 -right-8 md:-bottom-10 md:-right-10 z-20 w-36 md:w-44 pointer-events-none"
          >
            <div className="relative bg-white p-2 pb-4 shadow-xl border border-[#E2D9CB]">
              <WashiTape type="top" />
              <div className="aspect-square overflow-hidden bg-[#E8E1D5]">
                <img
                  src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=400&q=80"
                  alt="CTA Polaroid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Cream CTA Card Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#FAF7F2] text-[#3D2B1F] p-8 sm:p-14 md:p-16 rounded-[1px] shadow-2xl border border-[#E2D9CB] text-center z-10 space-y-6"
          >
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#8E7766] font-sans font-medium">
              COMMISSIONS &bull; BOOKINGS NOW OPEN
            </span>

            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#3D2B1F] italic font-light leading-tight">
              Let's tell your story together
            </h3>

            <p className="text-xs sm:text-sm text-[#6B5344] font-light max-w-md mx-auto leading-relaxed">
              We take on a curated number of weddings and portrait sessions each season to provide undivided attention to every couple and family.
            </p>

            <div className="pt-2">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  id="brown-section-cta-btn"
                  className="inline-block px-10 py-4 bg-[#3D2B1F] hover:bg-[#523A2A] text-[#F2EDE4] text-[10px] sm:text-[11px] tracking-[0.25em] font-sans uppercase font-medium transition-colors shadow-md hover:shadow-xl"
                >
                  GET IN TOUCH
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
