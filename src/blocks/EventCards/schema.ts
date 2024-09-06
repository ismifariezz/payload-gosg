import { Block } from "payload";

export const EventCards : Block = {
    slug: 'eventcards',
    fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'eventCards',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'eventImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'dateFrom',
              type: 'date',
              label: 'Date from',
              required: true,
            },
            {
              name: 'dateTo',
              type: 'date',
              label: 'Date to',
              required: true,
            },
            {
              name: 'eventParticipant',
              type: 'radio',
              options: [
                {
                  label: 'Acara Terhad',
                  value: 'Acara Terhad',
                },
                {
                  label: 'Acara Terbuka (Terhad)',
                  value: 'Acara Terbuka (Terhad)',
                },
              ],
              defaultValue: 'Acara Terbuka (Terhad)',
              admin: {
                layout: 'vertical',
              },
            },
            {
              name: 'eventLocation',
              type: 'text',
              required: true,
            },
            {
              name: 'eventFee',
              type: 'radio',
              options: [
                {
                  label: 'Percuma',
                  value: 'Percuma',
                },
                {
                  label: 'Beryuran',
                  value: 'Beryuran',
                },
              ],
              defaultValue: 'Percuma',
              admin: {
                layout: 'vertical',
              },
            },
          ],
        },
      ]
}