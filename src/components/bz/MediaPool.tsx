'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { films } from '@/content/films';
import { site, cta } from '@/content/site';

// Five films in a media pool. Picking one opens a card with its photo, price, and the inspector.
export default function MediaPool() {
  const dlg = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(1);
  const d = films[i];
  const open = (n: number) => {
    setI(n);
    dlg.current?.showModal();
  };
  return (
    <>
      <div className="pool-solo">
        <div className="panel n18">
          <div className="panel-head"><span className="tab">Media Pool</span><span className="meta">{films.length} clips</span></div>
          <p className="path">Master ▸ Services · Pick a film to open its details</p>
          <ul className="clips">
            {films.map((f, n) => (
              <li key={f.file}>
                <button className="clip-btn" type="button" aria-haspopup="dialog" onClick={() => open(n)}>
                  <span className="thumb"><Image src={f.img.src} width={f.img.w} height={f.img.h} alt="" sizes="220px" /><span className="badge">4K</span></span>
                  <span className="clip-name">{f.file}</span>
                  <span className="clip-price">{f.card}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <dialog className="clip-dialog" ref={dlg} aria-labelledby="dlg-name" onClick={(e) => { if (e.target === dlg.current) dlg.current?.close(); }}>
        <div className="panel n18 bar dlg-card">
          <div className="dlg-head">
            <button className="back" type="button" autoFocus onClick={() => dlg.current?.close()}><span aria-hidden="true">←</span> Back to all films</button>
            <span className="meta">{d.file}</span>
          </div>
          <div className="dlg-top">
            <div className="thumb"><Image src={d.img.src} width={d.img.w} height={d.img.h} alt="" sizes="240px" /><span className="badge">4K</span></div>
            <div className="dlg-title">
              <h3 id="dlg-name">{d.name}</h3>
              <p className="dlg-price"><span className="rate">{d.rate}</span> <span className="muted-ui">founding rate</span></p>
            </div>
          </div>
          <p className="group">Inspector</p>
          <dl className="insp">
            <div><dt>What it is</dt><dd>{d.what}</dd></div>
            <div><dt>What you get</dt><dd className="gets">{d.gets}</dd></div>
            <div><dt>Founding rate</dt><dd>{d.rate}</dd></div>
            <div><dt>List price</dt><dd>{d.list}</dd></div>
            <div><dt>Terms</dt><dd>{d.term}</dd></div>
          </dl>
          <div className="cta"><a className="btn light n12" href={site.connectionCall}>{cta.call} <span className="arrow" aria-hidden="true">→</span></a></div>
        </div>
      </dialog>
    </>
  );
}
