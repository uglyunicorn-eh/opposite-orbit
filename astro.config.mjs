import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import keystatic from '@keystatic/astro';
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [react(), markdoc(), keystatic()]
});
