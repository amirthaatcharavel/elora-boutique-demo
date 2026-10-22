import React from "react";
import { MessageCircle, Eye, Sparkles } from "lucide-react";

export default function ProductCard({ product, onSelectProduct, onEnquireWhatsApp }) {
  const {
    name,
    category,
    formattedPrice,
    originalPrice,
    isNew,
    isBestseller,
    image,
    shortDescription,
    sizes,
  } = product;

  return (
    <article className="product-card" aria-label={`Product: ${name}`}>
      {/* Product Image Area */}
      <div
        className="product-image-container"
        onClick={() => onSelectProduct(product)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${name}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelectProduct(product);
          }
        }}
      >
        <img
          src={image}
          alt={`Photograph of ${name} - ${category}`}
          className="product-image"
          loading="lazy"
        />

        {/* Badges container */}
        <div className="product-badges">
          {isNew && (
            <span className="badge badge-rose">
              <Sparkles size={11} aria-hidden="true" />
              <span>New Season</span>
            </span>
          )}
          {isBestseller && (
            <span className="badge badge-dark">
              <span>Bestseller</span>
            </span>
          )}
        </div>

        {/* Quick View Hover Overlay Button */}
        <div className="product-overlay-action">
          <button
            type="button"
            className="btn-quick-view"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            aria-label={`Quick view ${name}`}
          >
            <Eye size={16} />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="product-content">
        <div className="product-meta">
          <span className="product-category">{category}</span>
          {sizes && sizes.length > 0 && (
            <span className="product-sizes-hint">
              Sizes: {sizes.slice(0, 3).join(", ")}
              {sizes.length > 3 ? "..." : ""}
            </span>
          )}
        </div>

        <h3
          className="product-name"
          onClick={() => onSelectProduct(product)}
          role="button"
          tabIndex={0}
        >
          {name}
        </h3>

        <p className="product-desc">{shortDescription}</p>

        {/* Price & Demo Notice */}
        <div className="product-price-row">
          <div className="price-stack">
            <span className="product-price">{formattedPrice}</span>
            {originalPrice && (
              <span className="product-original-price">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <span className="demo-price-tag" title="Illustrative sample price for demonstration">
            Sample Price
          </span>
        </div>

        {/* Action Button: Enquire on WhatsApp */}
        <div className="product-actions">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEnquireWhatsApp(product);
            }}
            className="btn btn-whatsapp btn-product-enquire"
            aria-label={`Enquire about ${name} on WhatsApp`}
          >
            <MessageCircle size={17} aria-hidden="true" />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>
      </div>
    </article>
  );
}
