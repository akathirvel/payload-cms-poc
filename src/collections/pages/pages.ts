import { sharedBlocks } from '../../blocks/blockIndex'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'header',
      type: 'relationship',
      relationTo: 'header',
      required: false,
    },
    {
      name: 'body',
      type: 'blocks',
      blocks: [...sharedBlocks],
      required: false,
      minRows: 1,
    },
    {
      name: 'footer',
      type: 'relationship',
      relationTo: 'footer',
      required: false,
    },
  ],
}
