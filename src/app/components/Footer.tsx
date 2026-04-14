import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { IconFacebookF, IconInstagram, IconWhatsApp } from "./SocialBrandIcons";

const footerIconSize = "size-[1.125rem]";

const socialClass =
  "flex size-8 items-center justify-center rounded-full bg-[#4AA4C6] text-white transition hover:opacity-90";

const contactIconClass =
  "flex size-8 items-center justify-center rounded-full bg-[#4AA4C6] text-white shrink-0";

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

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#F7DC51] px-4 py-12 sm:px-8 sm:py-14">
        <nav className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-4 text-sm font-semibold uppercase tracking-wide text-black sm:gap-x-10 sm:gap-y-5 sm:text-[16px]">
          <Link href="/" className="hover:text-black/80">
            Home
          </Link>
          <Link href="/menu" className="hover:text-black/80">
            Menu
          </Link>
          <Link href="/about" className="hover:text-black/80">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-black/80">
            Contact Us
          </Link>
        </nav>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-5 text-base font-medium text-black sm:mt-10 sm:flex-row sm:justify-center sm:gap-16">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-3 hover:text-black/80"
          >
            <span className={contactIconClass} aria-hidden>
              <PhoneFilledIcon className={footerIconSize} />
            </span>
            <span>+1 234 567 890</span>
          </a>
          <a
            href="mailto:info@chef242.com"
            className="flex items-center gap-3 hover:text-black/80"
          >
            <span>info@chef242.com</span>
            <span className={contactIconClass} aria-hidden>
              <MailFilledIcon className={footerIconSize} />
            </span>
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-4 sm:mt-12">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
            aria-label="WhatsApp CHEF242"
          >
            <IconWhatsApp className={footerIconSize} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
            aria-label="Facebook"
          >
            <IconFacebookF className={footerIconSize} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
            aria-label="Instagram"
          >
            <IconInstagram className={footerIconSize} />
          </a>
        </div>
      </div>

      <div className="border-t border-black/5 bg-white px-4 py-9 sm:px-8 sm:py-10">
        <div className="w-full">
          <div className="flex justify-center">
            <BrandLogo
              className="flex flex-col items-center gap-1"
              imageClassName="h-auto w-32 object-contain sm:w-36"
              textClassName="text-lg font-bold tracking-wide text-[#4BA4C5]"
            />
          </div>

          <div className="relative mt-6 flex items-center justify-center sm:mt-7">
            <p className="text-center text-[16px] font-medium text-black">
              Copyright © {new Date().getFullYear()} CHEF242. All rights
              reserved.
            </p>
            <div className="absolute right-0 hidden gap-8 text-[16px] font-medium text-black sm:flex">
              <Link href="/privacy-policy" className="hover:text-[#4BA4C5]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#4BA4C5]">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-8 text-[16px] font-medium text-black sm:hidden">
            <Link href="/privacy-policy" className="hover:text-[#4BA4C5]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#4BA4C5]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
