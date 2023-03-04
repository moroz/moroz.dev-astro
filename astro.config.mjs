import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://moroz.dev",
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  integrations: [svelte(), mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@styles": path.resolve(process.cwd(), "src/styles"),
        "@components": path.resolve(process.cwd(), "src/components"),
        "@lib": path.resolve(process.cwd(), "src/lib"),
        "@layouts": path.resolve(process.cwd(), "src/layouts"),
        "@": path.resolve(process.cwd(), "src"),
      },
    },
  },
});

