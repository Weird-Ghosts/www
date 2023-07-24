<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <main class="mt-10 mx-auto max-w-screen-xl">
      <section class="relative">
        <div
          class="mt-6 flex flex-wrap md:grid md:grid-cols-3 gap-4 items-start align-items-start">
          <ContentList :query="query">
            <template #default="{ list }">
              <div v-for="studio in list" class="h-full">
                <Studio :studio="studio" />
              </div>
            </template>
          </ContentList>
        </div>
      </section>
    </main>
  </ContentDoc>
</template>
<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/studios",
  where: [{ _path: { $ne: "/studios" } }],
};
const { page } = useContent();

useContentHead(page);

useSeoMeta({
  ogTitle: () => page.value.title,
  ogDescription: () => page.value.description,
  ogImage: () =>
    page.value.image
      ? page.value.image.src
      : "https://weirdghosts.ca/img/Twitter-Card---Studios.png", // Only fetch image.src if image exists
  ogUrl: () => page.value._path,
  twitterTitle: () => page.value.title,
  twitterDescription: () => page.value.description,
  twitterImage: () =>
    page.value.image
      ? page.value.image.src
      : "https://weirdghosts.ca/img/Twitter-Card---Studios.png", // Only fetch image.src if image exists
});

useHead({
  bodyAttrs: {
    class: "page--blog",
  },
});
</script>
