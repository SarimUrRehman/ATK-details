/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * DODDS MOBILE DETAILING - CENTRAL CONFIGURATION & CONTENT SPECIFICATION
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
  logoPath: string;
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
    primary: string; // Electric Red (#E10600) matching logo accent
    hover: string;
    textOnAccent: string;
  };
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl?: string; // Optional: set to Google Maps embed URL once address is verified
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Dodds Mobile Detailing",
  tagline: "Mobile Detailing. Interior | Exterior.",
  logoPath: "./assets/aistudio/image_f877f895.png",
  phoneDisplay: "022 538 5350",
  phoneTel: "+64225385350",
  phoneHref: "tel:+64225385350",
  smsHref: "sms:+64225385350",
  email: "info@yourdomain.com", // [EDITABLE PLACEHOLDER]
  address: "[Street address], [City], NZ (Mobile Service)", // [EDITABLE PLACEHOLDER]
  hours: "Mon–Sat: 8:00 AM – 5:00 PM (By Appointment)", // [EDITABLE PLACEHOLDER]
  googleRating: {
    score: "5.0",
    reviewCount: 8,
    display: "5.0 ★ (8 Google Reviews)",
    url: "https://www.google.com/maps/search/?api=1&query=Dodds+Mobile+Detailing+New+Zealand",
  },
  socials: {
    instagram: "@doddsmobiledetailing", // [EDITABLE PLACEHOLDER]
    facebook: "Dodds Mobile Detailing NZ", // [EDITABLE PLACEHOLDER]
  },
  yearsInBusinessText: "Years in business: [edit]", // [EDITABLE PLACEHOLDER]
  accent: {
    primary: "#E10600", // Electric Red matching the logo's red accent & red car tail
    hover: "#C00400",
    textOnAccent: "#FFFFFF",
  },
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Dodds+Mobile+Detailing+New+Zealand",
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
    id: "interior-detailing",
    title: "Interior Detailing",
    shortDesc: "Complete mobile cabin clean including deep steam sanitation, upholstery extraction, leather conditioning, and streak-free glass.",
    details: [
      "Deep extraction on carpets & upholstery",
      "Leather cleaning & UV conditioning",
      "Dashboard, console & vents sanitized",
      "Crystal-clear streak-free glass inside"
    ],
    isFeatured: true,
    category: "interior",
    badgeText: "Mobile Service",
  },
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    shortDesc: "Thorough mobile exterior wash including safe two-bucket hand wash, wheel and tire decontamination, and plush microfiber dry.",
    details: [
      "pH-neutral citrus pre-wash & snow foam",
      "Two-bucket grit guard safe technique",
      "Wheel faces, barrels & tires degreased",
      "Plush warm-air & microfiber dry"
    ],
    isFeatured: true,
    category: "exterior",
    badgeText: "Mobile Service",
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
    id: "interior-cabin",
    title: "Interior Cabin Deep Clean",
    subtitle: "Dust, spilled drink residue, and soiled carpets thoroughly steam cleaned and extracted.",
    beforeLabel: "Before: Soiled & Stained Cabin",
    afterLabel: "After: Fresh, Sanitized & Detailed",
    beforeImagePath: null, // Swap with: './images/interior-before.webp'
    afterImagePath: null,  // Swap with: './images/interior-after.webp'
    accentNote: "Mobile Interior Detail",
  },
  {
    id: "exterior-wash",
    title: "Exterior Hand Wash & Wheel Detail",
    subtitle: "Road film, brake dust, and exterior grime safely washed away with two-bucket hand wash technique.",
    beforeLabel: "Before: Road Grime & Brake Dust",
    afterLabel: "After: Clean, Glossy & Hand-Dried",
    beforeImagePath: null, // Swap with: './images/exterior-before.webp'
    afterImagePath: null,  // Swap with: './images/exterior-after.webp'
    accentNote: "Mobile Exterior Detail",
  },
  {
    id: "interior-leather",
    title: "Leather & Trim Rejuvenation",
    subtitle: "Grime-baked steering wheel, leather seats, and plastic trim cleaned to factory matte finish.",
    beforeLabel: "Before: Grimy & Worn Finish",
    afterLabel: "After: Matte Factory Finish",
    beforeImagePath: null, // Swap with: './images/leather-before.webp'
    afterImagePath: null,  // Swap with: './images/leather-after.webp'
    accentNote: "Mobile Interior Detail",
  },
];

export interface WhyChooseUsBenefit {
  title: string;
  description: string;
}

export const WHY_CHOOSE_US_BENEFITS: WhyChooseUsBenefit[] = [
  {
    title: "Trained by Mexted Motors",
    description: "Professional automotive detailing standard trained by Mexted Motors, bringing dealership-grade care directly to your location.",
  },
  {
    title: "Mobile Detailing Convenience",
    description: "We travel directly to your home or workplace with full detailing equipment for completely hassle-free car care.",
  },
  {
    title: "Attention to Detail",
    description: "Meticulous work on every emblem, wheel barrel, door jamb, and trim crevice. We detail what others overlook.",
  },
  {
    title: "Quality Products",
    description: "We use only professional-grade pH-neutral shampoos, safe microfiber towels, and gentle interior conditioners.",
  },
  {
    title: "Clear Package Options",
    description: "Straightforward Interior, Exterior, and Combined mobile detailing packages with no hidden fees or confusing jargon.",
  },
  {
    title: "Honest Quotes",
    description: "Transparent pricing assessed on your vehicle's make, condition, and requirements before work begins.",
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
    service: "Full Mobile Detail (Interior + Exterior)",
    reviewText: "Booked a mobile detail for my car right at home. The interior was spotless and the exterior looked showroom clean. Fantastic service, punctual, and very convenient.",
    dateText: "Recent Google Review",
    rating: 5,
  },
  {
    id: "review-2",
    reviewer: "[Customer Name – Edit in config]",
    vehicle: "Ford Ranger Wildtrak",
    service: "Full Interior Mobile Detail",
    reviewText: "Work ute was covered in site dust, dog hair, and muddy carpets. Arrived on time and had the cabin looking and smelling fresh again with that clean matte finish. Professional communication and genuine care.",
    dateText: "Recent Google Review",
    rating: 5,
  },
  {
    id: "review-3",
    reviewer: "[Customer Name – Edit in config]",
    vehicle: "Porsche 911 Carrera",
    service: "Exterior Mobile Detail",
    reviewText: "Superb mobile exterior wash and wheel clean right in my driveway. Great attention to detail and punctuality. Trained by Mexted Motors standard definitely shows. Highly recommended.",
    dateText: "Recent Google Review",
    rating: 5,
  },
];
