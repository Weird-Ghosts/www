<template>
    <div
      id="insta-wrapper"
      class="relative overflow-hidden h-screen min-h-screen h-full px-4  sm:px-6"
    >
      <div class="relative py-6 sm:pb-16 md:pb-20 lg:pb-28 ">
        <div
          class="heading md:py-16 flex flex-wrap mx-auto max-w-screen-xl justify-center self-center "
        >
          <div class="w-full lg:w-2/3 h-full text-lg max-w-4xl pr-8">
            <div class="relative flex flex-wrap">
              <div class="text z-20"></div>
            </div>
          </div>
        </div>

        <main class="mt-10 mx-auto max-w-screen-xl">
          <section class="relative">
            <div class="w-full">
              <a
                :href="post.node.url"
                class="block text-center mb-12 text-xl border-black bg-primary text-center w-full py-4 px-10 border-2   hover:bg-body hover:text-primary"
                v-for="post in $static.links.edges"
                :key="post.id"
              >
                {{ post.node.title }}
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  
</template>
<static-query>
query {
  links: allLink(sortBy: "date") {
    edges {
      node {
        title
        url
        date
      }
    }
  }
}
</static-query>

<script>
export default {};
</script>

<style lang="postcss">
#insta-wrapper {
  /* background: url("~@/assets/img/studio_tools_screened01.png") center center
    no-repeat; */
}
</style>
