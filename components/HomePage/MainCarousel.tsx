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

const MainCarousel: React.FC<PropType> = ({ options, children }) => {
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
        <div className="flex">{children}</div>
      </div>

      <button
        className="hidden md:flex md:absolute md:top-1/2 md:-translate-y-1/2 md:cursor-pointer md:p-1 md:rounded md:left-2"
        onClick={onPrevButtonClick}
        disabled={emblaApi?.canScrollPrev() === false}
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className="hidden md:flex md:absolute md:top-1/2 md:-translate-y-1/2 md:cursor-pointer md:p-1 md:rounded md:right-2"
        onClick={onNextButtonClick}
        disabled={emblaApi?.canScrollNext() === false}
      >
        <ChevronRight size={32} />
      </button>

      <div className="flex items-center gap-3 px-4 justify-between md:justify-center mt-3">
        <div className="flex md:hidden gap-4">
          <button
            className="p-1 rounded-full border-2 hover:bg-dwd-primary transition duration-300 hover:text-white border-dwd-primary"
            onClick={onPrevButtonClick}
            disabled={emblaApi?.canScrollPrev() === false}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="p-1 rounded-full border-2 hover:bg-dwd-primary transition duration-300 hover:text-white border-dwd-primary"
            onClick={onNextButtonClick}
            disabled={emblaApi?.canScrollNext() === false}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`aspect-square rounded-full border-2 cursor-pointer h-[10px]  ${
                index === selectedIndex
                  ? 'border-dwd-primary bg-dwd-primary/60'
                  : 'border-gray-400'
              }`}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCarousel;
