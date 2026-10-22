import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MessageCircle, HeartHandshake, Compass, Leaf } from "lucide-react";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import LookbookGallery from "../components/LookbookGallery";
import { PRODUCTS } from "../data/products";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";
import { useBoutique } from "../context/useBoutique";

export default function Home() {
  const { setSelectedProduct, handleEnquireWhatsApp } = useBoutique();

  // Curated preview slices for Home page
  const featuredBestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);
  const newArrivalSpotlight = PRODUCTS.find((p) => p.isNew) || PRODUCTS[0];

  return (
    <div className="home-page">
      {/* 1. Fashion Hero Section */}
      <Hero />

      {/* 2. Shop by Category Preview */}
      <CategorySection />

      {/* 3. Featured Bestsellers Preview */}
      <section className="section collection-preview-section" aria-label="Featured Bestsellers Preview">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Sparkles size={13} aria-hidden="true" />
              <span>Boutique Favorites</span>
            </span>
            <h2 className="section-title">Signature Bestsellers</h2>
            <p className="section-subtitle">
              A glimpse into our most-loved silhouettes, celebrated for comfortable tailoring and timeless feminine grace.
            </p>
          </div>

          <div className="products-grid">
            {featuredBestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={setSelectedProduct}
                onEnquireWhatsApp={handleEnquireWhatsApp}
              />
            ))}
          </div>

          <div className="section-cta-center">
            <Link to="/collections" className="btn btn-primary" aria-label="View Full Collection">
              <span>Explore All {PRODUCTS.length}+ Styles</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. New Arrivals Preview Banner / Spotlight */}
      <section className="section arrivals-preview-section" aria-label="New Season Preview">
        <div className="container">
          <div className="home-arrivals-banner">
            <div className="arrivals-banner-image-wrap">
              <img
                src={newArrivalSpotlight.image}
                alt={newArrivalSpotlight.name}
                className="arrivals-banner-img"
                loading="lazy"
              />
              <div className="arrivals-banner-badge">
                <span className="badge badge-rose">New Season Drop</span>
              </div>
            </div>

            <div className="arrivals-banner-content">
              <span className="section-eyebrow">
                <Sparkles size={13} aria-hidden="true" />
                <span>Spring / Summer 2026</span>
              </span>
              <h2 className="banner-title">{newArrivalSpotlight.name}</h2>
              <p className="banner-desc">
                {newArrivalSpotlight.fullDescription}
              </p>

              <div className="banner-meta-pill">
                <strong>Fabric:</strong> {newArrivalSpotlight.fabric} | <strong>Price:</strong> {newArrivalSpotlight.formattedPrice}
              </div>

              <div className="banner-cta-group">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(newArrivalSpotlight)}
                  className="btn btn-outline"
                >
                  Quick View
                </button>
                <Link to="/new-arrivals" className="btn btn-dark">
                  <span>View All New Arrivals</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Short Brand Introduction Preview */}
      <section className="section brand-intro-preview" aria-label="Brand Introduction">
        <div className="container">
          <div className="brand-intro-card">
            <span className="section-eyebrow">
              <Sparkles size={13} aria-hidden="true" />
              <span>Our Philosophy</span>
            </span>
            <h2 className="intro-heading">{BOUTIQUE_CONFIG.brandStory.heading}</h2>
            <p className="intro-text">
              {BOUTIQUE_CONFIG.brandStory.paragraphs[0]}
            </p>

            <div className="intro-pillars-mini">
              <div className="mini-pillar">
                <Leaf size={18} className="mini-pillar-icon" />
                <span>Pure Natural Textiles</span>
              </div>
              <div className="mini-pillar">
                <HeartHandshake size={18} className="mini-pillar-icon" />
                <span>Direct WhatsApp Consultation</span>
              </div>
              <div className="mini-pillar">
                <Compass size={18} className="mini-pillar-icon" />
                <span>Curated Boutique Edits</span>
              </div>
            </div>

            <div className="intro-cta-wrap">
              <Link to="/about" className="btn btn-outline">
                <span>Read Our Full Story</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Instagram-Inspired Lookbook Preview */}
      <LookbookGallery />

      {/* 7. Call-to-Action to Collections / WhatsApp Contact */}
      <section className="section home-bottom-cta-section" aria-label="Explore Boutique">
        <div className="container">
          <div className="home-bottom-cta-box">
            <span className="badge badge-rose">Custom Styling Available</span>
            <h2 className="cta-box-title">Find Your Next Signature Look</h2>
            <p className="cta-box-desc">
              From artisanal festive sarees to relaxed weekend linen sets, experience boutique shopping designed around your personal aesthetic.
            </p>
            <div className="cta-box-buttons">
              <Link to="/collections" className="btn btn-primary">
                <span>Explore Full Collection</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-whatsapp">
                <MessageCircle size={18} />
                <span>Connect with Boutique</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
