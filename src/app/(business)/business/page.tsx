import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BzNav from '@/components/bz/BzNav';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Headshots and Films for Businesses in DFW',
  description: 'Corporate headshots and brand films for DFW teams and nonprofits. On site, matched light, and every frame edited by Dean Draper.',
  alternates: { canonical: '/business' },
};

const strip = [
  { src: '/images/web/portrait2.webp', w: 1143, h: 1600 },
  { src: '/images/web/hero.webp', w: 1600, h: 1236 },
  { src: '/images/web/portrait3.webp', w: 1143, h: 1600 },
  { src: '/images/web/portrait5.webp', w: 1600, h: 1143 },
];

export default function BusinessHub() {
  return (
    <>
      <BzNav current="hub" />
      <main id="main">
        <section className="band hub-hero" aria-labelledby="hub-title">
          <div className="wrap">
            <div className="stack" style={{ maxWidth: '62ch' }}>
              <p className="eyebrow">For Your Business · Dallas Fort Worth</p>
              <h1 id="hub-title">Headshots and films for businesses.</h1>
              <p className="lede muted">For DFW teams and causes with a story worth telling. I come to you, light it right, and edit every frame myself.</p>
              <div className="actions">
                <a className="btn n12" href={site.connectionCall}>Hold a January date <span className="arrow" aria-hidden="true">→</span></a>
                <a className="link" href={site.connectionCall}>Book a free Connection Call</a>
              </div>
            </div>
          </div>
        </section>

        <section className="band" aria-label="Pick what you need" style={{ paddingTop: 0 }}>
          <div className="wrap doors">
            <Link className="door n18 bar" href="/business/headshots">
              <span className="door-top"><span>CONTACT SHEET · HEADSHOTS</span><span>▸ 01</span></span>
              <span className="door-strip" aria-hidden="true">
                {strip.map((s, i) => <Image key={i} src={s.src} width={s.w} height={s.h} alt="" sizes="140px" />)}
              </span>
              <span className="door-body">
                <span className="door-h">Headshots that look like one team.</span>
                <span className="door-p">Same light, same polish, every face. On site at your office.</span>
                <span className="door-price">From $600 setup plus $70 to $90 per person</span>
                <span className="door-go">See headshots <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <Link className="door n18 bar" href="/business/films">
              <span className="door-top"><span>PROGRAM · FILMS</span><span>4K · 23.976</span></span>
              <span className="door-view" aria-hidden="true">
                <Image src="/images/web/story.webp" width={1400} height={933} alt="" sizes="(min-width: 900px) 540px, 90vw" />
                <span className="tc">01:00:12:08</span>
              </span>
              <span className="door-body">
                <span className="door-h">Films that make people trust you.</span>
                <span className="door-p">Testimonials, brand stories, and monthly video. Planned, shot, and edited by me.</span>
                <span className="door-price">Projects from $1,500. Monthly plans from $800.</span>
                <span className="door-go">See films <span aria-hidden="true">→</span></span>
              </span>
            </Link>
          </div>
        </section>

        <section className="band" aria-labelledby="both-title" style={{ background: 'var(--surface)' }}>
          <div className="wrap two">
            <div className="stack">
              <p className="eyebrow">Better together</p>
              <h2 id="both-title">One photographer for your faces and your story.</h2>
              <p className="muted">Book headshots and a film on the same trip, and your team page finally matches the story you tell. Same light, same eye, one setup.</p>
              <p className="muted">Nonprofits get 20% off list prices on both.</p>
            </div>
            <div className="np n18 bar">
              <div className="stack" style={{ gap: 12 }}>
                <p className="eyebrow">Next step</p>
                <h3>Not sure which one you need?</h3>
                <p className="muted">Book a free 15-minute Connection Call. We will figure it out together.</p>
              </div>
              <a className="btn n12" href={site.connectionCall}>Book a Connection Call <span className="arrow" aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
