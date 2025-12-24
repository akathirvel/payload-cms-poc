import { Block } from 'payload'

export const ContentWithMedia: Block = {
  slug: 'contentWithMedia',
  labels: {
    singular: 'Content With Media Block',
    plural: 'Content With Media Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'radio',
      name: 'textPosition',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
  ],
}
