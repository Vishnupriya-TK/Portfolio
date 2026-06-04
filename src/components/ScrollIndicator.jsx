import { ChevronDown } from "lucide-react";

const ScrollIndicator = ({ targetId = "home-projects" }) => {
  const scrollTo = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center py-8 sm:py-10">
      <button
        type="button"
        onClick={scrollTo}
        aria-label="Scroll to projects"
        className="flex flex-col items-center gap-2 text-slate-500 hover:text-[#8b9cff] transition group"
      >
        <span className="font-scroll-hint text-[10px] uppercase tracking-[0.25em]">
          Scroll Down
        </span>
        <div className="scroll-bounce p-2 rounded-full border border-white/15 bg-white/5 group-hover:border-[#8b9cff]/40">
          <ChevronDown size={22} className="text-[#8b9cff]" />
        </div>
      </button>

      <style>{`
        .scroll-bounce {
          animation: scrollBounce 2s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(8px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ScrollIndicator;
