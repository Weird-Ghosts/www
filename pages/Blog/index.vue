<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <div class="mt-10 mx-auto max-w-screen-xl">
      <section class="relative">
        <div
          class="mt-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 items-start align-items-start">
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
<script setup lang="ts">
definePageMeta({ documentDriven: { page: false, surround: false } });
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/blog",
  where: [{ _path: { $ne: "/blog" } }],
  only: ["title", "date", "description", "_path"],
  sort: [{ date: -1 }],
};
</script>
