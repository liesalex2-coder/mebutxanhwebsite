import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mẹ Bút Xanh - Truyện tranh và video ca nhạc thiếu nhi",
    template: "%s | Mẹ Bút Xanh"
  },
  description: "Một không gian đọc, nghe và xem dành cho gia đình. Chúng tôi tạo ra những bộ truyện tranh và video ca nhạc thiếu nhi rõ nét, hiện đại để cha mẹ và con cái cùng thưởng thức.",
  keywords: ['truyện tranh thiếu nhi', 'video ca nhạc trẻ em', 'giáo dục trẻ em', 'truyện tranh việt nam', 'ca nhạc thiếu nhi'],
  authors: [{ name: 'Mẹ Bút Xanh' }],
  creator: 'Mẹ Bút Xanh',
  publisher: 'Mẹ Bút Xanh',
  metadataBase: new URL('https://mebutxanh.com'),
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://mebutxanh.com',
    siteName: 'Mẹ Bút Xanh',
    title: 'Mẹ Bút Xanh - Truyện tranh và video ca nhạc thiếu nhi',
    description: 'Bộ sưu tập truyện tranh và video ca nhạc giáo dục cho trẻ em',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mẹ Bút Xanh',
    description: 'Truyện tranh và video ca nhạc thiếu nhi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD pour l'organisation (GEO optimisé)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mẹ Bút Xanh',
    url: 'https://mebutxanh.com',
    logo: 'https://mebutxanh.com/Branding/banner.webp',
    description: 'Truyện tranh và video ca nhạc giáo dục cho trẻ em Việt Nam',
    sameAs: [
      'https://www.youtube.com/@MeButXanhkechuyen',
      'https://www.tiktok.com/@mebutxanhkechuyen'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Vietnamese']
    }
  };

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="header-content">
              <Link href="/" className="logo logo-text">
                🌸 Mẹ Bút Xanh
              </Link>
              <nav className="nav">
                <Link href="/" className="nav-link">
                  Trang chủ
                </Link>
                <Link href="/bd" className="nav-link">
                  Truyện tranh
                </Link>
                <Link href="/clips" className="nav-link">
                  Video ca nhạc
                </Link>
                <Link href="/lien-he" className="nav-link">
                  Liên hệ
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Bannière avec image */}
        <div className="banner">
          <div className="container">
            <div className="banner-container">
              <div style={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image
                  src="/Branding/banner.webp"
                  alt="Truyện tranh và video ca nhạc thiếu nhi - Mẹ Bút Xanh"
                  width={1200}
                  height={400}
                  priority
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '0.5rem'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <main>
          <div className="container">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            {/* Call to action */}
            <section className="section-spacing">
              <h3 className="title-small">Tham gia cùng Mẹ Bút Xanh!</h3>
              <p className="description-text text-spacing">
                Hãy theo dõi chúng tôi để nhận truyện tranh và video ca nhạc mới mỗi tuần — miễn phí, an toàn cho trẻ em.
              </p>
              <div className="social-buttons">
                <a 
                  href="https://www.youtube.com/@MeButXanhkechuyen" 
                  className="button-youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Xem trên YouTube
                </a>
                <a 
                  href="https://www.tiktok.com/@mebutxanhkechuyen" 
                  className="button-tiktok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎵 Theo dõi TikTok
                </a>
              </div>
            </section>
            
            {/* Copyright */}
            <p className="small-text">
              © 2025 Truyện tranh & Video ca nhạc thiếu nhi
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}