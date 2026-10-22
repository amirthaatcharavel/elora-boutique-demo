import React from "react";
import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductModal from "./ProductModal";
import DemoNoticeModal from "./DemoNoticeModal";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { useBoutique } from "../context/useBoutique";

export default function Layout() {
  const {
    selectedProduct,
    setSelectedProduct,
    demoModalConfig,
    setDemoModalConfig,
    handleEnquireWhatsApp,
    handleOpenWhatsAppDemo,
  } = useBoutique();

  return (
    <div className="app-root">
      {/* 1. Slim Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Multi-Page Header & Navigation */}
      <Navbar />

      {/* 3. Page Routed Content */}
      <main id="main-content">
        <Outlet />
      </main>

      {/* 4. Shared Footer */}
      <Footer />

      {/* Quick View / Detail Product Modal (Accessible across all pages) */}
      {selectedProduct && (
        <ProductModal
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onEnquireWhatsApp={handleEnquireWhatsApp}
        />
      )}

      {/* Demo Guidance Modal (Safe WhatsApp & Shopping Bag Info) */}
      {demoModalConfig && (
        <DemoNoticeModal
          config={demoModalConfig}
          onClose={() => setDemoModalConfig(null)}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenWhatsAppDemo={handleOpenWhatsAppDemo} />
    </div>
  );
}
