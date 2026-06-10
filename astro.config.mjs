// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // REQUIRED for absolute canonical/OG URLs and the sitemap.
  // Replace with your production origin before going live.
  site: "https://example.com",

  output: "static",
  outDir: "./dist",

  adapter: cloudflare(),
  devToolbar: {
    enabled: false,
  },

  // Native link prefetching. `data-astro-prefetch` opts a link in;
  // strategy "hover" balances bandwidth vs. perceived speed.
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },

  // Tailwind v4 ships as a Vite plugin — no Astro integration anymore.
  vite: {
    plugins: [tailwindcss()],
  },
});
