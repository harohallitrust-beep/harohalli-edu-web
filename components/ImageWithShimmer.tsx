"use client";

import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithShimmerProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  containerClassName?: string;
}

// Next.js recommended CSS-only SVG shimmer
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#dbeafe" offset="20%" />
      <stop stop-color="#eff6ff" offset="50%" />
      <stop stop-color="#dbeafe" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#dbeafe" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function ImageWithShimmer({ src, alt, className, containerClassName, ...props }: ImageWithShimmerProps) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        className={cn(className, "relative z-10")}
        {...props}
      />
    </div>
  );
}
