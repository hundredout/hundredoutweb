import coreCrewBadgeImg from "../../imports/CC_2026_Badge@4x.png";

const tiers = [
  {
    name: "HundredOut Crew",
    price: "$49.99/year",
    kicker: "Supporter Tier",
    gear: [
      "HundredOut original logo hat",
      "HundredOut metal ball marker",
    ],
    perks: [
      "Ad-free experience",
      "Member pricing on every drop",
      "Early access before anything goes public",
      "Redeemable HUNNIDs when the marketplace launches",
    ],
    accent: "#45B9ED",
  },
  {
    name: "HundredOut Core Crew",
    price: "$99.99/year",
    kicker: "Founding Member Tier",
    gear: [
      "Exclusive 2026 Core Crew hat",
      "Core Crew metal ball marker",
      "Core Crew in-app badge",
    ],
    perks: [
      "Ad-free experience",
      "First dibs on every drop",
      "VIP access plus best member pricing",
      "+100 HUNNID welcome bonus on join",
    ],
    accent: "#EE455F",
  },
];

const hunnids = [
  { action: "Fire away", value: "+25" },
  { action: "Par", value: "+5" },
  { action: "Birdie", value: "+50" },
  { action: "Eagle", value: "+75" },
  { action: "Albatross / Ace", value: "+100" },
];

export function ClubPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#0d1b28] py-32 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[10%] h-[420px] w-[420px] rounded-full bg-[#45B9ED] opacity-10 blur-[140px]"></div>
          <div className="absolute bottom-0 right-[8%] h-[460px] w-[460px] rounded-full bg-[#EE455F] opacity-12 blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-5xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-wider">
                <div className="h-2 w-2 rounded-full bg-[#EE455F]"></div>
                HundredOut Club
              </div>
              <h1 className="font-[var(--font-display)] text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight uppercase">
                Support the
                <br />
                app. Join the
                <br />
                <span className="text-[#EE455F]">crew.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/72 md:text-2xl">
                The HundredOut Club is a voluntary supporter program for players who want to ride with the
                brand. No feature gates. No paywalls. No pay-to-win. Every core HundredOut feature stays
                free for every player. The Club is about gear, identity, early access, and being part of
                something bigger.
              </p>
            </div>

            <div className="grid gap-4 self-end">
              <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45">What It Is</div>
                <div className="mt-3 font-[var(--font-display)] text-3xl uppercase tracking-tight">Supporter program</div>
              </div>
              <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45">What It Is Not</div>
                <div className="mt-3 font-[var(--font-display)] text-3xl uppercase tracking-tight">Not a paywall</div>
              </div>
              <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45">Why Join</div>
                <div className="mt-3 font-[var(--font-display)] text-3xl uppercase tracking-tight">Gear, status, first access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
              Two Tiers
            </div>
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-[#0d1b28]">
              Join the crew
              <br />
              <span className="text-[#45B9ED]">or go core.</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className="overflow-hidden border border-[#0d1b28]/10 bg-white shadow-[0_30px_80px_rgba(13,27,40,0.08)]"
              >
                <div className="p-8 md:p-10">
                  <div className="mb-4 text-xs uppercase tracking-[0.28em]" style={{ color: tier.accent }}>
                    {tier.kicker}
                  </div>
                  <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                    <div>
                      <h3 className="font-[var(--font-display)] text-4xl uppercase tracking-tight text-[#0d1b28]">
                        {tier.name}
                      </h3>
                      <div className="mt-4 text-3xl uppercase tracking-tight text-[#0d1b28]/70">{tier.price}</div>
                    </div>
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-full border-4 text-3xl font-black text-white"
                      style={{ backgroundColor: tier.accent, borderColor: tier.accent }}
                    >
                      100
                    </div>
                  </div>

                  <div className="mt-10 grid gap-8 md:grid-cols-2">
                    <div>
                      <div className="mb-4 text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45">Your Gear</div>
                      <div className="space-y-3">
                        {tier.gear.map((item) => (
                          <div key={item} className="border border-[#0d1b28]/10 bg-[#f6f8fb] p-4 text-base leading-relaxed text-[#0d1b28]/72">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-4 text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45">Membership Perks</div>
                      <div className="space-y-3">
                        {tier.perks.map((item) => (
                          <div key={item} className="border border-[#0d1b28]/10 bg-[#f6f8fb] p-4 text-base leading-relaxed text-[#0d1b28]/72">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d1b28] py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-[12%] h-80 w-80 rounded-full bg-[#EE455F] opacity-12 blur-[120px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-white/75">
                Founding Member Angle
              </div>
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
                Core Crew
                <br />
                <span className="text-[#EE455F]">since '26</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                Anyone who joins Core Crew in 2026 is a founding member. The hat is dated 2026. The badge
                says CC 2026. Future members will see that you were there from the start. This is not a
                points program. It is identity.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
              <div className="border border-white/10 bg-white/5 p-8">
                <div className="mb-4 text-xs uppercase tracking-[0.28em] text-white/45">Badge Preview</div>
                <div className="mx-auto flex h-52 w-52 items-center justify-center">
                  <img src={coreCrewBadgeImg} alt="Core Crew 2026 founding badge" className="h-full w-full object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]" />
                </div>
              </div>

              <div className="border border-white/10 bg-white/5 p-8">
                <div className="mb-4 text-xs uppercase tracking-[0.28em] text-white/45">Why It Matters</div>
                <div className="space-y-4 text-base leading-relaxed text-white/72">
                  <p>The Core Crew hat is an annual edition piece that will never be a generic evergreen product.</p>
                  <p>The in-app badge shows up on your profile and in rounds so other players can see you were in from day one.</p>
                  <p>The 2026 founding member status stays tied to your profile permanently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="border border-[#0d1b28]/10 bg-[#f6f8fb] p-8 md:p-10">
              <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#0d1b28]/45">HUNNIDs</div>
              <h2 className="font-[var(--font-display)] text-4xl uppercase tracking-tight text-[#0d1b28]">
                Play rounds.
                <br />
                Stack currency.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#0d1b28]/68">
                HUNNIDs are the in-app currency earned by playing. Crew and Core Crew members will have
                redemption access when the HundredOut marketplace launches, and Core Crew members get a
                +100 HUNNID welcome bonus on join.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {hunnids.map((item) => (
                  <div key={item.action} className="flex items-center justify-between border border-[#0d1b28]/10 bg-white p-4">
                    <span className="text-base text-[#0d1b28]/72">{item.action}</span>
                    <span className="font-[var(--font-display)] text-2xl uppercase tracking-tight text-[#EE455F]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#0d1b28]/10 bg-white p-8 shadow-[0_24px_60px_rgba(13,27,40,0.08)] md:p-10">
              <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#0d1b28]/45">How To Join</div>
              <h2 className="font-[var(--font-display)] text-4xl uppercase tracking-tight text-[#0d1b28]">
                Inside the app.
                <br />
                Straight to the point.
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  "Tap the club badge at the top of the Home screen.",
                  "Or go to your profile and select Support the App.",
                  "Available on iOS through the App Store as an in-app purchase.",
                  "Android support is coming soon.",
                  "Physical goods ship to US addresses with shipping timing communicated on purchase.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4 border border-[#0d1b28]/10 bg-[#f6f8fb] p-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0d1b28] text-sm text-white">
                      {index + 1}
                    </div>
                    <p className="text-base leading-relaxed text-[#0d1b28]/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
