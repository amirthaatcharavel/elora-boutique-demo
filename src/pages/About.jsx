import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Leaf, HeartHandshake, Compass, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";

export default function About() {
  const { brandStory } = BOUTIQUE_CONFIG;

  return (
    <div className="about-page">
      {/* Editorial Header */}
      <header className="page-editorial-header">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Our Boutique</span>
          </nav>

          <span className="section-eyebrow">
            <Sparkles size={13} aria-hidden="true" />
            <span>Heritage & Modernity</span>
          </span>
          <h1 className="page-editorial-title">{brandStory.heading}</h1>
          <p className="page-editorial-subtitle">
            An artisanal atelier dedicated to celebrate every woman's individuality through breathable fabrics, thoughtful drapes, and effortless feminine grace.
          </p>

          <div className="demo-notice-bar" role="note">
            <ShieldCheck size={16} className="demo-notice-icon" />
            <p className="demo-notice-text">
              <strong>Boutique Owner Customization Note:</strong> {brandStory.demoBadge}. This narrative will be customized with your boutique's founding story, heritage, and values upon site handover.
            </p>
          </div>
        </div>
      </header>

      {/* Main Narrative Section */}
      <section className="section about-narrative-section" aria-label="Brand Philosophy">
        <div className="container">
          <div className="about-narrative-grid">
            {/* Left Narrative Text */}
            <div className="about-text-col">
              <span className="section-eyebrow">Our Philosophy</span>
              <h2 className="about-subheading">Thoughtful Fashion for Every Walk of Life</h2>

              <div className="about-paragraphs-flow">
                {brandStory.paragraphs.map((para, idx) => (
                  <p key={idx} className="about-p">
                    {para}
                  </p>
                ))}
              </div>

              {/* Founder Signoff Card */}
              <div className="about-signoff-card">
                <span className="signoff-signature">{brandStory.founderSignoff}</span>
                <p className="signoff-caption">
                  Independent Boutique Storefront • Heritage Town, Pondicherry
                </p>
              </div>
            </div>

            {/* Right Editorial Image Composition */}
            <div className="about-visual-col">
              <div className="about-image-frame-large">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                  alt="Artisanal handwoven fabrics and boutique atelier craftsmanship"
                  className="about-primary-img"
                  loading="eager"
                />
                <div className="about-floating-quote">
                  <p className="floating-quote-text">
                    "Style is an intimate language—we curate pieces that speak true to who you are."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Craftsmanship */}
      <section className="section about-pillars-section" aria-label="Our Three Pillars">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Heart size={13} aria-hidden="true" />
              <span>What Sets Us Apart</span>
            </span>
            <h2 className="section-title">The Pillars of ÉLORA</h2>
            <p className="section-subtitle">
              Every garment on our boutique racks reflects a commitment to fabric integrity, timeless wearability, and high-touch customer care.
            </p>
          </div>

          <div className="about-pillars-grid">
            <div className="pillar-detail-card">
              <div className="pillar-detail-icon">
                <Leaf size={24} />
              </div>
              <h3 className="pillar-detail-title">Natural & Breathable Fibers</h3>
              <p className="pillar-detail-desc">
                We select European flax linens, artisanal mulmul cottons, and heirloom Chanderi silks that keep you cool, comfortable, and poised throughout the Indian climate.
              </p>
            </div>

            <div className="pillar-detail-card">
              <div className="pillar-detail-icon">
                <HeartHandshake size={24} />
              </div>
              <h3 className="pillar-detail-title">Direct WhatsApp Styling</h3>
              <p className="pillar-detail-desc">
                No automated bot scripts. You speak directly with our boutique styling team to review live daylight photos, verify exact measurements, and customize hem lengths.
              </p>
            </div>

            <div className="pillar-detail-card">
              <div className="pillar-detail-icon">
                <Compass size={24} />
              </div>
              <h3 className="pillar-detail-title">Limited-Run Capsule Edits</h3>
              <p className="pillar-detail-desc">
                We produce small, curated batches to ensure every silhouette remains unique, avoiding mass-market overproduction and celebrating individuality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section about-cta-section" aria-label="Explore Our Designs">
        <div className="container">
          <div className="about-bottom-cta">
            <span className="section-eyebrow">Ready to Discover?</span>
            <h2 className="cta-box-title">Explore Our Curated Collections</h2>
            <p className="cta-box-desc">
              From everyday breathable tunics to statement festive anarkalis, find pieces designed for your most memorable moments.
            </p>
            <div className="cta-box-buttons">
              <Link to="/collections" className="btn btn-primary">
                <span>View Full Catalogue</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
