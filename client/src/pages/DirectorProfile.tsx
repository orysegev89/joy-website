import { useParams, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import { directors } from "@/data/directors";

export default function DirectorProfile() {
  const params = useParams();
  const [, setLocation] = useLocation();
  
  const director = directors.find(d => d.slug === params.slug);

  if (!director) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Director Not Found</h1>
          <button
            onClick={() => setLocation("/directors")}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Directors
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container max-w-6xl mx-auto px-6">
          {/* Director Name */}
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
            {director.name.toUpperCase()}
          </h1>
          
          {/* Bio */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-white/90 text-center">
              {director.bio}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {director.portfolioImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-lg bg-white/5"
              >
                <img
                  src={image}
                  alt={`${director.name} portfolio ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => setLocation("/directors")}
              className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              ← Back to Directors
            </button>
          </div>

          {/* Tagline */}
          <div className="mt-16 text-center">
            <p className="text-white/60 text-sm">
              Powered by AI.{" "}
              <span className="text-blue-400 font-semibold">Driven by Joy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
