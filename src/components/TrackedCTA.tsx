'use client';

import { plausible } from '@/lib/plausible';

interface TrackedCTAProps {
  href: string;
  className?: string;
  event: string;
  section: string;
  children: React.ReactNode;
}

export default function TrackedCTA({ href, className, event, section, children }: TrackedCTAProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => plausible(event, { props: { section } })}
    >
      {children}
    </a>
  );
}
