import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  scriptTitle: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  scriptTitle,
  subtitle,
  className = '',
  align = 'center',
  dark = false,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className={`font-script text-4xl sm:text-5xl md:text-6xl leading-tight transform -rotate-1 ${
          dark ? 'text-[#F8F5F0]' : 'text-[#33251A]'
        }`}
      >
        {scriptTitle}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-2 text-xs sm:text-sm tracking-[0.18em] font-light max-w-2xl ${
            dark ? 'text-[#C7B6A6]' : 'text-[#7A6656]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
