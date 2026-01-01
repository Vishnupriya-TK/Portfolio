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
        bg-gradient-to-br from-white via-gray-100 to-gray-200
        dark:from-slate-900 dark:via-slate-950 dark:to-black
        text-gray-800 dark:text-gray-300
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* LEFT */}
          <div>
            <h2
              onClick={() => navigate("/")}
              className="
                font-brand text-3xl cursor-pointer
                text-blue-600
                hover:text-blue-500 active:text-blue-500 focus-visible:text-blue-500
                transition-colors duration-300
              "
            >
              Vishnu Priya T K
            </h2>

            <p
              className="
                font-tagline mt-3 max-w-sm
                text-gray-600 dark:text-gray-400
                hover:text-gray-700 active:text-gray-700
                dark:hover:text-gray-300 dark:active:text-gray-300
                transition-colors duration-300
              "
            >
              Where passion meets precision in digital creation.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-4 mt-5">
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
                href="https://instagram.com"
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
                href="https://www.hackerrank.com/profile/tkvishnupriyacse"
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
            <h3 className="font-links text-2xl font-semibold mb-4 text-blue-700">
              Quick Links
            </h3>

            <ul className="space-y-3 font-links">
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
            <h3 className="font-contact text-2xl font-semibold mb-4 text-blue-700">
              Get in Touch
            </h3>

            <ul className="space-y-4 font-contact">
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
                  +91 XXXXXXXXXX
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
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-19 pt-8 border-t border-blue-50 text-center text-sm text-gray-300 dark:text-gray-400 font-mono">
          © {new Date().getFullYear()} Vishnu Priya Kannan. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
