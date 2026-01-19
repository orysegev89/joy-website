import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { videos } from "@/data/videos";

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentVideo = videos[currentIndex];

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Mux Video Player - Minimal UI */}
      <div className="absolute inset-0">
        <MuxPlayer
          key={currentVideo.id}
          playbackId={currentVideo.muxPlaybackId}
          streamType="on-demand"
          autoPlay={false}
          muted={false}
          loop={false}
          // Minimal player controls - only center play button
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          accentColor="#3B82F6"
          // Hide all controls except the big play button
          nohotkeys
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
        aria-label="Previous video"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
        aria-label="Next video"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Video Info */}
      <div className="absolute bottom-32 left-8 z-10 text-white">
        <h2 className="text-4xl font-bold mb-2">{currentVideo.title}</h2>
        <p className="text-xl text-white/80">{currentVideo.director}</p>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* Tagline */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center">
        <p className="text-white/60 text-sm">
          Powered by AI.{" "}
          <span className="text-blue-400 font-semibold">Driven by Joy.</span>
        </p>
      </div>
    </div>
  );
}
