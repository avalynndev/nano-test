"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

type FadeImageProps = ImageProps & {
  fadeDurationMs?: number;
};

export default function FadeImage({
  className,
  fadeDurationMs = 700,
  ...props
}: FadeImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const transitionClasses = `transition-opacity duration-[${fadeDurationMs}ms] ${
    isLoaded ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <Image
        {...props}
        className={
          className ? `${className} ${transitionClasses}` : transitionClasses
        }
        alt={props.alt || ""}
        onLoad={(e) => {
          setIsLoaded(true);
          if (props.onLoad) props.onLoad(e);
        }}
      />
    </>
  );
}
