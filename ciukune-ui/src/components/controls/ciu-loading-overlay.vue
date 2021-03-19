<template lang="pug">
//- This components injects a resource for child components (inputs, error feedback, loading feedback...) to access it.
div(class="ciu-loading-overlay")
  div(class="background-overlay" v-if="loading")
  ciu-screen-center(v-if="loading")
    ciu-spinner
  div
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    'loading': Boolean,
  }
})
</script>

<style>
.ciu-loading-overlay {
  display: grid;
}

.ciu-loading-overlay > * {
  grid-area: 1 / 1
}

.ciu-loading-overlay > .background-overlay {
  background: var(--ciu-background-color);
  opacity: 0.6;
}
</style>
