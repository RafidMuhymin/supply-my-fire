// @ts-check
import { fileURLToPath } from "node:url";

import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        {
          find: /^@\/(.*)$/,
          replacement: fileURLToPath(new URL("./src/$1", import.meta.url)),
        },
      ],
    },
  },
});
