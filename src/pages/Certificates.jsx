import { useMemo, useState } from "react";
import CertificateCard from "../components/CertificateCard";
import PageHeader from "../components/PageHeader";
import "../styles/Certificates.css";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";
import { Link } from "react-router-dom";
import { FaFolderOpen, FaDownload, FaEnvelope } from "react-icons/fa";
import { Filter } from "lucide-react";
import {
  certificates,
  certificateCategories,
  certificateYears,
} from "../data/certificates";

const Certificates = () => {
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");

  const filtered = useMemo(() => {
    return certificates
      .filter((cert) => category === "All" || cert.category === category)
      .filter((cert) => year === "All" || cert.date === year)
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [category, year]);

  return (
    <section className="page-certificates max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
      <PageHeader
        title="My Certifications"
        subtitle="Milestones earned through learning, practice, and dedication."
      />

      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 p-4 rounded-xl border border-white/10 bg-[#0f1419]">
        <span className="flex items-center gap-2 text-sm text-slate-400 shrink-0">
          <Filter size={16} className="text-[#8b9cff]" />
          Filter by
        </span>

        <label className="flex flex-col gap-1 flex-1 min-w-[140px]">
          <span className="text-xs text-slate-500 uppercase tracking-wide">Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-white/15 bg-[#151b28] text-sm text-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40"
          >
            {certificateCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 flex-1 min-w-[120px]">
          <span className="text-xs text-slate-500 uppercase tracking-wide">Year</span>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="rounded-lg border border-white/15 bg-[#151b28] text-sm text-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/40"
          >
            {certificateYears.map((y) => (
              <option key={y} value={y}>
                {y === "All" ? "All years" : y}
              </option>
            ))}
          </select>
        </label>

        {(category !== "All" || year !== "All") && (
          <button
            type="button"
            onClick={() => {
              setCategory("All");
              setYear("All");
            }}
            className="text-sm text-[#8b9cff] hover:text-white transition sm:self-end px-2 py-2"
          >
            Clear filters
          </button>
        )}

        <p className="text-xs text-slate-500 sm:ml-auto sm:self-end">
          {filtered.length} certificate{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-slate-400 py-12">No certificates match these filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filtered.map((cert, index) => (
            <CertificateCard key={`${cert.title}-${index}`} {...cert} />
          ))}
        </div>
      )}

      <div className="mt-16 flex flex-col md:flex-row justify-center gap-4 animate-fade-in">
        <Link
          to="/projects"
          className="flex items-center justify-center gap-2
           bg-blue-600 hover:bg-blue-700
           px-6 py-3 rounded-lg font-semibold
           transition text-white
           shadow-md hover:shadow-lg hover:scale-105"
        >
          <FaFolderOpen />
          View My Works
        </Link>

        <a
          href={cvFile}
          download
          className="flex items-center justify-center gap-2
           bg-slate-700 hover:bg-slate-600
           px-6 py-3 rounded-lg font-semibold
           transition text-white
           shadow-md hover:shadow-lg hover:scale-105"
        >
          <FaDownload />
          View CV
        </a>

        <Link
          to="/connect"
          className="flex items-center justify-center gap-2
           border border-blue-500 hover:bg-blue-500
           px-6 py-3 rounded-lg font-semibold
           transition text-white
           shadow-md hover:shadow-lg hover:scale-105"
        >
          <FaEnvelope />
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Certificates;
