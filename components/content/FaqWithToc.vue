<template>
  <div class="mt-10 mx-auto max-w-screen-xl">
    <section class="relative">
      <div class="order-1 w-full lg:grid lg:grid-cols-2 gap-8">
        <div id="page-toc"><PageToc /></div>
        <div id="body"><slot name="default" /></div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
#body {
  h4 {
    @apply text-2xl font-bold  mt-8;
    > p {
      @apply text-2xl mt-4;
    }
    &:first-child {
      @apply mt-0;
    }
  }

  p {
    @apply mt-4;
  }
  ul {
    @apply list-disc list-outside ml-8 mt-4;
    li {
      @apply text-xl;
    }
  }
}
.permalink {
  :hover {
    @apply block;
  }
}
#body {
  h4 a {
    @apply font-bold no-underline;
  }
}
#page-toc {
  @apply p-6 bg-white sticky top-0;
  ul {
    @apply list-outside pl-0 mt-0;
    > li {
      @apply text-lg leading-normal mb-4 block;

      &:before {
        @apply bg-body text-primary;
        margin-top: 5px;
      }

      > ol > li {
        @apply text-sm italic leading-5 ml-2 mb-2;

        &:last-child {
          @apply mb-0;
        }
      }
    }
  }
}
</style>
