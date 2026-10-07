import { createHash } from "node:crypto";
import { checkBotId } from "botid/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, { status });
}

export async function POST(request: Request) {
  const verification = await checkBotId({
    advancedOptions: { headers: Object.fromEntries(request.headers) },
  });
  if (verification.isBot) {
    return json({ error: "Access denied" }, 403);
  }

  let payload: { email?: unknown; website?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend it worked.
  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    console.warn("subscribe: honeypot tripped");
    return json({ ok: true });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  if (!apiKey || !audienceId || !serverPrefix) {
    console.error("Mailchimp environment variables are not configured");
    return json({ error: "Signup is temporarily unavailable." }, 500);
  }

  // PUT is idempotent per address. "pending" triggers Mailchimp's double opt-in
  // confirmation email, and status_if_new leaves existing members untouched.
  const subscriberHash = createHash("md5").update(email).digest("hex");
  const response = await fetch(
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, status_if_new: "pending" }),
    },
  );

  if (!response.ok) {
    const detail = await response.json().catch(() => ({}));
    console.error("Mailchimp error", response.status, detail);
    // Mailchimp rejects invalid or banned addresses with a 400.
    if (response.status === 400) {
      return json({ error: "Please enter a valid email address." }, 400);
    }
    return json({ error: "Signup is temporarily unavailable." }, 502);
  }

  const member = await response.json().catch(() => ({}));
  console.log("subscribe: mailchimp ok", response.status, member.status, member.list_id);
  return json({ ok: true });
}
