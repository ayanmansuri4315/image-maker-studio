import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, PinIcon, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { studioInfo } from '../data/studioData';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'OUR WORKS', path: '/our-works' },
    { label: 'PACKAGES', path: '/packages' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <footer
      id="studio-footer"
      className="w-full relative bg-[#251912] text-[#F2EDE4] overflow-hidden pt-16 sm:pt-20 pb-12 border-t border-[#3D2B1F]"
    >
      {/* Subtle Fine Paper Texture Grain & Ambient Warmth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F2EDE4_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#8E7766]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 z-10">
        
        {/* ========================================================================= */}
        {/* MAIN EDITORIAL MULTI-COLUMN LAYOUT (LEFT: Brand | CENTER: Nav | RIGHT: Contact/Social) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 pb-12 sm:pb-16 border-b border-[#443024] items-stretch">
          
          {/* COLUMN 1 (LEFT): Brand Name, Photography Studio, Tagline & Script Accent */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4 text-center md:text-left md:pr-10 lg:pr-12">
            <div className="space-y-3">
              <Link to="/" className="inline-block group">
                <span className="font-editorial text-4xl sm:text-5xl text-[#F2EDE4] italic font-light tracking-[0.2em] block group-hover:opacity-85 transition-opacity">
                  {studioInfo.brandName.toUpperCase()}
                </span>
              </Link>

              <div className="flex items-center justify-center md:justify-start space-x-3 text-[#C2B2A3]">
                <span className="text-[10px] sm:text-[11px] tracking-[0.45em] uppercase font-sans font-medium">
                  PHOTOGRAPHY STUDIO
                </span>
              </div>

              <p className="font-editorial italic text-base sm:text-lg text-[#C9BAAA] max-w-sm mx-auto md:mx-0 font-light leading-relaxed pt-1">
                &ldquo;Capturing moments that become memories.&rdquo;
              </p>
            </div>

            <div className="pt-2">
              <span className="font-script text-2xl sm:text-3xl text-[#8E7766] block -rotate-1">
                honoring your stories with grace
              </span>
            </div>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block md:col-span-1 flex justify-center">
            <div className="w-[1px] h-full bg-[#443024]/70 mx-auto" />
          </div>

          {/* COLUMN 2 (CENTER): Navigation Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:px-4 lg:px-6">
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#F2EDE4] uppercase font-sans font-medium">
              NAVIGATION
            </span>
            <div className="w-8 h-[1px] bg-[#443024] hidden md:block" />
            <nav className="flex flex-wrap md:flex-col justify-center gap-x-6 gap-y-3 text-xs tracking-[0.22em] text-[#C2B2A3] font-light font-sans">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  id={`footer-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-[#F2EDE4] transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block md:col-span-1 flex justify-center">
            <div className="w-[1px] h-full bg-[#443024]/70 mx-auto" />
          </div>

          {/* COLUMN 3 (RIGHT): Contact & Social Links */}
          <div className="md:col-span-2 md:col-span-2 lg:col-span-2 flex flex-col items-center md:items-start justify-between space-y-6 text-center md:text-left md:pl-2">
            
            {/* Social Connection */}
            <div className="space-y-3 w-full flex flex-col items-center md:items-start">
              <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#F2EDE4] uppercase font-sans font-medium">
                SOCIAL
              </span>
              <div className="flex items-center space-x-2.5 pt-0.5">
                <a
                  href={studioInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-[#443024] bg-[#2D1E16] text-[#F2EDE4] hover:bg-[#F2EDE4] hover:text-[#251912] hover:border-[#F2EDE4] flex items-center justify-center transition-all duration-300 shadow-xs"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-[#443024] bg-[#2D1E16] text-[#F2EDE4] hover:bg-[#F2EDE4] hover:text-[#251912] hover:border-[#F2EDE4] flex items-center justify-center transition-all duration-300 shadow-xs"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="w-8 h-8 rounded-full border border-[#443024] bg-[#2D1E16] text-[#F2EDE4] hover:bg-[#F2EDE4] hover:text-[#251912] hover:border-[#F2EDE4] flex items-center justify-center transition-all duration-300 shadow-xs"
                >
                  <PinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(studioInfo.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full border border-[#443024] bg-[#2D1E16] text-[#F2EDE4] hover:bg-[#F2EDE4] hover:text-[#251912] hover:border-[#F2EDE4] flex items-center justify-center transition-all duration-300 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 text-xs text-[#C2B2A3] font-light w-full">
              <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#F2EDE4] uppercase font-sans font-medium block">
                CONTACT
              </span>
              <div className="flex items-center justify-center md:justify-start space-x-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C9BAAA] shrink-0" />
                <a
                  href={`tel:${studioInfo.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#F2EDE4] transition-colors tracking-wider"
                >
                  {studioInfo.phone}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-[#C9BAAA] shrink-0" />
                <a
                  href={`https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(studioInfo.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2EDE4] transition-colors tracking-wider"
                >
                  WhatsApp: {studioInfo.phone}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C9BAAA] shrink-0" />
                <a
                  href={`mailto:${studioInfo.email}`}
                  className="hover:text-[#F2EDE4] transition-colors tracking-wider"
                >
                  {studioInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9BAAA] shrink-0" />
                <span className="tracking-wider text-[#A8988B]">
                  {studioInfo.location}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM COPYRIGHT & LEGAL BAR                                               */}
        {/* ========================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#8E7766] tracking-[0.25em] font-sans font-light gap-4 text-center sm:text-left">
          <p>
            &copy; 2026 {studioInfo.brandName.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-[#F2EDE4] transition-colors uppercase cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="opacity-40">&bull;</span>
            <button
              onClick={() => setTermsModalOpen(true)}
              className="hover:text-[#F2EDE4] transition-colors uppercase cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-[#FAF7F2] text-[#251912] p-8 max-w-lg w-full border border-[#3D2B1F] shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto">
            <h3 className="font-editorial text-2xl italic">Privacy Policy</h3>
            <p className="text-xs text-[#523A2A] leading-relaxed">
              We respect your privacy and protect all client correspondence, wedding guest lists, and photograph archives with strict confidentiality. No client imagery is distributed or published without explicit prior written consent.
            </p>
            <div className="pt-4 text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-6 py-2 bg-[#3D2B1F] text-[#F2EDE4] text-xs font-sans tracking-widest uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {termsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-[#FAF7F2] text-[#251912] p-8 max-w-lg w-full border border-[#3D2B1F] shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto">
            <h3 className="font-editorial text-2xl italic">Terms &amp; Conditions</h3>
            <p className="text-xs text-[#523A2A] leading-relaxed">
              All dates and commissions are secured upon formal retainer agreement. Delivery of high-resolution digital print galleries and archival heirloom albums follow tailored timelines detailed in your bespoke client agreement.
            </p>
            <div className="pt-4 text-right">
              <button
                onClick={() => setTermsModalOpen(false)}
                className="px-6 py-2 bg-[#3D2B1F] text-[#F2EDE4] text-xs font-sans tracking-widest uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
