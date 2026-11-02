/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ATK DETAILING - CENTRAL CONFIGURATION & CONTENT SPECIFICATION
 * =========================================================================
 * How to customize:
 * 1. Business Info: Update phone, email, address, operating hours, and social handles below.
 * 2. Accent Color: Choose 'red' (#E10600) or 'yellow' (#FFC400) or specify a hex code.
 * 3. Services: Add, remove, or modify detailing packages in `SERVICES_CONFIG`.
 * 4. Before & After Photos: Follow the ASSETS TO UPLOAD instructions below.
 * =========================================================================
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  phoneDisplay: string;
  phoneTel: string;
  phoneHref: string;
  smsHref: string;
  email: string;
  address: string;
  hours: string;
  googleRating: {
    score: string;
    reviewCount: number;
    display: string;
    url: string;
  };
  socials: {
    instagram: string;
    facebook: string;
  };
  yearsInBusinessText: string;
  accent: {
    primary: string; // Electric Red (#E10600) or Racing Yellow (#FFC400)
    hover: string;
    textOnAccent: string;
  };
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl?: string; // Optional: set to Google Maps embed URL once address is verified
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "ATK Detailing",
  tagline: "Ceramic Coatings. Detailing Packages.",
  phoneDisplay: "021 139 0221",
  phoneTel: "+64211390221",
  phoneHref: "tel:+64211390221",
  smsHref: "sms:+64211390221",
  email: "info@yourdomain.com", // [EDITABLE PLACEHOLDER]
  address: "[Street address], [City], NZ", // [EDITABLE PLACEHOLDER]
  hours: "Mon–Sat: 8:00 AM – 5:00 PM (By Appointment)", // [EDITABLE PLACEHOLDER]
  googleRating: {
    score: "5.0",
    reviewCount: 36,
    display: "5.0 ★ (36 Google Reviews)",
    url: "https://www.google.com/maps/search/?api=1&query=ATK+Detailing+New+Zealand",
  },
  socials: {
    instagram: "@yourinstagram", // [EDITABLE PLACEHOLDER]
    facebook: "ATK Detailing NZ", // [EDITABLE PLACEHOLDER]
  },
  yearsInBusinessText: "Years in business: [edit]", // [EDITABLE PLACEHOLDER]
  accent: {
    primary: "#E10600", // Electric Red (Motorsport accent)
    hover: "#C00400",
    textOnAccent: "#FFFFFF",
  },
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=ATK+Detailing+New+Zealand",
  // If left empty or undefined, the sleek stylized New Zealand SVG map card is rendered
  googleMapsEmbedUrl: "",
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  details: string[];
  isFeatured?: boolean;
  category: "protection" | "paint" | "interior" | "exterior" | "restoration";
  badgeText?: string;
}

export const SERVICES_CONFIG: ServiceItem[] = [
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    shortDesc: "Multi-year hydrophobic nanotechnology shield delivering unmatched gloss, scratch resistance, and chemical protection.",
    details: [
      "9H diamond hardness layer",
      "Extreme water & dirt beading",
      "UV & oxidation defence",
      "Multi-year durability warranty"
    ],
    isFeatured: true,
    category: "protection",
    badgeText: "Featured Protection",
  },
  {
    id: "paint-correction",
    title: "Paint Correction & Polish",
    shortDesc: "Multi-stage machine compounding and finishing to eliminate swirl marks, scratches, etching, and paint haze.",
    details: [
      "Removal of up to 90%+ clear coat defects",
      "Restores true depth and metallic clarity",
      "Dual-action machine polishing finish",
      "Prepares paint for ceramic application"
    ],
    isFeatured: true,
    category: "paint",
    badgeText: "Featured Service",
  },
  {
    id: "full-interior-detail",
    title: "Full Interior Detail",
    shortDesc: "Complete deep cabin rejuvenation with steam sanitation, leather conditioning, and stain extraction.",
    details: [
      "Deep extraction on carpets & upholstery",
      "Leather cleaning & UV conditioner",
      "Dashboard, vents & crevices sanitized",
      "Crystal-clear streak-free glass inside"
    ],
    isFeatured: false,
    category: "interior",
  },
  {
    id: "exterior-wash-hand-dry",
    title: "Exterior Wash & Hand Dry",
    shortDesc: "Safe multi-bucket contact wash, decontamination snow foam, wheel deep-clean, and plush microfiber dry.",
    details: [
      "pH-neutral citrus pre-wash & snow foam",
      "Two-bucket grit guard safe technique",
      "Wheel faces, barrels & tires degreased",
      "Plush warm-air & microfiber dry"
    ],
    isFeatured: false,
    category: "exterior",
  },
  {
    id: "express-detail-package",
    title: "Express Detail Package",
    shortDesc: "Quick turnaround thorough spruce-up covering essential exterior wash and complete interior vacuum & wipe-down.",
    details: [
      "Exterior safe hand wash & spray sealant",
      "Interior thorough vacuum & surface wipe",
      "Windows cleaned inside and out",
      "Tire dressing satin finish"
    ],
    isFeatured: false,
    category: "exterior",
  },
  {
    id: "premium-detail-package",
    title: "Premium Detail Package",
    shortDesc: "Comprehensive bumper-to-bumper transformation combining paint decontamination, gloss enhancement, and interior overhaul.",
    details: [
      "Chemical iron & clay bar decontamination",
      "Single-stage gloss enhancement polish",
      "Full deep interior shampoo & steam",
      "6-month spray ceramic seal"
    ],
    isFeatured: false,
    category: "protection",
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    shortDesc: "Wet sanding, compounding, and UV ceramic sealant to eliminate yellow oxidation and restore nighttime beam clarity.",
    details: [
      "Removes yellow foggy oxidation",
      "Multi-stage wet sanding & machine buff",
      "Permanent UV protective clear seal",
      "Improves road safety and WoF passability"
    ],
    isFeatured: false,
    category: "restoration",
  },
  {
    id: "odour-stain-removal",
    title: "Odour & Stain Removal",
    shortDesc: "Targeted ozone shock treatment and enzyme antimicrobial cleaning to eradicate pet smells, smoke, and spilled liquids.",
    details: [
      "High-output ozone generator treatment",
      "Hot water stain extraction on seats/carpets",
      "Enzyme-based odor neutralizing agent",
      "Kills mildew, mould spores & bacteria"
    ],
    isFeatured: false,
    category: "interior",
  },
];

/**
 * =========================================================================
 * ASSETS TO UPLOAD (OPTIONAL PHOTO REPLACEMENTS)
 * =========================================================================
 * To replace the SVG before/after comparison placeholders with your own real photos:
 * 1. Place your images in your public or assets directory (e.g. /images/paint-before.webp)
 * 2. Recommended size: 800x600px or 1200x800px (WebP or JPG format)
 * 3. Set `beforeImagePath` and `afterImagePath` below to your relative file path string.
 * When left as `null`, high-craft styled SVG/CSS visual comparisons are shown with
 * interactive slider controls!
 * =========================================================================
 */
export interface BeforeAfterTile {
  id: string;
  title: string;
  subtitle: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImagePath: string | null;
  afterImagePath: string | null;
  accentNote: string;
}

export const BEFORE_AFTER_TILES: BeforeAfterTile[] = [
  {
    id: "paint-swirls",
    title: "Paint Correction & Swirl Removal",
    subtitle: "Heavy micro-marring, spider-webbing and clear coat oxidation restored to mirror reflection.",
    beforeLabel: "Before: Swirled & Oxidized",
    afterLabel: "After: 95% Flawless Mirror Gloss",
    beforeImagePath: null, // Swap with: './images/paint-swirls-before.webp'
    afterImagePath: null,  // Swap with: './images/paint-swirls-after.webp'
    accentNote: "2-Stage Machine Correction",
  },
  {
    id: "ceramic-reflection",
    title: "Ceramic Coating Hydrophobic Gloss",
    subtitle: "Dull, unprotected clear coat upgraded to deep candy-gloss with ultra-tight water beading.",
    beforeLabel: "Before: Flat Unprotected Clear",
    afterLabel: "After: 9H Hydrophobic Shield",
    beforeImagePath: null, // Swap with: './images/ceramic-before.webp'
    afterImagePath: null,  // Swap with: './images/ceramic-after.webp'
    accentNote: "Multi-Year Nanotech Coating",
  },
  {
    id: "interior-leather",
    title: "Cabin Deep Extraction & Leather Restored",
    subtitle: "Grime-baked leather, stained carpets and dull plastics restored to matte factory freshness.",
    beforeLabel: "Before: Stained & Grime-Baked",
    afterLabel: "After: Matte Factory Finish",
    beforeImagePath: null, // Swap with: './images/interior-before.webp'
    afterImagePath: null,  // Swap with: './images/interior-after.webp'
    accentNote: "Steam Clean & Leather Seal",
  },
];

export interface WhyChooseUsBenefit {
  title: string;
  description: string;
}

export const WHY_CHOOSE_US_BENEFITS: WhyChooseUsBenefit[] = [
  {
    title: "Ceramic Coating Specialists",
    description: "Certified application of premier nano-ceramic formulas engineered specifically for harsh New Zealand UV rays and road conditions.",
  },
  {
    title: "Attention to Detail",
    description: "Meticulous work on every emblem, wheel barrel, door jamb, and trim crevice. We detail what others overlook.",
  },
  {
    title: "Quality Products",
    description: "We use only professional-grade pH-neutral shampoos, fine dual-action polishes, and industrial quartz ceramic coatings.",
  },
  {
    title: "Clear Package Options",
    description: "Straightforward service tiers tailored to your car's condition, with no hidden upsells or confusing jargon.",
  },
  {
    title: "Honest Quotes",
    description: "Transparent pricing assessed on your vehicle's make, paint condition, and personal expectations before work begins.",
  },
  {
    title: "Satisfaction Focused",
    description: "Every vehicle undergoes strict multi-angle inspection under specialised detailing lights prior to customer handover.",
  },
];

export interface ReviewItem {
  id: string;
  reviewer: string;
  vehicle: string;
  service: string;
  reviewText: string;
  dateText: string;
  rating: number;
}

export const REVIEWS_CONFIG: ReviewItem[] = [
  {
    id: "review-1",
    reviewer: "[Customer Name – Edit in config]",
    vehicle: "Audi RS3 Quattro",
    service: "Full Paint Correction + Ceramic Coating",
    reviewText: "Brought my RS3 in after years of automatic car wash scratches. The transformation was unreal—paint looks deeper than when it came off the showroom floor, and rainwater literally glides right off. Meticulous workmanship.",
    dateText: "Recent Google Review",
    rating: 5,
  },
  {
    id: "review-2",
    reviewer: "[Customer Name – Edit in config]",
    vehicle: "Ford Ranger Wildtrak",
    service: "Premium Detail + Interior Shampoo",
    reviewText: "Work ute was covered in site dust, dog hair, and muddy carpets. Collected it looking brand new inside and out with that fresh matte leather feel. Professional communication, punctual, and genuine pride in their craft.",
    dateText: "Recent Google Review",
    rating: 5,
  },
  {
    id: "review-3",
    reviewer: "[Customer Name – Edit in config]",
    vehicle: "Porsche 911 Carrera",
    service: "Ceramic Coating & Wheel Protection",
    reviewText: "Superb attention to detail on delicate paintwork. The gloss levels under the sunlight are unbelievable. If you care about keeping your car in pristine condition in NZ, ATK Detailing is top tier.",
    dateText: "Recent Google Review",
    rating: 5,
  },
];
