import type { Metadata } from 'next';
import PsNav from '@/components/ps/PsNav';
import { TicketStub } from '@/components/ps/Tickets';
import { giftRequestLink, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Gift Sessions',
  description: 'Give a story portrait session in DFW. Verse and Story Gift Sessions with framed prints included. Founding rates through December 25, 2026.',
  alternates: { canonical: '/gift' },
};

const cards = [
  {
    name: 'The Verse',
    price: '$900',
    line: 'A focused chapter, in one place that feels like them.',
    items: [
      'The Discovery Hour, an unhurried conversation about who they are',
      'A 2-hour session at one location',
      '2 outfits',
      '10 unique, hand-edited images',
      'A framed triptych of three 8.5×11 prints',
      'Story cards, every image as a 4×6 print in a box',
      'Online gallery with downloads',
    ],
  },
  {
    name: 'The Story',
    price: '$1,700',
    line: 'Room to breathe, across the places that tell their story.',
    items: [
      'The Discovery Hour, an unhurried conversation about who they are',
      'Up to 6 hours across multiple locations',
      'Unlimited outfits',
      '20 unique, hand-edited images',
      'A framed 13×19 hero print and four framed 8.5×11 prints',
      'Story cards, every image as a 4×6 print in a box',
      'A private, in-person reveal',
    ],
  },
];

const steps = [
  { title: 'Request a ticket', text: 'Send me the details. Tell me who it is for and whether you want a printed or a digital ticket.' },
  { title: 'Pay the link', text: 'Gift Sessions are paid in full, plus Texas sales tax. The ticket is made once payment clears.' },
  { title: 'They open it', text: 'Printed tickets are made on fine art paper and delivered by December 18. Digital tickets can go out as late as Christmas morning.' },
  { title: 'They book', text: 'It starts with the Discovery Hour. The session happens anytime through March 31, 2027.' },
];

const wire = (
  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M44 0 L0 100 M56 0 L100 100" stroke="#151A33" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none" />
  </svg>
);

export default function GiftPage() {
  return (
    <>
      <PsNav current="gift" />
      <main id="main">
        <section className="band wall" aria-labelledby="gift-hero">
          <div className="wrap two">
            <div className="stack">
              <p className="eyebrow">Gift Sessions</p>
              <h1 id="gift-hero">Some gifts get used up. This one gets framed.</h1>
              <p className="lede muted">Give someone a story portrait session in Dallas Fort Worth. Every Gift Session includes the hand-edited images and the framed prints they will hang on their wall.</p>
              <p className="anchor">Founding rates through <b>December 25, 2026</b>.</p>
              <div className="actions">
                <a className="btn btn-main" href={giftRequestLink}>Request a Gift Session</a>
                <a className="btn btn-soft" href={site.phoneHref}>Call or text {site.phoneDisplay}</a>
              </div>
            </div>
            <div className="tickets">
              {cards.map((c) => (
                <div className="ticket" key={c.name}>
                  <TicketStub />
                  <div className="ticket-body">
                    <span className="good">Good for one session</span>
                    <h2 className="ticket-name">{c.name}</h2>
                    <p className="muted">{c.line}</p>
                    <span className="price">{c.price} <small>plus tax</small></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band" aria-labelledby="gift-inc">
          <div className="wrap">
            <div className="stack" style={{ gap: 10 }}>
              <p className="eyebrow">What they get</p>
              <h2 id="gift-inc">Everything, framed and ready to hang.</h2>
            </div>
            <div className="gift-cards">
              {cards.map((c) => (
                <article className="gift-card" key={c.name}>
                  <h3>{c.name}</h3>
                  <p className="gift-price">{c.price} <span>plus tax</span></p>
                  <ul>{c.items.map((x) => <li key={x}>{x}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="pkg-note muted">A unique image means a new angle, distance, or framing. Three camera adjustments in the same spot and outfit count as one image.</p>
          </div>
        </section>

        <section className="band wall" aria-labelledby="gift-steps">
          <div className="wrap">
            <div className="stack" style={{ gap: 10 }}>
              <p className="eyebrow">How it works</p>
              <h2 id="gift-steps">From your inbox to their wall.</h2>
            </div>
            <div className="rail-wrap">
              <div className="rail" aria-hidden="true" />
              <ol className="steps">
                {steps.map((s, i) => (
                  <li key={s.title}>
                    <span className="hook" aria-hidden="true" />
                    <span className="wires" aria-hidden="true">{wire}</span>
                    <span className="num">Step {i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="band closing" aria-labelledby="gift-close">
          <div className="wrap closing-inner">
            <h2 id="gift-close">Ready to give one?</h2>
            <p className="muted">Email me, or call or text {site.phoneDisplay}.</p>
            <div className="actions"><a className="btn btn-main" href={giftRequestLink}>Request a Gift Session</a></div>
            <p className="fine muted">Gift Sessions are paid in full and are good for one session of the type shown. They are not refundable. Sessions take place in the Dallas Fort Worth area by March 31, 2027.</p>
          </div>
        </section>
      </main>
    </>
  );
}
