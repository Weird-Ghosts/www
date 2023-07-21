<template>
  <div class="space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
    <StageItem v-for="stage in stages" :key="stage.id" :stage="stage" />
  </div>
</template>

<script>
import StageItem from "./StageItem";

export default {
  props: ["stages"],
  components: {
    StageItem,
  },
};
</script>

<style scoped="true">
p:last-child {
  @apply mb-0;
}
</style>
