"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import { IconFacebookF, IconInstagram } from "./SocialBrandIcons";

const socialClass =
  "flex size-8 items-center justify-center rounded-full bg-[#4AA4C6] text-white transition hover:opacity-90";

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.12.56 4.2 1.62 6.03L0 24l6.15-1.61A11.94 11.94 0 0 0 12.01 24C18.63 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52ZM12.01 21.9c-1.88 0-3.72-.5-5.33-1.44l-.38-.22-3.65.96.98-3.56-.24-.37A9.88 9.88 0 0 1 2.12 12c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.98 2.89A9.8 9.8 0 0 1 21.89 12c0 5.46-4.43 9.9-9.88 9.9Zm5.77-7.41c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.73.16-.22.32-.84 1.05-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.62-.52-.54-.73-.55h-.62c-.22 0-.57.08-.86.41-.3.32-1.13 1.1-1.13 2.68s1.16 3.1 1.32 3.32c.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.62-.37Z" />
    </svg>
  );
}

function navLinkClass(pathname: string, href: string) {
  const active =
    href === "/"
      ? pathname === "/" || pathname === ""
      : pathname === href || pathname.startsWith(`${href}/`);
  const base =
    "text-[16px] uppercase tracking-wide text-[#1a1a1a] transition hover:text-[#4BA4C5]";
  return active ? `${base} font-bold` : `${base} font-normal`;
}

export default function Header() {
  const pathname = usePathname() ?? "";

  return (
    <header className="w-full bg-white">
      <div className="flex justify-end gap-2 px-4 py-2 sm:px-8">
        <a
          href="tel:+12425551234"
          className={socialClass}
          aria-label="Call CHEF242"
        >
          <PhoneFilledIcon className="size-4.5" />
        </a>
        <a
          href="https://wa.me/12425551234"
          target="_blank"
          rel="noopener noreferrer"
          className={socialClass}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="size-4.5" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={socialClass}
          aria-label="Facebook"
        >
          <IconFacebookF className="size-4.5" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={socialClass}
          aria-label="Instagram"
        >
          <IconInstagram className="size-4.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 items-center gap-6 border-b border-black/5 px-4 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
          <Link
            href="/"
            className={navLinkClass(pathname, "/")}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={navLinkClass(pathname, "/menu")}
            aria-current={pathname === "/menu" || pathname.startsWith("/menu/")
              ? "page"
              : undefined}
          >
            Menu
          </Link>
          <Link
            href="/about"
            className={navLinkClass(pathname, "/about")}
            aria-current={
              pathname === "/about" || pathname.startsWith("/about/")
                ? "page"
                : undefined
            }
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={navLinkClass(pathname, "/contact")}
            aria-current={
              pathname === "/contact" || pathname.startsWith("/contact/")
                ? "page"
                : undefined
            }
          >
            Contact Us
          </Link>
        </nav>

        <BrandLogo
          className="flex flex-col items-center justify-center gap-0.5 justify-self-center"
          imageClassName="h-auto w-[5.25rem] object-contain sm:w-28"
          priority
        />

        <div className="flex flex-wrap justify-center gap-3 lg:justify-self-end">
          <Link
            href="/order"
            className="rounded-full bg-[#4BA4C5] px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:brightness-105"
          >
            Order Now
          </Link>
          <Link
            href="/pay"
            className="rounded-full bg-[#F7DC51] px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-[#1a1a1a] transition hover:brightness-105"
          >
            HAVE US AT YOUR JOB SITE
          </Link>
        </div>
      </div>
    </header>
  );
}
