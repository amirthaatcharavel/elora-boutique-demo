import React from "react";
import { Sparkles, MessageCircle, Eye } from "lucide-react";
import { PRODUCTS } from "../data/products";

export default function NewArrivals({ onSelectProduct, onEnquireWhatsApp }) {
  // Filter items marked as new
  const newProducts = PRODUCTS.filter((p) => p.isNew);
  const featuredDrop = newProducts[0] || PRODUCTS[0];
  const secondaryDrops = newProducts.slice(1, 4);

  return (
    <section id="new-arrivals" className="section new-arrivals-section" aria-label="New Arrivals">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={13} aria-hidden="true" />
            <span>Spring / Summer 2026</span>
          </span>
          <h2 className="section-title">New Arrivals Edit</h2>
          <p className="section-subtitle">
            An editorial look at our freshest arrivals—characterized by airy linen drapes, handloom weaves, and contemporary palettes.
          </p>
        </div>

        {/* Asymmetrical Editorial Spotlight Showcase */}
        <div className="arrivals-editorial-layout">
          {/* Main Large Spotlight Item */}
          <div className="editorial-main-item">
            <div className="editorial-image-box">
              <img
                src={featuredDrop.image}
                alt={featuredDrop.name}
                className="editorial-main-img"
                loading="lazy"
              />
              <div className="editorial-badge-spotlight">
                <span className="badge badge-dark">Spotlight Feature</span>
              </div>
            </div>

            <div className="editorial-main-info">
              <div className="editorial-meta-row">
                <span className="editorial-tag">{featuredDrop.category}</span>
                <span className="editorial-sample-tag">Illustrative Sample</span>
              </div>

              <h3 className="editorial-title">{featuredDrop.name}</h3>
              <p className="editorial-desc">{featuredDrop.shortDescription}</p>

              <div className="editorial-fabric-highlight">
                <span className="fabric-label">Crafted in:</span>
                <span className="fabric-val">{featuredDrop.fabric}</span>
              </div>

              <div className="editorial-price-row">
                <div className="editorial-price-block">
                  <span className="editorial-price">{featuredDrop.formattedPrice}</span>
                  {featuredDrop.originalPrice && (
                    <span className="editorial-orig-price">
                      ₹{featuredDrop.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="editorial-buttons-row">
                  <button
                    onClick={() => onSelectProduct(featuredDrop)}
                    className="btn btn-outline btn-sm"
                    aria-label={`View details of ${featuredDrop.name}`}
                  >
                    <Eye size={15} />
                    <span>Quick View</span>
                  </button>

                  <button
                    onClick={() => onEnquireWhatsApp(featuredDrop)}
                    className="btn btn-whatsapp btn-sm"
                    aria-label={`Enquire about ${featuredDrop.name} on WhatsApp`}
                  >
                    <MessageCircle size={15} />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Editorial Pairing Cards */}
          <div className="editorial-side-items">
            <div className="side-items-header">
              <h4 className="side-items-title">Curated Capsule Additions</h4>
              <span className="side-items-subtitle">Fresh in store this week</span>
            </div>

            <div className="side-items-stack">
              {secondaryDrops.map((item) => (
                <div key={item.id} className="capsule-card">
                  <div
                    className="capsule-image-frame"
                    onClick={() => onSelectProduct(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${item.name}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="capsule-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="capsule-info">
                    <span className="capsule-category">{item.category}</span>
                    <h5
                      className="capsule-name"
                      onClick={() => onSelectProduct(item)}
                    >
                      {item.name}
                    </h5>
                    <p className="capsule-fabric">{item.fabric}</p>

                    <div className="capsule-bottom-row">
                      <span className="capsule-price">{item.formattedPrice}</span>
                      <button
                        onClick={() => onEnquireWhatsApp(item)}
                        className="btn-text-enquire"
                        aria-label={`WhatsApp enquiry for ${item.name}`}
                      >
                        <MessageCircle size={14} />
                        <span>Enquire</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
