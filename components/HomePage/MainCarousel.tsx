// components/EmblaCarousel.tsx
'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { MainCarouselImage } from '@/data/homePage';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import './HomePage.css';

const TWEEN_FACTOR_BASE = 0.1;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  FullData: MainCarouselImage[];
  options?: EmblaOptionsType;
};

const MainCarousel: React.FC<PropType> = ({ FullData, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const tweenFactor = useRef(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.slide_number_main') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    tweenOpacity(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);
  }, [
    emblaApi,
    onSelect,
    setTweenFactor,
    setTweenNodes,
    tweenOpacity,
    tweenScale,
  ]);

  const onPrevButtonClick = () => emblaApi && emblaApi.scrollPrev();
  const onNextButtonClick = () => emblaApi && emblaApi.scrollNext();
  const onDotButtonClick = (index: number) =>
    emblaApi && emblaApi.scrollTo(index);


  return (
    <section className="embla h-[400px] sm:h-[500px] lg:h-[calc(100vh-64px)] max-h-[500px]">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {FullData.map((item, index) =>
            item?.link ? (
              <Link key={index} className="embla__slide h-full" href={item?.link}>
                <Card className="slide_number_main border-none p-0 h-full carousel-card">
                  <CardContent className="flex border rounded-none overflow-hidden p-0 relative shadow-none bg-gray-50 h-full items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 z-10"></div>
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center blur-md opacity-40 scale-105"
                      style={{
                        backgroundImage: `url(${item?.url})`,
                      }}
                    />

                    <Image
                      alt={item?.caption || "College image"}
                      src={item?.url}
                      width={0}
                      height={0}
                      sizes="100%"
                      priority={index === 0}
                      className="w-full h-full relative object-contain z-5 carousel-image"
                    />

                    <div className="absolute z-20 bottom-0 left-0 w-full carousel-caption">
                      <div className="p-8 md:p-10 flex items-center justify-between">
                        <h2 className="text-white text-xl md:text-4xl font-bold transition-transform duration-300 carousel-title">
                          {item?.caption}
                        </h2>
                        <div className="ml-4 whitespace-nowrap">
                          <span className="py-2 px-8 bg-white text-dwd-primary font-semibold rounded-md hover:bg-blue-50 transition-colors inline-block carousel-button">
                            Learn More
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Card key={index} className="embla__slide border-none p-0 h-full">
                <CardContent className="flex p-0 border rounded-none overflow-hidden shadow-none slide_number_main relative bg-gray-50 h-full items-center justify-center carousel-card">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 z-10"></div>
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center blur-md opacity-40 scale-105"
                    style={{
                      backgroundImage: `url(${item?.url})`,
                    }}
                  />

                  <Image
                    alt={item?.caption || "College image"}
                    src={item?.url}
                    width={0}
                    height={0}
                    sizes="100%"
                    priority={index === 0}
                    className="w-full h-full relative object-contain z-5 carousel-image"
                  />

                  <div className="absolute z-20 bottom-0 left-0 w-full carousel-caption">
                    <div className="p-8 md:p-10">
                      <h2 className="text-white text-xl md:text-4xl font-bold transition-transform duration-300 carousel-title">
                        {item?.caption}
                      </h2>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>


      <button
        className="embla-arrow embla-arrow-prev"
        onClick={onPrevButtonClick}
        aria-label="Previous slide"
      >
        <div className="embla-arrow-icon"></div>
      </button>

      <button
        className="embla-arrow embla-arrow-next"
        onClick={onNextButtonClick}
        aria-label="Next slide"
      >
        <div className="embla-arrow-icon"></div>
      </button>


      <div className="embla-dots-container">
        <div className="embla-dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla-dot ${index === selectedIndex ? 'embla-dot-selected' : ''}`}
              onClick={() => onDotButtonClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCarousel;