/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * BEFORE / AFTER COMPARISON CARD COMPONENT
 * - Supports real image files (when uploaded & configured in config.ts)
 * - Defaults to bespoke styled SVG/CSS comparison graphics (no external dependencies)
 * - Interactive Split Slider or Toggle View
 * - Clearly labelled "Before photo coming soon" / "After photo coming soon" fallback states
 * - Fully accessible with explicit aspect ratios, alt attributes, and keyboard controls
 */

import React, { useState } from 'react';
import { BeforeAfterTile } from '../config';
import { Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

interface BeforeAfterCardProps {
  tile: BeforeAfterTile;
  accentColor?: string;
}

export const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({
  tile,
  accentColor = '#E10600',
}) => {
  // Slider position (percentage 0 to 100)
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'split' | 'before' | 'after'>('split');

  const hasCustomImages = Boolean(tile.beforeImagePath && tile.afterImagePath);

  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-white/25 flex flex-col h-full">
      {/* Header Info */}
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span 
            className="text-[11px] font-bold font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10"
            style={{ color: accentColor }}
          >
            {tile.accentNote}
          </span>
          <span className="text-xs text-neutral-400 font-mono">Real Results</span>
        </div>
        <h3 className="text-lg font-bold text-white tracking-tight">{tile.title}</h3>
        <p className="text-xs text-neutral-400 mt-1 line-clamp-2">{tile.subtitle}</p>
      </div>

      {/* Interactive Visual Comparison Stage */}
      <div className="relative aspect-[4/3] w-full bg-neutral-950 overflow-hidden select-none group">
        {hasCustomImages ? (
          // REAL CUSTOM PHOTOS (when owner uploads files)
          <div className="relative w-full h-full">
            {/* After Image (Background) */}
            <img
              src={tile.afterImagePath!}
              alt={`${tile.title} - After Detail`}
              width={600}
              height={450}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Graceful fallback to SVG placeholder on load error
                (e.target as HTMLElement).style.display = 'none';
              }}
            />

            {/* Before Image (Clipped overlay controlled by sliderPos) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: activeTab === 'before' ? '100%' : activeTab === 'after' ? '0%' : `${sliderPos}%` }}
            >
              <img
                src={tile.beforeImagePath!}
                alt={`${tile.title} - Before Detail`}
                width={600}
                height={450}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        ) : (
          // HIGH-CRAFT STYLED SVG / CSS PLACEHOLDER COMPARISON
          <div className="relative w-full h-full flex">
            {/* AFTER SIDE (Full Right Background) */}
            <div className="absolute inset-0 bg-[#0F141C] flex flex-col justify-between p-4">
              {/* After visual representation */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Visual gloss lines */}
                <div className="absolute inset-0 opacity-40 pattern-diagonal" />
                <div className="relative z-10 flex flex-col items-center text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 border border-white/20">
                    <Sparkles className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide">
                    {tile.afterLabel}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 inline" /> Restored Showroom Gloss
                  </span>
                  <span className="text-[10px] text-neutral-400 mt-2 italic px-2 py-1 rounded bg-black/50 border border-white/5">
                    After photo coming soon (upload via config)
                  </span>
                </div>
              </div>

              {/* Tag bottom right */}
              <div className="relative z-10 self-end">
                <span className="text-[10px] font-bold font-mono tracking-wider uppercase px-2 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  AFTER
                </span>
              </div>
            </div>

            {/* BEFORE SIDE (Clipped Left Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden bg-[#1E1A16] flex flex-col justify-between border-r-2 border-white/70 transition-all duration-75"
              style={{
                width: activeTab === 'before' ? '100%' : activeTab === 'after' ? '0%' : `${sliderPos}%`,
              }}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 min-w-[280px]">
                {/* Swirl marks SVG texture */}
                <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <pattern id={`swirl-${tile.id}`} width="80" height="80" patternUnits="userSpaceOnUse">
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#D97706" strokeWidth="0.8" strokeDasharray="3 3" />
                    <circle cx="40" cy="40" r="20" fill="none" stroke="#F59E0B" strokeWidth="0.7" strokeDasharray="2 4" />
                    <circle cx="40" cy="40" r="10" fill="none" stroke="#B45309" strokeWidth="0.6" />
                    <path d="M 10 70 Q 40 20 70 60" fill="none" stroke="#78350F" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#swirl-${tile.id})`} />
                </svg>

                <div className="relative z-10 flex flex-col items-center text-center px-4">
                  <span className="text-sm font-bold text-neutral-200 tracking-wide">
                    {tile.beforeLabel}
                  </span>
                  <span className="text-[11px] text-amber-400 font-mono mt-1">
                    Swirls, Scratches &amp; Oxidation
                  </span>
                  <span className="text-[10px] text-neutral-400 mt-2 italic px-2 py-1 rounded bg-black/60 border border-white/5">
                    Before photo coming soon
                  </span>
                </div>
              </div>

              {/* Tag bottom left */}
              <div className="relative z-10 self-start p-4">
                <span className="text-[10px] font-bold font-mono tracking-wider uppercase px-2 py-1 rounded bg-amber-950/80 text-amber-400 border border-amber-500/30">
                  BEFORE
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Divider line & handle for split view */}
        {activeTab === 'split' && (
          <div
            className="absolute top-0 bottom-0 pointer-events-none z-20 flex items-center justify-center"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-0.5 h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <div className="absolute w-7 h-7 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center text-white shadow-lg">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </div>
          </div>
        )}

        {/* Interactive range slider overlay */}
        {activeTab === 'split' && (
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label={`Slide to compare before and after for ${tile.title}`}
          />
        )}
      </div>

      {/* Footer controls: quick view toggles */}
      <div className="p-3 bg-[#0E0E0E] border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
        <span className="font-mono text-[11px]">Slide bar or toggle:</span>
        <div className="inline-flex rounded-lg bg-black/60 p-0.5 border border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('before')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === 'before' ? 'bg-white/20 text-white font-bold' : 'hover:text-white'
            }`}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('split')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === 'split' ? 'bg-white text-black font-bold shadow-sm' : 'hover:text-white'
            }`}
          >
            Split
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('after')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === 'after' ? 'bg-white/20 text-white font-bold' : 'hover:text-white'
            }`}
          >
            After
          </button>
        </div>
      </div>
    </div>
  );
};
