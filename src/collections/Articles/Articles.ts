import type { CollectionConfig } from 'payload'
import { generateContentSummaryHooks, generateSlugHooks } from './hooks'

export const Articles: CollectionConfig = {
  slug: 'articles',
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
      unique: true,
      hooks: {
        beforeValidate: [generateSlugHooks],
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'contentSummary',
      type: 'text',
      required: true,
      admin: {
        condition: (_, { content }) => content?.length > 100,
      },
      hooks: {
        beforeValidate: [generateContentSummaryHooks],
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'author',
      required: true,
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
