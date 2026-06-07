"use client";

import { useState, useCallback } from "react";

const images = Array.from({ length: 15 }, (_, i) => ({
  src: `/gallery/gallery-${i + 1}.png`,
  alt: `Gallery image ${i + 1}`,
}));

export default function Gallery() {
  const [offset, setOffset] = useState(0);

  const visibleItems = 3;
  const maxOffset = Math.max(0, images.length - visibleItems);

  const prev = useCallback(() => {
    setOffset((o) => Math.max(0, o - 1));
  }, []);

  const next = useCallback(() => {
    setOffset((o) => Math.min(maxOffset, o + 1));
  }, [maxOffset]);

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <div
          className="flex gap-2 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${offset * (100 / visibleItems)}%)` }}
        >
          {images.map((img) => (
            <div
              key={img.src}
              className="relative flex-shrink-0 aspect-square overflow-hidden rounded-lg bg-foreground/5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 group/image cursor-pointer"
              style={{ width: `calc(33.3333% - 0.333333rem)` }}
            >
              <div className="w-full h-full bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center text-foreground/30 text-xs">
                {img.alt}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-200" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        disabled={offset === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 z-10 p-2 rounded-full bg-background shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_1px_rgba(0,0,0,0.06)] hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)] hover:bg-foreground/5 transition-all duration-200 hover:scale-110 ${
          offset === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        disabled={offset >= maxOffset}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 z-10 p-2 rounded-full bg-background shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_1px_rgba(0,0,0,0.06)] hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)] hover:bg-foreground/5 transition-all duration-200 hover:scale-110 ${
          offset >= maxOffset ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
