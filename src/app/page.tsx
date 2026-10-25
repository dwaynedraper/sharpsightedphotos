import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const strip = [
  { src: '/images/web/portrait2.webp', w: 1143, h: 1600 },
  { src: '/images/web/hero.webp', w: 1600, h: 1236 },
  { src: '/images/web/portrait5.webp', w: 1600, h: 1143 },
];

export default function Home() {
  return (
    <div className="home">
      <a className="home-skip" href="#doors">Skip to content</a>
      <header className="home-top">
        <span className="home-brand">Sharp Sighted</span>
        <span className="home-tag">{site.tagline}</span>
      </header>
      <main id="doors">
        <h1 className="sr-only">Story portraits for people. Headshots and films for businesses.</h1>
        <div className="home-doors">
          {/* For You door */}
          <Link className="home-door door-ps" href="/portraits">
            <span className="hd-eyebrow">For You</span>
            <span className="hd-art" aria-hidden="true">
              <span className="hd-frame">
                <span className="hd-mat"><span className="hd-bevel"><Image src="/images/web/story.webp" width={1400} height={933} alt="" sizes="(min-width: 900px) 420px, 80vw" priority /></span></span>
              </span>
            </span>
            <span className="hd-h">Story portraits for people.</span>
            <span className="hd-p">For anyone done with stiff poses. You tell me your story, and I photograph you living it.</span>
            <span className="hd-price">Sessions from $900</span>
            <span className="hd-go">Step into For You <span aria-hidden="true">→</span></span>
          </Link>
          {/* For Your Business door */}
          <Link className="home-door door-bz" href="/business">
            <span className="hd-eyebrow">For Your Business</span>
            <span className="hd-art" aria-hidden="true">
              <span className="hd-strip">
                {strip.map((s, i) => (
                  <span key={i} className="hd-cell"><Image src={s.src} width={s.w} height={s.h} alt="" sizes="160px" /><span className="hd-num">▸ {33 + i}</span></span>
                ))}
              </span>
            </span>
            <span className="hd-h">Headshots and films for businesses.</span>
            <span className="hd-p">Team headshots that match, and films that make people trust you. On site across DFW.</span>
            <span className="hd-price">Headshots from $600 · Films from $1,500</span>
            <span className="hd-go">Step into Business <span aria-hidden="true">→</span></span>
          </Link>
        </div>
        <section className="home-guide" aria-labelledby="home-guide-title">
          <div className="home-guide-inner">
            <h2 id="home-guide-title">One person behind every frame.</h2>
            <p>I&apos;m Dean Draper. I plan every session, shoot every frame, and edit every image myself, across Denton and Dallas Fort Worth. Not a cog. Never a number.</p>
            <a className="home-call" href={site.connectionCall}>Book a free Connection Call</a>
          </div>
        </section>
      </main>
      <footer className="home-foot">
        <span>Sharp Sighted Photos · {site.phoneDisplay} · <a href={`mailto:${site.email}`}>{site.email}</a></span>
        <nav aria-label="Footer"><Link href="/portraits">Story Portraits</Link><Link href="/business/headshots">Headshots</Link><Link href="/business/films">Films</Link><Link href="/gift">Gift Sessions</Link><Link href="/contact">Contact</Link></nav>
      </footer>
    </div>
  );
}
