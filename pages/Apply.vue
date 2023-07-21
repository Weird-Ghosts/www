<template>
  
    <div class="relative overflow-hidden px-4  sm:px-6">
      <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28 ">
        <div class="heading md:py-16 flex flex-wrap mx-auto max-w-screen-xl ">
          <section class="w-full lg:w-2/3 h-full text-lg max-w-4xl">
            <h1
              class="text-3xl  leading-10 font-extrabold  sm:text-5xl sm:leading-none md:text-6xl"
            >
              Apply for funding.
            </h1>
          </section>
        </div>

        <main class="mt-10 mx-auto max-w-screen-xl">
          <section class="relative">
            <div class="order-1 w-full lg:grid lg:grid-cols-2 gap-8">
              <div>
                <p class="text-2xl mb-6">
                  Just two important things before you apply:
                </p>
                <ol class="list list-outside text-3xl">
                  <li class="mb-8">
                    <strong>Make sure you&#8217;re eligible.</strong> Your
                    studio must be based in Canada, and a majority of founders
                    from an
                    <a href="/faq#identity">underrepresented identity group</a>.
                  </li>

                  <li>
                    <strong>Prep your pitch deck.</strong> We're looking for an
                    <a href="/faq#pitch-deck">overview of your studio</a>, not
                    just a project.
                  </li>
                </ol>
              </div>
              <div class="flex items-center">
                <div class="mx-auto mt-12 md:mt-0">
                  <!-- <a
                    href="https://airtable.com/shroCz6z6xvuUvpHX"
                    target="_blank"
                    class="bg-body text-primary px-6 py-2 text-center font-black text-4xl flex items-center justify-center"
                  >
                    <span class="pr-2">Apply Now</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-external-link"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a> -->
                  Applications for Early funding are currently closed. Please
                  <a
                    href="mailto:hello@weirdghosts.ca"
                    class="underline font-bold"
                    >get in touch</a
                  >
                  if you have any questions or would like to be notified when
                  they open. Applications for our <NuxtLink to="/baby-ghosts">Baby Ghosts program</NuxtLink> are open through March 13 for Ontario studios.
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
  data() {
    return {
      seo: {
        title: "Apply for funding.",
        description: "Ready to submit your application for funding?",
        image: "https://weirdghosts.ca/img/Twitter-Card---Apply.png",
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
