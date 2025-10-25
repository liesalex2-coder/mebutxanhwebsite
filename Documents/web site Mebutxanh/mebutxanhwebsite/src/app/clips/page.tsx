// src/app/clips/page.tsx
import Image from 'next/image';
import { getClips, urlFor } from '@/lib/sanity';

// Métadonnées pour SEO
export const metadata = {
  title: 'Video Ca Nhạc Thiếu Nhi - Mẹ Bút Xanh',
  description: 'Bộ sưu tập video ca nhạc giáo dục cho trẻ em',
};

export default async function ClipsPage() {
  // Récupération des données côté serveur (pas de useState/useEffect)
  const clips = await getClips();

  // JSON-LD pour SEO/GEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Video Ca Nhạc Thiếu Nhi',
    description: 'Bộ sưu tập video ca nhạc giáo dục cho trẻ em',
    publisher: {
      '@type': 'Organization',
      name: 'Mẹ Bút Xanh',
      url: 'https://mebutxanh.com',
    },
    inLanguage: 'vi',
    numberOfItems: clips.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ padding: '3rem 0' }}>
        <h1 className="title-large" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Video Ca Nhạc
        </h1>
        
        <div className="clips-grid">
          {clips.map((clip) => (
            <article 
              key={clip._id} 
              className="content-card"
              itemScope 
              itemType="https://schema.org/VideoObject"
            >
              <div className="clips-image-container">
                <Image
                  src={urlFor(clip.thumbnail).width(800).url()}
                  alt={`${clip.title} - Video ca nhạc thiếu nhi`}
                  fill
                  className="clips-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  itemProp="thumbnailUrl"
                />
                
                {clip.videoType === 'youtube' && clip.youtubeUrl && (
                  <a 
                    href={clip.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clips-overlay"
                    itemProp="embedUrl"
                  >
                    <button className="play-button-circle" aria-label={`Xem ${clip.title} trên YouTube`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </a>
                )}
                
                {clip.videoType === 'tiktok' && clip.tiktokUrl && (
                  <a 
                    href={clip.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clips-overlay"
                    itemProp="embedUrl"
                  >
                    <button 
                      className="play-button-circle" 
                      style={{ backgroundColor: '#000000' }}
                      aria-label={`Xem ${clip.title} trên TikTok`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </a>
                )}
              </div>
              
              <div className="grid-card">
                <h2 className="card-title" style={{ marginBottom: '0.5rem' }} itemProp="name">
                  {clip.title}
                </h2>
                
                {clip.description && (
                  <p 
                    className="description-text" 
                    style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}
                    itemProp="description"
                  >
                    {clip.description}
                  </p>
                )}
                
                <div style={{ marginTop: '0.5rem' }}>
                  {clip.videoType === 'youtube' && (
                    <span className="card-subtitle" style={{ 
                      color: '#dc2626', 
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}>
                      ▶ YouTube
                    </span>
                  )}
                  {clip.videoType === 'tiktok' && (
                    <span className="card-subtitle" style={{ 
                      color: '#000000', 
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}>
                      🎵 TikTok
                    </span>
                  )}
                </div>
                
                <meta itemProp="uploadDate" content="2025-01-01" />
                <meta itemProp="inLanguage" content="vi" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}