const SkillCategoryCard = ({ icon: Icon, title, description, skills, accent = "blue" }) => {
  const accents = {
    blue: { iconBg: "bg-blue-500/10 border-blue-500/30", iconColor: "text-blue-400" },
    green: { iconBg: "bg-emerald-500/10 border-emerald-500/30", iconColor: "text-emerald-400" },
    purple: { iconBg: "bg-violet-500/10 border-violet-500/30", iconColor: "text-violet-400" },
    orange: { iconBg: "bg-orange-500/10 border-orange-500/30", iconColor: "text-orange-400" },
    cyan: { iconBg: "bg-cyan-500/10 border-cyan-500/30", iconColor: "text-cyan-400" },
    pink: { iconBg: "bg-pink-500/10 border-pink-500/30", iconColor: "text-pink-400" },
  };

  const style = accents[accent] ?? accents.blue;

  return (
    <div
      className="rounded-2xl border border-white/10 bg-[#0f1419]/90 backdrop-blur-sm
        p-6 sm:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        transition-all duration-300 hover:-translate-y-1 hover:border-[#8b9cff]/30"
    >
      <div
        className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${style.iconBg}`}
      >
        <Icon size={22} className={style.iconColor} />
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 mb-5 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide
              bg-[#1e293b] text-slate-200 border border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
