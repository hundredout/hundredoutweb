import coreCrewBadgeImg from "../../imports/CC_2026_Badge@4x.png";
import appPageBgImg from "../../imports/appPageBG.jpg";
import languagePreferenceImg from "../../imports/SCREENSHOTS/LanguagePreference_screenshot.png";
import gpsImg from "../../imports/SCREENSHOTS/GPS_FMB_screenshot.png";
import mapViewImg from "../../imports/SCREENSHOTS/mapviewScreenshot_LR.jpg";
import scorecardImg from "../../imports/SCREENSHOTS/Scorecard_screenshot.png";
import dotsLeaderboardImg from "../../imports/SCREENSHOTS/dot_leaderboard_screenshot.png";
import sideJuiceImg from "../../imports/SCREENSHOTS/sideJuice_screenshot_LR.jpg";
import challengesImg from "../../imports/SCREENSHOTS/challengs_screenshot_LR.jpg";
import crewsImg from "../../imports/SCREENSHOTS/Crews_screenshot.png";
import hapsImg from "../../imports/SCREENSHOTS/HAPS_screenshot.PNG";
import hunnidsImg from "../../imports/SCREENSHOTS/HUNNIDS_screenshot.png";
import trophyRoomImg from "../../imports/SCREENSHOTS/trophyRoom_screenshot_LR.jpg";

const appStoreUrl = "https://apps.apple.com/us/app/hundredout-golf-games-and-gps/id6478035673";
const playStoreUrl = "https://play.google.com/store/apps/details?hl=en_US&id=com.hundredout";

const features = [
  {
    label: "Set the Tone",
    title: "Family-Friendly or Full Send",
    copy: "First thing you do in HundredOut is choose your language preference. Keep it clean or let it rip. Your vibe, your call, your style.",
    screen: "Put onboarding language preference screen here. Show two tone options with clean UI and personality in the microcopy.",
    images: [languagePreferenceImg],
    accent: "#EE455F",
  },
  {
    label: "Watch the round move.",
    title: "Live Leaderboards",
    copy: "Follow live leaderboards as the round changes hole by hole. Track your group, share the board, and watch your buddies climb, collapse, or start chirping from three holes away. Scorekeeping is table stakes. The live board is where the pressure shows up.",
    detail: "Group scorecards, Dots standings, side action, and crew status all stay visible as the round unfolds.",
    screen: "Put live leaderboard and group scorecard screens here.",
    images: [scorecardImg, dotsLeaderboardImg],
    accent: "#2D5016",
  },
  {
    label: "Always more on the line.",
    title: "Side Action & Challenges",
    copy: "Side Juice lets you create live side bets between any two players. Challenges let the whole crew get weird with it. Next three-putt buys drinks. Next double does 20 push-ups. First bad hole gets hit with the punishment. Make it funny, competitive, or straight-up ruthless.",
    detail: "Stroke handicap, auto-press, custom terms, active tracking, and challenges that can stack all round.",
    screen: "Put Side Juice and challenge screens here.",
    images: [sideJuiceImg, challengesImg],
    accent: "#45B9ED",
  },
  {
    label: "Your golf crew, in one place.",
    title: "Crews & Haps Feed",
    copy: "Build your crew, share rounds to the feed, react to shots, and see who's out playing right now. The Haps feed is where your golf life lives: fired-away posts, round recaps, hole-in-ones, the whole thing.",
    screen: "Put Haps feed screen here with social posts, reactions, and active crew energy.",
    images: [crewsImg, hapsImg],
    accent: "#2D5016",
  },
  {
    label: "Every round pays off.",
    title: "Trophies & HUNNIDs",
    copy: "Earn HUNNIDs for every score you post: birdies, eagles, full 18-hole rounds. Unlock trophies for chaos moments, hidden achievements, and crew milestones. The more you play, the more you rack up.",
    detail: "Fire Away +25 · Par +5 · Birdie +50 · Eagle +75 · Hole in One +100 · Albatross +100",
    screen: "Put rewards / HUNNIDs / trophies screen here with balance, trophy art, and unlock state.",
    images: [hunnidsImg, trophyRoomImg],
    accent: "#EE455F",
  },
  {
    label: "Know the shot.",
    title: "GPS Yardage",
    copy: "Real-time GPS distances to the front, center, and back of every green. No rangefinder required. Just open the app and play.",
    screen: "Put GPS yardage / FMB-style screen here with front, center, and back distances.",
    images: [gpsImg, mapViewImg],
    accent: "#45B9ED",
  },
];

const clubTiers = [
  {
    name: "Crew",
    price: "$49.99/year",
    tagline: "Gear. Perks. The HundredOut Club.",
    line: "Hat, ball marker, ad-free, and early access. All in.",
    items: [
      "HundredOut original logo hat",
      "HundredOut metal ball marker",
      "Ad-free experience",
      "Member pricing on every drop",
      "Early access before anything goes public",
      "Redeemable HUNNIDs earned",
    ],
    accent: "#45B9ED",
  },
  {
    name: "Core Crew",
    price: "$99.99/year",
    tagline: "The exclusive tier. The annual hat. The badge.",
    line: "First dibs, VIP access, and 100 HUNNIDs on join.",
    items: [
      "Exclusive 2026 Core Crew hat — annual edition",
      "Core Crew metal ball marker",
      "Core Crew in-app badge",
      "Ad-free experience",
      "First dibs on every drop we make",
      "VIP access — events + member pricing",
      "+100 HUNNIDs on join — Core Crew exclusive",
    ],
    accent: "#EE455F",
  },
];

function PhonePlaceholder({
  text,
  accent,
  image,
}: {
  text: string;
  accent: string;
  image?: string;
}) {
  return (
    <div className="relative mx-auto w-[min(100%,280px)] rounded-[2.5rem] bg-[#0d1b28] p-2.5 shadow-[0_30px_80px_rgba(13,27,40,0.22)] sm:rounded-[2.8rem] sm:p-3">
      <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#0d1b28]"></div>
      <div className="overflow-hidden rounded-[2rem] bg-white sm:rounded-[2.2rem]">
        {image ? (
          <img src={image} alt={text} className="aspect-[280/570] w-full object-cover object-top" />
        ) : (
          <div className="p-6">
            <div
              className="mb-5 inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em] text-white"
              style={{ backgroundColor: accent }}
            >
              Screenshot Needed
            </div>
            <div className="flex min-h-[470px] items-center justify-center border border-dashed border-[#0d1b28]/20 bg-[#f6f8fb] p-6 text-center">
              <p className="text-base leading-relaxed text-[#0d1b28]/60">{text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FeatureScreens({
  images,
  text,
  accent,
}: {
  images?: string[];
  text: string;
  accent: string;
}) {
  if (images && images.length > 1) {
    return (
      <div className="mx-auto grid max-w-[620px] gap-6 sm:grid-cols-2">
        {images.map((image, index) => (
          <PhonePlaceholder key={image} image={image} text={`${text} ${index + 1}`} accent={accent} />
        ))}
      </div>
    );
  }

  return <PhonePlaceholder image={images?.[0]} text={text} accent={accent} />;
}

export function AppPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#0d1b28] py-24 text-white lg:min-h-[860px] lg:py-32">
        <div className="absolute inset-0">
          <img src={appPageBgImg} alt="" className="h-full w-full object-cover opacity-75" />
          <div className="absolute inset-0 bg-[#0d1b28]/38"></div>
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#07131d] via-[#07131d]/72 to-[#07131d]/12"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#07131d] to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-5xl">
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-wider">
                <div className="h-2 w-2 rounded-full bg-[#EE455F]"></div>
                The App
              </div>
              <h1 className="max-w-[960px] font-[var(--font-display)] font-semibold text-[clamp(3rem,7.4vw,6.15rem)] leading-[0.9] tracking-tight uppercase">
                This app has
                <br />
                <span className="whitespace-nowrap">a personality.</span>
                <br />
                <span className="text-[#EE455F]">So does your game.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/72 md:text-2xl">
                HundredOut is golf with a pulse: scorekeeping, side action, crew energy, rewards,
                and just enough attitude to make every round feel alive.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/58">
                Built for the way people actually play: competitive, social, a little chaotic, and
                way more fun than a plain scorecard.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-[#EE455F] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#d63d54]"
                >
                  Download on the App Store
                </a>
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/5"
                >
                  Get it on Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-16 max-w-3xl">
            <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
              Everything In One Round
            </div>
            <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-[#0d1b28]">
              Personality. Pressure.
              <br />
              <span className="text-[#45B9ED]">Crew energy.</span>
            </h2>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <section
                key={feature.title}
                className="grid items-center gap-12 border-b border-[#0d1b28]/10 pb-16 last:border-b-0 last:pb-0 lg:grid-cols-[1fr_1fr]"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-white"
                    style={{ backgroundColor: feature.accent }}
                  >
                    {feature.label}
                  </div>
                  <h3 className="font-[var(--font-display)] font-semibold text-4xl uppercase tracking-tight text-[#0d1b28] sm:text-5xl">
                    {feature.title}
                  </h3>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0d1b28]/68">{feature.copy}</p>
                  {"detail" in feature && feature.detail ? (
                    <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.18em] text-[#0d1b28]/45">
                      {feature.detail}
                    </p>
                  ) : null}
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <FeatureScreens images={feature.images} text={feature.screen} accent={feature.accent} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d1b28] py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-[10%] h-80 w-80 rounded-full bg-[#EE455F] opacity-10 blur-[120px]"></div>
          <div className="absolute bottom-0 left-[8%] h-80 w-80 rounded-full bg-[#45B9ED] opacity-10 blur-[120px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-16 max-w-4xl">
            <div className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-white/75">
              Join the HundredOut Club
            </div>
            <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
              Gear. Perks.
              <br />
              <span className="text-[#EE455F]">Identity.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
              Two tiers. Both annual. Both worth it. The Club is optional, but it is where the gear,
              early access, ad-free experience, and status start to stack up.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-8 md:grid-cols-2">
              {clubTiers.map((tier) => (
                <article key={tier.name} className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                  <div className="mb-3 text-xs uppercase tracking-[0.24em]" style={{ color: tier.accent }}>
                    {tier.price}
                  </div>
                  <h3 className="font-[var(--font-display)] font-semibold text-3xl uppercase tracking-tight sm:text-4xl">{tier.name}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/72">{tier.tagline}</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/45">{tier.line}</p>

                  <div className="mt-8 space-y-3">
                    {tier.items.map((item) => (
                      <div key={item} className="border border-white/10 bg-white/5 p-4 text-base leading-relaxed text-white/75">
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-4 text-xs uppercase tracking-[0.28em] text-white/45">Core Crew Badge</div>
              <img
                src={coreCrewBadgeImg}
                alt="Core Crew badge"
                className="mx-auto h-44 w-44 object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:h-56 sm:w-56"
              />
              <p className="mt-8 text-lg leading-relaxed text-white/72">
                The Core Crew badge is a real identity marker inside the app. It shows on your Home
                screen and profile, and it is visible to your crew. 2026 is year one.
              </p>
              <div className="mt-8 flex min-h-[220px] items-center justify-center border border-dashed border-white/15 bg-[#122232] p-6 text-center">
                <p className="max-w-[18rem] text-base leading-relaxed text-white/55">
                  Put SupporterScreen or ClubInfoSheet screenshot here showing the in-app tier comparison cards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 text-center">
          <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
            Download HundredOut
          </div>
          <h2 className="font-[var(--font-display)] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-[#0d1b28]">
            It's free
            <br />
            <span className="text-[#EE455F]">to start.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#0d1b28]/68">
            Scoring, GPS, and crew features are free. Club membership is optional, but the hat's worth it.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#EE455F] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#d63d54]"
            >
              Download on the App Store
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-[#0d1b28]/15 px-8 py-4 text-sm uppercase tracking-[0.22em] text-[#0d1b28] transition-colors hover:bg-[#0d1b28]/5"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
