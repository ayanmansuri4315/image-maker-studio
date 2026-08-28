import React, { useState } from 'react';
import { motion } from 'motion/react';
import { StudioPhoto } from '../types';
import { WashiTape } from './WashiTape';
import { Lightbox } from './Lightbox';

interface PhotoCollageProps {
  photos: StudioPhoto[];
}

export const PhotoCollage: React.FC<PhotoCollageProps> = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  // Curated layout groupings with bespoke scrapbook offsets and rotations
  return (
    <section
      id="photo-collage-section"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-[1500px] mx-auto overflow-hidden bg-[#F2EDE4]"
    >
      {/* Background subtle handmade paper speckles */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#3D2B1F_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* 1. Large Handwritten Heading matching reference */}
      <div className="relative text-center mb-16 sm:mb-24 z-10">
        <motion.span
          initial={{ opacity: 0, y: 15, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-[#8E7766] font-sans font-medium block mb-2"
        >
          VISUAL MEMOIRS &bull; 24 STORIES PRESERVED
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#3D2B1F] italic font-light tracking-wide leading-tight uppercase"
        >
          A Collection of Beautiful Stories
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center space-x-4 mt-4"
        >
          <div className="w-12 h-[1px] bg-[#3D2B1F]/20" />
          <span className="font-script text-2xl sm:text-3xl text-[#8E7766] -rotate-3">
            Handcrafted with love &amp; light
          </span>
          <div className="w-12 h-[1px] bg-[#3D2B1F]/20" />
        </motion.div>
      </div>

      {/* 2. Scrapbook Editorial Layout with Layered Polaroids (24 Photos) */}
      <div className="space-y-12 sm:space-y-16">
        
        {/* Cluster 1: The Wedding Day Narrative (Photos 0 to 5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {photos.slice(0, 6).map((photo, i) => {
            const rotations = [-3, 2.5, -4, 3.5, -2, 4];
            const rot = typeof photo.rotation === 'string' ? parseFloat(photo.rotation) : rotations[i % rotations.length];
            const isHero = i === 1 || i === 4;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 35, rotate: 0 }}
                whileInView={{ opacity: 1, y: isHero ? -12 : 8, rotate: rot }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -6, rotate: 0, zIndex: 35, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePhotoClick(i)}
                className="relative group cursor-pointer select-none"
              >
                <WashiTape type={photo.tapeType || (i % 2 === 0 ? 'top' : 'corner')} />
                <div className="bg-white p-2 pb-5 sm:pb-6 rounded-[1px] shadow-[0_4px_16px_rgba(61,43,31,0.08)] group-hover:shadow-[0_18px_38px_rgba(61,43,31,0.22)] border border-[#E2D9CB] transition-shadow duration-300">
                  <div className={`w-full overflow-hidden bg-[#E8E1D5] ${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-[4/5]' : 'aspect-square'}`}>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-editorial italic text-[#3D2B1F] text-xs truncate">
                      {photo.caption || photo.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cluster 2: Pre-Wedding & Sunset Walks (Photos 6 to 11) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {photos.slice(6, 12).map((photo, i) => {
            const actualIndex = 6 + i;
            const rotations = [2.5, -3.5, 3, -2.5, 4, -1.5];
            const rot = typeof photo.rotation === 'string' ? parseFloat(photo.rotation) : rotations[i % rotations.length];
            const isHero = i === 2 || i === 5;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 35, rotate: 0 }}
                whileInView={{ opacity: 1, y: isHero ? 12 : -8, rotate: rot }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -6, rotate: 0, zIndex: 35, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePhotoClick(actualIndex)}
                className="relative group cursor-pointer select-none"
              >
                <WashiTape type={photo.tapeType || (i % 2 === 0 ? 'corner' : 'top')} />
                <div className="bg-white p-2 pb-5 sm:pb-6 rounded-[1px] shadow-[0_4px_16px_rgba(61,43,31,0.08)] group-hover:shadow-[0_18px_38px_rgba(61,43,31,0.22)] border border-[#E2D9CB] transition-shadow duration-300">
                  <div className={`w-full overflow-hidden bg-[#E8E1D5] ${i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-editorial italic text-[#3D2B1F] text-xs truncate">
                      {photo.caption || photo.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cluster 3: Editorial Portraits & Quiet Stillness (Photos 12 to 17) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {photos.slice(12, 18).map((photo, i) => {
            const actualIndex = 12 + i;
            const rotations = [-2, 4, -3, 2, -4, 3];
            const rot = typeof photo.rotation === 'string' ? parseFloat(photo.rotation) : rotations[i % rotations.length];
            const isHero = i === 0 || i === 3;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 35, rotate: 0 }}
                whileInView={{ opacity: 1, y: isHero ? -12 : 8, rotate: rot }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -6, rotate: 0, zIndex: 35, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePhotoClick(actualIndex)}
                className="relative group cursor-pointer select-none"
              >
                <WashiTape type={photo.tapeType || (i % 3 === 0 ? 'left-corner' : 'top')} />
                <div className="bg-white p-2 pb-5 sm:pb-6 rounded-[1px] shadow-[0_4px_16px_rgba(61,43,31,0.08)] group-hover:shadow-[0_18px_38px_rgba(61,43,31,0.22)] border border-[#E2D9CB] transition-shadow duration-300">
                  <div className={`w-full overflow-hidden bg-[#E8E1D5] ${i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-editorial italic text-[#3D2B1F] text-xs truncate">
                      {photo.caption || photo.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cluster 4: Celebrations, Details & Golden Skies (Photos 18 to 23) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {photos.slice(18, 24).map((photo, i) => {
            const actualIndex = 18 + i;
            const rotations = [3.5, -2.5, 2, -3.5, 1.5, -2];
            const rot = typeof photo.rotation === 'string' ? parseFloat(photo.rotation) : rotations[i % rotations.length];
            const isHero = i === 1 || i === 4;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 35, rotate: 0 }}
                whileInView={{ opacity: 1, y: isHero ? 8 : -8, rotate: rot }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -6, rotate: 0, zIndex: 35, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePhotoClick(actualIndex)}
                className="relative group cursor-pointer select-none"
              >
                <WashiTape type={photo.tapeType || (i % 2 === 0 ? 'top' : 'corner')} />
                <div className="bg-white p-2 pb-5 sm:pb-6 rounded-[1px] shadow-[0_4px_16px_rgba(61,43,31,0.08)] group-hover:shadow-[0_18px_38px_rgba(61,43,31,0.22)] border border-[#E2D9CB] transition-shadow duration-300">
                  <div className={`w-full overflow-hidden bg-[#E8E1D5] ${i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-editorial italic text-[#3D2B1F] text-xs truncate">
                      {photo.caption || photo.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={selectedPhotoIndex}
          isOpen={selectedPhotoIndex !== null}
          onClose={() => setSelectedPhotoIndex(null)}
          onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
        />
      )}
    </section>
  );
};
