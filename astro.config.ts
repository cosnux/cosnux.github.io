import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://omni-css.github.io",
  integrations: [
    starlight({
      title: "Omni",
      logo: {
        src: "./src/assets/logo.png",
        alt: "Omni",
        replacesTitle: true,
      },
      favicon: "/favicon.ico",
      social: {
        github: "https://github.com/siguici/omni.css",
      },
      editLink: {
        baseUrl: "https://github.com/omni-css/omni-css.github.io/edit/0.x/",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      customCss: ["./src/designs/global.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    qwikdev(),
  ],
});
