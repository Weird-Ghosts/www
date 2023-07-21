<template>
  <div class="space-y-8">
    {{ studios.edges.node }}
    <Studio
      v-for="studio in studios.edges"
      :key="studio.node.id"
      :studio="studio.node"
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
