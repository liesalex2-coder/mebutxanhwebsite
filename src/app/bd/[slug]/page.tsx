import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Données des BD avec génération automatique des pages
const bdData = {
  "cai-bong-ky-quac": {
    title: "Cái Bóng Kỳ Quác",
    description: "Câu chuyện về một cái bóng kỳ lạ và những cuộc phiêu lưu thú vị.",
    maxPages: 6 // 00.webp à 05.webp
  },
  "cai-goi-biet-ngay": {
    title: "Cái Gối Biết Ngày",
    description: "Truyện về chiếc gối thần kỳ biết dự đoán ngày mai.",
    maxPages: 6 // Estimé, ajustez selon vos fichiers
  },
  "cay-cau-bi-gay": {
    title: "Cây Cầu Bị Gãy", 
    description: "Câu chuyện về cây cầu và tình bạn.",
    maxPages: 6
  },
  "chiec-ba-lo-ky-quac": {
    title: "Chiếc Ba Lô Kỳ Quác",
    description: "Cuộc phiêu lưu với chiếc ba lô ma thuật.",
    maxPages: 6
  },
  "chiec-banh-mi-biet-chay": {
    title: "Chiếc Bánh Mì Biết Chạy",
    description: "Truyện cười về chiếc bánh mì nghịch ngợm.",
    maxPages: 6
  },
  "chiec-guong-ma-thuat": {
    title: "Chiếc Gương Ma Thuật",
    description: "Bí ẩn xung quanh chiếc gương kỳ diệu.",
    maxPages: 6
  },
  "cuocphieuluumoi": {
    title: "Cuộc Phiêu Lưu Mới",
    description: "Những cuộc phiêu lưu đầy màu sắc của các nhân vật.",
    maxPages: 6
  },
  "tieng-vong-bi-an": {
    title: "Tiếng Vọng Bí Ẩn", 
    description: "Khám phá bí ẩn của những tiếng vọng từ xa.",
    maxPages: 6
  }
};

// Fonction pour générer les noms de pages automatiquement
function generatePages(maxPages: number): string[] {
  return Array.from({ length: maxPages }, (_, i) => 
    `${i.toString().padStart(2, '0')}.webp`
  );
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bd = bdData[slug as keyof typeof bdData];
  
  if (!bd) {
    return {
      title: "Truyện không tìm thấy - Mẹ Bút Xanh"
    };
  }

  return {
    title: `${bd.title} - Mẹ Bút Xanh`,
    description: bd.description,
  };
}

export default async function BDPage({ params }: Props) {
  const { slug } = await params;
  const bd = bdData[slug as keyof typeof bdData];

  // Si la BD n'existe pas, afficher 404
  if (!bd) {
    notFound();
  }

  return (
    <div className="section-spacing">
      {/* Navigation retour */}
      <div className="text-spacing">
        <Link href="/bd" className="nav-link">
          ← Quay lại truyện tranh
        </Link>
      </div>

      {/* Titre et description */}
      <h1 className="title-medium title-spacing text-center">
        {bd.title}
      </h1>
      
      <p className="description-text text-center text-spacing">
        {bd.description}
      </p>

      {/* Pages de la BD */}
      <div className="bd-reader">
        {generatePages(bd.maxPages).map((page, index) => (
          <div key={index} className="bd-page">
            <img
              src={`/bd/${slug}/${page}`}
              alt={`${bd.title} - Trang ${index + 1}`}
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                margin: '0 auto',
                display: 'block',
                borderRadius: '0.5rem',
                boxShadow: 'var(--shadow-medium)',
                marginBottom: '1rem'
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation entre BD */}
      <div className="text-center" style={{ marginTop: '3rem' }}>
        <Link href="/bd" className="button-green">
          Xem tất cả truyện tranh
        </Link>
      </div>
    </div>
  );
}

// Générer les routes statiques pour toutes les BD
export async function generateStaticParams() {
  return Object.keys(bdData).map((slug) => ({
    slug,
  }));
}