import beersImg from "../../imports/BEERS.png";
import cashImg from "../../imports/CASH.png";
import pushupsImg from "../../imports/PUSHUPS.png";
import daresImg from "../../imports/DARES.png";
import braggingImg from "../../imports/BRAGGING.png";
import whateverImg from "../../imports/WHATEVER.png";

export function SideActionSection() {
  const stakes = [
    {
      label: "Drinks",
      image: beersImg,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="8" width="12" height="16" rx="1"/>
          <path d="M10 12h12"/>
          <circle cx="16" cy="18" r="2" fill="currentColor" stroke="none"/>
        </svg>
      )
    },
    {
      label: "Cash",
      image: cashImg,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="11" width="20" height="10" rx="1"/>
          <circle cx="16" cy="16" r="3"/>
          <path d="M10 11v10M22 11v10"/>
        </svg>
      )
    },
    {
      label: "Pushups",
      image: pushupsImg,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 20L12 16L16 20L20 16L24 20"/>
          <circle cx="16" cy="12" r="2"/>
        </svg>
      )
    },
    {
      label: "Dares",
      image: daresImg,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8L20 16L16 24L12 16L16 8Z"/>
          <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none"/>
        </svg>
      )
    },
    {
      label: "Bragging Rights",
      image: braggingImg,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="12" y="12" width="8" height="8"/>
          <path d="M16 4v8M16 20v8M4 16h8M20 16h8"/>
        </svg>
      )
    },
    {
      label: "Whatever",
      image: whateverImg,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="16" cy="16" r="8"/>
          <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[#EE455F]/5 to-transparent"></div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#0d1b28]/5 text-[#0d1b28] text-xs uppercase tracking-wider rounded-full mb-6">
              Side Action
            </div>
            <h2 className="font-['Proxima_Nova'] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight uppercase mb-6">
              Always More
              <br />
              <span className="text-[#EE455F]">On The Line</span>
            </h2>
            <p className="text-xl text-[#0d1b28]/60 mb-8 leading-relaxed">
              Golf is better when there's something riding on it. HundredOut lets you bet whatever makes your round interesting.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EE455F]/10 border border-[#EE455F]/30 flex items-center justify-center mt-1">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-6 bg-[#EE455F]"></div>
                    <div className="w-1.5 h-4 bg-[#EE455F] mt-auto"></div>
                    <div className="w-1.5 h-5 bg-[#EE455F] mt-auto"></div>
                  </div>
                </div>
                <div>
                  <h4 className="uppercase tracking-wide mb-2">Your Stakes, Your Rules</h4>
                  <p className="text-[#0d1b28]/60 leading-relaxed">
                    Set up side bets on anything. Closest to the pin for drinks. Worst score buys lunch. Winner gets bragging rights forever.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#45B9ED]/10 border border-[#45B9ED]/30 flex items-center justify-center mt-1">
                  <div className="w-5 h-5 border-2 border-[#45B9ED] rounded-sm">
                    <div className="w-1.5 h-1.5 bg-[#45B9ED] m-auto mt-1"></div>
                  </div>
                </div>
                <div>
                  <h4 className="uppercase tracking-wide mb-2">Auto Tracking</h4>
                  <p className="text-[#0d1b28]/60 leading-relaxed">
                    The app tracks who won what. No arguments. No forgotten bets. Just receipts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2D5016]/20 border border-[#2D5016] flex items-center justify-center mt-1">
                  <div className="w-5 h-5 rounded-full border-2 border-[#2D5016]"></div>
                </div>
                <div>
                  <h4 className="uppercase tracking-wide mb-2">Keep It Fun</h4>
                  <p className="text-[#0d1b28]/60 leading-relaxed">
                    This isn't a gambling platform. We don't process money. We just make it easy to track whatever makes your round interesting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stakes Grid */}
          <div>
            <div className="grid grid-cols-3 gap-4">
              {stakes.map((stake, index) => (
                <div
                  key={index}
                  className="group relative aspect-square text-white p-6 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden transition-all duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${stake.image})` }}
                  ></div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-[#0d1b28]/60 group-hover:bg-[#EE455F]/80 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 mb-3 group-hover:scale-110 transition-transform">{stake.icon}</div>
                  <div className="relative z-10 font-['Proxima_Nova'] text-lg uppercase tracking-tight">{stake.label}</div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-1 transition-all duration-300 z-10"></div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-8 p-6 bg-[#0d1b28]/5 border-l-4 border-[#EE455F]">
              <p className="text-sm text-[#0d1b28]/60 leading-relaxed">
                <span className="font-['Proxima_Nova'] text-lg text-[#0d1b28] uppercase tracking-tight block mb-2">
                  You Handle the Settling
                </span>
                HundredOut tracks the action. You settle up however you want. Cash via Venmo. Beers at the 19th hole. Or just pure, unfiltered bragging rights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
