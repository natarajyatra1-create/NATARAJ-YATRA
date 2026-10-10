import fs from 'fs';
import path from 'path';

// Photos live in public/cities/<city-slug>/ . See public/cities/README.md
const ROOT = path.join(process.cwd(), 'public', 'cities');
const EXT = ['jpg', 'jpeg', 'png', 'webp'];

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function find(dir: string, base: string): string | null {
  for (const e of EXT) {
    if (fs.existsSync(path.join(ROOT, dir, `${base}.${e}`))) return `/cities/${dir}/${base}.${e}`;
  }
  return null;
}

export function getCityImages(slug: string, places: string[]) {
  const hero = find(slug, 'hero');
  const placeImages = places.map((p) => find(slug, slugify(p)));
  let gallery: string[] = [];
  try {
    gallery = fs
      .readdirSync(path.join(ROOT, slug))
      .filter((f) => /^gallery-.*\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map((f) => `/cities/${slug}/${f}`);
  } catch {}
  return { hero, placeImages, gallery };
}
