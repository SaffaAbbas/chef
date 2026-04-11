import Image from "next/image";

export type MenuGalleryItem = {
  file: string;
  alt: string;
};

type MenuGalleryRowProps = {
  items: readonly MenuGalleryItem[];
};

/** Four-up strip under @CHEF242 / #CHEF242 — flush tiles, no letterboxing gaps. */
export function MenuGalleryRow({ items }: MenuGalleryRowProps) {
  return (
    <div className="grid w-full grid-cols-2 gap-0 bg-[#ececec] leading-[0] md:grid-cols-4 [&>*]:min-h-0 [&>*]:min-w-0">
      {items.map((item) => (
        <div
          key={item.file}
          className="relative aspect-[4/3] w-full overflow-hidden bg-[#ececec]"
        >
          <Image
            src={`/images/${encodeURIComponent(item.file)}`}
            alt={item.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 767px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
