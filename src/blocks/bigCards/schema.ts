import { Block } from "payload";

export const BigCards: Block = {
    slug: 'bigcards',
    fields: [
        {
            name: 'cards',
            type: 'array',
            required:true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    label: 'Card Title',
                  },
                  {
                    name: 'items',
                    type: 'array',
                    required: true,
                    label: 'Card Items',
                    fields: [
                      {
                        name: 'item',
                        type: 'text',
                        required: true,
                        label: 'Item',
                      },
                    ],
                  },
                  {
                    name: 'link',
                    type: 'text',
                    required: true,
                    label: 'Link URL',
                  },
                  {
                    name: 'linkLabel',
                    type: 'text',
                    required: true,
                    label: 'Link Label',
                  },
            ]
        },
        
      ],
}