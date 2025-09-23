"use client";
import * as React from "react";

// Image de secours si tout échoue
const HARD_FALLBACK =
  "https://dummyimage.com/540x960/0b0e18/ffffff&text=No+Cover";

// Construit une liste d'URLs candidates.
// - Si src a déjà une extension (.jpg/.png/.webp) -> on essaie celle-là, puis les autres.
// - Si src n'a PAS d'extension -> on essaie .jpg puis .png puis .webp.
// 👉 Ça permet d'écrire "/bd/cuocphieuluumoi/01" et de charger 01.jpg OU 01.png OU 01.webp.
function buildCandidates(src?: string) {
  if (!src || src.length === 0) return [HARD_FALLBACK];

  const match = src.match(/\.(jpe?g|png|webp)$/i);
  const exts = ["jpg", "png", "webp"];

  if (match) {
    const current = match[1].toLowerCase() === "jpeg" ? "jpg" : match[1].toLowerCase();
    const base = src.replace(/\.(jpe?g|png|webp)$/i, "");
    const ordered = [current, ...exts.filter((e) => e !== current)];
    return [...ordered.map((e) => `${base}.${e}`), HARD_FALLBACK];
  }

  // Pas d'extension -> on essaie tout
  return [...exts.map((e) => `${src}.${e}`), HARD_FALLBACK];
}

export default function ImgWithFallback(props: {
  src?: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const { src, alt, style, className } = props;
  const candidates = React.useMemo(() => buildCandidates(src), [src]);
  const [index, setIndex] = React.useState(0);

  const current = candidates[index] ?? HARD_FALLBACK;

  return (
    <img
      src={current}
      alt={alt}
      onError={() => {
        // Essayer l’URL suivante si la précédente 404
        setIndex((i) => (i + 1 < candidates.length ? i + 1 : i));
      }}
      style={style}
      className={className}
    />
  );
}
