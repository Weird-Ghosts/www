<template>
  
    <div class="relative px-4 sm:px-6">
      <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28 ">
        <div class="heading md:py-16 flex flex-wrap mx-auto max-w-screen-xl ">
          <section class="w-full lg:w-2/3 h-full text-lg max-w-4xl">
            <h1
              class="text-3xl leading-10 font-extrabold  sm:text-5xl sm:leading-none md:text-6xl"
            >
              Questions asked and answered.
            </h1>
          </section>
        </div>

        <main
          class="mt-10 mx-auto max-w-screen-xl sm:mt-12 md:mt-16 lg:mt-12 xl:mt-16 "
        >
          <section id="faq" class="relative">
            <div class="flex flex-wrap">
              <div class="sticky  w-full lg:w-1/3 pr-8  ">
                <div class="hidden lg:block h-screen">
                  <div class=" top-6">
                    <QuestionList type="toc" />
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-2/3">
                <QuestionList />
              </div>
            </div>
          </section>

          <div
            class="flex items-center justify-center mx-auto text-center w-full md:w-auto"
          ></div>
        </main>
      </div>
    </div>
  
</template>

<script>
import QuestionList from "@/components/QuestionList";

export default {
  components: {
    QuestionList,
  },
  data() {
    return {
      seo: {
        title: "FAQ",
        description: "Questions and answers about the Weird Ghosts Fund",
        image: "https://weirdghosts.ca/img/Twitter-Card---FAQ.png",
      },
    };
  },
  metaInfo() {
    return {
      bodyAttrs: {
        id: "apply",
      },
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
section {
  h2 {
    @apply uppercase text-3xl flex-1;
    @screen md {
      @apply text-6xl;
    }
  }
}
.markdown-body ol > li {
  @apply text-lg text-body leading-normal mb-4;
  @screen md {
    @apply text-2xl;
  }
  &:before {
    @apply bg-body text-white;
    margin-top: 5px;
  }
  > ol > li {
    @apply text-sm italic leading-5 ml-2 mb-2;
    &:last-child {
      @apply mb-0;
    }
  }
}
</style>
