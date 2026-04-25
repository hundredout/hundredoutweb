export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Set It Up",
      description: "Play with your crew. Play solo. Create a quick game. Add your buddies if you want. Choose your vibe. Takes 30 seconds.",
      color: "#EE455F"
    },
    {
      number: "2",
      title: "Play & Compete",
      description: "Track live. Bet on anything. Earn HUNNIDs. Stack trophies. Talk trash.",
      color: "#45B9ED"
    },
    {
      number: "3",
      title: "Own It",
      description: "See who won. Settle bets. Check the leaderboard. Never let them forget.",
      color: "#2D5016"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#0d1b28]/5 text-[#0d1b28] text-xs uppercase tracking-wider rounded-full mb-6">
            How It Works
          </div>
          <h2 className="font-[var(--font-display)] font-semibold text-4xl md:text-5xl uppercase tracking-tight mb-4">
            How It Goes Down
          </h2>
          <p className="text-[#0d1b28]/60 text-lg">Simple setup. Live action. Instant bragging rights.</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%+48px)] h-0.5 bg-[#0d1b28]/10"></div>
              )}

              <div className="relative text-center">
                {/* Number Circle */}
                <div
                  className="w-24 h-24 mx-auto mb-6 border-4 flex items-center justify-center relative z-10 bg-white"
                  style={{ borderColor: step.color }}
                >
                  <span className="font-[var(--font-display)] font-semibold text-5xl" style={{ color: step.color }}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-display)] font-semibold text-2xl uppercase tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[#0d1b28]/60">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
