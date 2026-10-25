import Link from 'next/link';
import { site } from '@/content/site';

export default function PsFooter() {
  return (
    <footer className="ps-foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <span className="tag">Sharp Sighted</span>
          <span className="tag-line">{site.tagline}</span>
        </div>
        <nav aria-label="Footer">
          <p className="f-h">For You</p>
          <Link href="/portraits">Story Portraits</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/gift">Gift Sessions</Link>
          <Link href="/business">For Your Business</Link>
        </nav>
        <div>
          <p className="f-h">Service area</p>
          <p>{site.serviceArea}</p>
        </div>
        <div className="foot-contact">
          <p className="f-h">Say hello</p>
          <a href={site.connectionCall}>Book a free Connection Call</a>
          <a href={site.phoneHref}>{site.phoneDisplay}, text preferred</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="wrap fine-print">Sharp Sighted Photos is a branch of Sharp Sighted Studio LLC.</div>
    </footer>
  );
}
