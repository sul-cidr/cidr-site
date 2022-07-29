import { defineConfig } from "astro/config";

import yaml from "@rollup/plugin-yaml";

export default defineConfig({
  site: "https://cidr.stanford.edu/",
  base: "/",
  trailingSlash: "always",
  vite: {
    plugins: [yaml()],
  },
});
