<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/blog",
  where: [{ _path: { $ne: "/blog" } }],
  only: ["title", "date", "description", "_path"],
  sort: [{ date: -1 }],
};
useSeoMeta({
  ogTitle: "Our Blog",
  ogDescription: "Articles and updates from the Weird Ghosts team.",
  ogImage: "https://weirdghosts.ca/img/Twitter-Card---Blog.png",
  ogUrl: "https://weirdghosts.ca/blog",
  twitterTitle: "Our Blog",
  twitterDescription: "Articles and updates from the Weird Ghosts team.",
  twitterImage: "https://weirdghosts.ca/img/Twitter-Card---Blog.png",
});
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <div class="mt-10 mx-auto max-w-screen-xl">
      <section class="relative">
        <div class="mt-6 grid grid-cols-3 gap-4 items-start align-items-start">
          <ContentList :query="query">
            <template #default="{ list }">
              <div
                v-for="post in list"
                :key="post._path"
                class="news-item mb-12 h-full">
                <BlogExcerpt :post="post" />
              </div>
            </template>
          </ContentList>
        </div>
      </section>
    </div>
  </ContentDoc>
</template>
