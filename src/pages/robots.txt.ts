import { siteMetadata } from "../config/site";

export function GET() {
  return new Response(
    [
      `User-agent: *`,
      `Allow: /`,
      `Sitemap: ${new URL("/sitemap.xml", siteMetadata.url).toString()}`,
      ``,
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
