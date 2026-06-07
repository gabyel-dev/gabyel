"use client";

const timeline = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    year: "2026",
    accent: true,
  },

  {
    role: "BS Information Technology",
    company: "Pateros Technological College",
    year: "2024",
  },
  {
    role: "Hello World! 👋🏻",
    company: "Wrote my first line of code",
    year: "2024",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="bento-card p-4 space-y-2 group flex-1">
      <h2 className="text-lg font-bold">Experience</h2>
      <div className="relative space-y-4 mt-4">
        <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border" />
        {timeline.map((item, i) => (
          <div key={i} className="relative pl-6 group/role">
            <div
              className={`absolute left-0 top-1.5 w-3 h-3  border-2 transition-colors ${
                item.accent
                  ? " bg-black"
                  : "border-border bg-background group-hover/role:bg-black"
              }`}
            />
            <div className="space-y-1">
              <h3
                className={`text-sm font-semibold transition-colors ${
                  item.accent
                }`}
              >
                {item.role}
              </h3>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${item.accent}`}>{item.company}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)] ${
                    item.accent ? "bg-accent/10" : ""
                  }`}
                >
                  {item.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
