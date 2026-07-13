import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "ABOUT | Grace Studio",
  description: "Grace Studio가 만들어진 이야기와 대표 인사말",
};

const storyBlocks = [
  {
    image: "/images/window-corner.jpg",
    title: "볕이 좋아서 시작했어요",
    text: "창가로 들어오는 오후 볕이 참 예쁜 자리였어요. 그 볕을 더 많은 사람과 나누고 싶어서 작은 공방을 열게 되었습니다.",
  },
  {
    image: "/images/flower-wall-2.jpg",
    title: "한 송이씩, 정성껏",
    text: "종이 한 장, 꽃 한 송이도 허투루 만들지 않으려고 합니다. 손끝에서 완성되는 작품 하나하나가 다녀가시는 분들의 하루에 작은 위로가 되길 바라요.",
  },
  {
    image: "/images/drink-corner.jpg",
    title: "머물다 가셔도 좋아요",
    text: "작업하다 지치실 땐 창가 자리에서 편하게 차 한 잔 즐기다 가세요. 서두르지 않아도 괜찮은, 그런 공간이었으면 합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Grace Studio 이야기"
        description="당신의 일상이 작품이 되는 공간을 만들어가는 이유"
        image="/images/flower-wall-1.jpg"
      />

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <FadeIn>
          <p className="font-hand text-2xl leading-relaxed text-text md:text-3xl">
            &ldquo;오늘도 행복하자, 라는 마음으로&rdquo;
          </p>
          <p className="mt-6 leading-relaxed text-text-light">
            안녕하세요, Grace Studio 대표 김은혜입니다. 꽃을 다루는 시간이 저에게
            그랬듯, 이곳을 찾아주시는 모든 분들에게도 잠시나마 마음이 편안해지는
            시간이 되었으면 합니다. 편하게 들러주세요.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-col gap-20">
          {storyBlocks.map((block, i) => (
            <div
              key={block.title}
              className={`flex flex-col items-center gap-8 md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <FadeIn className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.15} className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold">{block.title}</h2>
                <p className="mt-4 leading-relaxed text-text-light">{block.text}</p>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <FadeIn className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6">
          <h2 className="text-2xl font-semibold">직접 방문해서 느껴보세요</h2>
          <p className="text-text-light">전화나 카카오톡으로 편하게 문의해주시면 자세히 안내해드릴게요.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookingButton variant="phone" />
            <BookingButton variant="kakao" />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
