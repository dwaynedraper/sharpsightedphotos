import Link from 'next/link';
import { site } from '@/content/site';

export default function BzFooter() {
  return (
    <footer className="bz-foot">
      <div className="wrap foot-grid">
        <div className="stack" style={{ gap: 8 }}>
          <span className="tag">Sharp Sighted</span>
          <span className="tag-line">{site.tagline}</span>
        </div>
        <nav aria-label="Footer">
          <p className="f-h">For Your Business</p>
          <Link href="/business/headshots">Headshots</Link>
          <Link href="/business/films">Films</Link>
          <Link href="/portraits">For You</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div>
          <p className="f-h">Service area</p>
          <p>{site.serviceArea}</p>
        </div>
        <div className="foot-contact">
          <p className="f-h">Next step</p>
          <a href={site.connectionCall}>Book a free Connection Call</a>
          <a href={site.phoneHref}>{site.phoneDisplay}, text preferred</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="wrap fine-print">Sharp Sighted Photos is a branch of Sharp Sighted Studio LLC.</div>
    </footer>
  );
}
