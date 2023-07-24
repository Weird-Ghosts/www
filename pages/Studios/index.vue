1

<template>
  <div class="heading md:py-16 flex flex-wrap mx-auto max-w-screen-xl">
    <section class="w-full lg:w-2/3 h-full text-lg max-w-4xl">
      <h1
        class="text-3xl leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
        <h1>Studios we&#8217;ve funded.</h1>
      </h1>
    </section>
  </div>
  <main class="mt-10 mx-auto max-w-screen-xl">
    <section class="relative">
      <div class="mt-6 grid grid-cols-3 gap-4 items-start align-items-start">
        <div v-for="studio in studios" :key="studio._path" class="h-full">
          <Studio :studio="studio" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  setup() {
    const studios = ref([]);

    useAsyncData("studios", async () => {
      const data = await queryContent("studios").find();
      studios.value = data;
    });

    return {
      studios,
    };
  },
};
</script>
