import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";
import profilePic from "../assets/profile.jpeg";
import { FaFolderOpen, FaDownload, FaEnvelope } from "react-icons/fa";

const roles = ["Full Stack Developer", "MERN Stack Developer"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect (smooth)
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
    <section className="relative text-white min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-20 overflow-hidden font-inter">

      {/* Profile */}
      <div className="flex-1 flex justify-center items-center mb-10 md:mb-0 md:mr-12">
        <img
          src={profilePic}
          alt="Vishnu Priya"
          className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-blue-500 object-cover 
          shadow-2xl animate-float 
          hover:scale-105 hover:shadow-blue-500/30 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-6 text-center md:text-left">

        {/* Greeting */}
        <p className="text-2xl md:text-3xl text-slate-400 opacity-0 animate-fadeIn delay-100 font-poppins">
          Hello, I’m
        </p>

        {/* Name */}
        <h1 className="text-3xl md:text-7xl font-poppins font-semibold text-blue-400 leading-tight opacity-0 animate-fadeIn delay-300">
          Vishnu Priya T K
        </h1>

        {/* Role */}
        <p className="text-2xl md:text-3xl text-cyan-400 h-10 font-mono opacity-0 animate-fadeIn delay-500">
          {typedText}
          <span className="animate-blink">|</span>
        </p>

        {/* Description */}
        <p className="max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed opacity-0 animate-fadeIn delay-700">
          Driven by creativity and innovation, I craft elegant and interactive web experiences.
          Currently pursuing{" "}
          <span className="font-semibold text-white">
            B.E Computer Science and Engineering
          </span>.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 opacity-0 animate-fadeIn delay-900">

          <Link
            to="/projects"
            className="flex items-center justify-center gap-2 
            bg-blue-600 hover:bg-blue-700 
            px-7 py-3 rounded-lg font-semibold text-lg
            transition transform hover:scale-105 
            shadow-md hover:shadow-blue-500/30"
          >
            <FaFolderOpen />
            View My Works
          </Link>

          <a
            href={cvFile}
            download
            className="flex items-center justify-center gap-2 
            bg-slate-700 hover:bg-slate-600 
            px-7 py-3 rounded-lg font-semibold text-lg
            transition transform hover:scale-105 
            shadow-md hover:shadow-slate-500/20"
          >
            <FaDownload />
            View CV
          </a>

          <Link
            to="/connect"
            className="flex items-center justify-center gap-2 
            border border-blue-500 hover:bg-blue-500 
            px-7 py-3 rounded-lg font-semibold text-lg
            transition transform hover:scale-105 
            shadow-md hover:shadow-blue-500/30"
          >
            <FaEnvelope />
            Get in Touch
          </Link>

        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@500;600;700&display=swap');

          .font-inter {
            font-family: 'Inter', sans-serif;
          }

          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.9s ease forwards;
          }

          .delay-100 { animation-delay: 0.1s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-700 { animation-delay: 0.7s; }
          .delay-900 { animation-delay: 0.9s; }

          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }

          .animate-blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;