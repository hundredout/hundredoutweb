export function CampaignsPage() {
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
              Campaigns
            </div>
            <h1 className="font-[var(--font-display)] font-black text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight uppercase mb-8">
              Special
              <br />
              <span className="text-[#EE455F]">Moments</span>
            </h1>
            <p className="text-2xl text-white/70 max-w-2xl">
              Limited drops, exclusive releases, and the stuff you don't want to miss.
            </p>
          </div>
        </div>
      </section>

      {/* Campaigns */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h2 className="font-[var(--font-display)] text-5xl uppercase tracking-tight mb-6">
              Stay Tuned
            </h2>
            <p className="text-xl text-[#0d1b28]/60 max-w-2xl mx-auto">
              Upcoming campaigns and special releases will be announced here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
