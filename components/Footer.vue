<template>
  <footer>
    <div class="max-w-screen-xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      <a name="subscribe"></a>
      <div class="mx-auto max-w-2xl" id="subscribe">
        <MailingListSignupForm
          v-if="
            $route.path !== '/thank-you' && $route.path !== '/mailing-list'
          " />
      </div>
      <p class="text-center text-base leading-6 mt-12">
        &copy; {{ new Date().getFullYear() }}
        <a href="https://weirdghosts.ca" class="underline" target="_blank"
          >Weird Ghosts, Inc.</a
        >
        All rights reserved. •
        <NuxtLink to="/resources">More funding resources</NuxtLink>
      </p>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
}
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
