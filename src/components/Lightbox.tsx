import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { StudioPhoto } from '../types';

interface LightboxProps {
  photos: StudioPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentPhoto = photos[currentIndex];

  const handlePrev = useCallback(() => {
    const nextIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(nextIdx);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % photos.length;
    onNavigate(nextIdx);
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="lightbox-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#150F0B]/95 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          id="lightbox-close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#EAE4DC] hover:text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          id="lightbox-prev-btn"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous Image"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-[#EAE4DC] hover:text-white p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-50"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Next Button */}
        <button
          id="lightbox-next-btn"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next Image"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-[#EAE4DC] hover:text-white p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-50"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Main Lightbox Frame */}
        <motion.div
          key={currentPhoto.id}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl max-h-[88vh] flex flex-col items-center bg-white p-3 sm:p-4 pb-4 sm:pb-6 rounded shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Polaroid Tape on Lightbox */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#EADFCB]/90 backdrop-blur-[1px] shadow-sm z-20 pointer-events-none -rotate-[1deg] border-x-2 border-dashed border-[#BBAA94]/40" />

          {/* Image */}
          <div className="relative overflow-hidden max-h-[72vh] flex items-center justify-center bg-[#EAE4DC]">
            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              referrerPolicy="no-referrer"
              className="max-h-[72vh] w-auto object-contain select-none"
            />
          </div>

          {/* Caption & Counter */}
          <div className="w-full flex items-center justify-between pt-3 px-2">
            <div>
              <h4 className="font-editorial text-lg sm:text-xl text-[#251B14] font-medium leading-tight">
                {currentPhoto.title}
              </h4>
              {currentPhoto.caption && (
                <p className="font-script text-[#6B5344] text-base sm:text-lg">
                  {currentPhoto.caption}
                </p>
              )}
            </div>
            <div className="text-xs text-[#8E7766] tracking-widest uppercase font-mono">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
