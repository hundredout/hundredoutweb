export function MomentsSection() {
  const moments = [
    {
      title: "The Comeback",
      description: "Down 4 through 12. Birdied 15, 16, and 17. Won on 18. The crew still brings it up six months later.",
      color: "#EE455F",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M24 8L28 20L40 24L28 28L24 40L20 28L8 24L20 20L24 8Z" strokeLinejoin="miter"/>
        </svg>
      )
    },
    {
      title: "The Meltdown",
      description: "Triple on the easiest par 3. Lost the side bet. Got roasted in the group chat for a week. Worth it for the laugh.",
      color: "#45B9ED",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M24 12L30 24L24 36L18 24L24 12Z"/>
          <path d="M12 24L24 12M36 24L24 12M12 24L24 36M36 24L24 36"/>
        </svg>
      )
    },
    {
      title: "The Side Bet",
      description: "Bet drinks on who could hit the green on the island hole. Made it. Everyone else wet. Free beers taste better.",
      color: "#2D5016",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="20" cy="20" r="8"/>
          <circle cx="28" cy="28" r="8"/>
          <path d="M26 20l-6 8"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 bg-[#0d1b28]/5 text-[#0d1b28] text-xs uppercase tracking-wider rounded-full mb-6">
            The Real Game
          </div>
          <h2 className="font-['Proxima_Nova'] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight uppercase mb-6">
            It's About
            <br />
            <span className="text-[#0d1b28]/40">The Moments</span>
          </h2>
          <p className="text-xl text-[#0d1b28]/60">
            Stats are cool. But golf is really about the shots, the pressure, the laughs, and the stories that stick around long after the round ends.
          </p>
        </div>

        {/* Moments Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="group relative bg-[#0d1b28] text-white p-10 overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Background accent */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: moment.color }}
              ></div>

              <div className="relative">
                <div className="mb-6" style={{ color: moment.color }}>{moment.icon}</div>
                <h3 className="font-['Proxima_Nova'] text-3xl uppercase tracking-tight mb-4" style={{ color: moment.color }}>
                  {moment.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {moment.description}
                </p>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-20 h-1 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: moment.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Big Quote Section */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-black to-[#1a1a1a] p-16 text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE455F] rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#45B9ED] rounded-full blur-[100px] opacity-20"></div>

            <div className="relative">
              <div className="font-['Proxima_Nova'] text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-8">
                "The best rounds aren't about shooting your best score.
                <br />
                <span className="text-[#EE455F]">They're about the crew, the chaos, and what you're playing for."</span>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
                <div className="text-white/60 uppercase tracking-wide text-sm">
                  That's HundredOut
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
