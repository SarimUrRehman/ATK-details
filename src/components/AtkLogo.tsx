/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * BRAND LOGO COMPONENT - DODDS MOBILE DETAILING
 * - High-definition, crystal-clear vector rendering (100% razor sharp at any zoom/retina display)
 * - Hardware-accelerated zoomed crop of the uploaded image file (crops away 75% dead black margins)
 * - Zero blur, maximum clarity, instant recognition
 */

import React from 'react';
import { BUSINESS_CONFIG } from '../config';

interface BrandLogoProps {
  theme?: 'dark' | 'light';
  variant?: 'full' | 'compact' | 'monogram';
  mode?: 'clear-vector' | 'zoomed-image';
  className?: string;
  accentColor?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = 'dark',
  variant = 'compact',
  mode = 'clear-vector',
  className = '',
  accentColor = '#E10600',
}) => {
  const isDark = theme === 'dark';

  // Sizing by variant
  const sizeClasses = {
    monogram: 'h-10 w-10 sm:h-12 sm:w-12',
    compact: 'h-12 sm:h-14 w-auto min-w-[160px] max-w-[240px]',
    full: 'h-20 sm:h-24 w-auto min-w-[220px] max-w-[320px]',
  }[variant];

  // If zoomed-image mode is requested, use SVG viewport cropping to zoom in on the exact PNG
  // Original PNG has content only between X=18..130 and Y=52..95
  if (mode === 'zoomed-image') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <svg
          viewBox="18 52 114 44"
          preserveAspectRatio="xMidYMid meet"
          className={`${sizeClasses} object-contain transition-transform duration-200 hover:scale-105`}
          role="img"
          aria-label="Dodds Mobile Detailing Logo"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        >
          <image
            href={BUSINESS_CONFIG.logoPath}
            x="0"
            y="0"
            width="150"
            height="150"
            preserveAspectRatio="none"
          />
        </svg>
      </div>
    );
  }

  // Clear Vector Mode (Default): Infinitely sharp, crystal clear, zero pixelation or blur
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 380 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} object-contain transition-transform duration-200 hover:scale-105 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]`}
        role="img"
        aria-label="Dodds Mobile Detailing Clear Logo"
      >
        {/* ================= 1. SUPERCAR SILHOUETTE ================= */}
        <g id="supercarSilhouette">
          {/* Red Rear Taillight / Aero Diffuser Element */}
          <path d="M 46 41 L 35 44 L 37 49 L 49 44 Z" fill={accentColor} />
          <circle cx="36" cy="46" r="2.5" fill={accentColor} opacity="0.95" />

          {/* Sleek Aerodynamic Roofline & Windshield (Continuous Pure White Arc) */}
          <path
            d="M 44 41 
               C 70 36, 110 30, 160 26 
               C 205 23, 240 29, 260 43 
               C 255 43, 244 38, 212 34 
               C 170 30, 128 35, 58 43 
               Z"
            fill={isDark ? '#FFFFFF' : '#0A0A0A'}
          />

          {/* Rear Quarter, Beltline & Mid-Engine Side Air Scoop */}
          <path
            d="M 106 44 
               C 134 46, 180 47, 228 51 
               L 232 54 
               C 182 50, 136 49, 120 64 
               L 115 62 
               C 123 51, 128 47, 106 44 Z"
            fill={isDark ? '#FFFFFF' : '#0A0A0A'}
            opacity="0.95"
          />

          {/* Cockpit Window Sill */}
          <path
            d="M 148 32 
               C 180 28, 208 33, 224 41 
               L 162 39 
               Z"
            fill={isDark ? '#FFFFFF' : '#0A0A0A'}
            opacity="0.8"
          />

          {/* Front Hood & Aggressive Nose Wedge */}
          <path
            d="M 255 42 
               C 278 46, 308 53, 332 60 
               L 330 62 
               C 302 56, 274 49, 250 44 
               Z"
            fill={isDark ? '#FFFFFF' : '#0A0A0A'}
          />

          {/* Front Nose Aero Accent Tick (Red) */}
          <path d="M 332 60 L 336 61 L 330 63 L 327 61 Z" fill={accentColor} />

          {/* Rear Wheel Arch Contour */}
          <path
            d="M 54 58 
               C 62 47, 88 46, 98 59 
               C 91 51, 68 51, 54 58 Z"
            fill={isDark ? '#FFFFFF' : '#0A0A0A'}
            opacity="0.9"
          />

          {/* Front Wheel Arch Contour */}
          <path
            d="M 246 59 
               C 254 49, 282 50, 294 62 
               C 285 54, 260 54, 246 59 Z"
            fill={isDark ? '#FFFFFF' : '#0A0A0A'}
            opacity="0.9"
          />
        </g>

        {/* ================= 2. "D O D D S" TYPOGRAPHY ================= */}
        {/* Bold Modern Wide-Spaced Lettering */}
        <g transform="translate(190, 92)" textAnchor="middle">
          <text
            x="0"
            y="0"
            fill={isDark ? '#FFFFFF' : '#0A0A0A'}
            fontFamily="'Oswald', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="700"
            fontSize="32"
            letterSpacing="8"
            style={{ textTransform: 'uppercase' }}
          >
            DODDS
          </text>
        </g>

        {/* ================= 3. "— MOBILE DETAILING —" ================= */}
        <g transform="translate(190, 118)">
          {/* Left Wing Flanking Rule */}
          <line
            x1="-150"
            y1="-4"
            x2="-72"
            y2="-4"
            stroke={accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Subtitle Text */}
          <text
            x="0"
            y="0"
            fill={accentColor}
            fontFamily="'Rajdhani', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fontWeight="700"
            fontSize="12.5"
            letterSpacing="5"
            textAnchor="middle"
          >
            MOBILE DETAILING
          </text>

          {/* Right Wing Flanking Rule */}
          <line
            x1="72"
            y1="-4"
            x2="150"
            y2="-4"
            stroke={accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

// Backwards-compatible alias
export const AtkLogo = BrandLogo;
