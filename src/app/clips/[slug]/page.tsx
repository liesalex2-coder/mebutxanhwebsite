// src/app/clips/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { CSV_CLIPS } from "../../../content.config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ClipPage({ params }: PageProps) {
  const { slug } = await params;
  const clip = CSV_CLIPS.find((c) => c.slug === slug);

  if (!clip) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{clip.title}</h1>
      <p className="text-gray-700 mb-6">{clip.description}</p>

      {/* Vignette */}
      <div className="mb-6">
        <Image
          src={`/clips/${clip.slug}/${clip.thumb}`}
          alt={clip.title}
          width={400}
          height={250}
          className="rounded shadow"
        />
      </div>

      {/* Vidéo */}
      {clip.videoUrl ? (
        <div className="aspect-video">
          <iframe
            src={clip.videoUrl}
            title={clip.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded shadow"
          ></iframe>
        </div>
      ) : (
        <p className="text-gray-500">Chưa có video cho clip này.</p>
      )}
    </div>
  );
}