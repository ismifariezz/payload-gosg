import { Block } from "payload";

export const InfoCards : Block = {
    slug: 'infocards',
    fields:[
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true,
        },
        {
            name: 'infoList',
            type: 'array',
            label: 'Info List',
            required: true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    required:true,
                },
                {
                    name: 'subtitle',
                    type: 'text',
                    label: 'Subtitle',
                    required: true,
                }
            ]
        }
    ]
}
