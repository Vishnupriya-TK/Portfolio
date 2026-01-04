import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";
import BrainBattle from "../Projects/BrainBattle.png";
import Ecertificate from "../Projects/Ecertificate.png";
import Placement from "../Projects/Placement.png";
import Portfolio from "../Projects/Portfolio.png";
import Quizapp from "../Projects/Quizapp.png";
import Taskflow from "../Projects/Taskflow.png";
import Traveltales from "../Projects/TravelTales.png";
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
      tech: ["React", "Node.js", "MongoDB", "Express", "Puppeteer", "Tailwind", "html2canvas", "jsPDF", "PapaParse"],
      live: "https://ecertificate-generator-frontend.onrender.com/",
      github: "https://github.com/Vishnupriya-TK/ECertificate-Generator.git",
    },
    {
      title: "TaskFlow",
      image: Taskflow,
      description:
        "TaskFlow is a full-stack task management application built using MERN Stack. It allows users to create, update, filter, and delete tasks with features like marking tasks as important or favorite.",
      tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind"],
      live: "https://task-flow-jj39.onrender.com/",
      github: "https://github.com/Vishnupriya-TK/TaskFlow.git",
    },
    {
      title: "TravelTales",
      image: Traveltales,
      description:
        "TravelTales is a full-stack MERN web application that allows users to share their travel experiences through stories with images, explore stories shared by others, and interact using likes and comments.",
      tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind"],
      live: "https://traveltales-mgk9.onrender.com/",
      github: "https://github.com/Vishnupriya-TK/TravelTales.git",
    },

    {
      title: "VP Portfolio",
      image: Portfolio,
      description:
        "A modern personal portfolio showcasing skills, projects, contact information and journey with coding.",
      tech: ["React", "Vite", "CSS", "Tailwind", "emailjs", "Framer Motion"],
      live: "https://portfolio-roan-alpha-13.vercel.app/",
      github: "https://github.com/Vishnupriya-TK/Portfolio.git",
    },
    {
      title: "Course Advisor Chatbot (Zoho SalesIQ)",
      image: Zoho,
      description:
        "An interactive chatbot built using Zoho SalesIQ Codeless Bot Builder, integrated with a website and Zoho Form to guide students through course selection and form filling.",
      tech: ["Zoho CRM", "API", "Automation"],
      live: "https://courseadvisor.zohosites.com/",
      github: "https://github.com/Vishnupriya-TK/Zoho-SalesIQ-Course_Advisor.git",

    },
    {
      title: "Placement-Information-Hub ",
      image: Placement,
      description:
        "An offline-friendly placement tracker using HTML, CSS, JavaScript, and localStorage for managing student placement data.",
      tech: ["HTML", "CSS", "JavaScript", "localStorage"],
      live: "https://placement-information-hub.vercel.app/",
      github: "https://github.com/Vishnupriya-TK/Placement-Information-Hub.git",
    },
    {
      title: "QuizQuest",
      image: Quizapp,
      description:
        "A pure HTML, CSS, and JavaScript quiz app with a welcome screen, MCQ interface, and final score page.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://quizapp-chi-six.vercel.app/",
      github: "https://github.com/Vishnupriya-TK/quizapp.git",
    },

    {
      title: "WhatsApp Clone",
      image: Wordpress,
      description:
        "WhatsApp Clone is a clean, modern, and realistic Chat Application mobile UI designed in Figma. It showcases a complete user flow — from splash and login to chatting, calls, and user profile management — inspired by the original WhatsApp layout and theme.",
      tech: ["Figma", "UI/UX Design", "Material Icons", "Pinterest", "Unsplash"],
      live: "https://www.figma.com/design/WyxQKyAGgNdUL7zFHaxI3Q/WhatsApp-Clone",
      github: "",
    },

  ];

  return (
    <section className="projects-section">
      <h2 className=" text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4 tracking-widest"> My Projects</h2>
      <p className="text-center dark:text-gray-500 mb-16 text-lg">
        A curated collection of projects showcasing my skills, creativity, and problem-solving approach
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
