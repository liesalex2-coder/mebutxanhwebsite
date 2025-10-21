export default {
  name: 'bd',
  title: 'Truyện Tranh (BD)',
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
      name: 'cover',
      title: 'Couverture 9:16',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'pages',
      title: 'Pages de la BD',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ],
      validation: (Rule: any) => Rule.required().min(1)
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
      media: 'thumbnail'
    }
  }
}