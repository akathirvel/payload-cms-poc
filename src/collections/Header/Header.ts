import { CollectionConfig } from 'payload'
import { Header as HeaderBlock } from '../../blocks/Header'

export const Header: CollectionConfig = {
  slug: 'header',
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
      name: 'header',
      type: 'blocks',
      blocks: [HeaderBlock],
      required: true,
      localized: true,
    },
  ],
}
