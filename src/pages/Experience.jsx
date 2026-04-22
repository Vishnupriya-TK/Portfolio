import React from "react";
import { Link } from "react-router-dom";

import { FaFolderOpen, FaDownload, FaEnvelope } from "react-icons/fa";
/* Assets */
import Hackathon from "../Experience/Hackathon.jpg";
import IEEEQuiz from "../Experience/IEEEQuiz.jpg";
import Marcello from "../Experience/Marcello.jpeg";
import Phonix from "../Experience/Phonix.jpeg";
import Vcet from "../Experience/Vcet.jpg";
import Naukri from "../Experience/Naukri.pdf";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";

const Experience = () => {
  const experiences = [
    {
      title: "Zoho Cliqtrix ’26",
      date: "November 2025",
      place: "Zoho Corporation",
      desc: "Gained hands-on experience building an interactive chatbot using Zoho SalesIQ’s Codeless Bot Builder. The chatbot was seamlessly integrated with a website and Zoho Forms to guide students in course selection and assist them during the form-filling process. This experience strengthened my understanding of chatbot workflows, user engagement, and no-code automation.",
      stack: ["Logic", "Problem Solving", "User Experience", "Teamwork"],
      link: "https://github.com/Vishnupriya-TK/Zoho-SalesIQ-Course_Advisor.git",
    },
    {
      title: "Adobe India Hackathon",
      date: "July 2025",
      place: "Adobe",
      desc: "Participated in a national-level hackathon focusing on innovation, collaboration, and rapid solution development under time constraints.",
      stack: ["Problem Solving", "Logical Thinking", "Innovation", "Teamwork"],
      link: Hackathon,
    },
    {
      title: "VCET Inhouse Internship",
      date: "May 2025 – June 2025",
      place: "Velammal College of Engineering & Technology, Madurai",
      desc: "Worked on real-time academic projects and gained practical exposure to software development, collaboration, and project execution.",
      stack: ["MERN Stack", "Problem Solving", "Collaboration", "Teamwork", "Time Management"],
      link: Vcet,
    },
    {
      title: "Full Stack Internship",
      date: "2023",
      place: "Phoenix Softech, Madurai",
      desc: "Gained hands-on experience in full-stack development by working on real-world projects, enhancing both frontend and backend skills.",
      stack: ["Full Stack Development", "Technical Skills", "Communication"],
      link: Phonix,
    },
    {
      title: "Full Stack Development Online Internship",
      date: "July 2024 – September 2024",
      place: "Marcello Tech, Trichy",
      desc: "Worked on full-stack projects in an online environment, improving coding proficiency, creativity, and collaborative skills.",
      stack: ["Full Stack Development", "Creativity", "Teamwork"],
      link: Marcello,
    },
    {
      title: "Naukri Coding Contests (Online)",
      date: "2025",
      place: "Naukri",
      desc: "Participated in multiple coding contests held in January, September, November, and December 2025. Improved competitive programming skills and secured 77th rank in the December 2025 contest.",
      stack: ["DSA", "Java", "Problem Solving", "Logical Thinking"],
      link: Naukri,
    },
    {
      title: "IEEE Quiz Competition (Online)",
      date: "March 2025",
      place: "IEEE Madras Section",
      desc: "Participated in a technical quiz competition that strengthened core technical knowledge, analytical thinking, and quick decision-making abilities.",
      stack: ["Technical Knowledge", "Analytical Thinking", "Quick Decision Making"],
      link: IEEEQuiz,
    },
  ];

  return (
    <section className="min-h-screen px-2 py-16">
      {/* Heading */}
      <h2 className="certificates-title" text-4xl md:text-5xl style={{ fontFamily: "serif" , textTransform: "uppercase" ,color:"#00FFFF"}}>
        MY EXPERIENCES
      </h2>
      <h3 className="text-center text-gray-600 dark:text-gray-400 mb-10 sm:mb-16 text-sm sm:text-base md:text-lg px-2 font-mono">
        Turning ideas into real-world solutions through experience and innovation
      </h3>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-cyan-500 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row ${idx % 2 === 0
                  ? "md:justify-start md:pr-8"
                  : "md:justify-end md:pl-8"
                }`}
            >
              {/* Timeline Dot */}
              <span className="absolute left-1/2 top-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white -translate-x-1/2 hidden md:block"></span>

              {/* Card */}
              <div className="glass-card w-full md:w-[46%] p-4 sm:p-5 md:p-7 space-y-2 md:space-y-3 animate-fade hover:scale-[1.03] transition-all duration-300">
                <h3 className="text-2xl md:text-2xl font-bold text-blue-300 font-mono">
                  {exp.title}
                </h3>

                <p className="text-xl text-gray-400 font-sans">{exp.date}</p>
                <p className="text-xl text-gray-200 font-serif">{exp.place}</p>

                {/* <p className="text-gray-400  leading-relaxed text-2xl md:text-base font-normal"> */}
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-sans">
                  {exp.desc}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.stack.map((tech, i) => (
                    <span
                      key={i}
                      // className="px-4 py-3 text-lg rounded-4xl bg-blue-500/20 border border-cyan-500/20 text-gray-400 font-mono"
                      className="px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-lg rounded-2xl bg-blue-500/20 border border-cyan-500/20 text-gray-400 font-serif"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Proof Button */}
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4"
                >
                  <button className="px-6 py-2 rounded-xl bg-cyan-300 text-black font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/50">
                    View Proof
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-4">

        {/* View Works */}
        <Link
          to="/projects"
          className="flex items-center justify-center gap-2
    bg-blue-600 hover:bg-blue-700
    px-6 py-3 rounded-lg font-semibold
    transition text-white
    shadow-md hover:shadow-lg hover:scale-105"
        >
          <FaFolderOpen />
          View My Works
        </Link>

        {/* Download CV */}
        <a
          href={cvFile}
          download
          className="flex items-center justify-center gap-2
    bg-slate-700 hover:bg-slate-600
    px-6 py-3 rounded-lg font-semibold
    transition text-white
    shadow-md hover:shadow-lg hover:scale-105"
        >
          <FaDownload />
          View CV
        </a>

        {/* Contact */}
        <Link
          to="/connect"
          className="flex items-center justify-center gap-2
    border border-blue-500 hover:bg-blue-500
    px-6 py-3 rounded-lg font-semibold
    transition text-white
    shadow-md hover:shadow-lg hover:scale-105"
        >
          <FaEnvelope />
          Get in Touch
        </Link>

      </div>

      {/* Styles */}
      <style>
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 1.5rem;
          }

          .animate-fade {
            animation: fadeUp 0.6s ease both;
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Experience;
