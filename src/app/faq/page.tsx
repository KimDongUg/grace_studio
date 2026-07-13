import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Grace Studio",
  description: "Grace Studio 자주 묻는 질문",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="자주 묻는 질문"
        image="/images/window-corner.jpg"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <FaqAccordion />
      </section>
    </>
  );
}
