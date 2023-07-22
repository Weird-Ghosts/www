<template>
  <div class="space-y-8">
    <Studio
      v-for="studio in studios"
      :key="studio.id"
      :studio="studio"
    />
  </div>
</template>

<script>
import Studio from "./Studio";

export default {
  props: ["studios"],
  components: {
    Studio,
  },
};
</script>

<style scoped="true">
p:last-child {
  @apply mb-0;
}
</style>
