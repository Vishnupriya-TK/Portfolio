import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFolderOpen, FaDownload, FaEnvelope } from "react-icons/fa";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";
import profilePic from "../assets/profile.jpeg";
import ScrollIndicator from "../components/ScrollIndicator";
import FeaturedProjects from "../components/FeaturedProjects";
import TechMarquee from "../components/TechMarquee";

const roles = ["Full Stack Developer", "MERN Stack Developer"];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(roles[currentRole].slice(0, index + 1));
      setIndex((prev) => prev + 1);
      if (index === roles[currentRole].length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex(0);
          setTypedText("");
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 1200);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index, currentRole]);

  return (
    <div className="page-home text-slate-200">
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Bio — left */}
          <div className="flex-1 w-full text-center lg:text-left space-y-4 sm:space-y-5">
            <p className="font-home-greet text-base sm:text-lg text-slate-300">
              Hello, I&apos;m
            </p>

            <h1 className="font-home-name text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#74b9ff] leading-tight tracking-tight">
              Vishnu Priya T K
            </h1>

            <p className="font-home-role text-xl sm:text-2xl md:text-3xl text-[#00cec9] font-medium min-h-[2.5rem]">
              {typedText}
              <span className="animate-blink">|</span>
            </p>

            <p className="font-home-bio text-slate-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed lg:mx-0 mx-auto pt-1">
              Driven by creativity and innovation, I craft elegant and interactive web
              experiences. Currently pursuing{" "}
              <span className="font-semibold text-white">
                B.E Computer Science and Engineering
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
                  bg-[#2e67f2] hover:bg-[#2563eb] text-white text-sm sm:text-base font-semibold
                  transition shadow-md shadow-blue-900/30"
              >
                <FaFolderOpen />
                View My Works
              </Link>

              <a
                href={cvFile}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
                  bg-[#34495e] hover:bg-[#3d566e] text-white text-sm sm:text-base font-semibold transition"
              >
                <FaDownload />
                View CV
              </a>

              <Link
                to="/connect"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
                  border border-[#2e67f2] text-white hover:bg-[#2e67f2]/20
                  text-sm sm:text-base font-semibold transition"
              >
                <FaEnvelope />
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Profile — right */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <img
              src={profilePic}
              alt="Vishnu Priya"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover
                border-2 border-white/15"
            />
          </div>
        </div>
      </section>

      <ScrollIndicator targetId="home-projects" />

      <div id="home-projects">
        <FeaturedProjects />
      </div>

      <div id="home-skills">
        <TechMarquee />
      </div>

      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s infinite; }
      `}</style>
    </div>
  );
};

export default Home;
