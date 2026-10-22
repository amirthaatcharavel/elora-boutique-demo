import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Clock,
  ArrowUp,
  Sparkles,
} from "lucide-react";
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

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-root" aria-label="Boutique Footer">
      {/* Top Footer Section */}
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand Wordmark & Ethos */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand">
              <span className="footer-brand-name">{BOUTIQUE_CONFIG.brandName}</span>
              <span className="footer-brand-sub">{BOUTIQUE_CONFIG.brandSubtitle}</span>
            </Link>

            <p className="footer-bio">
              Thoughtfully curated women's wear celebrating effortless grace, artisanal fabrics, and modern feminine silhouettes.
            </p>

            <div className="footer-badge-wrap">
              <span className="footer-demo-pill">
                <Sparkles size={12} aria-hidden="true" />
                <span>Sales Demo Storefront</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list" role="list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collections">Collections Catalog</Link>
              </li>
              <li>
                <Link to="/new-arrivals">New Season Arrivals</Link>
              </li>
              <li>
                <Link to="/about">About ÉLORA Boutique</Link>
              </li>
              <li>
                <Link to="/contact">Contact & WhatsApp</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Categories</h4>
            <ul className="footer-links-list" role="list">
              <li>
                <Link to="/collections?category=Ethnic%20Wear">Ethnic Wear & Kurtas</Link>
              </li>
              <li>
                <Link to="/collections?category=Dresses">Breezy Midi Dresses</Link>
              </li>
              <li>
                <Link to="/collections?category=Co-ord%20Sets">Co-ord Sets</Link>
              </li>
              <li>
                <Link to="/collections?category=Everyday%20Essentials">Everyday Linen Essentials</Link>
              </li>
              <li>
                <Link to="/new-arrivals">Fresh Lookbook Edits</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Boutique Location & Contact */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Boutique Storefront</h4>
            
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <div>
                <p className="contact-bold">{BOUTIQUE_CONFIG.contact.addressLine1}</p>
                <p>{BOUTIQUE_CONFIG.contact.addressLine2}</p>
                <span className="footer-location-note">
                  {BOUTIQUE_CONFIG.contact.addressNote}
                </span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <div>
                <p>{BOUTIQUE_CONFIG.contact.hoursWeekday}</p>
                <p>{BOUTIQUE_CONFIG.contact.hoursSunday}</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <div>
                <p>{BOUTIQUE_CONFIG.contact.email}</p>
                <span className="footer-location-note">
                  [Demo Contact — Replace with shop email]
                </span>
              </div>
            </div>

            <div className="footer-social-row">
              <a
                href={BOUTIQUE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram profile"
                title="Boutique Instagram Showcase"
              >
                <InstagramIcon size={18} />
              </a>
              <span className="footer-handle-text">
                {BOUTIQUE_CONFIG.contact.instagramHandle}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom-strip">
        <div className="container footer-bottom-container">
          <p className="footer-copyright">
            © {currentYear} {BOUTIQUE_CONFIG.brandName} — {BOUTIQUE_CONFIG.brandSubtitle}. All rights reserved.
          </p>

          <p className="footer-disclaimer">
            {BOUTIQUE_CONFIG.brandLegalNotice}
          </p>

          <button
            onClick={scrollToTop}
            className="footer-scroll-top-btn"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
