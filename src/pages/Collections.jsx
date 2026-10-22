import React, { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Sparkles, Info, RefreshCw } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";
import { useBoutique } from "../context/useBoutique";

const CATEGORY_TABS = [
  "All Styles",
  "Ethnic Wear",
  "Dresses",
  "Co-ord Sets",
  "Everyday Essentials",
];

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setSelectedProduct, handleEnquireWhatsApp } = useBoutique();

  // Active category derived from URL search params or defaults to "All Styles"
  const currentCategory = searchParams.get("category") || "All Styles";

  const handleSelectTab = (tab) => {
    if (tab === "All Styles") {
      setSearchParams({});
    } else {
      setSearchParams({ category: tab });
    }
  };

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (!currentCategory || currentCategory === "All Styles") {
      return PRODUCTS;
    }
    return PRODUCTS.filter(
      (prod) => prod.category.toLowerCase() === currentCategory.toLowerCase()
    );
  }, [currentCategory]);

  return (
    <div className="collections-page">
      {/* Editorial Page Header */}
      <header className="page-editorial-header">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Collections</span>
          </nav>

          <span className="section-eyebrow">
            <Sparkles size={13} aria-hidden="true" />
            <span>Complete Catalogue</span>
          </span>
          <h1 className="page-editorial-title">The Boutique Collection</h1>
          <p className="page-editorial-subtitle">
            Thoughtfully curated handloom kurtas, airy linen midis, and modern co-ord silhouettes crafted for timeless comfort.
          </p>

          {/* Demo Notice Banner */}
          <div className="demo-notice-bar" role="note">
            <Info size={16} className="demo-notice-icon" />
            <p className="demo-notice-text">
              <strong>Illustrative Demo Preview:</strong> All garments, INR pricing, and specifications are sample representations for this boutique sales demonstration.
            </p>
          </div>
        </div>
      </header>

      {/* Main Catalog Section */}
      <section className="section catalog-content-section" aria-label="Product Catalogue">
        <div className="container">
          {/* Category Filter Tabs Bar */}
          <div className="collection-filter-bar">
            <div className="filter-tabs-wrapper" role="tablist" aria-label="Filter products by category">
              {CATEGORY_TABS.map((tab) => {
                const isSelected =
                  (!currentCategory && tab === "All Styles") ||
                  currentCategory.toLowerCase() === tab.toLowerCase();

                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectTab(tab)}
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

          {/* Product Grid or Friendly Empty State */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={setSelectedProduct}
                  onEnquireWhatsApp={handleEnquireWhatsApp}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state-box">
              <div className="empty-state-icon">🌸</div>
              <h2 className="empty-state-title">No styles found in this category</h2>
              <p className="empty-state-desc">
                We are currently curating more designs for this edit. Check out our other collections or enquire directly on WhatsApp for bespoke sizing.
              </p>
              <button
                type="button"
                onClick={() => handleSelectTab("All Styles")}
                className="btn btn-primary"
              >
                <RefreshCw size={15} />
                <span>Reset to All Styles</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
