"use client";

import { Input } from '@/components/ui/input';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

export default function BannerServer({ title, bannerImage, carousel }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carousel.length);
        }, 5000); // Image change every 5 seconds

        return () => clearInterval(interval);
    }, [carousel]);

    return (
        <div>
            <section className="px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 overflow-hidden relative flex justify-center items-center">
                {/* Background banner image */}
                {bannerImage && (
                    <img
                        src={bannerImage.url}
                        alt={bannerImage.alt || 'Banner Image'}
                        className="absolute w-full h-full top-0 left-0 z-0 object-cover"
                    />
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 h-full justify-center items-center gap-6 z-10">
                    {/* Title */}
                    <div className="flex flex-col gap-4 px-4 md:px-0">
                        <h1 className="text-white text-3xl md:text-5xl font-bold">{title}</h1>
                    </div>
                    <div className="relative flex items-center gap-4">
                <div className="absolute left-0 top-0 h-full flex items-center pl-4">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-zinc-400"
                    size="lg"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Masukkan kata kunci carian ..."
                  className="text-zinc-400 p-6 pl-12 text-lg md:text-xl rounded-lg"
                />
              </div>

                    {/* Carousel images */}
                    <div className="w-full h-[200px] md:w-[640px] md:h-[276px] overflow-hidden relative">
                        {carousel && carousel.length > 0 && (
                            <img
                                src={carousel[currentImageIndex].image.url}
                                alt={`Slide ${currentImageIndex}`}
                                className="w-full h-full object-cover rounded-lg transition-opacity duration-1000"
                            />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
