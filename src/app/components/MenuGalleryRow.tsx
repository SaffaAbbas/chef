import Image from "next/image";

export type MenuGalleryItem = {
  file: string;
  alt: string;
};

type MenuGalleryRowProps = {
  items: readonly MenuGalleryItem[];
};

/** Four-up strip under @CHEF242 / #CHEF242 — full image visible, sleek landscape tiles. */
export function MenuGalleryRow({ items }: MenuGalleryRowProps) {
  return (
    <div className="grid w-full grid-cols-2 gap-0 bg-[#ececec] leading-none md:grid-cols-4 [&>*]:min-w-0">
      {items.map((item) => (
        <div
          key={item.file}
          className="relative aspect-[4/3] w-full overflow-hidden bg-[#ececec]"
        >
          <Image
            src={`/images/${encodeURIComponent(item.file)}`}
            alt={item.alt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 767px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
