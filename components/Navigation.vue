<script lang="ts" setup></script>

<template>
=    <div
      class="flex flex-wrap md:flex-no-wrap p-6 justify-center align-middle items-center">
      <NuxtLink to="/" aria-label="Home" class="flex items-center">
        <Logo class="w-32" />
      </NuxtLink>
      <nav class="md:w-1/2 w-full">
        <NuxtLink to="/studios"> Studios </NuxtLink>
        <NuxtLink to="/blog"> Blog </NuxtLink>
        <NuxtLink to="/faq"> FAQ </NuxtLink>
        <NuxtLink to="/apply"> Apply </NuxtLink>
      </nav>
    </div>
</template>

<style scoped></style>
