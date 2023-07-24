<template>
  <div>
    <Banner />
    <main class="layout" role="main">
      <Navigation />
      <SocialMediaLinks />
      <div class="relative overflow-hidden px-4 sm:px-6">
        <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28">
          <NuxtPage />
        </div>
      </div>
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
