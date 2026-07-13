import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function BrandIntro() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="font-hand text-xl text-mustard">Our Story</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          꽃과 손끝의 온기로 채운, 작은 공방
        </h2>
        <p className="mt-5 leading-relaxed text-text-light">
          세종 보듬8로 골목, 볕이 잘 드는 창가 자리에 자리한 Grace Studio는
          페이퍼플라워와 핸드메이드 소품으로 하루하루를 예쁘게 채워가는
          공간입니다. 편하게 들러 차 한 잔과 함께, 나만의 작품을 만들어보세요.
        </p>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { src: "/images/window-corner.jpg", alt: "볕 좋은 창가 자리" },
          { src: "/images/flower-wall-2.jpg", alt: "페이퍼플라워 월" },
          { src: "/images/drink-corner.jpg", alt: "셀프 티타임 코너" },
        ].map((img, i) => (
          <FadeIn key={img.src} delay={i * 0.15}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-accent-2">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
