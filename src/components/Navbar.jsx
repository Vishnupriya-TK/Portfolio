import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition duration-200 font-medium
     ${isActive
       ? "bg-blue-600 text-white hover:bg-blue-400"
       : "text-gray-300 hover:text-blue-400"}`;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/90 border-b border-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center">
            VP
          </div>
          <span className="font-semibold text-xl text-gray-200">Portfolio</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
           <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/works" className={linkClass}>Works</NavLink>
          <NavLink to="/certificates" className={linkClass}>Certificates</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink to="/connect" className={linkClass}>Connect</NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-300"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/works" className={linkClass}>Works</NavLink>         
          <NavLink onClick={() => setOpen(false)} to="/certificates" className={linkClass}>Certificates</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/connect" className={linkClass}>Connect</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
