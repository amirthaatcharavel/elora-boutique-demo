import React, { useMemo } from "react";
import { Info, Sparkles } from "lucide-react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data/products";

const FILTER_TABS = [
  "All Styles",
  "Ethnic Wear",
  "Dresses",
  "Co-ord Sets",
  "Everyday Essentials",
];

export default function ProductGrid({
  activeCategory,
  onSelectCategory,
  onSelectProduct,
  onEnquireWhatsApp,
}) {
  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (!activeCategory || activeCategory === "All Styles") {
      return PRODUCTS;
    }
    return PRODUCTS.filter(
      (prod) => prod.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <section id="collection" className="section collection-section" aria-label="Featured Collection">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={13} aria-hidden="true" />
            <span>Featured Showcase</span>
          </span>
          <h2 className="section-title">Bestsellers & Timeless Edits</h2>
          <p className="section-subtitle">
            A handpicked curation of contemporary dresses, artisanal kurtas, and easy co-ords tailored for modern grace.
          </p>
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="demo-notice-bar" role="note">
          <Info size={16} className="demo-notice-icon" />
          <p className="demo-notice-text">
            <strong>Sales Demo Preview:</strong> All product names, illustrative prices (INR), and imagery are sample representations for this boutique sales demonstration. Easily customized with the boutique owner's real catalogue.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="collection-filter-bar">
          <div className="filter-tabs-wrapper" role="tablist" aria-label="Filter products by category">
            {FILTER_TABS.map((tab) => {
              const isSelected =
                (!activeCategory && tab === "All Styles") ||
                activeCategory === tab;

              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectCategory(tab)}
                  className={`filter-tab-btn ${isSelected ? "active" : ""}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <span className="collection-count-badge">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "design" : "designs"}
          </span>
        </div>

        {/* Product Cards Grid or Friendly Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onEnquireWhatsApp={onEnquireWhatsApp}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state-box">
            <div className="empty-state-icon">🌸</div>
            <h3 className="empty-state-title">No styles found in this category</h3>
            <p className="empty-state-desc">
              We are currently curating more designs for this edit. Check out our other collections or enquire directly on WhatsApp for custom orders.
            </p>
            <button
              onClick={() => onSelectCategory("All Styles")}
              className="btn btn-primary"
            >
              View All Styles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
