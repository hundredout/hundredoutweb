
  # HundredOut_NewSite

  This is a code bundle for HundredOut_NewSite. The original project is available at https://www.figma.com/design/TM2hHkSEvk7hNUbeNZaPVE/HundredOut_NewSite.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Mailchimp signup setup

  Signups post to `/api/subscribe` (`api/subscribe.ts`), which is protected by Vercel BotID and adds the address to Mailchimp as `pending` (double opt-in).

  Set these in Vercel (and `.env.local` for local testing with `vercel dev`):

  - `MAILCHIMP_API_KEY`
  - `MAILCHIMP_AUDIENCE_ID`
  - `MAILCHIMP_SERVER_PREFIX` (the suffix of the API key, e.g. `us21`)

  Enable BotID for the project in the Vercel dashboard (Firewall > Bot Management > BotID).
