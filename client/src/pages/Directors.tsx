import { Link } from "wouter";
import Navigation from "@/components/Navigation";

interface DirectorCard {
  name: string;
  slug: string;
  quote: string;
  image: string;
}

const directorCards: DirectorCard[] = [
  {
    name: "Axel Weirowski",
    slug: "axel-weirowski",
    quote: "\"Technology never replaces the narrative; it amplifies it.\" - Axel",
    image: "/directors/axel-lion-jetski.png",
  },
  {
    name: "Ella Uzan",
    slug: "ella-uzan",
    quote: "\"AI allows me to craft emotionally rich, symbolic narratives that would be impossible to create in the real world.\" - Ella",
    image: "/directors/ella-binoculars.png",
  },
  {
    name: "Maurus vom Scheidt",
    slug: "maurus-vom-scheidt",
    quote: "\"Working with AI feels like directing actors in a foreign country—unpredictable, surprising, and full of unexpected magic.\" - Maurus",
    image: "/directors/maurus-portrait.png",
  },
];

export default function Directors() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center">DIRECTORS</h1>
          
          {/* Director Cards Grid */}
          <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
            {directorCards.map((director) => (
              <Link
                key={director.slug}
                href={`/directors/${director.slug}`}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Quote */}
                    <div className="flex items-center justify-center p-6 sm:p-8 md:p-12">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 italic">
                        {director.quote}
                      </p>
                    </div>
                    
                    {/* Image */}
                    <div className="relative aspect-video md:aspect-auto overflow-hidden">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center mt-12 sm:mt-20">
            <p className="text-white/60 text-sm sm:text-base">
              Powered by AI.{" "}
              <span className="text-blue-400 font-semibold">Driven by Joy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
