const projects = [
  {
    title: "Cartivo",
    desc: "E-commerce platform for watches",
    url: "https://cartivo-v1.vercel.app",
    domain: "cartivo-v1.vercel.app",
  },
  {
    title: "Blockstone",
    desc: "Sales tracking dashboard for printing business",
    url: "https://blockstone-prints.vercel.app",
    domain: "blockstone-prints.vercel.app",
  },
  {
    title: "Thesis Repo",
    desc: "Thesis Repository for PTC BSIT 2I Students",
    url: "https://sts-research.vercel.app",
    domain: "sts-research.vercel.app",
  },
];

import Link from "next/link";

export default function Projects() {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in animation-delay-300">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Recent Projects</h2>
        <Link
          href="/projects"
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
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projects.map((p) => (
          <div key={p.title} className="bento-card p-3 space-y-1">
            <Link
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-1"
            >
              <h3 className="text-sm font-semibold ">{p.title}</h3>
              <p className="text-xs text-foreground/70">{p.desc}</p>
              <p className="text-xs text-foreground/50 font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md inline-block mt-1">
                {p.domain}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
