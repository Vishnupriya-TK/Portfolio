import React from "react";
import { Link } from "react-router-dom";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";

const About = () => {
  const education = [
    {
      title: "UG Degree",
      course: "Computer Science and Engineering",
      college: "Velammal College of Engineering and Technology, Madurai",
      duration: "2023 - 2027",
      details: [
        "CGPA: 9.00/10",
        "I actively took part in Zoho Cliqtrix ’26 to enhance my problem-solving skills.",
        "I participated in Adobe India Hackathon Round 1 and gained valuable team experience.",
      ],
      fonts: {
        title: "font-serif text-2xl",
        course: "font-mono text-blue-200 text-xl",
        college: "font-cursive italic text-gray-400 text-lg",
        duration: "font-sans text-gray-300 text-lg",
        details: "font-mono text-gray-500 text-lg",
      },
    },
    {
      title: "XII",
      course: "Biology, Physics, Chemistry, Mathematics",
      college: "St.Joseph's Girls' Higher Secondary School, Madurai",
      duration: "2021 - 2023",
      details: [
        "Percentage: 93%",
        "Participated in State level Essay Writing and Speech Competitions and secured top positions in District level.",
      ],
      fonts: {
        title: "font-serif text-2xl",
        course: "font-mono text-blue-200 text-xl",
        college: "font-cursive italic text-gray-400 text-lg",
        duration: "font-sans text-gray-300 text-lg",
        details: "font-mono text-gray-500 text-lg",
      },
    },
    {
      title: "X",
      college: "St.Joseph's Girls' Higher Secondary School, Madurai",
      duration: "2020 - 2021",
      details: ["Corona Virus Pandemic Year - No Board Exams Conducted"],
      fonts: {
        title: "font-serif text-2xl",
        college: "font-cursive italic text-gray-400 text-lg",
        duration: "font-sans text-gray-300 text-lg",
        details: "font-mono text-gray-500 text-lg",
      },
    },
  ];

  const softSkills = [
    {
      title: "Problem Solving",
      description: "Finding effective and creative solutions to challenges.",
      color: "bg-indigo-400",
      fonts: { title: "font-mono text-2xl", desc: "font-serif" },
    },
    {
      title: "Leadership",
      description: "Guiding teams toward shared goals with confidence.",
      color: "bg-red-300",
      fonts: { title: "font-cursive text-2xl", desc: "font-sans" },
    },
    {
      title: "Team Collaboration",
      description: "Working efficiently with teams through clear communication.",
      color: "bg-purple-400",
      fonts: { title: "font-mono text-2xl", desc: "font-serif" },
    },
    {
      title: "Time Management",
      description: "Balancing priorities to deliver quality results on time.",
      color: "bg-orange-300",
      fonts: { title: "font-cursive text-2xl", desc: "font-sans" },
    },
  ];

  const activities = [
    {
      content:
        "I participated in Adobe India Hackathon Round 1 and gained valuable team experience.",
      fonts: { content: "font-mono" },
    },
    {
      content:
        "I actively took part in Zoho Cliqtrix ’26 to enhance my problem-solving skills.",
      fonts: { content: "font-mono" },
    },
    {
      content:
        "I joined online coding contests on Naukri to improve my coding efficiency.",
      fonts: { content: "font-mono" },
    },
    {
      content:
        "I solved over 250 DSA problems to strengthen my algorithmic thinking and coding skills.",
      fonts: { content: "font-mono" },
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-black px-4 py-16 text-white flex flex-col items-center gap-24">

      {/* Intro */}
      <div className="glass-card max-w-4xl p-10 text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-400 font-serif">
          Hello, I am{" "}
          <span className="text-pink-400 font-cursive">
            Vishnu Priya T K
          </span>
        </h1>
        <p className="text-gray-300 text-lg font-mono">
          Passionate Full Stack Developer, deeply involved in coding,
          problem-solving, and continuous learning.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href={cvFile}
            download
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition font-sans"
          >
            Download CV
          </a>
          <Link
            to="/works"
            className="px-6 py-3 border border-blue-500 hover:bg-blue-500 rounded-xl font-semibold transition font-sans"
          >
            View My Projects
          </Link>
        </div>
      </div>

      {/* Education */}
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-16 font-serif">
          EDUCATION
        </h2>

        <div className="relative">
          {/* Timeline line (hidden on mobile) */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-green-500 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 md:space-y-28">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row ${
                  idx % 2 === 0
                    ? "md:justify-start md:pr-12"
                    : "md:justify-end md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <span className="absolute left-1/2 top-6 w-5 h-5 bg-green-500 rounded-full border-4 border-white -translate-x-1/2 hidden md:block"></span>

                <div className="glass-card w-full md:w-[45%] p-8 hover:scale-105 transition space-y-4">
                  <h3 className={edu.fonts.title}>{edu.title}</h3>
                  {edu.course && (
                    <p className={edu.fonts.course}>{edu.course}</p>
                  )}
                  <p className={edu.fonts.college}>{edu.college}</p>
                  <p className={edu.fonts.duration}>{edu.duration}</p>
                  <ul className="list-disc list-inside space-y-2">
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

      {/* Soft Skills */}
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12 font-serif">
          SOFT SKILLS
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {softSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`${skill.color} p-8 rounded-2xl hover:scale-105 transition space-y-2`}
            >
              <h3 className={skill.fonts.title}>{skill.title}</h3>
              <p className={skill.fonts.desc}>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-16 font-serif">
          ACTIVITIES
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-green-500 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24">
            {activities.map((act, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row ${
                  idx % 2 === 0
                    ? "md:justify-start md:pr-12"
                    : "md:justify-end md:pl-12"
                }`}
              >
                <span className="absolute left-1/2 top-4 w-5 h-5 bg-green-500 rounded-full border-4 border-white -translate-x-1/2 hidden md:block"></span>

                <div className="glass-card w-full md:w-[45%] p-8 hover:scale-105 transition">
                  <p className={`${act.fonts.content} text-gray-200 leading-relaxed`}>
                    {act.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glass Effect */}
      <style>
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 1.5rem;
          }
        `}
      </style>
    </section>
  );
};

export default About;
