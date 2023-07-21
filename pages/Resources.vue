<template>
  
    <div class="relative overflow-hidden px-4  sm:px-6">
      <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28 ">
        <div class="heading md:py-16 flex flex-wrap mx-auto max-w-screen-xl ">
          <section class="w-full lg:w-2/3 h-full text-lg max-w-4xl">
            <h1
              class="text-3xl  leading-10 font-extrabold  sm:text-5xl sm:leading-none md:text-6xl"
            >
              Other funding opportunities.
            </h1>
          </section>
        </div>

        <main class="mt-10 mx-auto max-w-screen-xl">
          <section class="relative">
            <div class="">
              <div
                class="mb-12"
                v-for="location in $static.allLocation.edges"
                :key="location.id"
              >
                <h2 v-html="location.node.name" />
                <ul
                  class="text-xl"
                  v-for="program in location.node.programs"
                  :key="program.id"
                >
                  <li class="border-b-2 p-2">
                    <div class="md:flex md:flex-wrap">
                      <NuxtLink :to="program.url" class="underline w-1/2 ">{{
                        program.name
                      }}</NuxtLink>
                      <div class="">
                        {{ program.funder[0].name }}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  
</template>
<static-query>
query {
  allLocation(sortBy: "Name", order: ASC) {
    edges {
      node {
        name
        programs(sortBy: "Name", order: ASC) {
          name
          url
          funder {
            name
          }
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      seo: {
        title: "Resources",
        description: "Funding resources for Canadian studios.",
        image: "https://weirdghosts.ca/img/Twitter-Card---Resources.png",
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
