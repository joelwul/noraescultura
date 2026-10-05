import manifest from "../lib/image-manifest.json";

type ManifestEntry = { w: number; h: number; widths: number[] };
const M = manifest as Record<string, ManifestEntry>;

type Props = {
  slug: keyof typeof manifest | string;
  alt: string;
  /** Tailwind classes applied to the rendered <img>. */
  className?: string;
  /** Wrapper className (applied to <picture>). */
  pictureClassName?: string;
  /** Responsive `sizes` attribute. Defaults to 100vw. */
  sizes?: string;
  /** True for the LCP/hero image only. */
  priority?: boolean;
};

function buildSrcSet(slug: string, ext: "avif" | "webp") {
  const entry = M[slug];
  if (!entry) return "";
  return entry.widths.map((w) => `/images/${slug}-${w}.${ext} ${w}w`).join(", ");
}

export function Picture({
  slug,
  alt,
  className,
  pictureClassName,
  sizes = "100vw",
  priority = false,
}: Props) {
  const entry = M[slug];
  if (!entry) {
    // Graceful fallback — should never happen at runtime.
    return null;
  }
  const widths = entry.widths;
  const fallbackWidth = widths[widths.length - 1];
  const fallback = `/images/${slug}-${fallbackWidth}.webp`;
  const avifSrcSet = buildSrcSet(slug, "avif");
  const webpSrcSet = buildSrcSet(slug, "webp");

  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={entry.w}
        height={entry.h}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore — valid HTML attribute, React types lag.
        fetchpriority={priority ? "high" : undefined}
        className={className}
      />
    </picture>
  );
}

export function getPreloadLinks(slug: string, sizes: string) {
  const entry = M[slug];
  if (!entry) return [];
  return [
    {
      rel: "preload",
      as: "image",
      type: "image/avif",
      href: `/images/${slug}-${entry.widths[entry.widths.length - 1]}.avif`,
      imagesrcset: entry.widths.map((w) => `/images/${slug}-${w}.avif ${w}w`).join(", "),
      imagesizes: sizes,
      fetchpriority: "high",
    },
  ];
}
