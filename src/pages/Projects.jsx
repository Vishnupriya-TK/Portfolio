import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";
import { Download } from "lucide-react";

// Images
import BrainBattle from "../Projects/BrainBattle.png";
import Ecertificate from "../Projects/Ecertificate.png";
import Placement from "../Projects/Placement.png";
import Portfolio from "../Projects/Portfolio.png";
import Quizapp from "../Projects/Quizapp.png";
import Taskflow from "../Projects/Taskflow.png";
import Traveltales from "../Projects/TravelTales.png";
import SPS from "../Projects/SPS.png";
import Wordpress from "../Projects/wp.png";
import Zoho from "../Projects/Zoho.png";

const Projects = () => {
  const projects = [
    {
      title: "BrainBattle",
      image: BrainBattle,
      description:
        "BrainBattle is a full-stack, role-based quiz application built using MERN Stack. It allows admins to create quizzes and users to take quizzes, view scores, and compete on leaderboards.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://brainbattle-nb8x.onrender.com/",
      github: "https://github.com/Vishnupriya-TK/BrainBattle.git",
    },
    {
      title: "E-Certificate Generator",
      image: Ecertificate,
      description:
        "A web application that automates personalized certificate generation from user data, ensuring consistency and reducing manual effort.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Puppeteer",
        "Tailwind",
        "html2canvas",
        "jsPDF",
        "PapaParse",
      ],
      live: "https://ecertificate-generator-frontend.onrender.com/",
      github: "https://github.com/Vishnupriya-TK/ECertificate-Generator.git",
    },
    {
      title: "TaskFlow",
      image: Taskflow,
      description:
        "TaskFlow is a full-stack task management application built using MERN Stack.",
      tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind"],
      live: "https://task-flow-jj39.onrender.com/",
      github: "https://github.com/Vishnupriya-TK/TaskFlow.git",
    },
    {
      title: "TravelTales",
      image: Traveltales,
      description:
        "TravelTales is a MERN web application to share travel stories with images, likes, and comments.",
      tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind"],
      live: "https://traveltales-mgk9.onrender.com/",
      github: "https://github.com/Vishnupriya-TK/TravelTales.git",
    },
    {
      title: "VP Portfolio",
      image: Portfolio,
      description:
        "A modern personal portfolio showcasing skills, projects, and coding journey.",
      tech: ["React", "Vite", "CSS", "Tailwind", "emailjs", "Framer Motion"],
      live: "https://portfolio-roan-alpha-13.vercel.app/",
      github: "https://github.com/Vishnupriya-TK/Portfolio.git",
    },
    {
      title: "VCET Academic Management System",
      image: SPS,
      description:
        "A full-stack academic management platform designed for Velammal College of Engineering and Technology (VCET) to streamline student academic tracking, mentor monitoring, and class performance analytics.",
      tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      live: "https://drive.google.com/file/d/1cZ0_Mq6qB6380akk8LKw0z8hQaYS_vwv/view?usp=drive_link",
      github: "https://github.com/Vishnupriya-TK/VCET-STUDENT-PERFORMANCE-TRACKING-SYSTEM.git",
    },
    {
      title: "Course Advisor Chatbot (Zoho SalesIQ)",
      image: Zoho,
      description:
        "An interactive chatbot built using Zoho SalesIQ Codeless Bot Builder.",
      tech: ["Zoho CRM", "API", "Automation"],
      live: "https://courseadvisor.zohosites.com/",
      github: "https://github.com/Vishnupriya-TK/Zoho-SalesIQ-Course_Advisor.git",
    },
    {
      title: "Placement Information Hub",
      image: Placement,
      description:
        "An offline-friendly placement tracker using localStorage.",
      tech: ["HTML", "CSS", "JavaScript", "localStorage"],
      live: "https://placement-information-hub.vercel.app/",
      github: "https://github.com/Vishnupriya-TK/Placement-Information-Hub.git",
    },
    {
      title: "QuizQuest",
      image: Quizapp,
      description:
        "A pure HTML, CSS, and JavaScript quiz application.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://quizapp-chi-six.vercel.app/",
      github: "https://github.com/Vishnupriya-TK/quizapp.git",
    },
    {
      title: "WhatsApp Clone (UI/UX)",
      image: Wordpress,
      description:
        "A realistic WhatsApp mobile UI designed in Figma.",
      tech: ["Figma", "UI/UX Design", "Material Icons"],
      live: "https://www.figma.com/design/WyxQKyAGgNdUL7zFHaxI3Q/WhatsApp-Clone?node-id=0-1&t=hpQi1tsj8n5s4Eys-1",
      github: "https://github.com/Vishnupriya-TK/WhatsApp-Clone.git",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-widest">
        My Projects
      </h2>

      <p className="text-center mb-16 text-lg">
        A curated collection of projects showcasing my skills, creativity, and problem-solving approach
      </p>

      {/* Projects Grid */}
      <section className="max-w-5xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      </section>
      {/* CTA Buttons BELOW projects */}
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-4 ">
        <a
          href={cvFile}
          download
          className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition text-center shadow-md flex items-center justify-center gap-2"
        >
          Download CV <Download size={18} />
        </a>


        <Link
          to="/connect"
          className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition text-center"
        >
          Let's Connect
        </Link>
      </div>
    </section>
  );
};

export default Projects;
