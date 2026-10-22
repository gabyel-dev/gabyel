"use client";

import { useEffect, useState } from "react";

type CertificationCardProps = {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
};

export default function CertificationCard({
  title,
  issuer,
  date,
  image,
}: CertificationCardProps) {
  const [open, setOpen] = useState(false);
  const isPdf =
    image?.split(/[?#]/)[0].toLowerCase().endsWith(".pdf") ?? false;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${title} certificate`}
        className="group flex w-full items-center gap-3 rounded-xs border border-border bg-muted/40 p-2.5 text-left transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="flex aspect-[4/3] w-20 shrink-0 items-center justify-center overflow-hidden rounded-xs border border-border bg-muted">
          {isPdf ? (
            <span className="flex h-full w-full flex-col items-center justify-center gap-1 text-muted-foreground">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-[9px] font-bold tracking-widest">PDF</span>
            </span>
          ) : image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={`${title} certificate`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
            />
          ) : (
            <svg
              className="h-6 w-6 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15a6 6 0 100-12 6 6 0 000 12z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"
              />
            </svg>
          )}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs leading-snug font-semibold">
            {title}
          </span>
          <span className="mt-0.5 block truncate text-[11px] text-muted-foreground">
            {issuer}
            {date ? ` · ${date}` : ""}
          </span>
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} certificate`}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4 backdrop-blur-sm"
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close certificate"
              className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background shadow-sm transition-colors hover:bg-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {isPdf ? (
              <iframe
                src={image}
                title={`${title} certificate`}
                className="h-[85vh] w-[90vw] max-w-4xl rounded-xs border border-border bg-card"
              />
            ) : image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={`${title} certificate`}
                className="max-h-[85vh] max-w-full rounded-xs border border-border object-contain shadow-sm"
              />
            ) : (
              <div className="rounded-xs border border-border bg-card p-12 text-sm text-muted-foreground">
                No certificate preview available.
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
