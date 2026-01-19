import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  title: string;
  director: string;
  videoUrl: string;
  posterUrl?: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!videos || videos.length === 0) {
    return <div className="text-white">No videos available</div>;
  }

  const currentVideo = videos[currentIndex];

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Video Container */}
      <div className="absolute inset-0">
        <video
          key={currentVideo?.id}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={currentVideo?.posterUrl}
        >
          <source src={currentVideo?.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
        onClick={goToNext}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Video Info */}
      <div className="absolute bottom-32 left-0 right-0 z-10 text-center text-white">
        <h3 className="text-xl font-light mb-1">{currentVideo?.title}</h3>
        <p className="text-sm text-white/70">{currentVideo?.director}</p>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-16 left-0 right-0 z-10 flex justify-center gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Tagline */}
      <div className="absolute bottom-8 left-0 right-0 z-10 text-center">
        <p className="text-white/80 text-sm max-w-3xl mx-auto px-4">
          Joy is an AI production company built by people who have spent their
          careers making commercials. We are powered by AI, and driven by Joy.
        </p>
      </div>
    </div>
  );
}
