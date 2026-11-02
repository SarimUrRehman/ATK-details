/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ATK Detailing Official Brand Logo Recreated in Clean Inline Vector SVG
 * Features:
 * - Bold, tall condensed stacked "ATK" lettering
 * - Solid brand bar housing "D E T A I L I N G" in crisp uppercase
 * - Aerodynamic GT sports-car silhouette with sweeping roofline and ground-effects
 * - Full accessibility attributes (aria-label, role="img")
 * - Dark & light theme variants
 */

import React from 'react';

interface AtkLogoProps {
  theme?: 'dark' | 'light';
  variant?: 'full' | 'compact' | 'monogram';
  className?: string;
  accentColor?: string;
}

export const AtkLogo: React.FC<AtkLogoProps> = ({
  theme = 'dark',
  variant = 'full',
  className = 'h-14 w-auto',
  accentColor = '#E10600',
}) => {
  const isDark = theme === 'dark';
  
  // Color tokens
  const letterFill = isDark ? '#FFFFFF' : '#0A0A0A';
  const barBg = isDark ? '#161616' : '#0A0A0A';
  const barBorder = isDark ? 'rgba(255, 255, 255, 0.18)' : '#0A0A0A';
  const barText = '#FFFFFF';
  const carFill = isDark ? '#FFFFFF' : '#0A0A0A';

  if (variant === 'monogram') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="ATK Detailing Monogram"
      >
        <rect width="100" height="100" rx="16" fill={isDark ? '#141414' : '#0A0A0A'} />
        <rect x="2" y="2" width="96" height="96" rx="14" stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="2" />
        <path d="M12 76H88V80H12z" fill={accentColor} />
        <text
          x="50"
          y="62"
          fill="#FFFFFF"
          fontFamily="'Oswald', -apple-system, sans-serif"
          fontWeight="700"
          fontSize="44"
          letterSpacing="-1"
          textAnchor="middle"
        >
          ATK
        </text>
      </svg>
    );
  }

  if (variant === 'compact') {
    // Horizontal header lockup for space efficiency while keeping identical brand mark
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <svg
          viewBox="0 0 140 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto shrink-0"
          role="img"
          aria-label="ATK Detailing Brand Mark"
        >
          <text
            x="4"
            y="36"
            fill={letterFill}
            fontFamily="'Oswald', -apple-system, sans-serif"
            fontWeight="700"
            fontSize="42"
            letterSpacing="-0.5"
          >
            ATK
          </text>
          {/* Detailing tag box */}
          <rect x="2" y="42" width="94" height="15" rx="2" fill={barBg} stroke={barBorder} strokeWidth="1" />
          <text
            x="49"
            y="53.5"
            fill={barText}
            fontFamily="'Rajdhani', -apple-system, sans-serif"
            fontWeight="700"
            fontSize="9.5"
            letterSpacing="3"
            textAnchor="middle"
          >
            DETAILING
          </text>
          {/* Subtle accent dash */}
          <rect x="99" y="42" width="38" height="2" fill={accentColor} />
          {/* Car silhouette contour */}
          <path
            d="M99 54c4-3 10-6 16-6 8 0 15 4 23 4h2l-2-2c-3-2-7-3-12-3-7 0-13 3-18 6l-9 1z"
            fill={carFill}
            opacity="0.85"
          />
        </svg>
      </div>
    );
  }

  // Full stacked badge as seen on the business identity:
  // 1. Stacked bold ATK letters
  // 2. Black bar with white "DETAILING"
  // 3. Sports-car silhouette at the bottom
  return (
    <svg
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ATK Detailing Logo"
    >
      {/* Background container glow if dark */}
      {isDark && (
        <defs>
          <linearGradient id="atkTextGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E2E2" />
          </linearGradient>
        </defs>
      )}

      {/* 1. Stacked Bold Tall "ATK" */}
      <g>
        <text
          x="120"
          y="70"
          fill={isDark ? "url(#atkTextGradDark)" : letterFill}
          fontFamily="'Oswald', -apple-system, sans-serif"
          fontWeight="700"
          fontSize="84"
          letterSpacing="-1.5"
          textAnchor="middle"
          style={{ textTransform: 'uppercase' }}
        >
          ATK
        </text>
      </g>

      {/* Accent corner pip */}
      <rect x="22" y="8" width="6" height="6" fill={accentColor} />
      <rect x="212" y="8" width="6" height="6" fill={accentColor} />

      {/* 2. Black Bar with white "DETAILING" */}
      <g transform="translate(18, 80)">
        <rect
          x="0"
          y="0"
          width="204"
          height="24"
          rx="3"
          fill={barBg}
          stroke={barBorder}
          strokeWidth="1.2"
        />
        {/* Subtle accent racing tick on left edge */}
        <rect x="0" y="0" width="4" height="24" rx="1" fill={accentColor} />
        
        <text
          x="104"
          y="16.5"
          fill={barText}
          fontFamily="'Rajdhani', -apple-system, sans-serif"
          fontWeight="700"
          fontSize="14.5"
          letterSpacing="4.5"
          textAnchor="middle"
        >
          DETAILING
        </text>
      </g>

      {/* 3. Aerodynamic Sports-Car Silhouette at the bottom */}
      <g transform="translate(20, 108)">
        {/* Road line / shadow */}
        <path
          d="M 2 24 L 198 24"
          stroke={isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}
          strokeWidth="1"
          strokeDasharray="4 2"
        />

        {/* Sports-car silhouette path */}
        <path
          d="M 6 22 
             C 12 21, 22 20, 32 19 
             C 42 16, 52 14, 66 11 
             C 76 9, 86 3, 102 3 
             C 118 3, 134 5, 146 10 
             C 156 14, 168 16, 178 18 
             C 186 19, 194 21, 196 22
             L 194 22
             C 188 22, 184 17, 176 17
             C 168 17, 164 22, 150 22
             L 76 22
             C 70 22, 66 17, 58 17
             C 50 17, 46 22, 34 22
             L 6 22 Z"
          fill={carFill}
          opacity="0.95"
        />

        {/* Cockpit / window contour */}
        <path
          d="M 74 11 
             C 84 6, 96 5, 106 5 
             C 118 5, 130 7, 140 10 
             L 132 11 
             C 124 9, 114 7, 104 7 
             C 94 7, 84 8, 76 11 Z"
          fill={isDark ? '#141414' : '#FFFFFF'}
          opacity="0.9"
        />

        {/* Wheels outline styling */}
        <circle cx="58" cy="20" r="4.5" fill={isDark ? '#2A2A2A' : '#E0E0E0'} stroke={carFill} strokeWidth="1.5" />
        <circle cx="176" cy="20" r="4.5" fill={isDark ? '#2A2A2A' : '#E0E0E0'} stroke={carFill} strokeWidth="1.5" />

        {/* Subtle accent headlight beam spark */}
        <circle cx="195" cy="20.5" r="1.5" fill={accentColor} />
      </g>
    </svg>
  );
};
