import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WashiTape } from './WashiTape';

export const HomeOurWorksTeaser: React.FC = () => {
  const teaserItems = [
    {
      title: 'WEDDING',
      subtitle: 'Sacred Vows & Joy',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      rotation: '-2.5deg',
      tape: 'top' as const,
      anchor: 'wedding',
    },
    {
      title: 'PRE-WEDDING',
      subtitle: 'Golden Hour Dusk',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      rotation: '2deg',
      tape: 'corner' as const,
      anchor: 'pre-wedding',
    },
    {
      title: 'FASHION & EDITORIAL',
      subtitle: 'Artistic Nuance',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      rotation: '-3deg',
      tape: 'left-corner' as const,
      anchor: 'fashion',
    },
    {
      title: 'PORTRAITS & NEWBORN',
      subtitle: 'Gentle Milestones',
      image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80',
      rotation: '2.5deg',
      tape: 'top' as const,
      anchor: 'portrait',
    },
  ];

  return (
    <section id="home-our-works-teaser" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#F2EDE4] relative">
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <div className="flex items-center justify-center space-x-2 text-[#8E7766] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[10px] tracking-[0.35em] uppercase font-sans font-medium">
            DISCOVER THE PORTFOLIO
          </span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#3D2B1F] italic font-light">
          Explore Our Works
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#523A2A] font-light mt-3 max-w-xl mx-auto leading-relaxed">
          From breathtaking wedding celebrations to intimate portraiture and high-fashion editorials, explore our 8 dedicated portfolio chapters.
        </p>
      </div>

      {/* 4 Teaser Polaroid Vignettes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-14">
        {teaserItems.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ transform: `rotate(${item.rotation})` }}
            className="group relative cursor-pointer select-none transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20"
          >
            <Link to={`/our-works#${item.anchor}`} className="block">
              <WashiTape type={item.tape} />
              <div className="bg-white p-2.5 sm:p-3 pb-5 rounded-[1px] shadow-[0_4px_16px_rgba(61,43,31,0.08)] group-hover:shadow-[0_16px_32px_rgba(61,43,31,0.18)] border border-[#E2D9CB] transition-shadow">
                <div className="aspect-[4/5] overflow-hidden bg-[#E8E1D5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-3 text-center">
                  <p className="font-editorial italic text-xs sm:text-sm text-[#3D2B1F] font-medium leading-tight">
                    {item.title}
                  </p>
                  <p className="font-sans text-[9px] tracking-wider text-[#8E7766] uppercase mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Main Teaser Action */}
      <div className="text-center">
        <Link
          to="/our-works"
          id="home-explore-our-works-btn"
          className="inline-flex items-center space-x-3 px-8 sm:px-10 py-3.5 bg-[#3D2B1F] hover:bg-[#523A2A] text-[#F2EDE4] text-[10px] sm:text-[11px] font-sans tracking-[0.25em] font-medium uppercase transition-all duration-300 shadow-md hover:shadow-xl group"
        >
          <span>VIEW ALL 8 PORTFOLIO CHAPTERS</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
