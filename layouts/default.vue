<template>
  <div>
    <Banner />
    <main class="layout" role="main">
      <Navigation />
      <SocialMediaLinks />
      <slot />
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

<!-- <script>
export default {
// // afterEach(to, from) {
// //   if (this.$route.hash) {
// //     this.scrollToHash();
// //   }
// //   }
// // },
// // methods: {
// //   scrollToHash() {
// //     var hash = this.$route.hash;
// //     this.$nextTick(() => {
// //       this.$scrollTo(hash, 400, { offset: 0 });
// //     });
// //   },
// // },
// };
</script> -->
