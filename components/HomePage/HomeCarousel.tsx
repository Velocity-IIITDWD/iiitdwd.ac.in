// components/EmblaCarousel.tsx
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

type PropType = {
  //   slides: SlideType[];
  options?: EmblaOptionsType;
  children: React.ReactNode;
};

const HomeCarousel: React.FC<PropType> = ({ options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay({ delay: 4000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const onPrevButtonClick = () => emblaApi && emblaApi.scrollPrev();
  const onNextButtonClick = () => emblaApi && emblaApi.scrollNext();
  const onDotButtonClick = (index: number) =>
    emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="relative">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-3">
          {children}
          {/* Wrap around elements spacing */}
          <div className='w-3 invisible' />
        </div>
      </div>

      <button
        className="absolute top-1/2 -translate-y-1/2 cursor-pointer p-1 rounded md:-left-10 left-2"
        onClick={onPrevButtonClick}
        disabled={emblaApi?.canScrollPrev() === false}
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 cursor-pointer p-1 rounded md:-right-10 right-2"
        onClick={onNextButtonClick}
        disabled={emblaApi?.canScrollNext() === false}
      >
        <ChevronRight size={32} />
      </button>

      <div className="flex items-center gap-3 justify-center mt-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`aspect-square rounded-full cursor-pointer h-[10px]  ${
              index === selectedIndex
                ? 'bg-dwd-primary scale-[140%]'
                : 'bg-gray-300 scale-1'
            }`}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCarousel;
