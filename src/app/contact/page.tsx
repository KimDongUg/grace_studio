import type { Metadata } from "next";
import { Clock, MapPin, Phone, CreditCard } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import LocationMap from "@/components/LocationMap";
import BookingButton from "@/components/BookingButton";
import CopyAddressButton from "@/components/CopyAddressButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "CONTACT | Grace Studio",
  description: "Grace Studio 오시는 길과 문의 방법",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="오시는 길"
        description="전화 또는 카카오톡으로 편하게 문의해주세요"
        image="/images/storefront.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <FadeIn>
          <LocationMap className="aspect-[16/9]" />
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10 flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-0.5 shrink-0 text-mustard" />
            <p>{siteConfig.address}</p>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={20} className="mt-0.5 shrink-0 text-mustard" />
            <p>{siteConfig.hours}</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={20} className="mt-0.5 shrink-0 text-mustard" />
            <p>{siteConfig.phone}</p>
          </div>
          <div className="flex items-start gap-3">
            <CreditCard size={20} className="mt-0.5 shrink-0 text-mustard" />
            <p>{siteConfig.account}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-10 flex flex-wrap gap-4">
          <BookingButton variant="phone" size="lg" />
          <BookingButton variant="kakao" size="lg" />
          <CopyAddressButton />
        </FadeIn>
      </section>
    </>
  );
}
