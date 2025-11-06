// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Mẹ Bút Xanh - Truyện tranh và video ca nhạc thiếu nhi',
  description: 'Bộ sưu tập truyện tranh và video ca nhạc giáo dục cho trẻ em từ 3-12 tuổi. Nội dung lành mạnh, miễn phí, an toàn.',
  openGraph: {
    title: 'Mẹ Bút Xanh - Nội dung giáo dục cho trẻ',
    description: 'Truyện tranh và video ca nhạc thiếu nhi',
  },
};

export default function Home() {
  // Schema.org enrichi avec CollectionPage + ItemList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.mebutxanh.com/#website',
        name: 'Mẹ Bút Xanh',
        url: 'https://www.mebutxanh.com',
        description: 'Truyện tranh và video ca nhạc giáo dục cho trẻ em Việt Nam',
        inLanguage: 'vi-VN',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.mebutxanh.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.mebutxanh.com/#collectionpage',
        url: 'https://www.mebutxanh.com',
        name: 'Mẹ Bút Xanh - Trang chủ',
        description: 'Bộ sưu tập truyện tranh và video ca nhạc giáo dục cho trẻ em từ 3-12 tuổi',
        inLanguage: 'vi-VN',
        isPartOf: {
          '@id': 'https://www.mebutxanh.com/#website'
        },
        about: {
          '@type': 'Thing',
          name: 'Giáo dục trẻ em',
          description: 'Nội dung giáo dục và giải trí cho trẻ em Việt Nam'
        },
        audience: {
          '@type': 'PeopleAudience',
          audienceType: 'Trẻ em và gia đình',
          suggestedMinAge: 3,
          suggestedMaxAge: 12
        }
      },
      {
        '@type': 'ItemList',
        '@id': 'https://www.mebutxanh.com/#itemlist',
        name: 'Nội dung chính',
        description: 'Danh sách các loại nội dung trên Mẹ Bút Xanh',
        numberOfItems: 2,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'CreativeWork',
              '@id': 'https://www.mebutxanh.com/bd',
              name: 'Truyện Tranh Thiếu Nhi',
              description: 'Bộ sưu tập truyện tranh giáo dục với nội dung phù hợp cho trẻ từ 3-12 tuổi',
              url: 'https://www.mebutxanh.com/bd',
              genre: 'Truyện tranh giáo dục',
              audience: {
                '@type': 'PeopleAudience',
                audienceType: 'Trẻ em',
                suggestedMinAge: 3,
                suggestedMaxAge: 12
              },
              image: {
                '@type': 'ImageObject',
                url: 'https://www.mebutxanh.com/bd/thumbnail-default.webp',
                description: 'Hình minh họa truyện tranh thiếu nhi'
              }
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'CreativeWork',
              '@id': 'https://www.mebutxanh.com/clips',
              name: 'Video Ca Nhạc Thiếu Nhi',
              description: 'Tuyển chọn ca nhạc thiếu nhi trong trẻo, sôi động và an toàn',
              url: 'https://www.mebutxanh.com/clips',
              genre: 'Ca nhạc thiếu nhi',
              audience: {
                '@type': 'PeopleAudience',
                audienceType: 'Trẻ em',
                suggestedMinAge: 3,
                suggestedMaxAge: 12
              },
              image: {
                '@type': 'ImageObject',
                url: 'https://www.mebutxanh.com/clips/khu-vuon-phep-mau/khu-vuon-phep-mau_thumb.webp',
                description: 'Hình thumbnail video ca nhạc thiếu nhi'
              }
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section avec H1 principal */}
      <section 
        className="section-spacing"
        role="region"
        aria-labelledby="hero-heading"
      >
        <h1 
          id="hero-heading"
          className="title-medium text-center"
          style={{
            fontSize: '2.5rem',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}
        >
          Chào mừng đến với Mẹ Bút Xanh
        </h1>
        <p 
          className="description-text text-center text-spacing"
          style={{
            fontSize: '1.125rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          Một không gian đọc, nghe và xem dành cho gia đình. Chúng tôi tạo ra những bộ truyện tranh 
          và video ca nhạc thiếu nhi rõ nét, hiện đại để cha mẹ và con cái cùng thưởng thức.
        </p>
      </section>

      {/* Section Navigation des contenus */}
      <section
        role="region"
        aria-labelledby="content-navigation-heading"
        style={{ marginBottom: '3rem' }}
      >
        <h2 
          id="content-navigation-heading" 
          className="sr-only"
        >
          Khám phá nội dung
        </h2>
        
        <div className="home-grid">
          {/* Article Truyện Tranh */}
          <article 
            className="content-card home-card" 
            itemScope 
            itemType="https://schema.org/CreativeWork"
            role="article"
            aria-labelledby="comic-heading"
          >
            <Link 
              href="/bd"
              aria-label="Xem tất cả truyện tranh thiếu nhi - Nội dung giáo dục cho trẻ từ 3-12 tuổi"
            >
              <figure style={{ 
                width: '100%', 
                height: '300px', 
                position: 'relative',
                marginBottom: '1.5rem',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                margin: '0 0 1.5rem 0'
              }}>
                <Image
                  src="/bd/thumbnail-default.webp"
                  alt="Minh họa truyện tranh thiếu nhi với nhân vật hoạt hình đầy màu sắc và nội dung giáo dục phù hợp cho trẻ từ 3 đến 12 tuổi"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  itemProp="image"
                  priority
                />
              </figure>
              
              <h3 
                id="comic-heading"
                className="title-small" 
                itemProp="name"
                style={{ marginBottom: '0.75rem' }}
              >
                Truyện Tranh
              </h3>
              
              <p 
                className="description-text text-spacing" 
                itemProp="description"
                style={{ marginBottom: '1rem' }}
              >
                Khám phá bộ sưu tập truyện tranh với nội dung giáo dục, phù hợp cho trẻ từ 3-12 tuổi. 
                Mỗi câu chuyện mang thông điệp ý nghĩa về tính cách, sự dũng cảm và lòng tốt.
              </p>
              
              <span 
                className="button-green"
                role="button"
                aria-label="Nhấn để xem danh sách truyện tranh"
              >
                Xem truyện tranh →
              </span>
            </Link>
          </article>

          {/* Article Video Ca Nhạc */}
          <article 
            className="content-card home-card" 
            itemScope 
            itemType="https://schema.org/CreativeWork"
            role="article"
            aria-labelledby="music-heading"
          >
            <Link 
              href="/clips"
              aria-label="Xem tất cả video ca nhạc thiếu nhi - Nội dung vui nhộn và an toàn cho trẻ"
            >
              <figure style={{ 
                width: '100%', 
                height: '300px', 
                position: 'relative',
                marginBottom: '1.5rem',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                margin: '0 0 1.5rem 0'
              }}>
                <Image
                  src="/clips/khu-vuon-phep-mau/khu-vuon-phep-mau_thumb.webp"
                  alt="Thumbnail video ca nhạc thiếu nhi 'Khu vườn phép màu' với hình ảnh sống động, màu sắc rực rỡ và nhân vật hoạt hình dễ thương"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  itemProp="image"
                  priority
                />
              </figure>
              
              <h3 
                id="music-heading"
                className="title-small" 
                itemProp="name"
                style={{ marginBottom: '0.75rem' }}
              >
                Video Ca Nhạc
              </h3>
              
              <p 
                className="description-text text-spacing" 
                itemProp="description"
                style={{ marginBottom: '1rem' }}
              >
                Tuyển chọn ca nhạc thiếu nhi trong trẻo, sôi động và vui nhộn. 
                Nội dung an toàn, giúp trẻ phát triển ngôn ngữ và kỹ năng âm nhạc.
              </p>
              
              <span 
                className="button-green"
                role="button"
                aria-label="Nhấn để xem danh sách video ca nhạc"
              >
                Xem video →
              </span>
            </Link>
          </article>
        </div>
      </section>

      {/* Section À propos - Optimisé pour AEO */}
      <section 
        className="section-spacing" 
        itemScope 
        itemType="https://schema.org/AboutPage"
        role="region"
        aria-labelledby="about-heading"
      >
        <h2 
          id="about-heading"
          className="title-small text-center"
          style={{ marginBottom: '1.5rem' }}
        >
          Về Mẹ Bút Xanh
        </h2>
        
        <div 
          className="description-text text-spacing" 
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.8'
          }}
        >
          <p 
            itemProp="description" 
            style={{ marginBottom: '1rem' }}
          >
            <strong>Mẹ Bút Xanh</strong> là nền tảng giáo dục trực tuyến chuyên cung cấp nội dung chất lượng cao 
            cho trẻ em từ 3 đến 12 tuổi. Tất cả nội dung được thiết kế với sự tỉ mỉ, kết hợp giữa giải trí và 
            giáo dục để phát triển toàn diện cho trẻ.
          </p>
          
          <p style={{ marginBottom: '1rem' }}>
            <strong>Sứ mệnh của chúng tôi:</strong> Tạo ra không gian an toàn và lành mạnh để trẻ em học hỏi, 
            giải trí và phát triển toàn diện thông qua truyện tranh và âm nhạc. Mọi nội dung đều được chọn lọc 
            kỹ lưỡng để phù hợp với văn hóa và giá trị Việt Nam.
          </p>
          
          <p style={{ marginBottom: '1rem' }}>
            <strong>Cam kết chất lượng:</strong> Tất cả nội dung được kiểm duyệt kỹ lưỡng bởi đội ngũ chuyên gia 
            giáo dục, phù hợp với từng lứa tuổi, và hoàn toàn miễn phí cho mọi gia đình Việt Nam. 
            Chúng tôi không có quảng cáo và luôn đặt sự an toàn của trẻ lên hàng đầu.
          </p>
          
          <p>
            <strong>Giá trị cốt lõi:</strong> Miễn phí 100%, không quảng cáo, nội dung được kiểm duyệt chặt chẽ, 
            phát triển tư duy sáng tạo và kỹ năng ngôn ngữ cho trẻ em Việt Nam.
          </p>
        </div>
      </section>

      {/* Section FAQ - Optimisé pour AEO */}
      <section
        role="region"
        aria-labelledby="faq-section-heading"
      >
        <h2 id="faq-section-heading" className="sr-only">
          Câu hỏi thường gặp
        </h2>
        <FAQ />
      </section>

      {/* Note: Ajoutez le style .sr-only dans votre globals.css :
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      */}
    </>
  );
}
