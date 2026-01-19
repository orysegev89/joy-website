import { useRef, useEffect } from "react";
import Hls from "hls.js";
import Navigation from "@/components/Navigation";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  // Setup HLS and auto-play on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoUrl = "https://stream.mux.com/h01ZJotR700003caBF4017apo8FTb2HPSvvHVYouR9aCWng.m3u8";

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
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background Video */}
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

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-3xl text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">ABOUT</h1>
          
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
            <p>
              Joy is a production company built by people who have spent their careers making commercials.
            </p>
            
            <p>
              Our directors are established commercial and film directors who have fully immersed themselves in AI, with a proven track record of creating AI driven campaigns for brands. They bring cinematic thinking, storytelling discipline, and real world production experience into a new creative toolkit.
            </p>
            
            <p>
              Behind the work is a production team that comes from the traditional commercial world. Executive producers and producers who understand agency processes, client expectations, budgets, timelines, and collaboration. That experience matters, especially when working in a medium that is still new to many.
            </p>
            
            <p>
              Our goal is to bridge worlds. We work with agencies and brands who are ready to embrace AI without abandoning the creative process they trust. The way we develop ideas, collaborate with creatives, manage production, and deliver work is familiar. The tools are new. The standards are not.
            </p>
            
            <p>
              We work with agencies and brands ready to move forward with confidence, using AI not to replace creativity, but to remove the barriers between imagination and execution.
            </p>
          </div>

          {/* Tagline */}
          <div className="pt-12 sm:pt-16">
            <p className="text-white/50 text-base sm:text-lg md:text-xl">
              Powered by AI.{" "}
              <span className="text-blue-400 font-semibold">Driven by Joy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
