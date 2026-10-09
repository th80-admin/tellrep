import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tellrep.ch",
  trailingSlash: "ignore",
  integrations: [sitemap({ filter: (page) => !/\/(imprint|privacy)\/?$/.test(page) })],
});
