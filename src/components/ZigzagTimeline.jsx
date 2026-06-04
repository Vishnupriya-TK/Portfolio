import { ExternalLink } from "lucide-react";

const GAP = "2.75rem";

const TimelineCard = ({ item, className = "" }) => {
  const Icon = item.icon;

  return (
    <article
      className={`timeline-card glass-card w-full p-5 sm:p-6 flex flex-col min-h-[200px]
        border-[#8b9cff]/20 hover:border-[#8b9cff]/50 transition-colors duration-300
        ${item.cardClass ?? ""} ${className}`}
    >
      <div className="flex items-start gap-3 md:hidden mb-1">
        <div
          className="timeline-node w-10 h-10 rounded-full shrink-0
            bg-[#0f1419] border-2 border-[#8b9cff]
            flex items-center justify-center transition-all duration-300
            group-hover:bg-[#5b6fd6] group-hover:border-violet-400
            group-hover:shadow-[0_0_20px_rgba(91,111,214,0.45)]"
        >
          <Icon size={18} className={item.iconColor ?? "text-[#8b9cff]"} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-timeline-title text-base font-bold text-white leading-snug">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-sm text-[#8b9cff] mt-0.5 font-timeline-meta">{item.subtitle}</p>
          )}
          {item.place && (
            <p className="text-xs text-slate-400 mt-0.5 font-timeline-meta">{item.place}</p>
          )}
          {item.date && (
            <p className="text-xs text-slate-500 mt-0.5 font-timeline-meta">{item.date}</p>
          )}
        </div>
      </div>

      <div className="hidden md:block">
        <h3 className="font-timeline-title text-base sm:text-lg font-bold text-white leading-snug">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="text-sm text-[#8b9cff] mt-1 font-timeline-meta">{item.subtitle}</p>
        )}
        {item.place && (
          <p className="text-xs text-slate-400 mt-0.5 font-timeline-meta">{item.place}</p>
        )}
        {item.date && (
          <p className="text-xs text-slate-500 mt-1 font-timeline-meta">{item.date}</p>
        )}
      </div>

      <p className="text-sm text-slate-400 mt-3 leading-[1.75] flex-grow font-timeline-body">
        {item.desc}
      </p>

      {item.details?.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-slate-400 list-disc list-inside leading-[1.7] font-timeline-body">
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}

      {item.stack?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3">
          {item.stack.map((tag, i) => (
            <span key={i} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-[#8b9cff] hover:text-white transition font-medium min-h-[44px] md:min-h-0 touch-manipulation"
        >
          <ExternalLink size={14} />
          {item.linkLabel ?? "View Proof"}
        </a>
      )}
    </article>
  );
};

const ZigzagTimeline = ({ items }) => (
  <>
    <div className="md:hidden space-y-6">
      {items.map((item, idx) => (
        <div key={item.id ?? idx} className="group">
          <TimelineCard item={item} />
        </div>
      ))}
    </div>

    <div className="relative max-w-5xl mx-auto hidden md:block">
      <div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2
          bg-gradient-to-b from-[#5b6fd6] via-[#8b9cff] to-violet-500/50"
        aria-hidden
      />

      <div className="space-y-14">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isRight = idx % 2 === 0;

          return (
            <div
              key={item.id ?? idx}
              className={`group relative flex w-full ${
                isRight ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className="timeline-node absolute left-1/2 top-8 -translate-x-1/2 z-10
                  w-12 h-12 rounded-full
                  bg-[#0f1419] border-2 border-[#8b9cff]
                  flex items-center justify-center
                  shadow-[0_0_20px_rgba(139,156,255,0.35)]
                  transition-all duration-300
                  group-hover:bg-[#5b6fd6] group-hover:border-violet-400
                  group-hover:shadow-[0_0_24px_rgba(91,111,214,0.55)]"
              >
                <Icon size={20} className={item.iconColor ?? "text-[#8b9cff]"} />
              </div>

              <div
                className="w-[calc(50%-var(--timeline-gap))] max-w-[calc(50%-var(--timeline-gap))]"
                style={{ "--timeline-gap": GAP }}
              >
                <TimelineCard item={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </>
);

export default ZigzagTimeline;
