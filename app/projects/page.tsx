import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { profile, projects } from "@/src/data";

export const metadata: Metadata = {
  title: `Projects | ${profile.shortName}`,
  description:
    "Selected web development projects built by Gabriel Guban.",
};

export default function ProjectsPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 flex items-center gap-4">
          <Link
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            href="/"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xs border border-border bg-card shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="relative aspect-[2/1] overflow-hidden border-b border-border bg-muted">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    {project.title}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-base font-bold">{project.title}</h2>
                  <svg
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.desc}
                </p>
                <p className="mt-3 inline-block rounded-xs bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                  {project.domain}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
