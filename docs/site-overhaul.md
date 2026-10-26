# Site Overhaul Handoff

Status as of October 26, 2026. Read this first when picking the overhaul back up in a new chat. The same file lives in the repo at `docs/site-overhaul.md`.

## How to resume in a new chat

1. Read this note, then the Sharp Sighted Site Overhaul doc linked below.
2. The repo is on Dean's Mac. Link the chat to his computer and work in `~/projects/sharp/photos` on the `site-overhaul` branch. To build in the cloud workspace, tar the repo over, run `npm ci`, and use `tools/build/verify-build.sh`, because Google Fonts is blocked there.
3. Git on the Mac needs delete permission for the `sharp` folder, or lock files get left behind.
4. Ask Dean before every push. He pushes and merges himself.
5. Dean's working style: numbered questions, ask whether each section is done before moving on, no em dashes, no semicolons, colons rarely, short sentences.

## Business and messaging decisions from Oct 26

- **Discovery Hour.** Three parts: who you are, the message, and bringing it to life. There are two directions, Story to tell or Seen as you are. Dean promises the session plan within 7 days. He calls the deeper part "get personal," not "intimate."
- **Connection Call.** 15 minutes. Set the plan, hear their why, inform, inspire, and ask once at the end. No discounts. One follow-up, on the date they choose.
- **Soft offers.** Find Your Story is a primer PDF that gets people noticing without handing them the interview questions. The Team Headshot Day Kit is a 5-step PDF for office managers. Dean is writing his own versions of both as a voice test. Compare them with the drafts in `docs/guides`, then record the differences in his voice.
- **Gift Sessions** have no nav link, but every page stays in the sitemap. Distracting nav hurts close rates.

## Where the work lives

- **Branch:** `site-overhaul` in this repo, on Dean's Mac at `~/projects/sharp/photos`. Dean pushes and merges himself. Never push for him.
- **Live preview:** https://claude.ai/artifact/1utHosXMR2Lg2z7kX3vFsx (static export of every page, analytics off)
- **Design system canvas:** https://claude.ai/artifact/Au66FjCsuabfFndP2JR2X3 (every 4-up round and the chosen option for each)
- **Docs:**
  - Guide Outlines: https://claude.ai/artifact/Cxpiry4tMMNtGTfbSFXZBa
  - Discovery Hour Interview Script: https://claude.ai/artifact/7RwwbGanRSByfc1NWyg4As
  - Connection Call Script: https://claude.ai/artifact/6sU2cTTcBXPgz58c117RmJ
  - Sharp Sighted Site Overhaul (decisions, status, open items, written for Dean): https://claude.ai/artifact/SJ3y7eWSYXZE8GYBM8k8Rr
- **Guide drafts:** `docs/guides/` holds the HTML sources and PDFs for Find Your Story and the Team Headshot Day Kit.
- **Helper scripts:** `tools/`. See `tools/README.md`.

## Site structure

| Route | Side | Notes |
| --- | --- | --- |
| `/` | Home | Two doors, For You and For Your Business |
| `/portraits` | For You | Story Portraits. Hallway, packages, prints and add-ons, Gift Sessions, FAQ |
| `/gallery` | For You | Collections. Next up is converting these to heirloom books that open into a matted gallery |
| `/gift` | For You | Gift Sessions. No nav link. Reached only from the Give a Gift Session buttons. Still in the sitemap. |
| `/contact` | For You | Connection Call, phone, QR, Sprout lead form |
| `/business` | Business | Hub with Headshots and Films doors |
| `/business/headshots` | Business | Light table and loupe, lab order pricing |
| `/business/films` | Business | Program monitor, media pool dialog, render queue |

Route groups `(personal)` and `(business)` wrap pages in `.ps` and `.bz`. All styles are namespaced under those classes in `src/styles/`. Old routes redirect: `/storyportraits`, `/headshots`, `/films`, and `/video`. The site is light only. Dark mode was removed.

## Rules that apply everywhere

1. **Golden Rule.** Never alter how a photograph looks unless Dean directs it. The hallway shade over photos and the skewed heirloom book cover were directed.
2. **Exact CTA wording.** Every CTA label comes from `cta` in `src/content/site.ts`. The main CTA is "Book a Connection Call" everywhere. The Headshots page is the only exception. Its main CTA is "Book a Session", and "Start with a Connection Call" appears below the fold only. See `CODING_GUIDELINES.md`.
3. **Writing.** No em dashes. No semicolons. Colons rarely. Short declarative sentences, first person, proper grammar. Public pieces end with "Stay Sharp. Stay Seen. Stay Human."
4. **Every heading and opening line must pass the StoryBrand grunt test.**
5. **Prices up front.** People should know right away if they are priced out.
6. **No distracting nav.** Only primary pages in the nav. Secondary pages are linked from content.
7. **Performance first.** Motion is CSS transform and opacity only, started at idle, and off for reduced motion.

## Design system, For You

- **Palette:** Blue to Green. Blue `#1D5BFF`, deep blue `#1546D1`, green `#05935F`, deep green `#08784A` for prices and labels, green tint `#DCF5EA`. The wall is `#F2F5FF` and the ink is `#151A33`. This replaced Cobalt to Fuchsia on October 26.
- **Corners:** Soft Leaf `16px 0 16px 0` everywhere. Text fields are 8px.
- **Type:** Playfair Display for headings, Montserrat for body. H1 64, H2 48, H3 32, body 18.
- **Buttons:** Blue to green gradient for the main button. Soft blue for the second.
- **The four photo styles**
  1. Gallery mat (`Frame`) for single photos inside an album or on the gallery wall.
  2. Heirloom book (`HeirloomBook`) for a link to an album. It's a rendered album with the cover fit by one perspective transform.
  3. Photo card (`PhotoCard`) for an offering with a cover image. The photo is untouched, with a badge on the seam.
  4. Standalone photo (`Photo`) for a hero or a photo beside text.
- **Hallway:** A scroll-driven walk past a gallery wall. One continuous shade layer has a soft hole cut for each light. The floor is plain gray, and the benches move faster than the wall.

## Design system, For Your Business

- **Palette:** Graphite and Volt.
- **Corners:** Notched clip-path with a volt underline bar. Clapper boards are square.
- **Cards:** Spec Sheet, with White for notes.
- **Imagery:** Contact sheet on Headshots, editing software on Films.

## Copy decisions on Story Portraits

- The Disasterpiece is $3,000.
- The Heirloom Book is included in the Epic and can be added to any session. The add-on price is still open.
- Dean chooses the framed prints from the full proof spread. The client doesn't pick.
- "Gift card" is now "Gift Session." The recipient gets a ticket that reads "Limited edition" and "Christmas '26." There are no "only 10" claims anywhere.
- The FAQ uses Dean's wording for "I hate being photographed" and "Can I bring someone with me."

## Open items

- [ ] Headshot booking link. Dean's own app or Sprout Studio. It's a placeholder in `site.headshotBooking`.
- [ ] Heirloom Book add-on price
- [ ] Hero: keep the standalone photo, or bring back the crooked frame
- [ ] Keep the empty "Chin down. Turn left. Now smile." frame in the problem section
- [ ] Gallery page: heirloom books that open into matted photos
- [ ] Section-by-section copy approval for Headshots, Home, and the Business hub
- [ ] Dean's own versions of both guides, to compare against the voice test drafts
- [ ] Guide delivery: an email form plus three follow-up emails each
- [ ] Kit details to confirm: room size, setup and pack-out times, wardrobe tips
- [ ] Placeholders: Leslie's review, the TSM film, client images in the hallway, real team headshots
- [ ] Discovery Hour price for video
- [ ] Epic delivery window, portrait list prices, video booking and cancellation terms, the Lumachrome name
- [ ] Pre-existing lint error in `HubReturnToast.tsx` (setState in an effect)
