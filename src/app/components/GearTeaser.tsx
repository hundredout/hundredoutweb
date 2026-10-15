import { Link } from "react-router-dom";
import gearImg from "../../imports/mainCover_WEB_v2.jpg";
import gearVideo from "../../imports/ho-hero-1080.mp4";

export function GearTeaser() {
  return (
    <section className="relative py-16 bg-[#0d1b28] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#EE455F] rounded-full blur-[150px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          {/* Soft red glow behind the video */}
          <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[420px] w-[620px] -translate-y-1/2 rounded-full bg-[#EE455F] opacity-15 blur-[120px] lg:block"></div>
          {/* Left: Content */}
          <div className="relative">
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

          {/* Right: Video (still image fallback for reduced motion) */}
          <div
            className="relative aspect-video overflow-hidden"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 72% 72% at 50% 50%, #000 55%, transparent 100%)",
              maskImage: "radial-gradient(ellipse 72% 72% at 50% 50%, #000 55%, transparent 100%)",
            }}
          >
            <video
              className="w-full h-full object-cover motion-reduce:hidden"
              src={gearVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="HundredOut Core Crew hats in camo, navy and grey"
            />
            <img src={gearImg} alt="HundredOut Gear" className="hidden motion-reduce:block w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
