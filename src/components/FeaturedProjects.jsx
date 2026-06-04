import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../data/projects";

const FeaturedProjects = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
    <p className="font-home-section-label text-xs uppercase tracking-[0.2em] text-[#8b9cff] mb-3">
      My Work
    </p>
    <h2 className="font-home-section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
      <span className="text-white">Featured </span>
      <span className="bg-gradient-to-r from-[#8b9cff] to-violet-400 bg-clip-text text-transparent">
        Projects
      </span>
    </h2>
    <p className="font-home-section-body text-slate-400 max-w-2xl text-sm sm:text-base mb-10 leading-relaxed">
      A selection of my best work showcasing full-stack development, automation tools, and
      problem-solving across real-world applications.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featuredProjects.map((project, i) => (
        <ProjectCard
          key={project.title}
          {...project}
          variant="featured"
          iconIndex={i}
        />
      ))}
    </div>

    <div className="mt-10 flex justify-center">
      <Link
        to="/projects"
        className="btn-primary text-sm inline-flex items-center gap-2 min-w-[200px] justify-center"
      >
        View All Projects <ArrowRight size={16} />
      </Link>
    </div>
  </section>
);

export default FeaturedProjects;
