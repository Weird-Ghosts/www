<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <div class="relative overflow-hidden px-4 sm:px-6">
      <div class="relative py-6">
        <PageHeader />
        <ContentSlot name="default" />
      </div>
    </div>
  </ContentDoc>
</template>
