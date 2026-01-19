import { useRef } from "react";
import MuxPlayer from "@mux/mux-player-react";
import Navigation from "@/components/Navigation";

export default function About() {
  const playerRef = useRef<any>(null);

  const handleVideoClick = () => {
    if (playerRef.current) {
      if (playerRef.current.paused) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background Video */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={handleVideoClick}
      >
        <MuxPlayer
          ref={playerRef}
          playbackId="h01ZJotR700003caBF4017apo8FTb2HPSvvHVYouR9aCWng"
          streamType="on-demand"
          autoPlay="muted"
          muted={true}
          loop={true}
          playsInline
          nohotkeys
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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">ABOUT</h1>
          
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-white/90">
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
          <div className="pt-16">
            <p className="text-white/50 text-lg md:text-xl">
              Powered by AI.{" "}
              <span className="text-blue-400 font-semibold">Driven by Joy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
