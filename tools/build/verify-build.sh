#!/bin/bash
# Verification only: Google Fonts are blocked in this workspace, so swap in local copies of the same fonts, build, then restore.
set -e
cd /home/claude/photos
cp src/app/layout.tsx /tmp/layout.real.tsx
mkdir -p src/app/_fontstub && cp /home/claude/photos/tools/fontstub/*.woff2 src/app/_fontstub/
python3 - <<'PY'
p=open("src/app/layout.tsx").read()
s=p.index("import { Playfair_Display, Montserrat } from 'next/font/google';")
p=p.replace("import { Playfair_Display, Montserrat } from 'next/font/google';","import localFont from 'next/font/local';")
a=p.index("const playfair = Playfair_Display(")
b=p.index("const PLAUSIBLE_SCRIPT")
p=p[:a]+'''const playfair = localFont({ variable: '--font-playfair', display: 'swap', src: [
  { path: './_fontstub/playfair-display-latin-400-normal.woff2', weight: '400', style: 'normal' },
  { path: './_fontstub/playfair-display-latin-400-italic.woff2', weight: '400', style: 'italic' },
  { path: './_fontstub/playfair-display-latin-600-normal.woff2', weight: '600', style: 'normal' },
  { path: './_fontstub/playfair-display-latin-700-normal.woff2', weight: '700', style: 'normal' } ] });
const montserrat = localFont({ variable: '--font-montserrat', display: 'swap', src: [
  { path: './_fontstub/montserrat-latin-500-normal.woff2', weight: '500', style: 'normal' },
  { path: './_fontstub/montserrat-latin-600-normal.woff2', weight: '600', style: 'normal' },
  { path: './_fontstub/montserrat-latin-700-normal.woff2', weight: '700', style: 'normal' } ] });

'''+p[b:]
open("src/app/layout.tsx","w").write(p)
PY
trap 'cp /tmp/layout.real.tsx src/app/layout.tsx; rm -rf src/app/_fontstub' EXIT
NEXT_TELEMETRY_DISABLED=1 npx next build 2>&1 | tail -40
