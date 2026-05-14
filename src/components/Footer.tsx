'use client';

import Link from 'next/link';

const PROPERTIES = [
  { label: 'Photos', domain: 'sharpsighted.photos', href: 'https://sharpsighted.photos', color: '#38bdf8', active: true },
  { label: 'Media', domain: 'sharpsighted.media', href: 'https://sharpsighted.media', color: '#c9922a', active: false },
  { label: 'Studio', domain: 'sharpsighted.studio', href: 'https://sharpsighted.studio', color: '#a0462a', active: false },
  { label: 'Hub', domain: 'sharpsightedstudio.com', href: 'https://sharpsightedstudio.com', color: '#38bdf8', active: false },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-navy-990 border-t border-navy-100 dark:border-navy-950 transition-colors duration-300">
      <div className="max-w-360 mx-auto py-16 px-6 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Brand block */}
        <div className="flex flex-col gap-2">
          <div
            className="font-sans text-sm font-bold tracking-widest uppercase"
            style={{ color: '#38bdf8' }}
          >
            Sharp Sighted
          </div>
          <p className="font-serif font-light italic text-sm text-navy-500 dark:text-navy-300">
            Stay Sharp. Stay Seen. Stay Human.
          </p>
          <a
            href="https://sharpsightedstudio.com/?reset=true"
            className="text-[0.72rem] tracking-widest uppercase font-light text-navy-400 dark:text-navy-400 hover:text-cyan-500 transition-colors mt-1"
          >
            Switch site →
          </a>
        </div>

        {/* Property list */}
        <div className="flex flex-col gap-2">
          <div className="text-[0.65rem] tracking-widest uppercase font-light text-navy-400 dark:text-navy-500 mb-1">
            Properties
          </div>
          {PROPERTIES.map((prop) => (
            <PropertyRow key={prop.label} prop={prop} />
          ))}
        </div>

        {/* Site nav + copyright */}
        <div className="flex flex-col gap-4 items-start md:items-end">
          <div className="flex flex-wrap gap-6 text-xs font-light tracking-widest uppercase text-navy-600 dark:text-navy-300">
            <Link href="/gallery" className="hover:text-cyan-500 transition-colors">Gallery</Link>
            <Link href="/storyportraits" className="hover:text-cyan-500 transition-colors">Story Portraits</Link>
            <Link href="/headshots" className="hover:text-cyan-500 transition-colors">Headshots</Link>
            <Link href="/contact" className="hover:text-cyan-500 transition-colors">Contact</Link>
          </div>
          <div className="text-navy-500 text-[10px] tracking-widest uppercase font-light">
            &copy; {new Date().getFullYear()} Sharp Sighted Photos. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

function PropertyRow({ prop }: { prop: typeof PROPERTIES[number] }) {
  const content = (
    <span className="flex items-center gap-2 text-[0.72rem] tracking-[0.05em] font-light">
      {prop.active ? (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: prop.color }}
          aria-hidden="true"
        />
      ) : (
        <span className="inline-block w-1.5 h-1.5 shrink-0" aria-hidden="true" />
      )}
      <span className="text-navy-700 dark:text-navy-200">{prop.label}</span>
      <span className="text-navy-400 dark:text-navy-500">{prop.domain}</span>
      {!prop.active && <span className="text-navy-400 dark:text-navy-500">→</span>}
    </span>
  );

  if (prop.active) {
    return <div>{content}</div>;
  }

  return (
    <a
      href={prop.href}
      className="group transition-colors"
      style={{}}
      onMouseEnter={(e) => {
        const spans = (e.currentTarget as HTMLAnchorElement).querySelectorAll('span');
        spans.forEach((s) => ((s as HTMLElement).style.color = prop.color));
      }}
      onMouseLeave={(e) => {
        const spans = (e.currentTarget as HTMLAnchorElement).querySelectorAll('span');
        spans.forEach((s) => ((s as HTMLElement).style.color = ''));
      }}
    >
      {content}
    </a>
  );
}
