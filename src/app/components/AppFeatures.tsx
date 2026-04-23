import { Target, Users, TrendingUp, Trophy } from "lucide-react";

export function AppFeatures() {
  const features = [
    {
      icon: Target,
      title: "Live Competition",
      description: "Real-time scoring. Instant updates. See who's clutch and who's falling apart as it happens."
    },
    {
      icon: Users,
      title: "Crew Rivalry",
      description: "Lifetime stats against your friends. Head-to-head records. Ongoing leaderboards. Eternal bragging rights."
    },
    {
      icon: TrendingUp,
      title: "Track Everything",
      description: "Every round. Every bet. Every trophy earned. Full history so the receipts never lie."
    },
    {
      icon: Trophy,
      title: "Earn Rewards",
      description: "Stack trophies for clutch moments. Earn HUNNIDs every round. Build your collection and your status."
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-[#EE455F]/10 text-[#EE455F] text-xs uppercase tracking-wider rounded-full mb-6">
            How It Works
          </div>
          <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight uppercase mb-6">
            Finally, An App
            <br />
            <span className="text-[#0d1b28]/40">That Gets It</span>
          </h2>
          <p className="text-xl text-[#0d1b28]/60">
            Golf is way more fun when something's on the line. We just made it easier to keep track of who's winning, who's losing, and who owes who.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-[#0d1b28] text-white hover:bg-[#EE455F] transition-all duration-300 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 border-2 border-white/20 group-hover:border-white/40 flex items-center justify-center transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-display)] font-semibold text-2xl uppercase tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                  {feature.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* App Screenshot Mockup Section */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-32">
        <div className="relative bg-gradient-to-br from-black via-[#1a1a1a] to-black p-12 lg:p-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          {/* Content */}
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-[var(--font-display)] font-semibold text-[clamp(2rem,6vw,4rem)] leading-[0.95] tracking-tight uppercase text-white mb-6">
                Built for
                <br />
                <span className="text-[#EE455F]">The Group Chat</span>
              </h3>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                See who's up, who's down, and who just made the shot of the day. Post reactions. Talk trash. Settle bets. All without leaving the app.
              </p>
              <button className="px-8 py-3 bg-[#EE455F] text-white uppercase tracking-wide text-sm hover:bg-[#d63d54] transition-all">
                Download Free
              </button>
            </div>

            {/* Mock Phone Display */}
            <div className="relative">
              <div className="relative mx-auto w-[280px] h-[580px] bg-[#0d1b28] rounded-[3rem] p-3 border-8 border-[#1a1a1a] shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="px-6 py-3 flex items-center justify-between text-white text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-white/40 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-6 py-4">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Hole 7 • Par 4 • Live</div>
                    <div className="flex items-baseline gap-2 mb-6">
                      <div className="font-[var(--font-display)] font-semibold text-6xl text-white">-2</div>
                      <div className="text-[#EE455F] text-xs uppercase tracking-wider">You're Up</div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between p-3 bg-[#EE455F]/20 border border-[#EE455F]/40 rounded">
                        <div>
                          <span className="text-white text-sm block">You</span>
                          <span className="text-white/60 text-xs">On fire 🔥</span>
                        </div>
                        <span className="font-[var(--font-display)] font-semibold text-2xl text-[#EE455F]">32</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                        <div>
                          <span className="text-white/60 text-sm block">Mike</span>
                          <span className="text-white/40 text-xs">Choking</span>
                        </div>
                        <span className="font-[var(--font-display)] font-semibold text-2xl text-white/60">34</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                        <div>
                          <span className="text-white/60 text-sm block">Sarah</span>
                          <span className="text-white/40 text-xs">Solid</span>
                        </div>
                        <span className="font-[var(--font-display)] font-semibold text-2xl text-white/60">33</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="p-3 bg-white/5 border border-white/10 rounded">
                        <div className="text-white/40 text-xs mb-1">SIDE BET</div>
                        <div className="text-white text-sm">Closest to pin • Hole 9 • Drinks 🍺</div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex-1 p-2 bg-[#45B9ED]/20 border border-[#45B9ED]/40 rounded text-center">
                          <div className="text-xs text-white/60">HUNNIDs</div>
                          <div className="font-[var(--font-display)] font-semibold text-xl text-[#45B9ED]">+120</div>
                        </div>
                        <div className="flex-1 p-2 bg-[#EE455F]/20 border border-[#EE455F]/40 rounded text-center">
                          <div className="text-xs text-white/60">Trophy</div>
                          <div className="text-lg">🏆</div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-[#EE455F] text-white text-sm uppercase tracking-wide rounded">
                      Update Score
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#45B9ED] rounded-full blur-2xl opacity-40"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#EE455F] rounded-full blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
