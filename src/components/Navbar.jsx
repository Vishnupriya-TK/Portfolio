import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // ❌ DO NOT CHANGE (as per your request)
  const linkClass = ({ isActive }) =>
    `relative px-2 sm:px-3 py-1.5 sm:py-2 font-medium 
     text-sm sm:text-base md:text-lg transition duration-300

     ${isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}

     after:content-['']
     after:absolute
     after:left-0
     after:bottom-0
     after:h-[2px]
     after:w-full
     after:bg-gradient-to-r
     after:from-cyan-300
     after:to-blue-600
     after:scale-x-0
     after:origin-left
     after:transition-transform
     after:duration-300

     ${isActive ? "after:scale-x-100" : ""}
    `;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/90 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center text-lg sm:text-xl">
            VP
          </div>
          <span className="font-semibold text-base sm:text-lg md:text-xl text-gray-200">
            Portfolio
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 font-sans font-bold">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/certificates" className={linkClass}>Certificates</NavLink>
          <NavLink to="/connect" className={linkClass}>Connect</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-300"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 sm:px-6 pb-4 flex flex-col gap-2 font-sans font-bold text-sm sm:text-base bg-black/90 border-t border-gray-800">

          {/* Mobile Links (Override underline here) */}
          <NavLink
            onClick={() => setOpen(false)}
            to="/"
            className={({ isActive }) =>
              `${linkClass({ isActive })} after:hidden ${
                isActive ? "bg-blue-600 text-white rounded-md" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={({ isActive }) =>
              `${linkClass({ isActive })} after:hidden ${
                isActive ? "bg-blue-600 text-white rounded-md" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/skills"
            className={({ isActive }) =>
              `${linkClass({ isActive })} after:hidden ${
                isActive ? "bg-blue-600 text-white rounded-md" : ""
              }`
            }
          >
            Skills
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/projects"
            className={({ isActive }) =>
              `${linkClass({ isActive })} after:hidden ${
                isActive ? "bg-blue-600 text-white rounded-md" : ""
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/experience"
            className={({ isActive }) =>
              `${linkClass({ isActive })} after:hidden ${
                isActive ? "bg-blue-600 text-white rounded-md" : ""
              }`
            }
          >
            Experience
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/certificates"
            className={({ isActive }) =>
              `${linkClass({ isActive })} after:hidden ${
                isActive ? "bg-blue-600 text-white rounded-md" : ""
              }`
            }
          >
            Certificates
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/connect"
            className={({ isActive }) =>
              `${linkClass({ isActive })} after:hidden ${
                isActive ? "bg-blue-600 text-white rounded-md" : ""
              }`
            }
          >
            Connect
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;