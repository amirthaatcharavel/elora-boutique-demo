import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Welcome Hero">
      <div className="container hero-container">
        {/* Editorial Text Content */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge badge-rose">
              <Sparkles size={13} aria-hidden="true" />
              <span>{BOUTIQUE_CONFIG.hero.badge}</span>
            </span>
          </div>

          <h1 className="hero-title">
            Style That Feels <br />
            <span className="hero-title-italic">Like You.</span>
          </h1>

          <p className="hero-supporting-text">
            {BOUTIQUE_CONFIG.hero.supportingText}
          </p>

          <div className="hero-cta-group">
            <Link
              to="/collections"
              className="btn btn-primary"
              aria-label="Explore Collection"
            >
              <span>{BOUTIQUE_CONFIG.hero.primaryButtonText}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link
              to="/new-arrivals"
              className="btn btn-outline"
              aria-label="Discover New Arrivals"
            >
              <span>{BOUTIQUE_CONFIG.hero.secondaryButtonText}</span>
            </Link>
          </div>

          {/* Boutique Trust Accents */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Handpicked Breathable Fabrics</span>
            </div>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Boutique Craftsmanship</span>
            </div>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Direct WhatsApp Styling</span>
            </div>
          </div>
        </div>

        {/* Editorial Image Composition */}
        <div className="hero-image-col">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
              alt="Editorial portrait of an elegant woman wearing curated boutique linen attire in warm natural sunlight"
              className="hero-main-img"
              loading="eager"
            />
            
            {/* Subtle editorial floating tag */}
            <div className="hero-floating-card">
              <div className="floating-card-icon">
                <Heart size={18} />
              </div>
              <div>
                <p className="floating-card-title">Curated for Elegance</p>
                <p className="floating-card-sub">Ethnic, Silks & Linen Edits</p>
              </div>
            </div>

            {/* Editorial subtle frame border accent */}
            <div className="hero-frame-border" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
