import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";
import profilePic from "../assets/vpk.jpg";

const roles = ["Full Stack Developer", "MERN Stack Developer"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedText(roles[currentRole].slice(0, index + 1));
      setIndex((prev) => prev + 1);

      if (index === roles[currentRole].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex(0);
          setTypedText("");
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [index, currentRole]);

  return (
    <section className="relative text-white min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-20 overflow-hidden">

      {/* Profile */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0 md:mr-10">
        <img
          src={profilePic}
          alt="Vishnu Priya"
          className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-blue-500 object-cover shadow-lg animate-float"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-6 text-center md:text-left">

        {/* Greeting */}
        <p
          className="text-4xl md:text-3xl text-gray-400 opacity-0 animate-fadeIn delay-100"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
        >
          Hello, I’m
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl text-blue-500 opacity-0 animate-fadeIn delay-300"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          Vishnu Priya T K
        </h1>

        {/* Role */}
        <p
          className="text-3xl md:text-3xl text-blue-400 h-10 opacity-0 animate-fadeIn delay-500"
          style={{ fontFamily: "'Fira Code', monospace", fontWeight: 500 }}
        >
          {typedText}
        </p>

        {/* Description */}
        <p
          className="max-w-3xl text-gray-400 leading-relaxed text-justify opacity-0 animate-fadeIn delay-700"
          style={{ fontFamily: "'Inter', serif", fontWeight: 300 }}
        >
          Driven by creativity and innovation, I craft elegant and interactive web experiences. Currently pursuing 
          <strong style={{fontWeight:600}}> Bachelor of Engineering in Computer Science and Engineering (B.E. CSE)</strong>.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 opacity-0 animate-fadeIn delay-900">
          <Link to="/works" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
            View My Works
          </Link>
          <a href={cvFile} download className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition">
            View CV
          </a>
          <Link to="/connect" className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition">
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-700 { animation-delay: 0.7s; }
          .delay-900 { animation-delay: 0.9s; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
