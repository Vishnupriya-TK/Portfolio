import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaCalendarAlt, FaCertificate } from "react-icons/fa";

const CertificateCard = ({ title, platform, date, desc, image, link }) => {
  return (
    <div className="certificate-card p-6 md:p-7 rounded-2xl 
    bg-slate-900 border border-slate-700 
    shadow-md transition duration-300 
    hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20">

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-56 md:h-64 object-cover 
          transition duration-500 hover:scale-110"
        />

        {/* ICON */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 
          bg-black/60 backdrop-blur-md 
          p-2 rounded-full text-white 
          hover:bg-blue-600 transition"
          title="Open Certificate"
        >
          <FiExternalLink />
        </a>
      </div>

      {/* TITLE */}
      <h3 className="text-xl md:text-2xl font-semibold mt-5 text-blue-400">
        {title}
      </h3>

      {/* PLATFORM + DATE */}
      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm md:text-base">

        <span className="flex items-center gap-2 text-purple-400">
          <FaCertificate />
          {platform}
        </span>

        <span className="flex items-center gap-2 text-cyan-400">
          <FaCalendarAlt />
          {date}
        </span>

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed">
        {desc}
      </p>

    </div>
  );
};

export default CertificateCard;