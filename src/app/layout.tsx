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
  metadataBase: new URL('https://www.mebutxanh.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.mebutxanh.com',
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
  // JSON-LD pour l'organisation (SEO/AEO optimisé)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mẹ Bút Xanh',
    url: 'https://www.mebutxanh.com',
    logo: 'https://www.mebutxanh.com/Branding/banner.webp',
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
        {/* Skip link pour accessibilité clavier - géré par CSS */}
        <a 
          href="#main-content"
          className="skip-link"
          tabIndex={0}
        >
          Bỏ qua đến nội dung chính
        </a>

        {/* Header avec balises sémantiques */}
        <header className="header" role="banner">
          <div className="container">
            <div className="header-content">
              <Link 
                href="/" 
                className="logo logo-text"
                aria-label="Trang chủ Mẹ Bút Xanh"
              >
                <span aria-hidden="true">🌸</span> Mẹ Bút Xanh
              </Link>
              
              {/* Navigation avec ARIA */}
              <nav 
                className="nav" 
                role="navigation" 
                aria-label="Navigation chính"
              >
                <Link 
                  href="/" 
                  className="nav-link"
                >
                  Trang chủ
                </Link>
                <Link 
                  href="/bd" 
                  className="nav-link"
                >
                  Truyện tranh
                </Link>
                <Link 
                  href="/clips" 
                  className="nav-link"
                >
                  Video ca nhạc
                </Link>
                <Link 
                  href="/lien-he" 
                  className="nav-link"
                >
                  Liên hệ
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Bannière avec figure sémantique */}
        <section className="banner" aria-label="Bannière trang web">
          <div className="container">
            <div className="banner-container">
              <figure style={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0
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
              </figure>
            </div>
          </div>
        </section>

        {/* Contenu principal avec balise main */}
        <main id="main-content" role="main">
          <div className="container">
            {children}
          </div>
        </main>

        {/* Footer avec balise sémantique */}
        <footer className="footer" role="contentinfo">
          <div className="container">
            {/* Call to action */}
            <section className="section-spacing" aria-labelledby="cta-heading">
              <h3 id="cta-heading" className="title-small">
                Tham gia cùng Mẹ Bút Xanh!
              </h3>
              <p className="description-text text-spacing">
                Hãy theo dõi chúng tôi để nhận truyện tranh và video ca nhạc mới mỗi tuần — miễn phí, an toàn cho trẻ em.
              </p>
              
              {/* Liens sociaux avec ARIA */}
              <nav 
                className="social-buttons" 
                role="navigation" 
                aria-label="Liên kết mạng xã hội"
              >
                <a 
                  href="https://www.youtube.com/@MeButXanhkechuyen" 
                  className="button-youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Xem kênh YouTube của chúng tôi (mở trong tab mới)"
                >
                  <span aria-hidden="true">▶</span> Xem trên YouTube
                </a>
                <a 
                  href="https://www.tiktok.com/@mebutxanhkechuyen" 
                  className="button-tiktok"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Theo dõi TikTok của chúng tôi (mở trong tab mới)"
                >
                  <span aria-hidden="true">🎵</span> Theo dõi TikTok
                </a>
              </nav>
            </section>
            
            {/* Copyright */}
            <p className="small-text" role="contentinfo">
              <small>© 2025 Truyện tranh & Video ca nhạc thiếu nhi</small>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
