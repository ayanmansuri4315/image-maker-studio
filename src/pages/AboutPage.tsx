import React from 'react';
import { motion } from 'motion/react';
import { Camera, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { WashiTape } from '../components/WashiTape';
import { CTASection } from '../components/CTASection';
import { studioInfo, aboutAssets } from '../data/studioData';

export const AboutPage: React.FC = () => {
  return (
    <div id="about-page" className="w-full bg-[#F2EDE4]">
      {/* 1. Main Bio & Photographer Portrait Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bio Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionHeader
              scriptTitle="About Us"
              align="left"
              className="mb-2"
            />

            <h3 className="font-editorial text-2xl sm:text-3xl text-[#3D2B1F] italic font-light leading-snug">
              We are IMAGES MAKER STUDIO.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#523A2A] font-light leading-relaxed">
              {studioInfo.bioFull.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Handwritten Signature */}
            <div className="pt-4">
              <span className="font-script text-3xl sm:text-4xl text-[#3D2B1F] block transform -rotate-2">
                Images Maker Studio
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#8E7766] uppercase block mt-1 font-sans font-light">
                Fine Art &amp; Commercial Photography
              </span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Polaroid Layout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-12 gap-4 items-center"
          >
            {/* Primary Large Polaroid */}
            <div className="col-span-8 relative">
              <div className="relative group bg-white p-3 pb-8 shadow-[0_8px_30px_rgba(61,43,31,0.12)] border border-[#E2D9CB] rotate-[-1.5deg]">
                <WashiTape type="top" />
                <div className="aspect-[3/4] overflow-hidden bg-[#E8E1D5]">
                  <img
                    src={aboutAssets.portraitMain}
                    alt={studioInfo.photographerName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-3 text-center">
                  <p className="font-editorial italic text-[#3D2B1F] text-base">Behind the lens at every special event</p>
                </div>
              </div>
            </div>

            {/* Secondary Stacked Polaroids on the Right */}
            <div className="col-span-4 space-y-4">
              <div className="relative bg-white p-2 pb-5 shadow-md border border-[#E2D9CB] rotate-[3deg]">
                <WashiTape type="corner" />
                <div className="aspect-[4/3] overflow-hidden bg-[#E8E1D5]">
                  <img
                    src={aboutAssets.portraitSecondary}
                    alt="Scouting locations"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="relative bg-white p-2 pb-5 shadow-md border border-[#E2D9CB] rotate-[-2.5deg]">
                <WashiTape type="left-corner" />
                <div className="aspect-[3/4] overflow-hidden bg-[#E8E1D5]">
                  <img
                    src={aboutAssets.portraitTertiary}
                    alt="On set"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 2. Dark Espresso Statistics Strip */}
      <section id="stats-banner" className="w-full bg-[#3D2B1F] text-[#F2EDE4] py-10 px-6 border-y border-[#4D3627]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#4D3627]">
          
          <div className="flex flex-col items-center justify-center p-4">
            <Camera className="w-7 h-7 text-[#D4CBBF] mb-3 stroke-[1.5]" />
            <span className="font-editorial text-4xl sm:text-5xl text-[#F2EDE4] font-light italic tracking-wide">
              {studioInfo.stats[0].value}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#D4CBBF] uppercase mt-1 font-sans font-light">
              {studioInfo.stats[0].sublabel}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <Heart className="w-7 h-7 text-[#D4CBBF] mb-3 stroke-[1.5]" />
            <span className="font-editorial text-4xl sm:text-5xl text-[#F2EDE4] font-light italic tracking-wide">
              {studioInfo.stats[1].value}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#D4CBBF] uppercase mt-1 font-sans font-light">
              {studioInfo.stats[1].sublabel}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <Award className="w-7 h-7 text-[#D4CBBF] mb-3 stroke-[1.5]" />
            <span className="font-editorial text-4xl sm:text-5xl text-[#F2EDE4] font-light italic tracking-wide">
              {studioInfo.stats[2].value}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#D4CBBF] uppercase mt-1 font-sans font-light">
              {studioInfo.stats[2].sublabel}
            </span>
          </div>

        </div>
      </section>

      {/* 3. "My Philosophy" Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Philosophy Words */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <h2 className="font-script text-5xl sm:text-6xl text-[#3D2B1F] leading-tight">
              My Philosophy
            </h2>
            <p className="font-editorial text-2xl sm:text-3xl text-[#3D2B1F] italic font-light leading-snug">
              "{studioInfo.philosophyText}"
            </p>
            <p className="text-sm sm:text-base text-[#6B5344] font-light leading-relaxed pt-2">
              We reject rigid, forced poses in favor of organic movement, heartfelt conversation, and the natural chemistry between people. Our imagery feels alive because the moments were real.
            </p>
            <div className="pt-4">
              <Link
                to="/packages"
                id="about-view-packages-btn"
                className="inline-block px-7 py-3 bg-[#3D2B1F] hover:bg-[#523A2A] text-[#F2EDE4] text-[10px] sm:text-[11px] tracking-[0.25em] font-sans uppercase font-medium transition-all duration-300 shadow-md"
              >
                VIEW PACKAGES
              </Link>
            </div>
          </motion.div>

          {/* Right Organic Masked / Sunset Couple Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative flex justify-center"
          >
            <div
              className="relative w-full max-w-lg aspect-[16/10] overflow-hidden shadow-[0_12px_40px_rgba(61,43,31,0.15)] border-4 border-white"
              style={{
                borderRadius: '45% 55% 60% 40% / 40% 50% 50% 60%',
              }}
            >
              <img
                src={aboutAssets.philosophyCouple}
                alt="Couple sunset philosophy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <CTASection
        title="Let's Create Something Beautiful"
        subtitle="I would be honored to document your wedding, family milestone, or creative project with care and artistry."
        buttonText="GET IN TOUCH"
        buttonLink="/contact"
      />
    </div>
  );
};
