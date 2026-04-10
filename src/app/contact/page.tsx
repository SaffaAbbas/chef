import Image from "next/image";
import Link from "next/link";
import { GetStartedSection } from "../components/GetStartedSection";
import { MenuGalleryRow } from "../components/MenuGalleryRow";

const menuGalleryImages = [
  { file: "menu 1.png", alt: "Chef 242 menu item 1" },
  { file: "menu 2.png", alt: "Chef 242 menu item 2" },
  { file: "menu 3.png", alt: "Chef 242 menu item 3" },
  { file: "menu 4.png", alt: "Chef 242 menu item 4" },
] as const;

const formFieldClass =
  "mt-2 w-full border-2 border-[#F7DC51] bg-white px-5 py-3 text-[18px] font-normal text-black outline-none transition placeholder:text-black/40 focus:border-[#F7DC51] focus:ring-2 focus:ring-[#F7DC51]/35";

function CircleIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <span
      className="flex size-8 items-center justify-center rounded-full bg-[#4AA4C6] text-white"
      aria-label={label}
    >
      {children}
    </span>
  );
}

function PhoneFilledIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.5 21c-1.85 0-4.08-.67-6.23-2.01a22.3 22.3 0 0 1-6.26-6.26C5.67 10.58 5 8.35 5 6.5c0-.55.45-1 1-1h3.2c.48 0 .9.34.98.82l.52 3.07c.07.41-.12.82-.48 1l-1.36.68a18.6 18.6 0 0 0 4.79 4.79l.68-1.36c.18-.36.59-.55 1-.48l3.07.52c.48.08.82.5.82.98V20c0 .55-.45 1-1 1h-.7Z" />
    </svg>
  );
}

function MailFilledIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm-.4 4.25-6.86 4.57a1.4 1.4 0 0 1-1.48 0L4.4 8.25c-.32-.21-.4-.64-.19-.96.22-.32.65-.4.97-.19L12 11.68l6.82-4.58c.32-.21.75-.13.97.19.21.32.13.75-.19.96Z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="bg-[#F7DC51] py-10 text-center sm:py-12">
        <h1 className="text-[20px] font-semibold uppercase tracking-[0.25em] text-black">
          Contact Us
        </h1>
      </section>

      <section className="bg-white px-4 py-12 sm:px-8">
        <p className="text-center text-[16px] font-semibold text-black/80">
          We are here to answer your questions and help you get started.
        </p>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-none bg-white">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/contact1.png"
                alt="Contact Chef 242"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircleIcon label="Call">
                <PhoneFilledIcon className="size-4.5" />
              </CircleIcon>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-none bg-white">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/contact2.png"
                alt="Email Chef 242"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircleIcon label="Email">
                <MailFilledIcon className="size-4.5" />
              </CircleIcon>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/order"
            className="inline-flex items-center justify-center rounded-full bg-[#4BA4C5] px-8 py-3.5 text-center text-[18px] font-normal text-white shadow-none transition hover:brightness-105"
          >
            Order now, download the app
          </Link>
        </div>
      </section>

      <section className="bg-[#4AA4C6] px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-[20px] font-semibold text-white">
            We would love to hear from you!
          </h2>
          <p className="mt-2 text-center text-[18px] font-normal leading-relaxed text-white">
            Please contact our team at Chef 242; we will respond promptly.
          </p>

          <form className="mx-auto mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="text-left text-[18px] font-normal text-white">
              Name<span className="text-white">*</span>
              <input
                type="text"
                name="name"
                className={`${formFieldClass} rounded-full`}
                required
                autoComplete="name"
              />
            </label>
            <label className="text-left text-[18px] font-normal text-white">
              Phone<span className="text-white">*</span>
              <input
                type="tel"
                name="phone"
                className={`${formFieldClass} rounded-full`}
                required
                autoComplete="tel"
              />
            </label>
            <label className="text-left text-[18px] font-normal text-white">
              Email<span className="text-white">*</span>
              <input
                type="email"
                name="email"
                className={`${formFieldClass} rounded-full`}
                required
                autoComplete="email"
              />
            </label>
            <label className="text-left text-[18px] font-normal text-white">
              Subject
              <input
                type="text"
                name="subject"
                className={`${formFieldClass} rounded-full`}
                autoComplete="off"
              />
            </label>
            <label className="text-left text-[18px] font-normal text-white sm:col-span-2">
              Message
              <textarea
                name="message"
                rows={5}
                className={`${formFieldClass} min-h-[140px] rounded-2xl py-4`}
                required
              />
            </label>
          </form>
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
