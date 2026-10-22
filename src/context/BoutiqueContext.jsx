import React, { useState, useCallback } from "react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";
import { BoutiqueContext } from "./BoutiqueContextInstance";

export function BoutiqueProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [demoModalConfig, setDemoModalConfig] = useState(null);

  // WhatsApp Enquiry action handler
  const handleEnquireWhatsApp = useCallback((product) => {
    const cleanNumber = (BOUTIQUE_CONFIG.whatsapp.phoneNumber || "").replace(/[^0-9]/g, "");
    const isConfigured = cleanNumber.length >= 10;

    if (isConfigured) {
      const link = BOUTIQUE_CONFIG.whatsapp.getEnquiryLink(
        product?.name,
        product?.formattedPrice
      );
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
        return;
      }
    }

    // Unconfigured safe demo mode: show informative preview modal
    const sampleMessage = product
      ? `Hello! I would like to enquire about the "${product.name}" (${product.formattedPrice || 'Sample Price'}) from ÉLORA boutique. Is size ${product.chosenSize || 'M'} available?`
      : BOUTIQUE_CONFIG.whatsapp.defaultMessage;

    setDemoModalConfig({
      type: "whatsapp",
      product,
      sampleMessage,
    });
  }, []);

  // Shopping bag click handler
  const handleOpenBagModal = useCallback(() => {
    setDemoModalConfig({
      type: "bag",
    });
  }, []);

  // General WhatsApp demo popup
  const handleOpenWhatsAppDemo = useCallback((info = {}) => {
    setDemoModalConfig({
      type: "whatsapp",
      sampleMessage: info.sampleMessage || BOUTIQUE_CONFIG.whatsapp.defaultMessage,
      title: info.title || "WhatsApp Consultation",
    });
  }, []);

  const closeModals = useCallback(() => {
    setSelectedProduct(null);
    setDemoModalConfig(null);
  }, []);

  const value = {
    selectedProduct,
    setSelectedProduct,
    demoModalConfig,
    setDemoModalConfig,
    handleEnquireWhatsApp,
    handleOpenBagModal,
    handleOpenWhatsAppDemo,
    closeModals,
  };

  return (
    <BoutiqueContext.Provider value={value}>
      {children}
    </BoutiqueContext.Provider>
  );
}
