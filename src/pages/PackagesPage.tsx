import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { CTASection } from '../components/CTASection';
import { packagesData } from '../data/studioData';

export const PackagesPage: React.FC = () => {
  return (
    <div id="packages-page" className="w-full bg-[#F2EDE4]">
      {/* 1. Header */}
      <section className="pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <SectionHeader
          scriptTitle="Packages"
          subtitle="SIMPLE AND TRANSPARENT PACKAGES FOR YOUR SPECIAL MOMENTS."
          align="center"
        />
      </section>

      {/* 2. Editorial Package Cards */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packagesData.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-[#FAF7F2] p-6 sm:p-8 rounded-[1px] border transition-all duration-300 flex flex-col justify-between ${
                pkg.popular
                  ? 'border-[#3D2B1F] shadow-[0_12px_36px_rgba(61,43,31,0.12)] scale-100 lg:-translate-y-2 ring-1 ring-[#3D2B1F]'
                  : 'border-[#E2D9CB] shadow-[0_4px_16px_rgba(61,43,31,0.05)] hover:border-[#3D2B1F]/40'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3D2B1F] text-[#F2EDE4] text-[8px] sm:text-[9px] tracking-[0.25em] uppercase px-3 py-1 font-medium shadow-sm whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Package Name & Price */}
                <div className="text-center pb-5 border-b border-[#E2D9CB]">
                  <span className="text-[9px] tracking-[0.25em] text-[#8E7766] uppercase font-sans font-medium block mb-1">
                    {pkg.subtitle}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#3D2B1F] tracking-[0.12em] uppercase font-light italic">
                    {pkg.name}
                  </h3>
                  <div className="mt-3 flex items-baseline justify-center">
                    <span className="font-editorial text-3xl sm:text-4xl text-[#3D2B1F] font-normal">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start text-xs text-[#523A2A]">
                      <Check className="w-3.5 h-3.5 text-[#8E7766] mr-2 mt-0.5 shrink-0" />
                      <span className="font-light leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <div className="pt-4 text-center">
                <Link
                  to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  id={`book-package-${pkg.id}`}
                  className="block w-full py-3 bg-[#3D2B1F] hover:bg-[#523A2A] text-[#F2EDE4] text-[10px] font-sans tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  BOOK NOW
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. A la Carte & Add-ons Section */}
      <section className="py-12 bg-[#EAE2D5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] tracking-[0.25em] text-[#8E7766] uppercase font-medium font-sans">
            CUSTOMIZE YOUR EXPERIENCE
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#3D2B1F] italic font-light">
            A La Carte Add-Ons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 text-left">
            <div className="bg-white p-5 rounded-[1px] border border-[#E2D9CB] shadow-sm">
              <h4 className="font-editorial text-lg text-[#3D2B1F] italic font-medium">Handcrafted Heirloom Album</h4>
              <p className="text-xs text-[#6B5344] mt-1 font-light">Custom linen or leather fine-art flush mount album.</p>
              <span className="text-xs font-mono text-[#8E7766] mt-3 block">From $600</span>
            </div>
            <div className="bg-white p-5 rounded-[1px] border border-[#E2D9CB] shadow-sm">
              <h4 className="font-editorial text-lg text-[#3D2B1F] italic font-medium">Second Photographer</h4>
              <p className="text-xs text-[#6B5344] mt-1 font-light">Full-day additional perspective for larger weddings.</p>
              <span className="text-xs font-mono text-[#8E7766] mt-3 block">$650</span>
            </div>
            <div className="bg-white p-5 rounded-[1px] border border-[#E2D9CB] shadow-sm">
              <h4 className="font-editorial text-lg text-[#3D2B1F] italic font-medium">Rush 5-Day Delivery</h4>
              <p className="text-xs text-[#6B5344] mt-1 font-light">Expedited master editing and full digital gallery delivery.</p>
              <span className="text-xs font-mono text-[#8E7766] mt-3 block">$450</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <CTASection
        title="Need a Custom Package?"
        subtitle="Every love story and event is unique. Tell us about your plans and we will tailor a bespoke collection just for you."
        buttonText="REQUEST BESPOKE PROPOSAL"
        buttonLink="/contact"
      />
    </div>
  );
};
