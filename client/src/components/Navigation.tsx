import { Link } from "wouter";
import { directors } from "@/data/directors";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isDirectorsOpen, setIsDirectorsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="Joy Productions" 
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <Link href="/about" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm uppercase tracking-wider">
              About
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsDirectorsOpen(true)}
              onMouseLeave={() => setIsDirectorsOpen(false)}
            >
              <button
                onClick={() => setIsDirectorsOpen(!isDirectorsOpen)}
                className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1 bg-transparent border-none cursor-pointer"
              >
                Directors
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {isDirectorsOpen && (
                <div className="absolute top-full left-0 pt-4 z-[100]">
                  <div className="bg-black/95 backdrop-blur-sm border border-white/10 rounded-md shadow-xl min-w-[200px] py-2">
                  <Link
                    href="/directors"
                    className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm font-semibold border-b border-white/10"
                    onClick={() => setIsDirectorsOpen(false)}
                  >
                    View All Directors
                  </Link>
                  {directors.map((director) => (
                    <Link
                      key={director.id}
                      href={`/directors/${director.slug}`}
                      className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm"
                      onClick={() => setIsDirectorsOpen(false)}
                    >
                      {director.name}
                    </Link>
                  ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm uppercase tracking-wider">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
