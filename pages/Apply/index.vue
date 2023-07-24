<template>
  <ContentDoc v-slot="{ doc }">
    <div class="page--apply">
      <ContentRenderer :value="doc" />
      <PageHeader />
      <TwoColBody />
    </div>
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
