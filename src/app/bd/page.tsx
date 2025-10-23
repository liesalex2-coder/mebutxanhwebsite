/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/bd/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getBDs, urlFor } from '@/lib/sanity';
import type { Metadata } from 'next';

export const revalidate = 60;

// Types
interface BDSlug {
  current: string;
  _type: string;
}

interface BD {
  _id: string;
  title: string;
  slug: BDSlug;
  thumbnail: unknown;
}

// Métadonnées SEO
export const metadata: Metadata = {
  title: 'Truyện Tranh Thiếu Nhi - Miễn phí & An toàn | Mẹ Bút Xanh',
  description: 'Bộ sưu tập truyện tranh giáo dục cho trẻ em từ 3-12 tuổi. Nội dung lành mạnh, hình ảnh đẹp, hoàn toàn miễn phí.',
  openGraph: {
    title: 'Truyện Tranh Thiếu Nhi - Mẹ Bút Xanh',
    description: 'Bộ sưu tập truyện tranh giáo dục cho trẻ em',
    type: 'website',
    locale: 'vi_VN',
  },
  alternates: {
    canonical: 'https://mebutxanh.com/bd',
  },
};

export default async function BDPage() {
  const bds = await getBDs();

  // JSON-LD pour la collection
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Truyện Tranh Thiếu Nhi',
    description: 'Bộ sưu tập truyện tranh giáo dục cho trẻ em từ 3-12 tuổi',
    publisher: {
      '@type': 'Organization',
      name: 'Mẹ Bút Xanh',
      url: 'https://mebutxanh.com',
    },
    inLanguage: 'vi',
    numberOfItems: bds.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ padding: '3rem 0' }}>
        <h1 className="title-large" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Truyện Tranh
        </h1>
        
        <div className="bd-grid">
          {bds.map((bd: BD) => (
            <Link 
              key={bd._id} 
              href={`/bd/${bd.slug.current}`}
              className="content-card"
              style={{ textDecoration: 'none' }}
            >
              <div className="bd-image-container">
                <Image
                  src={urlFor(bd.thumbnail as any).width(600).url()}
                  alt={bd.title}
                  width={600}
                  height={600}
                  className="bd-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h2 className="card-title">{bd.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}