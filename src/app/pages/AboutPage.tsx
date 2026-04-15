export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-[#0d1b28] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#EE455F] rounded-full blur-[150px] opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#45B9ED] rounded-full blur-[150px] opacity-8"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs uppercase tracking-wider rounded-full mb-6">
              About
            </div>
            <h1 className="font-['Proxima_Nova'] font-black text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight uppercase mb-8">
              We're Building
              <br />
              <span className="text-[#EE455F]">Something Different</span>
            </h1>
            <p className="text-2xl text-white/70 max-w-2xl">
              HundredOut is for golfers who want more action, more competition, and more to play for every round.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Proxima_Nova'] text-5xl uppercase tracking-tight mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-[#0d1b28]/70 leading-relaxed">
              <p>
                Golf needed something that matched the energy of real rounds—the trash talk, the side bets, the moments that make you want to run it back next week.
              </p>
              <p>
                So we built HundredOut. An app that gets it. An app that keeps score, tracks the action, and rewards the chaos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
