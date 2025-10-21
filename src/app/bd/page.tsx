import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truyện tranh thiếu nhi - Mẹ Bút Xanh",
  description: "Bộ sưu tập truyện tranh thiếu nhi với những câu chuyện ấm áp, minh họa rõ ràng, chữ to dễ đọc.",
};

// Liste des BD avec nom de dossier et titre d'affichage
const bdList = [
  { folder: "cai-bong-ky-quac", title: "Cái Bóng Kỳ Quác" },
  { folder: "cai-goi-biet-ngay", title: "Cái Gối Biết Ngày" },
  { folder: "cay-cau-bi-gay", title: "Cây Cầu Bị Gãy" },
  { folder: "chiec-ba-lo-ky-quac", title: "Chiếc Ba Lô Kỳ Quác" },
  { folder: "chiec-banh-mi-biet-chay", title: "Chiếc Bánh Mì Biết Chạy" },
  { folder: "chiec-guong-ma-thuat", title: "Chiếc Gương Ma Thuật" },
  { folder: "cuocphieuluumoi", title: "Cuộc Phiêu Lưu Mới" },
  { folder: "tieng-vong-bi-an", title: "Tiếng Vọng Bí Ẩn" },
];

export default function BDPage() {
  return (
    <div className="section-spacing">
      <h1 className="title-medium title-spacing text-center">
        Truyện tranh thiếu nhi
      </h1>
      
      <p className="description-text text-center text-spacing">
        Những câu chuyện ấm áp, minh họa rõ ràng, chữ to dễ đọc — phù hợp để ba mẹ kể cùng con.
      </p>

      <div className="bd-grid">
        {bdList.map((bd, index) => (
          <Link key={index} href={`/bd/${bd.folder}`}>
            <div className="content-card grid-card">
              <div className="bd-image-container">
                <img
                  src={`/bd/${bd.folder}/cover_9x16.webp`}
                  alt={bd.title}
                  className="bd-image"
                />
              </div>
              <div>
                <h3 className="card-title">{bd.title}</h3>
                <p className="card-subtitle">Truyện ngắn thiếu nhi</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}