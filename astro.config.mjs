import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import vercel from "@astrojs/vercel"
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // adapter: vercel(),
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react()]
});
