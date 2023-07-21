<template>
  <header class="header">
    <ClientOnly>
      <ThemeToggle />
    </ClientOnly>
  </header>
</template>

<script>
export default {
  props: ["siteName"],
};
</script>

<style lang="postcss">
.header {
  display: flex;
  @apply z-30;
  align-items: center;
  justify-content: space-between;

  a {
    color: inherit;
    border-bottom: none;
  }
}
</style>
