import { Block } from 'payload'
import { sharedBlocks } from '../blockIndex'

export const Page: Block = {
  slug: 'page',
  labels: {
    singular: 'Page Block',
    plural: 'Page Blocks',
  },
  fields: [
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
      required: true,
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
