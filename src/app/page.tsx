// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mẹ Bút Xanh - Truyện tranh và video ca nhạc thiếu nhi',
  description: 'Bộ sưu tập truyện tranh và video ca nhạc giáo dục cho trẻ em từ 3-12 tuổi. Nội dung lành mạnh, miễn phí, an toàn.',
  openGraph: {
    title: 'Mẹ Bút Xanh - Nội dung giáo dục cho trẻ',
    description: 'Truyện tranh và video ca nhạc thiếu nhi',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mẹ Bút Xanh',
    url: 'https://mebutxanh.com',
    description: 'Truyện tranh và video ca nhạc giáo dục cho trẻ em Việt Nam',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mebutxanh.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-spacing">
        <h2 className="title-medium text-center">
          Chào mừng đến với Mẹ Bút Xanh
        </h2>
        <p className="description-text text-center text-spacing">
          Một không gian đọc, nghe và xem dành cho gia đình. Chúng tôi tạo ra những bộ truyện tranh 
          và video ca nhạc thiếu nhi rõ nét, hiện đại để cha mẹ và con cái cùng thưởng thức.
        </p>
      </section>

      <div className="home-grid">
        {/* Section Truyện Tranh */}
        <article className="content-card home-card" itemScope itemType="https://schema.org/CreativeWork">
          <Link href="/bd">
            <div style={{ 
              width: '100%', 
              height: '300px', 
              position: 'relative',
              marginBottom: '1.5rem',
              borderRadius: '0.5rem',
              overflow: 'hidden'
            }}>
              <Image
                src="/bd/cai-bong-ky-quac/cover_9x16.webp"
                alt="Truyện tranh thiếu nhi - Giáo dục và giải trí"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                itemProp="image"
              />
            </div>
            <h3 className="title-small" itemProp="name">Truyện Tranh</h3>
            <p className="description-text text-spacing" itemProp="description">
              Khám phá bộ sưu tập truyện tranh với nội dung giáo dục, phù hợp cho trẻ từ 3-12 tuổi. 
              Mỗi câu chuyện mang thông điệp ý nghĩa về tính cách, sự dũng cảm và lòng tốt.
            </p>
            <span className="button-green">
              Xem truyện tranh →
            </span>
          </Link>
        </article>

        {/* Section Video Ca Nhạc */}
        <article className="content-card home-card" itemScope itemType="https://schema.org/CreativeWork">
          <Link href="/clips">
            <div style={{ 
              width: '100%', 
              height: '300px', 
              position: 'relative',
              marginBottom: '1.5rem',
              borderRadius: '0.5rem',
              overflow: 'hidden'
            }}>
              <Image
                src="/clips/khu-vuon-phep-mau/khu-vuon-phep-mau_thumb.webp"
                alt="Video ca nhạc thiếu nhi - Vui nhộn và sôi động"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                itemProp="image"
              />
            </div>
            <h3 className="title-small" itemProp="name">Video Ca Nhạc</h3>
            <p className="description-text text-spacing" itemProp="description">
              Tuyển chọn ca nhạc thiếu nhi trong trẻo, sôi động và vui nhộn. 
              Nội dung an toàn, giúp trẻ phát triển ngôn ngữ và kỹ năng âm nhạc.
            </p>
            <span className="button-green">
              Xem video →
            </span>
          </Link>
        </article>
      </div>

      {/* Section À propos - Optimisé pour GEO */}
<section className="section-spacing" itemScope itemType="https://schema.org/AboutPage">
  <h2 className="title-small text-center">Về Mẹ Bút Xanh</h2>
  <div className="description-text text-spacing" style={{ maxWidth: '800px', margin: '0 auto' }}>
    <p itemProp="description" style={{ marginBottom: '1rem' }}>
      <strong>Mẹ Bút Xanh</strong> là nền tảng giáo dục trực tuyến chuyên cung cấp nội dung chất lượng cao 
      cho trẻ em từ 3 đến 12 tuổi.
    </p>
    <p style={{ marginBottom: '1rem' }}>
      <strong>Sứ mệnh:</strong> Tạo ra không gian an toàn và lành mạnh để trẻ em học hỏi, 
      giải trí và phát triển toàn diện thông qua truyện tranh và âm nhạc.
    </p>
    <p>
      <strong>Cam kết:</strong> Tất cả nội dung được kiểm duyệt kỹ lưỡng, phù hợp với lứa tuổi, 
      và hoàn toàn miễn phí cho gia đình.
    </p>
  </div>
</section>
    </>
  );
}