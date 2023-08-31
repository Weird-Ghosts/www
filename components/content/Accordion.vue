<template>
  <div class="mx-auto max-w-7xl">
    <div class="mx-auto divide-y divide-gray-900/10">
      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </dl>
    </div>
  </div>
</template>
