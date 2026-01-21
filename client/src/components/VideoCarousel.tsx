import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hls from "hls.js";
import { videos } from "@/data/videos";

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const goToPrevious = () => {
    setIsVideoReady(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsVideoReady(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setIsVideoReady(false);
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
    
    // Only setup HLS for video types
    if (currentVideo.type !== 'video' || !currentVideo.muxPlaybackId) return;
    
    const videoUrl = `https://stream.mux.com/${currentVideo.muxPlaybackId}.m3u8`;

    // Clean up previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30,
        maxBufferLength: 10,
        maxMaxBufferLength: 20,
        maxBufferSize: 60 * 1000 * 1000, // 60 MB
        maxBufferHole: 0.5,
        highBufferWatchdogPeriod: 1,
        nudgeOffset: 0.1,
        nudgeMaxRetry: 3,
        maxFragLookUpTolerance: 0.2,
        liveSyncDurationCount: 3,
        liveMaxLatencyDurationCount: 10,
        startLevel: -1, // Auto start level for adaptive bitrate
        autoStartLoad: true,
        startPosition: 0,
      });
      
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsVideoReady(true);
        video.play().catch(() => {
          // Auto-play might be blocked
        });
      });
      
      // Preload first few segments for instant playback
      hls.on(Hls.Events.FRAG_LOADED, () => {
        if (!isVideoReady) {
          setIsVideoReady(true);
        }
      });

      hlsRef.current = hls;
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      video.src = videoUrl;
      const handleLoadedData = () => {
        setIsVideoReady(true);
        video.play().catch(() => {
          // Auto-play might be blocked
        });
      };
      video.addEventListener("loadeddata", handleLoadedData);
      
      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
      };
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
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            className="w-full h-full"
          />
          {/* Loading indicator */}
          {!isVideoReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
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
        <div className="absolute left-4 sm:left-6 md:left-12 lg:left-16 top-24 sm:top-28 md:top-32 lg:top-36 z-10 max-w-xl pointer-events-none">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-snug whitespace-pre-line">
            {currentVideo.tagline}
          </h1>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all"
        aria-label="Previous video"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all"
        aria-label="Next video"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>



      {/* Tagline */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-6 md:left-12 lg:left-16 z-10 pointer-events-none">
        <p className="text-white/60 text-base sm:text-lg md:text-xl lg:text-2xl">
          Powered by AI.{" "}
          <span className="text-blue-400 font-semibold">Driven by Joy.</span>
        </p>
      </div>
    </div>
  );
}
