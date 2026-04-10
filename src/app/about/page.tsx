import Image from "next/image";
import { GetStartedSection } from "../components/GetStartedSection";
import { MenuGalleryRow } from "../components/MenuGalleryRow";

const menuGalleryImages = [
  { file: "menu 1.png", alt: "Chef 242 menu item 1" },
  { file: "menu 2.png", alt: "Chef 242 menu item 2" },
  { file: "menu 3.png", alt: "Chef 242 menu item 3" },
  { file: "menu 4.png", alt: "Chef 242 menu item 4" },
] as const;

const heroImageFile = "Mask group.png";

const whyChefFeatures = [
  {
    icon: "logo1.png",
    iconAlt: "Local and sustainable sourcing",
    text: "We use local and sustainable products whenever possible",
  },
  {
    icon: "icon.png",
    iconAlt: "Rotating menus",
    text: "We are constantly rotating our menus so your employees do not get tired of the same food",
  },
  {
    icon: "Frame 27.png",
    iconAlt: "Reliable service",
    text: "We are reliable and committed, so you can rest assured that we will be there when you need it",
  },
  {
    icon: "Frame 30.png",
    iconAlt: "Self-sufficient operations",
    text: "We are entirely self-sufficient with power and water supply",
  },
  {
    icon: "Frame 29.png",
    iconAlt: "Biodegradable service ware",
    text: "We use biodegradable service ware to help reduce the use of single-use plastic",
  },
  {
    icon: "Frame 28.png",
    iconAlt: "Detailed billing",
    text: "We provide construction companies flexible, easy and detailed billing",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-[#F7DC51] py-10 text-center sm:py-12">
        <h1 className="text-[20px] font-semibold uppercase tracking-[0.25em] text-black">
          About Us
        </h1>
      </section>

      <section className="bg-white py-10">
        <div className="px-4 sm:px-8">
          <p className="text-center text-[18px] font-semibold text-black">
            Feeding a happy and healthy construction force..
          </p>
        </div>

        <div className="mt-8 w-full overflow-hidden rounded-none">
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[620px]">
            <Image
              src="/images/about.png"
              alt="Workers enjoying a meal at the site"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[#4AA4C6] px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl space-y-4 text-left text-[18px] font-semibold leading-relaxed text-white">
            <p>
              We believe food fuels both body and mind, driving better
              performance on every job site. To keep your crew operating at
              their best, they need to be properly fueled. That&apos;s where we
              come in.
            </p>
            <p>
              Chef 242 is a new approach to feeding the Bahamas&apos;
              construction industry. Our mission is simple: deliver fresh,
              local, and delicious meals your team will look forward to every
              day.
            </p>
            <p>
              Our chefs prepare warm meals designed to satisfy and energize.
              From gourmet classic Bahamian favorites to vegetarian options, we
              make sure your crew enjoys a lunch break that keeps them going.
            </p>
            <p>Order through our app and we&apos;ll handle the rest.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8">
        <h2 className="text-center text-[20px] font-semibold uppercase tracking-[0.25em] text-black">
          Why choosing Chef 242?
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-y-14">
          {whyChefFeatures.map((item) => (
            <div key={item.icon} className="px-6">
              <div className="relative mx-auto h-16 w-16 sm:h-20 sm:w-20">
                <Image
                  src={`/images/${encodeURIComponent(item.icon)}`}
                  alt={item.iconAlt}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <p className="mt-3 text-[18px] font-semibold leading-relaxed text-black">
                {item.text}
              </p>
            </div>
          ))}
        </div>
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
