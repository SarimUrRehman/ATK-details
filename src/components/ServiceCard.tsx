/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * SERVICE CARD COMPONENT
 * - Clean domain-authentic SVG icon representations
 * - "Featured" badge support for Marquee services
 * - Responsive hover depth and clean border treatment
 * - "Enquire" action linking directly to the booking form with pre-selected service
 */

import React from 'react';
import { ServiceItem } from '../config';
import { 
  ShieldCheck, 
  Sparkles, 
  Car, 
  Droplets, 
  Zap, 
  Crown, 
  SunMedium, 
  Wind, 
  ArrowRight,
  Check
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  accentColor?: string;
  onEnquire: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  accentColor = '#E10600',
  onEnquire,
}) => {
  // Service category SVG icons
  const renderIcon = () => {
    switch (service.id) {
      case 'interior-detailing':
      case 'full-interior-detail':
        return <Car className="w-6 h-6 text-white" />;
      case 'exterior-detailing':
      case 'exterior-wash-hand-dry':
        return <Droplets className="w-6 h-6 text-white" />;
      case 'ceramic-coating':
        return <ShieldCheck className="w-6 h-6 text-white" />;
      case 'paint-correction':
        return <Sparkles className="w-6 h-6 text-white" />;
      case 'express-detail-package':
        return <Zap className="w-6 h-6 text-white" />;
      case 'premium-detail-package':
        return <Crown className="w-6 h-6 text-white" />;
      case 'headlight-restoration':
        return <SunMedium className="w-6 h-6 text-white" />;
      case 'odour-stain-removal':
        return <Wind className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div 
      className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
        service.isFeatured
          ? 'bg-[#18181A] border-2 border-white/20 shadow-xl hover:border-white/40 ring-1 ring-white/10'
          : 'bg-[#121214] border border-white/10 hover:border-white/25 hover:bg-[#161619]'
      }`}
    >
      <div>
        {/* Header row: Icon & Optional Featured Badge */}
        <div className="flex items-center justify-between mb-5">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
            style={{ 
              backgroundColor: service.isFeatured ? accentColor : '#222226',
              boxShadow: service.isFeatured ? `0 4px 14px ${accentColor}40` : 'none'
            }}
          >
            {renderIcon()}
          </div>

          {service.isFeatured && (
            <span 
              className="px-2.5 py-1 rounded text-[11px] font-bold font-mono tracking-wider uppercase border text-white"
              style={{ 
                backgroundColor: `${accentColor}25`,
                borderColor: `${accentColor}60`,
                color: '#FFFFFF'
              }}
            >
              {service.badgeText || 'Featured'}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-100">
          {service.title}
        </h3>

        {/* One-line description */}
        <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Detailed feature bullet points */}
        <ul className="mt-5 space-y-2 border-t border-white/5 pt-4 text-xs text-neutral-300">
          {service.details.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 shrink-0 text-neutral-400 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Enquire Action & Quote Note */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-neutral-400 font-mono">
          Custom vehicle quote
        </span>

        <button
          type="button"
          onClick={() => onEnquire(service.id)}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-white transition-all group-hover:translate-x-1"
          style={{ color: service.isFeatured ? accentColor : '#FFFFFF' }}
        >
          <span>Enquire</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
