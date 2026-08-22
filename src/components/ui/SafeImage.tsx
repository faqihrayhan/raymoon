"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackIcon?: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  fallbackIcon,
  className = "",
  width,
  height,
  fill,
  priority,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-800/60 border border-white/10 text-cyan-400 font-mono text-xs ${className}`}
        style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }}
      >
        {fallbackIcon || alt.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
