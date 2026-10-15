import { defineConfig } from "astro/config";
import config from "./website.config";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

const { socials } = config;
const socialPaths = ["/s", "/social"];

function generateSocialRedirects() {
  const generated: Record<string, string> = {};

  for (const [name, url] of Object.entries(socials)) {
    generated[`${socialPaths[0]}/${name}`] = url;
    generated[`${socialPaths[1]}/${name}`] = url;
  }

  return generated;
}

export default defineConfig({
  site: "https://morganjon.es",
  integrations: [sitemap()],
  redirects: generateSocialRedirects(),
  adapter: vercel()
});