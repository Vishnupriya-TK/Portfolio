// HeroSection.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cvFile from "../assets/Vishnu_Priya_CV.pdf"; 
import profilePic from "../assets/vpk.jpg";

const roles = ["Full Stack Developer", "MERN Stack Developer", "UI/UX Designer"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect for the role
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
    <section className="relative text-white min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-20 overflow-hidden font-sans">
      
      {/* Profile Section */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0 md:mr-10">
        <img
          src={profilePic}
          alt="Vishnu Priya"
          className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-blue-500 object-cover shadow-lg animate-float"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-6 text-center md:text-left">
        
        {/* Greeting */}
        <p className="text-lg md:text-3xl text-gray-400 font-light tracking-wide animate-fadeIn">
          Hello, I'm
        </p>
        
        {/* Name with unique font */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-500 tracking-tight animate-fadeIn" style={{ fontFamily: "'Rubik', sans-serif" }}>
          Vishnu Priya T K
        </h1>

        {/* Role typing */}
        <p className="text-2xl md:text-3xl text-blue-400 h-10 font-medium animate-fadeIn">{typedText}</p>

        {/* Description content */}
        <p className="max-w-2xl text-gray-300 leading-relaxed text-justify animate-fadeIn" style={{ fontWeight: 300 }}>
          Driven by creativity and innovation, I craft elegant and interactive web experiences. Passionate about creating beautiful and creative websites and applications. Currently pursuing 
          <strong> Bachelor of Engineering in Computer Science and Engineering (B.E. CSE)</strong>.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 animate-fadeIn">
          <Link
            to="/works"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            View My Works
          </Link>
          <a
            href={cvFile}
            download
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            View CV
          </a>
          <Link
            to="/connect"
            className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
