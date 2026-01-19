import Navigation from "@/components/Navigation";
import VideoCarousel from "@/components/VideoCarousel";

// Sample video data - will be replaced with CMS data later
const sampleVideos = [
  {
    id: "1",
    title: "Fantastic Frames",
    director: "Director Name",
    videoUrl: "/videos/sample1.mp4",
    posterUrl: "/images/poster1.jpg",
  },
  {
    id: "2",
    title: "Zeiss Campaign",
    director: "Director Name",
    videoUrl: "/videos/sample2.mp4",
    posterUrl: "/images/poster2.jpg",
  },
  {
    id: "3",
    title: "LIDL Halloween",
    director: "Director Name",
    videoUrl: "/videos/sample3.mp4",
    posterUrl: "/images/poster3.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <VideoCarousel videos={sampleVideos} />
    </div>
  );
}
