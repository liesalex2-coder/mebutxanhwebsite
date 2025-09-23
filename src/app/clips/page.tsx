import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next'
import { clips } from './data';

export const metadata: Metadata = {
  title: "Video ca nhạc thiếu nhi",
  description: "Tuyển chọn ca nhạc thiếu nhi trong trẻo, sôi động và vui nhộn. Những bài hát giúp trẻ vừa nghe vừa học với nội dung giáo dục phù hợp.",
  keywords: [
    "video ca nhạc trẻ em",
    "nhạc thiếu nhi",
    "bài hát cho bé",
    "ca nhạc gia đình",
    "nhạc giáo dục",
    "video thiếu nhi",
    "âm nhạc trẻ em"
  ],
  openGraph: {
    title: 'Video ca nhạc thiếu nhi | Mẹ Bút Xanh',
    description: 'Ca nhạc thiếu nhi trong trẻo, sôi động giúp trẻ vừa nghe vừa học.',
    url: '/clips',
    type: 'website',
  },
  alternates: {
    canonical: '/clips',
  },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Clips</h1>
      <p className="text-gray-700 mb-8">
        Tuyển chọn ca nhạc thiếu nhi — trong trẻo, sôi động và vui nhộn.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clips.map((clip) => (
          <a
            key={clip.slug}
            href="https://www.youtube.com/@MeButXanhkechuyen"
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="relative aspect-video bg-gray-100">
              <Image
                src={clip.thumbnail}
                alt={clip.title}
                fill
                className="object-cover group-hover:scale-105 transition"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <span className="text-white text-lg">▶</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-semibold">{clip.title}</h2>
              <p className="mt-1 text-sm text-gray-600">Xem trên YouTube</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}