import Link from 'next/link';
import { site } from '@/content/site';

type Current = 'hub' | 'headshots' | 'films' | undefined;

export default function BzNav({ current }: { current?: Current }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="top">
        <div className="wrap">
          <Link className="brand" href="/">Sharp Sighted</Link>
          <div className="head-right">
            <nav aria-label="Main">
              <Link href="/business" aria-current={current === 'hub' ? 'page' : undefined}>For Your Business</Link>
              <Link href="/business/headshots" aria-current={current === 'headshots' ? 'page' : undefined}>Headshots</Link>
              <Link href="/business/films" aria-current={current === 'films' ? 'page' : undefined}>Films</Link>
              <Link href="/portraits" className="side-switch">For You</Link>
            </nav>
            <a className="btn n12 head-cta" href={site.connectionCall}>Hold a date <span className="arrow" aria-hidden="true">→</span></a>
          </div>
        </div>
      </header>
    </>
  );
}
