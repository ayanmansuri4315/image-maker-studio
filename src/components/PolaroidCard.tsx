import React, { useState } from 'react';
import { motion } from 'motion/react';
import { StudioPhoto } from '../types';
import { WashiTape } from './WashiTape';

interface PolaroidCardProps {
  photo: StudioPhoto;
  onClick?: (photo: StudioPhoto) => void;
  showCaption?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'auto';
  index?: number;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  photo,
  onClick,
  showCaption = false,
  className = '',
  size = 'auto',
  index = 0,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Rotation angles inspired by magazine collage layout
  const rotationAngles = [-2, 3, -4, 1, -3, 4, -1, 2];
  const parsedRotation = typeof photo.rotation === 'string' ? parseFloat(photo.rotation) : (photo.rotation ?? rotationAngles[index % rotationAngles.length]);

  const sizeClasses = {
    sm: 'w-full max-w-[180px]',
    md: 'w-full max-w-[240px]',
    lg: 'w-full max-w-[320px]',
    auto: 'w-full',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: parsedRotation }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay: Math.min((index % 6) * 0.07, 0.35), ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-block cursor-pointer group select-none ${sizeClasses[size]} ${className}`}
      whileHover={{
        scale: 1.045,
        y: -5,
        rotate: 0,
        zIndex: 30,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick && onClick(photo)}
    >
      {/* Semi-translucent Masking Tape Decoration */}
      <WashiTape type={photo.tapeType || 'top'} />

      {/* Polaroid Magazine Frame */}
      <div className="bg-white p-1.5 sm:p-2 pb-4 sm:pb-5 rounded-[1px] shadow-[0_3px_12px_rgba(61,43,31,0.08)] group-hover:shadow-[0_16px_36px_rgba(61,43,31,0.2)] transition-all duration-300 border border-[#E2D9CB]">
        {/* Photo Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E8E1D5]">
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#E8E1D5] animate-pulse flex items-center justify-center text-[#9E8A78] text-xs">
              <span className="font-sans text-[10px] tracking-wider text-[#3D2B1F]/40">...</span>
            </div>
          )}
          <img
            src={photo.url}
            alt={photo.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-106`}
          />

          {/* Subtle Photo ID Stamp on index 3 / featured */}
          {index === 3 && (
            <div className="absolute top-2 left-2 bg-[#F2EDE4]/80 backdrop-blur-xs px-2 py-0.5 text-[8px] font-sans tracking-widest text-[#3D2B1F]">
              #004
            </div>
          )}

          {/* Warm Vignette Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Optional Polaroid Caption */}
        {showCaption && photo.caption && (
          <div className="pt-2 text-center px-1">
            <p className="font-editorial italic text-[#3D2B1F] text-xs sm:text-sm leading-tight truncate">
              {photo.caption}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
