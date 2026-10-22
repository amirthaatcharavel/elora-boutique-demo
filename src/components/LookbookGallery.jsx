import React from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import { GALLERY_ITEMS } from "../data/gallery";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function LookbookGallery() {
  return (
    <section className="section lookbook-section" aria-label="Fashion Lookbook">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <InstagramIcon size={14} />
            <span>Social Lookbook & Inspiration</span>
          </span>
          <h2 className="section-title">Style in Everyday Motion</h2>
          <p className="section-subtitle">
            A glimpse into how our silhouettes are styled in daily moments, sunny afternoons, and festive celebrations.
          </p>
          <p className="lookbook-demo-note">
            📸 Demo Lookbook Grid — Replace with your boutique's photoshoot or tagged customer looks.
          </p>
        </div>

        {/* Lookbook Gallery Grid */}
        <div className="lookbook-grid">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="lookbook-card" tabIndex={0}>
              <div className="lookbook-image-wrap">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="lookbook-image"
                  loading="lazy"
                />
                
                {/* Hover Editorial Overlay */}
                <div className="lookbook-overlay">
                  <div className="lookbook-overlay-top">
                    <span className="lookbook-tag">{item.tag}</span>
                    <Heart size={18} className="lookbook-like-icon" />
                  </div>
                  
                  <div className="lookbook-overlay-bottom">
                    <p className="lookbook-caption">{item.caption}</p>
                    <span className="lookbook-brand-mark">{BOUTIQUE_CONFIG.brandName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Link Callout */}
        <div className="lookbook-footer-cta">
          <a
            href={BOUTIQUE_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline lookbook-cta-btn"
          >
            <InstagramIcon size={17} />
            <span>Follow Our Journey {BOUTIQUE_CONFIG.contact.instagramHandle}</span>
            <ArrowUpRight size={15} />
          </a>
          <span className="social-subnote">
            {BOUTIQUE_CONFIG.contact.instagramNote}
          </span>
        </div>
      </div>
    </section>
  );
}
