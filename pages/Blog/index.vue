<template>
  <div class="heading md:py-16 flex flex-wrap mx-auto max-w-screen-xl">
    <section class="w-full lg:w-2/3 h-full text-lg max-w-4xl">
      <h1
        class="text-3xl leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
        News &amp; articles from the Ghosties.
      </h1>
    </section>
  </div>
  <main class="mt-10 mx-auto max-w-screen-xl">
    <section class="relative">
      <div class="order-1 w-full lg:grid lg:grid-cols-2 gap-8">
        <div class="news-item mb-12" v-for="post in blog" :key="post.id">
          <NuxtLink :to="post._path"
            ><h2 v-html="post.title" class="underline"
          /></NuxtLink>
          <div class="date font-mono mt-2">
            {{ $dayjs(post.date).format("MMMM D, YYYY") }}
          </div>
          <div class="excerpt text-xl md:text-2xl" v-html="post.description" />
          <NuxtLink
            :to="post._path"
            class="font-display text-2xl underline inline-flex mt-2 font-bold">
            Read more &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="text-center max-w-screen-lg mx-auto flex-col">
      <div class="text-3xl">Interested in partnering with us?</div>
      <a href="mailto:hello@weirdghosts.ca" class="text-2xl font-bold underline"
        >Get in touch.</a
      >
    </section>
  </main>
</template>

<script>
export default {
  setup() {
    const dayjs = useDayjs();
    const blog = ref([]);

    useAsyncData("blog", async () => {
      const data = await queryContent("blog")
        .only(["title", "date", "description", "_path"])
        .sort({ date: -1 })
        .find();
      blog.value = data;
    });

    return {
      dayjs,
      blog,
    };
  },
};
</script>
