/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ATK DETAILING FOOTER & FLOATING ACTIONS
 * - Recreates the white logo on dark black background
 * - Navigation mirror to the 5 content sections
 * - Verified phone (021 139 0221), email, address, and social links
 * - Floating Mobile Call Action + Back-To-Top trigger
 */

import React, { useState, useEffect } from 'react';
import { AtkLogo } from './AtkLogo';
import { BUSINESS_CONFIG } from '../config';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp, Star } from 'lucide-react';

interface FooterProps {
  accentColor?: string;
}

export const Footer: React.FC<FooterProps> = ({
  accentColor = '#E10600',
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#080808] border-t border-white/10 text-neutral-400 pt-16 pb-12 relative select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            
            {/* Col 1: Brand Logo & Mission */}
            <div className="space-y-4">
              <div className="w-56">
                <AtkLogo theme="dark" variant="full" accentColor={accentColor} />
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                Specialist vehicle ceramic coatings, multi-stage paint correction, and precision detailing packages across New Zealand. Dedicated to flawless, durable gloss.
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span>5.0 ★ (36 Google Reviews)</span>
              </div>
            </div>

            {/* Col 2: Quick Links to 5 Sections */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
                Explore ATK
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#hero" className="hover:text-white transition-colors">
                    Home / Hero
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services &amp; Detailing Packages
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-white transition-colors">
                    Why Choose Us &amp; Our Work
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white transition-colors">
                    Google Customer Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact &amp; Booking
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Contact Details */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
                Contact &amp; Studio
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <a 
                    href={BUSINESS_CONFIG.phoneHref}
                    className="flex items-center gap-2.5 hover:text-white transition-colors text-white font-semibold"
                  >
                    <Phone className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                    <span>{BUSINESS_CONFIG.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-neutral-400" />
                    <span>{BUSINESS_CONFIG.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-neutral-400">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-neutral-400" />
                  <span>{BUSINESS_CONFIG.address}</span>
                </li>
                <li className="text-neutral-400 pl-6 text-[11px]">
                  {BUSINESS_CONFIG.hours}
                </li>
              </ul>
            </div>

            {/* Col 4: Social & Guarantee */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3 mb-5">
                <a
                  href={`https://instagram.com/${BUSINESS_CONFIG.socials.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/30 transition-all"
                  aria-label="Instagram profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/30 transition-all"
                  aria-label="Facebook profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                All ceramic coatings backed by manufacturer warranty. Inspected under high-intensity color-matched detailing light arrays.
              </p>
            </div>

          </div>

          {/* Bottom Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>© 2025 ATK Detailing. All rights reserved.</p>
            <div className="flex items-center gap-6 text-[11px]">
              <span>New Zealand Registered Service</span>
              <span>·</span>
              <a href="#contact" className="hover:text-white transition-colors">Book Inspection</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION 1: Circular Mobile Call Button (bottom-right on mobile) */}
      <a
        href={BUSINESS_CONFIG.phoneHref}
        className="sm:hidden fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl active:scale-95 transition-transform border-2 border-white/20"
        style={{ backgroundColor: accentColor }}
        aria-label={`Call ATK Detailing at ${BUSINESS_CONFIG.phoneDisplay}`}
      >
        <Phone className="w-6 h-6 animate-pulse" />
      </a>

      {/* FLOATING ACTION 2: Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-5 left-5 z-40 w-11 h-11 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-white border border-white/20 flex items-center justify-center shadow-xl backdrop-blur-md transition-all active:scale-90"
          aria-label="Back to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
};
