import { Link } from "react-router-dom";
import languagePreferenceImg from "../../imports/SCREENSHOTS/LanguagePreference_screenshot.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1b28] text-white pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#EE455F] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#45B9ED] rounded-full blur-[150px] opacity-8"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.62fr]">
          <div className="max-w-5xl">
            {/* Overline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-[#EE455F] rounded-full animate-pulse"></div>
              <span className="text-sm uppercase tracking-wider">Your Crew • Your Game • Your Chaos</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Proxima_Nova'] font-black text-[clamp(3rem,10vw,8.8rem)] leading-[0.9] tracking-tight uppercase mb-8">
              Golf with
              <br />
              <span className="text-[#EE455F]">More Action</span>
              <br />
              More Banter
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12">
              Side bets. Live pressure. Instant trash talk. The app for golf rounds you'll actually remember.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/download" className="group relative px-8 py-4 bg-[#EE455F] text-white uppercase tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d63d54] to-[#EE455F] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Download Free
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>

              <Link to="/app" className="px-8 py-4 border-2 border-white/20 text-white uppercase tracking-wide hover:bg-white/5 hover:border-white/40 transition-all">
                See How It Works
              </Link>

              <Link to="/download" className="text-white/40 text-sm ml-4 hover:text-white/70 transition-colors">
                iOS & Android
              </Link>
            </div>

            {/* Moments */}
            <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 relative">
                    <div className="absolute inset-0 border-2 border-[#EE455F] rotate-45"></div>
                    <div className="absolute inset-2 border-2 border-[#EE455F] rotate-45"></div>
                  </div>
                  <div className="font-['Proxima_Nova'] text-5xl text-[#EE455F]">Earn</div>
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wide">Trophies & HUNNIDs</div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 relative">
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full border-2 border-[#45B9ED]"></div>
                      <div className="w-4 h-4 rounded-full border-2 border-[#45B9ED] -ml-2 mt-1"></div>
                    </div>
                  </div>
                  <div className="font-['Proxima_Nova'] text-5xl text-[#45B9ED]">Bet</div>
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wide">Anything You Want</div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 relative border-2 border-white flex items-center justify-center">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-3 bg-white"></div>
                        <div className="w-1 h-2 bg-white mt-auto"></div>
                        <div className="w-1 h-2.5 bg-white mt-auto"></div>
                      </div>
                    </div>
                  </div>
                  <div className="font-['Proxima_Nova'] text-5xl text-white">Own</div>
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wide">The Crew Board</div>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[690px] items-center justify-center lg:flex">
            <div className="absolute right-4 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#EE455F]/18 blur-[120px]"></div>
            <div className="absolute left-8 bottom-16 h-[320px] w-[320px] rounded-full bg-[#45B9ED]/14 blur-[110px]"></div>
            <div className="relative rounded-[3rem] bg-[#07131d] p-3 shadow-[0_45px_120px_rgba(0,0,0,0.45)]">
              <div className="h-[620px] w-[305px] overflow-hidden rounded-[2.35rem] bg-white">
                <img
                  src={languagePreferenceImg}
                  alt="HundredOut language preference screen"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs uppercase tracking-wider text-white/40">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40">
          <path d="M5 8L10 13L15 8" strokeLinecap="square" strokeLinejoin="miter"/>
        </svg>
      </div>
    </section>
  );
}
