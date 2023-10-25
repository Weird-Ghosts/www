<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <main class="mt-10 mx-auto max-w-screen-xl">
      <section class="relative">
        <div class="mt-6">
          <ContentList :query="seal">
            <template #default="{ list }">
              <div v-for="studio in list" class="mx-auto h-full mb-4">
                <Studio :studio="studio" />
              </div>
            </template>
          </ContentList>
        </div>
      </section>
      <section class="relative">
        <div class="mt-6">
          <h2>Past Grantees</h2>
          <p>
            Our grant & peer accelerator program is now run through our new
            nonprofit,
            <NuxtLink to="https://babyghosts.fund">Baby Ghosts</NuxtLink>! We
            supported the following studios from 2021-2023:
          </p>
          <ContentList :query="grants">
            <template #default="{ list }">
              <p>{{ list.map((studio) => studio.name).join(", ") }}</p>
            </template>
          </ContentList>
        </div>
      </section>
    </main>
  </ContentDoc>
</template>
<script setup lang="ts">
// definePageMeta({ documentDriven: { page: false, surround: false } });

import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const seal: QueryBuilderParams = {
  path: "/studios",
  where: [{ _path: { $ne: "/studios" } }, { type: { $eq: "SEAL" } }],
};
const grants: QueryBuilderParams = {
  path: "/studios",
  where: [{ _path: { $ne: "/studios" } }, { type: { $ne: "SEAL" } }],
};
</script>
