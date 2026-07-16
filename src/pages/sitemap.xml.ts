import { getCollection } from "astro:content";
import { featureFlags, siteMetadata } from "../config/site";

const staticPages = [
  "/",
  "/research",
  "/projects",
  "/publications",
  "/service",
  "/blog",
];

export async function GET() {
  const blogPosts = featureFlags.blog
    ? (await getCollection("blog"))
        .filter((post) => !post.data.draft)
        .map((post) => `/blog/${post.slug}`)
    : [];
  const urls = [...staticPages, ...blogPosts]
    .map((path) => new URL(path, siteMetadata.url).toString())
    .map(
      (url) => `
  <url>
    <loc>${escapeXml(url)}</loc>
  </url>`,
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
