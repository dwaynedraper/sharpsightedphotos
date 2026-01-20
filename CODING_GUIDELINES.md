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
