import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '@payload-config';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogClose } from "@radix-ui/react-dialog";
import { faUserCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

export default async function HeaderServer() {
    const payload = await getPayloadHMR({ config });
    const header = await payload.findGlobal({
        slug: 'header',
    });

    return (
        <nav className="hidden lg:block">
                <div className="flex justify-between items-center py-6 px-16">
                <Image src="/mygov.svg" alt="MyGov logo" width={240} height={48} />
                    <div className="flex gap-2 items-center">
                        <Button variant="outline">
                            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                            Bahasa Malaysia
                        </Button>
                        {/* Popup Dialog */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Log Masuk</Button>
                            </DialogTrigger>
                            <DialogContent className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-lg relative">
                                    <DialogClose asChild>
                                        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-600">
                                            <FontAwesomeIcon icon={faTimes} className="text-xl" />
                                        </button>
                                    </DialogClose>
                                    <div className="flex justify-center mb-4">
                                        <FontAwesomeIcon icon={faUserCircle} className="text-blue-700 text-5xl" />
                                    </div>
                                    <DialogDescription className="mt-2 text-sm text-gray-600 text-center">
                                        Sila isi maklumat di bawah:
                                    </DialogDescription>
                                    <form className="mt-4">
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm pl-2" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">No. Kad Pengenalan</label>
                                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm pl-2" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Nombor Telefon</label>
                                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm pl-2" />
                                        </div>
                                        <div className="text-blue-500 underline font-sm flex justify-between">
                                            <Link href="/lupakatalaluan">Lupa kata laluan?</Link>
                                            <div className="">
                                                <Button type="submit">Masuk</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </DialogContent>
                        </Dialog>
                        {/* Popup Dialog End */}

                        <Button>Daftar</Button>
                        <Button variant="ghost" className="p-1">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 16.5C12 15.6703 12.6703 15 13.5 15H31.5C32.3297 15 33 15.6703 33 16.5C33 17.3297 32.3297 18 31.5 18H13.5C12.6703 18 12 17.3297 12 16.5ZM15 24C15 23.1703 15.6703 22.5 16.5 22.5H34.5C35.3297 22.5 36 23.1703 36 24C36 24.8297 35.3297 25.5 34.5 25.5H16.5C15.6703 25.5 15 24.8297 15 24ZM33 31.5C33 32.3297 32.3297 33 31.5 33H13.5C12.6703 33 12 32.3297 12 31.5C12 30.6703 12.6703 30 13.5 30H31.5C32.3297 30 33 30.6703 33 31.5Z" fill="black" />
                            </svg>
                        </Button>
                    </div>
                </div>
        <div className="flex justify-between items-center bg-blue-800 py-4 px-16">
            <div className="flex space-x-6">
                {header.navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className="text-white text-lg hover:text-gray-300"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            <Button variant="outline">Carian</Button>
        </div>
        </nav>
    );
}
