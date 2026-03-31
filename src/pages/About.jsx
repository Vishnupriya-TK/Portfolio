import React from "react";
import { Link } from "react-router-dom";
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


  const education = [
    {
      title: "UG Degree",
      course: "Computer Science and Engineering",
      college: "Velammal College of Engineering and Technology, Madurai",
      duration: "2023 - 2027",
      details: [
        "CGPA: 8.87/10",
        "Participated in Zoho Cliqtrix ’26 to enhance problem-solving skills",
        "Participated in Adobe India Hackathon Round 1",
        "Focused on full-stack system design and optimization",
      ],
      fonts: {
        title: "font-serif text-2xl md:text-3xl text-slate-100 tracking-wide leading-tight",
        course: "font-mono text-blue-200 text-lg md:text-xl leading-snug",
        college: "font-sans text-slate-300 text-base md:text-lg italic leading-relaxed",
        duration: "font-sans text-slate-400 text-sm leading-relaxed",
        details: "font-mono text-slate-400 text-sm md:text-base leading-loose",
      }
    },
    {
      title: "XII",
      course: "Biology, Physics, Chemistry, Mathematics",
      college: "St.Joseph's Girls' Higher Secondary School, Madurai",
      duration: "2021 - 2023",
      details: [
        "Percentage: 93%",
        "State level essay & speech competitions (District winner)",
      ],
      fonts: {
        title: "font-serif text-2xl md:text-3xl text-slate-100 tracking-wide leading-tight",
        course: "font-mono text-blue-200 text-lg md:text-xl leading-snug",
        college: "font-sans text-slate-300 text-base md:text-lg italic leading-relaxed",
        duration: "font-sans text-slate-400 text-sm leading-relaxed",
        details: "font-mono text-slate-400 text-sm md:text-base leading-loose",
      }
    },
    {
      title: "X",
      college: "St.Joseph's Girls' Higher Secondary School, Madurai",
      duration: "2020 - 2021",
      details: ["Pandemic year – No board exams conducted"],
      fonts: {
        title: "font-serif text-2xl md:text-3xl text-slate-100 tracking-wide leading-tight",
        course: "font-mono text-blue-200 text-lg md:text-xl leading-snug",
        college: "font-sans text-slate-300 text-base md:text-lg italic leading-relaxed",
        duration: "font-sans text-slate-400 text-sm leading-relaxed",
        details: "font-mono text-slate-400 text-sm md:text-base leading-loose",
      }
    },
  ];


  const activities = [
    { icon: "🏆", content: "Adobe India Hackathon Round 1 participant with team collaboration success." },
    { icon: "💡", content: "Zoho Cliqtrix ’26 contributor for algorithmic problem solving." },
    { icon: "🧠", content: "250+ DSA problems solved on GeeksforGeeks and LeetCode." },
    { icon: "🎯", content: "Naukri coding contests for efficiency and accuracy improvement." },
  ];

  const softSkills = [
    { icon: "🧩", title: "Problem Solving", description: "Creative approaches to complex tasks.", color: "from-violet-500 to-purple-700", font: "font-mono text-2xl" },
    { icon: "🚀", title: "Leadership", description: "Driving teams with clarity and trust.", color: "from-rose-500 to-fuchsia-600", font: "font-serif text-2xl" },
    { icon: "🤝", title: "Team Collaboration", description: "Strong cross-functional teamwork.", color: "from-sky-500 to-blue-600", font: "font-cursive text-2xl" },
    { icon: "⏱️", title: "Time Management", description: "Deadline focus with high quality.", color: "from-amber-500 to-orange-600", font: "font-extrabold text-2xl" },
    { icon: "💬", title: "Communication", description: "Clear verbal and written messaging.", color: "from-teal-500 to-cyan-500", font: "font-semibold text-2xl" },
    { icon: "🧘", title: "Adaptability", description: "Fast learning in changing environment.", color: "from-emerald-500 to-lime-500", font: "font-semibold text-2xl" },
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
   <section className="min-h-screen text-white flex flex-col items-center gap-8 sm:gap-10 py-10 sm:py-15 px-5 sm:px-10 md:px-20 lg:px-40">

  {/* Intro */}
  <div className="glass-card w-full max-w-6xl p-5 sm:p-8 text-center space-y-4 sm:space-y-5">
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif text-gradient1 tracking-tight leading-snug">
      Hello, I am <span className="text-pink-400 font-semibold">Vishnu Priya T K</span>
    </h1>

    <p className="text-gray-400 text-sm sm:text-base md:text-xl font-mono">
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
        className="px-5 py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg 
        border border-cyan-500 hover:bg-cyan-500 transition 
        flex items-center justify-center gap-2 text-white"
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
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-400 mb-10 sm:mb-16 font-serif">
      EDUCATION
    </h2>

    <div className="relative">
      <div className="absolute left-1/2 top-0 h-full w-1 bg-green-500 -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-10 sm:space-y-16 md:space-y-28">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col md:flex-row ${
              idx % 2 === 0 ? "md:justify-start md:pr-12" : "md:justify-end md:pl-12"
            }`}
          >
            <span className="absolute left-1/2 top-6 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-4 border-white -translate-x-1/2 hidden md:block"></span>

            <div className="glass-card w-full md:w-[45%] p-5 sm:p-8 hover:scale-105 transition space-y-3 sm:space-y-4">
              <h3 className={edu.fonts.title}>{edu.title}</h3>
              {edu.course && <p className={edu.fonts.course}>{edu.course}</p>}
              <p className={edu.fonts.college}>{edu.college}</p>
              <p className={edu.fonts.duration}>{edu.duration}</p>

              <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                {edu.details.map((d, i) => (
                  <li key={i} className={edu.fonts.details}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="w-full max-w-6xl mx-auto my-10 sm:my-16">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
  </div>

  {/* Tech Skills */}
  <div className="max-w-6xl w-full">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center text-gradient3 mb-6 sm:mb-8">
      TECH SKILLS
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
      {techSkillCategories.map((category, idx) => (
        <div
          key={idx}
          className="glass-card p-4 sm:p-5 rounded-2xl text-slate-50 shadow-xl border border-white/10 bg-[#0f172a]/60 transform transition duration-500 hover:scale-105"
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            {category.icon}
            <h3 className="text-lg sm:text-2xl font-bold">{category.title}</h3>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {category.items.map((skill, skillIdx) => (
              <div key={skillIdx} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/10 border border-white/15">
                <span className="text-lg sm:text-2xl">{skill.icon}</span>
                <span className="text-sm sm:text-base">{skill.name}</span>
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
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-400 mb-10 sm:mb-16 font-serif">
      ACTIVITIES
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
      {activities.map((act, idx) => (
        <div key={idx} className="glass-card p-4 max-w-xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-cyan-200">
            {act.icon} <span className="text-gray-200">{act.content}</span>
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
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-8 sm:mb-12 font-serif">
      SOFT SKILLS
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
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center text-pink-200 mb-6 sm:mb-8">
      LANGUAGES
    </h2>

    <div className="flex gap-4 sm:gap-6 overflow-x-auto md:justify-center pb-3">
      {languages.map((language, idx) => (
        <div
          key={idx}
          className="min-w-[200px] sm:min-w-[240px] p-4 sm:p-6 rounded-2xl text-center flex-shrink-0
          bg-slate-900 border border-slate-700 hover:scale-105 transition"
        >
          <h3 className={`text-xl sm:text-3xl font-serif font-semibold ${language.color}`}>
            {language.label}
          </h3>

          <p className="mt-2 sm:mt-3 text-base sm:text-xl text-slate-300">
            {language.level}
          </p>

          <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-slate-400">
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
          .glass-card {
          background: linear-gradient(
          145deg,
          rgba(15, 23, 42, 0.85),
          rgba(30, 41, 59, 0.75)
         );
         backdrop-filter: blur(16px);
         border: 1px solid rgba(148, 163, 184, 0.15);
         border-radius: 18px;
         box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}
          .glass-card:hover {
            box-shadow: 0 14px 48px rgba(0, 0, 0, 0.5), 0 0 22px rgba(86, 196, 255, 0.35);
            transform: translateY(-4px);
          }

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
