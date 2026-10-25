import type { Metadata } from 'next';
import PsNav from '@/components/ps/PsNav';
import GalleryGrid from '@/components/GalleryGrid';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Portrait Gallery',
  description: 'Recent story portraits by Sharp Sighted Photos, shot on location where the story actually happens in DFW.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PsNav current="gallery" />
      <main id="main">
        <section className="band wall" aria-labelledby="gal-title">
          <div className="wrap">
            <div className="section-head">
              <div className="stack" style={{ gap: 10 }}>
                <p className="eyebrow">The Gallery</p>
                <h1 id="gal-title">Stories, framed.</h1>
                <p className="lede muted">Every collection is a real session, shot where the story happens. Pick a frame to walk through it.</p>
              </div>
              <a className="btn btn-main" href={site.connectionCall}>Book a free Connection Call</a>
            </div>
            <GalleryGrid />
          </div>
        </section>
      </main>
    </>
  );
}
