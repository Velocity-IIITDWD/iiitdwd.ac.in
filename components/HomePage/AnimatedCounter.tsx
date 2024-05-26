'use client';
import React, { useRef } from 'react';
import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from 'framer-motion';
import { ReceiptEuro } from 'lucide-react';

type AnimatedCounterProps = {
  from: number;
  to: number;
  className?: string;
  options?: KeyframeOptions;
};

export default function AnimatedCounter({
  from,
  to,
  className,
  options,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);
    const controls = animate(from, to, {
      duration: 1.5,
      ease: 'easeInOut',
      ...options,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, to, from]);
  return <span className={className} ref={ref}></span>;
}
