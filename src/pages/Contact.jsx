import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  Sliders,
} from "lucide-react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";
import { useBoutique } from "../context/useBoutique";

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const { handleOpenWhatsAppDemo } = useBoutique();

  const [inquiryType, setInquiryType] = useState("Sizing & Custom Fit");
  const [customerName, setCustomerName] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");

  const isNumberConfigured =
    BOUTIQUE_CONFIG.whatsapp.phoneNumber &&
    BOUTIQUE_CONFIG.whatsapp.phoneNumber.replace(/[^0-9]/g, "").length >= 10;

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    const formattedMsg = `Hello ÉLORA Boutique! My name is ${customerName || "a customer"}. I am enquiring about [${inquiryType}]: ${customerMessage || "I'd love to know more about your collection and available sizes."}`;

    if (isNumberConfigured) {
      const cleanNumber = BOUTIQUE_CONFIG.whatsapp.phoneNumber.replace(/[^0-9]/g, "");
      const link = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(formattedMsg)}`;
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }

    handleOpenWhatsAppDemo({
      title: "Direct Boutique WhatsApp Inquiry",
      sampleMessage: formattedMsg,
      context: "Contact Page Consultation",
    });
  };

  const handleQuickWhatsApp = () => {
    if (isNumberConfigured) {
      const link = BOUTIQUE_CONFIG.whatsapp.getEnquiryLink();
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
        return;
      }
    }
    handleOpenWhatsAppDemo({
      title: "Boutique WhatsApp Concierge",
      sampleMessage: BOUTIQUE_CONFIG.whatsapp.defaultMessage,
      context: "Direct Concierge",
    });
  };

  return (
    <div className="contact-page">
      {/* Editorial Header */}
      <header className="page-editorial-header">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact & Concierge</span>
          </nav>

          <span className="section-eyebrow">
            <Sparkles size={13} aria-hidden="true" />
            <span>Personalized Customer Care</span>
          </span>
          <h1 className="page-editorial-title">Connect with Our Boutique</h1>
          <p className="page-editorial-subtitle">
            Whether you need sizing advice, fabric videos in natural daylight, or store visit appointments, our team is delighted to assist you.
          </p>

          <div className="demo-notice-bar" role="note">
            <ShieldCheck size={16} className="demo-notice-icon" />
            <p className="demo-notice-text">
              <strong>Safe Presentation Mode:</strong> All contact information below consists of clearly marked demo placeholders for Pondicherry. Connect your real WhatsApp number in <code>boutiqueConfig.js</code> when going live.
            </p>
          </div>
        </div>
      </header>

      {/* Main Contact Grid */}
      <section className="section contact-main-section" aria-label="Contact Channels">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Contact Info & Boutique Hours */}
            <div className="contact-info-column">
              <h2 className="contact-section-title">Boutique Storefront</h2>
              <p className="contact-section-subtitle">
                Visit our showroom in Heritage Town, Pondicherry or chat with us online.
              </p>

              <div className="contact-cards-stack">
                {/* Location Card */}
                <div className="contact-detail-card">
                  <div className="contact-card-icon">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-card-body">
                    <h3 className="card-heading">Store Location</h3>
                    <p className="card-text-bold">{BOUTIQUE_CONFIG.contact.addressLine1}</p>
                    <p className="card-text">{BOUTIQUE_CONFIG.contact.addressLine2}</p>
                    <span className="contact-placeholder-tag">
                      {BOUTIQUE_CONFIG.contact.addressNote}
                    </span>
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div className="contact-detail-card">
                  <div className="contact-card-icon">
                    <Clock size={22} />
                  </div>
                  <div className="contact-card-body">
                    <h3 className="card-heading">Visiting Hours</h3>
                    <p className="card-text">{BOUTIQUE_CONFIG.contact.hoursWeekday}</p>
                    <p className="card-text">{BOUTIQUE_CONFIG.contact.hoursSunday}</p>
                    <span className="contact-note-small">
                      Walk-ins welcome during showroom hours
                    </span>
                  </div>
                </div>

                {/* Email Enquiries Card */}
                <div className="contact-detail-card">
                  <div className="contact-card-icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-card-body">
                    <h3 className="card-heading">Direct Email</h3>
                    <p className="card-text-bold">{BOUTIQUE_CONFIG.contact.email}</p>
                    <span className="contact-placeholder-tag">
                      [Demo Contact — Replace with boutique email]
                    </span>
                  </div>
                </div>

                {/* Instagram Showcase Card */}
                <div className="contact-detail-card">
                  <div className="contact-card-icon">
                    <InstagramIcon size={22} />
                  </div>
                  <div className="contact-card-body">
                    <h3 className="card-heading">Social Lookbook</h3>
                    <a
                      href={BOUTIQUE_CONFIG.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-insta-link"
                    >
                      {BOUTIQUE_CONFIG.contact.instagramHandle}
                    </a>
                    <span className="contact-note-small">
                      {BOUTIQUE_CONFIG.contact.instagramNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: WhatsApp Styling Consultation Box */}
            <div className="contact-form-column">
              <div className="whatsapp-inquiry-box">
                <div className="inquiry-box-header">
                  <div className="whatsapp-online-pill">
                    <span className="online-dot" />
                    <span>WhatsApp Concierge</span>
                  </div>
                  <span className={`status-pill ${isNumberConfigured ? "configured" : "safe-mode"}`}>
                    {isNumberConfigured ? "Live WhatsApp Active" : "Safe Demo Mode"}
                  </span>
                </div>

                <h2 className="inquiry-box-title">Start a Styling Consultation</h2>
                <p className="inquiry-box-desc">
                  Tell us what you are looking for. We will prepare custom size measurements and fabric recommendations directly on WhatsApp.
                </p>

                <form onSubmit={handleSubmitInquiry} className="inquiry-form">
                  <div className="form-group">
                    <label htmlFor="customer-name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g., Ananya Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-type" className="form-label">
                      What can we help you with?
                    </label>
                    <select
                      id="inquiry-type"
                      className="form-select"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                    >
                      <option value="Sizing & Custom Fit">Sizing & Custom Fit Assistance</option>
                      <option value="Specific Garment Availability">Check Rack Availability of a Garment</option>
                      <option value="Fabric Drape & Video Request">Request Fabric Video in Natural Daylight</option>
                      <option value="Boutique Visit Appointment">Book a Showroom Styling Visit</option>
                      <option value="Custom Festive Order">Custom Festive Order Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="customer-message" className="form-label">
                      Your Message or Outfit Preference
                    </label>
                    <textarea
                      id="customer-message"
                      rows={3}
                      className="form-textarea"
                      placeholder="e.g., I'm interested in the Floral Cotton Kurta in size M. Does it run true to size?"
                      value={customerMessage}
                      onChange={(e) => setCustomerMessage(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-whatsapp inquiry-submit-btn">
                    <MessageCircle size={18} />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>

                {/* Instant Quick Chat Alternative */}
                <div className="inquiry-instant-row">
                  <span className="instant-label">Or chat immediately:</span>
                  <button
                    type="button"
                    onClick={handleQuickWhatsApp}
                    className="btn btn-outline btn-sm"
                  >
                    <MessageCircle size={15} />
                    <span>Quick Consultation</span>
                  </button>
                </div>

                {/* Setup note for boutique owner */}
                <div className="inquiry-setup-tip">
                  <Sliders size={15} className="tip-icon" />
                  <p>
                    <strong>Boutique Owner Note:</strong> Enter your 10-digit number in <code>boutiqueConfig.js</code> to connect customer inquiries directly to your WhatsApp Business phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
