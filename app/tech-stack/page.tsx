import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech Stack | Bryl Lim",
  description:
    "Complete overview of my technical skills and expertise across different domains.",
};

const categories = [
  {
    name: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Prettier",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",

      "Express.js",
      "Supabase",
      "PostgreSQL",
      "MySQL",

      "OAuth",
      "JWT",

      "REST",
    ],
  },

  {
    name: "Developer Tools",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "VS Code", "Discord"],
  },
];

export default function TechStackPage() {
  return (
    <>
      <main className="animate-fade-in">
        <div className="page-transition max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <Link
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
              href="/"
            >
              <svg
                className="w-4 h-4"
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
          <div className="space-y-8 animate-fade-in">
            {categories.map((cat) => (
              <div key={cat.name}>
                <h2 className="text-lg font-bold mb-4">{cat.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md bg-foreground/5 border border-foreground/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="max-w-4xl mx-auto px-4 py-8 border-t border-border mt-12">
          <div className="flex justify-center items-center">
            <p className="text-sm text-foreground/70">
              &copy; {new Date().getFullYear()} Gab Guban. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
