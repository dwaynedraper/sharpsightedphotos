'use client';

import { useEffect } from 'react';
import { plausible } from '@/lib/plausible';

// Keeps the old analytics events without wiring every button by hand.
// Any click on a Connection Call link sends "connection_call_clicked" with the page and section.
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const section = a.closest('section')?.getAttribute('aria-labelledby') || a.closest('header, footer')?.tagName.toLowerCase() || 'page';
      if (href.includes('connection-call')) plausible('connection_call_clicked', { props: { section, page: location.pathname } });
      else if (href.startsWith('mailto:') && href.includes('Gift')) plausible('gift_card_requested', { props: { page: location.pathname } });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
