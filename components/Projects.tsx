import Link from "next/link";
import { projects } from "@/src/data";

export default function Projects() {
  return (
    <div className="col-span-1 space-y-2 rounded-xs border border-border bg-card p-4 shadow-xs transition-all duration-200 hover:shadow-sm md:col-span-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Recent Projects</h2>
        <Link
          href="/projects"
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
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="space-y-1 rounded-xs border border-border bg-muted/40 p-3 transition-colors hover:bg-muted"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-1"
            >
              <h3 className="text-sm font-semibold">{project.title}</h3>
              <p className="text-xs text-muted-foreground">{project.desc}</p>
              <p className="mt-1 inline-block rounded-xs bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                {project.domain}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
