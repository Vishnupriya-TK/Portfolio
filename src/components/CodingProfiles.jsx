import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { ExternalLink, RefreshCw, Radio } from "lucide-react";
import { useCodingStats } from "../hooks/useCodingStats";

const staticProfiles = [
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks size={24} className="text-green-400" />,
    bg: "from-green-700/90 to-green-900/90",
    url: "https://www.geeksforgeeks.org/profile/tkvishnup78ds",
    stats: [
      { value: "37", label: "Solved" },
      { value: "77", label: "Score" },
      { value: "225", label: "Institute Rank" },
    ],
  },
  {
    name: "GitHub",
    icon: <SiGithub size={24} className="text-emerald-400" />,
    bg: "from-zinc-700/90 to-zinc-900/90",
    url: "https://github.com/Vishnupriya-TK",
    stats: [
      { value: "14", label: "Repos" },
      { value: "250+", label: "Contributions" },
      { value: "2", label: "Followers" },
    ],
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin size={24} className="text-blue-300" />,
    bg: "from-blue-600/90 to-blue-800/90",
    url: "https://www.linkedin.com/in/vishnu-priya-t-k-334288308/",
    stats: [
      { value: "500+", label: "Connections" },
      { value: "700+", label: "Followers" },
      { value: "24", label: "Posts" },
    ],
  },
];

const StatBox = ({ value, label, loading }) => (
  <div className="bg-black/40 dark:bg-black/50 rounded-xl py-3.5 text-center min-h-[72px] flex flex-col justify-center">
    {loading ? (
      <div className="h-5 w-12 mx-auto rounded bg-white/20 animate-pulse" />
    ) : (
      <p className="text-lg sm:text-xl font-bold">{value}</p>
    )}
    <p className="text-xs text-gray-300 mt-1">{label}</p>
  </div>
);

const LiveProfileCard = ({
  name,
  icon,
  bg,
  url,
  stats,
  loading,
  error,
  hasData,
  live,
}) => (
  <div
    className={`bg-gradient-to-br ${bg} rounded-2xl p-5 sm:p-6 text-white
      shadow-xl transition-all duration-300 hover:scale-[1.02]
      border border-white/10`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          {live && (
            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-300">
              <Radio size={10} className="animate-pulse" />
              Live
            </span>
          )}
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
        aria-label={`Open ${name}`}
      >
        <ExternalLink size={16} />
      </a>
    </div>

    {error && !loading && (
      <p className="text-xs text-red-200 mb-3 bg-red-900/30 rounded-lg px-2 py-1.5">
        {hasData
          ? "Could not refresh stats. Showing last known values."
          : "Could not load live stats. Use Refresh or open your profile."}
      </p>
    )}

    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat, index) => (
        <StatBox
          key={index}
          value={stat.value}
          label={stat.label}
          loading={loading && stat.value === "—"}
        />
      ))}
    </div>
  </div>
);

const CodingProfiles = () => {
  const { leetcode, hackerrank, lastUpdated, refresh } = useCodingStats();

  const lc = leetcode.data;
  const hr = hackerrank.data;

  const leetcodeStats = lc
    ? [
        { value: String(lc.totalSolved), label: "Solved" },
        { value: lc.ranking?.toLocaleString() ?? "—", label: "Rank" },
        { value: lc.acceptanceRate != null ? `${lc.acceptanceRate}%` : "—", label: "Acceptance" },
        { value: String(lc.badges), label: "Badges" },
      ]
    : [
        { value: "—", label: "Solved" },
        { value: "—", label: "Rank" },
        { value: "—", label: "Acceptance" },
        { value: "—", label: "Badges" },
      ];

  const leetcodeBreakdown = lc
    ? [
        { value: String(lc.easySolved), label: "Easy" },
        { value: String(lc.mediumSolved), label: "Medium" },
        { value: String(lc.hardSolved), label: "Hard" },
      ]
    : [];

  const hackerrankStats = hr
    ? [
        { value: String(hr.totalStars), label: "Stars" },
        { value: String(hr.badgeCount), label: "Badges" },
        { value: String(hr.totalSolved), label: "Challenges" },
        { value: `Lv.${hr.level}`, label: "Level" },
      ]
    : [
        { value: "—", label: "Stars" },
        { value: "—", label: "Badges" },
        { value: "—", label: "Challenges" },
        { value: "—", label: "Level" },
      ];

  const hackerrankExtra = hr
    ? [
        { value: hr.topSkill, label: "Top Skill" },
        { value: hr.memberSince, label: "Member Since" },
      ]
    : [];

  return (
    <section className="font-['Sora']">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h2 className="section-title">
            Coding Stats
          </h2>
          <p className="section-subtitle mt-1">
            LeetCode & HackerRank update live every 5 minutes
          </p>
        </div>

        <button
          onClick={refresh}
          disabled={leetcode.loading || hackerrank.loading}
          className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-lg text-sm
            border border-gray-300 dark:border-gray-600
            text-gray-700 dark:text-gray-300
            hover:bg-gray-100 dark:hover:bg-white/10 transition disabled:opacity-50"
        >
          <RefreshCw
            size={16}
            className={leetcode.loading || hackerrank.loading ? "animate-spin" : ""}
          />
          Refresh
        </button>
      </div>

      {lastUpdated && (
        <p className="text-xs text-gray-500 dark:text-gray-500 mb-6 -mt-4">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </p>
      )}

      {/* Live platforms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <LiveProfileCard
            name="LeetCode"
            icon={<SiLeetcode size={24} className="text-orange-400" />}
            bg="from-zinc-800 to-zinc-950"
            url="https://leetcode.com/u/VISHNUPRIYA-TK/"
            stats={leetcodeStats}
            loading={leetcode.loading}
            error={leetcode.error}
            hasData={Boolean(lc)}
            live
          />
          {leetcodeBreakdown.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-3">
              {leetcodeBreakdown.map((s) => (
                <div
                  key={s.label}
                  className="text-center py-2 rounded-lg bg-orange-500/10 border border-orange-500/20"
                >
                  <p className="text-sm font-semibold text-orange-400">{s.value}</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <LiveProfileCard
            name="HackerRank"
            icon={<SiHackerrank size={24} className="text-green-500" />}
            bg="from-green-700 to-green-900"
            url="https://www.hackerrank.com/profile/4179Vishnupriya"
            stats={hackerrankStats}
            loading={hackerrank.loading}
            error={hackerrank.error}
            hasData={Boolean(hr)}
            live
          />
          {hackerrankExtra.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mt-3">
              {hackerrankExtra.map((s) => (
                <div
                  key={s.label}
                  className="text-center py-2 rounded-lg bg-green-500/10 border border-green-500/20"
                >
                  <p className="text-sm font-semibold text-green-400 truncate px-2">{s.value}</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Other profiles */}
      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-5">
        Other Profiles
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staticProfiles.map((profile, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${profile.bg} rounded-2xl p-5 text-white
              shadow-lg transition-all duration-300 hover:scale-[1.02] border border-white/10`}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                {profile.icon}
                <h3 className="text-lg font-semibold">{profile.name}</h3>
              </div>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {profile.stats.map((stat, index) => (
                <StatBox key={index} value={stat.value} label={stat.label} loading={false} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
