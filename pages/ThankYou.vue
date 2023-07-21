<template>
  
    <div class="relative overflow-hidden px-4  sm:px-6">
      <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28 ">
        <main class="mt-10 mx-auto max-w-screen-xl">
          <section class="heading md:py-16 flex flex-wrap mx-auto">
            <div class="w-full h-full text-lg pr-8">
              <div class="relative flex flex-wrap">
                <div class="text text-center mx-auto">
                  <h2
                    class="text-3xl tracking-tight leading-10 font-bold  sm:text-5xl sm:leading-none md:text-6xl"
                  >
                    Thank you!
                  </h2>

                  <p
                    class="mt-3 text-lg sm:text-xl md:text-3xl bg-primary md:mt-5 md:max-w-3xl"
                  >
                    You are now subscribed to our mailing list.<br />
                    <NuxtLink to="/blog"
                      >Check out our blog while you&#8217;re here.</NuxtLink
                    >
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  
</template>

<script>
export default {
  components: {},

  data() {
    return {
      seo: {
        title: "Thank you!",
        description: "You are now signed up for the Weird Ghosts mailing list.",
        image: "https://weirdghosts.ca/img/Twitter-Card---Blog-Post.png",
      },
    };
  },
  metaInfo() {
    return {
      title: this.seo.title,
      meta: [
        {
          key: "title",
          name: "title",
          content: this.seo.title,
        },
        {
          key: "description",
          name: "description",
          content: this.seo.description,
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: this.seo.image,
        },
        { key: "twitter:site", name: "twitter:site", content: "@weird_ghosts" },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.seo.title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.seo.description,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.seo.title,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.seo.description,
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.seo.image,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
#donate-button {
  font-weight: bold;
  font-style: italic;
  @apply uppercase font-bold italic tracking-wide;
}
section.sponsor-info {
  h2 {
    @apply font-bold text-3xl leading-none mb-6;
    @screen md {
      @apply text-4xl leading-tight;
    }
  }
  /* img {
    @apply mx-auto w-40 mb-12;

    @screen md {
      @apply w-80;
    }
  } */
}
</style>
