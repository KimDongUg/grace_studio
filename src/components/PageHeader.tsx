import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}

export default function PageHeader({ eyebrow, title, description, image }: PageHeaderProps) {
  return (
    <section className="relative flex h-[46vh] min-h-[320px] w-full items-center justify-center overflow-hidden">
      <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/45" />
      <FadeIn className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <p className="font-hand text-xl text-white/90">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-semibold md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-xl text-white/85">{description}</p>}
      </FadeIn>
    </section>
  );
}
