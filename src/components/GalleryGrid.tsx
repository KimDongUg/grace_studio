"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/FadeIn";

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("전체");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "전체" ? galleryItems : galleryItems.filter((g) => g.category === active);

  const openLightbox = (id: string) => {
    const idx = filtered.findIndex((g) => g.id === id);
    setLightboxIndex(idx);
  };

  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-text bg-text text-white"
                : "border-accent text-text-light hover:border-text hover:text-text"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {filtered.map((item, i) => (
          <FadeIn key={item.id} delay={(i % 3) * 0.08}>
            <button
              type="button"
              onClick={() => openLightbox(item.id)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-accent-2"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={600}
                height={i % 3 === 0 ? 750 : 500}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </button>
          </FadeIn>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
          onClick={close}
        >
          <button
            type="button"
            aria-label="닫기"
            onClick={close}
            className="absolute right-6 top-6 text-white/80 hover:text-white"
          >
            <X size={28} />
          </button>
          <button
            type="button"
            aria-label="이전 사진"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-white/80 hover:text-white md:left-8"
          >
            <ChevronLeft size={36} />
          </button>
          <div
            className="relative h-[75vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.image}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="다음 사진"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-white/80 hover:text-white md:right-8"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
