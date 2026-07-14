"use client";

import { animate, useInView } from "framer-motion";
import * as React from "react";

type AnimatedCounterProps = {
  value: string;
};

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  React.useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    const numeric = Number.parseFloat(value.replace(/[^\d.]/g, ""));
    if (Number.isNaN(numeric)) {
      node.textContent = value;
      return;
    }

    const suffix = value.replace(/[\d.]/g, "");
    const controls = animate(0, numeric, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = `${Number.isInteger(numeric) ? Math.round(latest) : latest.toFixed(1)}${suffix}`;
      }
    });

    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{value}</span>;
}
