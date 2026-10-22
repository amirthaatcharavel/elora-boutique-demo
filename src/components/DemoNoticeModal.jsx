import React from "react";
import { X, MessageCircle, ShoppingBag, ShieldCheck, Code2, ArrowRight } from "lucide-react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";

export default function DemoNoticeModal({ config, onClose, onNavigateSection }) {
  if (!config) return null;

  const isBagModal = config.type === "bag";

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div
        className="modal-container demo-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {isBagModal ? (
          /* Shopping Bag Inquiries Dialog */
          <div className="demo-modal-content">
            <div className="demo-modal-icon-wrap bag-icon-accent">
              <ShoppingBag size={28} />
            </div>

            <h3 id="demo-modal-title" className="demo-modal-title">
              Boutique Personalized Order Flow
            </h3>

            <p className="demo-modal-desc">
              In this boutique showcase, we prioritize high-touch personal service over impersonal automated checkouts. Customers place orders and verify custom sizing directly via WhatsApp.
            </p>

            <div className="demo-card-highlight">
              <h4 className="highlight-title">Why WhatsApp Works Better for Boutiques:</h4>
              <ul className="highlight-list">
                <li>✨ Immediate confirmation of bust, waist & hip measurements</li>
                <li>✨ Real-time fabric videos in natural daylight on request</li>
                <li>✨ Seamless instant payments via UPI, Google Pay, or bank transfer</li>
                <li>✨ Zero abandoned shopping carts or payment gateway friction</li>
              </ul>
            </div>

            <div className="demo-modal-actions">
              <button
                onClick={() => {
                  onClose();
                  if (onNavigateSection) onNavigateSection("collection");
                }}
                className="btn btn-primary"
              >
                <span>Browse Products & Enquire</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* WhatsApp Enquiry Configuration Preview Dialog */
          <div className="demo-modal-content">
            <div className="demo-modal-icon-wrap whatsapp-icon-accent">
              <MessageCircle size={28} />
            </div>

            <div className="demo-safe-mode-badge">
              <ShieldCheck size={14} />
              <span>Safe Sales Demo Mode Active</span>
            </div>

            <h3 id="demo-modal-title" className="demo-modal-title">
              WhatsApp Enquiry System
            </h3>

            <p className="demo-modal-desc">
              Actual message sending is currently in safe demo mode so no accidental messages are sent before the boutique owner sets their phone number.
            </p>

            {/* Prefilled message preview */}
            <div className="demo-message-preview-box">
              <span className="preview-label">Prefilled Message Generated:</span>
              <p className="preview-text">
                "{config.sampleMessage || BOUTIQUE_CONFIG.whatsapp.defaultMessage}"
              </p>
            </div>

            {/* Configuration instructions */}
            <div className="demo-setup-instructions">
              <div className="instruction-header">
                <Code2 size={16} />
                <strong>How to activate your real WhatsApp number:</strong>
              </div>
              <p className="instruction-body">
                Open <code>src/config/boutiqueConfig.js</code> and update:
              </p>
              <pre className="instruction-code">
{`whatsapp: {
  phoneNumber: "919876543210", // Your 10 or 12 digit WhatsApp number
  isConfigured: true
}`}
              </pre>
              <p className="instruction-footer">
                Once saved, all "Enquire on WhatsApp" buttons across the website will instantly launch direct WhatsApp chats with your customers!
              </p>
            </div>

            <div className="demo-modal-actions">
              <button onClick={onClose} className="btn btn-dark">
                Close & Continue Exploring Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
