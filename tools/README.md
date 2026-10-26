# Tools from the site overhaul

These helpers were used to build, test, and preview the October 2026 site overhaul. None of them are part of the website. They are kept here so the work can be picked up again in any session.

The scripts were written for Claude's cloud workspace, where the repo lives at `/home/claude/photos`. Change the paths at the top of a script before running it on your Mac.

## build/

| File | What it does |
| --- | --- |
| `verify-build.sh` | Runs `next build` with local copies of Playfair Display and Montserrat. Google Fonts is blocked in the cloud workspace, so this swaps `next/font/google` for `next/font/local` during the build only, then puts `layout.tsx` back. On your Mac, a plain `npm run build` works. |
| `preview-sync.sh` | Copies the repo to `/home/claude/photos-preview` and applies preview-only changes. It turns on static export, makes images unoptimized, stubs the Cloudinary gallery action, and drops robots and the sitemap. It never touches the real repo. |
| `preview-build.sh` | Builds that preview copy into `out/`. |
| `make_preview.py` | Turns `out/` into a flat folder that works under any URL. It renames `_next` to `nx` because the artifact host reserves names that start with `_`. It also rewrites links to `.html` files and switches analytics off. |
| `preview-hub.html` | The start page of the published preview. |

To refresh the preview, run `preview-sync.sh`, then `preview-build.sh`, then `python3 make_preview.py <out folder>`. Copy `preview-hub.html` in as `index.html`, then republish the artifact.

## checks/

These are Playwright and Lighthouse scripts. Install their packages with `npm install` in this folder first. The package list is in `package.json`.

| File | What it checks |
| --- | --- |
| `lh.sh` | Lighthouse performance for one page. Usage is `./lh.sh /portraits mobile`. |
| `site_checks.js` | Hallway frame rate, reveal motion, and loupe tracking. |
| `pshots.js` | Full-page Story Portraits screenshots on desktop and phone. |
| `hall_ends.js` | Hallway screenshots at the start, middle, and end. |
| `pv_check.js` | Every preview page under a subpath, plus links, the media pool, and the loupe. |
| `render_guides.js` | Renders the guide HTML in `docs/guides` to PDF. |

## album-render/

`album.html` is a three.js scene that renders the heirloom book album and prints the four corners of its cover face. `render_album.js` runs it in headless Chromium. The render was cropped to 1430 by 920 and saved as `public/textures/album.webp`. The corner fractions in `src/components/ps/HeirloomBook.tsx` come from that crop.

To swap in a real photo of an album, replace `album.webp`, then measure the four corners of the cover photo area as fractions of the image. Order them top left, top right, bottom right, bottom left. Paste them into `FACE` in `HeirloomBook.tsx`.

`bench.html` and `render_bench.js` made the gallery hallway bench.

## fontstub/

These are local copies of the two site fonts from Fontsource, under the SIL Open Font License. `verify-build.sh` uses them, and so do the guide PDFs.

## reference/

The approved standalone test pages for For You, Headshots, and Video. The site CSS in `src/styles/ps.css` and `bz.css` was generated from these.
