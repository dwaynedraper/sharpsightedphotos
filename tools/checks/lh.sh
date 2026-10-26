#!/bin/bash
# usage: lh.sh path mode
p="$1"; m="$2"; n=$(echo "$p" | tr '/' '_')
extra=""; [ "$m" = desktop ] && extra="--preset=desktop"
npx lighthouse "http://localhost:3100$p" $extra --quiet --chrome-flags="--headless=new --no-sandbox" --output=json --output-path="lhs${n}-$m.json" --only-categories=performance >/dev/null 2>&1
node -e "const r=require('./lhs${n}-$m.json');const a=r.audits;console.log('$p $m',Math.round(r.categories.performance.score*100),'TBT',Math.round(a['total-blocking-time'].numericValue),'LCP',Math.round(a['largest-contentful-paint'].numericValue),'CLS',a['cumulative-layout-shift'].numericValue.toFixed(3))"
