'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

// The hero program monitor. The timecode ticks at 24 frames a second while it is on screen.
export default function ProgramMonitor() {
  const tcRef = useRef<HTMLSpanElement>(null);
  const headRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const tc = tcRef.current, head = headRef.current;
    if (!tc || !head || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let f = 12 * 24 + 8, last = 0, visible = true, raf = 0;
    const io = new IntersectionObserver((e) => { visible = e[0].isIntersecting; });
    io.observe(tc);
    const pad = (n: number) => String(n).padStart(2, '0');
    const tick = (t: number) => {
      if (visible && t - last > 1000 / 24) {
        last = t;
        f = (f + 1) % (150 * 24);
        const s = Math.floor(f / 24);
        tc.textContent = `01:0${Math.floor(s / 60)}:${pad(s % 60)}:${pad(f % 24)}`;
        head.style.transform = `translate3d(${((f / (150 * 24)) * 56 + 18).toFixed(2)}cqw, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    // Wait until the page has painted and gone idle, so the clock never slows the first view.
    const go = () => { raf = requestAnimationFrame(tick); };
    const idle = typeof window.requestIdleCallback === 'function';
    const handle = idle ? window.requestIdleCallback(go, { timeout: 2500 }) : window.setTimeout(go, 1500);
    return () => {
      if (idle) window.cancelIdleCallback(handle); else window.clearTimeout(handle);
      cancelAnimationFrame(raf); io.disconnect();
    };
  }, []);
  return (
    <div className="panel n18 bar" role="img" aria-label="A sample brand film paused in an editing program">
      <div className="panel-head" aria-hidden="true"><span className="tab">Program · Brand_Story_v3</span><span className="meta">4K · 23.976</span></div>
      <div className="viewer" aria-hidden="true">
        <Image src="/images/web/story.webp" width={1400} height={933} alt="" sizes="(min-width: 900px) 600px, 90vw" priority />
        <span className="safe action" /><span className="safe title" />
        <span className="tc" ref={tcRef}>01:00:12:08</span>
        <div className="lower"><b>You, as yourself</b><span>No script. No acting. Just you.</span></div>
      </div>
      <div className="scrub" aria-hidden="true"><span className="range" /><span className="in" /><span className="out" /><span className="head" ref={headRef} /></div>
      <div className="transport" aria-hidden="true">
        <div className="keys"><span>⏮</span><span>◀</span><span className="on">▶</span><span>⏭</span></div>
        <span className="tc">01:00:12:08 / 01:02:30:00</span>
      </div>
    </div>
  );
}
