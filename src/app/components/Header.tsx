import { Link } from "react-router-dom";
import circleMarkImg from "../../imports/HundredOut_circleMark_Final.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#0d1b28]/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className="absolute inset-0 bg-[#EE455F] blur-lg opacity-30"></div>
              <img
                src={circleMarkImg}
                alt="HundredOut circle mark"
                className="relative h-10 w-10 object-contain"
              />
            </div>
            <span className="font-[var(--font-display)] text-2xl tracking-tight uppercase">HundredOut</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/app" className="text-sm uppercase tracking-wide hover:text-[#EE455F] transition-colors">App</Link>
            <Link to="/gear" className="text-sm uppercase tracking-wide hover:text-[#EE455F] transition-colors">Gear</Link>
            <Link to="/club" className="text-sm uppercase tracking-wide hover:text-[#EE455F] transition-colors">Club</Link>
            <Link to="/about" className="text-sm uppercase tracking-wide hover:text-[#EE455F] transition-colors">About</Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link to="/download" className="hidden md:block px-6 py-2.5 bg-[#EE455F] text-white uppercase tracking-wide text-sm hover:bg-[#d63d54] transition-all hover:scale-105 active:scale-95">
              Download App
            </Link>
            <button className="md:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="square"/>
                <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="square"/>
                <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="square"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
