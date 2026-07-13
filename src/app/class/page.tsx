import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ClassList from "@/components/ClassList";
import FadeIn from "@/components/FadeIn";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "CLASS | Grace Studio",
  description: "Grace Studio에서 운영 중인 클래스를 소개합니다.",
};

export default function ClassPage() {
  return (
    <>
      <PageHeader
        eyebrow="Class"
        title="운영 중인 클래스"
        description="예약 없이 편하게, 전화 또는 카카오톡으로 문의해주세요"
        image="/images/toy-hammock.jpg"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <ClassList />
      </section>

      <section className="bg-white py-16 text-center">
        <FadeIn className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6">
          <p className="text-text-light">
            예약은 전화 또는 카카오톡으로 편하게 문의해주세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookingButton variant="phone" />
            <BookingButton variant="kakao" />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
