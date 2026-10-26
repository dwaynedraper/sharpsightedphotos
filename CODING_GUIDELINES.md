# Coding Guidelines & Project Rules

## Image Handling - THE GOLDEN RULE
**NEVER alter the appearance of photographs unless explicitly directed by the user.**
This is a portfolio for a professional photographer who edits their images to their exact specifications.

### Forbidden Styles on Images:
- **No `grayscale`** (e.g., `grayscale`, `grayscale-0`, etc.)
- **No `brightness` or `contrast` adjustments**
- **No `sepia` or artistic filters**
- **No `mix-blend-*` modes** that alter the image colors (e.g., `mix-blend-multiply`, `mix-blend-overlay`).
- **No Vignettes** (darkened corners).

### Exceptions:
- **Text Readability**: You MAY apply a generic darkening/lightening overlay *on top* of an image IF AND ONLY IF text involves legibility (e.g., a Hero section with text over a background image).
    - *Preferred method*: A solid color with opacity (e.g., `bg-black/40`) placed in a `div` *over* the image.
    - *Do not* tint the image with colors (e.g., avoid `bg-amber-500/20`). Use neutral blacks or whites.

## Calls to Action - EXACT WORDING RULE

A call to action uses the exact same words everywhere it appears. Nav, hero, sections, closing, footer, and every page. Even a one-word difference adds load for the reader.

- Every CTA label lives in `src/content/site.ts` under `cta`. Import it. Never type a CTA label by hand.
- The main CTA is **Book a Connection Call** on every For You page and every For Your Business page.
- The one approved exception is the Headshots page. Its main CTA (hero, nav button, order cards, closing) is **Book a Session**. Its Connection Call offer reads **Start with a Connection Call** and appears below the fold only.
- For You stays consistent with itself, and For Your Business stays consistent with itself. The two sides may differ when there is a reason.
