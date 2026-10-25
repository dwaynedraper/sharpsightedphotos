'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Subtle reveal: text and cards rise a few pixels and fade in when they cross
// the 75% line of the screen. One IntersectionObserver does all of it.
// It starts when the browser is idle, never measures the page by hand,
// and never hides anything that is already on screen.
const TARGETS = [
  'main h2', 'main .lede', 'main .stack > p', 'main .eyebrow', 'main .anchor',
  'main .values > li', 'main .pkgs > li', 'main .steps > li', 'main .pieces > li', 'main .faq details',
  'main .markers > li', 'main .orders > article', 'main .tickets > .ticket', 'main .clips-v > li',
  'main .sheet', 'main .table', 'main .panel', 'main .np', 'main .review', 'main .door', 'main .clapper-board', 'main .heirloom',
].join(',');

export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    let io: IntersectionObserver | null = null;
    let timer = 0;
    const pending = new Set<Element>();
    const firstSeen = new Set<Element>();

    const start = () => {
      document.documentElement.classList.add('js-motion');
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            const el = e.target;
            if (!firstSeen.has(el)) {
              firstSeen.add(el);
              // First report: anything on screen or above it stays exactly as it is.
              if (e.boundingClientRect.top < window.innerHeight) { io?.unobserve(el); continue; }
              el.setAttribute('data-reveal', '');
              pending.add(el);
              continue;
            }
            if (e.isIntersecting) {
              el.classList.add('is-in');
              io?.unobserve(el);
              pending.delete(el);
            }
          }
        },
        { rootMargin: '0px 0px -25% 0px' },
      );
      const seen = new Set<Element>();
      document.querySelectorAll(TARGETS).forEach((el) => {
        if (seen.has(el) || el.closest('.hall')) return;
        seen.add(el);
        const parent = el.parentElement;
        const i = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
        if (i > 0) (el as HTMLElement).style.transitionDelay = `${Math.min(i, 4) * 60}ms`;
        io?.observe(el);
      });
    };

    // A fast jump can skip past an element. Once scrolling settles, reveal anything above the line.
    const settle = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const cut = window.innerHeight * 0.75;
        pending.forEach((el) => {
          if (el.getBoundingClientRect().top < cut) {
            el.classList.add('is-in');
            io?.unobserve(el);
            pending.delete(el);
          }
        });
      }, 120);
    };

    const idle = typeof window.requestIdleCallback === 'function';
    const handle = idle ? window.requestIdleCallback(start, { timeout: 1200 }) : window.setTimeout(start, 300);
    window.addEventListener('scroll', settle, { passive: true });
    return () => {
      if (idle) window.cancelIdleCallback(handle); else window.clearTimeout(handle);
      io?.disconnect();
      window.removeEventListener('scroll', settle);
      window.clearTimeout(timer);
    };
  }, [pathname]);
  return null;
}
