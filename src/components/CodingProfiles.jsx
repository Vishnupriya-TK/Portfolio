import React from "react";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode size={26} className="text-orange-400" />,
    bg: "from-zinc-800 to-zinc-900",
    url: "https://leetcode.com/u/VISHNUPRIYA-TK/",
    stats: [
      { value: "300+", label: "Solved" },
      { value: "306,081", label: "Rank" },
      { value: "81%", label: "Acceptance" },
      { value: "5", label: "Badges" },
    ],
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks size={26} className="text-green-400" />,
    bg: "from-green-700 to-green-800",
    url: "https://www.geeksforgeeks.org/profile/tkvishnup78ds",
    stats: [
      { value: "37", label: "Solved" },
      { value: "77", label: "Score" },
      { value: "225", label: "Institute Rank" },
    ],
  },
  {
    name: "HackerRank",
    icon: <SiHackerrank size={26} className="text-green-500" />,
    bg: "from-green-600 to-green-700",
    url: "https://www.hackerrank.com/profile/4179Vishnupriya",
    stats: [
      { value: "3", label: "Stars" },
      { value: "2", label: "Badges" },
      { value: "1365", label: "Hackos" },
      { value: "3", label: "Certificates" },
    ],
  },
  {
    name: "GitHub",
    icon: <SiGithub size={26} className="text-emerald-400" />,
    bg: "from-zinc-700 to-zinc-800",
    url: "https://github.com/Vishnupriya-TK",
    stats: [
      { value: "14", label: "Repos" },
      { value: "250+", label: "Contributions" },
      { value: "2", label: "Followers" },
      { value: "September 2024", label: "Active From" },
    ],
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin size={26} className="text-blue-300" />,
    bg: "from-blue-600 to-blue-700",
    url: "https://www.linkedin.com/in/vishnu-priya-t-k-334288308/",
    stats: [
      { value: "500+", label: "Connections" },
      { value: "700+", label: "Followers" },
      { value: "24", label: "Posts" },
      { value: "May 2024", label: "Active From" },
    ],
  },
];

const CodingProfiles = () => {
  return (
    <section className="font-['Sora']">
      <h2 className="text-3xl font-bold text-center mb-14">
        My Coding Profiles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${profile.bg} rounded-2xl p-6 text-white
            shadow-xl transition-all duration-300 hover:scale-[1.05]
            hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {profile.icon}
                <h3 className="text-xl font-semibold lowercase">
                  {profile.name}
                </h3>
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/60 rounded-xl py-4 text-center"
                >
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
