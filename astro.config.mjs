import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  integrations: [svelte()],
  vite: {
    resolve: {
      alias: {
        "@styles": path.resolve(process.cwd(), "src/styles"),
      },
    },
  },
});

