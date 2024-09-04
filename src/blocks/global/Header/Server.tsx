import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '@payload-config';
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function HeaderServer() {
    const payload = await getPayloadHMR({ config });
    const header = await payload.findGlobal({
        slug: 'header',
    });

    return (
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
    );
}
