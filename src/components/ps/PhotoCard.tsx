import Image from 'next/image';

type Props = {
  image: { src: string; width: number; height: number; alt: string };
  badge?: React.ReactNode;
  badgeLabel?: string;
  sizes?: string;
  children: React.ReactNode;
};

// Photo style 3, the photo card. For an offering that has a cover image.
// The photo sits on top, untouched. An Azure to Emerald badge sits on the seam between photo and text.
export default function PhotoCard({ image, badge, badgeLabel, sizes, children }: Props) {
  return (
    <article className="pcard">
      <div className="pcard-photo">
        <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes ?? '(min-width: 900px) 360px, 90vw'} />
        {badge && <span className="pcard-badge" aria-label={badgeLabel}>{badge}</span>}
      </div>
      <div className="pcard-body">{children}</div>
    </article>
  );
}

// Line icons for the badges. White on the gradient badge.
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
export const icons = {
  place: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path {...s} d="M12 21s-6.5-5.9-6.5-11a6.5 6.5 0 0 1 13 0c0 5.1-6.5 11-6.5 11z" /><circle {...s} cx="12" cy="10" r="2.4" /></svg>
  ),
  time: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><circle {...s} cx="12" cy="12" r="8.5" /><path {...s} d="M12 7.5V12l3.2 2" /></svg>
  ),
  story: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path {...s} d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8.5L6.5 19.5V16H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" /><path {...s} d="M8 9.5h8M8 12.5h5" /></svg>
  ),
};
