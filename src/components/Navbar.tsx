/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ATK DETAILING STICKY NAVBAR
 * Strict 3-Zone Top Bar Contract:
 * Zone 1: ATK Detailing Brand mark
 * Zone 2: 4-5 concise single-line nav links
 * Zone 3: 1 primary action ("Call 021 139 0221")
 * + Accessible Mobile Drawer Menu
 */

import React, { useState, useEffect } from 'react';
import { AtkLogo } from './AtkLogo';
import { BUSINESS_CONFIG } from '../config';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  accentColor?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  accentColor = '#E10600',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why ATK', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-[#0A0A0A] border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-12">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
            aria-label="ATK Detailing Home"
          >
            <AtkLogo theme="dark" variant="compact" accentColor={accentColor} />
          </a>

          {/* Zone 2: 4 Single-line Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 active:scale-95 whitespace-nowrap shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ backgroundColor: accentColor }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              aria-label={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
              className="sm:hidden p-2 rounded-lg text-white"
              style={{ backgroundColor: accentColor }}
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10">
              <a
                href={BUSINESS_CONFIG.phoneHref}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
