import { useState } from "react";

// Deterministic technical glyph so every placeholder looks distinct and on-brand
// without relying on external/fake photography.
function hashSeed(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

function PlaceholderGlyph({ seed }: { seed: number }) {
  const n = (seed % 5) + 4;
  const r = 30 + (seed % 3) * 6;
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" role="img" aria-hidden="true">
      <rect width="200" height="140" fill="#EEF1F3" />
      <g stroke="#1688C9" strokeWidth="0.8" opacity="0.18">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1={0} y1={(i + 1) * 20} x2={200} y2={(i + 1) * 20} />
        ))}
      </g>
      <circle cx="100" cy="70" r={r} fill="none" stroke="#075985" strokeWidth="1.5" opacity="0.85" />
      <circle cx="100" cy="70" r={r * 0.45} fill="none" stroke="#22A9D6" strokeWidth="1" opacity="0.7" />
      {Array.from({ length: n }).map((_, i) => {
        const angle = (i / n) * 2 * Math.PI;
        const x1 = 100 + r * Math.cos(angle);
        const y1 = 70 + r * Math.sin(angle);
        const x2 = 100 + (r + 10) * Math.cos(angle);
        const y2 = 70 + (r + 10) * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1688C9" strokeWidth="2" />;
      })}
    </svg>
  );
}

export default function ProductImage({
  src,
  alt,
  seedKey,
  className = "",
}: {
  src?: string;
  alt: string;
  seedKey: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <div className={`bg-softgray overflow-hidden ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={() => setErrored(true)}
        />
      ) : (
        <PlaceholderGlyph seed={hashSeed(seedKey)} />
      )}
    </div>
  );
}
