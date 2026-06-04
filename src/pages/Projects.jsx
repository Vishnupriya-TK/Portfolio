import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";
import { Download } from "lucide-react";

const Projects = () => (
  <section className="page-projects px-4 sm:px-8 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
    <PageHeader
      title="My Projects"
      subtitle="A curated collection of projects showcasing my skills, creativity, and problem-solving approach"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          {...project}
          overlayMode={index < 6 ? "full" : "minimal"}
          iconIndex={index}
        />
      ))}
    </div>

    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-3">
      <a href={cvFile} download className="btn-secondary text-sm inline-flex items-center justify-center gap-2">
        Download CV <Download size={16} />
      </a>
      <Link to="/connect" className="btn-outline text-sm text-center">
        Let&apos;s Connect
      </Link>
    </div>
  </section>
);

export default Projects;
