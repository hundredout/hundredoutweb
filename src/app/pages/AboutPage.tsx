import kerseyHeadShot from "../../imports/KerseyHeadShot.jpg";
import trippHeadShot from "../../imports/TrippHeadShot.webp";
import andrewMikowskiHeadShot from "../../imports/ADVISORYBOARD/AndrewMikowski.jpeg";
import mikeFordHeadShot from "../../imports/ADVISORYBOARD/MikeFord.png";
import tomPettusHeadShot from "../../imports/ADVISORYBOARD/TomPetus.jpg";

const founders = [
  {
    name: "David Kersey",
    role: "Founder & CEO",
    image: kerseyHeadShot,
    bio: [
      "Over the last two decades, David has carved out a distinguished career in digital art and animation, contributing his talents to iconic studios such as The Walt Disney Company, Sony Pictures Imageworks, and DreamWorks.",
      'His portfolio boasts involvement in blockbuster films like "Spider-Man: Across the Spider-Verse," "Frozen," "Tangled," "Wreck-it Ralph," and "The Polar Express." Notably, during his tenure at Disney Feature Animation, David was part of the teams behind "Frozen" and the animated short "Feast," both of which earned Academy Awards.',
      "Aside from his professional endeavors, David has harbored a lifelong passion for golf, cherishing the dream of one day swapping the confines of office life for the boundless opportunities of entrepreneurship under the open sky. With HundredOut, that dream has taken flight, marking the beginning of a new chapter. David is channeling his entire reservoir of passion and determination into HundredOut, aiming to achieve a level of success comparable to that of his cinematic achievements.",
    ],
  },
  {
    name: "Tripp Fussell",
    role: "CoFounder",
    image: trippHeadShot,
    bio: [
      "Tripp's professional journey is a testament to his unwavering dedication to hard work. With a career spanning over 20 years, he has risen to prominence as a partner at the prestigious Mayer Brown law firm where he navigates high-profile patent litigations and a spectrum of corporate and transactional issues. Tripp's experience is built upon a solid academic foundation, which includes advanced degrees in law and engineering.",
      "Tripp's commitment to the legal field is matched by his drive to foster its growth and diversification. He is a staunch advocate for a collaborative and innovative work environment, striving for nothing short of excellence.",
      "Beyond the courtroom, Tripp's heart beats for the golf course. In a bold move to marry his professional expertise with his golfing passion, Tripp co-created HundredOut alongside his partner, and close friend, David. This innovative venture is a confluence of community, creativity, and the timeless allure of golf. Tripp's aspiration for HundredOut is to inject a novel dynamism into the sport, drawing from his diverse experiences and shared pursuit of excellence with David.",
    ],
  },
];

const advisors = [
  {
    name: "Mike Ford",
    role: "CTO Sony Pictures Imageworks",
    image: mikeFordHeadShot,
    bio: "Michael Ford is Chief Technology Officer at Sony Pictures Imageworks, where he leads innovation across the studio. With deep experience spanning visual effects, software development, systems engineering, and animated feature production, he brings a rare mix of technical leadership and creative problem-solving to the advisory board.",
  },
  {
    name: "Tom Pettus",
    role: "Global Executive Creative Director at Amazon",
    image: tomPettusHeadShot,
    bio: "Tom Pettus is a global creative leader with deep experience building large-scale brand campaigns across retail, Prime, and cross-channel marketing at Amazon. He brings a sharp mix of storytelling, brand leadership, and high-level creative execution shaped by years of leading teams, partners, and globally visible work.",
  },
  {
    name: "Andrew Mikowski",
    role: "Brand Strategist, Grooveit",
    image: andrewMikowskiHeadShot,
    bio: "Andrew brings consumer brand and golf industry experience shaped across the active outdoor space. From co-founding Moonshine Golf to helping shape brand strategy at Grooveit, he adds a strong point of view on positioning, storytelling, retail growth, and building golf brands with broader cultural pull.",
  },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/hundredout" },
  { label: "YouTube", href: "https://www.youtube.com/@hundredout" },
  { label: "TikTok", href: "https://www.tiktok.com/@hundredout" },
  { label: "Facebook", href: "https://www.facebook.com/hundredout" },
  { label: "X", href: "https://twitter.com/hundredout" },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#0d1b28] pt-32 pb-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-[#EE455F] opacity-10 blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#45B9ED] opacity-10 blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-wider">
              <div className="h-2 w-2 rounded-full bg-[#EE455F]"></div>
              The Team Behind HundredOut
            </div>
            <h1 className="mb-8 font-[var(--font-display)] font-semibold text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight uppercase">
              Building
              <br />
              <span className="text-[#EE455F]">More Than</span>
              <br />
              A Golf App
            </h1>
            <p className="max-w-3xl text-xl text-white/70 md:text-2xl">
              HundredOut is building a golf brand around competition, personality, social energy, and
              the moments that make people want to run it back. The goal is to create a world where the
              round feels more alive on the course and more memorable after it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-20 grid gap-10 border border-[#0d1b28]/10 bg-[#f6f8fb] p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
            <div>
              <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
                About HundredOut
              </div>
              <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-[#0d1b28]">
                A Tech Lifestyle
                <br />
                <span className="text-[#EE455F]">Brand In Motion</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0d1b28]/70">
                HundredOut is building a golf brand at the intersection of technology, lifestyle,
                entertainment, and social competition. The company is centered on its owned HundredOut
                identity and 100-circle mark, and is focused on making golf feel more alive, more
                connected, and more memorable for the way people actually play now.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#0d1b28]/70">
                The bigger idea is not just utility on the course. It is about tapping into where golf is
                headed: more expressive, more social, more entertainment-friendly, and more driven by
                rivalry, personality, group dynamics, and stories that carry well past the round.
              </p>
            </div>

            <div className="grid gap-4 content-center">
              {[
                "Technology: live rounds, side action, rewards, and crew competition.",
                "Lifestyle: apparel, identity, and a brand world that extends beyond the scorecard.",
                "Entertainment: a more fun, social, and culturally relevant version of golf.",
                "Community: building around the moments, banter, pressure, and memories people come back for.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border border-[#0d1b28]/10 bg-white p-5 shadow-[0_16px_40px_rgba(13,27,40,0.05)]"
                >
                  <div className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-[#EE455F]"></div>
                  <p className="text-base leading-relaxed text-[#0d1b28]/70">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14 max-w-3xl">
            <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
              The Lead off Group
            </div>
            <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-[#0d1b28]">
              Founders with
              <br />
              <span className="text-[#EE455F]">Real Range</span>
            </h2>
          </div>

          <div className="space-y-10">
            {founders.map((founder, index) => (
              <article
                key={founder.name}
                className="grid overflow-hidden border border-[#0d1b28]/10 bg-white shadow-[0_30px_80px_rgba(13,27,40,0.08)] lg:grid-cols-[1.1fr_1.4fr]"
              >
                <div className="relative min-h-[320px] bg-[#0d1b28]">
                  <img src={founder.image} alt={founder.name} className="h-full w-full object-cover" />

                  <div className="absolute left-6 top-6 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white backdrop-blur-sm">
                    {index === 0 ? "Founder Spotlight" : "Co-Founder"}
                  </div>
                </div>

                <div className="p-8 md:p-10 lg:p-12">
                  <div className="mb-6 border-b border-[#0d1b28]/10 pb-6">
                    <div className="mb-2 text-sm uppercase tracking-[0.25em] text-[#0d1b28]/45">{founder.role}</div>
                    <h3 className="font-[var(--font-display)] font-semibold text-4xl uppercase tracking-tight text-[#0d1b28]">
                      {founder.name}
                    </h3>
                  </div>

                  <div className="space-y-5 text-lg leading-relaxed text-[#0d1b28]/70">
                    {founder.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6f8fb] py-24">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#EE455F]/8 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#45B9ED]/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
              Advisory Board
            </div>
            <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-[#0d1b28]">
              Built with
              <br />
              <span className="text-[#45B9ED]">Heavy Hitters</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#0d1b28]/60">
              The live team page highlights a small advisory board with experience across studio
              technology, global creative leadership, and scaled digital business growth.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {advisors.map((advisor) => (
              <article
                key={advisor.name}
                className="overflow-hidden border border-[#0d1b28]/10 bg-white shadow-[0_24px_60px_rgba(13,27,40,0.08)]"
              >
                <div className="aspect-[4/3] bg-[#0d1b28]">
                  <img src={advisor.image} alt={advisor.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="font-[var(--font-display)] font-semibold text-3xl uppercase tracking-tight text-[#0d1b28]">
                    {advisor.name}
                  </h3>
                  <div className="mt-3 text-sm uppercase tracking-[0.22em] text-[#EE455F]">{advisor.role}</div>
                  <p className="mt-6 text-base leading-relaxed text-[#0d1b28]/65">{advisor.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <div className="relative overflow-hidden bg-[#0d1b28] text-white">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6674a90f44f657438777f15a/5d29bc6b-bdc5-4fd9-a36a-c69e4dff9abd/IMG_2722.jpg"
              alt="HundredOut golf moment"
              className="absolute inset-0 h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b28] via-[#0d1b28]/75 to-[#0d1b28]/30"></div>
            <div className="relative flex min-h-[460px] flex-col justify-end p-8 md:p-12">
              <div className="mb-4 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-wider text-white/80">
                More Than Golf
              </div>
              <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tight uppercase">
                It's About
                <br />
                <span className="text-[#EE455F]">The Moments</span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-between border border-[#0d1b28]/10 bg-[#f6f8fb] p-8 md:p-10">
            <div>
              <div className="mb-3 text-sm uppercase tracking-[0.22em] text-[#0d1b28]/45">Contact</div>
              <a
                href="mailto:info@hundredout.com"
                className="font-[var(--font-display)] font-semibold text-3xl uppercase tracking-tight text-[#0d1b28] hover:text-[#EE455F] transition-colors"
              >
                info@hundredout.com
              </a>
              <p className="mt-6 text-lg leading-relaxed text-[#0d1b28]/65">
                The original team page closes on the broader idea behind the brand: HundredOut is not
                just about scorecards or features. It's about the pressure, laughs, rivalries, and stories
                that keep carrying after 18.
              </p>
            </div>

            <div className="mt-10">
              <div className="mb-4 text-sm uppercase tracking-[0.22em] text-[#0d1b28]/45">Social</div>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-[#0d1b28]/10 bg-white px-4 py-2 text-sm uppercase tracking-wide text-[#0d1b28] transition-colors hover:border-[#EE455F] hover:text-[#EE455F]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
