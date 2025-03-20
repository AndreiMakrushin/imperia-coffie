// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["./shared/assets/css/main.css", "primeicons/primeicons.css"],

  dir: {
    pages: "app/routes",
    plugins: "app/plugins",
    layouts: "app/layouts",
    middleware: "app/middleware",
    modules: "app/modules",
    assets: "shared/assets",
    public: "shared/public",
    static: "shared/static",
  },

  alias: {
    assets: "./shared/assets",
    public: "./shared/public",
  },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: ".fake-app-dark",
          cssLayer: {
            name: "primevue",
            order: "primevue",
          },
        },
      },
    },
    components: {
      include: "*",
      prefix: "Prime",
      exclude: [],
    },
  },

  components: [
    {
      path: "./shared/ui",
      pathPrefix: false,
      global: true,
    },
  ],

  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@primevue/nuxt-module",
  ],
});
