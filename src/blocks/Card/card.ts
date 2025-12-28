import { Block } from 'payload'

export const Card: Block = {
  slug: 'card',
  labels: {
    singular: 'Card',
    plural: 'Cards',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'author',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'readTime',
      type: 'text',
    },
    {
      name: 'url',
      type: 'text',
    },
  ],
}
