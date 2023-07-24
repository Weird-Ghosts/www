<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white text-body justify-between items-center space-y-4 h-full">
    <NuxtLink :to="post._path"
      ><h2 class="text-2xl font-bold" v-html="post.title"
    /></NuxtLink>
    <div class="date font-mono mt-2">
      {{ $dayjs(post.date).format("MMMM D, YYYY") }}
    </div>

    <div class="excerpt" v-html="md.render(post.description)" />
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";

export default {
  props: ["post"],
  data() {
    return {
      md: new MarkdownIt({ typographer: true }),
    };
  },
};
</script>

<style scoped>
h2 {
  @apply text-2xl underline;
}
.excerpt {
  @apply text-xl;
}
</style>
