/**
 * =============================================================================
 * ÉLORA BOUTIQUE — CENTRAL BUSINESS CONFIGURATION
 * =============================================================================
 * This is the single source of truth for the boutique's branding, contact,
 * social links, address, and WhatsApp enquiry configuration.
 * 
 * Replace these placeholder values with the real boutique owner's details
 * when preparing to launch the live site.
 * =============================================================================
 */

export const BOUTIQUE_CONFIG = {
  // Brand identity
  brandName: "ÉLORA",
  brandSubtitle: "The Fashion Boutique",
  brandLegalNotice: "ÉLORA is a temporary demo brand name. Easily customizable for your boutique.",

  // Announcement Bar
  announcement: {
    text: "Discover your next favourite look ✨",
    visible: true,
  },

  // WhatsApp Integration Configuration
  // IMPORTANT: Set `phoneNumber` to the boutique owner's 10 or 12 digit number (e.g., "919876543210")
  // Keep it empty ("") or safe placeholder while presenting the sales demo.
  whatsapp: {
    // Leave blank or as placeholder until the real shop owner provides their WhatsApp Business number.
    // Example format for India when ready: "919876543210" (without + or spaces)
    phoneNumber: "", // Placeholder: safe and empty by default
    countryCode: "+91",
    isConfigured: false, // Set to true once a real phone number is provided above
    defaultMessage: "Hello! I visited ÉLORA's boutique website and would love to enquire about your collection.",
    // Helper function to build direct WhatsApp link or return null if unconfigured
    getEnquiryLink: function (productName, productPrice) {
      const cleanNumber = (this.phoneNumber || "").replace(/[^0-9]/g, "");
      if (!cleanNumber || cleanNumber.length < 10) {
        return null; // Signals to show the interactive Demo WhatsApp Modal instead
      }
      const message = productName
        ? `Hello! I would like to enquire about the "${productName}" (Price: ${productPrice || 'Sample Price'}) from ÉLORA boutique. Is this available in my size?`
        : this.defaultMessage;
      return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    },
  },

  // Boutique Physical Location (Pondicherry Placeholder)
  contact: {
    city: "Pondicherry",
    state: "Puducherry, India",
    addressLine1: "Heritage Town, Mission Street",
    addressLine2: "Pondicherry 605001, India",
    addressNote: "📍 Demo Location: Replace with the boutique's physical address in Pondicherry or your city.",
    phoneDisplay: "+91 (Store Phone Placeholder)",
    email: "enquiries@elora-boutique-demo.com",
    hoursWeekday: "Monday – Saturday: 10:30 AM – 8:30 PM",
    hoursSunday: "Sunday: 11:30 AM – 7:30 PM",
    instagramHandle: "@elora.boutique.official",
    instagramUrl: "https://instagram.com",
    instagramNote: "Instagram showcase demo — connect your boutique's active handle here.",
  },

  // Currency formatting
  currency: {
    symbol: "₹",
    code: "INR",
  },

  // Hero Section Copy
  hero: {
    badge: "New Season Collection 2026",
    headline: "Style That Feels Like You.",
    supportingText:
      "Discover thoughtfully curated styles for every mood, every moment, and every version of you.",
    primaryButtonText: "Explore Collection",
    secondaryButtonText: "Discover New Arrivals",
  },

  // Brand Story Copy (Warm placeholder copy to be approved by shop owner)
  brandStory: {
    tagline: "Our Philosophy",
    heading: "Made for Your Everyday Moments",
    demoBadge: "Demo Brand Story — Tailored for Boutique Presentation",
    paragraphs: [
      "At ÉLORA, we believe personal style should feel effortless, expressive, and intimately yours. Born from an appreciation for exquisite textiles, artisanal drapes, and modern feminine silhouettes, our boutique brings together timeless elegance and contemporary comfort.",
      "Whether you are styling an intimate weekend brunch, dressing up for a festive celebration, or looking for versatile everyday co-ords that transition seamlessly from work to evening gatherings, our curated edits are crafted to celebrate every facet of your journey.",
      "Each silhouette in our rack is hand-selected with an obsession for breathable fabrics, flattering tailoring, and graceful details that make you look and feel extraordinary."
    ],
    founderSignoff: "Curated with love, ÉLORA Boutique",
  },
};
