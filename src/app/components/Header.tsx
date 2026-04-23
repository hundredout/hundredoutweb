import { useState } from "react";
import { Link } from "react-router-dom";
import circleMarkImg from "../../imports/HundredOut_circleMark_Final.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "App", to: "/app" },
    { label: "Gear", to: "/gear" },
    { label: "Club", to: "/club" },
    { label: "About", to: "/about" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#0d1b28]/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className="absolute inset-0 bg-[#EE455F] blur-lg opacity-30"></div>
              <img
                src={circleMarkImg}
                alt="HundredOut circle mark"
                className="relative h-10 w-10 object-contain"
              />
            </div>
            <span className="font-[var(--font-display)] font-semibold text-2xl tracking-tight uppercase">HundredOut</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm uppercase tracking-wide hover:text-[#EE455F] transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link to="/download" className="hidden md:block px-6 py-2.5 bg-[#EE455F] text-white uppercase tracking-wide text-sm hover:bg-[#d63d54] transition-all hover:scale-105 active:scale-95">
              Download App
            </Link>
            <button
              type="button"
              className="md:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {isMenuOpen ? (
                  <>
                    <line x1="5" y1="5" x2="19" y2="19" strokeLinecap="square"/>
                    <line x1="19" y1="5" x2="5" y2="19" strokeLinecap="square"/>
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="square"/>
                    <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="square"/>
                    <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="square"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="border-t border-[#0d1b28]/8 bg-white px-6 py-6 shadow-[0_24px_60px_rgba(13,27,40,0.12)]">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className="border-b border-[#0d1b28]/8 py-4 font-[var(--font-display)] text-3xl font-semibold uppercase tracking-tight text-[#0d1b28]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/download"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center bg-[#EE455F] px-6 py-4 text-sm uppercase tracking-[0.22em] text-white"
            >
              Download App
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
