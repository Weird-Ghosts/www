<template>
  <div class="">
    <h2 class="text-3xl font-bold leading-10 tracking-tight text-primary">
      Baby Ghosts FAQ
    </h2>
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </dl>
      </div>
    </div>
  </div>
</template>
