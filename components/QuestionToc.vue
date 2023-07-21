<template>
  <div>
    <div class="mb-4" :id="`link-${question.slug}`">
      <a
        :href="`#${question.slug}`"
        :data-target="`${question.slug}`"
        v-scroll-to="{
          el: `#${question.slug}`,
          offset: -10,
        }"
        class="toc-link text-lg flex-auto font-medium leading-6 text-body underline cursor-pointer"
      >
        {{ question.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style lang="postcss" scoped></style>
