import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import FadeIn from "@/components/FadeIn";

export default function GalleryPreview() {
  const preview = galleryItems.slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <FadeIn className="flex flex-col items-center text-center">
        <p className="font-hand text-xl text-mustard">Gallery</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">공방 이야기</h2>
      </FadeIn>

      <div className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {preview.map((item, i) => (
          <FadeIn key={item.id} delay={(i % 3) * 0.1}>
            <div className="group relative overflow-hidden rounded-2xl bg-accent-2">
              <Image
                src={item.image}
                alt={item.alt}
                width={600}
                height={i % 2 === 0 ? 750 : 500}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-10 flex justify-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-1 text-sm font-medium text-text hover:text-mustard"
        >
          갤러리 더 보기 <ArrowRight size={16} />
        </Link>
      </FadeIn>
    </section>
  );
}
