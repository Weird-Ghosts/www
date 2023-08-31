<script setup>
import MarkdownIt from "markdown-it";

const md = ref(new MarkdownIt({ typographer: true }));
</script>

<template>
  <div class="">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-primary">
        Am I ready?
      </h2>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<style lang="postcss"></style>
