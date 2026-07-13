import Image from "next/image";
import Link from "next/link";
import { AtSign } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function InstagramFeed() {
  const posts = [...galleryItems].reverse().slice(0, 6);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="flex flex-col items-center text-center">
          <p className="font-hand text-xl text-mustard">Instagram</p>
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-3xl font-semibold hover:text-mustard md:text-4xl"
          >
            <AtSign size={28} /> @grace_studio
          </Link>
        </FadeIn>

        <div className="mt-14 grid grid-cols-3 gap-2 md:gap-4">
          {posts.map((item, i) => (
            <FadeIn key={item.id} delay={(i % 3) * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-xl bg-accent-2">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
