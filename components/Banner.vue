<template>
  <div>
    <aside
      class="flex bg-body text-primary text-center py-1 px-2 h-20 md:h-10 items-center justify-center align-middle">
      <NuxtLink
        v-if="latestPost[0]"
        :to="latestPost[0]._path"
        class="underline font-bold">
        {{ latestPost[0].title }}
      </NuxtLink>
    </aside>
  </div>
</template>

<style scoped></style>

<script>
export default {
  setup() {
    const latestPost = ref([]);

    useAsyncData("latestPost", async () => {
      const data = await queryContent("blog")
        .only(["title", "date", "_path"])
        .sort({ date: -1 })
        .where({ _path: { $ne: "/blog" } })
        .limit(1)
        .find();

      latestPost.value = data;
    });
    return {
      latestPost,
    };
  },
};
</script>
