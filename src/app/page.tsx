import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import ClassHighlight from "@/components/home/ClassHighlight";
import GalleryPreview from "@/components/home/GalleryPreview";
import InstagramFeed from "@/components/home/InstagramFeed";
import LocationSection from "@/components/home/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ClassHighlight />
      <GalleryPreview />
      <InstagramFeed />
      <LocationSection />
    </>
  );
}
