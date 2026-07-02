import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  vite: {
    cacheDir: process.env.ASTRO_VITE_CACHE_DIR ?? ".astro/vite",
    optimizeDeps: {
      noDiscovery: true,
      include: [],
    },
  },
});
