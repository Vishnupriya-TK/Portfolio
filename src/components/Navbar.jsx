import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Sparkles,
  FolderKanban,
  Briefcase,
  Award,
  Mail,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/skills", label: "Skills", icon: Sparkles },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/experience", label: "Experience", icon: Briefcase },
  { to: "/certificates", label: "Certificates", icon: Award },
  { to: "/connect", label: "Connect", icon: Mail },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative inline-flex items-center gap-1.5 px-2.5 lg:px-3 py-2 font-medium text-sm lg:text-[14px] transition duration-300
     ${isActive ? "text-[#8b9cff]" : "text-slate-300 hover:text-[#8b9cff]"}
     after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px]
     after:bg-gradient-to-r after:from-[#8b9cff] after:to-violet-500 after:origin-left after:transition-transform after:duration-300
     ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition
     ${isActive ? "bg-[#5b6fd6] text-white" : "text-slate-300 hover:bg-white/10"}`;

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center px-3 sm:px-4 pt-3 pointer-events-none">
      <nav
        className="
          pointer-events-auto w-full md:w-[90%] max-w-[90rem]
          backdrop-blur-md bg-[#111827]/90 border border-[#8b9cff]/15
          rounded-xl md:rounded-2xl shadow-lg shadow-black/30
        "
      >
        <div className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2.5 shrink-0"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#5b6fd6] to-violet-500 text-white font-bold flex items-center justify-center text-sm font-display">
                VP
              </div>
              <span className="font-semibold text-sm sm:text-base text-white font-display whitespace-nowrap">
                Portfolio
              </span>
            </button>

            <div className="hidden md:flex items-center justify-end gap-3 lg:gap-5 xl:gap-6 font-nav shrink-0">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} className={linkClass}>
                  <Icon size={15} className="shrink-0 opacity-85" />
                  {label}
                </NavLink>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2.5 rounded-lg text-slate-200 hover:bg-white/10 active:bg-white/15 transition touch-manipulation shrink-0"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden px-3 pb-3 flex flex-col gap-0.5 border-t border-[#8b9cff]/15 bg-[#111827]/95 font-nav rounded-b-xl">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className={mobileLinkClass}>
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
