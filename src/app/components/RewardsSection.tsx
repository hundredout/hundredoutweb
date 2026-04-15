import { Trophy, Coins, Users } from "lucide-react";

export function RewardsSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#EE455F] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#45B9ED] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-xs uppercase tracking-wider rounded-full mb-6">
            Rewards & Status
          </div>
          <h2 className="font-['Proxima_Nova'] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight uppercase mb-6">
            More Ways to
            <br />
            <span className="text-[#EE455F]">Flex</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Every great shot, clutch moment, and completed round earns you something. Build your trophy case. Stack HUNNIDs. Own the crew leaderboard.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Trophies */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-10 group hover:border-[#EE455F]/40 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EE455F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-16 h-16 bg-[#EE455F]/20 border border-[#EE455F]/40 flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-[#EE455F]" />
            </div>

            <h3 className="font-['Proxima_Nova'] text-3xl uppercase tracking-tight mb-4">
              Trophies
            </h3>

            <p className="text-white/60 mb-6 leading-relaxed">
              Earn trophies for everything from your first birdie to a flawless round. They're not just badges—they're collectible proof of what you've done.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1 h-8 bg-[#EE455F]"></div>
                <span className="text-white/80">Rare drops for clutch moments</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1 h-8 bg-[#EE455F]"></div>
                <span className="text-white/80">Show them on your profile</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1 h-8 bg-[#EE455F]"></div>
                <span className="text-white/80">Chase the full collection</span>
              </div>
            </div>
          </div>

          {/* HUNNIDs */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-10 group hover:border-[#45B9ED]/40 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#45B9ED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-16 h-16 bg-[#45B9ED]/20 border border-[#45B9ED]/40 flex items-center justify-center mb-6">
              <Coins className="w-8 h-8 text-[#45B9ED]" />
            </div>

            <h3 className="font-['Proxima_Nova'] text-3xl uppercase tracking-tight mb-4">
              HUNNIDs
            </h3>

            <p className="text-white/60 mb-6 leading-relaxed">
              Play. Compete. Stack tokens. HUNNIDs are your in-app currency for grinding rounds, hitting milestones, and winning competitions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1 h-8 bg-[#45B9ED]"></div>
                <span className="text-white/80">Earn through every round</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1 h-8 bg-[#45B9ED]"></div>
                <span className="text-white/80">Unlock exclusive rewards</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1 h-8 bg-[#45B9ED]"></div>
                <span className="text-white/80">More coming soon</span>
              </div>
            </div>
          </div>

          {/* Crew Leaderboards */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-10 group hover:border-[#2D5016]/60 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D5016] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-16 h-16 bg-[#2D5016]/40 border border-[#2D5016] flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-[#2D5016]" />
            </div>

            <h3 className="font-['Proxima_Nova'] text-3xl uppercase tracking-tight mb-4">
              Crew Leaderboards
            </h3>

            <p className="text-white/60 mb-6 leading-relaxed">
              Your friends aren't just playing partners—they're rivals. Track who's got the best round, most wins, and highest streak. All-time.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1 h-8 bg-[#2D5016]"></div>
                <span className="text-white/80">Head-to-head records</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1 h-8 bg-[#2D5016]"></div>
                <span className="text-white/80">Lifetime stats vs your crew</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-1 h-8 bg-[#2D5016]"></div>
                <span className="text-white/80">Never forget who won</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-[#EE455F] blur-2xl opacity-20"></div>
            <div className="relative">
              <div className="font-['Proxima_Nova'] text-4xl md:text-5xl uppercase tracking-tight mb-4">
                More to Play For
              </div>
              <p className="text-white/60 mb-8">
                Trophies. Tokens. Status. HundredOut turns every round into something worth chasing.
              </p>
              <button className="px-10 py-4 bg-white text-[#0d1b28] uppercase tracking-wide hover:bg-[#EE455F] hover:text-white transition-all hover:scale-105 active:scale-95">
                Start Earning
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
