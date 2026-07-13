import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import LocationMap from "@/components/LocationMap";
import BookingButton from "@/components/BookingButton";

export default function LocationSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <FadeIn className="flex flex-col items-center text-center">
        <p className="font-hand text-xl text-mustard">Location</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">오시는 길</h2>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <FadeIn>
          <LocationMap />
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-col gap-5">
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

          <div className="mt-4 flex flex-wrap gap-4">
            <BookingButton variant="phone" />
            <BookingButton variant="kakao" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
