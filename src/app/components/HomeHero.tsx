"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

const AUTO_ADVANCE_MS = 5500;

type Slide = {
  src: string;
  alt: string;
  title: ReactNode;
};

const slides: Slide[] = [
  {
    src: "/images/image 2.png",
    alt: "Fresh Bahamian food for your job site",
    title: (
      <>
        Bringing{" "}
        <span className="text-[#4BA4C5]">freshly made Bahamian food</span> to
        your job site.
      </>
    ),
  },
  {
    src: "/images/scroll3.png",
    alt: "Fast, easy ordering, delivered on time for your crew’s lunch",
    title: (
      <>
        <span className="text-[#4BA4C5]">Fast, easy ordering</span>, delivered
        right on time for your crew’s lunch.
      </>
    ),
  },
  {
    src: "/images/scroll1.png",
    alt: "Operating successfully Monday through Friday",
    title: (
      <>
        Operating successfully{" "}
        <span className="text-[#4BA4C5]">Monday through Friday</span>.
      </>
    ),
  },
  {
    src: "/images/scroll4.png",
    alt: "Easy and detailed billing for construction owners and managers",
    title: (
      <>
        <span className="text-[#4BA4C5]">Easy and detailed billing</span> for
        construction owners and managers.
      </>
    ),
  },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="grid min-h-[min(80vh,560px)] grid-cols-1 sm:min-h-[min(85vh,640px)] md:grid-cols-2">
      <div className="flex flex-col justify-center gap-5 bg-[#F7DC51] px-4 py-10 sm:gap-6 sm:px-12 sm:py-14 lg:px-16">
        <div
          className="relative -mt-2 min-h-[12.5rem] sm:min-h-[15.5rem] lg:min-h-[17rem]"
          aria-live="polite"
          aria-atomic="true"
        >
          {slides.map((slide, i) => (
            <h1
              key={i}
              aria-hidden={i !== index}
              className={`absolute inset-x-0 top-0 max-w-xl text-[clamp(1.625rem,5.5vw+0.35rem,2.25rem)] font-extrabold leading-[1.15] tracking-tight text-balance text-[#1a1a1a] transition-opacity duration-500 sm:text-5xl sm:leading-tight lg:text-[60px] lg:leading-[1.1] ${
                i === index
                  ? "z-[1] opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              {slide.title}
            </h1>
          ))}
        </div>
        <div
          className="flex gap-2 pt-2"
          role="tablist"
          aria-label="Hero slides"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1} of ${slides.length}`}
              onClick={() => setIndex(i)}
              className={`size-2.5 rounded-full transition-colors ${
                i === index
                  ? "bg-[#4BA4C5]"
                  : "bg-[#1a1a1a]/25 hover:bg-[#1a1a1a]/40"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="relative min-h-[220px] sm:min-h-[280px] md:min-h-0">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`absolute inset-0 object-cover transition-opacity duration-500 ${
              i === index ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
