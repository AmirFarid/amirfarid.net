import { getCollection } from "astro:content";
import { featureFlags, siteMetadata } from "../config/site";

const staticPages = [
  "/",
  "/research",
  "/projects",
  "/publications",
  "/blog",
  "/cv",
  "/about",
  ...(featureFlags.learning ? ["/learning"] : []),
  ...(featureFlags.technical ? ["/technical"] : []),
];

export async function GET() {
  const blogPosts = featureFlags.blog
    ? (await getCollection("blog")).map((post) => `/blog/${post.slug}`)
    : [];
  const learningPosts = featureFlags.learning
    ? (await getCollection("learning")).map((post) => `/learning/${post.slug}`)
    : [];
  const technicalPosts = featureFlags.technical
    ? (await getCollection("technical")).map(
        (post) => `/technical/${post.slug}`,
      )
    : [];

  const urls = [
    ...staticPages,
    ...blogPosts,
    ...learningPosts,
    ...technicalPosts,
  ]
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
