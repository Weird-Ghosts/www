<template>
  <div>
    <Banner />
    <main class="layout" role="main">
      <Navigation />
      <SocialMediaLinks />
      <div class="relative overflow-hidden px-4 sm:px-6">
        <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28">
          <NuxtPage />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
useContentHead(page);
useHead({
  bodyAttrs: {
    class:
      "overflow-x-hidden text-base leading-normal flex flex-col min-h-screen text-body antialiased font-body",
  },
  meta: [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "keywords",
      content:
        "indie studios, game dev funding, impact funding, social finance",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Weird Ghosts" },
    { name: "copyright", content: "© 2023 Weird Ghosts" },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Weird Ghosts` : "Weird Ghosts";
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
