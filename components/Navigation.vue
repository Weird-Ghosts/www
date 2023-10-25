<script lang="ts" setup></script>

<template>
  <div
    class="flex flex-wrap md:flex-no-wrap p-6 justify-center align-middle items-center"
  >
    <div v-if="$route.path !== '/'">
      <NuxtLink to="/" aria-label="Home" class="flex items-center">
        <Logo class="w-32" />
      </NuxtLink>
    </div>
    <nav class="md:w-1/2 w-full">
      <DynamicButton link="/studios" text="Studios" />
      <DynamicButton link="/blog" text="Blog" />
      <DynamicButton link="/faq" text="FAQ" />
      <DynamicButton
        link="https://babyghosts.fund/grant-and-accelerator"
        text="Baby Ghosts"
        iconSvg='<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="ml-2 w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>'
      />
      <DynamicButton
        link="https://learn.weirdghosts.ca"
        text="Learn"
        iconSvg='<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="ml-2 w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>'
      />
    </nav>
  </div>
</template>

<style scoped></style>
