import { Block } from "payload";

export const Banner: Block = {
    slug: 'banner',
    fields: [
        {
            name: 'title',
            type: 'text',
            required:true
        },
        {
            name: 'bannerImage',
            type: 'upload',
            relationTo: 'media',
            required:true
        },
        {
            name: 'carousel',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required:true
                },
                {
                    name: 'image2',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                },
                {
                    name: 'image3',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'image4',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                }
            ]
        }
    ]
}
