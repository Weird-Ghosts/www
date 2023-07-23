<template>
  <div>
    <Banner />
    <main class="layout" role="main">
      <Navigation />
      <SocialMediaLinks />
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class:
      "overflow-x-hidden text-base leading-normal flex flex-col min-h-screen text-body antialiased font-body",
  },
});
</script>
