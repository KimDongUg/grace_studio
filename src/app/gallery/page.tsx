import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "GALLERY | Grace Studio",
  description: "Grace Studio 공방과 작품 갤러리",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="갤러리"
        description="공방의 순간들과 작품을 담았어요"
        image="/images/flower-nest-toy.jpg"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <GalleryGrid />
      </section>
    </>
  );
}
