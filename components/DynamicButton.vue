<script setup lang="ts">
import type { PropType } from "vue";
import type { NuxtLinkProps } from "#app";
import { ref, defineProps } from "vue";

const props = defineProps({
  link: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
    default: "Hello Ghosties! 👋",
  },
  iconSvg: {
    type: String,
    required: false,
  },
});

const buttonClass = ref("dynamic-button");
</script>

<template>
  <NuxtLink :to="props.link">
    <button class="dynamic-button">
      <span class="inner">
        <span class="label">{{ props.text }}</span>
        <span
          class="icon ml-1"
          v-if="props.iconSvg"
          v-html="props.iconSvg"
        ></span>
      </span>
    </button>
  </NuxtLink>
</template>

<style scoped>
button {
  @apply mb-4 inline-block transition-all ease-in-out duration-300 text-body;
  box-shadow: 8px 8px 0 0 #e33f3e; /* Custom style */

  .inner {
    @apply flex items-center justify-center uppercase font-bold text-base leading-none transition-all ease-in-out duration-300 bg-white px-8 py-4;
    border: 2px solid #e33f3e; /* Custom style */
  }

  &:hover {
    .inner {
      @apply translate-y-2 translate-x-2; /* Assuming space.2 is 0.5rem */
    }
  }

  &:active {
    .inner {
      @apply translate-y-1; /* Assuming space.1 is 0.25rem */
    }
  }
}
.router-link-active {
  button {
    .inner {
      @apply bg-body text-primary translate-y-2 translate-x-2; /* Assuming space.2 is 0.5rem */
    }
    box-shadow: none;
    &:after {
      top: -2px;
      left: -2px;
    }
  }
}
</style>
