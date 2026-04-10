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
      className={`border-2 border-[#4AA4C6] bg-[#F7DC51] px-4 py-16 text-center sm:px-8 ${className}`.trim()}
    >
      <h2 className="text-[20px] font-semibold uppercase tracking-[0.25em] text-black">
        {heading}
      </h2>
      <Link
        href={href}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#4BA4C5] px-8 py-3 text-xs font-semibold tracking-wide text-white transition hover:brightness-105"
      >
        {ctaText}
      </Link>
    </section>
  );
}
