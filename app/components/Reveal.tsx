"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  mode?: "default" | "slide" | "soft";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  mode = "default",
}: RevealProps) {
  const { ref, visible } = useReveal();
  const classes = [
    "reveal",
    `reveal-${direction}`,
    `reveal-${mode}`,
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={classes}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`eyebrow ${light ? "light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
