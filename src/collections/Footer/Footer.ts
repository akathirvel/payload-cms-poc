import { CollectionConfig } from 'payload'
import { Footer as FooterBlock } from '../../blocks/Footer'

export const Footer: CollectionConfig = {
  slug: 'footer',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'footer',
      type: 'blocks',
      blocks: [FooterBlock],
      required: true,
      localized: true,
    },
  ],
}
