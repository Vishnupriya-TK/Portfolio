import React from "react";
import { Link } from "react-router-dom";
import ZigzagTimeline from "../components/ZigzagTimeline";

import { educationTimeline } from "../data/education";
import { FaDownload, FaFolderOpen } from "react-icons/fa";
import { FaJava, FaCode } from "react-icons/fa";
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
  SiOpenapiinitiative,
  SiAmazonsimpleemailservice,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
  SiRender,
  SiGithubpages,
} from "react-icons/si";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";

const About = () => {
  const techSkillCategories = [
    {
      title: "Programming Languages",
      icon: <SiCplusplus className="text-2xl" />,
      color: "from-slate-100/50 to-blue-100/40",
      items: [
        { name: "Java", icon: <FaJava className="text-lg" /> },
        { name: "C/C++", icon: <SiCplusplus className="text-lg" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-lg" /> },
        { name: "Python", icon: <SiPython className="text-lg" /> },
        { name: "SQL", icon: <SiMysql className="text-lg" /> },
      ],
    },
    {
      title: "Frontend",
      icon: <SiHtml5 className="text-2xl" />,
      color: "from-amber-100/60 to-pink-100/40",
      items: [
        { name: "HTML5", icon: <SiHtml5 className="text-lg" /> },
        { name: "CSS3", icon: <SiCss3 className="text-lg" /> },
      ],
    },
    {
      title: "Backend",
      icon: <SiNodedotjs className="text-2xl" />,
      color: "from-green-100/50 to-teal-100/40",
      items: [{ name: "Node.js", icon: <SiNodedotjs className="text-lg" /> }],
    },
    {
      title: "Frameworks & Libraries",
      icon: <SiReact className="text-2xl" />,
      color: "from-blue-100/50 to-indigo-100/40",
      items: [
        { name: "React.js", icon: <SiReact className="text-lg" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-lg" /> },
        { name: "Axios", icon: <SiAxios className="text-lg" /> },
        { name: "Express.js", icon: <SiExpress className="text-lg" /> },
        { name: "Mongoose", icon: <SiMongodb className="text-lg" /> },
      ],
    },
    {
      title: "Database",
      icon: <SiMongodb className="text-2xl" />,
      color: "from-emerald-100/50 to-green-100/40",
      items: [{ name: "MongoDB", icon: <SiMongodb className="text-lg" /> }],
    },
    {
      title: "APIs & Integrations",
      icon: <SiOpenapiinitiative className="text-2xl" />,
      color: "from-cyan-100/50 to-sky-100/40",
      items: [
        { name: "RESTful APIs", icon: <SiOpenapiinitiative className="text-lg" /> },
        { name: "EmailJS", icon: <SiAmazonsimpleemailservice className="text-lg" /> },
        { name: "Gemini API", icon: <SiCloudinary className="text-lg" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="text-lg" /> },
      ],
    },
    {
      title: "Tools & Developer Utilities",
      icon: <SiGit className="text-2xl" />,
      color: "from-violet-100/50 to-fuchsia-100/40",
      items: [
        { name: "Git", icon: <SiGit className="text-lg" /> },
        { name: "GitHub", icon: <SiGithub className="text-lg" /> },
        { name: "Postman", icon: <SiPostman className="text-lg" /> },
        { name: "VS Code", icon: <FaCode className="text-lg" /> },
      ],
    },
    {
      title: "Design & Prototyping",
      icon: <SiFigma className="text-2xl" />,
      color: "from-pink-100/50 to-rose-100/40",
      items: [{ name: "Figma", icon: <SiFigma className="text-lg" /> }],
    },
    {
      title: "Deployment & Hosting",
      icon: <SiVercel className="text-2xl" />,
      color: "from-slate-100/50 to-slate-200/40",
      items: [
        { name: "Vercel", icon: <SiVercel className="text-lg" /> },
        { name: "Render", icon: <SiRender className="text-lg" /> },
        { name: "GitHub Pages", icon: <SiGithubpages className="text-lg" /> },
      ],
    },
  ];


  const activities = [
    { icon: "🏆", content: "Adobe India Hackathon Round 1 participant with team collaboration success." },
    { icon: "💡", content: "Zoho Cliqtrix ’26 contributor for algorithmic problem solving." },
    { icon: "🧠", content: "250+ DSA problems solved on GeeksforGeeks and LeetCode." },
    { icon: "🎯", content: "Naukri coding contests for efficiency and accuracy improvement." },
  ];

  const softSkills = [
    { icon: "🧩", title: "Problem Solving", description: "Creative approaches to complex tasks.", color: "from-gray-600 to-gray-700", font: "font-serif text-2xl" },
    { icon: "🚀", title: "Leadership", description: "Driving teams with clarity and trust.", color: "from-gray-600 to-gray-700", font: "font-serif text-2xl" },
    { icon: "🤝", title: "Team Collaboration", description: "Strong cross-functional teamwork.", color: "from-gray-600 to-gray-700", font: "font-serif text-2xl" },
    { icon: "⏱️", title: "Time Management", description: "Deadline focus with high quality.", color: "from-gray-600 to-gray-700", font: "font-serif text-2xl" },
    { icon: "💬", title: "Communication", description: "Clear verbal and written messaging.", color: "from-gray-600 to-gray-700", font: "font-serif text-2xl" },
    { icon: "🧘", title: "Adaptability", description: "Fast learning in changing environment.", color: "from-gray-600 to-gray-700", font: "font-serif text-2xl" },
  ];

  const languages = [
    {
      label: "English",
      level: "Professional",
      details: "Reading, Writing, Speaking",
      color: "text-cyan-300"
    },
    {
      label: "Tamil",
      level: "Native",
      details: "Reading, Writing, Speaking",
      color: "text-emerald-300"
    },
    {
      label: "Hindi",
      level: "Conversational",
      details: "Speaking, Basic Reading",
      color: "text-orange-300"
    },
    {
      label: "Sourashtra",
      level: "Native",
      details: "Speaking",
      color: "text-purple-300"
    },
  ];

  return (
   <section className="page-about min-h-screen flex flex-col items-center gap-8 sm:gap-10 py-10 sm:py-14 px-5 sm:px-10 md:px-16 lg:px-24 text-slate-200">

  {/* Intro */}
  <div className="glass-card w-full max-w-6xl p-5 sm:p-8 text-center space-y-4 sm:space-y-5">
    <h1 className="page-title leading-snug">
      Hello, I am <span className="text-[#8b9cff]">Vishnu Priya T K</span>
    </h1>

    <p className="page-subtitle text-sm sm:text-base max-w-3xl mx-auto">
      A highly motivated Computer Science student and aspiring Full Stack Developer, driven by a passion for coding, problem-solving, and continuous learning. Committed to designing and developing scalable, user-centric web applications using modern technologies.
    </p>

    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
      <a
        href={cvFile}
        download
        className="px-5 py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg 
        bg-indigo-600 hover:bg-indigo-700 transition 
        flex items-center justify-center gap-2 text-white"
      >
        <FaDownload />
        Download CV
      </a>

      <Link
        to="/projects"
        className="btn-outline text-sm sm:text-base flex items-center justify-center gap-2"
      >
        <FaFolderOpen />
        View Projects
      </Link>
    </div>
  </div>

  {/* Divider */}
  <div className="w-full max-w-6xl mx-auto my-10 sm:my-16">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
  </div>

  {/* Education */}
  <div className="max-w-6xl w-full">
    <h2 className="section-title text-center mb-10 sm:mb-14">Education</h2>
    <ZigzagTimeline items={educationTimeline} />
  </div>

  <div className="w-full max-w-6xl mx-auto my-10 sm:my-16">
    <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
  </div>

  {/* Tech Skills */}
  <div className="max-w-6xl w-full">
    <h2 className="section-title text-center mb-6 sm:mb-8">
      Tech Skills
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
      {techSkillCategories.map((category, idx) => (
        <div
          key={idx}
          className="glass-card p-4 sm:p-5 rounded-2xl transform transition duration-500 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            {category.icon}
            <h3 className="text-base sm:text-lg font-semibold text-white">{category.title}</h3>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {category.items.map((skill, skillIdx) => (
              <div key={skillIdx} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/10 border border-white/15">
                <span className="text-lg sm:text-xl">{skill.icon}</span>
                <span className="text-sm text-slate-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>

 {/* Divider */}
  <div className="w-full max-w-6xl mx-auto my-10 sm:my-16">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
  </div>


  {/* Activities */}
  <div className="max-w-6xl w-full">
    <h2 className="section-title text-center mb-10 sm:mb-14">
      Activities
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
      {activities.map((act, idx) => (
        <div key={idx} className="glass-card activity-card p-5 w-full min-h-[120px]">
          <p className="text-sm sm:text-base text-slate-300 leading-[1.7]">
            <span className="text-xl mr-2">{act.icon}</span>
            {act.content}
          </p>
        </div>
      ))}
    </div>
  </div>


 {/* Divider */}
  <div className="w-full max-w-6xl mx-auto my-10 sm:my-16">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
  </div>


  {/* Soft Skills */}
  <div className="max-w-6xl w-full">
    <h2 className="section-title text-center mb-8 sm:mb-12">
      Soft Skills
    </h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {softSkills.map((skill, idx) => (
        <div key={idx} className={`rounded-2xl p-4 sm:p-5 text-white shadow-xl bg-linear-to-br ${skill.color}`}>
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <span className="text-2xl sm:text-3xl">{skill.icon}</span>
            <h3 className={skill.font}>{skill.title}</h3>
          </div>
          <p className="text-xs sm:text-sm">{skill.description}</p>
        </div>
      ))}
    </div>
    
  </div>


 {/* Divider */}
  <div className="w-full max-w-6xl mx-auto my-10 sm:my-16">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
  </div>


  {/* Languages */}
  <div className="max-w-6xl w-full">
    <h2 className="section-title text-center mb-6 sm:mb-8">
      Languages
    </h2>

    <div className="flex gap-4 sm:gap-6 overflow-x-auto md:justify-center pb-3">
      {languages.map((language, idx) => (
        <div
          key={idx}
          className="min-w-[200px] sm:min-w-[240px] p-4 sm:p-6 rounded-2xl text-center flex-shrink-0 surface-card hover:scale-105 transition"
        >
          <h3 className={`text-xl sm:text-3xl font-serif font-semibold ${language.color}`}>
            {language.label}
          </h3>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {language.level}
          </p>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {language.details}
          </p>
        </div>
      ))}
    </div>
  </div>

 {/* Divider */}
  <div className="w-full max-w-6xl mx-auto my-10 sm:my-16">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
  </div>

      <style>
        {`
          @keyframes popIn {
            from { opacity: 0; transform: translateY(22px) scale(0.97); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes fadeText {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .text-gradient1 {
            background: linear-gradient(90deg, #42a5f5, #7c4dff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .text-gradient3 {
            background: linear-gradient(90deg, #ff80ab, #b388ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

        `}
      </style>
    </section>
  );
};

export default About;
