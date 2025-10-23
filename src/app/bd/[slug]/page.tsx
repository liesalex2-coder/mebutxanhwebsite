// src/app/bd/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getBDBySlug, urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const revalidate = 60;

// Types
interface BDPage {
  _key?: string;
  asset?: unknown;
}

// Métadonnées dynamiques pour SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const bd = await getBDBySlug(slug);

  if (!bd) {
    return {
      title: 'BD non trouvée',
    };
  }

  const thumbnailUrl = urlFor(bd.thumbnail).width(1200).url();

  return {
    title: `${bd.title} - Truyện tranh thiếu nhi | Mẹ Bút Xanh`,
    description: `Đọc truyện tranh ${bd.title} - Truyện tranh giáo dục và giải trí cho trẻ em, miễn phí và an toàn.`,
    openGraph: {
      title: `${bd.title} - Truyện tranh thiếu nhi`,
      description: `Đọc truyện tranh ${bd.title} tại Mẹ Bút Xanh`,
      images: [
        {
          url: thumbnailUrl,
          width: 1200,
          height: 1600,
          alt: bd.title,
        },
      ],
      type: 'article',
      locale: 'vi_VN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${bd.title} - Truyện tranh thiếu nhi`,
      description: `Đọc truyện tranh ${bd.title} tại Mẹ Bút Xanh`,
      images: [thumbnailUrl],
    },
    alternates: {
      canonical: `https://mebutxanh.com/bd/${slug}`,
    },
  };
}

export default async function BDDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const bd = await getBDBySlug(slug);

  if (!bd) {
    notFound();
  }

  // JSON-LD pour données structurées (SEO + GEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ComicIssue',
    name: bd.title,
    description: `Truyện tranh giáo dục cho trẻ em: ${bd.title}`,
    image: urlFor(bd.thumbnail).width(1200).url(),
    publisher: {
      '@type': 'Organization',
      name: 'Mẹ Bút Xanh',
      url: 'https://mebutxanh.com',
    },
    inLanguage: 'vi',
    numberOfPages: bd.pages?.length || 6,
    genre: 'Truyện tranh thiếu nhi',
    audience: {
      '@type': 'PeopleAudience',
      suggestedMinAge: 3,
      suggestedMaxAge: 12,
    },
  };

  return (
    <>
      {/* JSON-LD pour SEO + GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '3rem 1rem' }}>
        <Link 
          href="/bd"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#2563eb',
            fontWeight: 500,
            textDecoration: 'none',
            marginBottom: '2rem',
            transition: 'color 0.3s ease'
          }}
        >
          ← Quay lại Truyện tranh
        </Link>

        <h1 className="title-large" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {bd.title}
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {bd.pages.map((page: BDPage, index: number) => (
            <div 
              key={index}
              style={{
                background: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'relative', width: '100%', paddingBottom: '133.33%' }}>
                <Image
                  src={urlFor(page).width(1200).url()}
                  alt={`${bd.title} - Trang ${index + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link 
            href="/bd"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background-color 0.3s ease'
            }}
          >
            Quay lại Truyện tranh
          </Link>
        </div>
      </div>
    </>
  );
}