/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * BOOKING & ENQUIRY FORM COMPONENT
 * - Client-side validation (Name, Phone, Email, Vehicle)
 * - Service/Package dropdown pre-selection
 * - Responsive styling with high-contrast inputs
 * - Pristine submission success state with summary and instant next-steps
 */

import React, { useState } from 'react';
import { SERVICES_CONFIG, BUSINESS_CONFIG } from '../config';
import { Send, CheckCircle2, PhoneCall, Calendar, Car, AlertCircle, RefreshCw } from 'lucide-react';

interface BookingFormProps {
  selectedServiceId?: string;
  accentColor?: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  vehicle: string;
  preferredDate: string;
  message: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedServiceId = 'interior-detailing',
  accentColor = '#E10600',
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    serviceId: selectedServiceId,
    vehicle: '',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if selectedServiceId changes from outside
  React.useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for quotes';
    } else if (!/^[\d\s+()-]{7,18}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (e.g. 022 538 5350)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.vehicle.trim()) {
      newErrors.vehicle = 'Please specify vehicle make, model, and year';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceId: SERVICES_CONFIG[0].id,
      vehicle: '',
      preferredDate: '',
      message: '',
    });
    setErrors({});
  };

  const chosenService = SERVICES_CONFIG.find((s) => s.id === formData.serviceId) || SERVICES_CONFIG[0];

  if (isSubmitted) {
    return (
      <div className="bg-[#141414] border border-white/20 rounded-2xl p-6 sm:p-8 text-center shadow-2xl flex flex-col items-center justify-center min-h-[460px]">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-5 shadow-lg animate-bounce"
          style={{ backgroundColor: accentColor }}
        >
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
          Quote Request Received
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Thank you, {formData.name.split(' ')[0]}!
        </h3>
        
        <p className="text-sm text-neutral-300 mt-3 max-w-md leading-relaxed">
          We have received your enquiry for <strong className="text-white">{chosenService.title}</strong> on your <strong className="text-white">{formData.vehicle}</strong>.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-black/60 border border-white/10 w-full max-w-md text-left text-xs space-y-1.5 font-mono text-neutral-300">
          <div className="flex justify-between">
            <span className="text-neutral-400">Phone:</span>
            <span className="text-white font-semibold">{formData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Email:</span>
            <span className="text-white">{formData.email}</span>
          </div>
          {formData.preferredDate && (
            <div className="flex justify-between">
              <span className="text-neutral-400">Target Date:</span>
              <span className="text-white">{formData.preferredDate}</span>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <a
            href={BUSINESS_CONFIG.phoneHref}
            className="w-full sm:w-1/2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white text-center flex items-center justify-center gap-2 hover:brightness-110 transition-all"
            style={{ backgroundColor: accentColor }}
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-1/2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/10 hover:bg-white/15 text-center flex items-center justify-center gap-2 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>New Request</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative"
    >
      <div className="mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          Direct Booking &amp; Free Quote
        </span>
        <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
          Request Your Detailing Quote
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Tell us about your vehicle and we will provide an accurate quote and availability within 24 hours.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="customer-name" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="customer-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Cameron Smith"
            className={`w-full px-4 py-2.5 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
              errors.name ? 'border-red-500' : 'border-white/15 focus:border-white/40'
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Contact Split: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="customer-phone" className="block text-xs font-medium text-neutral-300 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="customer-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="022 538 5350"
              className={`w-full px-4 py-2.5 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                errors.phone ? 'border-red-500' : 'border-white/15 focus:border-white/40'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="customer-email" className="block text-xs font-medium text-neutral-300 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="customer-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.co.nz"
              className={`w-full px-4 py-2.5 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                errors.email ? 'border-red-500' : 'border-white/15 focus:border-white/40'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Service Package Dropdown */}
        <div>
          <label htmlFor="service-select" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Service or Package of Interest <span className="text-red-500">*</span>
          </label>
          <select
            id="service-select"
            value={formData.serviceId}
            onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all focus:border-white/40 cursor-pointer"
          >
            {SERVICES_CONFIG.map((s) => (
              <option key={s.id} value={s.id} className="bg-neutral-900 text-white">
                {s.title} {s.isFeatured ? '★ (Featured)' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Vehicle Make/Model/Year */}
        <div>
          <label htmlFor="vehicle-info" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Vehicle Year, Make &amp; Model <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="vehicle-info"
              type="text"
              required
              value={formData.vehicle}
              onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
              placeholder="e.g. 2022 Toyota Hilux SR5 / 2021 BMW M3"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                errors.vehicle ? 'border-red-500' : 'border-white/15 focus:border-white/40'
              }`}
            />
            <Car className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5 pointer-events-none" />
          </div>
          {errors.vehicle && (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.vehicle}
            </p>
          )}
        </div>

        {/* Preferred Date */}
        <div>
          <label htmlFor="preferred-date" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Preferred Date / Timeframe <span className="text-neutral-500">(Optional)</span>
          </label>
          <div className="relative">
            <input
              id="preferred-date"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all focus:border-white/40"
            />
            <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="customer-notes" className="block text-xs font-medium text-neutral-300 mb-1.5">
            Paint Condition &amp; Specific Requests <span className="text-neutral-500">(Optional)</span>
          </label>
          <textarea
            id="customer-notes"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe paint condition (e.g. swirl marks, tree sap, scratches) or any interior stains..."
            className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all focus:border-white/40 resize-none"
          />
        </div>
      </div>

      {/* Submit CTA */}
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-neutral-400 font-mono order-2 sm:order-1">
          No obligation · Free honest quote
        </span>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all order-1 sm:order-2 shadow-lg disabled:opacity-50"
          style={{ backgroundColor: accentColor }}
        >
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Get Free Quote</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
