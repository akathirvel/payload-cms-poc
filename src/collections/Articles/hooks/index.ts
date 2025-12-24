import { Article } from '@/payload-types'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'
import { FieldHook } from 'payload'
import { slugify } from 'payload/shared'

const MAX_SUMMARY_LENGTH = 100

export const generateSlugHooks: FieldHook<Article, string> = ({ value, data }) => {
  if (!value) {
    return (data?.title?.toLowerCase() || '').replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '')
  }
  return slugify(value.trim()) || ''
}

export const generateContentSummaryHooks: FieldHook<Article, string> = ({ value, data }) => {
  if (value) return value.trim()
  const content = data?.content
  if (!content) return ''
  return convertLexicalToPlaintext({ data: content }).trim().slice(0, MAX_SUMMARY_LENGTH)
}
