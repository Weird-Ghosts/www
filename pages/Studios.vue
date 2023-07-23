<template>
  <div class="relative overflow-hidden px-4 sm:px-6">
    <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28">
      <div class="heading md:py-16 flex flex-wrap mx-auto max-w-screen-xl">
        <section class="w-full lg:w-2/3 h-full text-lg max-w-4xl">
          <h1
            class="text-3xl leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
            Studios we&#8217;ve funded.
          </h1>
        </section>
      </div>
      <main class="mt-10 mx-auto max-w-screen-xl">
        <section class="relative">
          <ContentList path="/studios" v-slot="{ list }">
            <div class="space-y-8 mt-6">
              <div v-for="studio in list" :key="studio._path">
                <Studio :studio="studio" />
              </div>
            </div>
          </ContentList>
        </section>
      </main>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
#donate-button {
  font-weight: bold;
  font-style: italic;
  @apply uppercase font-bold italic tracking-wide;
}
section {
  .date {
    @apply mb-6;
  }
  h2 {
    @apply font-bold text-3xl leading-none mb-0;
    @screen md {
      @apply text-4xl leading-tight;
    }
  }
}
</style>
