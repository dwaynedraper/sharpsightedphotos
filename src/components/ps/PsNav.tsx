import Link from 'next/link';
import { site, cta } from '@/content/site';

type Current = 'portraits' | 'gallery' | 'gift' | 'contact' | undefined;

export default function PsNav({ current }: { current?: Current }) {
  const links: { key: Current; href: string; label: string }[] = [
    { key: 'portraits', href: '/portraits', label: 'Story Portraits' },
    { key: 'gallery', href: '/gallery', label: 'Gallery' },
    { key: 'gift', href: '/gift', label: 'Gift Sessions' },
    { key: 'contact', href: '/contact', label: 'Contact' },
  ];
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="top">
        <div className="wrap">
          <Link className="brand" href="/">Sharp Sighted</Link>
          <div className="head-right">
            <nav aria-label="Main">
              {links.map((l) => (
                <Link key={l.href} href={l.href} aria-current={current === l.key ? 'page' : undefined}>{l.label}</Link>
              ))}
              <Link href="/business" className="side-switch">For Your Business</Link>
            </nav>
            <a className="btn btn-main head-cta" href={site.connectionCall}>{cta.call}</a>
          </div>
        </div>
      </header>
    </>
  );
}
