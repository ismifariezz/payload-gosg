import { Block } from "payload";

export const RectCards: Block = {
    slug: 'rectcards',
    fields:[
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true,
        },
        {
            name: 'cardItems',
            label: 'Card Items',
            type: 'array',
            fields: [
                {
                    name: 'cardItem',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'cardItemLink',
                    type: 'text',
                    required: true,

                }
            ]
            
        }
    ]
}