import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { studioInfo } from '../data/studioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Exact 6 navigation items mandated by user
  const leftNavItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
  ];

  const rightNavItems = [
    { label: 'OUR WORKS', path: '/our-works' },
    { label: 'PACKAGES', path: '/packages' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && (location.pathname === path || (path === '/our-works' && location.pathname.startsWith('/our-work')))) return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#3D2B1F]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-3 sm:py-3.5'
          : 'bg-[#3D2B1F] py-4 sm:py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Desktop Left Nav: HOME, ABOUT, SERVICES */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 w-1/3">
            {leftNavItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={`nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                  className={`text-[10px] lg:text-[11px] tracking-[0.25em] font-sans uppercase transition-all duration-200 relative py-1 ${
                    active
                      ? 'text-[#F2EDE4] font-medium opacity-100'
                      : 'text-[#F2EDE4]/75 hover:text-[#F2EDE4] hover:opacity-100 font-light'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F2EDE4]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Centered Brand Logo: Thin elegant brown header with centered brand name */}
          <div className="w-auto md:w-1/3 text-center flex justify-start md:justify-center">
            <Link
              to="/"
              id="brand-logo"
              className="inline-block text-center group cursor-pointer"
            >
              <span className="font-editorial text-2xl sm:text-3xl lg:text-[32px] tracking-[0.22em] text-[#F2EDE4] block leading-none font-light italic group-hover:opacity-85 transition-opacity">
                {studioInfo.brandName.toUpperCase()}
              </span>
            </Link>
          </div>

          {/* Desktop Right Nav: PACKAGES, CONTACT */}
          <nav className="hidden md:flex items-center justify-end space-x-6 lg:space-x-8 w-1/3">
            {rightNavItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={`nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                  className={`text-[10px] lg:text-[11px] tracking-[0.25em] font-sans uppercase transition-all duration-200 relative py-1 ${
                    active
                      ? 'text-[#F2EDE4] font-medium opacity-100'
                      : 'text-[#F2EDE4]/75 hover:text-[#F2EDE4] hover:opacity-100 font-light'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F2EDE4]"
                    />
                  )}
                </Link>
              );
            })}

            <Link
              to="/contact"
              id="nav-book-btn"
              className="ml-2 px-4 py-1.5 bg-[#F2EDE4] text-[#3D2B1F] hover:bg-white text-[9px] font-sans font-medium tracking-[0.2em] uppercase transition-all duration-200 shadow-sm"
            >
              BOOK
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center space-x-3">
            <Link
              to="/contact"
              className="px-3 py-1 bg-[#F2EDE4] text-[#3D2B1F] text-[9px] tracking-widest font-medium uppercase"
            >
              ENQUIRE
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="p-1.5 text-[#F2EDE4] hover:text-white transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen / Drawer Menu with smooth animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#3D2B1F] border-t border-[#523A2A] overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <nav className="flex flex-col space-y-4">
                {allNavItems.map((item, idx) => {
                  const active = isActive(item.path);
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        id={`mobile-nav-${item.label.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className={`block text-sm tracking-[0.25em] uppercase font-sans py-2 border-b border-[#523A2A]/50 ${
                          active
                            ? 'text-[#F2EDE4] font-medium pl-2 border-l-2 border-l-[#F2EDE4]'
                            : 'text-[#F2EDE4]/80 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-[#523A2A] flex items-center justify-between text-xs text-[#C2B2A3]">
                <div className="flex items-center space-x-4">
                  <a
                    href={studioInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${studioInfo.email}`}
                    className="hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${studioInfo.phone.replace(/\s+/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
                <span className="text-[10px] tracking-widest font-mono text-[#A8988B] uppercase">
                  {studioInfo.location}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
