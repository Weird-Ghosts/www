<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <ContentSlot name="default" />
  </ContentDoc>
</template>
