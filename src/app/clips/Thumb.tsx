"use client";

import { useMemo, useState } from "react";

type Props = {
  slug: string;
  thumb?: string;
  title: string;
  className?: string;
};

function normalize(s?: string) {
  if (!s) return "";
  let t = s.replace(/^\.?\//, "");           // retire "./" ou "/" au début
  if (t.startsWith("public/")) t = t.slice(7); // retire "public/" si présent
  return t;
}

function makeCandidates(slug: string, raw?: string) {
  const base = normalize(raw); // ex: "clips/congchua-ngua-thanky/thumb.jpg" OU "thumb.jpg"
  const hasExt = /\.(png|jpe?g|webp|gif)$/i.test(base);
  const core = base.replace(/\.(png|jpe?g|webp|gif)$/i, "");

  const list: string[] = [];
  if (base) {
    // 1) tel quel mais en absolu
    list.push("/" + base);
    // 2) sous /clips/<slug>/
    list.push(`/clips/${slug}/${base}`);
    // 3) si pas d’extension, on tente avec extensions courantes
    if (!hasExt) {
      [".jpg", ".png", ".webp", ".jpeg"].forEach((ext) => {
        list.push(`/${core}${ext}`);
        list.push(`/clips/${slug}/${core}${ext}`);
      });
    }
  }

  // 4) conventions fréquentes de thumb
  [".jpg", ".png", ".webp"].forEach((ext) => {
    list.push(`/clips/${slug}/${slug}_thumb${ext}`);
  });

  // 5) dernier filet de sécurité (icône app)
  list.push("/seo_assets/icon-192.png", "/seo_assets/icon-512.png");

  // remove dupes
  return Array.from(new Set(list));
}

export default function Thumb({ slug, thumb, title, className }: Props) {
  const candidates = useMemo(() => makeCandidates(slug, thumb), [slug, thumb]);
  const [i, setI] = useState(0);

  // évite boucle infinie si toutes échouent
  const onError = () => {
    setI((prev) => (prev + 1 < candidates.length ? prev + 1 : prev));
  };

  return (
    <img
      src={candidates[i]}
      alt={title}
      onError={onError}
      loading="lazy"
      decoding="async"
      className={className}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}
