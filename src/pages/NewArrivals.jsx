import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, MessageCircle, Eye, ArrowRight, Info } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";
import { useBoutique } from "../context/useBoutique";

export default function NewArrivals() {
  const { setSelectedProduct, handleEnquireWhatsApp } = useBoutique();

  // Filter only items marked as new in shared PRODUCTS data
  const newArrivals = PRODUCTS.filter((item) => item.isNew);
  const spotlightItem = newArrivals[0] || PRODUCTS[0];
  const remainingNew = newArrivals.slice(1);

  return (
    <div className="new-arrivals-page">
      {/* Editorial Page Header */}
      <header className="page-editorial-header">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">New Arrivals</span>
          </nav>

          <span className="section-eyebrow">
            <Sparkles size={13} aria-hidden="true" />
            <span>Seasonal Capsule</span>
          </span>
          <h1 className="page-editorial-title">New Arrivals Edit</h1>
          <p className="page-editorial-subtitle">
            Freshly unboxed silhouettes for Spring/Summer 2026. Handcrafted botanical prints, airy linen textures, and breezy silhouettes tailored for the contemporary woman.
          </p>

          <div className="demo-notice-bar" role="note">
            <Info size={16} className="demo-notice-icon" />
            <p className="demo-notice-text">
              <strong>Seasonal Lookbook:</strong> Showing only newly dropped sample pieces from our unified boutique inventory.
            </p>
          </div>
        </div>
      </header>

      {/* Spotlight Editorial Feature */}
      <section className="section arrivals-spotlight-section" aria-label="Featured Spotlight">
        <div className="container">
          <div className="arrivals-editorial-layout">
            {/* Main Spotlight Card */}
            <div className="editorial-main-item">
              <div className="editorial-image-box">
                <img
                  src={spotlightItem.image}
                  alt={spotlightItem.name}
                  className="editorial-main-img"
                  loading="eager"
                />
                <div className="editorial-badge-spotlight">
                  <span className="badge badge-dark">Season Highlight</span>
                </div>
              </div>

              <div className="editorial-main-info">
                <div className="editorial-meta-row">
                  <span className="editorial-tag">{spotlightItem.category}</span>
                  <span className="editorial-sample-tag">Illustrative Sample</span>
                </div>

                <h2 className="editorial-title">{spotlightItem.name}</h2>
                <p className="editorial-desc">{spotlightItem.fullDescription}</p>

                <div className="editorial-fabric-highlight">
                  <span className="fabric-label">Artisanal Textile:</span>
                  <span className="fabric-val">{spotlightItem.fabric}</span>
                </div>

                <div className="editorial-price-row">
                  <div className="editorial-price-block">
                    <span className="editorial-price">{spotlightItem.formattedPrice}</span>
                    {spotlightItem.originalPrice && (
                      <span className="editorial-orig-price">
                        ₹{spotlightItem.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="editorial-buttons-row">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(spotlightItem)}
                      className="btn btn-outline btn-sm"
                      aria-label={`Quick view ${spotlightItem.name}`}
                    >
                      <Eye size={15} />
                      <span>Quick View</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEnquireWhatsApp(spotlightItem)}
                      className="btn btn-whatsapp btn-sm"
                      aria-label={`Enquire about ${spotlightItem.name} on WhatsApp`}
                    >
                      <MessageCircle size={15} />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Editorial Capsule Stack */}
            <div className="editorial-side-items">
              <div className="side-items-header">
                <h3 className="side-items-title">Recent Capsule Drops</h3>
                <span className="side-items-subtitle">Limited edition batch</span>
              </div>

              <div className="side-items-stack">
                {remainingNew.map((item) => (
                  <div key={item.id} className="capsule-card">
                    <div
                      className="capsule-image-frame"
                      onClick={() => setSelectedProduct(item)}
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
                      <h4
                        className="capsule-name"
                        onClick={() => setSelectedProduct(item)}
                      >
                        {item.name}
                      </h4>
                      <p className="capsule-fabric">{item.fabric}</p>

                      <div className="capsule-bottom-row">
                        <span className="capsule-price">{item.formattedPrice}</span>
                        <button
                          type="button"
                          onClick={() => handleEnquireWhatsApp(item)}
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

      {/* Full Grid of All New Arrivals */}
      <section className="section new-arrivals-grid-section" aria-label="All New Season Styles">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Sparkles size={13} aria-hidden="true" />
              <span>Full Capsule Showcase</span>
            </span>
            <h2 className="section-title">All New Season Additions</h2>
            <p className="section-subtitle">
              Every newly introduced design currently featured on our boutique racks.
            </p>
          </div>

          <div className="products-grid">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={setSelectedProduct}
                onEnquireWhatsApp={handleEnquireWhatsApp}
              />
            ))}
          </div>

          <div className="section-cta-center">
            <Link to="/collections" className="btn btn-primary">
              <span>Browse All Collections</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
