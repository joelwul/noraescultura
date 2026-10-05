/**
 * Image optimisation pipeline.
 *
 * Reads originals from `scripts/source-images/` (PNG/JPG) and emits
 * AVIF + WebP responsive variants into `public/images/`, plus an
 * `src/lib/image-manifest.json` consumed by the <Picture> component.
 *
 * Run with:  node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = "scripts/source-images";
const OUT = "public/images";
await mkdir(OUT, { recursive: true });

// Per-slug overrides; everything else uses _default.
const CONFIG = {
  "hero-nucleo-ascendente": { widths: [640, 960, 1280, 1920], q: { avif: 55, webp: 72 } },
  "orbita-mineral":         { widths: [480, 768, 1024, 1600], q: { avif: 58, webp: 75 } },
  "nora-portrait":          { widths: [320, 480, 640],        q: { avif: 60, webp: 78 } },
  _default:                 { widths: [480, 768, 1024],       q: { avif: 58, webp: 75 } },
};

const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f));
const manifest = {};

for (const file of files) {
  const slug = file.replace(/\.(png|jpe?g)$/i, "");
  const cfg = CONFIG[slug] || CONFIG._default;
  const input = path.join(SRC, file);
  const meta = await sharp(input).metadata();
  const widths = [...new Set(cfg.widths.map((w) => Math.min(w, meta.width)))].sort(
    (a, b) => a - b,
  );
  manifest[slug] = { w: meta.width, h: meta.height, widths };

  await Promise.all(
    widths.flatMap((w) => [
      sharp(input)
        .resize(w)
        .avif({ quality: cfg.q.avif, effort: 6 })
        .toFile(path.join(OUT, `${slug}-${w}.avif`)),
      sharp(input)
        .resize(w)
        .webp({ quality: cfg.q.webp, effort: 6 })
        .toFile(path.join(OUT, `${slug}-${w}.webp`)),
    ]),
  );
  console.log(`✓ ${slug}  (${widths.join(", ")})`);
}

await writeFile("src/lib/image-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
console.log("\nManifest written to src/lib/image-manifest.json");
