export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          nested: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "dayjs-nuxt",
  ],
  dayjs: {
    locales: ["en", "fr"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "en",
    defaultTimezone: "America/New_York",
  },
  content: {
    documentDriven: true,
  },
  router: {
    options: {
      strict: true,
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      bodyAttrs: { class: "subpixel-antialiased font-body" },
      link: [
        {
          rel: "me",
          href: "https://mastodon.social/@jennie",
        },
      ],
    },
  },
});
