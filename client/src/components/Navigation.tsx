import { Link } from "wouter";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
              Joy
            </a>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link href="/about">
              <a className="text-white/90 hover:text-white transition-colors text-sm uppercase tracking-wider">
                About
              </a>
            </Link>
            <Link href="/directors">
              <a className="text-white/90 hover:text-white transition-colors text-sm uppercase tracking-wider">
                Directors
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-white/90 hover:text-white transition-colors text-sm uppercase tracking-wider">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
