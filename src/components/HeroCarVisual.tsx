/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * HERO SPORTS-CAR SILHOUETTE & CERAMIC GLOSS VISUAL
 * - Pure Inline SVG + CSS (100% self-contained, zero external photo dependencies)
 * - Animated specular light sweep simulating ultra-slick ceramic coating reflection
 * - Dynamic shine glints at high-impact body contours
 * - Hydrophobic bead angle accent graphic
 */

import React from 'react';

interface HeroCarVisualProps {
  accentColor?: string;
  className?: string;
}

export const HeroCarVisual: React.FC<HeroCarVisualProps> = ({
  accentColor = '#E10600',
  className = '',
}) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#141414] via-[#0E0E0E] to-[#080808] border border-white/10 shadow-2xl ${className}`}>
      {/* Background speed grid lines */}
      <div className="absolute inset-0 pattern-diagonal opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

      {/* Main SVG Vector Canvas */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] flex items-center justify-center p-4 sm:p-8">
        <svg
          viewBox="0 0 900 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          aria-label="Dodds Mobile Detailing Sports Car Graphic"
          role="img"
        >
          <defs>
            {/* Ceramic Metallic Body Gradients */}
            <linearGradient id="bodyBaseGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1C1C1E" />
              <stop offset="35%" stopColor="#2C2C2E" />
              <stop offset="60%" stopColor="#18181A" />
              <stop offset="100%" stopColor="#0B0B0C" />
            </linearGradient>

            <linearGradient id="ceramicSheenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#A0A0A5" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#141416" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0.9" />
            </linearGradient>

            {/* Glass gradient */}
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#1E293B" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.98" />
            </linearGradient>

            {/* Floor reflection gradient */}
            <linearGradient id="floorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor={accentColor} stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="75%" stopColor={accentColor} stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Light sweep beam */}
            <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.0" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Wheel rim texture */}
            <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
              <stop offset="40%" stopColor="#3A3A3C" />
              <stop offset="70%" stopColor="#1C1C1E" />
              <stop offset="100%" stopColor="#080808" />
            </radialGradient>
          </defs>

          {/* Studio floor reflection plane */}
          <ellipse cx="450" cy="358" rx="420" ry="16" fill="url(#floorGlow)" opacity="0.6" />
          <path d="M 60 360 L 840 360" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="12 8" />

          {/* Underbody Shadow */}
          <ellipse cx="455" cy="348" rx="360" ry="18" fill="#000000" opacity="0.9" />

          {/* ================= CAR BODY ================= */}
          <g id="sportsCarMain">
            {/* Lower chassis / side skirts */}
            <path
              d="M 110 338 
                 L 135 344 
                 C 150 344, 210 345, 235 345 
                 C 250 345, 255 330, 260 310 
                 C 268 275, 305 250, 345 250 
                 C 385 250, 420 275, 430 310 
                 C 435 330, 440 345, 455 345 
                 L 645 345 
                 C 655 330, 660 310, 668 275 
                 C 676 250, 712 250, 750 250 
                 C 788 250, 822 275, 830 310 
                 C 835 330, 840 344, 855 344 
                 L 870 338 
                 L 865 320 
                 C 860 312, 850 305, 835 295 
                 C 810 275, 785 260, 755 245 
                 C 725 230, 680 205, 630 185 
                 C 580 165, 520 145, 450 145 
                 C 380 145, 320 165, 260 195 
                 C 210 220, 160 255, 125 285 
                 C 110 298, 100 315, 110 338 Z"
              fill="url(#bodyBaseGrad)"
            />

            {/* Aerodynamic Primary Body Shell */}
            <path
              d="M 95 335 
                 C 90 325, 95 315, 115 305 
                 C 145 290, 185 272, 230 255 
                 C 260 245, 305 210, 360 175 
                 C 405 145, 455 130, 520 130 
                 C 590 130, 665 145, 725 180 
                 C 775 210, 815 245, 840 270 
                 C 860 290, 878 308, 878 322 
                 L 868 335 
                 C 850 336, 845 325, 840 305 
                 C 830 268, 795 242, 755 242 
                 C 715 242, 680 268, 670 305 
                 C 665 325, 655 336, 640 336 
                 L 445 336 
                 C 435 322, 430 305, 420 268 
                 C 410 242, 375 242, 335 242 
                 C 295 242, 260 268, 250 305 
                 C 245 325, 238 336, 220 336 
                 L 115 336 
                 Z"
              fill="url(#bodyBaseGrad)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.2"
            />

            {/* High-Gloss Ceramic Sheen Overlay */}
            <path
              d="M 115 305 
                 C 155 285, 205 260, 265 240 
                 C 325 220, 385 180, 445 155 
                 C 505 132, 575 132, 645 152 
                 C 705 170, 775 210, 825 255 
                 C 800 242, 750 232, 700 232 
                 C 640 232, 570 215, 510 200 
                 C 440 182, 370 185, 300 205 
                 C 230 225, 170 260, 115 305 Z"
              fill="url(#ceramicSheenGrad)"
            />

            {/* Greenhouse / Cabin Glass */}
            <path
              d="M 370 178 
                 C 415 152, 465 140, 525 140 
                 C 585 140, 645 152, 695 180 
                 L 660 228 
                 C 615 224, 565 222, 515 222 
                 C 460 222, 410 225, 362 230 
                 Z"
              fill="url(#glassGrad)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
            />

            {/* Window B-Pillar divider */}
            <line x1="535" y1="140" x2="525" y2="222" stroke="#0A0A0A" strokeWidth="4" />

            {/* Ceramic shoulder reflection crease (sharp highlight line) */}
            <path
              d="M 110 310 Q 230 250 360 245 T 640 245 Q 750 248 860 315"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              opacity="0.8"
            />
            <path
              d="M 120 312 Q 230 252 360 247 T 640 247 Q 750 250 850 317"
              fill="none"
              stroke={accentColor}
              strokeWidth="1"
              opacity="0.9"
            />

            {/* Rear aerodynamic ducktail spoiler */}
            <path
              d="M 830 262 L 865 250 L 872 258 L 845 272 Z"
              fill="#1C1C1E"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
            />

            {/* Aerodynamic front splitter */}
            <path
              d="M 85 338 L 125 338 L 120 344 L 75 344 Z"
              fill="#0A0A0A"
              stroke={accentColor}
              strokeWidth="1.5"
            />

            {/* ================= WHEELS & BRAKES ================= */}
            {/* Front Wheel (Left) */}
            <g transform="translate(185, 230)">
              {/* Tire */}
              <circle cx="70" cy="70" r="62" fill="#121214" stroke="#252528" strokeWidth="6" />
              {/* Outer Rim */}
              <circle cx="70" cy="70" r="48" fill="url(#rimGrad)" stroke="#66666B" strokeWidth="2.5" />
              {/* Brake Caliper (Electric Red) */}
              <path d="M 85 35 C 98 42, 108 55, 112 70" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
              {/* Alloy Spokes (Twin 5-spoke motorsport design) */}
              {[0, 72, 144, 216, 288].map((angle) => (
                <g key={angle} transform={`rotate(${angle} 70 70)`}>
                  <line x1="70" y1="70" x2="70" y2="28" stroke="#D1D1D6" strokeWidth="3" />
                  <line x1="68" y1="70" x2="65" y2="30" stroke="#8E8E93" strokeWidth="1.5" />
                </g>
              ))}
              {/* Center Hub */}
              <circle cx="70" cy="70" r="12" fill="#0A0A0A" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="70" cy="70" r="4" fill={accentColor} />
            </g>

            {/* Rear Wheel (Right) */}
            <g transform="translate(605, 230)">
              {/* Tire */}
              <circle cx="70" cy="70" r="62" fill="#121214" stroke="#252528" strokeWidth="6" />
              {/* Outer Rim */}
              <circle cx="70" cy="70" r="48" fill="url(#rimGrad)" stroke="#66666B" strokeWidth="2.5" />
              {/* Brake Caliper (Electric Red) */}
              <path d="M 85 35 C 98 42, 108 55, 112 70" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
              {/* Alloy Spokes */}
              {[0, 72, 144, 216, 288].map((angle) => (
                <g key={angle} transform={`rotate(${angle} 70 70)`}>
                  <line x1="70" y1="70" x2="70" y2="28" stroke="#D1D1D6" strokeWidth="3" />
                  <line x1="68" y1="70" x2="65" y2="30" stroke="#8E8E93" strokeWidth="1.5" />
                </g>
              ))}
              {/* Center Hub */}
              <circle cx="70" cy="70" r="12" fill="#0A0A0A" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="70" cy="70" r="4" fill={accentColor} />
            </g>

            {/* LED Headlight Beam Spark (Left) */}
            <path d="M 98 322 L 140 318 L 132 328 Z" fill="#E0F2FE" />
            <polygon points="98,322 75,320 75,326" fill="#38BDF8" opacity="0.8" />
            <circle cx="98" cy="322" r="3" fill="#FFFFFF" />

            {/* Tail Light Red Accent (Right) */}
            <path d="M 865 315 L 876 318 L 868 325 Z" fill={accentColor} />
            <line x1="845" y1="316" x2="876" y2="318" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* ================= SPECULAR LIGHT SWEEP ================= */}
          {/* Animated Sheen Sweep Across Ceramic Coat */}
          <g clipPath="url(#carSilhouetteClip)">
            <rect
              x="-200"
              y="100"
              width="260"
              height="260"
              fill="url(#sweepGrad)"
              className="animate-sweep"
            />
          </g>

          {/* Clip path defining car shape for light sweep containment */}
          <clipPath id="carSilhouetteClip">
            <path d="M 95 338 C 95 310, 160 260, 260 220 C 350 180, 430 130, 520 130 C 620 130, 710 160, 810 240 C 860 280, 878 310, 878 338 L 95 338 Z" />
          </clipPath>

          {/* ================= ANIMATED SHINE GLINTS ================= */}
          {/* Glint 1: Front Fender Apex */}
          <g transform="translate(142, 285)" className="animate-pulse">
            <path d="M 0 -8 L 2 -2 L 8 0 L 2 2 L 0 8 L -2 2 L -8 0 L -2 -2 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="1.5" fill={accentColor} />
          </g>

          {/* Glint 2: Roofline Ceramic Highlight */}
          <g transform="translate(508, 134)" className="animate-pulse" style={{ animationDelay: '1.2s' }}>
            <path d="M 0 -10 L 2.5 -2.5 L 10 0 L 2.5 2.5 L 0 10 L -2.5 2.5 L -10 0 L -2.5 -2.5 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2" fill="#E0F2FE" />
          </g>

          {/* Glint 3: Rear Quarter Shoulder */}
          <g transform="translate(798, 268)" className="animate-pulse" style={{ animationDelay: '2.4s' }}>
            <path d="M 0 -7 L 2 -2 L 7 0 L 2 2 L 0 7 L -2 2 L -7 0 L -2 -2 Z" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {/* Floating Service Indicator */}
      <div className="absolute bottom-3 left-4 sm:bottom-5 sm:left-6 flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-300">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
        <span className="font-semibold text-white tracking-wide">MOBILE DETAILING</span>
        <span className="text-neutral-500">|</span>
        <span className="text-neutral-400">Interior &amp; Exterior · Trained by Mexted Motors</span>
      </div>

      {/* Quality Callout */}
      <div className="hidden sm:flex absolute top-4 right-6 items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs text-neutral-300">
        <span className="text-neutral-400">Standard:</span>
        <span className="text-white font-bold tracking-wider font-mono">PRECISION MOBILE DETAIL</span>
      </div>
    </div>
  );
};
