import React from 'react';
import Image from 'next/image'; // Ensure you're using the Next.js Image component for optimization
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faArrowRight, faCalendarCheck, faDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function EventCardsServer({ title, eventCards }) {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-12">
      <h1 className="text-zinc-800 text-2xl md:text-3xl font-bold">{title}</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {eventCards.map((event: { eventImage: { url: string | StaticImport; }; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; eventParticipant: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; eventFee: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; dateFrom: string | number | Date; dateTo: string | number | Date; eventLocation: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
          <div key={index} className="w-full p-4 bg-zinc-100 rounded-xl flex flex-col justify-start items-start gap-2">
            <div className="w-full flex justify-center">
              {event.eventImage?.url && (
                <Image
                  src={event.eventImage.url}
                  alt= 'image'
                  width={500} // Adjust width according to the image size
                  height={300} // Adjust height according to the image size
                  className="w-full h-142 object-contain rounded-lg"
                />
              )}
            </div>
            <div className="self-stretch text-black text-lg md:text-xl font-bold leading-6 md:leading-7">
              {event.title}
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className={`px-1.5 py-px ${event.eventParticipant === 'Acara Terhad' ? 'bg-yellow-500' : 'bg-blue-600'} rounded-md flex gap-1`}>
                <FontAwesomeIcon icon={faCalendarCheck} className="w-2.5 h-2.5 text-zinc-100" />
                <div className="text-zinc-100 text-sm font-semibold">{event.eventParticipant}</div>
              </div>
              <div className="px-1.5 py-px bg-green-600 rounded-md flex gap-1">
                <FontAwesomeIcon icon={faDollar} className="w-2 h-2 text-blue-100" />
                <div className="text-green-100 text-sm font-semibold">{event.eventFee}</div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 text-zinc-500" />
              <div className="text-zinc-500 text-sm">
                {new Date(event.dateFrom).toLocaleDateString()} - {new Date(event.dateTo).toLocaleDateString()}
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-zinc-500" />
              <div className="text-zinc-500 text-sm">{event.eventLocation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
