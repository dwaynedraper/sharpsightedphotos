import type { Metadata } from 'next';
import Image from 'next/image';
import BzNav from '@/components/bz/BzNav';
import LightTable from '@/components/bz/LightTable';
import { standardIncluded, featuredIncluded, bulkRows, addOns, headshotFaq } from '@/content/headshots';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Corporate Headshots in DFW',
  description: 'Corporate headshots that make your team look like one firm. On site at your office across the 121 corridor. Standard Set from $600 setup plus $70 to $90 per person.',
  alternates: { canonical: '/business/headshots' },
};

const circle = (
  <svg className="mark circle" viewBox="0 0 200 170" preserveAspectRatio="none" aria-hidden="true">
    <path d="M100 10 C 170 6, 196 50, 190 92 C 184 140, 130 166, 84 160 C 30 152, 6 116, 12 74 C 18 34, 56 12, 112 14" stroke="#C8F031" strokeWidth="6" vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" />
  </svg>
);
const cross = (
  <svg className="mark cross" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <path d="M8 10 L92 90 M90 8 L10 92" stroke="#FFFFFF" strokeWidth="5" vectorEffect="non-scaling-stroke" strokeLinecap="round" opacity="0.85" />
  </svg>
);

const sheet = [
  { src: '/images/web/portrait2.webp', w: 1143, h: 1600, alt: 'Frame 31, facing the camera' },
  { src: '/images/web/portrait2.webp', w: 1143, h: 1600, alt: 'Frame 32, crossed out', flip: true, mark: 'cross' },
  { src: '/images/web/portrait5.webp', w: 1600, h: 1143, alt: 'Frame 33, circled as the keeper', mark: 'circle' },
  { src: '/images/web/hero.webp', w: 1600, h: 1236, alt: 'Frame 34, black and white' },
  { src: '/images/web/portrait5.webp', w: 1600, h: 1143, alt: 'Frame 35, arms crossed', flip: true },
];

const patch = [
  { src: '/images/web/portrait2.webp', w: 1143, h: 1600, cls: 'p1' },
  { src: '/images/web/portrait3.webp', w: 1143, h: 1600, cls: 'p2' },
  { src: '/images/web/hero.webp', w: 1600, h: 1236, cls: 'p3' },
  { src: '/images/web/portrait4.webp', w: 1600, h: 1060, cls: 'p4' },
  { src: '/images/web/portrait1.webp', w: 1600, h: 1067, cls: 'p5' },
  { src: '/images/web/portrait5.webp', w: 1600, h: 1143, cls: 'p6' },
];

export default function HeadshotsPage() {
  const offers = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Corporate Headshots by Sharp Sighted Photos',
    itemListElement: [
      { '@type': 'Offer', name: 'The Standard Set', description: '$600 setup plus $70 to $90 per person. ' + standardIncluded.join('. '), price: '600', priceCurrency: 'USD', url: 'https://sharpsighted.photos/business/headshots' },
      { '@type': 'Offer', name: 'The Featured Set, single executive', description: featuredIncluded.join('. '), price: '900', priceCurrency: 'USD', url: 'https://sharpsighted.photos/business/headshots' },
    ],
  };
  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: headshotFaq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offers) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <BzNav current="headshots" />
      <main id="main" className="hs">
        {/* 1. Hero: light table and loupe */}
        <section className="band hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="stack">
              <p className="eyebrow">Corporate Headshots · Dallas Fort Worth</p>
              <h1 id="hero-title">Headshots that look like one team.</h1>
              <p className="lede muted">I come to your office. Same light, same polish, every face. You see every frame on a monitor as we shoot.</p>
              <p className="anchor">The Standard Set starts at <b>$600 setup plus $70 to $90 per person</b>.</p>
              <div className="actions">
                <a className="btn n12" href={site.connectionCall}>Hold a January date <span className="arrow" aria-hidden="true">→</span></a>
                <a className="link" href={site.connectionCall}>Book a free Connection Call</a>
              </div>
            </div>
            <LightTable />
          </div>
        </section>

        {/* 2. Stakes: the patchwork team page */}
        <section className="band" aria-labelledby="stakes-title" style={{ background: 'var(--surface)' }}>
          <div className="wrap two">
            <div className="patch n18 bar" role="img" aria-label="A team page where every headshot has a different size, crop, and background">
              <div className="patch-head" aria-hidden="true"><span>yourfirm.com/team</span><span className="patch-flag">Patchwork</span></div>
              <ul className="patch-grid" aria-hidden="true">
                {patch.map((p, i) => (
                  <li key={i} className={p.cls}><Image src={p.src} width={p.w} height={p.h} alt="" sizes="160px" /></li>
                ))}
              </ul>
            </div>
            <div className="stack">
              <p className="eyebrow">The problem</p>
              <h2 id="stakes-title">Your team page should not feel like a yearbook.</h2>
              <p className="muted">Most team pages are built one photographer at a time. One person joined in 2021. Another in 2023. Each one was shot in a different studio, on a different day, with different light.</p>
              <p className="muted">The result reads like a yearbook, not a brand. Clients notice, even when they can&apos;t say why.</p>
            </div>
          </div>
        </section>

        {/* 3. Value */}
        <section className="band" aria-labelledby="value-title">
          <div className="wrap">
            <div className="stack" style={{ gap: 10 }}>
              <p className="eyebrow">What changes</p>
              <h2 id="value-title">One firm. One look. Every face.</h2>
            </div>
            <ul className="markers">
              <li className="n18 bar"><span className="mk keep" aria-hidden="true">Keeper 01</span><h3>Your team looks like one firm.</h3><p className="muted">I light every person the same way, so the whole set matches. Because it is one firm.</p></li>
              <li className="n18 bar"><span className="mk keep" aria-hidden="true">Keeper 02</span><h3>Your best self on your best day.</h3><p className="muted">Skin softened, never plastic. Stray hairs, glasses glare, and lint cleaned up. Included on every image.</p></li>
              <li className="n18 bar"><span className="mk keep" aria-hidden="true">Keeper 03</span><h3>Barely any downtime.</h3><p className="muted">About 10 to 15 minutes per person. Most teams of 10 are done in three to four hours.</p></li>
            </ul>
          </div>
        </section>

        {/* 4. Guide with the contact sheet */}
        <section className="band proof" aria-labelledby="guide-title" style={{ background: 'var(--surface)' }}>
          <div className="wrap">
            <div className="stack">
              <p className="eyebrow">Your guide</p>
              <h2 id="guide-title">Most people hate getting photographed. That&apos;s my job.</h2>
              <p className="muted">I&apos;m Dean. Direction is part of what you pay for. I keep it fast and easy, and the final image looks like the version of you your clients should meet.</p>
              <p className="muted">Every shoot day includes tethered review on a 15-inch monitor. You see each frame as we shoot and pick the keepers on the spot.</p>
            </div>
            <div className="sheet n18 bar">
              <div className="sheet-head" aria-hidden="true"><span>SAMPLE TEAM · ROLL 03</span><span>SHARP SIGHTED</span></div>
              <div className="film">
                <ul className="frames" aria-label="Sample proof frames">
                  {sheet.map((f, i) => (
                    <li key={i} className={f.mark === 'circle' ? 'keeper' : undefined}>
                      <div className="shot">
                        <Image src={f.src} width={f.w} height={f.h} alt={f.alt} sizes="160px" className={f.flip ? 'flip' : undefined} />
                        {f.mark === 'circle' && circle}
                        {f.mark === 'cross' && cross}
                      </div>
                      <span className="edge">▸ {31 + i}{f.mark === 'circle' ? ' · KEEPER' : ''}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Plan: a strip of negatives */}
        <section className="band" aria-labelledby="steps-title">
          <div className="wrap">
            <div className="stack" style={{ gap: 10 }}><p className="eyebrow">How it works</p><h2 id="steps-title">Three frames from first call to final files.</h2></div>
            <div className="film steps-film" style={{ '--holes': 'var(--ground)' } as React.CSSProperties}>
              <ol className="frames">
                <li><span className="num">FRAME 01 · 15 MINUTES</span><h3>Connection Call</h3><p>Team size, timeline, look, and logistics. We map the day before a camera comes out.</p></li>
                <li><span className="num">FRAME 02 · ON SITE</span><h3>Headshot day</h3><p>I arrive 90 minutes early and set up a full studio in your office. People come in between calls.</p></li>
                <li><span className="num">FRAME 03 · 3 TO 5 DAYS</span><h3>Delivery</h3><p>Retouched files arrive named, sized, and ready for LinkedIn, your website, and print.</p></li>
              </ol>
            </div>
          </div>
        </section>

        {/* 6. Pricing: lab orders */}
        <section className="band" aria-labelledby="order-title" id="pricing" style={{ background: 'var(--surface)' }}>
          <div className="wrap">
            <div className="section-head">
              <div className="stack" style={{ gap: 10 }}><p className="eyebrow">Order form · Founding rates</p><h2 id="order-title">Honest, upfront pricing.</h2></div>
              <p className="muted" style={{ maxWidth: '36ch' }}>Founding rates for teams booked and paid by December 25, 2026. The shoot can happen in January. {site.taxNote}</p>
            </div>
            <div className="orders">
              <article className="order n18 bar" aria-labelledby="o1">
                <div className="order-top"><span>LAB ORDER · 01</span><span>THE WHOLE TEAM</span></div>
                <div className="order-body">
                  <h3 id="o1">The Standard Set</h3>
                  <p className="muted" style={{ fontSize: 17 }}>The cohesive team look. Same light, same backdrop, same polish for everyone on the roster.</p>
                  <dl>
                    <div><dt>Setup</dt><dd>$600</dd></div>
                    <div><dt>Per person</dt><dd><span className="rate">$70 to $90</span></dd></div>
                    <div><dt>Most teams</dt><dd>About $80 per person</dd></div>
                  </dl>
                  <ul className="order-list">{standardIncluded.map((x) => <li key={x}>{x}</li>)}</ul>
                  <p className="best"><b>Best for</b> team headshot days, new hire photos, website refreshes, and annual updates.</p>
                  <div><a className="btn n12" href={site.connectionCall}>Hold a date <span className="arrow" aria-hidden="true">→</span></a></div>
                </div>
              </article>
              <article className="order n18 bar" aria-labelledby="o2">
                <div className="order-top"><span>LAB ORDER · 02</span><span>THE FACES OF THE BRAND</span></div>
                <div className="order-body">
                  <h3 id="o2">The Featured Set</h3>
                  <p className="muted" style={{ fontSize: 17 }}>The headshot, plus an editorial portrait of the person at work. Made for the About page, the press feature, and the keynote slide.</p>
                  <dl>
                    <div><dt>Team add-on</dt><dd><span className="rate">+$250 to $350 per person</span></dd></div>
                    <div><dt>One executive</dt><dd><span className="rate">$900 all in</span></dd></div>
                    <div><dt>Session</dt><dd>25 to 35 minutes</dd></div>
                  </dl>
                  <ul className="order-list">{featuredIncluded.map((x) => <li key={x}>{x}</li>)}</ul>
                  <p className="best"><b>Best for</b> founders, principals, practice leads, and anyone whose face is part of the brand.</p>
                  <div><a className="btn n12" href={site.connectionCall}>Hold a date <span className="arrow" aria-hidden="true">→</span></a></div>
                </div>
              </article>
            </div>

            <div className="two-tables">
              <div className="lab-table n18 bar">
                <div className="order-top"><span>LARGER TEAMS</span><span>PER-PERSON RATE</span></div>
                <table>
                  <caption className="sr-only">Per-person rates by team size</caption>
                  <thead><tr><th scope="col">Team size</th><th scope="col">Rate</th></tr></thead>
                  <tbody>{bulkRows.map((r) => <tr key={r.size}><th scope="row">{r.size}</th><td>{r.rate}</td></tr>)}</tbody>
                </table>
                <p className="fine">Teams of 30 or more can split across two days with one $600 setup fee.</p>
              </div>
              <div className="lab-table n18 bar">
                <div className="order-top"><span>ADD-ONS</span><span>À LA CARTE</span></div>
                <dl className="addons">{addOns.map((a) => <div key={a.name}><dt>{a.name}</dt><dd>{a.detail}</dd></div>)}</dl>
                <p className="fine">Nonprofits get 20% off list prices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Founding offer */}
        <section className="band close-band" aria-labelledby="found-title">
          <div className="wrap">
            <div className="stack" style={{ maxWidth: '60ch', gap: 14 }}>
              <p className="eyebrow">Founding rates</p>
              <h2 id="found-title">Book by December 25. Shoot in January.</h2>
              <p className="muted">Today&apos;s prices hold for any team day booked and paid by December 25, 2026, even when the shoot happens in January. That&apos;s when new hires arrive and everyone updates LinkedIn. Wednesday and Thursday dates go first.</p>
            </div>
            <a className="btn light n12" href={site.connectionCall}>Hold a January date <span className="arrow" aria-hidden="true">→</span></a>
          </div>
        </section>

        {/* 8. Explanatory: two portraits, one day */}
        <section className="band" aria-labelledby="deep-title">
          <div className="wrap two">
            <div className="deep-art n18 bar">
              <Image src="/images/web/saga.webp" width={1024} height={1024} alt="A team working at a long table in a bright brick office" sizes="(min-width: 900px) 520px, 90vw" />
            </div>
            <div className="stack">
              <p className="eyebrow">The Featured Set</p>
              <h2 id="deep-title">Why two portraits, one day.</h2>
              <p className="muted">A LinkedIn headshot answers one question. Who is this person? An editorial portrait answers a different one. What does this person actually do?</p>
              <p className="muted">The first earns the click. The second earns the trust.</p>
              <p className="muted">Picture the founder at the workbench, the advisor at the conference table, or the architect with rolled drawings. Real props, real space, real story. Same day as the team, in one efficient shoot.</p>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="band" aria-labelledby="faq-title" style={{ background: 'var(--surface)' }}>
          <div className="wrap faq-wrap">
            <h2 id="faq-title">Questions teams ask.</h2>
            <div className="faq">
              {headshotFaq.map((f) => (
                <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Closing */}
        <section className="band" aria-labelledby="close-title">
          <div className="wrap">
            <div className="np n18 bar">
              <div className="stack" style={{ gap: 12 }}>
                <p className="eyebrow">Next step</p>
                <h2 id="close-title">Ready to make your team page look like one firm?</h2>
                <p className="muted">Book a 15-minute Connection Call. We will walk through team size, timeline, and which set fits. No pressure and no pitch.</p>
              </div>
              <a className="btn n12" href={site.connectionCall}>Book a free Connection Call <span className="arrow" aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
