import { Block } from 'payload'

export const Footer: Block = {
  slug: 'footer',
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
    },
  ],
}
