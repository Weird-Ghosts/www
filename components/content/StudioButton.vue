<script setup lang="ts">
import type { PropType } from "vue";

import type { NuxtLinkProps } from "#app";
import { ref } from "vue";
const link = defineProps({
  link: {
    type: Object as PropType<NuxtLinkProps>,
    required: false,
  },
});

console.log("Link:", link.link.to);

const buttonClass = ref("my-button");
console.log("Button Class:", buttonClass.value);
</script>

<template>
  <NuxtLink :to="link.link.to">
    <button class="my-button">
      <span v-if="!$slots?.default">Hello Ghosties! 👋</span>
      <span v-else>
        <ContentSlot :use="$slots.default" unwrap="p" />
      </span>
    </button>
  </NuxtLink>
</template>

<style>
button.my-button {
  @apply inline-block transition-all ease-in-out duration-300 text-black;
  box-shadow: 8px 8px 0 0 black; /* Custom style */

  span {
    @apply inline-block uppercase font-bold text-xl leading-none transition-all ease-in-out duration-300 bg-white px-8 py-4;
    border: 2px solid black; /* Custom style */
  }

  &:hover {
    span {
      @apply translate-y-2 translate-x-2; /* Assuming space.2 is 0.5rem */
    }
  }

  &:active {
    span {
      @apply translate-y-1; /* Assuming space.1 is 0.25rem */
    }
  }
}
</style>
