import { Banner } from "@/blocks/Banner/schema";
import { BigCards } from "@/blocks/bigCards/schema";
import { RectCards } from "@/blocks/rectCards/schema";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            admin:{
                position: 'sidebar'
            },
            required: true
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                RectCards,
                BigCards,
                Banner
            ]
        }
    ]
}