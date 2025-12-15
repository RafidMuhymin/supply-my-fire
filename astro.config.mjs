// @ts-check
import { fileURLToPath } from "node:url";

import { defineConfig } from "astro/config";

import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
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

  integrations: [
    icon({
      svgoOptions: {
        cleanupIDs: false,
      },
    }),
    sitemap(),
  ],

  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Onest",
        cssVariable: "--font-onest",
        fallbacks: ["sans-serif"],
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/onest-v9-latin-variable.woff2"],
          },
        ],
      },
      {
        provider: "local",
        name: "DM Serif Display",
        cssVariable: "--font-dm-serif-display",
        fallbacks: ["serif"],
        variants: [
          {
            weight: "400",
            style: "normal",
            src: [
              "./src/assets/fonts/dm-serif-display-v17-latin-regular.woff2",
            ],
          },
          {
            weight: "400",
            style: "italic",
            src: ["./src/assets/fonts/dm-serif-display-v17-latin-italic.woff2"],
          },
        ],
      },
    ],
  },
});
