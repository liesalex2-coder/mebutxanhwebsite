import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trang chủ - Mẹ Bút Xanh",
  description: "Một không gian đọc, nghe và xem dành cho gia đình. Chúng tôi tạo ra những bộ truyện tranh và video ca nhạc thiếu nhi rõ nét, hiện đại để cha mẹ và con cái cùng thưởng thức.",
};

export default function HomePage() {
  return (
    <div className="section-spacing">
      
      {/* Introduction */}
      <div className="text-center section-spacing">
        <p className="body-text">
          Một không gian đọc, nghe và xem dành cho gia đình. Chúng tôi tạo ra những bộ truyện tranh và video ca nhạc thiếu nhi rõ nét, hiện đại để cha mẹ và con cái cùng thưởng thức.
        </p>
      </div>

      {/* 2 cartes principales avec vraies images */}
      <div className="home-grid">
        
        {/* Carte BD */}
        <Link href="/bd">
          <div className="content-card home-card">
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                width: '100%',
                height: '200px',
                position: 'relative',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                marginBottom: '1rem'
              }}>
                <Image
                  src="/bd/thumbnail-default.webp"
                  alt="Truyện tranh thiếu nhi"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="grid-image"
                />
              </div>
            </div>
            
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📚</div>
              <h2 className="title-small" style={{ marginBottom: '1rem' }}>
                Truyện tranh cho trẻ em
              </h2>
              <p className="description-text" style={{ marginBottom: '1.5rem' }}>
                Những câu chuyện ấm áp, minh họa rõ ràng, chữ to dễ đọc — phù hợp để ba mẹ kể cùng con và nuôi dưỡng thói quen đọc mỗi ngày.
              </p>
              <div className="button-green">
                Xem tất cả truyện tranh
              </div>
            </div>
          </div>
        </Link>

        {/* Carte Clips */}
        <Link href="/clips">
          <div className="content-card home-card">
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                width: '100%',
                height: '200px',
                position: 'relative',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                marginBottom: '1rem'
              }}>
                <Image
                  src="/clips/thumbnail-default.webp"
                  alt="Video ca nhạc thiếu nhi"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="grid-image"
                />
                {/* Overlay avec bouton play */}
                <div className="clips-overlay">
                  <button className="play-button-circle">
                    ▶
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎵</div>
              <h2 className="title-small" style={{ marginBottom: '1rem' }}>
                Video ca nhạc dành cho trẻ em
              </h2>
              <p className="description-text" style={{ marginBottom: '1.5rem' }}>
                Những bài hát thiếu nhi hiện đại, trong trẻo và sôi động, giúp trẻ vừa nghe vừa học.
              </p>
              <div className="button-green">
                Xem tất cả video ca nhạc
              </div>
            </div>
          </div>
        </Link>

      </div>

      {/* Call to action final */}
      <div className="text-center section-spacing">
        <h3 className="title-small" style={{ marginBottom: '1rem' }}>
          Tham gia cùng Bánh Bao!
        </h3>
        <p className="description-text">
          Hãy theo dõi chúng tôi để nhận truyện tranh và video ca nhạc mới mỗi tuần — miễn phí, an toàn cho trẻ em.
        </p>
      </div>

    </div>
  );
}