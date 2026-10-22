import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";
import { useBoutique } from "../context/useBoutique";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleOpenBagModal } = useBoutique();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? "navbar-scrolled" : ""}`}>
      <nav className="container navbar-nav" aria-label="Main Navigation">
        {/* Mobile menu hamburger toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Wordmark (Navigates to Home) */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="navbar-brand"
          aria-label={`${BOUTIQUE_CONFIG.brandName} Home`}
        >
          <span className="navbar-brand-name">{BOUTIQUE_CONFIG.brandName}</span>
          <span className="navbar-brand-tagline">{BOUTIQUE_CONFIG.brandSubtitle}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links" role="list">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collections"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-arrivals"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              New Arrivals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Action Cluster */}
        <div className="navbar-actions">
          {/* Shopping bag visual element */}
          <button
            className="navbar-icon-btn"
            onClick={handleOpenBagModal}
            title="Boutique order & sizing inquiries"
            aria-label="View shopping bag / order information"
          >
            <ShoppingBag size={21} />
            <span className="bag-badge" aria-hidden="true">0</span>
          </button>

          {/* Prominent Explore Collection Button */}
          <Link
            to="/collections"
            className="btn btn-primary btn-sm navbar-cta"
            aria-label="Explore Collection"
          >
            <span>Explore Collection</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      <div
        className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile menu"
      >
        <div className="mobile-drawer-header">
          <Link to="/" onClick={closeMobileMenu} className="mobile-drawer-brand">
            <span className="navbar-brand-name">{BOUTIQUE_CONFIG.brandName}</span>
            <span className="navbar-brand-tagline">{BOUTIQUE_CONFIG.brandSubtitle}</span>
          </Link>
          <button
            className="mobile-drawer-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-drawer-links" role="list">
          <li>
            <NavLink
              to="/"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collections"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-arrivals"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              New Arrivals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Boutique
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact & WhatsApp
            </NavLink>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <Link
            to="/collections"
            onClick={closeMobileMenu}
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>Explore Collection</span>
            <ArrowRight size={16} />
          </Link>

          <p className="mobile-drawer-note">
            📍 Heritage Town, Pondicherry (Demo Location)
          </p>
        </div>
      </div>
    </header>
  );
}
