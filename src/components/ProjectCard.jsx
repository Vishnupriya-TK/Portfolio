// import { useState } from "react";
// import { FaGithub } from "react-icons/fa";
// import { ExternalLink, Play, Globe, Monitor, Layers, Code2 } from "lucide-react";

// const cardIcons = [Globe, Monitor, Layers, Code2];

// const btnBase =
//   "inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#1a2234] border border-white/15 text-white min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 transition-all duration-200 touch-manipulation hover:scale-[1.03] active:scale-[0.97]";

// const btnHover = {
//   live: "hover:bg-blue-600 hover:border-blue-500 active:bg-blue-700 focus-visible:bg-blue-600",
//   demo: "hover:bg-[#7c3aed] hover:border-violet-400 active:bg-[#6d28d9] focus-visible:bg-[#7c3aed] hover:shadow-lg hover:shadow-violet-900/40",
//   github: "hover:bg-slate-600 hover:border-slate-400 active:bg-slate-700 focus-visible:bg-slate-600",
// };

// export const ActionButtons = ({ github, demo, live, includeDemo, className = "" }) => (
//   <div
//     className={`flex flex-wrap items-center justify-center sm:justify-center gap-2 sm:gap-3 w-full ${className}`}
//   >
//     {live && (
//       <a
//         href={live}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`${btnBase} ${btnHover.live}`}
//         aria-label="Open live site"
//       >
//         <ExternalLink size={16} className="shrink-0" aria-hidden />
//         <span>Live</span>
//       </a>
//     )}
//     {includeDemo && demo && (
//       <a
//         href={demo}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`${btnBase} ${btnHover.demo}`}
//         aria-label="Open demo"
//       >
//         <Play size={16} className="shrink-0" aria-hidden />
//         <span>Demo</span>
//       </a>
//     )}
//     {github && (
//       <a
//         href={github}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`${btnBase} ${btnHover.github}`}
//         aria-label="View on GitHub"
//       >
//         <FaGithub size={16} className="shrink-0" aria-hidden />
//         <span>GitHub</span>
//       </a>
//     )}
//   </div>
// );

// const ProjectCard = ({
//   title,
//   image,
//   description,
//   tech,
//   live,
//   demo,
//   github,
//   variant = "showcase",
//   overlayMode = false,
//   iconIndex = 0,
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const Icon = cardIcons[iconIndex % cardIcons.length];
//   const isFeatured = variant === "featured";
//   const showHoverActions = overlayMode === "full" || overlayMode === "minimal";
//   const includeDemo = overlayMode === "full" || isFeatured;

//   return (
//     <article
//       className="project-showcase-card group h-full flex flex-col rounded-2xl overflow-hidden
//         bg-[#0a0e14] border border-white/10 transition-all duration-300
//         hover:border-[#8b5cf6]/40 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)]"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onFocus={() => setHovered(true)}
//       onBlur={() => setHovered(false)}
//       tabIndex={showHoverActions ? 0 : undefined}
//     >
//       {!isFeatured && (
//         <div className="relative overflow-hidden aspect-[16/10] bg-[#111827]">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
//           />

//           {showHoverActions && (
//             <div
//               className={`absolute inset-0 flex items-end justify-center pb-4 px-3
//                 bg-gradient-to-t from-black/90 via-black/45 to-transparent
//                 transition-opacity duration-300 pointer-events-none
//                 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto
//                 focus-within:opacity-100 focus-within:pointer-events-auto
//                 [@media(hover:none)]:opacity-100 [@media(hover:none)]:pointer-events-auto
//                 ${hovered ? "!opacity-100 !pointer-events-auto" : ""}`}
//             >
//               <ActionButtons
//                 github={github}
//                 demo={demo}
//                 live={live}
//                 includeDemo={includeDemo}
//               />
//             </div>
//           )}
//         </div>
//       )}

//       <div className={`flex flex-col flex-grow text-left ${isFeatured ? "p-5 sm:p-6" : "p-4 sm:p-5"}`}>
//         <div className="flex items-start gap-3 mb-3">
//           <div
//             className={`rounded-lg bg-[#151b28] border border-white/10 flex items-center justify-center shrink-0
//               ${isFeatured ? "w-10 h-10 sm:w-11 sm:h-11" : "w-8 h-8 mt-0.5"}`}
//           >
//             <Icon size={isFeatured ? 20 : 16} className="text-[#8b9cff]" />
//           </div>
//           <div className="flex flex-wrap gap-1.5 flex-1">
//             {tech.map((item) => (
//               <span
//                 key={item}
//                 className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wide text-[#7dd3fc]
//                   border border-[#38bdf8]/25 px-2 py-0.5 rounded"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>

//         <h3 className="text-lg sm:text-xl font-semibold text-[#a78bfa] mb-2 leading-snug">
//           {title}
//         </h3>

//         <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 flex-grow">
//           {description}
//         </p>

//         {isFeatured && (
//           <ActionButtons
//             github={github}
//             demo={demo}
//             live={live}
//             includeDemo
//             className="mt-4 pt-3 border-t border-white/10 justify-start sm:justify-start"
//           />
//         )}
//       </div>
//     </article>
//   );
// };

// export default ProjectCard;
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  ExternalLink,
  Play,
  Globe,
  Monitor,
  Layers,
  Code2,
} from "lucide-react";

const cardIcons = [Globe, Monitor, Layers, Code2];

const btnBase =
  "inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#1a2234] border border-white/15 text-white min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 transition-all duration-200 touch-manipulation hover:scale-[1.03] active:scale-[0.97]";

const btnHover = {
  live:
    "hover:bg-blue-600 hover:border-blue-500 active:bg-blue-700 focus-visible:bg-blue-600",
  demo:
    "hover:bg-[#7c3aed] hover:border-violet-400 active:bg-[#6d28d9] focus-visible:bg-[#7c3aed]",
  github:
    "hover:bg-slate-600 hover:border-slate-400 active:bg-slate-700 focus-visible:bg-slate-600",
};

export const ActionButtons = ({
  github,
  demo,
  live,
  includeDemo,
  className = "",
}) => (
  <div
    className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full ${className}`}
    onClick={(e) => e.stopPropagation()}
  >
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} ${btnHover.live}`}
      >
        <ExternalLink size={16} />
        <span>Live</span>
      </a>
    )}

    {includeDemo && demo && (
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} ${btnHover.demo}`}
      >
        <Play size={16} />
        <span>Demo</span>
      </a>
    )}

    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} ${btnHover.github}`}
      >
        <FaGithub size={16} />
        <span>GitHub</span>
      </a>
    )}
  </div>
);

const ProjectCard = ({
  title,
  image,
  description,
  tech,
  live,
  demo,
  github,
  variant = "showcase",
  overlayMode = false,
  iconIndex = 0,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const Icon = cardIcons[iconIndex % cardIcons.length];
  const isFeatured = variant === "featured";
  const showHoverActions =
    overlayMode === "full" || overlayMode === "minimal";
  const includeDemo = overlayMode === "full" || isFeatured;

  const handleCardClick = () => {
    if (window.innerWidth < 768) {
      setMobileOpen((prev) => !prev);
    }
  };

  return (
    <article
      className="project-showcase-card group h-full flex flex-col rounded-2xl overflow-hidden bg-[#0a0e14] border border-white/10 transition-all duration-300 hover:border-[#8b5cf6]/40 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)]"
      onClick={handleCardClick}
    >
      {!isFeatured && (
        <div className="relative overflow-hidden aspect-[16/10] bg-[#111827]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />

          {showHoverActions && (
            <div
              className={`
                absolute inset-0 flex items-end justify-center pb-4 px-3
                bg-gradient-to-t from-black/90 via-black/45 to-transparent
                transition-opacity duration-300

                ${
                  mobileOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }

                md:opacity-0
                md:group-hover:opacity-100
                md:group-hover:pointer-events-auto
              `}
            >
              <ActionButtons
                github={github}
                demo={demo}
                live={live}
                includeDemo={includeDemo}
              />
            </div>
          )}
        </div>
      )}

      <div
        className={`flex flex-col flex-grow text-left ${
          isFeatured ? "p-5 sm:p-6" : "p-4 sm:p-5"
        }`}
      >
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`rounded-lg bg-[#151b28] border border-white/10 flex items-center justify-center shrink-0 ${
              isFeatured
                ? "w-10 h-10 sm:w-11 sm:h-11"
                : "w-8 h-8 mt-0.5"
            }`}
          >
            <Icon
              size={isFeatured ? 20 : 16}
              className="text-[#8b9cff]"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 flex-1">
            {tech.map((item) => (
              <span
                key={item}
                className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wide text-[#7dd3fc] border border-[#38bdf8]/25 px-2 py-0.5 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-[#a78bfa] mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 flex-grow">
          {description}
        </p>

        {isFeatured && (
          <ActionButtons
            github={github}
            demo={demo}
            live={live}
            includeDemo
            className="mt-4 pt-3 border-t border-white/10 justify-start"
          />
        )}
      </div>
    </article>
  );
};

export default ProjectCard;