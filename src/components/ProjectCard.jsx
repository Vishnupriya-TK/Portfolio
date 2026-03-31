import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  image,
  description,
  tech,
  live,
  github,
}) => {
  return (
    <div className="h-full flex flex-col justify-between 
    rounded-3xl overflow-hidden
    bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]
    border border-slate-700 
    shadow-xl transition duration-500
    hover:-translate-y-2 hover:shadow-blue-500/20">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 md:h-64 object-cover 
          transition duration-500 hover:scale-110"
        />

        {/* Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow text-center">

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5 flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs md:text-sm
              bg-blue-900/40 border border-blue-500/30 text-blue-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-auto">

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 
              px-5 py-2.5 rounded-xl text-sm md:text-base font-medium
              bg-blue-600 hover:bg-blue-700 
              transition shadow-md hover:shadow-blue-500/30"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 
              px-5 py-2.5 rounded-xl text-sm md:text-base font-medium
              border border-blue-500 text-blue-300
              hover:bg-blue-500 hover:text-white
              transition shadow-md hover:shadow-blue-500/30"
            >
              <FaGithub />
              GitHub
            </a>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;