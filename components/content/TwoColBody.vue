<template>
  <div class="mt-10 mx-auto max-w-screen-xl">
    <section class="relative">
      <div class="order-1 w-full lg:grid lg:grid-cols-2 gap-8">
        <div><slot name="col1" /></div>
        <div><slot name="col2" /></div>
      </div>
    </section>
  </div>
</template>
