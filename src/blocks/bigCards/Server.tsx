import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function BigCardsServer({ cards }) {
    return (

        <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-12">
            <div className="text-zinc-800 text-3xl font-bold leading-9 pb-8">Semua Topik</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cards && cards.length > 0 ? (
                    cards.map((card: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; items: { id: React.Key | null | undefined; item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }[]; link: string | undefined; linkLabel: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                        <div key={card.id} className="p-8 bg-zinc-100 rounded-xl flex flex-col gap-4">
                            {/* Title */}
                            <div className="text-zinc-800 text-xl font-bold leading-7">{card.title}</div>
                            {/* Items */}
                            <div className="flex flex-col gap-3">
                                {card.items.map((item: { id: React.Key | null | undefined; item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: any) => (
                                    <div key={item.id} className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 text-zinc-600" />
                                        <div className="text-zinc-600 text-base font-medium leading-tight">{item.item}</div>
                                    </div>
                                ))}
                            </div>
                            {/* Link Label */}
                            <div className="mt-auto self-end">
                                <a href={card.link} className="text-right text-blue-800 text-base font-medium leading-normal">
                                    {card.linkLabel}
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No cards available</p>
                )}
            </div>
        </div>
    );
}
