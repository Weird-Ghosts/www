<script setup>
import { defineProps, ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
import MarkdownIt from "markdown-it";

const md = ref(new MarkdownIt({ typographer: true }));
const props = defineProps({
  question: {
    type: String,
    default: "Default title",
  },
  answer: {
    type: String,
    default: "Default description",
  },
});
</script>
<template>
  <Disclosure as="div" class="pt-6" v-slot="{ open }">
    <dt>
      <DisclosureButton
        class="flex w-full items-start justify-between text-left">
        <span class="text-xl font-semibold leading-7">{{ question }}</span>
        <span class="ml-6 flex h-7 items-center">
          <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
          <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel as="dd" class="mt-2 pr-12">
      <div class="text-base leading-7" v-html="md.render(answer)" />
    </DisclosurePanel>
  </Disclosure>
</template>

<style lang="postcss"></style>
