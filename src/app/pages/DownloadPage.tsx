const appStoreUrl = "https://apps.apple.com/us/app/hundredout-golf-games-and-gps/id6478035673";
const playStoreUrl = "https://play.google.com/store/apps/details?hl=en_US&id=com.hundredout";

const platformCards = [
  {
    name: "iOS",
    badgeText: "Official App Store badge",
    title: "Download on the App Store",
    href: appStoreUrl,
    accent: "#EE455F",
    note: "iPhone, Apple Watch, and the full HundredOut experience.",
    short: "App Store",
  },
  {
    name: "Android",
    badgeText: "Official Google Play badge",
    title: "Get it on Google Play",
    href: playStoreUrl,
    accent: "#45B9ED",
    note: "Google Play install for the Android build.",
    short: "Google Play",
  },
];

export function DownloadPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#0d1b28] py-32 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[8%] h-[420px] w-[420px] rounded-full bg-[#EE455F] opacity-12 blur-[150px]"></div>
          <div className="absolute bottom-0 right-[10%] h-[420px] w-[420px] rounded-full bg-[#45B9ED] opacity-10 blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-wider">
              <div className="h-2 w-2 rounded-full bg-[#EE455F]"></div>
              Download HundredOut
            </div>
            <h1 className="font-[var(--font-display)] font-semibold text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight uppercase">
              Pick your
              <br />
              <span className="text-[#EE455F]">platform.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/72 md:text-2xl">
              Live scoring, side action, banter, crew leaderboards, and the kind of golf energy that
              does not end at 18. Download HundredOut on iOS or Android and take it to the course.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
              Choose Your Platform
            </div>
            <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-[#0d1b28]">
              Official store links.
              <br />
              <span className="text-[#45B9ED]">No extra noise.</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {platformCards.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden border border-[#0d1b28]/10 bg-white shadow-[0_30px_80px_rgba(13,27,40,0.08)] transition-transform hover:-translate-y-1"
              >
                <div className="p-8 md:p-10">
                  <div
                    className="mb-8 inline-flex items-center px-3 py-1 text-xs uppercase tracking-[0.24em] text-white"
                    style={{ backgroundColor: platform.accent }}
                  >
                    {platform.short}
                  </div>

                  <div className="border border-[#0d1b28]/10 bg-[#f6f8fb] p-6">
                    <div className="text-xs uppercase tracking-[0.28em] text-[#0d1b28]/45">{platform.name} Badge</div>
                    <div className="mt-5 inline-flex items-center rounded-xl bg-black px-5 py-3 text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg font-bold">
                        {platform.name === "iOS" ? "A" : "▶"}
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                          {platform.name === "iOS" ? "Download on the" : "Get it on"}
                        </div>
                        <div className="font-[var(--font-display)] font-semibold text-2xl uppercase tracking-tight">
                          {platform.short}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#0d1b28]/55">
                      Replace this with the official {platform.badgeText.toLowerCase()} asset when added to the repo.
                    </p>
                  </div>

                  <h3 className="mt-8 font-[var(--font-display)] font-semibold text-4xl uppercase tracking-tight text-[#0d1b28]">
                    {platform.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-[#0d1b28]/68">{platform.note}</p>

                  <div className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-[#0d1b28] group-hover:text-[#EE455F]">
                    Open Store
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M4 9H14M14 9L9 4M14 9L9 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
