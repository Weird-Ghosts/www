<template>
  <div>
    <aside class="bg-body text-white text-center py-1 px-2">
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
      console.log("latestPost: before queryContent");
      const data = await queryContent("blog")
        .only(["title", "date", "_path"])
        .sort({ date: -1 })
        .limit(1)
        .find();
      console.log(
        "latestPost: after queryContent and before setting the value"
      );
      latestPost.value = data;
      console.log("latestPost: after setting the value");
    });
    return {
      latestPost,
    };
  },
};
</script>
