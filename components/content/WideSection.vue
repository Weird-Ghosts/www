<template>
  <div class="bg-body text-primary py-12 px-6 my-12">
    <div class="mt-10 mx-auto max-w-screen-xl">
      <template v-if="$slots.col1 && $slots.col2">
        <div class="order-1 w-full lg:grid lg:grid-cols-2 gap-8">
          <div v-if="$slots.col1"><slot name="col1" /></div>
          <div class="mt-12 lg:mt-0" v-if="$slots.col2">
            <slot name="col2" />
          </div>
        </div>
      </template>
      <div v-else><slot name="default" /></div>
    </div>
  </div>
</template>

<style lang="postcss">
p {
  @apply text-xl mt-4;
}
h3 {
  @apply text-2xl mt-8 leading-10 font-bold;
  + p,
  &:first-child {
    @apply mt-0;
  }
}
ul {
  @apply list-none m-0 mt-4 p-0;
}

li {
  @apply relative pl-6;
}

li:before {
  content: "–";
  @apply absolute left-0 top-0;
}
</style>
