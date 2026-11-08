/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * SERVING NEW ZEALAND - STYLED VECTOR MAP CARD & EMBED
 * - Clean SVG vector map representing New Zealand (North & South Islands)
 * - Service coverage indicator & location pinpoint
 * - "Get Directions" button linking to Google Maps
 * - Graceful keyless Google Maps iframe support if enabled in config
 */

import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Globe } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

interface NzMapCardProps {
  accentColor?: string;
}

export const NzMapCard: React.FC<NzMapCardProps> = ({
  accentColor = '#E10600',
}) => {
  const [showEmbed, setShowEmbed] = useState<boolean>(false);
  const hasEmbed = Boolean(BUSINESS_CONFIG.googleMapsEmbedUrl && BUSINESS_CONFIG.googleMapsEmbedUrl.trim() !== '');

  return (
    <div className="relative w-full rounded-2xl bg-[#141414] border border-white/10 overflow-hidden shadow-xl">
      {/* Card Header */}
      <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
            style={{ backgroundColor: accentColor }}
          >
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">Location &amp; Service Area</div>
            <div className="text-base font-bold text-white tracking-tight">Serving New Zealand</div>
          </div>
        </div>

        {hasEmbed && (
          <button
            type="button"
            onClick={() => setShowEmbed(!showEmbed)}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {showEmbed ? 'Show Vector Map' : 'Show Satellite / Street'}
          </button>
        )}
      </div>

      {/* Map Content Viewport */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0D0E10] overflow-hidden flex items-center justify-center">
        {hasEmbed && showEmbed ? (
          <iframe
            title="Dodds Mobile Detailing Location Map"
            src={BUSINESS_CONFIG.googleMapsEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Background grid */}
            <div className="absolute inset-0 pattern-diagonal opacity-40" />

            {/* Stylized New Zealand SVG Vector */}
            <svg
              viewBox="0 0 400 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[300px] opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              aria-label="Map of New Zealand"
              role="img"
            >
              <defs>
                <linearGradient id="nzIslandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2E333D" />
                  <stop offset="100%" stopColor="#1A1D24" />
                </linearGradient>
                <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Water grid lines */}
              <circle cx="200" cy="180" r="140" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="200" cy="180" r="90" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 6" />

              {/* NORTH ISLAND (Te Ika-a-Māui) stylized contour */}
              <path
                d="M 230 45 
                   C 240 50, 252 65, 255 78 
                   C 258 92, 248 102, 258 115 
                   C 268 128, 285 130, 280 148 
                   C 275 165, 260 170, 250 185 
                   C 240 195, 230 198, 222 195 
                   C 215 190, 218 175, 210 168 
                   C 202 160, 190 162, 195 145 
                   C 200 130, 215 125, 218 110 
                   C 220 95, 212 80, 222 60 
                   Z"
                fill="url(#nzIslandGrad)"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.2"
              />

              {/* SOUTH ISLAND (Te Wai Pounamu) stylized contour */}
              <path
                d="M 198 195 
                   C 210 200, 215 210, 205 220 
                   C 195 230, 185 240, 175 255 
                   C 165 270, 150 288, 140 305 
                   C 130 320, 115 325, 110 315 
                   C 105 305, 112 288, 120 270 
                   C 130 248, 145 230, 160 215 
                   C 175 200, 188 190, 198 195 
                   Z"
                fill="url(#nzIslandGrad)"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.2"
              />

              {/* STEWART ISLAND (Rakiura) */}
              <circle cx="118" cy="335" r="7" fill="url(#nzIslandGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

              {/* Cook Strait route indicator */}
              <path d="M 215 185 Q 205 192 198 198" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />

              {/* Service Pin with Pulse Animation */}
              <g transform="translate(235, 120)">
                <circle cx="0" cy="0" r="22" fill="url(#pinGlow)" className="animate-ping" style={{ animationDuration: '3s' }} />
                <circle cx="0" cy="0" r="14" fill={accentColor} fillOpacity="0.3" />
                <circle cx="0" cy="0" r="6" fill={accentColor} stroke="#FFFFFF" strokeWidth="2" />
              </g>

              {/* Floating NZ Badge */}
              <rect x="25" y="25" width="105" height="28" rx="6" fill="#141416" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x="35" y="43" fill="#FFFFFF" fontFamily="'Rajdhani', sans-serif" fontWeight="700" fontSize="12" letterSpacing="1.5">
                NEW ZEALAND
              </text>
            </svg>

            {/* Overlay pill badge: Mobile Service */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-[11px] text-neutral-300">
              <Globe className="w-3.5 h-3.5 text-neutral-400" />
              <span>Mobile Detailing Across New Zealand</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer: Address Placeholder & Directions Button */}
      <div className="p-4 sm:p-5 bg-[#0F0F11] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-neutral-400 font-mono">Location / Service Area</div>
          <div className="text-sm font-semibold text-white mt-0.5">{BUSINESS_CONFIG.address}</div>
          <div className="text-xs text-neutral-400 mt-0.5">{BUSINESS_CONFIG.hours}</div>
        </div>

        <a
          href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 active:scale-95 shrink-0"
          style={{ backgroundColor: accentColor }}
        >
          <Navigation className="w-4 h-4" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>
    </div>
  );
};
