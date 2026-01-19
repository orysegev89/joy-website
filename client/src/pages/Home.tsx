import Navigation from "@/components/Navigation";
import VideoCarousel from "@/components/VideoCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <VideoCarousel />
    </div>
  );
}
