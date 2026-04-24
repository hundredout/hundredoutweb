import { FormEvent, useId, useRef, useState } from "react";
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

const MAILCHIMP_ACTION = import.meta.env.VITE_MAILCHIMP_FORM_ACTION?.trim() ?? "";

function getMailchimpHoneypotName(action: string) {
  if (!action) return "";

  try {
    const url = new URL(action);
    const u = url.searchParams.get("u");
    const id = url.searchParams.get("id");

    if (!u || !id) return "";
    return `b_${u}_${id}`;
  } catch {
    return "";
  }
}

const honeypotName = getMailchimpHoneypotName(MAILCHIMP_ACTION);

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
  const iframeId = useId();
  const hasSubmittedRef = useRef(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SignupStatus>("idle");

  const isDark = theme === "dark";
  const isConfigured = Boolean(MAILCHIMP_ACTION);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!isConfigured) {
      event.preventDefault();
      setStatus("error");
      return;
    }

    hasSubmittedRef.current = true;
    setStatus("submitting");
  };

  const handleIframeLoad = () => {
    if (!hasSubmittedRef.current) return;

    hasSubmittedRef.current = false;
    setEmail("");
    setStatus("success");
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

      <iframe
        title="Mailchimp signup"
        name={iframeId}
        onLoad={handleIframeLoad}
        className="hidden"
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
          <form
            action={MAILCHIMP_ACTION || undefined}
            method="post"
            target={iframeId}
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

            {honeypotName ? (
              <div aria-hidden="true" className="absolute left-[-5000px]">
                <input tabIndex={-1} type="text" name={honeypotName} defaultValue="" />
              </div>
            ) : null}

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
            {status === "success"
              ? "You’re on the list. Watch your inbox for early-access updates."
              : status === "error"
                ? "Mailchimp is not configured yet. Add `VITE_MAILCHIMP_FORM_ACTION` to turn this form on."
                : footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
