import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/images/Group.png";

type BrandLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  href = "/",
  className = "flex flex-col items-center justify-center gap-1",
  imageClassName = "h-auto w-[5.5rem] object-contain sm:w-24",
  textClassName = "text-lg font-extrabold tracking-wide text-[#4BA4C5] sm:text-xl",
  priority = false,
}: BrandLogoProps) {
  const inner = (
    <>
      <Image
        src={LOGO_SRC}
        alt=""
        width={200}
        height={120}
        className={imageClassName}
        priority={priority}
      />
      <span className={textClassName}>CHEF242</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}
