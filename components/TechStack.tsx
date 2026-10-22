import Link from "next/link";
import { stackCategories } from "@/src/data";

export default function TechStack() {
  return (
    <div className="col-span-1 space-y-2 rounded-xs border border-border bg-card p-4 shadow-xs transition-all duration-200 hover:shadow-sm md:col-span-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Tech Stack</h2>
        <Link
          href="/tech-stack"
          className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          View All
          <svg
            className="h-3 w-3"
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
        </Link>
      </div>
      <div className="space-y-4">
        {stackCategories.slice(0, 2).map((category) => (
          <div key={category.name}>
            <h3 className="mb-2 text-sm font-semibold">{category.name}</h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xs bg-muted px-2 py-0.5 text-xs shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
