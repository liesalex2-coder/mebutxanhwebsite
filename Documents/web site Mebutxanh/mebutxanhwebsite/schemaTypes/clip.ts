export default {
  name: 'clip',
  title: 'Video Ca Nhạc (Clip)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'thumbnail',
      title: 'Vignette',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'videoType',
      title: 'Type de vidéo',
      type: 'string',
      options: {
        list: [
          {title: 'YouTube', value: 'youtube'},
          {title: 'TikTok', value: 'tiktok'},
          {title: 'Fichier direct', value: 'file'}
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'youtubeUrl',
      title: 'URL YouTube',
      type: 'url',
      hidden: ({parent}: any) => parent?.videoType !== 'youtube'
    },
    {
      name: 'tiktokUrl',
      title: 'URL TikTok',
      type: 'url',
      hidden: ({parent}: any) => parent?.videoType !== 'tiktok'
    },
    {
      name: 'videoFile',
      title: 'Fichier vidéo',
      type: 'file',
      hidden: ({parent}: any) => parent?.videoType !== 'file'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      validation: (Rule: any) => Rule.integer().positive()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      videoType: 'videoType'
    },
    prepare(selection: any) {
      const {title, media, videoType} = selection
      return {
        title: title,
        subtitle: videoType ? videoType.toUpperCase() : 'Vidéo',
        media: media
      }
    }
  }
}