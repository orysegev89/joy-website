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
      
      {/* Main Content - Centered Layout */}
      <div className="pt-24 md:pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Director Name - Large, Centered, Uppercase */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center uppercase tracking-wide">
            {director.name}
          </h1>
          
          {/* Bio Section - Centered, Narrow Column */}
          <div className="max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="text-center space-y-6 text-white leading-relaxed text-sm md:text-base">
              {director.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-white/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Portfolio Grid - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 max-w-4xl mx-auto">
            {director.portfolioImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden bg-white/5"
              >
                <img
                  src={image}
                  alt={`${director.name} portfolio ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
