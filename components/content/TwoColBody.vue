<template>
  <div class="mt-10 mx-auto max-w-screen-xl">
    <section class="relative">
      <div class="order-1 w-full lg:grid lg:grid-cols-2 gap-8">
        <div v-if="$slots.col1"><slot name="col1" /></div>
        <div v-if="$slots.col2"><slot name="col2" /></div>
        <div v-else><slot name="default" /></div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
ul {
  @apply list-outside list-disc pl-5;
}
ul,
p {
  @apply text-xl mt-4;
}
h3 {
  @apply text-2xl mt-8 leading-10 font-extrabold;
  + p,
  &:first-child {
    @apply mt-0;
  }
}
</style>
