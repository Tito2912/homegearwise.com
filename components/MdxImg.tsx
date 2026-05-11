import type { ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement>;

export function MdxImg({ src, alt = '', ...rest }: Props) {
  if (typeof src !== 'string' || !/^\/images\/.+\.(jpg|jpeg)$/i.test(src)) {
    return <img src={src} alt={alt} {...rest} />;
  }

  const webpSrc = src.replace(/\.(jpg|jpeg)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} {...rest} />
    </picture>
  );
}
