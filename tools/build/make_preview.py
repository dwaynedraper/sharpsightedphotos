# Turn the Next static export into a flat, path-relative preview that works under any URL prefix.
import os, re, shutil, glob, sys
SRC = '/home/claude/photos-preview/out'
DST = sys.argv[1]
shutil.rmtree(DST, ignore_errors=True); os.makedirs(DST)
pages = {'/': 'home.html', '/portraits': 'portraits.html', '/gift': 'gift.html', '/gallery': 'gallery.html',
         '/contact': 'contact.html', '/business': 'business.html', '/business/headshots': 'business-headshots.html',
         '/business/films': 'business-films.html'}
srcfile = {'/': 'index.html', '/portraits': 'portraits.html', '/gift': 'gift.html', '/gallery': 'gallery.html',
           '/contact': 'contact.html', '/business': 'business.html', '/business/headshots': 'business/headshots.html',
           '/business/films': 'business/films.html'}
NAV = ("<script>addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;"
       "var h=a.getAttribute('href');if(!h||/^(https?:|mailto:|tel:|#)/.test(h)||a.target)return;"
       "e.stopPropagation();e.preventDefault();location.href=h;},true);"
       "var F=window.fetch;window.fetch=function(u,o){var x=String(u&&u.url||u);var y=new URL(x,location.href);if(/_rsc=/.test(x)||(y.origin===location.origin&&!/[.][a-z0-9]+$/i.test(y.pathname)))return Promise.reject(new Error('preview'));return F.apply(this,arguments)};</script>")
TONE = ("<style>html[data-tone=green] .ps,html[data-tone=green] .home{--cobalt:#1D5BFF;--cobalt-deep:#1546D1;--fuchsia:#05935F;--fuchsia-deep:#08784A;--pink-tint:#DCF5EA}"
  ".tone-switch{position:fixed;z-index:9999;right:max(16px,env(safe-area-inset-right,0px));bottom:max(16px,env(safe-area-inset-bottom,0px));display:flex;gap:4px;padding:5px;background:#fff;border:2px solid #D9DFF2;border-radius:14px 0 14px 0;box-shadow:0 12px 28px -12px rgba(21,26,51,.45);font:600 13px/1 Montserrat,system-ui,sans-serif}"
  ".tone-switch span{align-self:center;padding:0 8px;color:#4B5270}.tone-switch button{font:inherit;min-height:36px;padding:0 12px;border:0;border-radius:10px 0 10px 0;background:#EEF1FB;color:#151A33;cursor:pointer}"
  ".tone-switch button[aria-pressed=true]{color:#fff}.tone-switch .t-a[aria-pressed=true]{background:linear-gradient(120deg,#2457E6,#D6127F)}.tone-switch .t-b[aria-pressed=true]{background:linear-gradient(120deg,#1D5BFF,#05935F)}"
  ".tone-switch button:focus-visible{outline:3px solid #151A33;outline-offset:2px}</style>"
  "<script>(function(){var t='a';try{t=localStorage.getItem('ss-tone')||'a'}catch(e){}if(t==='b')document.documentElement.setAttribute('data-tone','green');"
  "function ui(){if(!document.querySelector('.ps,.home')||document.querySelector('.tone-switch'))return;var d=document.createElement('div');d.className='tone-switch';d.setAttribute('role','group');d.setAttribute('aria-label','Accent color test');"
  "d.innerHTML='<span>Accent test</span><button type=button class=t-a>Cobalt to Fuchsia</button><button type=button class=t-b>Blue to Green</button>';"
  "function set(v){if(v==='b')document.documentElement.setAttribute('data-tone','green');else document.documentElement.removeAttribute('data-tone');try{localStorage.setItem('ss-tone',v)}catch(e){}"
  "d.querySelector('.t-a').setAttribute('aria-pressed',v==='a');d.querySelector('.t-b').setAttribute('aria-pressed',v==='b')}"
  "d.querySelector('.t-a').onclick=function(){set('a')};d.querySelector('.t-b').onclick=function(){set('b')};document.body.appendChild(d);set(document.documentElement.getAttribute('data-tone')==='green'?'b':'a')}"
  "addEventListener('load',function(){setTimeout(ui,800)})})();</script>")
def fix_common(s):
    for d in ('images/', 'textures/'):
        s = s.replace('"/' + d, '"' + d).replace("'/" + d, "'" + d).replace('url(/' + d, 'url(' + d)
    return s
def href(m):
    path, frag = m.group(1), m.group(2) or ''
    if path in pages: return 'href="%s%s"' % (pages[path], frag)
    return 'href="%s%s"' % (path.lstrip('/'), frag)
used = set()
for route, out in pages.items():
    s = open(os.path.join(SRC, srcfile[route]), encoding='utf-8').read()
    s = s.replace('"/_next/', '"_next/')
    s = fix_common(s)
    s = re.sub(r'href="(/[^"#]*)(#[^"]*)?"', href, s)
    s = s.replace('https://plausible.io/js/pa-rJNcgCeqyKrYkkNB_nbJ4.js', 'data:text/javascript,')  # keep preview visits out of real analytics
    s = s.replace('<head>', '<head>' + NAV, 1)
    s = s.replace('<title>', '<title>Preview · ', 1)
    open(os.path.join(DST, out), 'w', encoding='utf-8').write(s)
    used.update(re.findall(r'(?:src|href)="((?:_next|images|textures)/[^"?]+)', s))
    used.update(re.findall(r'"((?:images|textures)/[^"\\]+)', s))
for f in glob.glob(SRC + '/_next/static/**/*', recursive=True):
    if os.path.isdir(f): continue
    rel = os.path.relpath(f, SRC); os.makedirs(os.path.dirname(os.path.join(DST, rel)), exist_ok=True)
    data = open(f, 'rb').read()
    if f.endswith('.js'):
        t = data.decode('utf-8')
        t = t.replace('let t="/_next/"', 'let t="_next/"')
        t = fix_common(t)
        t = t.replace('"/_vercel/speed-insights/script.js"', '"data:text/javascript,"')
        used.update(re.findall(r'"((?:images|textures)/[^"]+)"', t))
        data = t.encode('utf-8')
    elif f.endswith('.css'):
        t = data.decode('utf-8')
        used.update(re.findall(r'url\(/((?:images|textures)/[^)]+)\)', t))
        t = t.replace('url(/images/', 'url(../../../images/').replace('url(/textures/', 'url(../../../textures/')
        data = t.encode('utf-8')
    open(os.path.join(DST, rel), 'wb').write(data)
for u in sorted(used):
    if u.startswith('_next'): continue
    p = os.path.join(SRC, u)
    if os.path.exists(p):
        os.makedirs(os.path.dirname(os.path.join(DST, u)), exist_ok=True); shutil.copy(p, os.path.join(DST, u))
    else: print('missing', u)
shutil.copy(SRC + '/favicon.ico', DST)
open(os.path.join(DST, 'index.html'), 'w').write('<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=home.html"><title>Sharp Sighted Preview</title></head><body><a href="home.html">Open the site preview</a></body></html>')
# The artifact host reserves names starting with "_", so serve Next's folder as nx/.
os.rename(os.path.join(DST, '_next'), os.path.join(DST, 'nx'))
for f in glob.glob(DST + '/**/*', recursive=True):
    if f.endswith(('.html', '.js', '.css')):
        t = open(f, encoding='utf-8').read()
        if '_next/' in t: open(f, 'w', encoding='utf-8').write(t.replace('_next/', 'nx/'))
    if f.endswith('.map'): os.remove(f)
# The host rejects a literal U+FFFD. Inside JS strings the escape means the same thing.
for f in glob.glob(DST + '/**/*.js', recursive=True):
    t = open(f, encoding='utf-8').read()
    if '�' in t: open(f, 'w', encoding='utf-8').write(t.replace('�', '\\ufffd'))
