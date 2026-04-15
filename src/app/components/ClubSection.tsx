import { Check } from "lucide-react";

export function ClubSection() {
  const benefits = [
    "Exclusive tournaments & events",
    "Advanced stats & insights",
    "Early gear drops",
    "Members-only competitions",
    "Rare trophies & badges",
    "Direct line to the team"
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0a1628] via-black to-[#1a1a1a] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#EE455F] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#45B9ED] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-xs uppercase tracking-wider rounded-full mb-6">
            HundredOut Club
          </div>
          <h2 className="font-['Proxima_Nova'] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight uppercase mb-6">
            Go
            <br />
            <span className="text-[#EE455F]">All In</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            The app is free. Club membership unlocks the full experience. Exclusive competitions, rare trophies, and a community that gets it.
          </p>
        </div>

        {/* Membership Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <div className="mb-6">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Free</div>
              <div className="font-['Proxima_Nova'] text-5xl mb-2">$0</div>
              <div className="text-white/40 text-sm">Start here</div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-4 h-4 text-white/40" />
                <span>Full scoring & bet tracking</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-4 h-4 text-white/40" />
                <span>Play with your crew</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-4 h-4 text-white/40" />
                <span>Live leaderboards</span>
              </div>
            </div>

            <button className="w-full py-3 border border-white/20 text-white uppercase tracking-wide text-sm hover:bg-white/5 transition-all">
              Download Free
            </button>
          </div>

          {/* Pro Tier - Featured */}
          <div className="relative bg-gradient-to-br from-[#EE455F] to-[#d63d54] p-8 transform lg:scale-105 shadow-2xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#0d1b28] text-xs uppercase tracking-wider">
              Most Popular
            </div>

            <div className="mb-6">
              <div className="text-white/90 text-xs uppercase tracking-wider mb-2">Club</div>
              <div className="font-['Proxima_Nova'] text-5xl mb-2">$10</div>
              <div className="text-white/90 text-sm">per month</div>
            </div>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-white">
                  <Check className="w-4 h-4" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-white text-[#EE455F] uppercase tracking-wide text-sm hover:bg-white/90 transition-all">
              Join the Club
            </button>
          </div>

          {/* Elite Tier */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <div className="mb-6">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Founding Member</div>
              <div className="font-['Proxima_Nova'] text-5xl mb-2">$99</div>
              <div className="text-white/40 text-sm">per year</div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-white">
                <Check className="w-4 h-4 text-[#45B9ED]" />
                <span>Everything in Club</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <Check className="w-4 h-4 text-[#45B9ED]" />
                <span>Invitation-only events</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <Check className="w-4 h-4 text-[#45B9ED]" />
                <span>Limited edition gear</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <Check className="w-4 h-4 text-[#45B9ED]" />
                <span>Founding member badge</span>
              </div>
            </div>

            <button className="w-full py-3 border border-white/20 text-white uppercase tracking-wide text-sm hover:bg-white/5 transition-all">
              Become a Founder
            </button>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="max-w-2xl mx-auto mt-32 pt-16 border-t border-white/10 text-center">
          <p className="text-white/60 text-lg">
            Start free. Upgrade to unlock exclusive competitions, rare rewards, and the full HundredOut experience.
          </p>
        </div>
      </div>
    </section>
  );
}
