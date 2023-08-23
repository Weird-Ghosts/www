<template>
  <div class="mt-10 mx-auto max-w-screen-xl">
    <section class="relative">
      <div class="w-full">
        <div v-if="$slots.default"><slot name="default" /></div>
      </div>
    </section>
  </div>
</template>
