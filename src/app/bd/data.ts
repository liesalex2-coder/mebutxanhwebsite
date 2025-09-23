export type Comic = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  pages: string[];
};

export const comics: Comic[] = [
  {
    slug: "chiec-guong-ma-thuat",
    title: "Chiếc Gương Ma Thuật",
    summary: "Truyện ngắn thiếu nhi",
    cover: "/bd/chiec-guong-ma-thuat/cover_9x16.webp",
    pages: [
      "/bd/chiec-guong-ma-thuat/00.webp",
      "/bd/chiec-guong-ma-thuat/01.webp",
      "/bd/chiec-guong-ma-thuat/02.webp",
      "/bd/chiec-guong-ma-thuat/03.webp",
      "/bd/chiec-guong-ma-thuat/04.webp",
      "/bd/chiec-guong-ma-thuat/05.webp",
    ],
  },
  {
    slug: "cai-goi-biet-ngay",
    title: "Cái Gọi Biệt Ngạy",
    summary: "Truyện ngắn thiếu nhi",
    cover: "/bd/cai-goi-biet-ngay/cover_9x16.webp",
    pages: [
      "/bd/cai-goi-biet-ngay/00.webp",
      "/bd/cai-goi-biet-ngay/01.webp",
      "/bd/cai-goi-biet-ngay/02.webp",
      "/bd/cai-goi-biet-ngay/03.webp",
      "/bd/cai-goi-biet-ngay/04.webp",
      "/bd/cai-goi-biet-ngay/05.webp",
    ],
  },
  {
    slug: "tieng-vong-bi-an",
    title: "Tiếng Vọng Bí Ẩn",
    summary: "Truyện ngắn thiếu nhi",
    cover: "/bd/tieng-vong-bi-an/cover_9x16.webp",
    pages: [
      "/bd/tieng-vong-bi-an/00.webp",
      "/bd/tieng-vong-bi-an/01.webp",
      "/bd/tieng-vong-bi-an/02.webp",
      "/bd/tieng-vong-bi-an/03.webp",
      "/bd/tieng-vong-bi-an/04.webp",
      "/bd/tieng-vong-bi-an/05.webp",
    ],
  },
  {
    slug: "cai-bong-ky-quac",
    title: "Cái Bóng Kỳ Quặc",
    summary: "Truyện ngắn thiếu nhi",
    cover: "/bd/cai-bong-ky-quac/cover_9x16.webp",
    pages: [
      "/bd/cai-bong-ky-quac/00.webp",
      "/bd/cai-bong-ky-quac/01.webp",
      "/bd/cai-bong-ky-quac/02.webp",
      "/bd/cai-bong-ky-quac/03.webp",
      "/bd/cai-bong-ky-quac/04.webp",
      "/bd/cai-bong-ky-quac/05.webp",
    ],
  },
  {
    slug: "chiec-ba-lo-ky-quac",
    title: "Chiếc Ba Lô Kỳ Quặc",
    summary: "Truyện ngắn thiếu nhi",
    cover: "/bd/chiec-ba-lo-ky-quac/cover_9x16.webp",
    pages: [
      "/bd/chiec-ba-lo-ky-quac/00.webp",
      "/bd/chiec-ba-lo-ky-quac/01.webp",
      "/bd/chiec-ba-lo-ky-quac/02.webp",
      "/bd/chiec-ba-lo-ky-quac/03.webp",
      "/bd/chiec-ba-lo-ky-quac/04.webp",
      "/bd/chiec-ba-lo-ky-quac/05.webp",
    ],
  },
  {
    slug: "chiec-banh-mi-biet-chay",
    title: "Chiếc Bánh Mì Biết Chạy",
    summary: "Truyện ngắn thiếu nhi",
    cover: "/bd/chiec-banh-mi-biet-chay/cover_9x16.webp",
    pages: [
      "/bd/chiec-banh-mi-biet-chay/00.webp",
      "/bd/chiec-banh-mi-biet-chay/01.webp",
      "/bd/chiec-banh-mi-biet-chay/02.webp",
      "/bd/chiec-banh-mi-biet-chay/03.webp",
      "/bd/chiec-banh-mi-biet-chay/04.webp",
      "/bd/chiec-banh-mi-biet-chay/05.webp",
    ],
  },
  {
    slug: "cay-cau-bi-gay",
    title: "Cây Cau Bí Gày",
    summary: "Truyện ngắn thiếu nhi",
    cover: "/bd/cay-cau-bi-gay/cover_9x16.webp",
    pages: [
      "/bd/cay-cau-bi-gay/00.webp",
      "/bd/cay-cau-bi-gay/01.webp",
      "/bd/cay-cau-bi-gay/02.webp",
      "/bd/cay-cau-bi-gay/03.webp",
      "/bd/cay-cau-bi-gay/04.webp",
      "/bd/cay-cau-bi-gay/05.webp",
    ],
  },
  {
    slug: "banh-bao-canh-cut",
    title: "Bánh Bao & Cánh Cụt — cuộc phiêu lưu mới",
    summary: "Truyện ngắn thiếu nhi",
    cover: "/bd/cuocphieuluumoi/cover_9x16.webp",
    pages: [
      "/bd/cuocphieuluumoi/00.webp",
      "/bd/cuocphieuluumoi/01.webp",
      "/bd/cuocphieuluumoi/02.webp",
      "/bd/cuocphieuluumoi/03.webp",
      "/bd/cuocphieuluumoi/04.webp",
    ],
  },
];

export function getComicBySlug(slug: string) {
  return comics.find((c) => c.slug === slug);
}