import Image from 'next/image';

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

// A real framed print: near-black moulding, white mat, and a 45 degree bevel cut.
export default function Frame({ src, width, height, alt, sizes, priority, className, style }: Props) {
  return (
    <figure className={`frame ${className ?? ''}`} style={{ margin: 0, ...style }}>
      <span className="mat">
        <span className="bevel">
          <Image src={src} width={width} height={height} alt={alt} sizes={sizes} priority={priority} />
        </span>
      </span>
    </figure>
  );
}
