import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TornPaperEdge } from './TornPaperEdge';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Let's tell your story together",
  subtitle = "Whether you are planning an intimate elopement, a grand wedding, or an editorial portrait session, we would love to be part of your journey.",
  buttonText = "GET IN TOUCH",
  buttonLink = "/contact",
}) => {
  return (
    <section id="cta-section" className="relative w-full bg-[#3D2B1F] text-[#F2EDE4] pt-0 pb-16 md:pb-20 overflow-hidden">
      {/* Torn-paper top transition from cream content into dark brown section */}
      <TornPaperEdge position="top" fillColor="#F2EDE4" />

      <div className="max-w-4xl mx-auto px-6 text-center pt-8 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Magazine Italic Serif Title */}
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F2EDE4] italic font-light leading-tight mb-4">
            {title}
          </h2>
          
          <p className="text-xs sm:text-sm text-[#D4CBBF] font-light max-w-xl mx-auto mb-8 leading-relaxed tracking-wide">
            {subtitle}
          </p>

          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              to={buttonLink}
              id="cta-action-btn"
              className="inline-block relative px-9 py-3.5 bg-[#F2EDE4] hover:bg-[#FAF7F2] text-[#3D2B1F] text-[10px] sm:text-[11px] tracking-[0.25em] font-medium uppercase transition-colors shadow-md hover:shadow-lg"
            >
              {buttonText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
