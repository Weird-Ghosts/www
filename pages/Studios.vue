<template>
  
    <div class="relative overflow-hidden px-4  sm:px-6">
      <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28 ">
        <div class="heading md:py-16 flex flex-wrap mx-auto max-w-screen-xl ">
          <section class="w-full lg:w-2/3 h-full text-lg max-w-4xl">
            <h1
              class="text-3xl  leading-10 font-extrabold  sm:text-5xl sm:leading-none md:text-6xl"
            >
              Studios we&#8217;ve funded.
            </h1>
          </section>
        </div>
        <main class="mt-10 mx-auto max-w-screen-xl">
          <section class="relative">
            <StudioList :studios="this.$static.allStudio" class="mt-6" />
          </section>
        </main>
      </div>
    </div>
  
</template>
<static-query>
query {
  allStudio(sortBy: "Name", order: ASC) {
    edges {
      node {
        name
        content
        steam_page
        id
        twitter
        tiktok
        website
        logo
      }
    }
  }
}

  </static-query>
<script>
import StudioList from "@/components/StudioList";

export default {
  components: {
    StudioList,
  },
  data() {
    return {
      seo: {
        title: "Studios",
        description: "Studios Weird Ghosts has funded.",
        image: "https://weirdghosts.ca/img/Twitter-Card---Studios.png",
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
