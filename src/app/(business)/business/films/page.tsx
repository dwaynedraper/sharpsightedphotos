import type { Metadata } from 'next';
import Image from 'next/image';
import BzNav from '@/components/bz/BzNav';
import ProgramMonitor from '@/components/bz/ProgramMonitor';
import MediaPool from '@/components/bz/MediaPool';
import { films, everyFilm, customRates } from '@/content/films';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Brand Films and Testimonial Videos in DFW',
  description: 'Testimonials, brand story films, and monthly video for DFW businesses and nonprofits. Planned, shot, and edited by Dean Draper. Projects from $1,500. Monthly plans from $800.',
  alternates: { canonical: '/business/films' },
};

export default function FilmsPage() {
  const offers = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Brand Films by Sharp Sighted Photos',
    itemListElement: films.map((f) => ({
      '@type': 'Offer', name: f.name, description: `${f.what} ${f.gets}`, price: f.rate.replace(/[^0-9]/g, ''), priceCurrency: 'USD', url: 'https://sharpsighted.photos/business/films',
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offers) }} />
      <BzNav current="films" />
      <main id="main" className="films">
        {/* 1. Hero: program monitor */}
        <section className="band hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="stack">
              <p className="eyebrow">Brand Films · Dallas Fort Worth</p>
              <h1 id="hero-title">Films that make people trust your business.</h1>
              <p className="lede muted">Testimonials, brand stories, and monthly video for DFW businesses. I plan it, shoot it, and edit it myself.</p>
              <p className="anchor">Projects start at <b>$1,500</b>. Monthly plans start at <b>$800 a month</b>.</p>
              <div className="actions">
                <a className="btn n12" href={site.connectionCall}>Hold a January date <span className="arrow" aria-hidden="true">→</span></a>
                <a className="link" href={site.connectionCall}>Book a free Connection Call</a>
              </div>
            </div>
            <ProgramMonitor />
          </div>
        </section>

        {/* 2. Stakes: media offline */}
        <section className="band stakes" aria-labelledby="stakes-title" style={{ background: 'var(--surface)' }}>
          <div className="wrap two">
            <div className="panel n18 bar" role="img" aria-label="An editing program showing a red Media Offline screen, meaning the story is missing">
              <div className="panel-head" aria-hidden="true"><span className="tab">Program · Your_Story.mov</span><span className="meta">Missing</span></div>
              <div className="offline" aria-hidden="true"><b>Media Offline</b><span>Your_Story.mov</span></div>
            </div>
            <div className="stack">
              <p className="eyebrow">The problem</p>
              <h2 id="stakes-title">You&apos;ve lived the story. Nobody has seen it yet.</h2>
              <p className="muted">You fight for a cause, or you built something most people would have quit. But telling that story on camera feels impossible.</p>
              <p className="muted">So your website gets a logo and a stock photo. People scroll right past, and they never learn why you matter.</p>
            </div>
          </div>
        </section>

        {/* 3. Value: markers */}
        <section className="band" aria-labelledby="value-title">
          <div className="wrap">
            <div className="stack" style={{ gap: 10 }}><p className="eyebrow">What changes</p><h2 id="value-title">Your story, finally on screen.</h2></div>
            <ul className="markers">
              <li className="n18 bar"><span className="mk" style={{ '--mk': '#C8F031' } as React.CSSProperties} aria-hidden="true">Marker 01</span><h3>People trust you before they call.</h3><p className="muted">They have already seen your face and heard your voice. The first call starts warm.</p></li>
              <li className="n18 bar"><span className="mk" style={{ '--mk': '#5BA4D8' } as React.CSSProperties} aria-hidden="true">Marker 02</span><h3>Your story does the selling.</h3><p className="muted">A real story moves people in a way a sales pitch never will. Donors give. Clients book.</p></li>
              <li className="n18 bar"><span className="mk" style={{ '--mk': '#B49BE0' } as React.CSSProperties} aria-hidden="true">Marker 03</span><h3>You never have to fake it.</h3><p className="muted">No script and no acting. I ask good questions, and you answer like yourself.</p></li>
            </ul>
          </div>
        </section>

        {/* 4. Guide: source monitor and review */}
        <section className="band" aria-labelledby="guide-title" style={{ background: 'var(--surface)' }}>
          <div className="wrap two">
            <div className="stack">
              <p className="eyebrow">Your guide</p>
              <h2 id="guide-title">Most people freeze when the camera turns on. I get it.</h2>
              <p className="muted">I&apos;m Dean. I spend my days helping people relax in front of a lens. On shoot day, I ask questions like we&apos;re talking over coffee. Most people forget the cameras are even there.</p>
              <div className="review n12 bar">
                <span className="stars" aria-label="Five stars">★★★★★</span>
                <p className="quote">Leslie&apos;s Google review goes here.</p>
                <p className="who">Leslie Hamilton, Twelfth Step Ministry</p>
              </div>
            </div>
            <figure className="panel n18 bar src" style={{ margin: 0 }}>
              <div className="panel-head"><span className="tab">Source · TSM_Giving_Day_01</span><span className="meta">Client film</span></div>
              <div className="viewer poster">
                <Image src="/images/web/discovery.webp" width={1024} height={1024} alt="Placeholder still for the Twelfth Step Ministry film" sizes="(min-width: 900px) 560px, 90vw" />
                <span className="play" aria-hidden="true">▶</span><span className="tc">00:00:00:00</span>
              </div>
              <figcaption className="src-cap"><b>Twelfth Step Ministry</b><span>Three films for North Texas Giving Day. The real film goes here.</span></figcaption>
            </figure>
          </div>
        </section>

        {/* 5. Plan: timeline */}
        <section className="band" aria-labelledby="time-title">
          <div className="wrap">
            <div className="stack" style={{ gap: 10 }}><p className="eyebrow">How it works</p><h2 id="time-title">Three steps from coffee to final cut.</h2></div>
            <div className="panel timeline n18 bar">
              <span aria-hidden="true" />
              <div className="ruler" aria-hidden="true">
                <span style={{ left: 0 }}>01:00:00:00</span><span style={{ left: '20%' }}>01:00:30:00</span><span style={{ left: '40%' }}>01:01:00:00</span><span style={{ left: '60%' }}>01:01:30:00</span><span style={{ left: '80%' }}>01:02:00:00</span>
                <i className="marker" style={{ left: '44%' }} /><i className="marker" style={{ left: '78%' }} />
              </div>
              <span className="track-label" aria-hidden="true">V2</span>
              <div className="lane titles" aria-hidden="true"><span className="t n8">Your name on screen</span></div>
              <span className="track-label v" aria-hidden="true">V1</span>
              <ol className="lane clips-v">
                <li className="clip n8"><span className="step">Step 1</span><h3>Discovery Hour</h3><p>We sit down over coffee for an hour. You tell me the story, and we plan the shoot together.</p></li>
                <li className="clip n8 now"><span className="step">Step 2 · Shoot day</span><h3>Shoot day</h3><p>Half a day on site with three cameras. You talk like yourself. I handle the rest.</p></li>
                <li className="clip n8"><span className="step">Step 3</span><h3>Cut and deliver</h3><p>I edit the films. You get two rounds of changes. Final films arrive with a posting kit.</p></li>
              </ol>
              <span className="track-label" aria-hidden="true">A1</span>
              <div className="wave n8" aria-hidden="true" />
              <span className="track-label" aria-hidden="true">A2</span>
              <div className="music n8" aria-hidden="true" />
              <span className="playhead-rail" aria-hidden="true"><span className="playhead" /></span>
            </div>
          </div>
        </section>

        {/* 6. Prices: media pool */}
        <section className="band" aria-labelledby="pool-title" id="prices">
          <div className="wrap">
            <div className="section-head">
              <div className="stack" style={{ gap: 10 }}><p className="eyebrow">Media pool · Prices</p><h2 id="pool-title">Pick a film. See what it costs.</h2></div>
              <p className="muted" style={{ maxWidth: '36ch' }}>Founding rates run through December 25, 2026. After that, list prices apply. {site.taxNote}</p>
            </div>
            <MediaPool />
            <div className="pool-wrap" style={{ marginTop: 16 }}>
              <div className="panel n18">
                <div className="panel-head"><span className="tab">Export Preset · Every Film</span><span className="meta">Included</span></div>
                <ul className="preset">{everyFilm.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="panel n18 bar">
                <div className="panel-head"><span className="tab">Custom Build</span><span className="meta">À la carte</span></div>
                <dl className="rates">{customRates.map((r) => <div key={r.name}><dt>{r.name}</dt><dd>{r.price}</dd></div>)}</dl>
                <p className="fine">Travel is free within 30 miles of Denton.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Nonprofits */}
        <section className="band np-band" aria-labelledby="np-title">
          <div className="wrap">
            <div className="np n18 bar">
              <div className="stack" style={{ gap: 12 }}>
                <p className="eyebrow">For nonprofits</p>
                <h2 id="np-title">Have a cause? Let&apos;s tell it.</h2>
                <p className="muted">Nonprofits get 20% off list prices. I can plan around your Giving Day, your gala, or your next campaign.</p>
              </div>
              <a className="btn n12" href={site.connectionCall}>Book a free Connection Call <span className="arrow" aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        {/* 8. Shoot day: slate */}
        <section className="band" aria-labelledby="slate-title" style={{ background: 'var(--surface)' }}>
          <div className="wrap slate-wrap">
            <div className="stack">
              <p className="eyebrow">Shoot day</p>
              <h2 id="slate-title">Everything is planned before we roll.</h2>
              <p className="muted">Before we film, we sit down for a Discovery Hour over coffee. You tell me the story. We pick who talks, where we film, and what matters most. I write the questions.</p>
              <p className="muted">On shoot day, I bring three cameras, lights, and clean audio to your location in Dallas Fort Worth. Most people are nervous on camera. That&apos;s normal, and it fades fast.</p>
              <p className="muted">You talk like yourself. I handle the rest.</p>
            </div>
            <div className="clapper-board">
              <div className="sticks" aria-hidden="true"><span className="stick stick-top" /><span className="stick stick-bottom" /><span className="hinge" /></div>
              <div className="board">
                <div className="row"><div className="cell"><span className="k">PRODUCTION</span><span className="v">Your Brand Story</span></div></div>
                <div className="row" style={{ '--cols': 3 } as React.CSSProperties}><div className="cell"><span className="k">ROLL</span><span className="v">A001</span></div><div className="cell"><span className="k">SCENE</span><span className="v">1</span></div><div className="cell"><span className="k">TAKE</span><span className="v">1</span></div></div>
                <div className="row" style={{ '--cols': 2 } as React.CSSProperties}><div className="cell"><span className="k">DIRECTOR</span><span className="v">Dean Draper</span></div><div className="cell"><span className="k">CAMERAS</span><span className="v">Three</span></div></div>
                <div className="row" style={{ '--cols': 2, borderBottom: 0 } as React.CSSProperties}><div className="cell"><span className="k">SHOOT</span><span className="v">January</span></div><div className="cell"><span className="k">BOOK BY</span><span className="v">Dec 25</span></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Closing: render queue */}
        <section className="band close-band" aria-labelledby="close-title">
          <div className="wrap" style={{ display: 'block' }}>
            <div className="close-row">
              <div>
                <p className="eyebrow">Render queue</p>
                <h2 id="close-title">Your film is next in line.</h2>
                <p className="muted">Founding rates end December 25. Book now and shoot in January. Monthly plans keep the founding rate for 12 months.</p>
              </div>
              <div className="actions">
                <a className="btn light n12" href={site.connectionCall}>Hold a January date <span className="arrow" aria-hidden="true">→</span></a>
                <a className="link on-dark" href={site.connectionCall}>Book a free Connection Call</a>
              </div>
            </div>
            <div className="panel queue n18" aria-hidden="true">
              <div className="panel-head"><span className="tab">Render Queue</span><span className="meta">1 job</span></div>
              <div className="job"><span className="name">Job 01 · Your_Brand_Story.mov</span><span className="status">Waiting for a shoot date</span><span className="progress"><span /></span></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
