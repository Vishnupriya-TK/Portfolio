import { NavLink, useNavigate } from "react-router-dom";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaHackerrank, FaCodepen } from "react-icons/fa"; // For HackerRank, etc.
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"; // LeetCode, GFG

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="
      bg-gradient-to-br from-white via-gray-100 to-gray-200
      dark:from-slate-900 dark:via-slate-950 dark:to-black to-white via-gray-100 to-gray-200
      transition-colors
    ">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* LEFT */}
          <div>
            <h2
              onClick={() => navigate("/")}
              className="
                text-2xl font-bold cursor-pointer
                text-blue-600 hover:text-blue-500
                dark:text-white dark:hover:text-blue-400
                transition
              "
            >
              Vishnu Priya
            </h2>

            <p className="mt-3 max-w-sm text-gray-600 dark:text-gray-300">
              Crafting digital experiences with passion and precision.
            </p>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-4 mt-5">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="hover:text-blue-600 dark:hover:text-white transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="hover:text-blue-600 dark:hover:text-white transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="hover:text-blue-600 dark:hover:text-white transition" />
              </a>
              <a href="https://leetcode.com" target="_blank" rel="noreferrer">
                <SiLeetcode className="hover:text-blue-600 dark:hover:text-white transition" size={20} />
              </a>
              <a href="https://www.geeksforgeeks.org" target="_blank" rel="noreferrer">
                <SiGeeksforgeeks className="hover:text-green-600 dark:hover:text-white transition" size={20} />
              </a>
              <a href="https://www.hackerrank.com" target="_blank" rel="noreferrer">
                <FaHackerrank className="hover:text-green-500 dark:hover:text-white transition" size={20} />
              </a>
            </div>
          </div>

          {/* MIDDLE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Projects", path: "/work" },
                { name: "Skills", path: "/skills" },
                { name: "Resume", path: "/resume" },
                { name: "Connect", path: "/connect" },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-white">
              Get in Touch
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Mail size={18} />
                <span>vishnupriya@email.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Phone size={18} />
                <span>+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin size={18} />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="
          mt-16 pt-6 border-t
          border-blue-200 dark:border-slate-800
          text-center text-sm
          text-gray-500 dark:text-gray-400
        ">
          © {new Date().getFullYear()} Vishnu Priya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
