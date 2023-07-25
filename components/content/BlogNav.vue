<script setup lang="ts">
const route = useRoute();

const [previous, next] = await queryContent("blog")
  .where({ _path: { $ne: "/blog" } })
  .only(["_path", "title"])
  .sort({ date: 1 })
  .findSurround(route.path);
</script>

<template>
  <div
    class="max-w-5xl mx-auto flex justify-between border-t-2 border-t-black pt-8 mt-8">
    <div v-if="previous">
      Previous:
      <NuxtLink :to="previous._path" class="flex items-center">
        <span>{{ previous.title }}</span>
      </NuxtLink>
    </div>
    <div v-if="next">
      Next:
      <NuxtLink :to="next._path" class="flex items-center">
        <span>{{ next.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped></style>
