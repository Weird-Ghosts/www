<template>
  <div class="splash-screen" v-if="showGhost">
    <OGhost />
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted } from "vue";

export default {
  setup() {
    const showGhost = ref(false);

    onBeforeMount(() => {
      showGhost.value = true;
    });

    onMounted(() => {
      showGhost.value = false;
    });

    return {
      showGhost,
    };
  },
};
</script>

<style scoped>
.splash-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>
