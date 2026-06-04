import SkillCategoryCard from "../components/SkillCategoryCard";
import CodingJourney from "../components/CodingJourney";
import CodingProfiles from "../components/CodingProfiles";
import PageHeader from "../components/PageHeader";
import { Layout, Database, Code2, Server, Wrench, Rocket } from "lucide-react";

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend Engineering",
    description: "Build polished web interfaces with modern UI.",
    skills: ["REACT.JS", "JAVASCRIPT", "HTML5", "CSS3", "TAILWIND CSS"],
    accent: "blue",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "Ship APIs and backend services that scale.",
    skills: ["NODE.JS", "EXPRESS.JS", "REST API", "MONGODB", "MONGOOSE"],
    accent: "green",
  },
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Core languages for apps, logic, and problem solving.",
    skills: ["JAVA", "C", "JAVASCRIPT", "PYTHON", "SQL"],
    accent: "purple",
  },
  {
    icon: Server,
    title: "APIs & Integrations",
    description: "Connect services, auth flows, and third-party tools.",
    skills: ["RESTFUL APIS", "EMAILJS", "GEMINI API", "CLOUDINARY", "AXIOS"],
    accent: "orange",
  },
  {
    icon: Wrench,
    title: "Tools & Developer Utilities",
    description: "Workflow, version control, and API testing.",
    skills: ["GIT", "GITHUB", "POSTMAN", "VS CODE", "FIGMA"],
    accent: "cyan",
  },
  {
    icon: Rocket,
    title: "Deployment & Hosting",
    description: "Ship and host projects reliably in production.",
    skills: ["VERCEL", "RENDER", "GITHUB PAGES"],
    accent: "pink",
  },
];

const Skills = () => {
  return (
    <section className="page-skills min-h-screen px-5 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20 text-slate-200">
      <div className="max-w-6xl mx-auto" style={{ animation: "fadeUp 0.9s ease forwards" }}>
        <PageHeader
          title="My Skills"
          subtitle="Technologies and tools I use to design, build, and ship full-stack applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              style={{
                animation: "fadeUp 0.7s ease forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <SkillCategoryCard {...category} />
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <CodingJourney />
        </div>

        <div className="mt-16 sm:mt-20">
          <CodingProfiles />
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
