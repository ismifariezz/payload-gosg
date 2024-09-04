import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
    slug: 'header',
    fields: [
        // {
        //     name: 'logo',
        //     label: 'Logo',
        //     type: 'upload',
        //     relationTo: 'media',
        // },
        {
            name: 'navItems',
            label: 'NavItem',
            type: 'array',
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
            required: true
        },
    ]
}