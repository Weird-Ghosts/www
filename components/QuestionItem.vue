<template>
  <div :id="question.slug">
    <div class="question-header flex flex-row">
      <h4 class="text-2xl flex-auto font-bold leading-6 text-body">
        {{ question.title }}
      </h4>

      <a class="permalink" :href="`#${question.slug}`">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-link order-2 w-4 text-body"
        >
          <path
            d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          ></path>
          <path
            d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          ></path>
        </svg>
      </a>
    </div>
    <div
      :id="question.id"
      class="question-content mt-2 text-body subpixel-antialiased"
      v-html="question.content"
    />
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style lang="postcss">
.question-content {
  p {
    @apply mt-4;
  }
  ul {
    @apply list-disc list-outside ml-8 mt-4;
    li {
      @apply text-xl;
    }
  }
}
.permalink {
  :hover {
    @apply block;
  }
}
</style>
