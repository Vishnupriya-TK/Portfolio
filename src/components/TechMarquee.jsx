import { skillMarqueeItems } from "../data/techSkills";

const TechMarquee = () => {
  const items = [...skillMarqueeItems, ...skillMarqueeItems];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-14 sm:py-20 border-t border-white/5">
      <p className="font-home-section-label text-xs uppercase tracking-[0.2em] text-[#8b9cff] mb-3">
        Skills & Tools
      </p>
      <h2 className="font-home-section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        <span className="text-white">Technologies </span>
        <span className="bg-gradient-to-r from-[#8b9cff] to-cyan-400 bg-clip-text text-transparent">
          I Work With
        </span>
      </h2>

      <div className="overflow-hidden">
        <div className="marquee-track flex items-center gap-10 sm:gap-14 w-max">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${i}`}
                className="flex items-center gap-2 shrink-0 text-slate-400 hover:text-[#8b9cff] transition-colors"
              >
                <Icon size={22} className="text-[#6b7aa8]" />
                <span className="text-xs sm:text-sm font-medium tracking-widest uppercase font-hero-greet">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
