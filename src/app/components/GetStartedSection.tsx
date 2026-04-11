import Link from "next/link";

type GetStartedSectionProps = {
  href?: string;
  ctaText?: string;
  heading?: string;
  className?: string;
};

export function GetStartedSection({
  href = "/events",
  ctaText = "Let us come to your site!",
  heading = "Get started",
  className = "",
}: GetStartedSectionProps) {
  return (
    <section
      className={`border-2 border-[#4AA4C6] bg-[#F7DC51] px-3 py-12 text-center sm:px-8 sm:py-16 ${className}`.trim()}
    >
      <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-black sm:text-[20px] sm:tracking-[0.25em]">
        {heading}
      </h2>
      <Link
        href={href}
        className="mt-6 inline-flex max-w-full items-center justify-center rounded-full bg-[#4BA4C5] px-5 py-3 text-xs font-semibold tracking-wide text-white transition hover:brightness-105 sm:mt-8 sm:px-8"
      >
        {ctaText}
      </Link>
    </section>
  );
}
