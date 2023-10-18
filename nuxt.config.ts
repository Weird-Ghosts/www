import { showGhost } from "./composables/state";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      formkitKey: process.env.FORMKIT_PRO_KEY,
    },
  },
  nitro: {
    prerender: {
      routes: ["/apply"],
    },
  },
  image: {
    provider: "netlify",
  },
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxthq/studio",
    "nuxt-jsonld",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/plausible",
    "@nuxt/devtools",
    "@formkit/nuxt",
    "dayjs-nuxt",
  ],

  plausible: {
    domain: "weirdghosts.ca",
    autoOutboundTracking: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  dayjs: {
    locales: ["en"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "en",
    defaultTimezone: "America/New_York",
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
      remarkPlugins: ["remark-smartypants"],
      toc: {
        depth: 4,
        searchDepth: 4,
      },
    },
  },
  router: {
    options: {
      strict: true,
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      bodyAttrs: { class: "antialiased font-body" },
    },
  },
});
