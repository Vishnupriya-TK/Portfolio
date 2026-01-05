import React from "react";
import { FiExternalLink } from "react-icons/fi";

const CertificateCard = ({ title, platform, date, desc, image, link }) => {
  return (
    <div className="certificate-card">
      
      {/* IMAGE + ICON */}
      <div className="certificate-image">
        <img src={image} alt={title} />

        {/* ICON CLICK → REDIRECT */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="open-icon"
          title="Open Certificate"
        >
          <FiExternalLink />
        </a>
      </div>

      {/* CONTENT */}
      <h3>{title}</h3>
      <p className="certificate-meta">
        {platform} • {date}
      </p>
      <p className="certificate-desc">{desc}</p>
    </div>
  );
};

export default CertificateCard;
