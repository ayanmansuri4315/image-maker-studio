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
import { WashiTape } from './WashiTape';
import { Lightbox } from './Lightbox';
import { ArrowRight, Sparkles } from 'lucide-react';

export const OurWorkScrollSection: React.FC = () => {
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
      description:
        'Candid, emotional coverage of your wedding day with fine-art framing, capturing laughter, quiet tears, and spontaneous dance floor magic.',
      photos: weddingPhotos,
      layout: 'left-heavy',
      linkSlug: 'wedding',
    },
    {
      id: 'pre-wedding',
      name: 'PRE-WEDDING',
      subtitle: 'GOLDEN HOUR ADVENTURES & ROMANCE',
      description:
        'Intimate couple sessions at dusk across coastal cliffs, golden California hills, and serene desert dunes before the big day arrives.',
      photos: preWeddingPhotos,
      layout: 'right-heavy',
      linkSlug: 'pre-wedding',
    },
    {
      id: 'anniversary',
      name: 'ANNIVERSARY',
      subtitle: 'CELEBRATING YEARS OF GROWING CLOSER',
      description:
        'Honoring the enduring beauty of shared journeys. Romantic portrait sessions that celebrate lifelong companionship and renewed promises.',
      photos: anniversaryPhotos,
      layout: 'left-heavy',
      linkSlug: 'anniversary',
    },
    {
      id: 'newborn',
      name: 'NEWBORN',
      subtitle: 'THE GENTLEST BEGINNINGS OF NEW LIFE',
      description:
        'Soft, organic natural-light portraits of your newborn and growing family, preserving the sweetest first days with tenderness and care.',
      photos: newbornPhotos,
      layout: 'right-heavy',
      linkSlug: 'newborn',
    },
    {
      id: 'fashion',
      name: 'FASHION',
      subtitle: 'EDITORIAL CONCEPT & TEXTURAL ARTISTRY',
      description:
        'Lookbooks, seasonal campaigns, and designer brand stories created with striking studio lighting, deliberate styling, and film nuances.',
      photos: fashionPhotos,
      layout: 'left-heavy',
      linkSlug: 'fashion',
    },
    {
      id: 'portrait',
      name: 'PORTRAIT',
      subtitle: 'EXPRESSIVE GAZES & CREATIVE SPIRIT',
      description:
        'Character-rich personal branding and fine-art portraits for artists, founders, and individuals seeking genuine self-expression.',
      photos: portraitPhotos,
      layout: 'right-heavy',
      linkSlug: 'portraits',
    },
    {
      id: 'event',
      name: 'EVENT',
      subtitle: 'LUMINOUS EVENINGS & GRAND GATHERINGS',
      description:
        'Discreet, elegant documentation of galas, intimate dinner soirées, and milestones bathed in ambient candle and chandelier light.',
      photos: eventPhotos,
      layout: 'left-heavy',
      linkSlug: 'event',
    },
    {
      id: 'lifestyle',
      name: 'LIFESTYLE',
      subtitle: 'THE POETRY OF EVERYDAY MOMENTS',
      description:
        'Unposed coastal strolls, morning coffee rituals, and travel memoirs capturing the raw, effortless charm of your everyday world.',
      photos: lifestylePhotos,
      layout: 'right-heavy',
      linkSlug: 'lifestyle',
    },
  ];

  return (
    <section id="our-work-scroll-section" className="relative w-full py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      {/* Editorial Section Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-2 text-[#8E7766] mb-2"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-medium">
            PORTFOLIO ARCHIVE
          </span>
          <Sparkles className="w-3.5 h-3.5" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-editorial text-5xl sm:text-7xl md:text-8xl italic font-light text-[#3D2B1F] tracking-tight leading-none"
        >
          Our Work
        </motion.h2>

        <p className="font-sans text-xs sm:text-sm text-[#6B5344] font-light mt-3 max-w-md mx-auto">
          Explore our eight primary photography disciplines, revealed progressively as you journey through our archives.
        </p>
      </div>

      {/* 8 Progressive Categories with HUGE Editorial Typography */}
      <div className="space-y-24 sm:space-y-36">
        {categories.map((cat, catIdx) => {
          const isReversed = catIdx % 2 === 1;
          const mainPhoto = cat.photos[0] || weddingPhotos[0];
          const secondaryPhotos = cat.photos.slice(1, 3);

          return (
            <motion.div
              key={cat.id}
              id={`work-category-${cat.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75 }}
              className="relative border-t border-[#3D2B1F]/15 pt-12 sm:pt-16"
            >
              {/* Huge Category Typography Header */}
              <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#8E7766] block font-medium mb-1">
                    CHAPTER 0{catIdx + 1} &bull; {cat.subtitle}
                  </span>
                  <h3 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#3D2B1F] italic font-light tracking-wide leading-none select-none">
                    {cat.name}
                  </h3>
                </div>

                <Link
                  to={`/services`}
                  className="inline-flex items-center text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase text-[#3D2B1F] hover:text-[#8E7766] transition-colors self-start md:self-end pb-2 group"
                >
                  <span>VIEW SERVICE DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Editorial Composition: Large Featured Photograph + Asymmetrical Polaroid Accent Grid */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Large Featured Photograph */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:col-start-6' : 'lg:col-start-1'
                  }`}
                >
                  <div
                    onClick={() => openLightbox(cat.photos, 0)}
                    className="relative group cursor-pointer overflow-hidden bg-white p-3 sm:p-4 pb-8 sm:pb-10 rounded-[1px] shadow-[0_8px_30px_rgba(61,43,31,0.1)] hover:shadow-[0_20px_40px_rgba(61,43,31,0.22)] transition-all duration-300 border border-[#E2D9CB]"
                  >
                    <WashiTape type="top" />
                    <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#E8E1D5]">
                      <img
                        src={mainPhoto.url}
                        alt={mainPhoto.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-[#3D2B1F]/80 text-[#F2EDE4] text-[9px] tracking-widest px-2.5 py-1 uppercase font-sans backdrop-blur-xs">
                        FEATURED NO. 0{catIdx + 1}
                      </div>
                    </div>
                    <div className="pt-3 px-1 flex items-center justify-between">
                      <p className="font-editorial italic text-sm sm:text-base text-[#3D2B1F]">
                        {mainPhoto.title} — {mainPhoto.caption}
                      </p>
                      <span className="font-sans text-[9px] uppercase tracking-widest text-[#8E7766]">
                        CLICK TO EXPAND
                      </span>
                    </div>
                  </div>
                </div>

                {/* Supporting Description & Polaroid Pair */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:col-start-1' : 'lg:col-start-8'
                  }`}
                >
                  {/* Category Description */}
                  <div className="bg-[#FAF7F2] p-6 rounded-[1px] border border-[#E2D9CB] shadow-xs space-y-3">
                    <h4 className="font-editorial text-2xl text-[#3D2B1F] italic font-light">
                      The {cat.name.toLowerCase()} experience
                    </h4>
                    <p className="text-xs sm:text-sm text-[#523A2A] font-light leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="text-[10px] font-sans tracking-[0.2em] uppercase font-medium text-[#3D2B1F] hover:text-[#8E7766] inline-flex items-center"
                      >
                        <span>BOOK {cat.name} SHOOT</span>
                        <ArrowRight className="w-3 h-3 ml-1.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Polaroid Accents */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {secondaryPhotos.map((photo, pIdx) => (
                      <motion.div
                        key={photo.id}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                        onClick={() => openLightbox(cat.photos, pIdx + 1)}
                        className={`relative cursor-pointer bg-white p-2 pb-5 rounded-[1px] shadow-sm border border-[#E2D9CB] ${
                          pIdx % 2 === 0 ? '-rotate-2' : 'rotate-2'
                        } transition-all duration-300`}
                      >
                        <WashiTape type={pIdx % 2 === 0 ? 'left-corner' : 'corner'} />
                        <div className="aspect-[3/4] w-full overflow-hidden bg-[#E8E1D5]">
                          <img
                            src={photo.url}
                            alt={photo.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-editorial italic text-[10px] text-[#3D2B1F] text-center pt-2 truncate px-1">
                          {photo.caption}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

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
    </section>
  );
};
