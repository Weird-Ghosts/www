<template>
  <footer>
    <section
      class="text-center max-w-screen-lg mx-auto flex-col"
      v-if="route.path !== '/apply' && route.path !== '/baby-ghosts'">
      <div class="text-3xl">Interested in partnering with us?</div>
      <a href="mailto:hello@weirdghosts.ca" class="text-2xl font-bold underline"
        >Get in touch.</a
      >
    </section>
    <div class="max-w-screen-xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      <a name="subscribe"></a>
      <div class="mx-auto max-w-2xl" id="subscribe">
        <MailingListSignupForm
          v-if="
            route.path !== '/thank-you' &&
            route.path !== '/mailing-list' &&
            route.path !== '/apply'
          " />
      </div>
      <p class="text-center text-base leading-6 mt-12">
        &copy; {{ new Date().getFullYear() }}

        Weird Ghosts, Inc. All rights reserved.
      </p>

      <p class="text-center text-base leading-6 mt-4">
        <NuxtLink to="/resources">More funding resources</NuxtLink>
        •
        <NuxtLink to="/media-kit">Media kit</NuxtLink>
        •
        <NuxtLink to="/privacy">Privacy</NuxtLink>
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
<style lang="postcss" scoped>
a.social {
  @apply ml-6 text-bronze;
  &:hover {
    @apply text-body transform scale-150;
  }
  &:first-child {
    @apply ml-0;
  }
}
a.nav {
  @apply text-base leading-6 text-body;
  @screen sm {
    @apply text-xl;
  }
  &:hover {
    @apply border-b-2 border-body;
  }
}
</style>
