import { FormEvent, useId, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "./ui/utils";

type EarlyAccessSignupProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  footnote?: string;
  theme?: "dark" | "light";
  className?: string;
};

type SignupStatus = "idle" | "submitting" | "success" | "error";

export function EarlyAccessSignup({
  eyebrow,
  title,
  description,
  ctaLabel = "Get Early Access",
  footnote = "No spam. Just early access, launch signals, and the first shot at what lands next.",
  theme = "dark",
  className,
}: EarlyAccessSignupProps) {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<SignupStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isDark = theme === "dark";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setErrorMessage(body.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setEmail("");
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden border px-6 py-10 shadow-[0_24px_60px_rgba(13,27,40,0.08)] md:px-8 md:py-12",
        isDark
          ? "border-white/10 bg-[#0d1b28] text-white"
          : "border-[#0d1b28]/10 bg-white text-[#0d1b28]",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:72px_72px]"
            : "bg-[linear-gradient(to_right,#0d1b2808_1px,transparent_1px),linear-gradient(to_bottom,#0d1b2808_1px,transparent_1px)] bg-[size:72px_72px]",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full blur-3xl",
          isDark ? "bg-[#EE455F]/20" : "bg-[#45B9ED]/18",
        )}
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl">
          <div
            className={cn(
              "mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em]",
              isDark ? "border border-white/10 bg-white/5 text-white/70" : "bg-[#0d1b28]/5 text-[#0d1b28]/60",
            )}
          >
            <div className={cn("h-2 w-2 rounded-full", isDark ? "bg-[#EE455F]" : "bg-[#45B9ED]")} />
            {eyebrow}
          </div>

          <h2 className="font-[var(--font-display)] text-[clamp(2.25rem,5vw,4.75rem)] font-semibold uppercase leading-[0.92] tracking-tight">
            {title}
          </h2>
          <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed", isDark ? "text-white/72" : "text-[#0d1b28]/68")}>
            {description}
          </p>
        </div>

        <div className={cn("border p-5 md:p-6", isDark ? "border-white/10 bg-white/5" : "border-[#0d1b28]/10 bg-[#f6f8fb]")}>
          {status === "success" ? (
            <div
              className={cn(
                "flex min-h-[214px] flex-col justify-between border px-5 py-6 md:px-6",
                isDark ? "border-white/10 bg-[#07131d]" : "border-[#0d1b28]/10 bg-white",
              )}
            >
              <div>
                <div
                  className={cn(
                    "mb-4 inline-flex items-center gap-2 rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.24em]",
                    isDark ? "bg-white/5 text-white/65" : "bg-[#0d1b28]/5 text-[#0d1b28]/58",
                  )}
                >
                  <div className={cn("h-2 w-2 rounded-full", isDark ? "bg-[#EE455F]" : "bg-[#45B9ED]")} />
                  You&apos;re In
                </div>

                <h3 className="font-[var(--font-display)] text-[clamp(1.9rem,6vw,2.4rem)] font-semibold uppercase leading-[0.94] tracking-tight">
                  Welcome To The First Wave.
                </h3>
                <p className={cn("mt-4 max-w-md text-sm leading-relaxed md:text-[15px]", isDark ? "text-white/62" : "text-[#0d1b28]/62")}>
                  Check your inbox for a confirmation email and click the link to lock in your spot. Early access, first looks, and the next HundredOut moves will follow.
                </p>
              </div>

              <p className={cn("mt-6 text-xs uppercase tracking-[0.2em]", isDark ? "text-white/38" : "text-[#0d1b28]/42")}>
                Watch your inbox.
              </p>
            </div>
          ) : (
            <>
              <form
                noValidate
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <label htmlFor={emailId} className={cn("block text-xs uppercase tracking-[0.24em]", isDark ? "text-white/45" : "text-[#0d1b28]/45")}>
                  Email Address
                </label>
                <Input
                  id={emailId}
                  name="EMAIL"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@clubhouse.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className={cn(
                    "h-12 rounded-none border text-base shadow-none",
                    isDark
                      ? "border-white/10 bg-[#07131d] text-white placeholder:text-white/35"
                      : "border-[#0d1b28]/12 bg-white text-[#0d1b28] placeholder:text-[#0d1b28]/35",
                  )}
                />

                <div aria-hidden="true" className="absolute left-[-5000px]">
                  <input
                    tabIndex={-1}
                    type="text"
                    name="website"
                    autoComplete="off"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  className={cn(
                    "h-12 w-full rounded-none text-sm uppercase tracking-[0.18em]",
                    isDark
                      ? "bg-[#EE455F] text-white hover:bg-[#d63d54]"
                      : "bg-[#0d1b28] text-white hover:bg-[#13283a]",
                  )}
                >
                  {status === "submitting" ? "Submitting..." : ctaLabel}
                </Button>
              </form>

              <p className={cn("mt-4 text-sm leading-relaxed", isDark ? "text-white/50" : "text-[#0d1b28]/52")}>
                {status === "error" ? errorMessage : footnote}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
