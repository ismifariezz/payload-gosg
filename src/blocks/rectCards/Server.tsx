import React from 'react';

export default function RectCardsServer({ title, cardItems }) {
    return (
        <div>
            <h1 className='text-3xl'>{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {cardItems && cardItems.length > 0 ? (
                    cardItems.map((item: { cardItemLink: string | undefined; cardItem: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                        <a
                            key={index}
                            href={item.cardItemLink}
                            className="p-4 border rounded-lg shadow-md block"
                            target="_self"
                            rel="noopener noreferrer"
                        >
                            <h2 className="text-xl font-bold mb-2">{item.cardItem}</h2>
                        </a>
                    ))
                ) : (
                    <p>No card items available</p>
                )}
            </div>
        </div>
    );
}
