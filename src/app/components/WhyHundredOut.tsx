import setToneImg from "../../imports/puttCommentary_(1).jpg";
import phoneScreen1 from "../../imports/Screenshot_2026-04-15_at_2.55.57 PM.png";
import phoneScreen2 from "../../imports/Screenshot_2026-04-15_at_2.55.06 PM.png";

export function WhyHundredOut() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 bg-[#0d1b28]/5 text-[#0d1b28] text-xs uppercase tracking-wider rounded-full mb-6">
            Your Crew, Your Style
          </div>
          <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight uppercase mb-6">
            Pick the Vibe.
            <br />
            <span className="text-[#EE455F]">Play Your Way.</span>
          </h2>
          <p className="text-xl text-[#0d1b28]/60">
            HundredOut is built to sound and feel more like real golfers and real rounds. Shape the app's personality to match your crew's energy.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Phone Mockups */}
          <div className="relative order-2 lg:order-1">
            <div className="mb-4 flex items-center justify-between sm:hidden">
              <div className="text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45">Slide to View Screens</div>
              <div className="text-xs uppercase tracking-[0.24em] text-[#0d1b28]/35">1 / 2</div>
            </div>

            <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-scroll overscroll-x-contain px-6 pb-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] touch-pan-x [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-row sm:justify-center sm:overflow-visible sm:px-0">
              {/* Phone 1 */}
              <div className="relative w-[min(84vw,280px)] shrink-0 snap-center bg-[#0d1b28] rounded-[3rem] border-4 border-[#0d1b28] p-3 shadow-2xl sm:w-[min(100%,280px)]">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <img src={phoneScreen1} alt="App stats and rewards" className="aspect-[280/580] w-full object-cover object-top" />
                </div>
              </div>

              {/* Phone 2 */}
              <div className="relative w-[min(84vw,280px)] shrink-0 snap-center bg-[#0d1b28] rounded-[3rem] border-4 border-[#0d1b28] p-3 shadow-2xl sm:w-[min(100%,280px)]">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <img src={phoneScreen2} alt="Crew leaderboard" className="aspect-[280/580] w-full object-cover object-top" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
              <div className="h-[2px] w-10 rounded-full bg-[#0d1b28]/18"></div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#0d1b28]/38">
                <span>←</span>
                <span>Slide</span>
                <span>→</span>
              </div>
              <div className="h-[2px] w-10 rounded-full bg-[#0d1b28]/18"></div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#45B9ED] rounded-full blur-2xl opacity-40"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#EE455F] rounded-full blur-2xl opacity-30"></div>
          </div>

          {/* Right: Key Features */}
          <div className="order-1 lg:order-2">
            <div className="space-y-10">
              {/* Set the Tone - Hero Feature */}
              <div className="pb-10 border-b-2 border-[#0d1b28]/10">
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                  <div className="h-[104px] w-[104px] flex-shrink-0 overflow-hidden rounded-full">
                    <img src={setToneImg} alt="Set the Tone" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] font-semibold text-3xl uppercase tracking-tight mb-3">Set the Tone</h3>
                    <p className="text-[#0d1b28]/70 leading-relaxed text-lg">
                      From edgy to easygoing, HundredOut lets you tailor the app's language to match your crew's style.
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Competition */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EE455F]/10 border border-[#EE455F]/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-[#EE455F] rotate-45"></div>
                    <div className="absolute w-2 h-2 bg-[#EE455F] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-semibold text-2xl uppercase tracking-tight mb-2">Live Competition</h3>
                  <p className="text-[#0d1b28]/60 leading-relaxed">
                    Real-time scoring and instant momentum shifts. See who's making moves and who's starting to slide.
                  </p>
                </div>
              </div>

              {/* Crew Leaderboards */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2D5016]/20 border border-[#2D5016] flex items-center justify-center relative">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-6 bg-[#2D5016]"></div>
                    <div className="w-1.5 h-4 bg-[#2D5016] mt-auto"></div>
                    <div className="w-1.5 h-5 bg-[#2D5016] mt-auto"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-semibold text-2xl uppercase tracking-tight mb-2">Crew Leaderboards</h3>
                  <p className="text-[#0d1b28]/60 leading-relaxed">
                    Track rivalries, settle debates, and know exactly who's been owning the group.
                  </p>
                </div>
              </div>

              {/* Trophies & HUNNIDs */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#45B9ED]/10 border border-[#45B9ED]/30 flex items-center justify-center relative">
                  <div className="relative">
                    <div className="w-6 h-6 border-2 border-[#45B9ED] rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 border-2 border-[#45B9ED] rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-semibold text-2xl uppercase tracking-tight mb-2">Trophies & HUNNIDs</h3>
                  <p className="text-[#0d1b28]/60 leading-relaxed">
                    Earn trophies for clutch moments and stack HUNNIDs every round. Build your collection and your status over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rewards Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0d1b28] via-[#0d1b28] to-[#0d1b28] p-8 text-white sm:p-10 lg:p-16">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE455F] rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#45B9ED] rounded-full blur-[100px] opacity-8"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="relative">
            <div className="text-center mb-10">
              <h3 className="font-[var(--font-display)] font-semibold text-4xl md:text-5xl uppercase tracking-tight mb-4">
                More to Play For
              </h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                HundredOut turns every round into something worth chasing. Trophies. Tokens. Status. Bragging rights.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Trophies */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#EE455F]/20 border border-[#EE455F]/40 flex items-center justify-center mx-auto mb-4 relative">
                  <div className="relative">
                    <div className="w-6 h-6 border-2 border-[#EE455F] rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 border-2 border-[#EE455F] rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                <h4 className="font-[var(--font-display)] font-semibold text-xl uppercase tracking-tight mb-2">Collectible Trophies</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Rare drops for clutch moments. Build your collection. Show them off.
                </p>
              </div>

              {/* HUNNIDs */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#45B9ED]/20 border border-[#45B9ED]/40 flex items-center justify-center mx-auto mb-4 relative">
                  <div className="flex gap-1">
                    <div className="w-5 h-5 rounded-full border-2 border-[#45B9ED]"></div>
                    <div className="w-5 h-5 rounded-full border-2 border-[#45B9ED] -ml-3 mt-1"></div>
                  </div>
                </div>
                <h4 className="font-[var(--font-display)] font-semibold text-xl uppercase tracking-tight mb-2">Stack HUNNIDs</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Earn tokens every round. Unlock exclusive rewards. More coming soon.
                </p>
              </div>

              {/* Status */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4 relative">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-7 bg-white"></div>
                      <div className="w-1.5 h-5 bg-white mt-auto"></div>
                      <div className="w-1.5 h-6 bg-white mt-auto"></div>
                    </div>
                  </div>
                </div>
                <h4 className="font-[var(--font-display)] font-semibold text-xl uppercase tracking-tight mb-2">Own The Board</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  All-time records. Lifetime stats. Eternal bragging rights over your crew.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
