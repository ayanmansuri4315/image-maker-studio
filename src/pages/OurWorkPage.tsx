import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  weddingPhotos,
  preWeddingPhotos,
  anniversaryPhotos,
  newbornPhotos,
  fashionPhotos,
  portraitPhotos,
  eventPhotos,
  lifestylePhotos,
} from '../data/studioData';
import { StudioPhoto } from '../types';
import { WashiTape } from '../components/WashiTape';
import { Lightbox } from '../components/Lightbox';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export const OurWorkPage: React.FC = () => {
  const [lightboxPhotos, setLightboxPhotos] = useState<StudioPhoto[]>([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (photos: StudioPhoto[], index: number) => {
    setLightboxPhotos(photos);
    setSelectedPhotoIndex(index);
  };

  const categories = [
    {
      id: 'wedding',
      name: 'WEDDING',
      subtitle: 'HONORING SACRED VOWS & UNBRIDLED JOY',
      quote: '"To love and be loved is to feel the sun from both sides."',
      description:
        'Candid, emotional coverage of your wedding day with fine-art framing, capturing laughter, quiet tears, and spontaneous dance floor magic.',
      photos: weddingPhotos,
      layout: 'left-heavy',
    },
    {
      id: 'pre-wedding',
      name: 'PRE-WEDDING',
      subtitle: 'GOLDEN HOUR ADVENTURES & ROMANCE',
      quote: '"In every golden dusk, we find the beginning of our forever."',
      description:
        'Intimate couple sessions at dusk across coastal cliffs, golden California hills, and serene desert dunes before the big day arrives.',
      photos: preWeddingPhotos,
      layout: 'right-heavy',
    },
    {
      id: 'anniversary',
      name: 'ANNIVERSARY',
      subtitle: 'CELEBRATING YEARS OF GROWING CLOSER',
      quote: '"Grow old along with me, the best is yet to be."',
      description:
        'Honoring the enduring beauty of shared journeys. Romantic portrait sessions that celebrate lifelong companionship and renewed promises.',
      photos: anniversaryPhotos,
      layout: 'left-heavy',
    },
    {
      id: 'newborn',
      name: 'NEWBORN',
      subtitle: 'THE GENTLEST BEGINNINGS OF NEW LIFE',
      quote: '"A baby is God\'s opinion that the world should go on."',
      description:
        'Soft, organic natural-light portraits of your newborn and growing family, preserving the sweetest first days with tenderness and care.',
      photos: newbornPhotos,
      layout: 'right-heavy',
    },
    {
      id: 'fashion',
      name: 'FASHION',
      subtitle: 'EDITORIAL CONCEPT & TEXTURAL ARTISTRY',
      quote: '"Style is a way to say who you are without having to speak."',
      description:
        'Lookbooks, seasonal campaigns, and designer brand stories created with striking studio lighting, deliberate styling, and film nuances.',
      photos: fashionPhotos,
      layout: 'left-heavy',
    },
    {
      id: 'portrait',
      name: 'PORTRAIT',
      subtitle: 'EXPRESSIVE GAZES & CREATIVE SPIRIT',
      quote: '"The face is a mirror of the mind, and eyes without speaking confess the secrets of the heart."',
      description:
        'Character-rich personal branding and fine-art portraits for artists, founders, and individuals seeking genuine self-expression.',
      photos: portraitPhotos,
      layout: 'right-heavy',
    },
    {
      id: 'event',
      name: 'EVENT',
      subtitle: 'LUMINOUS EVENINGS & GRAND GATHERINGS',
      quote: '"We do not remember days, we remember moments."',
      description:
        'Discreet, elegant documentation of galas, intimate dinner soirées, and milestones bathed in ambient candle and chandelier light.',
      photos: eventPhotos,
      layout: 'left-heavy',
    },
    {
      id: 'lifestyle',
      name: 'LIFESTYLE',
      subtitle: 'THE POETRY OF EVERYDAY MOMENTS',
      quote: '"Life is pure adventure, and the sooner we realize that, the quicker we will be able to treat life as art."',
      description:
        'Unposed coastal strolls, morning coffee rituals, and travel memoirs capturing the raw, effortless charm of your everyday world.',
      photos: lifestylePhotos,
      layout: 'right-heavy',
    },
  ];

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(`category-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="our-works-page" className="w-full bg-[#F2EDE4] min-h-screen text-[#3D2B1F] selection:bg-[#3D2B1F] selection:text-[#F2EDE4]">
      {/* 1. Dedicated Editorial Header */}
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 text-[#8E7766] mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.4em] font-medium">
            PORTFOLIO ARCHIVE &bull; 8 DEDICATED CHAPTERS
          </span>
          <Sparkles className="w-3.5 h-3.5" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#3D2B1F] italic font-light tracking-tight leading-none"
        >
          Our Works
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-xs sm:text-sm text-[#6B5344] font-light mt-4 max-w-xl mx-auto leading-relaxed"
        >
          A visual chronicle of honest moments, sacred celebrations, and human connection captured with warm analog nuances and editorial elegance.
        </motion.p>

        {/* Quick Chapter Navigation Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto"
        >
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className="px-3.5 py-1.5 bg-[#FAF7F2] hover:bg-[#3D2B1F] text-[#523A2A] hover:text-[#F2EDE4] text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase font-medium border border-[#E2D9CB] transition-all duration-200 shadow-xs cursor-pointer"
            >
              0{idx + 1}. {cat.name}
            </button>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center text-[#8E7766] animate-bounce">
          <ChevronDown className="w-5 h-5 opacity-60" />
        </div>
      </section>

      {/* 2. Long Scrolling Category Portfolios (8 Chapters) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-24 sm:pb-36 space-y-28 sm:space-y-40">
        {categories.map((cat, catIdx) => {
          const isReversed = catIdx % 2 === 1;
          const mainPhoto = cat.photos[0] || weddingPhotos[0];
          const secondaryPhotos = cat.photos.slice(1, 4);

          return (
            <motion.div
              key={cat.id}
              id={`category-${cat.id}`}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative border-t border-[#3D2B1F]/20 pt-16 sm:pt-20 scroll-mt-24"
            >
              {/* Giant Magazine Category Title Header */}
              <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -15, filter: 'blur(3px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center space-x-3 mb-2"
                  >
                    <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#8E7766] font-medium">
                      CHAPTER 0{catIdx + 1}
                    </span>
                    <span className="text-[#8E7766]/50">&bull;</span>
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8E7766]">
                      {cat.subtitle}
                    </span>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#3D2B1F] italic font-light tracking-wide leading-none select-none"
                  >
                    {cat.name}
                  </motion.h2>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase text-[#3D2B1F] hover:text-[#8E7766] transition-colors self-start md:self-end pb-2 group font-medium"
                >
                  <span>INQUIRE FOR {cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>

              {/* Poetic quote strip */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10 text-center md:text-left"
              >
                <p className="font-script text-2xl sm:text-3xl text-[#8E7766] italic">
                  {cat.quote}
                </p>
              </motion.div>

              {/* Editorial Composition: Large Hero Photograph + Polaroid Accents */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Large Featured Photograph with Washi Tape and Polaroid Frame */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.97, y: 25 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:col-start-6' : 'lg:col-start-1'
                  }`}
                >
                  <div
                    onClick={() => openLightbox(cat.photos, 0)}
                    className="relative group cursor-pointer overflow-hidden bg-white p-3 sm:p-4 pb-8 sm:pb-10 rounded-[1px] shadow-[0_8px_30px_rgba(61,43,31,0.12)] hover:shadow-[0_20px_45px_rgba(61,43,31,0.25)] transition-all duration-500 border border-[#E2D9CB]"
                  >
                    <WashiTape type="top" />
                    <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#E8E1D5]">
                      <img
                        src={mainPhoto.url}
                        alt={mainPhoto.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-[#3D2B1F]/85 text-[#F2EDE4] text-[9px] tracking-widest px-3 py-1 uppercase font-sans backdrop-blur-xs">
                        FEATURED 0{catIdx + 1}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <div className="pt-4 px-1 flex items-center justify-between">
                      <div>
                        <p className="font-editorial italic text-base sm:text-lg text-[#3D2B1F] font-light">
                          {mainPhoto.title}
                        </p>
                        {mainPhoto.caption && (
                          <p className="font-sans text-xs text-[#6B5344] mt-0.5 font-light">
                            {mainPhoto.caption}
                          </p>
                        )}
                      </div>
                      <span className="font-sans text-[9px] uppercase tracking-widest text-[#8E7766] shrink-0 ml-4 group-hover:text-[#3D2B1F] transition-colors">
                        EXPAND VIEW
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Supporting Description & Scrapbook Polaroid Accents */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:col-start-1' : 'lg:col-start-8'
                  }`}
                >
                  {/* Category Narrative Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#FAF7F2] p-6 sm:p-8 rounded-[1px] border border-[#E2D9CB] shadow-xs space-y-3"
                  >
                    <span className="text-[9px] font-sans tracking-[0.25em] text-[#8E7766] uppercase font-medium block">
                      THE EDITORIAL APPROACH
                    </span>
                    <h3 className="font-editorial text-2xl text-[#3D2B1F] italic font-light">
                      The {cat.name.toLowerCase()} experience
                    </h3>
                    <p className="text-xs sm:text-sm text-[#523A2A] font-light leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        to="/packages"
                        className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase font-medium text-[#3D2B1F] hover:text-[#8E7766] inline-flex items-center group"
                      >
                        <span>VIEW PACKAGES</span>
                        <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <span className="font-sans text-[9px] text-[#8E7766] tracking-widest">
                        {cat.photos.length} ARCHIVAL FRAMES
                      </span>
                    </div>
                  </motion.div>

                  {/* Supporting Multiple Polaroid Photos with organic rotations */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-5 pt-2">
                    {secondaryPhotos.map((photo, pIdx) => {
                      const rotations = [-2.5, 3, -1.5];
                      const rot = rotations[pIdx % rotations.length];
                      return (
                        <motion.div
                          key={photo.id}
                          initial={{ opacity: 0, y: 25, rotate: 0 }}
                          whileInView={{ opacity: 1, y: 0, rotate: rot }}
                          viewport={{ once: true, margin: '-30px' }}
                          transition={{ duration: 0.6, delay: 0.3 + pIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          whileHover={{ scale: 1.05, y: -5, rotate: 0, zIndex: 25, transition: { duration: 0.25 } }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => openLightbox(cat.photos, pIdx + 1)}
                          className="relative cursor-pointer bg-white p-2 pb-5 rounded-[1px] shadow-[0_4px_14px_rgba(61,43,31,0.08)] group hover:shadow-[0_16px_32px_rgba(61,43,31,0.2)] border border-[#E2D9CB] transition-all duration-300"
                        >
                          <WashiTape type={pIdx % 2 === 0 ? 'top' : 'corner'} />
                          <div className="aspect-[3/4] w-full overflow-hidden bg-[#E8E1D5]">
                            <img
                              src={photo.url}
                              alt={photo.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                            />
                          </div>
                          <p className="font-editorial italic text-[10px] sm:text-[11px] text-[#3D2B1F] text-center pt-2 truncate px-1 font-light">
                            {photo.caption || photo.title}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          photos={lightboxPhotos}
          currentIndex={selectedPhotoIndex}
          isOpen={selectedPhotoIndex !== null}
          onClose={() => setSelectedPhotoIndex(null)}
          onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
        />
      )}
    </div>
  );
};
