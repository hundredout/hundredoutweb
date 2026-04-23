import gearImg from "../../imports/mainCover_WEB_v2.jpg";
import headwearImg from "../../imports/GEAR/100_headwear.jpg";
import poloImg from "../../imports/SCREENSHOTS/100_polo_LR.jpg";
import poloCollageHeroImg from "../../imports/GEAR/100_polo_collage_hero.png";
import poloProductConceptsImg from "../../imports/GEAR/PoloProductConcepts.png";
import circleMarkEssentialsImg from "../../imports/SCREENSHOTS/CircleMarkEssentials2_LR.jpg";
import lifestyleShotImg from "../../imports/GEAR/LifeStyleShot.png";
import heroTwoImg from "../../imports/GEAR/hero-2.png";
import keepIt100HoodieImg from "../../imports/GEAR/keepit100_hoodie.png";

const dropProducts = [
  {
    name: "100 Trucker",
    type: "Headwear",
    note: "Structured front, clean 100 mark, everyday course-to-anywhere fit.",
    accent: "#EE455F",
    image: headwearImg,
  },
  {
    name: "HundredOut Polo",
    type: "Performance",
    note: "Built for rounds, range sessions, and everything after the card is signed.",
    accent: "#45B9ED",
    image: poloProductConceptsImg,
  },
  {
    name: "Keep It 100 Hoodie",
    type: "Layering",
    note: "A lightweight performance layer built for cool starts, range sessions, and easy movement throughout the round.",
    accent: "#2D5016",
    image: keepIt100HoodieImg,
  },
  {
    name: "Circle Mark Essentials",
    type: "Accessories",
    note: "Small branded pieces that make the drop feel collectible, not just merch.",
    accent: "#0d1b28",
    image: circleMarkEssentialsImg,
  },
];

const dropPrinciples = [
  "The first pieces are taking shape around the 100 mark, with a cleaner, bolder look that feels instantly HundredOut.",
  "This line is being built to carry the brand off the course too, with gear that can move from the first tee to everything after.",
  "What is coming is meant to feel limited, ownable, and worth the wait, not like just another pile of golf merch.",
];

export function GearPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white pt-28 pb-20 text-[#0d1b28]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d1b2807_1px,transparent_1px),linear-gradient(to_bottom,#0d1b2807_1px,transparent_1px)] bg-[size:56px_56px]"></div>

        <div className="relative mx-auto max-w-[1650px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_0.9fr]">
            <div className="grid min-h-[720px] grid-cols-[0.72fr_1fr_0.82fr] gap-4">
              <div className="grid gap-4 pt-10">
                <div className="relative min-h-[220px] overflow-hidden border-[10px] border-white bg-[#0d1b28]/5 shadow-[0_30px_80px_rgba(13,27,40,0.12)]">
                  <img src={headwearImg} alt="100 headwear preview" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b28]/55 to-transparent"></div>
                  <div className="relative flex h-full items-end p-6">
                    <div className="text-white">
                      <div className="mb-2 text-xs uppercase tracking-[0.3em] text-white/60">Drop Tease</div>
                      <div className="font-[var(--font-display)] font-semibold text-4xl uppercase tracking-tight">
                        100
                        <br />
                        Headwear
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[280px] overflow-hidden border-[10px] border-white shadow-[0_30px_80px_rgba(13,27,40,0.12)]">
                  <img src={poloCollageHeroImg} alt="HundredOut polo lifestyle preview" className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="relative overflow-hidden border-[12px] border-white shadow-[0_30px_80px_rgba(13,27,40,0.15)]">
                <img src={gearImg} alt="HundredOut apparel preview" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1b28] to-transparent p-8 text-white">
                  <div className="text-sm uppercase tracking-[0.28em] text-white/55">Concept Only</div>
                  <div className="mt-2 font-[var(--font-display)] font-semibold text-5xl uppercase tracking-tight">
                    In Development
                  </div>
                </div>
              </div>

              <div className="grid gap-4 pt-14">
                <div className="relative min-h-[360px] overflow-hidden border-[10px] border-white bg-[#f3f5f8] shadow-[0_30px_80px_rgba(13,27,40,0.12)]">
                  <img src={poloProductConceptsImg} alt="HundredOut polo concept preview" className="h-full w-full object-cover object-[35%_center]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b28]/12 to-transparent"></div>
                  <div className="relative flex h-full flex-col justify-between p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/0">.</div>
                    <div className="max-w-[15rem] border border-white/15 bg-white/90 p-4 backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45">Pattern Preview</div>
                      <div className="mt-2 font-[var(--font-display)] font-semibold text-3xl uppercase tracking-tight text-[#0d1b28]">
                        100 Polo
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#0d1b28]/55">
                        Branded pattern work gives the line a more ownable feel than generic performance basics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[140px] overflow-hidden border-[10px] border-white bg-[#0d1b28] text-white shadow-[0_30px_80px_rgba(13,27,40,0.12)]">
                  <div className="absolute -right-10 -top-8 h-36 w-36 rounded-full bg-[#EE455F] opacity-20 blur-3xl"></div>
                  <div className="relative p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/45">In Development</div>
                    <div className="mt-3 font-[var(--font-display)] font-semibold text-3xl uppercase tracking-tight">
                      Built for
                      <br />
                      the moments
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-[#0d1b28]/10 pt-2 lg:pt-0">
              <div>
                <div className="mb-8 text-sm uppercase tracking-[0.28em] text-[#0d1b28]/50">
                  HundredOut // Gear In Development
                </div>
                <h1 className="font-[var(--font-display)] font-semibold text-[clamp(3.4rem,9vw,7rem)] leading-[0.88] tracking-tight uppercase text-[#EE455F]">
                  Keep It
                  <br />
                  100
                </h1>

                <div className="mt-10 border-t border-[#0d1b28]/10 pt-10">
                  <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] uppercase tracking-tight">
                    100 gear is coming
                  </h2>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-[#0d1b28]/65">
                    This is the early signal. The gear side of HundredOut is being built around the 100 mark,
                    tighter drops, and pieces that feel like part of the brand world, not just another rack of
                    golf merch.
                  </p>
                </div>

                <div className="mt-10 text-base uppercase tracking-wide text-[#0d1b28]/75">
                  Hats • Polo • Performance Hoodie
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-6 w-6 rounded-full bg-[#EE455F]"></div>
                  <div className="h-6 w-6 rounded-full bg-[#2b2f36]"></div>
                  <div className="h-6 w-6 rounded-full border border-[#0d1b28]/15 bg-white"></div>
                </div>
              </div>

              <div className="mt-12 border-t border-[#0d1b28]/10 pt-8">
                <p className="max-w-sm text-lg leading-relaxed text-[#0d1b28]/55">
                  Concept only. Built for the moments. In development as the first HundredOut gear direction takes shape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d1b28] py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-[#EE455F] opacity-10 blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#45B9ED] opacity-10 blur-[140px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-white/75">
                The Gear Direction
              </div>
              <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
                More heat.
                <br />
                <span className="text-[#EE455F]">Less catalog.</span>
              </h2>
            </div>

            <div className="grid gap-5">
              {dropPrinciples.map((principle) => (
                <div key={principle} className="border border-white/10 bg-white/5 p-6">
                  <p className="text-lg leading-relaxed text-white/72">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
              Potential Drop Board
            </div>
            <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-[#0d1b28]">
              Slots for
              <br />
              <span className="text-[#45B9ED]">future product</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#0d1b28]/65">
              These are placeholder slots for where future pieces can land. The point is to make the page
              feel active and directional now, then let real product, photography, and final release info drop in
              cleanly as the line comes together.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {dropProducts.map((product, index) => (
              <article
                key={product.name}
                className="group overflow-hidden border border-[#0d1b28]/10 bg-white shadow-[0_24px_60px_rgba(13,27,40,0.08)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f3f5f8]">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />

                  <div className="absolute left-5 top-5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white" style={{ backgroundColor: product.accent }}>
                    Concept Only
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 border border-[#0d1b28]/10 bg-white/90 p-4 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45">{product.type}</div>
                    <div className="mt-2 font-[var(--font-display)] font-semibold text-2xl uppercase tracking-tight text-[#0d1b28]">
                      {product.name}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-base leading-relaxed text-[#0d1b28]/65">{product.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6f8fb] py-24">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-[#EE455F]/8 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#45B9ED]/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="border border-[#0d1b28]/10 bg-white p-8 shadow-[0_24px_60px_rgba(13,27,40,0.08)] md:p-10">
              <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#0d1b28]/45">What Is Coming</div>
              <h2 className="font-[var(--font-display)] font-semibold text-4xl uppercase tracking-tight text-[#0d1b28]">
                Small, sharp, and
                <br />
                worth waiting for
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#0d1b28]/68">
                The first HundredOut pieces are being shaped to feel tight, branded, and instantly recognizable.
                From the 100 trucker to polos, hoodies, and smaller essentials, the line is aiming for a cleaner,
                more collectible feel that builds real anticipation around every piece.
              </p>
            </div>

            <div className="border border-[#0d1b28]/10 bg-[#0d1b28] p-8 text-white shadow-[0_24px_60px_rgba(13,27,40,0.08)] md:p-10">
              <div className="mb-4 text-xs uppercase tracking-[0.28em] text-white/45">The Feel</div>
              <div className="grid gap-4">
                {[
                  "Clean marks, confident color, and pieces that feel easy to wear but hard to ignore.",
                  "A mix of on-course function and off-course identity, built to carry the brand further than the round.",
                  "Limited energy, stronger storytelling, and gear that feels like part of the HundredOut world from day one.",
                ].map((item) => (
                  <div key={item} className="border border-white/10 bg-white/5 p-4 text-base leading-relaxed text-white/75">
                    {item}
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
