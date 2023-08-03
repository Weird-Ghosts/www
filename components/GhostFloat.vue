<template>
  <div class="splash-screen" v-if="showGhost">
    <OGhost />
  </div>
</template>

<script>
import { showGhost } from '~/composables/state'

export default {
  setup() {
    return {
      showGhost
    }
  }
}
</script>

<style scoped>
/* Your spinner styles go here */
</style>






