import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "../data/categories";

export default function CategorySection() {
  return (
    <section id="categories" className="section categories-section" aria-label="Shop by Category">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Curated Edits</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Explore handpicked silhouettes crafted for modern grace, festive occasions, and everyday luxury.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/collections?category=${encodeURIComponent(cat.filterKey)}`}
              className="category-card"
              aria-label={`View ${cat.name} collection`}
            >
              <div className="category-image-wrap">
                <img
                  src={cat.image}
                  alt={`Boutique collection: ${cat.name}`}
                  className="category-image"
                  loading="lazy"
                />
                <div className="category-overlay" />
                
                {/* Category Badge */}
                <div className="category-badge-wrap">
                  <span className="badge badge-rose">{cat.badge}</span>
                </div>
              </div>

              <div className="category-info">
                <div className="category-meta">
                  <span className="category-count">{cat.itemCount}</span>
                  <div className="category-icon-arrow" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h3 className="category-name">{cat.name}</h3>
                <p className="category-desc">{cat.description}</p>
                
                <span className="category-action-link">
                  Explore {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
