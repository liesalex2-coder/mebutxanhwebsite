import Link from "next/link";
import Img from "../ImgWithFallback";
import { comics } from "./data";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Truyện tranh thiếu nhi",
  description: "Bộ sưu tập truyện tranh thiếu nhi với những câu chuyện ấm áp, minh họa rõ ràng, chữ to dễ đọc. Phù hợp để cha mẹ kể cùng con và nuôi dưỡng thói quen đọc.",
  keywords: [
    "truyện tranh thiếu nhi",
    "truyện cho bé",
    "Bánh Bao Cánh Cụt",
    "truyện gia đình",
    "đọc truyện cho bé",
    "minh họa trẻ em",
    "giáo dục qua truyện"
  ],
  openGraph: {
    title: 'Truyện tranh thiếu nhi | Mẹ Bút Xanh',
    description: 'Những câu chuyện ấm áp với minh họa rõ ràng, chữ to dễ đọc cho trẻ em.',
    url: '/bd',
    type: 'website',
  },
  alternates: {
    canonical: '/bd',
  },
};

export default function BdListPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Truyện tranh</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {comics.map((c) => (
          <Link
            key={c.slug}
            href={`/bd/${c.slug}`}
            className="group rounded-xl border border-neutral-200/70 bg-white shadow-sm overflow-hidden block hover:shadow-md transition"
          >
            <div className="relative aspect-square w-full flex items-center justify-center">
              <div className="w-3/4 h-3/4 relative">
                <Img
                  src={c.cover}
                  alt={c.title}
                  fill
                  className="object-cover rounded group-hover:scale-110 transition"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  priority
                />
              </div>
            </div>

            <div className="p-3 flex flex-col items-center">
              <div className="w-3/4 text-center">
                <h2 className="font-semibold text-sm leading-tight">{c.title}</h2>
                <p className="text-xs text-neutral-600 mt-1 line-clamp-2">{c.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}