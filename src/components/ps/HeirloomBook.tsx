'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Photo style 2, the heirloom book. A link to an album, drawn as an album.
// The album is a rendered photo (public/textures/album.webp). The cover image is laid onto
// its acrylic face with one perspective transform, so it fits the face exactly at any size.
// The cover photo is only skewed into place. Its colors and tones are never touched.

// The four corners of the acrylic face, as fractions of the album image:
// top left, top right, bottom right, bottom left, as you would read the cover.
// To use a different album photo, replace album.webp and measure these four points.
const FACE: [number, number][] = [[0.12028, 0.26963], [0.61829, 0.03878], [0.89046, 0.39463], [0.31566, 0.74361]];
const BOX_W = 1000, BOX_H = 790; // the face is 10.5 by 8.3 inches

function faceMatrix(w: number, h: number) {
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = FACE.map(([fx, fy]) => [fx * w, fy * h]);
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (dx3 * dy2 - dx2 * dy3) / den, k = (dx1 * dy3 - dx3 * dy1) / den;
  const a = x1 - x0 + g * x1, b = x3 - x0 + k * x3, d = y1 - y0 + g * y1, e = y3 - y0 + k * y3;
  const m = [a / BOX_W, d / BOX_W, 0, g / BOX_W, b / BOX_H, e / BOX_H, 0, k / BOX_H, 0, 0, 1, 0, x0, y0, 0, 1];
  return `matrix3d(${m.map((n) => +n.toFixed(6)).join(',')})`;
}

type Props = {
  cover: { src: string; width: number; height: number; alt: string };
  title: string;
  line?: string;
  href?: string;
  sizes?: string;
};


export default function HeirloomBook({ cover, title, line, href, sizes }: Props) {
  const name = line ? `${title}. ${line}` : title;
  const bookRef = useRef<HTMLSpanElement>(null);
  const coverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const book = bookRef.current, face = coverRef.current;
    if (!book || !face) return;
    const fit = () => {
      if (!book.clientWidth) return;
      face.style.transform = faceMatrix(book.clientWidth, book.clientHeight);
      face.classList.add('on');
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(book);
    return () => ro.disconnect();
  }, []);

  const inner = (
    <>
      <span className="book" ref={bookRef}>
        <Image className="book-base" src="/textures/album.webp" width={1430} height={920} alt="" sizes={sizes ?? '(min-width: 900px) 520px, 92vw'} />
        <span className="book-cover" ref={coverRef}>
          <Image src={cover.src} width={cover.width} height={cover.height} alt={cover.alt} sizes={sizes ?? '(min-width: 900px) 420px, 76vw'} />
        </span>
      </span>
      <span className="book-label">
        <b>{title}</b>
        {line && <span>{line}</span>}
      </span>
    </>
  );
  return href ? <Link className="heirloom" href={href} aria-label={name}>{inner}</Link> : <div className="heirloom">{inner}</div>;
}
