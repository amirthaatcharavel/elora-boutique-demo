import React from "react";
import { MessageCircle, CheckCircle2, Sliders, ShieldCheck, Clock } from "lucide-react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";

export default function WhatsAppSection({ onOpenWhatsAppDemo }) {
  const isNumberConfigured =
    BOUTIQUE_CONFIG.whatsapp.phoneNumber &&
    BOUTIQUE_CONFIG.whatsapp.phoneNumber.replace(/[^0-9]/g, "").length >= 10;

  const handleGeneralEnquiry = () => {
    if (isNumberConfigured) {
      const link = BOUTIQUE_CONFIG.whatsapp.getEnquiryLink();
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
        return;
      }
    }
    // Safe placeholder mode: open demo explanation modal
    onOpenWhatsAppDemo({
      title: "Boutique WhatsApp Consultation",
      sampleMessage: BOUTIQUE_CONFIG.whatsapp.defaultMessage,
      context: "General styling & availability enquiry",
    });
  };

  return (
    <section id="whatsapp-section" className="section whatsapp-section" aria-label="WhatsApp Styling Consultation">
      <div className="container">
        <div className="whatsapp-box">
          <div className="whatsapp-box-pattern" aria-hidden="true" />
          
          <div className="whatsapp-grid">
            {/* Left Content */}
            <div className="whatsapp-content">
              <div className="whatsapp-pill">
                <span className="whatsapp-online-dot" />
                <span>Personal Styling & Order Assistance</span>
              </div>

              <h2 className="whatsapp-title">
                Shop with Direct WhatsApp Assistance
              </h2>

              <p className="whatsapp-desc">
                Unsure about your exact fit or want to see the fabric drape in natural daylight? Our boutique team is just a message away. Connect directly for bespoke size recommendations, product inquiries, and seamless ordering.
              </p>

              {/* Consultation Features */}
              <div className="whatsapp-features-list">
                <div className="whatsapp-feature-item">
                  <CheckCircle2 size={19} className="feature-check" />
                  <div>
                    <h3 className="feature-heading">Personalized Sizing Guidance</h3>
                    <p className="feature-text">Share your measurements for tailored sizing advice before placing an order.</p>
                  </div>
                </div>

                <div className="whatsapp-feature-item">
                  <CheckCircle2 size={19} className="feature-check" />
                  <div>
                    <h3 className="feature-heading">Real-Time Stock & Color Availability</h3>
                    <p className="feature-text">Check instant rack availability for current in-store editions.</p>
                  </div>
                </div>

                <div className="whatsapp-feature-item">
                  <CheckCircle2 size={19} className="feature-check" />
                  <div>
                    <h3 className="feature-heading">Doorstep Courier Delivery</h3>
                    <p className="feature-text">Enjoy fast, carefully packed boutique shipping across India.</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="whatsapp-cta-block">
                <button
                  type="button"
                  onClick={handleGeneralEnquiry}
                  className="btn btn-whatsapp whatsapp-main-btn"
                  aria-label="Connect on WhatsApp"
                >
                  <MessageCircle size={20} />
                  <span>Connect on WhatsApp</span>
                </button>

                <div className="whatsapp-hours-note">
                  <Clock size={14} />
                  <span>Available {BOUTIQUE_CONFIG.contact.hoursWeekday}</span>
                </div>
              </div>
            </div>

            {/* Right Configuration / Demo Preview Card */}
            <div className="whatsapp-config-card">
              <div className="config-card-header">
                <div className="config-card-badge">
                  <Sliders size={14} />
                  <span>Boutique Sales Setup</span>
                </div>
                <span className={`status-pill ${isNumberConfigured ? "configured" : "safe-mode"}`}>
                  {isNumberConfigured ? "Live Number Active" : "Safe Demo Mode"}
                </span>
              </div>

              <h3 className="config-card-title">
                How WhatsApp Ordering Works For Your Boutique
              </h3>

              <p className="config-card-desc">
                Unlike complex e-commerce carts with abandoned checkouts, direct WhatsApp enquiries build lasting personal relationships and maximize boutique conversion rates.
              </p>

              <div className="config-step-box">
                <div className="step-num">1</div>
                <div className="step-info">
                  <strong>Shopper clicks "Enquire"</strong>
                  <p>A personalized message with the exact dress name and price is prefilled automatically.</p>
                </div>
              </div>

              <div className="config-step-box">
                <div className="step-num">2</div>
                <div className="step-info">
                  <strong>You receive the chat directly</strong>
                  <p>Answer size questions, confirm payment via UPI/GPay, and take customer address.</p>
                </div>
              </div>

              <div className="config-step-box">
                <div className="step-num">3</div>
                <div className="step-info">
                  <strong>One-click configuration</strong>
                  <p>Store owner enters their 10-digit number in <code>boutiqueConfig.js</code> to go live instantly.</p>
                </div>
              </div>

              <div className="config-demo-instruction">
                <ShieldCheck size={16} className="instruction-icon" />
                <span>
                  Currently in safe presentation mode. No accidental messages are sent until your boutique number is set.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
