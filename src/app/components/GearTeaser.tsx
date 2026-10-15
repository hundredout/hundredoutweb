import { Link } from "react-router-dom";
import hoodieImg from "../../imports/ho-wip-hoodie.webp";
import poloImg from "../../imports/ho-wip-polo.webp";

export function GearTeaser() {
  return (
    <section className="relative py-16 bg-[#0d1b28] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#EE455F] rounded-full blur-[150px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="font-[var(--font-display)] font-semibold text-4xl md:text-5xl uppercase tracking-tight mb-4">
              Gear Is Here
            </h2>
            <p className="text-lg text-white/60 mb-6 leading-relaxed">
              The 100 Mark has landed. Core Crew and OG hats, plus everyday gear built to wear on the course and off it. Polos and performance layers are next.
            </p>
            <Link to="https://gear.hundredout.com" className="group inline-flex items-center gap-2 bg-[#EE455F] px-6 py-3 text-sm uppercase tracking-wide text-white hover:bg-[#d63d54] transition-colors">
              Shop the Gear
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>
            </Link>
          </div>

          {/* Right: Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden">
              <img src={hoodieImg} alt="HundredOut hoodie" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden">
              <img src={poloImg} alt="HundredOut polo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
