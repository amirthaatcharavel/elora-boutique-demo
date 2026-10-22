import React from "react";
import { MessageCircle } from "lucide-react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";

export default function FloatingWhatsApp({ onOpenWhatsAppDemo }) {
  const isNumberConfigured =
    BOUTIQUE_CONFIG.whatsapp.phoneNumber &&
    BOUTIQUE_CONFIG.whatsapp.phoneNumber.replace(/[^0-9]/g, "").length >= 10;

  const handleClick = () => {
    if (isNumberConfigured) {
      const link = BOUTIQUE_CONFIG.whatsapp.getEnquiryLink();
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
        return;
      }
    }
    onOpenWhatsAppDemo({
      title: "WhatsApp Styling & Order Assistant",
      sampleMessage: BOUTIQUE_CONFIG.whatsapp.defaultMessage,
      context: "Direct boutique chat",
    });
  };

  return (
    <div className="floating-whatsapp-container">
      <button
        onClick={handleClick}
        className="floating-whatsapp-btn"
        aria-label="Enquire on WhatsApp with ÉLORA boutique"
        title="Chat with ÉLORA Boutique on WhatsApp"
      >
        <span className="floating-pulse-ring" aria-hidden="true" />
        <MessageCircle size={28} className="floating-icon" />
        <span className="floating-tooltip">Enquire on WhatsApp</span>
      </button>
    </div>
  );
}
