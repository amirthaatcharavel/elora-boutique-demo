import React from "react";
import { Sparkles, HeartHandshake, Compass, Leaf } from "lucide-react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";

export default function BrandStory() {
  const { brandStory } = BOUTIQUE_CONFIG;

  return (
    <section id="about" className="section brand-story-section" aria-label="Brand Story">
      <div className="container">
        <div className="brand-story-grid">
          {/* Left: Editorial Image Composition */}
          <div className="story-image-column">
            <div className="story-image-card">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                alt="Artisanal boutique textiles and fine dress details"
                className="story-main-image"
                loading="lazy"
              />
              <div className="story-image-overlay-card">
                <span className="story-badge-est">Heritage & Modernity</span>
                <p className="story-overlay-quote">
                  "Fashion is not about fitting in—it is about feeling completely at home in your own skin."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Narrative Editorial Content */}
          <div className="story-content-column">
            <div className="story-header-pill">
              <span className="badge badge-rose">
                <Sparkles size={12} aria-hidden="true" />
                <span>{brandStory.tagline}</span>
              </span>
              <span className="story-demo-badge" title="Demo placeholder text">
                {brandStory.demoBadge}
              </span>
            </div>

            <h2 className="story-heading">{brandStory.heading}</h2>

            <div className="story-paragraphs">
              {brandStory.paragraphs.map((para, index) => (
                <p key={index} className="story-p">
                  {para}
                </p>
              ))}
            </div>

            {/* Three Pillar Cards */}
            <div className="story-pillars-row">
              <div className="story-pillar">
                <div className="pillar-icon">
                  <Leaf size={18} />
                </div>
                <div>
                  <h3 className="pillar-title">Pure Fabrics</h3>
                  <p className="pillar-desc">Breathable linens, mulmul cottons, and rich Chanderi silks.</p>
                </div>
              </div>

              <div className="story-pillar">
                <div className="pillar-icon">
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <h3 className="pillar-title">Direct Connection</h3>
                  <p className="pillar-desc">Speak directly with our boutique for custom fittings & styling tips.</p>
                </div>
              </div>

              <div className="story-pillar">
                <div className="pillar-icon">
                  <Compass size={18} />
                </div>
                <div>
                  <h3 className="pillar-title">Curated Silhouettes</h3>
                  <p className="pillar-desc">Limited-run edits so your look remains uniquely yours.</p>
                </div>
              </div>
            </div>

            {/* Founder Signoff Note */}
            <div className="story-signoff">
              <span className="signoff-signature">{brandStory.founderSignoff}</span>
              <span className="signoff-note">
                [Note for Boutique Owner: This narrative will be updated with your boutique's founding journey and bespoke brand values]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
