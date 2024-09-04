import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '@payload-config';
import React from "react";
import Link from "next/link";

export default async function FooterServer() {
    const payload = await getPayloadHMR({ config });
    const footer = await payload.findGlobal({
        slug: 'footer',
    });

    return (
        <div className="bg-blue-800 py-8 px-16 text-white">
            <div className="flex flex-col sm:flex-row justify-start gap-8">
                {footer.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="w-full sm:w-[310px]">
                        <div className="text-white text-lg font-bold mb-4">
                            {section.title}
                        </div>
                        <div className="flex flex-col gap-2">
                            {section.navItems.map((item, itemIndex) => (
                                <Link
                                    key={itemIndex}
                                    href={item.link}
                                    className="text-gray-300 hover:text-white text-base"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-white text-sm mt-8 text-center">
                {footer.copyright}
            </div>
        </div>
    );
}
