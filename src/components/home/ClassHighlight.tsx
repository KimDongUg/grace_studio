import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { classes } from "@/data/classes";
import ClassCard from "@/components/ClassCard";
import FadeIn from "@/components/FadeIn";

export default function ClassHighlight() {
  const highlight = classes.slice(0, 4);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="flex flex-col items-center text-center">
          <p className="font-hand text-xl text-mustard">Class</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">인기 클래스</h2>
          <p className="mt-3 text-text-light">전화 또는 카카오톡으로 편하게 문의해주세요</p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlight.map((item, i) => (
            <ClassCard key={item.id} item={item} delay={i * 0.1} />
          ))}
        </div>

        <FadeIn className="mt-12 flex justify-center">
          <Link
            href="/class"
            className="inline-flex items-center gap-1 text-sm font-medium text-text hover:text-mustard"
          >
            클래스 더 보기 <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
