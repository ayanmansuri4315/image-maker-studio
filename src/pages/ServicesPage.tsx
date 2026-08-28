import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { WashiTape } from '../components/WashiTape';
import { CTASection } from '../components/CTASection';
import { servicesData } from '../data/studioData';

export const ServicesPage: React.FC = () => {
  return (
    <div id="services-page" className="w-full bg-[#F2EDE4]">
      {/* 1. Services Header */}
      <section className="pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <SectionHeader
          scriptTitle="Services"
          subtitle="I OFFER PHOTOGRAPHY SERVICES FOR EVERY SEASON OF LIFE."
          align="center"
        />
      </section>

      {/* 2. Editorial 6-Card Grid */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-white p-4 sm:p-5 pb-6 rounded-[1px] shadow-[0_4px_16px_rgba(61,43,31,0.06)] hover:shadow-[0_16px_32px_rgba(61,43,31,0.14)] transition-all duration-300 border border-[#E2D9CB] flex flex-col justify-between h-full"
            >
              {/* Washi Tape */}
              <WashiTape type={index % 2 === 0 ? 'top' : 'corner'} />

              {/* Photo */}
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8E1D5] mb-5">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-[#3D2B1F]/85 text-[#F2EDE4] text-[9px] tracking-wider px-2.5 py-1 uppercase font-mono backdrop-blur-xs">
                    From {service.startingPrice}
                  </div>
                </div>

                {/* Title in Uppercase Serif */}
                <h3 className="font-editorial text-xl sm:text-2xl text-[#3D2B1F] font-light italic tracking-wider uppercase text-center mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-[13px] text-[#6B5344] font-light leading-relaxed text-center px-2 mb-5">
                  {service.shortDescription}
                </p>

                {/* Feature Bullets */}
                <div className="space-y-2 border-t border-[#F2EDE4] pt-4 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start text-xs text-[#523A2A]">
                      <Check className="w-3.5 h-3.5 text-[#8E7766] mr-2 mt-0.5 shrink-0" />
                      <span className="font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-[#F2EDE4]">
                <Link
                  to={`/our-work?category=${service.categorySlug}`}
                  id={`view-work-${service.id}`}
                  className="inline-flex items-center text-[10px] tracking-[0.2em] font-sans font-medium text-[#3D2B1F] hover:text-[#8E7766] transition-colors"
                >
                  <span>VIEW WORK</span>
                  <ArrowRight className="w-3 h-3 ml-1.5" />
                </Link>

                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  id={`enquire-service-${service.id}`}
                  className="px-4 py-1.5 bg-[#3D2B1F] hover:bg-[#523A2A] text-[#F2EDE4] text-[9px] font-sans tracking-[0.2em] uppercase font-medium transition-colors"
                >
                  ENQUIRE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA Section */}
      <CTASection
        title="Custom Commissions & Travel"
        subtitle="Looking for bespoke coverage, multi-day wedding celebrations, or worldwide destination travel? We create customized packages tailored to your vision."
        buttonText="REQUEST A BESPOKE QUOTE"
        buttonLink="/contact"
      />
    </div>
  );
};
