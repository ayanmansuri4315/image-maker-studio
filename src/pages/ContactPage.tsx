import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  MessageSquareShare,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeader } from '../components/SectionHeader';
import { studioInfo } from '../data/studioData';
import { StudioGoogleMap } from '../components/StudioGoogleMap';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledPackage = searchParams.get('package');
  const prefilledService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: prefilledService || (prefilledPackage ? `Package: ${prefilledPackage}` : 'Wedding'),
    eventDate: '',
    message: prefilledPackage
      ? `Hello Images Maker Studio, I am interested in booking the ${prefilledPackage} package. Could you let me know if you are available?`
      : prefilledService
      ? `Hello Images Maker Studio, I would love to enquire about your ${prefilledService} services.`
      : 'Hello Images Maker Studio, I would like to enquire about your photography services.',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openingHours = [
    { day: 'Friday', hours: '9:00 AM – 7:00 PM', closed: false },
    { day: 'Saturday', hours: '9:00 AM – 7:00 PM', closed: false },
    { day: 'Sunday', hours: 'Closed', closed: true },
    { day: 'Monday', hours: '9:00 AM – 7:00 PM', closed: false },
    { day: 'Tuesday', hours: '9:00 AM – 7:00 PM', closed: false },
    { day: 'Wednesday', hours: '9:00 AM – 7:00 PM', closed: false },
    { day: 'Thursday', hours: '9:00 AM – 7:00 PM', closed: false },
  ];

  const mapExternalUrl =
    'https://www.google.com/maps/search/?api=1&query=G-7,+Near+Shifa+Hospital,+Royal+Complex,+Sidhpur,+Gujarat+384151';

  useEffect(() => {
    if (prefilledPackage) {
      setFormData((prev) => ({
        ...prev,
        eventType: `Package: ${prefilledPackage}`,
        message: `Hello Images Maker Studio, I am interested in booking the ${prefilledPackage} package. Could you let me know if you are available?`,
      }));
    } else if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        eventType: prefilledService,
        message: `Hello Images Maker Studio, I would love to enquire about your ${prefilledService} services.`,
      }));
    }
  }, [prefilledPackage, prefilledService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#3D2B1F', '#A58B74', '#8E7766', '#F2EDE4'],
      });
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(
    formData.message || studioInfo.whatsappDefaultMsg
  )}`;

  return (
    <div id="contact-page" className="w-full bg-[#F2EDE4]">
      {/* 1. Header */}
      <section className="pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <SectionHeader
          scriptTitle="Get in Touch"
          subtitle="WE WOULD LOVE TO HEAR FROM YOU. LET'S CREATE SOMETHING BEAUTIFUL TOGETHER."
          align="center"
        />
      </section>

      {/* 2. Main Contact Grid (Details, Hours & Interactive Form) */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Studio Details & Opening Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#FAF7F2] p-6 sm:p-8 rounded-[1px] border border-[#E2D9CB] shadow-sm space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[#E2D9CB] pb-3">
                <div>
                  <h3 className="font-editorial text-2xl text-[#3D2B1F] italic font-light tracking-wide">
                    IMAGES MAKER STUDIO
                  </h3>
                  <span className="text-[9px] tracking-[0.25em] text-[#8E7766] uppercase font-sans font-medium block">
                    PHOTOGRAPHY &amp; CINEMA
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.25em] text-[#8E7766] uppercase font-sans font-medium">
                  SIDHPUR, GUJARAT
                </span>
              </div>

              <div className="space-y-4 text-sm text-[#523A2A]">
                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-[#EAE2D5] rounded-[1px] text-[#3D2B1F] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E7766] block font-medium font-sans">
                      Phone
                    </span>
                    <a
                      href={`tel:${studioInfo.phone.replace(/\s+/g, '')}`}
                      className="hover:text-[#3D2B1F] transition-colors font-medium text-sm sm:text-base tracking-wide"
                    >
                      {studioInfo.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-[#EAE2D5] rounded-[1px] text-[#128C7E] shrink-0 mt-0.5">
                    <MessageSquareShare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E7766] block font-medium font-sans">
                      WhatsApp
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#128C7E] transition-colors font-medium text-sm sm:text-base tracking-wide"
                    >
                      {studioInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-[#EAE2D5] rounded-[1px] text-[#3D2B1F] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E7766] block font-medium font-sans">
                      Email
                    </span>
                    <a
                      href={`mailto:${studioInfo.email}`}
                      className="hover:text-[#3D2B1F] transition-colors font-medium break-all text-sm sm:text-base tracking-wide"
                    >
                      {studioInfo.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-[#EAE2D5] rounded-[1px] text-[#3D2B1F] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E7766] block font-medium font-sans">
                      Address
                    </span>
                    <p className="font-light text-xs sm:text-sm text-[#523A2A] leading-relaxed">
                      G-7, Near Shifa Hospital<br />
                      Royal Complex,<br />
                      Sidhpur, Gujarat<br />
                      PIN - 384151
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-[#EAE2D5] rounded-[1px] text-[#3D2B1F] shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E7766] block font-medium font-sans">
                      Instagram
                    </span>
                    <a
                      href={studioInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#3D2B1F] transition-colors font-medium tracking-wide"
                    >
                      {studioInfo.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-[#E2D9CB]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-direct-btn"
                  className="w-full flex items-center justify-center space-x-2.5 py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs tracking-wider font-semibold transition-all duration-300 rounded-[1px] shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <MessageSquareShare className="w-4 h-4 stroke-[2.2]" />
                  <span className="tracking-[0.2em] uppercase font-sans text-[11px] sm:text-[12px] font-bold">
                    CHAT ON WHATSAPP
                  </span>
                </a>
                <span className="text-[10px] text-[#8E7766] text-center block mt-2 font-light font-sans">
                  Direct WhatsApp: +91 96380 76661 &bull; Instant Response
                </span>
              </div>
            </motion.div>

            {/* Opening Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#FAF7F2] p-6 sm:p-8 rounded-[1px] border border-[#E2D9CB] shadow-sm space-y-4"
            >
              <div className="flex items-center space-x-2.5 border-b border-[#E2D9CB] pb-3">
                <Clock className="w-4 h-4 text-[#8E7766]" />
                <h3 className="font-editorial text-xl text-[#3D2B1F] italic font-light">
                  OPENING HOURS
                </h3>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-1 border-b border-[#E2D9CB]/50 last:border-none"
                  >
                    <span className="font-medium text-[#3D2B1F]">{item.day}:</span>
                    <span
                      className={`font-mono text-xs ${
                        item.closed ? 'text-[#8E7766] italic font-sans font-medium' : 'text-[#523A2A]'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#E2D9CB]">
                <p className="text-[11px] text-[#8E7766] italic text-right font-light">
                  * Hours might differ
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[1px] border border-[#E2D9CB] shadow-sm"
          >
            <div className="border-b border-[#E2D9CB] pb-4 mb-6">
              <h3 className="font-editorial text-3xl text-[#3D2B1F] italic font-light">
                Send an Enquiry
              </h3>
              <p className="text-xs text-[#8E7766] font-light mt-1">
                Fill in the details below and we will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#3D2B1F] mx-auto animate-bounce" />
                <h3 className="font-editorial text-3xl text-[#3D2B1F] italic font-light">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-[#6B5344] max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received. Our team will get back to you shortly with availability, package brochures, and consultation details.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      eventType: 'Wedding',
                      eventDate: '',
                      message: 'Hello, I would like to enquire about your photography services.',
                    });
                  }}
                  className="mt-4 px-8 py-3 bg-[#3D2B1F] text-[#F2EDE4] text-xs tracking-widest uppercase font-medium hover:bg-[#251912] transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] tracking-[0.2em] uppercase text-[#6B5344] font-medium font-sans mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD4C7] focus:border-[#3D2B1F] focus:bg-white text-sm text-[#3D2B1F] outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] tracking-[0.2em] uppercase text-[#6B5344] font-medium font-sans mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="paintervishal1234@gmail.com"
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD4C7] focus:border-[#3D2B1F] focus:bg-white text-sm text-[#3D2B1F] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-[10px] tracking-[0.2em] uppercase text-[#6B5344] font-medium font-sans mb-1.5">
                      Your Phone *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 96380 76661"
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD4C7] focus:border-[#3D2B1F] focus:bg-white text-sm text-[#3D2B1F] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-event-type" className="block text-[10px] tracking-[0.2em] uppercase text-[#6B5344] font-medium font-sans mb-1.5">
                      Service / Event Type
                    </label>
                    <select
                      id="contact-event-type"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD4C7] focus:border-[#3D2B1F] focus:bg-white text-sm text-[#3D2B1F] outline-none transition-colors"
                    >
                      <option value="Wedding">Wedding Photography</option>
                      <option value="Pre-Wedding">Pre-Wedding / Engagement</option>
                      <option value="Anniversary">Anniversary Celebration</option>
                      <option value="Newborn">Newborn Photography</option>
                      <option value="Fashion">Fashion & Lookbook</option>
                      <option value="Portrait">Portrait Sessions</option>
                      <option value="Events">Event Photography</option>
                      <option value="Lifestyle">Lifestyle & Editorial</option>
                      <option value="Package: BASIC">Package: BASIC</option>
                      <option value="Package: STANDARD">Package: STANDARD</option>
                      <option value="Package: PREMIUM">Package: PREMIUM</option>
                      <option value="Bespoke">Bespoke Custom Commission</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-date" className="block text-[10px] tracking-[0.2em] uppercase text-[#6B5344] font-medium font-sans mb-1.5">
                      Estimated Event Date
                    </label>
                    <input
                      id="contact-date"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD4C7] focus:border-[#3D2B1F] focus:bg-white text-sm text-[#3D2B1F] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] tracking-[0.2em] uppercase text-[#6B5344] font-medium font-sans mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your venue, requirements, date, or any special requests..."
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD4C7] focus:border-[#3D2B1F] focus:bg-white text-sm text-[#3D2B1F] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  id="submit-enquiry-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#3D2B1F] hover:bg-[#251912] text-[#F2EDE4] text-xs font-sans tracking-[0.28em] uppercase font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2.5 disabled:opacity-70 group"
                >
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  <span>{isSubmitting ? 'SENDING ENQUIRY...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* 3. GOOGLE MAPS PLATFORM SECTION */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <StudioGoogleMap />
        </motion.div>
      </section>
    </div>
  );
};
