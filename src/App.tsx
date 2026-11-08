/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * DODDS MOBILE DETAILING – MODERN RESPONSIVE SINGLE-PAGE APPLICATION
 * =========================================================================
 * Brand: Dodds Mobile Detailing (New Zealand)
 * Tagline: Mobile Detailing. Interior | Exterior. Trained by Mexted Motors.
 * Alternating Sections: High-contrast Black (#0A0A0A) & Crisp White/Off-White (#F6F7F9)
 * Structure: Sticky Navbar + Exactly 5 Content Sections + Footer + Floating Mobile Actions
 * 1. Hero
 * 2. Services & Packages
 * 3. Why Choose Us + Our Work
 * 4. Reviews
 * 5. Contact & Booking
 * =========================================================================
 */

import React, { useState } from 'react';
import { 
  BUSINESS_CONFIG, 
  SERVICES_CONFIG, 
  BEFORE_AFTER_TILES, 
  WHY_CHOOSE_US_BENEFITS, 
  REVIEWS_CONFIG 
} from './config';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroCarVisual } from './components/HeroCarVisual';
import { BeforeAfterCard } from './components/BeforeAfterCard';
import { ServiceCard } from './components/ServiceCard';
import { BookingForm } from './components/BookingForm';
import { NzMapCard } from './components/NzMapCard';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  ExternalLink,
  Award,
  Calendar,
  Instagram,
  Facebook,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  // Service ID currently passed into the booking form
  const [selectedServiceId, setSelectedServiceId] = useState<string>('interior-detailing');

  const accentColor = BUSINESS_CONFIG.accent.primary;

  const handleEnquireService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-[#E10600] selection:text-white">
      {/* STICKY NAVBAR (Not counted as a section) */}
      <Navbar accentColor={accentColor} />

      {/* =======================================================================
          SECTION 1: HERO (Dark Section)
          - Black background with SVG car silhouette illustration
          - Headline: "Interior & Exterior Detailing, Done Right."
          - Subheadline: "Professional mobile detailing for your car — brought directly to your door."
          - Buttons: "Call 022 538 5350" & "Get a Free Quote"
          - Badges: "5.0 ★ (8 Google Reviews)", "Interior | Exterior", "Mobile Detailing"
         ======================================================================= */}
      <section 
        id="hero" 
        className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#0A0A0A] overflow-hidden border-b border-white/10"
      >
        {/* Subtle automotive background lines */}
        <div className="absolute inset-0 pattern-diagonal opacity-50 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badges strip: 5.0 ★ (8 Google Reviews) · Interior | Exterior · Mobile Detailing */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                <a
                  href="#reviews"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium transition-colors"
                >
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-bold">{BUSINESS_CONFIG.googleRating.display}</span>
                </a>

                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#18181A] border border-white/10 text-neutral-300 font-mono text-[11px] uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                  Interior | Exterior
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#18181A] border border-white/10 text-neutral-300 font-mono text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" />
                  Mobile Detailing
                </span>
              </div>

              {/* Marquee Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading uppercase tracking-tight text-white leading-[1.05] text-balance">
                Interior &amp; Exterior Detailing, <span className="underline decoration-[#E10600] decoration-4 underline-offset-8">Done Right.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
                Professional mobile car detailing brought directly to your home or workplace. Thorough interior rejuvenation and precision exterior hand detailing across New Zealand, trained by Mexted Motors.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white shadow-xl flex items-center justify-center gap-2.5 transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: accentColor }}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Signal Lead-in */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Trained by Mexted Motors
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Mobile Service at Your Door
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> By Appointment NZ
                </span>
              </div>
            </div>

            {/* Right Visual Column (5 cols): Sports-Car Silhouette SVG with Sweep */}
            <div className="lg:col-span-5 w-full">
              <HeroCarVisual accentColor={accentColor} />
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 2: SERVICES & PACKAGES (Light Contrast Section)
          - White / Off-white background (#F6F7F9) with strong dark text
          - Responsive grid of 6 to 8 editable cards with SVG icons
          - Mark first two as "Featured"
          - One-line description + "Enquire" link that scrolls to contact form
          - Note above grid: "Services and packages shown are examples..."
          - Editable "Request a quote" note
         ======================================================================= */}
      <section 
        id="services" 
        className="py-20 sm:py-28 bg-[#F6F7F9] text-[#0A0A0A] border-b border-neutral-300 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/5 text-[#0A0A0A] font-mono text-xs uppercase tracking-widest font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              Tailored Protection &amp; Care
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading uppercase tracking-tight text-[#0A0A0A]">
              Mobile Detailing Services
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Professional mobile interior and exterior car detailing delivered directly to your location. Trained by Mexted Motors.
            </p>

            <div className="mt-3 inline-block text-xs font-mono font-semibold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded">
              Request a quote: Transparent quotes assessed on your vehicle's make and condition.
            </div>
          </div>

          {/* 2-Service Clean Responsive Grid (Interior & Exterior) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SERVICES_CONFIG.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                accentColor={accentColor}
                onEnquire={handleEnquireService}
              />
            ))}
          </div>

          {/* Bottom Banner inside Section 2 */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl font-bold font-heading uppercase tracking-wide">
                Need Both? Book a Complete Mobile Detail (Interior &amp; Exterior)
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                We travel directly to your home or workplace with everything needed for a full bumper-to-bumper detail.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white shrink-0 hover:brightness-110 transition-all shadow-md"
              style={{ backgroundColor: accentColor }}
            >
              Request Mobile Quote
            </a>
          </div>

        </div>
      </section>

      {/* =======================================================================
          SECTION 3: WHY CHOOSE US + OUR WORK (Dark Section)
          - Short paragraph about meticulous interior and exterior detailing, trained by Mexted Motors
          - 4 to 6 benefit points
          - Row of 3 before/after placeholder tiles (SVG/CSS)
          - Stats row: "5.0 Google rating", "8 Google reviews", "Years in business: [edit]"
         ======================================================================= */}
      <section 
        id="why-us" 
        className="py-20 sm:py-28 bg-[#0A0A0A] text-white border-b border-white/10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Main Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block mb-2">
                Uncompromising Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading uppercase tracking-tight text-white">
                Why Choose Us &amp; Our Work
              </h2>
              <p className="text-base text-neutral-300 mt-4 leading-relaxed">
                Trained by Mexted Motors, Dodds Mobile Detailing brings dealership-grade interior and exterior vehicle care directly to your location. From deep upholstery extraction to meticulous two-bucket hand washing, we deliver exceptional craftsmanship and convenience wherever you are in New Zealand.
              </p>
            </div>

            {/* STATS ROW (Strictly honest data as requested) */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#141416] border border-white/10 text-center">
              <div className="p-2">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-white flex items-center justify-center gap-1">
                  <span>5.0</span>
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-[11px] text-neutral-400 font-mono mt-1">Google rating</div>
              </div>

              <div className="p-2 border-x border-white/10">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  8
                </div>
                <div className="text-[11px] text-neutral-400 font-mono mt-1">Google reviews</div>
              </div>

              <div className="p-2">
                <div className="text-sm sm:text-base font-bold font-heading text-red-400 pt-1">
                  NZ
                </div>
                <div className="text-[11px] text-neutral-400 font-mono mt-1">{BUSINESS_CONFIG.yearsInBusinessText}</div>
              </div>
            </div>
          </div>

          {/* 6 Benefit Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {WHY_CHOOSE_US_BENEFITS.map((benefit, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/25 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4">
                  <Award className="w-4 h-4 text-red-500" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* ROW OF 3 BEFORE / AFTER TILES */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Proof of Performance
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Real Vehicle Transformations
                </h3>
              </div>
              <span className="text-xs text-neutral-400 font-mono">
                Interactive Before &amp; After Sliders
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BEFORE_AFTER_TILES.map((tile) => (
                <BeforeAfterCard
                  key={tile.id}
                  tile={tile}
                  accentColor={accentColor}
                />
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/5 text-[11px] text-neutral-400 font-mono text-center">
              Tip for Owner: Replace the SVG comparison tiles with your real workshop photos in <code className="text-white">src/config.ts</code> under <code className="text-white">BEFORE_AFTER_TILES</code>.
            </div>
          </div>

        </div>
      </section>

      {/* =======================================================================
          SECTION 4: REVIEWS (Light Contrast Section)
          - Crisp off-white (#F6F7F9) with dark text
          - Rating summary showing 5.0 stars "Based on 8 Google reviews"
          - Grid of 3 clearly labelled placeholder review cards
          - "Read our reviews on Google" button with editable URL
         ======================================================================= */}
      <section 
        id="reviews" 
        className="py-20 sm:py-28 bg-[#F6F7F9] text-[#0A0A0A] border-b border-neutral-300 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Rating Summary Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Verified Google Rating</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading uppercase tracking-tight text-[#0A0A0A]">
              5.0 ★ Google Rating
            </h2>

            <p className="text-base text-neutral-600 mt-2 font-medium">
              Based on 8 Google reviews from verified New Zealand car owners.
            </p>

            <div className="flex items-center justify-center gap-1 mt-3 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" />
              ))}
            </div>
          </div>

          {/* Grid of 3 Clearly Labelled Placeholder Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {REVIEWS_CONFIG.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {review.dateText}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-700 leading-relaxed italic">
                    "{review.reviewText}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <div className="font-bold text-sm text-[#0A0A0A]">{review.reviewer}</div>
                  <div className="text-xs text-neutral-500 mt-0.5 font-medium">{review.vehicle}</div>
                  <div className="text-[11px] text-red-600 font-mono mt-1 font-semibold">{review.service}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA: Read our reviews on Google */}
          <div className="text-center">
            <a
              href={BUSINESS_CONFIG.googleRating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 shadow-lg active:scale-95"
              style={{ backgroundColor: accentColor }}
            >
              <span>Read Our Reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-neutral-500 font-mono mt-2">
              Opens Google Maps profile in a new tab
            </p>
          </div>

        </div>
      </section>

      {/* =======================================================================
          SECTION 5: CONTACT & BOOKING (Dark Section)
          - Two-column layout (stacked on mobile)
          - Column 1: Booking form with front-end validation & success message
          - Column 2: Click-to-call & text buttons, email, location, hours,
                      social icons, styled map card with fallback, "Get Directions"
         ======================================================================= */}
      <section 
        id="contact" 
        className="py-20 sm:py-28 bg-[#0A0A0A] text-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block mb-2">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading uppercase tracking-tight text-white">
              Contact &amp; Booking
            </h2>
            <p className="text-sm text-neutral-300 mt-2 max-w-xl">
              Lock in your vehicle inspection or detailing appointment. Call directly, send a message, or request a customized quote below.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Column 1: Booking Form (7 cols on lg) */}
            <div className="lg:col-span-7">
              <BookingForm 
                selectedServiceId={selectedServiceId}
                accentColor={accentColor}
              />
            </div>

            {/* Column 2: Direct Contact, Map Card & Quick Triggers (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quick Communication Actions Bar */}
              <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  Direct Phone &amp; Enquiries
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Click to Call */}
                  <a
                    href={BUSINESS_CONFIG.phoneHref}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-3 transition-all hover:border-white/20 active:scale-95"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0" style={{ backgroundColor: accentColor }}>
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase font-mono">Call Us</div>
                      <div className="text-xs font-bold text-white">{BUSINESS_CONFIG.phoneDisplay}</div>
                    </div>
                  </a>

                  {/* Click to Text / SMS */}
                  <a
                    href={BUSINESS_CONFIG.smsHref}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-3 transition-all hover:border-white/20 active:scale-95"
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-white shrink-0">
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase font-mono">Text / SMS</div>
                      <div className="text-xs font-bold text-white">{BUSINESS_CONFIG.phoneDisplay}</div>
                    </div>
                  </a>
                </div>

                {/* Email Action */}
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="w-full p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-between transition-all hover:border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase font-mono">Email Enquiries</div>
                      <div className="text-xs font-bold text-white">{BUSINESS_CONFIG.email}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-500" />
                </a>

                {/* Operating Hours & Address Detail */}
                <div className="pt-3 border-t border-white/5 space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{BUSINESS_CONFIG.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{BUSINESS_CONFIG.address}</span>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-2 flex items-center gap-3">
                  <span className="text-[11px] font-mono text-neutral-400">Social:</span>
                  <a
                    href={`https://instagram.com/${BUSINESS_CONFIG.socials.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>{BUSINESS_CONFIG.socials.instagram}</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    <span>{BUSINESS_CONFIG.socials.facebook}</span>
                  </a>
                </div>
              </div>

              {/* Styled Map Card with Directions Button & Fallback */}
              <NzMapCard accentColor={accentColor} />

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER (Not counted as a section) */}
      <Footer accentColor={accentColor} />
    </div>
  );
}
