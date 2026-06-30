import { EarlyAccessSignup } from "../components/EarlyAccessSignup";
import coreCrewBadgeImg from "../../imports/CC_2026_Badge@4x.png";
import coreCrewBoxImg from "../../imports/GEAR/CoreCrew_2026_Box.jpg";
import heroGearImg from "../../imports/mainCover_CLUB_v2.jpg";

const meaningPillars = [
  {
    title: "Good People",
    copy: "The crew you actually want to play with.",
  },
  {
    title: "Good Times",
    copy: "The moments that make the round worth remembering.",
  },
  {
    title: "Full 100 Energy",
    copy: "Show up, have a blast, and rep it like you mean it.",
  },
];

const tiers = [
  {
    tag: "Start Here",
    name: "Basic",
    copy: "The free way in. Scoring, bet tracking, and playing with your crew in the app.",
    highlight: false,
  },
  {
    tag: "The Club",
    name: "Club Member",
    copy: "The next step in. Club perks, events, and early looks — without the annual Core Crew box.",
    highlight: false,
  },
  {
    tag: "The Inner Circle",
    name: "Core Crew",
    copy: "The exclusive top tier. The annual member apparel box, the crew card, and the inside track on everything HundredOut. Strictly limited.",
    highlight: true,
  },
];

const benefits = [
  {
    title: "First In Line",
    copy: "Founding members get in before anyone else when the Club opens.",
  },
  {
    title: "Founding Status",
    copy: "Locked-in founding member recognition you can't get later.",
  },
  {
    title: "Early Access Drops",
    copy: "First look at Core Crew gear and select HundredOut releases.",
  },
  {
    title: "More Over Time",
    copy: "The Club grows as HundredOut grows. Founders get the first word.",
  },
];

export function ClubPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#0d1b28] pt-28 pb-20 text-white lg:pt-36 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute left-[8%] top-10 h-[420px] w-[420px] rounded-full bg-[#45B9ED] opacity-10 blur-[140px]"></div>
          <div className="absolute bottom-0 right-[8%] h-[500px] w-[500px] rounded-full bg-[#EE455F] opacity-14 blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid items-center gap-10 md:grid-cols-[0.95fr_0.75fr] lg:grid-cols-[1fr_0.82fr] lg:gap-14">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/75 backdrop-blur-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#EE455F]"></div>
                Coming 2026 · Founding members forming
              </div>
              <div className="mb-5 text-sm uppercase tracking-[0.32em] text-[#45B9ED]">
                Good people · Good times · Full 100
              </div>
              <h1 className="font-[var(--font-display)] text-[clamp(4.5rem,11vw,9rem)] font-black uppercase leading-[0.82] tracking-tight">
                The Club
                <br />
                Is <span className="text-[#EE455F]">Coming</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl lg:text-2xl">
                The HundredOut Club is a membership built on good people, good times, and full 100 energy — and it comes
                in tiers. At the top sits Core Crew: a limited inner circle with exclusive apparel shipped every year.
                It&apos;s not open yet. Get on the list now and you&apos;re a founding member, first in when it opens.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#join"
                  className="inline-flex justify-center bg-[#EE455F] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-all hover:scale-105 hover:bg-[#d63d54] active:scale-95"
                >
                  Get On The List
                </a>
                <a
                  href="#tiers"
                  className="inline-flex justify-center border-2 border-white/20 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  See The Tiers
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 -top-10 h-56 w-56 rounded-full bg-[#EE455F]/20 blur-3xl"></div>
              <div className="relative overflow-hidden border-[10px] border-white bg-white shadow-[0_45px_120px_rgba(0,0,0,0.35)] md:border-[12px]">
                <img src={heroGearImg} alt="HundredOut Club members having fun on the course" className="aspect-[4/5] h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1b28] to-transparent p-6 text-white">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/55">HundredOut Club</div>
                  <div className="mt-2 font-[var(--font-display)] text-3xl font-semibold uppercase leading-none tracking-tight lg:text-4xl">
                    Good people.
                    <br />
                    Full 100.
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-7 -right-5 hidden w-32 border border-white/10 bg-[#07131d] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.25)] md:block lg:w-40">
                <img src={coreCrewBadgeImg} alt="Core Crew 2026 badge" className="h-auto w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]/65">
                What The Club&apos;s About
              </div>
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5.4rem)] font-semibold uppercase leading-[0.92] tracking-tight text-[#0d1b28]">
                More Than
                <br />
                <span className="text-[#EE455F]">Member Gear</span>
              </h2>
            </div>
            <p className="max-w-3xl text-xl leading-relaxed text-[#0d1b28]/68">
              The HundredOut Club is for the golfers who bring the energy. The ones who show up for the round, the laughs,
              the banter, the cart rides, the side bets, the good shots, the bad shots, and the stories after. It&apos;s
              about living life full 100 and playing golf the same way.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {meaningPillars.map((pillar) => (
              <article key={pillar.title} className="border border-[#0d1b28]/10 bg-[#f6f8fb] p-7">
                <div className="mb-8 h-2 w-16 bg-[#EE455F]"></div>
                <h3 className="font-[var(--font-display)] text-3xl font-semibold uppercase tracking-tight text-[#0d1b28]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-[#0d1b28]/62">{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tiers" className="scroll-mt-24 bg-[#f6f8fb] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]/65">
                Three Ways In
              </div>
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5.4rem)] font-semibold uppercase leading-[0.92] tracking-tight text-[#0d1b28]">
                How The
                <br />
                <span className="text-[#EE455F]">Club Works</span>
              </h2>
            </div>
            <p className="max-w-3xl text-xl leading-relaxed text-[#0d1b28]/68">
              The Club has levels. Start free in the app, step up to Club Member, or go all the way to Core Crew — the
              limited, apparel-shipping inner circle at the top of the ladder.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={
                  tier.highlight
                    ? "relative flex flex-col border border-[#EE455F]/30 bg-[#0d1b28] p-8 text-white shadow-[0_30px_80px_rgba(13,27,40,0.18)] md:-mt-4"
                    : "flex flex-col border border-[#0d1b28]/10 bg-white p-8 text-[#0d1b28]"
                }
              >
                {tier.highlight ? (
                  <div className="absolute right-6 top-6 bg-[#EE455F] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
                    Top Tier
                  </div>
                ) : null}
                <div className={tier.highlight ? "text-xs uppercase tracking-[0.24em] text-[#45B9ED]" : "text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45"}>
                  {tier.tag}
                </div>
                <h3 className="mt-3 font-[var(--font-display)] text-4xl font-semibold uppercase tracking-tight">
                  {tier.name}
                </h3>
                <p className={tier.highlight ? "mt-4 text-base leading-relaxed text-white/70" : "mt-4 text-base leading-relaxed text-[#0d1b28]/62"}>
                  {tier.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d1b28] py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute right-[12%] top-24 h-96 w-96 rounded-full bg-[#45B9ED] opacity-10 blur-[140px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-5 inline-block rounded-full border border-[#EE455F]/40 bg-[#EE455F]/10 px-4 py-1.5 text-xs uppercase tracking-wider text-white/80">
                Top Tier · Core Crew
              </div>
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5.4rem)] font-semibold uppercase leading-[0.92] tracking-tight">
                The Core Crew
                <br />
                <span className="text-[#45B9ED]">2026 Box</span>
              </h2>
            </div>
            <p className="max-w-3xl text-xl leading-relaxed text-white/70">
              Core Crew sits at the top of the Club, and this is the reason why. Every membership ships a box of
              exclusive, dated apparel once a year — gear you can&apos;t buy any other way. The 2026 edition is taking
              shape now. Founding members get the first one.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative overflow-hidden border-[10px] border-white bg-white shadow-[0_45px_120px_rgba(0,0,0,0.45)] md:border-[12px]">
              <img src={coreCrewBoxImg} alt="The Core Crew 2026 member box — hats, hoodie, crew card, pins, and stickers" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/70">
                <div className="h-2 w-2 rounded-full bg-[#EE455F]"></div>
                What ships in the box
              </div>
              <h3 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold uppercase leading-[0.95] tracking-tight">
                Members-only.
                <br />
                <span className="text-[#EE455F]">Once a year.</span>
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                The dated Core Crew hats, the performance hoodie, your numbered crew card, pins, stickers — packed and
                shipped to every member. A new box, new gear, every season you&apos;re in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 max-w-4xl">
            <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]/65">
              Why Get On The List Now
            </div>
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5.4rem)] font-semibold uppercase leading-[0.92] tracking-tight text-[#0d1b28]">
              What Founding
              <br />
              <span className="text-[#EE455F]">Members Get</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="border border-[#0d1b28]/10 bg-white p-7 shadow-[0_24px_60px_rgba(13,27,40,0.06)]">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#0d1b28] text-sm font-black text-white">
                  100
                </div>
                <h3 className="font-[var(--font-display)] text-2xl font-semibold uppercase tracking-tight text-[#0d1b28]">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#0d1b28]/62">{benefit.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d1b28] py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-[12%] top-0 h-80 w-80 rounded-full bg-[#EE455F] opacity-12 blur-[120px]"></div>
          <div className="absolute bottom-0 right-[12%] h-80 w-80 rounded-full bg-[#45B9ED] opacity-10 blur-[120px]"></div>
        </div>

        <div className="relative mx-auto grid max-w-[1600px] gap-12 px-6 lg:grid-cols-[1fr_0.55fr] lg:items-center lg:px-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70">
              <div className="h-2 w-2 rounded-full bg-[#EE455F]"></div>
              Founding members forming
            </div>
            <h2 className="font-[var(--font-display)] text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-tight">
              Be A
              <br />
              Founding
              <br />
              <span className="text-[#EE455F]">Member</span>
            </h2>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/72">
              The Club isn&apos;t open yet — and that&apos;s the point. Get your name down now and you&apos;re a founding
              member: first in line, first access, and the first to know the moment it goes live.
            </p>
            <a
              href="#join"
              className="mt-10 inline-flex bg-[#EE455F] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-all hover:scale-105 hover:bg-[#d63d54] active:scale-95"
            >
              Get On The List
            </a>
          </div>

          <div className="border border-white/10 bg-white/5 p-8">
            <div className="mx-auto flex max-w-[320px] items-center justify-center">
              <img src={coreCrewBadgeImg} alt="Core Crew 2026 founding badge" className="h-full w-full object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]" />
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="scroll-mt-24 bg-[#f6f8fb] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <EarlyAccessSignup
            eyebrow="Founding Members List"
            title="Get on the list. Be a founding member."
            description="The HundredOut Club is coming. Add your email and you're first in line when it opens — early access, founding member status, and the first word on Core Crew gear before anyone else."
            ctaLabel="Claim My Spot"
            footnote="No spam. Just the inside track on the Club, founding access, and what lands next."
            theme="dark"
          />
        </div>
      </section>
    </div>
  );
}
