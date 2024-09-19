import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function InfoListServer({ title, infoList }) {
    return (
        <div className="px-4 sm:px-8 md:px-16 py-2 sm:py-12 md:py-12">
            <div className="text-zinc-800 text-2xl md:text-3xl font-bold leading-8 md:leading-9 pb-4">{title}</div>
            <div className="flex flex-col">
                    <div className="flex-grow flex flex-col justify-start items-start gap-1">
                        {infoList && infoList.length > 0 ? (
                            infoList.map((item: { title: string | undefined; subtitle: string | undefined; }, index: React.Key | null | undefined) => (
                                <div key={index} className="flex flex-col justify-start items-start gap-1">
                                    <div className="w-full max-w-[750px] h-auto py-4 border-b-2 border-zinc-400 flex justify-between items-start md:items-center">
                                    <div className="flex items-center self-stretch text-zinc-800 text-lg md:text-xl font-bold leading-6 md:leading-7">
                                        {item.title}
                                    </div>
                                    <div className="self-stretch text-zinc-600 text-base md:text-lg font-normal leading-6 md:leading-7">
                                        {item.subtitle}
                                    </div>
                                    <div className="mt-2 md:mt-0 w-6 h-6 flex items-center justify-center text-zinc-500">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </div>
                                    <div className="pb-6"></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No card items available</p>
                        )}
                    </div>
            </div>
        </div>
    )
}
