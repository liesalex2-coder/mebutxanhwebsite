// src/app/clips/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Ca Nhạc Thiếu Nhi - Miễn phí & An toàn | Mẹ Bút Xanh',
  description: 'Tuyển chọn video ca nhạc thiếu nhi trong trẻo, sôi động và vui nhộn. Nội dung giáo dục, phù hợp cho trẻ từ 3-12 tuổi.',
  keywords: ['video ca nhạc thiếu nhi', 'nhạc thiếu nhi YouTube', 'ca nhạc giáo dục', 'bài hát cho bé', 'TikTok thiếu nhi'],
  openGraph: {
    title: 'Video Ca Nhạc Thiếu Nhi - Mẹ Bút Xanh',
    description: 'Tuyển chọn video ca nhạc thiếu nhi giáo dục',
    type: 'website',
    locale: 'vi_VN',
  },
  alternates: {
    canonical: 'https://mebutxanh.com/clips',
  },
};

export default function ClipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}