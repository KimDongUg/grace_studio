import Image from "next/image";
import { Clock } from "lucide-react";
import type { ClassItem } from "@/data/classes";
import FadeIn from "@/components/FadeIn";
import BookingButton from "@/components/BookingButton";

export default function ClassCard({ item, delay = 0 }: { item: ClassItem; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="group flex flex-col overflow-hidden rounded-2xl border border-accent/60 bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-text">
            {item.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
          <div className="mt-2 flex items-center justify-between text-sm text-text-light">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {item.duration}
            </span>
            <span className="font-semibold text-text">{item.price}</span>
          </div>
          <BookingButton variant="phone" className="mt-3 w-full" />
        </div>
      </div>
    </FadeIn>
  );
}
