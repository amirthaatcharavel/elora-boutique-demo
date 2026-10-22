# ÉLORA — The Fashion Boutique (Multi-Page Sales Demo)

An editorial, premium multi-page website designed for independent women's fashion boutiques in India. Built with **React 19**, **React Router DOM 7**, **Vite**, **Vanilla CSS**, and **Lucide Icons**.

---

## 🚀 Quick Start: Running the Website Locally

From the project root (`d:\dress`):

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the local development server
npm run dev
```

Then open your browser at:
👉 **`http://localhost:5174/`** (or `http://localhost:5173/`)

To test a production build:
```bash
npm run build
npm run preview
```

---

## 🗺️ Multi-Page Routing Architecture

The website is structured into 5 dedicated client-side routes with browser Back/Forward history support, automatic scroll-to-top on route transitions, active navigation highlighting, and direct URL access:

| Route Path | Page Component | Page Purpose & Content |
| :--- | :--- | :--- |
| **`/`** | [`src/pages/Home.jsx`](file:///d:/dress/src/pages/Home.jsx) | **Home:** Editorial hero, category cards preview, signature bestsellers preview, new season spotlight banner, brand philosophy teaser, lookbook preview, and CTA leading to collections. |
| **`/collections`** | [`src/pages/Collections.jsx`](file:///d:/dress/src/pages/Collections.jsx) | **Collections Catalog:** Dedicated full catalog with interactive category tabs (*Ethnic Wear*, *Dresses*, *Co-ord Sets*, *Everyday Essentials*), URL query sync (`?category=...`), product grid, and empty state. |
| **`/new-arrivals`** | [`src/pages/NewArrivals.jsx`](file:///d:/dress/src/pages/NewArrivals.jsx) | **New Arrivals:** Dedicated new season drop page showing only items marked `isNew: true` from shared data with spotlight editorial layout and capsule cards. |
| **`/about`** | [`src/pages/About.jsx`](file:///d:/dress/src/pages/About.jsx) | **About Boutique:** Dedicated brand story page with philosophy, editorial atelier imagery, the three pillars of craftsmanship, founder signoff, and clear demo notices. |
| **`/contact`** | [`src/pages/Contact.jsx`](file:///d:/dress/src/pages/Contact.jsx) | **Contact & Concierge:** Store location in Heritage Town, Pondicherry (demo placeholder), visiting hours, email, interactive WhatsApp consultation form, and Instagram link. |

---

## 📁 Where Everything is Configured

Every part of this website has been built to be effortlessly updated in seconds without touching core layout code:

| What to change | File to edit | What it controls |
| :--- | :--- | :--- |
| **Boutique Brand & Name** | [`src/config/boutiqueConfig.js`](file:///d:/dress/src/config/boutiqueConfig.js) | Brand name (`ÉLORA`), tagline, announcement bar copy, hero headline, story text |
| **WhatsApp Number & Chat** | [`src/config/boutiqueConfig.js`](file:///d:/dress/src/config/boutiqueConfig.js) | Phone number, automatic message templates, safe demo mode toggle |
| **Boutique Address & Contact** | [`src/config/boutiqueConfig.js`](file:///d:/dress/src/config/boutiqueConfig.js) | Pondicherry address placeholder, store hours, contact email, Instagram handle |
| **Products & Prices (INR)** | [`src/data/products.js`](file:///d:/dress/src/data/products.js) | All product names, INR prices, fabrics, descriptions, sizes, tags |
| **Category Cards** | [`src/data/categories.js`](file:///d:/dress/src/data/categories.js) | Ethnic Wear, Dresses, Co-ord Sets, Everyday Essentials imagery & counts |
| **Inspiration Lookbook** | [`src/data/gallery.js`](file:///d:/dress/src/data/gallery.js) | Editorial lifestyle photos and style tags |
| **Colors & Typography** | [`src/index.css`](file:///d:/dress/src/index.css) | Ivory, blush pink, muted rose, espresso typography tokens & Google Fonts |

---

## 💬 WhatsApp Integration Guide

### Current Mode: Safe Presentation Demo
By default, `phoneNumber: ""` in [`src/config/boutiqueConfig.js`](file:///d:/dress/src/config/boutiqueConfig.js) is in **Safe Mode**. When you or the boutique owner click *"Enquire on WhatsApp"* on any page, it opens an interactive preview modal showing the prefilled message with the exact garment name and size, explaining that live chats activate once their number is set.

### How to Activate for the Real Boutique Owner:
Open [`src/config/boutiqueConfig.js`](file:///d:/dress/src/config/boutiqueConfig.js) and update:
```javascript
whatsapp: {
  phoneNumber: "919876543210", // Real 10 or 12 digit WhatsApp Business number
  countryCode: "+91",
  isConfigured: true,
  // ...
}
```
As soon as this is saved, every button across the website will directly open WhatsApp with prefilled messages like:
> *"Hello! I would like to enquire about the 'Floral Cotton Kurta' (Price: ₹2,299) from ÉLORA boutique. Is size M available?"*

---

## 📋 Checklist Before Presenting as a Real Shop's Website

When transitioning this demo from a pitch presentation to a real shop's official website:

- [ ] **Brand Name:** Replace `"ÉLORA — The Fashion Boutique"` with the client's registered shop name in [`boutiqueConfig.js`](file:///d:/dress/src/config/boutiqueConfig.js).
- [ ] **WhatsApp Number:** Add the client's official WhatsApp Business number in [`boutiqueConfig.js`](file:///d:/dress/src/config/boutiqueConfig.js) (`whatsapp.phoneNumber`).
- [ ] **Store Address:** Replace the Pondicherry placeholder address with their physical storefront address.
- [ ] **Store Hours:** Update weekday and Sunday boutique operating timings.
- [ ] **Real Product Photography:** Swap sample Unsplash image URLs in [`src/data/products.js`](file:///d:/dress/src/data/products.js) with real photos from the boutique's catalogue or photoshoots.
- [ ] **Actual Prices & Sizes:** Update the illustrative sample prices to the boutique's real MRP and list their available stock sizes (`XS`, `S`, `M`, `L`, `XL`, `XXL`, or Custom Tailoring).
- [ ] **Brand Story Narrative:** Replace the warm placeholder copy in `brandStory` with the founder's authentic journey, heritage, and values.
- [ ] **Social Media:** Connect their real Instagram handle in [`boutiqueConfig.js`](file:///d:/dress/src/config/boutiqueConfig.js).
