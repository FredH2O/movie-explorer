import HeroSection from "@/components/HeroSection";
import MediaGallery from "@/components/MediaGallery/MediaGallery";
import ScrollDown from "@/components/ScrollDown/ScrollIcon";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ScrollDown />
      <MediaGallery />
    </div>
  );
}
