import React from "react";

const SkillCard = ({ title, skills }) => {
  return (
    <div
      className="
        relative
        w-full
        h-auto md:h-[400px]                    /* ✅ SAME HEIGHT FOR ALL */
        rounded-3xl
        p-6
        flex flex-col
        bg-gradient-to-br from-[#1e1e1e] to-[#121212]
        border border-white/10          /* ✅ BORDER */
        shadow-[0_0_40px_rgba(0,0,0,0.45)]
        transition-all duration-500
        hover:-translate-y-3
        hover:border-blue-500/50        /* ✅ BORDER GLOW ON HOVER */
        hover:shadow-[0_0_60px_rgba(59,130,246,0.35)]
      "
    >
      {/* Card Glow */}
      <div className="absolute inset-0 rounded-3xl bg-blue-500/5 opacity-0 hover:opacity-100 transition pointer-events-none" />

      {/* Title */}
      <h3 className="text-xl font-semibold text-blue-500 mb-6 tracking-wide flex items-center gap-2">
        {title}
      </h3>

      {/* Skills */}
      <div className="flex-1 space-y-5 overflow-y-auto pr-1 scrollbar-hide">
        {skills.map((skill, index) => (
          <div key={index}>
            <p className="text-sm text-gray-300 mb-2 tracking-wide">
              {skill.name}
            </p>

            {/* Progress Track */}
            <div className="w-full h-3 rounded-full bg-zinc-700/70 overflow-hidden">
              <div
                className="
                  h-full rounded-full
                  bg-gradient-to-r from-blue-500 to-cyan-400
                  transition-all duration-700
                "
                style={{
                  width: `${(skill.level / 5) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
