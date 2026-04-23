export function SocialSection() {
  return (
    <section className="relative py-32 bg-[#0d1b28] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2D5016] rounded-full blur-[200px] opacity-10"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-white/5 text-white text-xs uppercase tracking-wider rounded-full mb-6">
            Your Crew, Your Way
          </div>
          <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight uppercase mb-6">
            Set The
            <br />
            <span className="text-[#45B9ED]">Tone</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Every crew has a different vibe. Family-friendly or a little more unfiltered. HundredOut lets you choose how you want to play.
          </p>
        </div>

        {/* Moments Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Card 1 */}
          <div className="group relative aspect-square bg-gradient-to-br from-[#1a1a1a] to-black p-8 overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 bg-[#EE455F] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="8" y="12" width="24" height="16" rx="2"/>
                    <path d="M12 12v-2h16v2"/>
                    <path d="M14 20h4M14 24h8"/>
                  </svg>
                </div>
                <h3 className="font-[var(--font-display)] text-2xl uppercase tracking-tight mb-3">
                  Choose Your Vibe
                </h3>
                <p className="text-white/60 text-sm">
                  Family-friendly or unfiltered. Turn the trash talk dial to whatever level your group can handle.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative aspect-square bg-gradient-to-br from-[#1a1a1a] to-black p-8 overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 bg-[#45B9ED] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 8L24 16L32 20L24 24L20 32L16 24L8 20L16 16L20 8Z" strokeLinejoin="miter"/>
                  </svg>
                </div>
                <h3 className="font-[var(--font-display)] text-2xl uppercase tracking-tight mb-3">
                  Live Reactions
                </h3>
                <p className="text-white/60 text-sm">
                  React to shots as they happen. Celebrate the birdies. Roast the triple bogeys. It's all part of the round.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative aspect-square bg-gradient-to-br from-[#1a1a1a] to-black p-8 overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 bg-[#2D5016] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="16" cy="16" r="6"/>
                    <circle cx="24" cy="24" r="6"/>
                    <path d="M21 16l-5 8"/>
                  </svg>
                </div>
                <h3 className="font-[var(--font-display)] text-2xl uppercase tracking-tight mb-3">
                  Auto Bet Settling
                </h3>
                <p className="text-white/60 text-sm">
                  Who won what. Who owes who. The app does the math so you can focus on giving each other grief.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote/Testimonial Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#EE455F]/10 via-transparent to-[#45B9ED]/10 p-12 border border-white/5">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#EE455F]"></div>

            <p className="font-[var(--font-display)] text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              "We've been playing the same course for years. HundredOut turned it into a competition. Now there's always something on the line and someone talking trash."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 18V4M4 4L14 8L4 12" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
              </div>
              <div>
                <div className="text-white uppercase tracking-wide">J. Martinez</div>
                <div className="text-white/40 text-sm">Saturday 7am crew • Phoenix</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="px-10 py-4 bg-white text-[#0d1b28] uppercase tracking-wide hover:bg-[#EE455F] hover:text-white transition-all hover:scale-105 active:scale-95">
            Get the App
          </button>
        </div>
      </div>
    </section>
  );
}
