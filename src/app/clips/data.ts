export type Clip = {
  slug: string;
  title: string;
  keywords: string;
  thumbnail: string;
};

export const clips: Clip[] = [
  {
    slug: "khu-vuon-than-tien-lung-linh",
    title: "Khu Vuon Than Tien Lung Linh",
    keywords: "",
    thumbnail: "/clips/khu-vuon-than-tien-lung-linh/khu-vuon-than-tien-lung-linh_thumb.jpg",
  },
  {
    slug: "khu-vuon-phep-mau",
    title: "Khu Vuon Phep Mau",
    keywords: "",
    thumbnail: "/clips/khu-vuon-phep-mau/khu-vuon-phep-mau_thumb.jpg",
  },
  {
    slug: "cong-chua-va-the-gioi-mo-mong",
    title: "Cong Chua Va The Gioi Mo Mong",
    keywords: "",
    thumbnail: "/clips/cong-chua-va-the-gioi-mo-mong/cong-chua-va-the-gioi-mo-mong_thumb.jpg",
  },
  {
    slug: "cong-chua-va-song-than-ky",
    title: "Cong Chua Va Song Than Ky",
    keywords: "",
    thumbnail: "/clips/cong-chua-va-song-than-ky/cong-chua-va-song-than-ky_thumb.jpg",
  },
  {
    slug: "cong-chua-va-phep-mau-trong-rung",
    title: "Cong Chua Va Phep Mau Trong Rung",
    keywords: "",
    thumbnail: "/clips/cong-chua-va-phep-mau-trong-rung/cong-chua-va-phep-mau-trong-rung_thumb.jpg",
  },
  {
    slug: "cong-chua-va-chu-rong-nho",
    title: "Cong Chua Va Chu Rong Nho",
    keywords: "",
    thumbnail: "/clips/cong-chua-va-chu-rong-nho/cong-chua-va-chu-rong-nho_thumb.jpg",
  },
  {
    slug: "cong-chua-nho-va-giac-mo",
    title: "Cong Chua Nho Va Giac Mo",
    keywords: "",
    thumbnail: "/clips/cong-chua-nho-va-giac-mo/cong-chua-nho-va-giac-mo_thumb.jpg",
  },
  {
    slug: "cong-chua-mong-mo",
    title: "Cong Chua Mong Mo",
    keywords: "",
    thumbnail: "/clips/cong-chua-mong-mo/cong-chua-mong-mo_thumb.jpg",
  },
  {
    slug: "cong-chua-va-ngoi-sao-sang",
    title: "Cong Chua Va Ngoi Sao Sang",
    keywords: "",
    thumbnail: "/clips/cong-chua-va-ngoi-sao-sang/cong-chua-va-ngoi-sao-sang_thumb.jpg",
  },
  {
    slug: "cong-chua-va-con-ngua-than-ky",
    title: "Cong chua va con ngua than ky",
    keywords: "princess, magical horse, kids song",
    thumbnail: "/clips/congchua-ngua-thanky/congchua-ngua-thanky_thumb.jpg",
  },
];

export function getClipBySlug(slug: string) {
  return clips.find((c) => c.slug === slug);
}