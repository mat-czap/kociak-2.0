import type { MetadataRoute } from "next";

// Mirrors the SITE_URL fallback logic in layout.tsx — keep them in sync
// when the production domain changes.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kultowabistro.pl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
