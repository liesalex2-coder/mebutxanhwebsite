import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video ca nhạc thiếu nhi - Mẹ Bút Xanh",
  description: "Tuyển chọn ca nhạc thiếu nhi trong trẻo, sôi động và vui nhộn.",
};

// Liste des clips avec nom de dossier et titre d'affichage
const clips = [
  { folder: "cong-chua-mong-mo", title: "Cong Chua Mong Mo" },
  { folder: "congchua-ngua-thanky", title: "Congchua Ngua Thanky" },
  { folder: "cong-chua-nho-va-giac-mo", title: "Cong Chua Nho Va Giac Mo" },
  { folder: "cong-chua-va-chu-rong-nho", title: "Cong Chua Va Chu Rong Nho" },
  { folder: "cong-chua-va-ngoi-sao-sang", title: "Cong Chua Va Ngoi Sao Sang" },
  { folder: "cong-chua-va-phep-mau-trong-rung", title: "Cong Chua Va Phep Mau Trong Rung" },
  { folder: "cong-chua-va-song-than-ky", title: "Cong Chua Va Song Than Ky" },
  { folder: "cong-chua-va-the-gioi-mo-mong", title: "Cong Chua Va The Gioi Mo Mong" },
  { folder: "khu-vuon-phep-mau", title: "Khu Vuon Phep Mau" },
  { folder: "khu-vuon-than-tien-lung-linh", title: "Khu Vuon Than Tien Lung Linh" },
];

export default function ClipsPage() {
  return (
    <div className="section-spacing">
      <h1 className="title-medium title-spacing text-center">
        Video ca nhạc thiếu nhi
      </h1>
      
      <p className="description-text text-center text-spacing">
        Những bài hát thiếu nhi hiện đại, trong trẻo và sôi động, giúp trẻ vừa nghe vừa học.
      </p>

      <div className="clips-grid">
        {clips.map((clip, index) => (
          <a 
            key={index}
            href="https://www.youtube.com/@MeButXanhkechuyen" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-card grid-card">
              <div className="clips-image-container">
                <img
                  src={`/clips/${clip.folder}/${clip.folder}_thumb.webp`}
                  alt={clip.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '0.5rem'
                  }}
                />
                <div className="clips-overlay">
                  <button className="play-button-circle">▶</button>
                </div>
              </div>
              <div>
                <h3 className="card-title">{clip.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}