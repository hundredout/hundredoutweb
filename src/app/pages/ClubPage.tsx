export function ClubPage() {
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
              Club
            </div>
            <h1 className="font-['Proxima_Nova'] font-black text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight uppercase mb-8">
              Join The
              <br />
              <span className="text-[#EE455F]">Club</span>
            </h1>
            <p className="text-2xl text-white/70 max-w-2xl mb-12">
              Exclusive access, member perks, and a community of golfers who get it.
            </p>
            <button className="px-8 py-4 bg-[#EE455F] text-white uppercase tracking-wide hover:bg-[#d63d54] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="font-['Proxima_Nova'] text-5xl uppercase tracking-tight mb-6">
              More Than Just an App
            </h2>
            <p className="text-xl text-[#0d1b28]/60 max-w-2xl mx-auto">
              Club membership details and benefits coming soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
