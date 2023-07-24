<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/studios",
  where: [{ _path: { $ne: "/studios" } }],
};
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <main class="mt-10 mx-auto max-w-screen-xl">
      <section class="relative">
        <div class="mt-6 grid grid-cols-3 gap-4 items-start align-items-start">
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
