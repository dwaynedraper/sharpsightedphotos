'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { hallway } from '@/content/portraits';

// The gallery hallway. Plain CSS scroll-driven animation does the motion.
// This script only measures the wall so the floor and benches travel the right distance.
export default function Hallway() {
  const hallRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const benchRef = useRef<HTMLDivElement>(null);
  const shadeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hall = hallRef.current, track = trackRef.current, benches = benchRef.current, shade = shadeRef.current;
    if (!hall || !track || !benches || !shade) return;
    if (!window.CSS || !CSS.supports('animation-timeline: view()')) return;
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const setup = () => {
      benches.replaceChildren();
      if (!mq.matches) return;
      const td = Math.max(0, track.scrollWidth - window.innerWidth);
      hall.style.setProperty('--td', `${td}px`);
      // One shade over the whole wall. Each light is a soft hole in it, so the wall dims smoothly
      // between frames and past the last frame, with no seams.
      const th = track.clientHeight;
      const holes = Array.from(track.querySelectorAll<HTMLElement>('.frames li:not(.spacer)')).map((li) => {
        const cx = Math.round(li.offsetLeft + li.offsetWidth / 2);
        const rx = Math.round(li.offsetWidth * 0.5 + window.innerWidth * 0.07);
        return `radial-gradient(${rx}px ${Math.round(th * 0.62)}px at ${cx}px ${Math.round(th * 0.36)}px, transparent 0%, transparent 52%, #000 100%)`;
      });
      shade.style.setProperty('mask-image', holes.join(','));
      shade.style.setProperty('-webkit-mask-image', holes.join(','));
      shade.classList.add('on');
      for (let x = window.innerWidth * 0.12; x < td * 1.5 + window.innerWidth; x += window.innerWidth * 1.05) {
        const img = document.createElement('img');
        img.className = 'bench';
        img.src = '/textures/bench.webp';
        img.alt = '';
        img.width = 900;
        img.height = 261;
        img.decoding = 'async';
        img.style.left = `${Math.round(x)}px`;
        benches.appendChild(img);
      }
    };
    setup();
    window.addEventListener('resize', setup);
    mq.addEventListener('change', setup);
    return () => {
      window.removeEventListener('resize', setup);
      mq.removeEventListener('change', setup);
    };
  }, []);

  return (
    <>
      <section className="hall-head" aria-labelledby="hall-title">
        <div className="wrap">
          <p className="eyebrow">The Gallery</p>
          <h2 id="hall-title">Walk through recent story portraits.</h2>
          <p className="muted">Keep scrolling to walk the hallway, like a museum. On a phone, swipe through the frames.</p>
          <a className="skip-inline" href="#after-hall">Skip the gallery</a>
        </div>
      </section>
      <section className="hall" aria-label="Gallery hallway" ref={hallRef}>
        <div className="hall-stage">
          <div className="track" ref={trackRef}>
            <span className="rail-top" aria-hidden="true" />
            <span className="shade" aria-hidden="true" ref={shadeRef} />
            <ul className="frames">
              <li className="spacer" aria-hidden="true" />
              {hallway.map((h, i) => (
                <li key={i} className={h.shape}>
                  <span className="fixture" aria-hidden="true" />
                  <span className="beam" aria-hidden="true" />
                  <figure className="frame" style={{ margin: 0 }}>
                    <span className="mat">
                      <span className="bevel">
                        <Image src={h.src} width={h.width} height={h.height} alt={h.alt} sizes="(min-width: 768px) 40vh, 66vw" loading="lazy" />
                      </span>
                    </span>
                  </figure>
                  <p className="plaque"><b>{h.title}</b><span>{h.line}</span></p>
                </li>
              ))}
              <li className="spacer" aria-hidden="true" />
            </ul>
            <span className="baseboard" aria-hidden="true" />
          </div>
          <div className="floor-persp" aria-hidden="true"><div className="floor-plane" /></div>
          <div className="benches" aria-hidden="true" ref={benchRef} />
        </div>
      </section>
      <span id="after-hall" />
    </>
  );
}
