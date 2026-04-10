import Link from "next/link";
import { GetStartedSection } from "../components/GetStartedSection";
import { MenuGalleryRow } from "../components/MenuGalleryRow";

const menuGalleryImages = [
  { file: "menu 1.png", alt: "Chef 242 menu item 1" },
  { file: "menu 2.png", alt: "Chef 242 menu item 2" },
  { file: "menu 3.png", alt: "Chef 242 menu item 3" },
  { file: "menu 4.png", alt: "Chef 242 menu item 4" },
] as const;

export default function MenuPage() {
  return (
    <div className="w-full">
      <section className="bg-[#F7DC51] py-10 text-center sm:py-12">
        <h1 className="text-[20px] font-semibold uppercase tracking-[0.25em] text-black">
          Menu
        </h1>
      </section>

      <section className="bg-white px-4 py-12 text-center sm:px-8">
        <p className="mx-auto max-w-3xl text-[16px] font-semibold leading-relaxed text-black/80">
          We strive to provide your employees with food that we would be happy
          to eat ourselves, which is why we rotate our menus and use sustainable
          local ingredients whenever possible.
        </p>
        <Link
          href="/menu"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#4BA4C5] px-8 py-3 text-xs font-semibold tracking-wide text-white transition hover:brightness-105"
        >
          Take a look at the menu
        </Link>
      </section>

      <GetStartedSection />

      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-2 text-center text-xs font-bold uppercase tracking-wide sm:text-sm">
          <div className="bg-[#4BA4C5] py-10 text-white sm:py-12">@CHEF242</div>
          <div className="bg-[#F7DC51] py-10 text-black sm:py-12">#CHEF242</div>
        </div>
        <MenuGalleryRow items={menuGalleryImages} />
      </section>
    </div>
  );
}
