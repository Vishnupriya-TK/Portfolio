import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  image,
  description,
  tech,
  live,
  github,
  span,
}) => {
  return (
    <div className={`project-card ${span ? "span-two" : ""}`}>
      <img src={image} alt={title} className="project-image" />

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="tech-stack">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div className="project-buttons">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="btn live"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="btn github"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
