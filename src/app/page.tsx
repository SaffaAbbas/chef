import Image from "next/image";
import Link from "next/link";
import { GetStartedSection } from "./components/GetStartedSection";
import { HomeHero } from "./components/HomeHero";
import { MenuGalleryRow } from "./components/MenuGalleryRow";

const promoCards = [
  {
    href: "/menu",
    title: "Menu",
    imageSrc: `/images/${encodeURIComponent("mask 1.png")}`,
    alt: "Chef 242 menu",
  },
  {
    href: "/about",
    title: "About us",
    imageSrc: `/images/${encodeURIComponent("Mask group.png")}`,
    alt: "About Chef 242",
  },
] as const;

const clientLogos: Array<{
  file: string;
  alt: string;
  imageClassName?: string;
}> = [
  { file: "Frame 93.png", alt: "Bahamas Machine Rentals" },
  { file: "Frame 94.png", alt: "Bahamas Green Construction" },
  {
    file: "logo full.svg",
    alt: "Paradise Breeze",
    imageClassName: "translate-y-1.5 sm:translate-y-2 md:translate-y-2.5",
  },
  { file: "logo 2.png", alt: "Royal Oasis" },
];

const menuGalleryImages = [
  { file: "menu 1.png", alt: "Chef 242 menu — seafood rice" },
  { file: "menu 2.png", alt: "Chef 242 menu — tacos" },
  { file: "menu 3.png", alt: "Chef 242 menu — Mediterranean bowl" },
  { file: "menu 4.png", alt: "Chef 242 menu — sliders and fries" },
] as const;

export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />

      <section className="border-t border-[#4BA4C5] bg-white px-3 py-5 sm:px-6 sm:py-7">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 sm:max-w-3xl md:grid-cols-2 md:gap-4">
          {promoCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative aspect-[4/3] w-full max-w-md justify-self-center overflow-hidden rounded-none md:max-w-none md:justify-self-stretch"
            >
              <Image
                src={card.imageSrc}
                alt={card.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, 360px"
              />
              <span className="absolute left-1/2 top-1/2 z-10 max-w-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2 whitespace-normal rounded-full bg-[#4BA4C5] px-5 py-2 text-center text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.14em] text-white transition group-hover:brightness-105 sm:max-w-none sm:px-8 sm:py-2.5 sm:text-xs sm:leading-none sm:tracking-[0.18em]">
                {card.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <GetStartedSection />

      <section className="border-t border-[#4BA4C5] bg-white">
        <div className="px-3 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16">
          <h2 className="text-center text-base font-bold uppercase tracking-[0.18em] text-[#1a1a1a] sm:text-xl sm:tracking-[0.2em]">
            Clients
          </h2>
          <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-6 sm:mt-10 sm:flex-nowrap sm:gap-x-8 sm:gap-y-8 md:gap-x-10 lg:gap-x-12">
            {clientLogos.map((logo) => (
              <div
                key={logo.file}
                className="relative h-16 min-h-0 w-full min-w-0 max-w-[9.5rem] flex-1 basis-[40%] sm:h-[4.25rem] sm:max-w-none sm:basis-0 md:h-20"
              >
                <Image
                  src={`/images/${encodeURIComponent(logo.file)}`}
                  alt={logo.alt}
                  fill
                  className={`object-contain object-center ${logo.imageClassName ?? ""}`}
                  sizes="(max-width: 640px) 45vw, 180px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid w-full grid-cols-1 grid-rows-[auto_auto] gap-0 overflow-hidden bg-[#ececec] leading-none">
        <div className="grid grid-cols-2 gap-0 text-center text-xs font-bold uppercase leading-none tracking-wide sm:text-sm">
          <div className="flex items-center justify-center bg-[#4BA4C5] py-10 text-white sm:py-12">
            @CHEF242
          </div>
          <div className="flex items-center justify-center bg-[#F7DC51] py-10 text-[#1a1a1a] sm:py-12">
            #CHEF242
          </div>
        </div>
        <MenuGalleryRow items={menuGalleryImages} />
      </section>
    </div>
  );
}
