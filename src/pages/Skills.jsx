import React from "react";
import SkillCard from "../components/SkillCard.jsx";
import CodingJourney from "../components/CodingJourney.jsx";
import CodingProfiles from "../components/CodingProfiles.jsx";
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiAxios,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
  SiRender,
  SiCloudinary,
} from "react-icons/si";

import { FaJava, FaCode } from "react-icons/fa";
const Skills = () => {
  const skillSections = [
  {
    title: "💻 Programming Languages",
    skills: [
      { name: "Java", level: 4.3, icon: <FaJava /> },
      { name: "C", level: 3, icon: <SiCplusplus /> },
      { name: "JavaScript", level: 3.5, icon: <SiJavascript /> },
      { name: "Python", level: 2.5, icon: <SiPython /> },
      { name: "SQL", level: 3, icon: <SiMysql /> },
    ],
  },
  {
    title: "🧑‍💻 Frontend",
    skills: [
      { name: "HTML5", level: 5, icon: <SiHtml5 /> },
      { name: "CSS3", level: 4.8, icon: <SiCss3 /> },
    ],
  },
  {
    title: "⚙️ Backend",
    skills: [
      { name: "Node.js", level: 3, icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "📦 Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 4.5, icon: <SiReact /> },
      { name: "Tailwind CSS", level: 4.5, icon: <SiTailwindcss /> },
      { name: "Axios", level: 4.5, icon: <SiAxios /> },
      { name: "Express.js", level: 3, icon: <SiExpress /> },
      { name: "Mongoose", level: 4, icon: <SiMongodb /> },
    ],
  },
  {
    title: "🗄️ Database",
    skills: [
      { name: "MongoDB", level: 4, icon: <SiMongodb /> },
    ],
  },
  {
    title: "🔌 APIs & Integrations",
    skills: [
      { name: "RESTful APIs", level: 4.5, icon: <FaCode /> },
      { name: "EmailJS", level: 4.8, icon: <FaCode /> },
      { name: "Gemini API", level: 3, icon: <FaCode /> },
      { name: "Cloudinary", level: 4, icon: <SiCloudinary /> },
    ],
  },
  {
    title: "🛠️ Tools & Developer Utilities",
    skills: [
      { name: "Git", level: 4.8, icon: <SiGit /> },
      { name: "GitHub", level: 5, icon: <SiGithub /> },
      { name: "Postman", level: 4.3, icon: <SiPostman /> },
      { name: "VS Code", level: 5, icon: <FaCode /> },
    ],
  },
  {
    title: "🎨 Design & Prototyping",
    skills: [
      { name: "Figma", level: 3, icon: <SiFigma /> },
    ],
  },
  {
    title: "🚀 Deployment & Hosting",
    skills: [
      { name: "Vercel", level: 4.5, icon: <SiVercel /> },
      { name: "Render", level: 5, icon: <SiRender /> },
      { name: "GitHub Pages", level: 5, icon: <SiGithub /> },
    ],
  },
];
  return (
   <section className="min-h-screen px-5 sm:px-10 md:px-16 lg:px-25 py-10 sm:py-16 md:py-20 font-['Sora']">
  <div
    className="max-w-6xl mx-auto"
    style={{
      animation: "fadeUp 0.9s ease forwards",
    }}
  >
    <h1 className="certificates-title" text-4xl md:text-5xl style={{ fontFamily: "serif" , textTransform: "uppercase" ,color:"pink"}}>
      MY SKILLS
    </h1>

    <p className="text-center text-gray-600 dark:text-gray-400 mb-10 sm:mb-16 text-sm sm:text-base md:text-lg px-2">
      Programming languages, frameworks, tools, and more that I know and use.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12">
      {skillSections.map((section, index) => (
        <div
          key={index}
          style={{
            animation: `fadeUp 0.7s ease forwards`,
            animationDelay: `${index * 0.12}s`,
            opacity: 0,
          }}
        >
          <SkillCard
            title={section.title}
            skills={section.skills}
          />
        </div>
      ))}
    </div>

    {/* Coding Journey Section */}
    <div className="mt-16 sm:mt-24 md:mt-28">
      <CodingJourney />
    </div>

    <div className="mt-16 sm:mt-24 md:mt-28">
      <CodingProfiles />
    </div>
  </div>

  {/* Inline animation (no config needed) */}
  <style>
    {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>
</section>

  );
};

export default Skills;
