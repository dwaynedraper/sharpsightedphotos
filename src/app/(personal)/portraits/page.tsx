import type { Metadata } from 'next';
import Link from 'next/link';
import PsNav from '@/components/ps/PsNav';
import Photo from '@/components/ps/Photo';
import PhotoCard, { icons } from '@/components/ps/PhotoCard';
import HeirloomBook from '@/components/ps/HeirloomBook';
import Hallway from '@/components/ps/Hallway';
import Tickets from '@/components/ps/Tickets';
import { packages, portraitFaq } from '@/content/portraits';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Story Portraits in DFW',
  description: 'Story portraits for people who hate posing. You tell your story, and Dean photographs you living it. On location across Dallas Fort Worth. Sessions from $900.',
  alternates: { canonical: '/portraits' },
};

const wire = (
  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M44 0 L0 100 M56 0 L100 100" stroke="#151A33" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none" />
  </svg>
);

const steps = [
  { title: 'Connection Call', meta: '15 minutes · Free', text: "A short call to see if we're a fit. Ask anything you still want to know." },
  { title: 'Discovery Hour', meta: 'Over coffee or drinks', text: 'You tell me your story, and we plan the scene together. The $200 goes toward your session when you book within 30 days.' },
  { title: 'Session and prints', meta: 'Where your story lives', text: 'We shoot where you feel like yourself. I edit every image by hand, then choose your framed prints from the full spread.' },
];

export default function PortraitsPage() {
  const offers = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Story Portrait Sessions by Sharp Sighted Photos',
    itemListElement: packages.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      price: p.price.replace(/[$,]/g, ''),
      priceCurrency: 'USD',
      url: 'https://sharpsighted.photos/portraits',
      description: p.includes.join('. '),
    })),
  };
  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: portraitFaq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offers) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <PsNav current="portraits" />
      <main id="main">
        {/* 1. Hero: the crooked frame */}
        <section className="band wall hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="hero-text stack">
              <p className="eyebrow">Story Portraits · Dallas Fort Worth</p>
              <h1 id="hero-title">Story portraits for people who hate posing.</h1>
              <p className="lede muted">No stiff poses. No cookie-cutter setups. You tell me your story, and I photograph you living it.</p>
              <p className="anchor">Sessions start at <b>$900</b>. Founding rates run through December 25.</p>
              <div className="actions">
                <a className="btn btn-main" href={site.connectionCall}>Book a free Connection Call</a>
                <Link className="btn btn-soft" href="/gift">Give a Gift Session</Link>
              </div>
            </div>
            <div className="hero-art">
              <Photo src="/images/web/story.webp" width={1400} height={933} alt="Two friends bump fists in front of a glowing fireplace" sizes="(min-width: 900px) 540px, 92vw" priority />
            </div>
          </div>
        </section>

        {/* 2. Stakes */}
        <section className="band" aria-labelledby="stakes-title">
          <div className="wrap two">
            <div className="posed" aria-hidden="true">
              <div className="frame">
                <span className="mat"><span className="bevel"><span className="posed-text">Chin down. Turn left. Now smile.</span></span></span>
              </div>
              <p className="plaque"><b>Untitled (Posed)</b><span>The portrait everyone else gets</span></p>
            </div>
            <div className="stack">
              <p className="eyebrow">The problem</p>
              <h2 id="stakes-title">Most photographers tell you how to pose.</h2>
              <p className="muted">Stand here. Chin down. Now smile. You end up with photos that look fine and feel like someone else.</p>
              <p className="muted">You have seen that portrait a thousand times. Same light, same three poses, same forced smile. You don&apos;t recognize yourself in it.</p>
            </div>
          </div>
        </section>

        {/* 3. Value */}
        <section className="band wall" aria-labelledby="value-title">
          <div className="wrap">
            <div className="stack" style={{ gap: 10 }}>
              <p className="eyebrow">What you get</p>
              <h2 id="value-title">Photos of you doing what you love.</h2>
            </div>
            <ul className="values">
              <li>
                <PhotoCard image={{ src: '/images/web/vp-location.webp', width: 500, height: 666, alt: 'A portrait session on location' }} badge={icons.place}>
                  <h3>Wherever your story lives</h3>
                  <p className="muted">A workshop, a rooftop, a chess table in the park. The place is part of the story, so that is where we shoot.</p>
                </PhotoCard>
              </li>
              <li>
                <PhotoCard image={{ src: '/images/web/vp-schedule.webp', width: 500, height: 333, alt: 'A portrait session after dark' }} badge={icons.time}>
                  <h3>On your schedule</h3>
                  <p className="muted">Sunrise, midday, or after dark. We shoot when you are most yourself, not when it suits a calendar.</p>
                </PhotoCard>
              </li>
              <li>
                <PhotoCard image={{ src: '/images/web/vp-discovery.webp', width: 500, height: 749, alt: 'Planning a session over coffee' }} badge={icons.story}>
                  <h3>A story, not a pose</h3>
                  <p className="muted">You tell me what is happening. I stage the scene, you live it, and I catch the moment.</p>
                </PhotoCard>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Guide */}
        <section className="band" aria-labelledby="guide-title">
          <div className="wrap two">
            <div className="stack">
              <p className="eyebrow">Your photographer</p>
              <h2 id="guide-title">I won&apos;t hand you a list of poses.</h2>
              <p className="muted">I&apos;m Dean. I ask you to be yourself and ignore the camera. You tell me your story in real time. I stage a scene around it, then get out of the way.</p>
              <p className="muted">I have spent over a decade learning to shoot anywhere, in any light. I&apos;m also neurodivergent, so I know what it is like to need direct communication and real accommodation.</p>
              <p className="pull">Never my idea of what an image should be. Always yours.</p>
              <p className="sig"><b>Dean Draper</b><span>Visual Biographer</span></p>
            </div>
            <div className="guide-art">
              <Photo src="/images/web/portrait3.webp" width={1143} height={1600} alt="Dean Draper kneeling with a black dog on a white backdrop" sizes="(min-width: 900px) 460px, 92vw" />
            </div>
          </div>
        </section>

        {/* 5. Plan: the picture rail */}
        <section className="band wall" aria-labelledby="rail-title">
          <div className="wrap">
            <div className="stack" style={{ gap: 10 }}>
              <p className="eyebrow">How it works</p>
              <h2 id="rail-title">Three steps to your story portraits.</h2>
            </div>
            <div className="rail-wrap">
              <div className="rail" aria-hidden="true" />
              <ol className="steps steps-3">
                {steps.map((s, i) => (
                  <li key={s.title}>
                    <span className="hook" aria-hidden="true" />
                    <span className="wires" aria-hidden="true">{wire}</span>
                    <span className="num">Step {i + 1} · {s.meta}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 6. Packages: wall labels */}
        <section className="band" aria-labelledby="pkg-title" id="packages">
          <div className="wrap">
            <div className="section-head">
              <div className="stack" style={{ gap: 10 }}>
                <p className="eyebrow">Sessions and prices</p>
                <h2 id="pkg-title">Three ways to tell your story.</h2>
              </div>
              <p className="note muted">Founding rates through December 25, 2026. {site.taxNote}</p>
            </div>
            <ul className="pkgs">
              {packages.map((p) => (
                <li className="pkg" key={p.name}>
                  <PhotoCard image={p.image} badge={p.price} badgeLabel={`${p.price} founding rate`}>
                    <h3>{p.name}</h3>
                    <span className="medium">Story portrait session</span>
                    <span className="count">{p.count}</span>
                    <details className="includes">
                      <summary>What&apos;s included</summary>
                      <ul>{p.includes.map((x) => <li key={x}>{x}</li>)}</ul>
                    </details>
                  </PhotoCard>
                </li>
              ))}
            </ul>
            <p className="pkg-note muted">Every session includes the Discovery Hour, full retouching, and a proof spread. A unique image means a new angle, distance, or framing.</p>
          </div>
        </section>

        {/* 7. The gallery hallway */}
        <Hallway />

        {/* 8. Explanatory: the Discovery Hour and the pieces */}
        <section className="band" aria-labelledby="disc-title">
          <div className="wrap two">
            <div className="disc-art">
              <Photo src="/images/web/discovery.webp" width={1024} height={1024} alt="Two people talking over drinks in a warm lounge" sizes="(min-width: 900px) 460px, 92vw" />
            </div>
            <div className="stack">
              <p className="eyebrow">Where the story begins</p>
              <h2 id="disc-title">Every session starts with a Discovery Hour.</h2>
              <p className="muted">Most photographers ask you to step into their studio, stand on their mark, and smile. I ask you to stay in your world.</p>
              <p className="muted">Every session starts with an hour over coffee or drinks. We uncover your story and find the places where you feel most alive. Maybe that is a chess game in the park. Maybe it is a dark whiskey room in your favorite jacket.</p>
              <p className="muted">By the time a camera comes out, we are not strangers anymore. That is when the real you shows up.</p>
            </div>
          </div>
        </section>

        <section className="band wall" aria-labelledby="pieces-title">
          <div className="wrap">
            <div className="stack" style={{ gap: 10 }}>
              <p className="eyebrow">Prints and add-ons</p>
              <h2 id="pieces-title">Prints come with every session. You can add more.</h2>
              <p className="muted pieces-lede">Every session ends in pieces you can hold. No print credits, and no files left sitting on a hard drive.</p>
            </div>
            <ul className="pieces">
              <li>
                <span className="kind">In every session</span>
                <h3>Framed prints</h3>
                <p className="muted">Your story hangs in plain sight for the next twenty years. I choose the images from the full proof spread and design the set to hang together.</p>
              </li>
              <li>
                <span className="kind">In every session</span>
                <h3>Story cards</h3>
                <p className="muted">Every image as a 4×6 print, in a box. Easy to pass around, easy to keep close.</p>
              </li>
              <li>
                <span className="kind">Add-on · <span className="cost">$3,000</span></span>
                <h3>The Disasterpiece</h3>
                <p className="muted">A 40×60 print on ChromaLuxe aluminum, so the image glows. I install it in your home anywhere in DFW.</p>
              </li>
              <li>
                <span className="kind">Add-on</span>
                <h3>Additional prints</h3>
                <p className="muted">Another framed print, a bigger size, or a second box of story cards. Every piece is also sold on its own.</p>
              </li>
            </ul>
            <div className="book-feature">
              <HeirloomBook
                cover={{ src: '/images/web/portrait4.webp', width: 1600, height: 1060, alt: 'A couple smiles on a beach next to a pier' }}
                title="The Heirloom Book"
                line="Open the albums in the gallery"
                href="/gallery"
              />
              <div className="stack">
                <span className="kind">In the Epic · Add to any session</span>
                <h3>The Heirloom Book</h3>
                <p className="muted">A layflat hardcover album of your whole session, made to be passed down. The Epic includes one. You can add one to the Verse or the Story.</p>
                <p className="muted">Every album in the gallery opens the same way. Click a cover and turn through the prints.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Gift Sessions */}
        <section className="band gift" aria-labelledby="gift-title">
          <div className="wrap">
            <div className="stack">
              <p className="eyebrow">Gift Sessions</p>
              <h2 id="gift-title">Give a story portrait session as a gift.</h2>
              <p className="muted">They get a ticket to their own session, good for a Verse or a Story.</p>
              <div><Link className="btn btn-main" href="/gift">Give a Gift Session</Link></div>
            </div>
            <Tickets />
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="band" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <h2 id="faq-title">Questions before you book.</h2>
            <div className="faq">
              {portraitFaq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Closing */}
        <section className="band wall closing" aria-labelledby="close-title">
          <div className="wrap closing-inner">
            <h2 id="close-title">Your story belongs on a wall, not in a camera roll.</h2>
            <p className="muted">Every year, people leave portrait sessions with photos that are fine and forgettable. Yours should look like you.</p>
            <div className="actions">
              <a className="btn btn-main" href={site.connectionCall}>Book a free Connection Call</a>
              <a className="btn btn-soft" href="#packages">See the packages</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
