import { Link } from "react-router-dom";
import coreCrewBadgeImg from "../../imports/CC_2026_Badge@4x.png";
import headwearImg from "../../imports/GEAR/100_headwear.jpg";
import hoodieImg from "../../imports/GEAR/keepit100_hoodie_UPDATE.jpg";
import lifestyleImg from "../../imports/GEAR/LifeStyleShot.png";
import poloImg from "../../imports/GEAR/PoloProductConcepts.png";
import heroGearImg from "../../imports/mainCover_WEB_v2.jpg";
import cartMomentImg from "../../imports/SCREENSHOTS/BEERS_LR.jpg";
import braggingImg from "../../imports/SCREENSHOTS/BRAGGING_LR.jpg";

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

const kitItems = [
  {
    name: "Core Crew Hat 2026",
    copy: "The dated member piece. A structured performance hat built to rep the crew from the first tee to the last laugh.",
    image: headwearImg,
  },
  {
    name: "Performance Hoodie",
    copy: "A lightweight layer for early tee times, range sessions, travel days, and everyday wear.",
    image: hoodieImg,
  },
  {
    name: "Golf Polo",
    copy: "A modern course staple with HundredOut energy built in. Clean, comfortable, and ready for the round or whatever comes after.",
    image: poloImg,
  },
];

const benefits = [
  {
    title: "Member-Only Products",
    copy: "Limited Core Crew gear and annual member pieces.",
  },
  {
    title: "Early Access Drops",
    copy: "First look at select HundredOut releases.",
  },
  {
    title: "Special Experiences",
    copy: "More ways to connect with the brand, the crew, and the moments around the game.",
  },
  {
    title: "More Over Time",
    copy: "Core Crew grows as HundredOut grows.",
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
                <div className="h-2 w-2 rounded-full bg-[#EE455F]"></div>
                HundredOut Club
              </div>
              <div className="mb-5 text-sm uppercase tracking-[0.32em] text-[#45B9ED]">
                Golf is better with the right crew
              </div>
              <h1 className="font-[var(--font-display)] text-[clamp(4.5rem,11vw,9rem)] font-black uppercase leading-[0.82] tracking-tight">
                Keep It
                <br />
                <span className="text-[#EE455F]">100</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl lg:text-2xl">
                Core Crew is the inner circle of HundredOut. Good people, good times, good energy, and the gear to rep it.
                Built for the crew that brings the vibe on the course and carries it everywhere else.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/download"
                  className="inline-flex justify-center bg-[#EE455F] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-all hover:scale-105 hover:bg-[#d63d54] active:scale-95"
                >
                  Join the Club
                </Link>
                <Link
                  to="/download"
                  className="inline-flex justify-center border-2 border-white/20 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  Become Core Crew
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 -top-10 h-56 w-56 rounded-full bg-[#EE455F]/20 blur-3xl"></div>
              <div className="relative overflow-hidden border-[10px] border-white bg-white shadow-[0_45px_120px_rgba(0,0,0,0.35)] md:border-[12px]">
                <img src={heroGearImg} alt="HundredOut Core Crew gear" className="aspect-[4/5] h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1b28] to-transparent p-6 text-white">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/55">Core Crew Kit</div>
                  <div className="mt-2 font-[var(--font-display)] text-3xl font-semibold uppercase leading-none tracking-tight lg:text-4xl">
                    Good people.
                    <br />
                    Full 100.
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-5 hidden w-32 border border-white/10 bg-[#07131d] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.25)] md:block lg:w-40">
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
                What Core Crew Means
              </div>
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5.4rem)] font-semibold uppercase leading-[0.92] tracking-tight text-[#0d1b28]">
                More Than
                <br />
                <span className="text-[#EE455F]">Member Gear</span>
              </h2>
            </div>
            <p className="max-w-3xl text-xl leading-relaxed text-[#0d1b28]/68">
              Core Crew is for the golfers who bring the energy. The ones who show up for the round, the laughs,
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

      <section className="relative overflow-hidden bg-[#0d1b28] py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute right-[12%] top-24 h-96 w-96 rounded-full bg-[#45B9ED] opacity-10 blur-[140px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-white/75">
                Core Crew Kit
              </div>
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5.4rem)] font-semibold uppercase leading-[0.92] tracking-tight">
                Your Core
                <br />
                <span className="text-[#45B9ED]">Crew Kit</span>
              </h2>
            </div>
            <p className="max-w-3xl text-xl leading-relaxed text-white/70">
              Member-only gear built for the course, the cart, the trip, and wherever the good times carry over.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {kitItems.map((item) => (
              <article key={item.name} className="group overflow-hidden border border-white/10 bg-white/5">
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute left-5 top-5 bg-[#EE455F] px-3 py-1 text-xs uppercase tracking-[0.24em] text-white">
                    Member Piece
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-[var(--font-display)] text-3xl font-semibold uppercase tracking-tight">{item.name}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/68">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.75fr_1fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-[#0d1b28] md:min-h-[560px]">
              <img src={lifestyleImg} alt="HundredOut lifestyle moment" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b28]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">These are the</div>
                <div className="mt-2 font-[var(--font-display)] text-5xl font-semibold uppercase leading-none tracking-tight">
                  100 moments.
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="min-h-[220px] overflow-hidden bg-[#f6f8fb]">
                <img src={cartMomentImg} alt="HundredOut cart moment" className="h-full w-full object-cover" />
              </div>
              <div className="min-h-[220px] overflow-hidden bg-[#f6f8fb]">
                <img src={headwearImg} alt="Light blue HundredOut hat" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="min-h-[300px] overflow-hidden bg-[#f6f8fb]">
                <img src={braggingImg} alt="HundredOut round story" className="h-full w-full object-cover" />
              </div>
              <div className="border border-[#0d1b28]/10 bg-[#0d1b28] p-8 text-white">
                <p className="text-xl leading-relaxed text-white/75">
                  The birdie you didn&apos;t see coming. The cart ride that turned into a story. The round where nobody
                  played great, but everyone had a blast. That&apos;s the HundredOut Club.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 max-w-4xl">
            <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]/65">
              Core Crew Access
            </div>
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5.4rem)] font-semibold uppercase leading-[0.92] tracking-tight text-[#0d1b28]">
              What Comes With
              <br />
              <span className="text-[#EE455F]">Core Crew</span>
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
              Limited member access
            </div>
            <h2 className="font-[var(--font-display)] text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-tight">
              Built for
              <br />
              the Core
              <br />
              <span className="text-[#EE455F]">Crew</span>
            </h2>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/72">
              Exclusive products first. More access over time. A premium way to rep the good people, good times,
              and full 100 way of playing.
            </p>
            <Link
              to="/download"
              className="mt-10 inline-flex bg-[#EE455F] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-all hover:scale-105 hover:bg-[#d63d54] active:scale-95"
            >
              Join the Club
            </Link>
          </div>

          <div className="border border-white/10 bg-white/5 p-8">
            <div className="mx-auto flex max-w-[320px] items-center justify-center">
              <img src={coreCrewBadgeImg} alt="Core Crew 2026 founding badge" className="h-full w-full object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
