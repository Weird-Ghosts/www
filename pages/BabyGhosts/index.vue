<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <PageHeader />
    <ContentSlot name="default" />
    <TwoColBody />
  </ContentDoc>
</template>
<script setup lang="ts">
const { page } = useContent();
useHead({
  bodyAttrs: {
    class: "page--baby-ghosts",
  },
});
useContentHead(page);
</script>
