'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

type Shot = { src: string; width: number; height: number; flip?: boolean };
const strips: { lead: string; start: number; shots: Shot[] }[] = [
  { lead: 'SS 400', start: 12, shots: [
    { src: '/images/web/portrait2.webp', width: 1143, height: 1600 },
    { src: '/images/web/portrait5.webp', width: 1600, height: 1143 },
    { src: '/images/web/hero.webp', width: 1600, height: 1236 },
    { src: '/images/web/portrait2.webp', width: 1143, height: 1600, flip: true },
  ] },
  { lead: 'SS 400', start: 22, shots: [
    { src: '/images/web/portrait3.webp', width: 1143, height: 1600 },
    { src: '/images/web/portrait5.webp', width: 1600, height: 1143, flip: true },
    { src: '/images/web/portrait2.webp', width: 1143, height: 1600 },
    { src: '/images/web/hero.webp', width: 1600, height: 1236, flip: true },
  ] },
];

// The loupe follows the pointer. It reads the frame positions once (and again on resize or scroll),
// then updates at most once per screen refresh using transform only, so it stays smooth.
export default function LightTable() {
  const tableRef = useRef<HTMLDivElement>(null);
  const loupeRef = useRef<HTMLSpanElement>(null);
  const lensRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const table = tableRef.current, loupe = loupeRef.current, lens = lensRef.current;
    if (!table || !loupe || !lens || !window.matchMedia('(pointer: fine)').matches) return;
    const zoom = 2.6;
    type Box = { el: HTMLImageElement; l: number; t: number; w: number; h: number; dw: number; dh: number; ox: number; oy: number; flip: boolean; url: string };
    let boxes: Box[] = [];
    let tableRect = table.getBoundingClientRect();
    let size = loupe.offsetWidth;
    let inner = loupe.clientWidth;
    let current: Box | null = null;
    let px = 0, py = 0, frame = 0;

    const measure = () => {
      tableRect = table.getBoundingClientRect();
      size = loupe.offsetWidth;
      inner = loupe.clientWidth;
      boxes = Array.from(table.querySelectorAll<HTMLImageElement>('img')).map((el) => {
        const r = el.getBoundingClientRect();
        const nw = el.naturalWidth || r.width, nh = el.naturalHeight || r.height;
        const s = Math.max(r.width / nw, r.height / nh);
        const dw = nw * s, dh = nh * s;
        return { el, l: r.left - tableRect.left, t: r.top - tableRect.top, w: r.width, h: r.height, dw, dh,
          ox: (r.width - dw) * 0.5, oy: (r.height - dh) * 0.25, flip: el.dataset.flip === '1', url: el.currentSrc || el.src };
      });
    };

    const draw = () => {
      frame = 0;
      loupe.style.transform = `translate3d(${px - size / 2}px, ${py - size / 2}px, 0)`;
      const hit = boxes.find((b) => px >= b.l && px <= b.l + b.w && py >= b.t && py <= b.t + b.h);
      if (!hit) return;
      if (hit !== current) {
        current = hit;
        lens.style.backgroundImage = `url("${hit.url}")`;
        lens.style.backgroundSize = `${hit.dw * zoom}px ${hit.dh * zoom}px`;
        lens.classList.toggle('flipped', hit.flip);
      }
      const x = (hit.flip ? hit.l + hit.w - px : px - hit.l) - hit.ox;
      const y = py - hit.t - hit.oy;
      lens.style.backgroundPosition = `${inner / 2 - x * zoom}px ${inner / 2 - y * zoom}px`;
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX - tableRect.left;
      py = e.clientY - tableRect.top;
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const onEnter = () => { measure(); loupe.classList.add('live'); };
    const onResize = () => measure();

    table.addEventListener('pointerenter', onEnter);
    table.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, { passive: true });
    return () => {
      table.removeEventListener('pointerenter', onEnter);
      table.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div>
      <div className="table" ref={tableRef} role="img" aria-label="Sample film strips of headshots on a light table">
        {strips.map((strip, si) => (
          <div className="film" aria-hidden="true" key={si}>
            <ul className="frames">
              {strip.shots.map((s, i) => (
                <li key={i}>
                  <Image src={s.src} width={s.width} height={s.height} alt="" sizes="160px" className={s.flip ? 'flip' : undefined} data-flip={s.flip ? '1' : undefined} priority={si === 0 && i === 0} />
                  <span className="edge">{i === 0 ? `${strip.lead} ▸ ${strip.start}` : `▸ ${strip.start + i}`}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <span className="loupe" ref={loupeRef} aria-hidden="true"><span className="lens" ref={lensRef} /></span>
      </div>
      <p className="table-note">Move your pointer over the light table to use the loupe.</p>
    </div>
  );
}
