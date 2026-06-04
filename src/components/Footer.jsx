import { NavLink, useNavigate } from "react-router-dom";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  const navigate = useNavigate();

  // universal hover behavior (desktop + mobile + keyboard)
  const iconBase =
    "cursor-pointer text-gray-600 dark:text-gray-400 transition-colors duration-300";

  return (
    <footer
      className="
        font-body
        bg-[#06080d]
        border-t border-white/8
        text-slate-300
      "
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-8 sm:py-10">

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">

          {/* LEFT */}
          <div>
            <h2
              onClick={() => navigate("/")}
              className="
                font-brand text-2xl cursor-pointer
                text-blue-500
                hover:text-blue-400 active:text-blue-400 focus-visible:text-blue-400
                transition-colors duration-300
              "
            >
              Vishnu Priya T K
            </h2>

            <p
              className="
                font-tagline mt-2 max-w-sm text-sm
                text-slate-400
                hover:text-slate-300 active:text-slate-300
                transition-colors duration-300
              "
            >
              Where passion meets precision in digital creation.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://github.com/Vishnupriya-TK"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`${iconBase} hover:text-blue-600 active:text-blue-600 focus-visible:text-blue-600`}
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/vishnu-priya-t-k-334288308/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`${iconBase} hover:text-blue-600 active:text-blue-600 focus-visible:text-blue-600`}
              >
                <Linkedin />
              </a>

              <a
                href="https://instagram.com/_vishnupriya_28_"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={`${iconBase} hover:text-pink-500 active:text-pink-500 focus-visible:text-pink-500`}
              >
                <Instagram />
              </a>

              <a
                href="https://leetcode.com/u/VISHNUPRIYA-TK/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className={`${iconBase} hover:text-orange-500 active:text-orange-500 focus-visible:text-orange-500`}
              >
                <SiLeetcode size={20} />
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/tkvishnup78ds"
                target="_blank"
                rel="noreferrer"
                aria-label="GeeksforGeeks"
                className={`${iconBase} hover:text-green-600 active:text-green-600 focus-visible:text-green-600`}
              >
                <SiGeeksforgeeks size={20} />
              </a>

              <a
                href="https://www.hackerrank.com/profile/4179Vishnupriya"
                target="_blank"
                rel="noreferrer"
                aria-label="HackerRank"
                className={`${iconBase} hover:text-green-500 active:text-green-500 focus-visible:text-green-500`}
              >
                <FaHackerrank size={20} />
              </a>
            </div>
          </div>

          {/* MIDDLE */}
          <div>
            <h3 className="font-links text-lg font-semibold mb-3 text-blue-500">
              Quick Links
            </h3>

            <ul className="space-y-2 font-links text-sm">
              {[
                { name: "Skills", path: "/skills" },
                { name: "Projects", path: "/projects" },
                { name: "Experience", path: "/experience" },
                { name: "Connect", path: "/connect" },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="
                      cursor-pointer
                      text-gray-600 dark:text-gray-400
                      hover:text-blue-400 active:text-blue-400 focus-visible:text-blue-400
                      transition-colors duration-300
                    "
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="font-contact text-lg font-semibold mb-3 text-blue-500">
              Get in Touch
            </h3>

            <ul className="space-y-2.5 font-contact text-sm">
              {/* EMAIL */}
              <li>
                <a
                  href="mailto:tkvishnupriyacse@gmail.com"
                  className="
          flex items-center gap-3
          text-gray-600 dark:text-gray-400
          hover:text-blue-400
          active:text-blue-400
          focus-visible:text-blue-400
          transition-colors duration-300
        "
                >
                  <Mail size={18} />
                  tkvishnupriyacse@gmail.com
                </a>
              </li>

              {/* PHONE */}
              <li>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="
          flex items-center gap-3
          text-gray-600 dark:text-gray-400
          hover:text-blue-400
          active:text-blue-400
          focus-visible:text-blue-400
          transition-colors duration-300
        "
                >
                  <Phone size={18} />
                  +91 9042407180
                </a>
              </li>

              {/* LOCATION */}
              <li>
                <a
                  href="https://maps.google.com/?q=Madurai,Tamil Nadu,India"
                  target="_blank"
                  rel="noreferrer"
                  className="
          flex items-center gap-3
          text-gray-600 dark:text-gray-400
          hover:text-blue-400
          active:text-blue-400
          focus-visible:text-blue-400
          transition-colors duration-300
        "
                >
                  <MapPin size={18} />
                  Madurai, Tamil Nadu, India
                </a>
              </li>
              <li className="text-gray-400">
                <a href="https://portfolio-roan-alpha-13.vercel.app/">
                  🌐 Visit My Portfolio
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-8 pt-5 border-t border-white/10 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} Vishnu Priya Kannan. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
