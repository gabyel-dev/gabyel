import { profile } from "@/src/data";

export default function About() {
  return (
    <div className="col-span-1 space-y-2 rounded-xs border border-border bg-card p-4 shadow-xs transition-all duration-200 hover:shadow-sm md:col-span-4">
      <h2 className="text-lg font-bold">About</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
