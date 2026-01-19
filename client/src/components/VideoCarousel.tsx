import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hls from "hls.js";
import { videos } from "@/data/videos";

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

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

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  // Setup HLS and auto-play when video changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const currentVideo = videos[currentIndex];
    const videoUrl = `https://stream.mux.com/${currentVideo.muxPlaybackId}.m3u8`;

    // Clean up previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
      });
      
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Auto-play might be blocked
        });
      });

      hlsRef.current = hls;
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      video.src = videoUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {
          // Auto-play might be blocked
        });
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [currentIndex]);

  const currentVideo = videos[currentIndex];

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Render video or image based on type */}
      {currentVideo.type === 'video' ? (
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={handleVideoClick}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="absolute inset-0">
          <img
            src={currentVideo.imageUrl}
            alt={currentVideo.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            className="w-full h-full"
          />
        </div>
      )}

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

      {/* Tagline Text Overlay - Only show if slide has tagline */}
      {currentVideo.tagline && (
        <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 z-10 max-w-2xl pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight whitespace-pre-line">
            {currentVideo.tagline}
          </h1>
        </div>
      )}

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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
        <p className="text-white/60 text-sm">
          Powered by AI.{" "}
          <span className="text-blue-400 font-semibold">Driven by Joy.</span>
        </p>
      </div>
    </div>
  );
}
