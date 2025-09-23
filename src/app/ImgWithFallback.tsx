"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function ImgWithFallback({
  src,
  alt,
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/placeholder-3x2.png")}
    />
  );
}
