import type { MetadataRoute } from "next";
import { PAGES, absoluteUrl } from "@/lib/site";

// Solo páginas indexables del dominio canónico (.com). Sin legales noindex,
// sin 404 ni redirecciones.
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified, priority }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(lastModified),
    changeFrequency: "monthly",
    priority,
  }));
}
