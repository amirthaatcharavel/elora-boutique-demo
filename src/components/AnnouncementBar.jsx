import React from "react";
import { Sparkles } from "lucide-react";
import { BOUTIQUE_CONFIG } from "../config/boutiqueConfig";

export default function AnnouncementBar() {
  if (!BOUTIQUE_CONFIG.announcement?.visible) return null;

  return (
    <aside className="announcement-bar" aria-label="Announcement">
      <div className="container announcement-content">
        <Sparkles size={14} className="announcement-icon" aria-hidden="true" />
        <span className="announcement-text">
          {BOUTIQUE_CONFIG.announcement.text}
        </span>
        <Sparkles size={14} className="announcement-icon" aria-hidden="true" />
      </div>
    </aside>
  );
}
