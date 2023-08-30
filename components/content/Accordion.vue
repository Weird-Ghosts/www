<template>
  <div class="">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-primary">
          FAQ
        </h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </dl>
      </div>
    </div>
  </div>
</template>
