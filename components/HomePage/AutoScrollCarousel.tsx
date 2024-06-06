'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AutoScroll from 'embla-carousel-auto-scroll';

type PropType = {
  //   slides: SlideType[];
  options?: EmblaOptionsType;
  children: React.ReactNode;
};

const AutoScrollCarousel: React.FC<PropType> = ({ options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    AutoScroll({ stopOnFocusIn: false, speed: 1, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative">
      <div className="w-full overflow-x-hidden" ref={emblaRef}>
        <div className="flex gap-3 pl-3">{children}</div>
      </div>
    </section>
  );
};

export default AutoScrollCarousel;
