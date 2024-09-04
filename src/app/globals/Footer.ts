import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'sections',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'navItems',
          type: 'array',
          maxRows: 10,
          fields: [
            {
                name: 'label',
                label: 'Label',
                type: 'text',
                required: true
            },
            {
                name: 'link',
                label: 'Link',
                type: 'text',
                required: true
            }
          ],
        },
      ],
    },
    {
        name: 'copyright',
        label: 'Copyright Notice',
        type: 'text',
        required: true
    }
  ],
};
