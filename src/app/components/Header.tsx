"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { IconFacebookF, IconInstagram } from "./SocialBrandIcons";

const socialClass =
  "flex size-8 items-center justify-center rounded-full bg-[#4AA4C6] text-white transition hover:opacity-90";

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

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

function mobileNavLinkClass(pathname: string, href: string) {
  const active =
    href === "/"
      ? pathname === "/" || pathname === ""
      : pathname === href || pathname.startsWith(`${href}/`);
  const base =
    "block w-full border-b border-black/10 py-4 text-lg uppercase tracking-wide text-[#1a1a1a] transition hover:bg-black/[0.03] hover:text-[#4BA4C5]";
  return active ? `${base} font-bold` : `${base} font-normal`;
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden>
      <span
        className={`absolute left-0 top-[5px] block h-0.5 w-5 rounded-full bg-[#1a1a1a] transition-transform duration-200 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[11px] block h-0.5 w-5 rounded-full bg-[#1a1a1a] transition-opacity duration-200 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[17px] block h-0.5 w-5 rounded-full bg-[#1a1a1a] transition-transform duration-200 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Header() {
  const pathname = usePathname() ?? "";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTitleId = useId();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="relative z-50 w-full bg-white">
      {/* Below chrome (z-[110]): dim + drawer */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/45 transition-opacity duration-200 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby={menuTitleId}
          className={`absolute inset-y-0 right-0 flex w-[min(100%,20rem)] max-w-full flex-col bg-white shadow-[-8px_0_32px_rgba(0,0,0,0.12)] transition-transform duration-200 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/10 px-4 py-4">
            <h2
              id={menuTitleId}
              className="text-sm font-bold uppercase tracking-[0.2em] text-[#1a1a1a]"
            >
              Menu
            </h2>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full text-[#1a1a1a] transition hover:bg-black/[0.06]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <HamburgerIcon open />
            </button>
          </div>

          <nav
            className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-6 pt-2"
            aria-label="Main"
          >
            {mainNav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={mobileNavLinkClass(pathname, href)}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-black/10 p-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/contact#contact-form"
                className="rounded-full bg-[#4BA4C5] px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:brightness-105"
                onClick={() => setMenuOpen(false)}
              >
                Order Now
              </Link>
              <Link
                href="/pay"
                className="rounded-full bg-[#F7DC51] px-4 py-3 text-center text-[0.65rem] font-semibold uppercase leading-snug tracking-wide text-[#1a1a1a] transition hover:brightness-105"
                onClick={() => setMenuOpen(false)}
              >
                HAVE US AT YOUR JOB SITE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[110] flex justify-end gap-2 bg-white px-4 py-2 sm:px-8">
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

      {/* Desktop: unchanged three-column bar */}
      <div className="relative z-[110] hidden grid-cols-1 items-center gap-5 border-b border-black/5 bg-white px-4 py-4 sm:gap-6 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <nav className="flex max-w-full flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 lg:justify-start">
          {mainNav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={navLinkClass(pathname, href)}
              aria-current={
                href === "/"
                  ? pathname === "/" || pathname === ""
                    ? "page"
                    : undefined
                  : pathname === href || pathname.startsWith(`${href}/`)
                    ? "page"
                    : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <BrandLogo
          className="flex flex-col items-center justify-center gap-0.5 justify-self-center"
          imageClassName="h-auto w-[5.25rem] object-contain sm:w-28"
          priority
        />

        <div className="flex w-full max-w-md flex-col items-stretch gap-2 self-center sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 lg:justify-self-end">
          <Link
            href="/contact#contact-form"
            className="rounded-full bg-[#4BA4C5] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:brightness-105 sm:px-5"
          >
            Order Now
          </Link>
          <Link
            href="/pay"
            className="rounded-full bg-[#F7DC51] px-4 py-2.5 text-center text-[0.65rem] font-semibold uppercase leading-snug tracking-wide text-[#1a1a1a] transition hover:brightness-105 sm:px-5 sm:text-xs"
          >
            HAVE US AT YOUR JOB SITE
          </Link>
        </div>
      </div>

      {/* Mobile / tablet: logo + menu trigger (above dim layer) */}
      <div className="relative z-[110] flex items-center justify-center border-b border-black/5 bg-white px-4 py-4 lg:hidden">
        <BrandLogo
          className="flex flex-col items-center justify-center gap-0.5"
          imageClassName="h-auto w-[5.25rem] object-contain sm:w-28"
        />
        <button
          type="button"
          className="absolute right-4 flex size-11 items-center justify-center rounded-full text-[#1a1a1a] transition hover:bg-black/[0.06] active:bg-black/10"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-haspopup="dialog"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

    </header>
  );
}
