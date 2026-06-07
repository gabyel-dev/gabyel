export default function TechStack() {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in animation-delay-200">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Tech Stack</h2>
        <a
          href="/tech-stack"
          className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors"
        >
          View All
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
            ].map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Backend</h3>
          <div className="flex flex-wrap gap-1.5">
            {["Node.js", "PostgreSQL", "Supabase"].map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
