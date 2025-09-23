import { notFound } from "next/navigation";
import Img from "../../ImgWithFallback";
import { getComicBySlug } from "../data";
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comic = getComicBySlug(slug);
  
  if (!comic) {
    return {
      title: 'Truyện không tìm thấy',
      description: 'Truyện tranh bạn tìm kiếm không có sẵn.',
    };
  }

  const title = `${comic.title} - Truyện tranh thiếu nhi`;
  const description = `${comic.summary}. Đọc truyện tranh thiếu nhi "${comic.title}" với minh họa đẹp và nội dung giáo dục phù hợp cho gia đình.`;

  return {
    title: comic.title,
    description,
    keywords: [
      comic.title,
      "truyện tranh thiếu nhi",
      "truyện cho bé",
      "Bánh Bao Cánh Cụt",
      "giáo dục trẻ em",
      "truyện gia đình",
      comic.slug
    ],
    openGraph: {
      title,
      description: comic.summary,
      url: `/bd/${comic.slug}`,
      type: 'article',
      images: [
        {
          url: comic.cover,
          width: 600,
          height: 800,
          alt: comic.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: comic.summary,
      images: [comic.cover],
    },
    alternates: {
      canonical: `/bd/${comic.slug}`,
    },
  };
}

export default async function ComicPage({ params }: PageProps) {
  const { slug } = await params;
  const comic = getComicBySlug(slug);
  if (!comic) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">{comic.title}</h1>

      <div className="space-y-6">
        {comic.pages.map((src, i) => (
          <div key={src} className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <Img
                src={src}
                alt={`${comic.title} — page ${i + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto max-h-screen object-contain shadow-lg rounded-lg"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <a
          href="/bd"
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
        >
          ← Quay lại truyện tranh
        </a>
      </div>
    </div>
  );
}