import React from "react";

const SkillCard = ({ title, skills }) => {
  return (
    <div
      className="
        relative
        w-full
        h-auto md:h-[490px]
        rounded-3xl
        p-6 md:p-7
        flex flex-col
        bg-gradient-to-br from-[#1e293b] to-[#0f172a]
        border border-white/10
        shadow-[0_0_40px_rgba(0,0,0,0.45)]
        transition-all duration-500
        hover:-translate-y-3
        hover:border-cyan-400/50
        hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-400/5 opacity-0 hover:opacity-100 transition pointer-events-none" />

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-6 tracking-wide flex items-center gap-2">
        {title}
      </h3>

      {/* Skills (NO SCROLL ❌) */}
      <div className="flex-1 space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">

            {/* ICON + NAME */}
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl text-white">
                {skill.icon}
              </span>

              <p className="text-base md:text-lg text-gray-200 font-medium tracking-wide">
                {skill.name}
              </p>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-2.5 rounded-full bg-zinc-700/60 overflow-hidden">
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