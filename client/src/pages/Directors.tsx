import Navigation from "@/components/Navigation";
import { Link } from "wouter";

// Sample directors data - will be replaced with CMS data later
const directors = [
  {
    id: "1",
    name: "Director One",
    specialty: "Commercial & Brand",
    imageUrl: "/images/director1.jpg",
  },
  {
    id: "2",
    name: "Director Two",
    specialty: "Narrative & Storytelling",
    imageUrl: "/images/director2.jpg",
  },
  {
    id: "3",
    name: "Director Three",
    specialty: "Visual Effects",
    imageUrl: "/images/director3.jpg",
  },
];

export default function Directors() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            Directors
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director) => (
              <Link key={director.id} href={`/directors/${director.id}`}>
                <div className="group cursor-pointer">
                  <div className="aspect-square bg-white/5 rounded-lg overflow-hidden mb-4 hover:bg-white/10 transition-colors">
                    <div className="w-full h-full flex items-center justify-center text-white/40">
                      {/* Placeholder for director image */}
                      <span className="text-6xl">👤</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-white/80 transition-colors">
                    {director.name}
                  </h3>
                  <p className="text-white/60 text-sm">{director.specialty}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
