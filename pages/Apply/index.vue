<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <div class="relative overflow-hidden px-4 sm:px-6">
      <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28">
        <PageHeader />
        <TwoColBody />
      </div>
    </div>
  </ContentDoc>
</template>

<style lang="postcss">
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
</style>
