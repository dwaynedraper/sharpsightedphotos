import Image from 'next/image';

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

// Photo style 4, the standalone photo. For a hero or a photo beside text.
// No frame, no mat. Soft Leaf corners and a soft shadow. The image itself is never altered.
export default function Photo({ src, width, height, alt, sizes, priority, className }: Props) {
  return (
    <figure className={`photo ${className ?? ''}`}>
      <Image src={src} width={width} height={height} alt={alt} sizes={sizes} priority={priority} />
    </figure>
  );
}
