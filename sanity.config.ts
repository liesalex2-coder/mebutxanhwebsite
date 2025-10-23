import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

const bdSchema = {
  name: 'bd',
  title: 'BD',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'thumbnail',
      title: 'Couverture',
      type: 'image',
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}

const clipSchema = {
  name: 'clip',
  title: 'Clips',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'thumbnail',
      title: 'Miniature',
      type: 'image',
    },
    {
      name: 'videoType',
      title: 'Type de vidéo',
      type: 'string',
      options: {
        list: ['youtube', 'tiktok'],
      },
    },
    {
      name: 'youtubeUrl',
      title: 'URL YouTube',
      type: 'url',
    },
    {
      name: 'tiktokUrl',
      title: 'URL TikTok',
      type: 'url',
    },
  ],
}

export default defineConfig({
  projectId: '55xm5iv8',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [bdSchema, clipSchema],
  },
})