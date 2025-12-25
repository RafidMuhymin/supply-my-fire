// @ts-check
import { fileURLToPath } from "node:url";

import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import favicons from "astro-favicons";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.supplymyfire.com/",

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
    favicons({
      name: "Supply My Fire",
      short_name: "SMF",
      withCapo: true,
      input: {
        favicons: ["public/favicon.png"],
      },
    }),
  ],

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Onest",
        cssVariable: "--font-onest",
        fallbacks: ["sans-serif"],
        styles: ["normal"],
        weights: ["100 900"],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.fontsource(),
        name: "DM Serif Display",
        cssVariable: "--font-dm-serif-display",
        fallbacks: ["serif"],
        styles: ["normal", "italic"],
        weights: ["400"],
        subsets: ["latin"],
      },
    ],
  },
});
