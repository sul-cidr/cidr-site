import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import yaml from "@rollup/plugin-yaml";

export default defineConfig({
  site: "https://cidr.stanford.edu/",
  base: "/",
  trailingSlash: "always",
  vite: {
    plugins: [yaml()],
  },
  integrations: [mdx()],
});
