import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { profile, stackCategories } from "@/src/data";

export const metadata: Metadata = {
  title: `Tech Stack | ${profile.shortName}`,
  description:
    "Complete overview of my technical skills and expertise across different domains.",
};

export default function TechStackPage() {
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
          <h1 className="text-2xl font-bold">Tech Stack</h1>
        </div>
        <div className="space-y-8">
          {stackCategories.map((category) => (
            <div key={category.name}>
              <h2 className="mb-4 text-lg font-bold">{category.name}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xs border border-border bg-muted px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
