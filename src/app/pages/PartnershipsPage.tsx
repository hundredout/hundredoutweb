import { FormEvent, useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import circleMarkImg from "../../imports/HundredOut_circleMark_Final.png";

type InquiryType =
  | "Creator / Influencer"
  | "Brand Collaboration"
  | "Event Opportunity"
  | "Strategic Inquiry";

const inquiryTypes: InquiryType[] = [
  "Creator / Influencer",
  "Brand Collaboration",
  "Event Opportunity",
  "Strategic Inquiry",
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkoywrga";

const focusAreas = [
  {
    title: "Creators & Influencers",
    body: "Content, campaigns, social storytelling, appearances, and collaborations that feel authentic to the game.",
  },
  {
    title: "Brands & Product Collabs",
    body: "Emerging golf brands, co-branded ideas, limited drops, and product stories that bring fresh energy into the space.",
  },
  {
    title: "Events & Strategic Opportunities",
    body: "Tournaments, experiences, media plays, and bigger conversations around where HundredOut can go next.",
  },
];

export function PartnershipsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>("Brand Collaboration");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (botField) return;

    setIsSubmitting(true);
    setSubmitState("idle");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          inquiryType,
          message,
          _subject: `${inquiryType} Inquiry${company ? ` - ${company}` : ""}`,
          source: "HundredOut Partnerships Page",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setName("");
      setEmail("");
      setCompany("");
      setInquiryType("Brand Collaboration");
      setMessage("");
      setBotField("");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#0d1b28] py-32 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[8%] h-[420px] w-[420px] rounded-full bg-[#EE455F] opacity-10 blur-[140px]"></div>
          <div className="absolute bottom-0 right-[10%] h-[420px] w-[420px] rounded-full bg-[#45B9ED] opacity-10 blur-[140px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-5xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-wider">
                <div className="h-2 w-2 rounded-full bg-[#EE455F]"></div>
                Partnerships
              </div>
              <h1 className="font-[var(--font-display)] text-[clamp(3rem,9vw,7rem)] font-semibold uppercase leading-[0.9] tracking-tight">
                Build something
                <br />
                with
                <br />
                <span className="text-[#EE455F]">HundredOut.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/72 md:text-2xl">
                HundredOut is building a golf brand at the intersection of technology, entertainment, and
                lifestyle. We are actively looking to work with creators, golf personalities, emerging
                brands, events, and strategic partners who want to push the game in a more fun, social,
                and culturally relevant direction.
              </p>
            </div>

            <div className="grid gap-4 self-end">
              <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45">What We Want</div>
                <div className="mt-3 font-[var(--font-display)] text-3xl font-semibold uppercase tracking-tight">
                  Fresh ideas
                </div>
              </div>
              <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45">Who We Like</div>
                <div className="mt-3 font-[var(--font-display)] text-3xl font-semibold uppercase tracking-tight">
                  Creators and new brands
                </div>
              </div>
              <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45">Where It Can Go</div>
                <div className="mt-3 font-[var(--font-display)] text-3xl font-semibold uppercase tracking-tight">
                  Content, product, events
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
              Focus Areas
            </div>
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-semibold uppercase leading-[0.95] tracking-tight text-[#0d1b28]">
              Where we want
              <br />
              <span className="text-[#45B9ED]">to collaborate</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="border border-[#0d1b28]/10 bg-white p-8 shadow-[0_24px_60px_rgba(13,27,40,0.08)]"
              >
                <h3 className="font-[var(--font-display)] text-3xl font-semibold uppercase tracking-tight text-[#0d1b28]">
                  {area.title}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-[#0d1b28]/65">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d1b28] py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-[12%] h-72 w-72 -translate-y-1/2 rounded-full bg-[#EE455F] opacity-10 blur-[120px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-white/75">
                Strategic Opportunities
              </div>
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
                HundredOut is
                <br />
                <span className="text-[#EE455F]">seeking strategic partners.</span>
              </h2>
              <p className="mt-5 text-sm uppercase tracking-[0.24em] text-white/42">
                Partnerships. Investment. Brand expansion.
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/72">
                HundredOut is currently working within strategic relationships and looking to expand them
                as we grow across golf technology, entertainment, and lifestyle. If you see alignment in
                what we are building, we are open to the conversation.
              </p>
            </div>

            <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center py-10">
              <div className="absolute h-[420px] w-[420px] rounded-full border border-white/8"></div>
              <div className="absolute h-[300px] w-[300px] rounded-full border border-white/8"></div>
              <div className="absolute h-[200px] w-[200px] rounded-full border border-white/8"></div>

              <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full border border-white/12 bg-[#122232] text-center shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
                <div className="absolute inset-0 rounded-full bg-[#EE455F]/10 blur-2xl"></div>
                <img src={circleMarkImg} alt="HundredOut circle mark" className="relative h-20 w-20 object-contain" />
              </div>

              {[
                { label: "Creators", position: "left-[50%] top-0 -translate-x-1/2" },
                { label: "Emerging Brands", position: "left-0 top-1/2 -translate-y-1/2" },
                { label: "Events", position: "bottom-0 left-[20%]" },
                { label: "Strategic Partners", position: "bottom-0 right-[20%]" },
                { label: "Investment Interest", position: "right-0 top-1/2 -translate-y-1/2" },
              ].map((node) => (
                <div
                  key={node.label}
                  className={`absolute ${node.position} rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm`}
                >
                  {node.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6f8fb] py-24">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-[#EE455F]/8 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#45B9ED]/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-5 inline-block rounded-full bg-[#0d1b28]/5 px-4 py-1.5 text-xs uppercase tracking-wider text-[#0d1b28]">
                Reach Out
              </div>
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-semibold uppercase leading-[0.95] tracking-tight text-[#0d1b28]">
                Start the
                <br />
                <span className="text-[#EE455F]">conversation</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0d1b28]/68">
                If there is a fit, we want to hear about it. We are especially interested in creators,
                golf personalities, and new brands entering the space with something real to say.
              </p>
              <p className="mt-6 max-w-2xl text-sm uppercase tracking-[0.18em] text-[#0d1b28]/42">
                Send the details straight through here and we will route it to the right conversation.
              </p>
            </div>

            <div className="border border-[#0d1b28]/10 bg-white p-8 shadow-[0_24px_60px_rgba(13,27,40,0.08)] md:p-10">
              {submitState === "success" ? (
                <div className="relative overflow-hidden border border-[#0d1b28]/10 bg-[#0d1b28] p-8 text-white shadow-[0_24px_60px_rgba(13,27,40,0.12)] md:p-10">
                  <div className="absolute -right-10 -top-8 h-36 w-36 rounded-full bg-[#EE455F] opacity-20 blur-3xl"></div>
                  <div className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-[#45B9ED] opacity-15 blur-3xl"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M5 12.5L9.5 17L19 7.5" strokeLinecap="square" strokeLinejoin="miter" />
                      </svg>
                    </div>
                    <div className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">Message Sent</div>
                    <h3 className="font-[var(--font-display)] text-4xl font-semibold uppercase tracking-tight">
                      Conversation started.
                    </h3>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/72">
                      Your note is in. The HundredOut team will review it and route it through the right
                      conversation.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitState("idle")}
                      className="mt-8 inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/5"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45" htmlFor="partner-name">
                        Name
                      </label>
                      <Input
                        id="partner-name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your name"
                        className="h-12 rounded-none border-[#0d1b28]/12 bg-white shadow-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45" htmlFor="partner-email">
                        Email
                      </label>
                      <Input
                        id="partner-email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@brand.com"
                        className="h-12 rounded-none border-[#0d1b28]/12 bg-white shadow-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45" htmlFor="partner-company">
                        Company / Brand
                      </label>
                      <Input
                        id="partner-company"
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                        placeholder="Brand or company"
                        className="h-12 rounded-none border-[#0d1b28]/12 bg-white shadow-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45" htmlFor="partner-type">
                        Inquiry Type
                      </label>
                      <select
                        id="partner-type"
                        value={inquiryType}
                        onChange={(event) => setInquiryType(event.target.value as InquiryType)}
                        className="h-12 w-full rounded-none border border-[#0d1b28]/12 bg-white px-3 text-sm outline-none transition-[color,box-shadow] focus-visible:border-[#0d1b28] focus-visible:ring-[3px] focus-visible:ring-[#0d1b28]/10"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#0d1b28]/45" htmlFor="partner-message">
                      Message
                    </label>
                    <Textarea
                      id="partner-message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Tell us what you have in mind."
                      className="min-h-[180px] rounded-none border-[#0d1b28]/12 bg-white shadow-none"
                      required
                    />
                  </div>

                  <div aria-hidden="true" className="absolute left-[-5000px] top-auto h-px w-px overflow-hidden">
                    <label htmlFor="partner-website">Website</label>
                    <input
                      id="partner-website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={botField}
                      onChange={(event) => setBotField(event.target.value)}
                    />
                  </div>

                  {submitState === "error" ? (
                    <div className="border border-[#EE455F]/20 bg-[#EE455F]/6 p-4 text-sm leading-relaxed text-[#9f2035]">
                      Something went wrong sending the form. Please try again.
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center bg-[#0d1b28] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#13283a]"
                  >
                    {isSubmitting ? "Sending..." : "Start a Conversation"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
