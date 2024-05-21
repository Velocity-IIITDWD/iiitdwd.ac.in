import React, { useState, useEffect, useCallback } from 'react';
import eventData from '../data/HomePage.json';
import RightArrow from '@/components/ui/RightArrow';
import LeftArrow from '@/components/ui/LeftArrow';
import Image from 'next/image';

const EventCarousel: React.FC = () => {
    const [events, setEvents] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const length = eventData.events.length;

    useEffect(() => {
        setEvents(eventData.events);
    
        const goToNextSlide = () => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === events.length - 1) {
                    return 0;
                } else {
                    return (prevIndex + 1) % length;
                }
            });
        };

        const intervalId = setInterval(goToNextSlide, 5000);

        return () => clearInterval(intervalId);
    }, [events, length]);

    const goToNextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === events.length - 1) {
                return 0;
            } else {
                return (prevIndex + 1) % length;
            }
        });
    }, [events.length, length]);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return events.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    return (
        <div className="Events mt-4 w-full sm:w-1/2 lg:w-40% lg:mr-5%">
            <div className="block rounded-lg shadow-secondary-1 border border-gray-400">
                <div className="border-b-2 border-neutral-100 px-6 py-3 font-bold text-3xl bg-customBlue text-cardText">
                    Events
                </div>
                <div className="relative">
                    <div
                        id="eventsCarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            {events.map((event, index) => (
                                <div
                                    className={`carousel-item ${
                                        index === currentIndex ? 'active' : ''
                                    }`}
                                    key={index}
                                >
                                    <div className="flex justify-center">
                                        <img
                                            src={event.url}
                                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                            className="d-block w-2/3"
                                            id = "crousel-image-size"
                                            alt={event.name}
                                        />
                                    </div>

                                    <div className="carousel-caption d-none d-md-block text-center">
                                        <h5 className="font-bold">{event.name}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 w-12 h-12"
                            type="button"
                            data-bs-target="#eventsCarousel"
                            data-bs-slide="prev"
                            onClick={goToPrevSlide}
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">
                                <LeftArrow />
                            </span>
                        </button>
                        <button
                            className="carousel-control-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 w-12 h-12"
                            type="button"
                            data-bs-target="#eventsCarousel"
                            data-bs-slide="next"
                            onClick={goToNextSlide}
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">
                                <RightArrow />
                            </span>
                        </button>
                        <div className="carousel-indicators">
                            {events.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#eventsCarousel"
                                    data-bs-slide-to={index}
                                    className={index === currentIndex ? 'active' : ''}
                                    aria-current={index === currentIndex}
                                    onClick={() => setCurrentIndex(index % length)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCarousel;