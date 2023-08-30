<template>
  <div class="md:flex items-start align-items-start mt-8 card">
    <div class="md:w-1/3 mr-4 headshot"><slot name="headshot" /></div>
    <p class="md:w-2/3 text-sm bio">
      <slot name="bio" />
    </p>
  </div>
</template>

<style lang="postcss">
.card {
  @apply bg-white overflow-hidden p-6;
  &:first-child {
    @apply mt-0;
  }
}
.headshot + .bio p:first-child {
  @apply mt-0;
}
.bio p {
  @apply text-sm;
}
</style>
