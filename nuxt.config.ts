export default defineNuxtConfig({
  extends: [
    'nuxt-seo-kit'
  ],
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://weirdghosts.ca',
      siteName: 'Weird Ghosts',
      siteDescription: 'An impact fund for underrepresented video game studio founders.',
      language: 'en-CA',
    }
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-content-assets', // make sure to add before content!
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    '@nuxt/image',
    "dayjs-nuxt",
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
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
      remarkPlugins: [
        "remark-smartypants",
      ],
      toc: {
        depth: 4,
        searchDepth: 4
      }
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
