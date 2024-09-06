import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js's Image component for optimized images
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function RectCardsServer({ title, cardItems }) {
    return (
        <div className="px-4 sm:px-8 md:px-16 py-2 sm:py-12 md:py-12">
        <div className="flex flex-col justify-start items-start gap-10">
            <div className="text-zinc-800 text-3xl font-bold leading-9">{title}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {cardItems && cardItems.length > 0 ? (
                    cardItems.map((item: { cardItemLink: string | undefined; cardItem: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; cardImage: { url: string | StaticImport; alt: any; }; }, index: React.Key | null | undefined) => (
                        <a
                            key={index}
                            href={item.cardItemLink}
                            className="h-[104px] p-4 bg-zinc-100 rounded-xl flex items-center gap-4 cursor-pointer"
                            target="_self"
                            rel="noopener noreferrer"
                        >
                            {/* Title */}
                            <div className="w-[135px] text-zinc-800 text-base font-bold leading-normal">{item.cardItem}</div>
                            {/* Image */}
                            {item.cardImage?.url && (
                                <div className="relative w-24 h-24">
                                    <Image
                                        src={item.cardImage.url}
                                        alt={item.cardImage.alt || 'Card Image'}
                                        fill
                                        className="object-contain ml-14"
                                    />
                                </div>
                            )}
                        </a>
                    ))
                ) : (
                    <p>No card items available</p>
                )}
            </div>
        </div>
        </div>
    );
}
