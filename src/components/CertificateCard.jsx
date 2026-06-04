import { FiExternalLink } from "react-icons/fi";
import { FaCalendarAlt, FaCertificate } from "react-icons/fa";

const CertificateCard = ({ title, platform, date, desc, image, link, category }) => {
  return (
    <div className="surface-card p-5 sm:p-6 transition duration-300 hover:-translate-y-1 relative">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-44 sm:h-48 object-cover transition duration-500 hover:scale-105"
        />

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md p-2 rounded-full text-white hover:bg-blue-600 transition"
          title="Open Certificate"
        >
          <FiExternalLink size={16} />
        </a>
      </div>

      <div className="flex items-center justify-between gap-3 mt-4 min-w-0">
        <h3 className="text-lg font-semibold text-[#74b9ff] truncate">{title}</h3>
        {category && (
          <span className="shrink-0 text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wide text-right">
            {category}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm">
        <span className="flex items-center gap-1.5 text-violet-400">
          <FaCertificate size={12} />
          {platform}
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400">
          <FaCalendarAlt size={12} />
          {date}
        </span>
      </div>

      <p className="text-slate-400 text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
  );
};

export default CertificateCard;
