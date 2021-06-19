<template lang="pug">
//- This components injects a resource for child components (inputs, error feedback, loading feedback...) to access it.
div(v-bind:class="{'ciu-loading-overlay': true, 'ciu-loading': loading}")
  div(id='background')
  ciu-screen-center
    ciu-spinner(id='spinner')
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

.ciu-loading-overlay #background, #spinner {
  opacity: 0;
  transition: opacity var(--ciu-transition-duration) ease var(--ciu-transition-duration);
  z-index: -1;
}

.ciu-loading-overlay.ciu-loading #background {
  background: var(--ciu-surface);
  opacity: 0.5;
  z-index: 1;
}

.ciu-loading-overlay.ciu-loading #spinner {
  opacity: 1;
  z-index: 1;
}

</style>
