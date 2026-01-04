import React from "react";
import SkillCard from "../components/Skillcard.jsx";
import CodingJourney from "../components/CodingJourney.jsx";
import CodingProfiles from "../components/CodingProfiles.jsx";

const Skills = () => {
  const skillSections = [
    {
      title: "💻 Programming Languages",
      skills: [
        { name: "Java", level: 4.3 },
        { name: "C", level: 3 },
        { name: "JavaScript", level: 3.5 },
        { name: "Python", level: 2.5 },
        { name: "SQL", level: 3 },
      ],
    },
    {
      title: "🧑‍💻 Frontend",
      skills: [
        { name: "HTML5", level: 5 },
        { name: "CSS3", level: 4.8 },
      ],
    },
    {
      title: "⚙️ Backend",
      skills: [{ name: "Node.js", level: 3 }],
    },
    {
      title: "📦 Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 4.5 },
        { name: "Tailwind CSS", level: 4.5 },
        { name: "Axios", level: 4.5 },
        { name: "Express.js", level: 3 },
        { name: "Mongoose", level: 4 },
      ],
    },
    {
      title: "🗄️ Database",
      skills: [{ name: "MongoDB", level: 4 }],
    },
    {
      title: "🔌 APIs & Integrations",
      skills: [
        { name: "RESTful APIs", level: 4.5 },
        { name: "EmailJS", level: 4.8 },
        { name: "Gemini API", level: 3 },
        { name: "Cloudinary", level: 4 },
      ],
    },
    {
      title: "🛠️ Tools & Developer Utilities",
      skills: [
        { name: "Git", level: 4.8 },
        { name: "GitHub", level: 5 },
        { name: "Postman", level: 4.3 },
        { name: "VS Code", level: 5 },
      ],
    },
    {
      title: "🎨 Design & Prototyping",
      skills: [{ name: "Figma", level: 3 }],
    },
    {
      title: "🚀 Deployment & Hosting",
      skills: [
        { name: "Vercel", level: 4.5 },
        { name: "Render", level: 5 },
        { name: "GitHub Pages", level: 5 },
      ],
    },
  ];

  return (
    <section className="min-h-screen px-6 py-20 font-['Sora']">
      <div
        className="max-w-7xl mx-auto"
        style={{
          animation: "fadeUp 0.9s ease forwards",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4 tracking-widest">
          MY SKILLS
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-600 mb-16 text-lg">
          Programming languages, frameworks, tools, and more that I know and use.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
        <div className="mt-28">
          <CodingJourney />
        </div>
        <div className="mt-28">
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
