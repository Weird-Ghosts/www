<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <PageHeader />
    <TwoColBody />
  </ContentDoc>
</template>

<style lang="postcss">
.page--apply {
  ol {
    @apply list-none list-outside text-3xl;
    li {
      @apply mb-8;
    }
  }

  section {
    .date {
      @apply mb-6;
    }
    h2 {
      @apply font-bold text-3xl leading-none mb-0;
      @screen md {
        @apply text-4xl leading-tight;
      }
    }
  }
}
</style>
<script setup lang="ts">
const { page } = useContent();

useContentHead(page);

useSeoMeta({
  ogTitle: () => page.value.title,
  ogDescription: () => page.value.description,
  ogImage: () =>
    page.value.image
      ? page.value.image.src
      : "https://weirdghosts.ca/img/Twitter-Card---Apply.png", // Only fetch image.src if image exists
  ogUrl: () => page.value._path,
  twitterTitle: () => page.value.title,
  twitterDescription: () => page.value.description,
  twitterImage: () =>
    page.value.image
      ? page.value.image.src
      : "https://weirdghosts.ca/img/Twitter-Card---Apply.png", // Only fetch image.src if image exists
});

useHead({
  bodyAttrs: {
    class: "page--apply",
  },
});
</script>
