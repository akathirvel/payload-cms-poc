import { sharedBlocks } from '../../blocks/blockIndex'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
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
      type: 'blocks',
      blocks: [...sharedBlocks],
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
      type: 'blocks',
      blocks: [...sharedBlocks],
      required: false,
    },
  ],
}
