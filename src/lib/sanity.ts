import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

// Fonction pour les images - convertit automatiquement en WebP !
export function urlFor(source: SanityImageSource) {
  return builder.image(source).format('webp').quality(85)
}

// Types pour les retours
export interface BDData {
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  thumbnail: SanityImageSource;
  cover?: SanityImageSource;
}

export interface ClipData {
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  thumbnail: SanityImageSource;
  videoType: string;
  youtubeUrl?: string;
  tiktokUrl?: string;
  videoFile?: SanityImageSource;
  description?: string;
}

// Récupérer toutes les BD
export async function getBDs(): Promise<BDData[]> {
  return client.fetch(`
    *[_type == "bd"] | order(order asc) {
      _id,
      title,
      slug,
      thumbnail,
      cover
    }
  `)
}

// Récupérer une BD par son slug
export async function getBDBySlug(slug: string) {
  const query = `*[_type == "bd" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    thumbnail,
    cover,
    pages
  }`;
  
  return client.fetch(query);
}

// Récupérer tous les clips
export async function getClips(): Promise<ClipData[]> {
  return client.fetch(`
    *[_type == "clip"] | order(order asc) {
      _id,
      title,
      slug,
      thumbnail,
      videoType,
      youtubeUrl,
      tiktokUrl,
      videoFile,
      description
    }
  `)
}