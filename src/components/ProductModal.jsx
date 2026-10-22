import React, { useState } from "react";
import { X, MessageCircle, Check, Sparkles } from "lucide-react";

export default function ProductModal({ product, onClose, onEnquireWhatsApp }) {
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes && product.sizes.length > 0 ? product.sizes[0] : "Free Size"
  );

  if (!product) return null;

  const handleEnquire = () => {
    onEnquireWhatsApp({
      ...product,
      chosenSize: selectedSize,
    });
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="modal-container product-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close product view"
        >
          <X size={20} />
        </button>

        <div className="product-modal-grid">
          {/* Modal Left: Product Imagery */}
          <div className="modal-image-col">
            <div className="modal-image-frame">
              <img
                src={product.image}
                alt={product.name}
                className="modal-product-img"
              />
              <div className="modal-badge-float">
                <span className="badge badge-rose">
                  <Sparkles size={12} aria-hidden="true" />
                  <span>{product.category}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Modal Right: Details & Order Enquire */}
          <div className="modal-info-col">
            <div className="modal-meta">
              <span className="modal-category">{product.category}</span>
              <span className="modal-demo-tag">Illustrative Sample</span>
            </div>

            <h2 id="modal-product-title" className="modal-product-title">
              {product.name}
            </h2>

            {/* Price section */}
            <div className="modal-price-box">
              <div className="modal-price-row">
                <span className="modal-current-price">{product.formattedPrice}</span>
                {product.originalPrice && (
                  <span className="modal-original-price">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="modal-price-tax-note">
                Sample illustrative price in INR for demo
              </span>
            </div>

            {/* Color & Fabric */}
            <div className="modal-spec-row">
              <div className="modal-spec-item">
                <span className="spec-label">Fabric:</span>
                <span className="spec-val">{product.fabric}</span>
              </div>
              <div className="modal-spec-item">
                <span className="spec-label">Color:</span>
                <span className="spec-val">{product.color}</span>
              </div>
            </div>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="modal-size-section">
                <div className="size-header">
                  <span className="spec-label">Select Size:</span>
                  <span className="selected-size-label">{selectedSize}</span>
                </div>
                <div className="size-pills-row" role="radiogroup" aria-label="Available sizes">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      role="radio"
                      aria-checked={selectedSize === size}
                      onClick={() => setSelectedSize(size)}
                      className={`size-pill ${selectedSize === size ? "active" : ""}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="modal-desc-box">
              <p className="modal-full-desc">{product.fullDescription}</p>
            </div>

            {/* Care instructions */}
            {product.careInstructions && (
              <div className="modal-care-box">
                <p className="care-text">
                  <strong>Wash & Care:</strong> {product.careInstructions}
                </p>
              </div>
            )}

            {/* WhatsApp Enquiry Button */}
            <div className="modal-cta-wrap">
              <button
                type="button"
                onClick={handleEnquire}
                className="btn btn-whatsapp modal-enquire-btn"
              >
                <MessageCircle size={19} aria-hidden="true" />
                <span>Enquire on WhatsApp (Size {selectedSize})</span>
              </button>

              <p className="modal-whatsapp-subtext">
                Direct enquiry for size fitting, fabric feel & doorstep delivery
              </p>
            </div>

            {/* Boutique trust bullets */}
            <div className="modal-trust-pills">
              <span className="trust-pill">
                <Check size={13} className="trust-icon" /> Pure artisanal textiles
              </span>
              <span className="trust-pill">
                <Check size={13} className="trust-icon" /> Size customization possible
              </span>
              <span className="trust-pill">
                <Check size={13} className="trust-icon" /> Direct boutique communication
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
