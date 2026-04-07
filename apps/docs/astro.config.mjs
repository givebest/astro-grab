// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { astroGrab } from "astro-grab";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroGrab(),
    starlight({
      plugins: [starlightThemeNova()],
      title: "astro-grab",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nickradford/astro-grab",
        },
        {
          icon: "npm",
          label: "npm",
          href: "https://www.npmjs.com/package/astro-grab",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", slug: "guides/getting-started" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
