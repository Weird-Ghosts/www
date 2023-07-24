<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <PageHeader />
    <ContentSlot name="default" />
  </ContentDoc>
</template>
