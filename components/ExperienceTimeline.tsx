import { experience } from "@/src/data";

export default function ExperienceTimeline() {
  return (
    <div className="flex-1 space-y-2 rounded-xs border border-border bg-card p-4 shadow-xs transition-all duration-200 hover:shadow-sm">
      <h2 className="text-lg font-bold">Experience</h2>
      <div className="relative mt-4 space-y-4">
        <div className="absolute top-1.5 bottom-2 left-1.5 w-px bg-border" />
        {experience.map((item) => (
          <div
            key={`${item.role}-${item.year}`}
            className="group/role relative pl-6"
          >
            <div
              className={`absolute top-1.5 left-0 h-3 w-3 border-2 transition-colors ${
                item.accent
                  ? "border-foreground bg-foreground"
                  : "border-border bg-background group-hover/role:bg-foreground"
              }`}
            />
            <div className="space-y-1">
              <h3 className="text-sm font-semibold">{item.role}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {item.company}
                </span>
                <span
                  className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                    item.accent
                      ? "bg-accent/10 text-accent"
                      : "bg-muted text-muted-foreground"
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
