<template lang="pug">
div(class="ciu-component")
  div(class="ciu-component-background")
  div
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
    },
})
</script>

<style>
.ciu-component {
  color: var(--ciu-on-surface);
  display: grid;
}

.ciu-component > * {
  border-radius: var(--ciu-border-radius);
  box-shadow: var(--ciu-box-shadow);
  grid-area: 1 / 1;
  padding: var(--ciu-spacing);
}

.ciu-component > .ciu-component-background {
  background-color: var(--ciu-surface);
  z-index: -2;
}

.ciu-component > header {
  margin-bottom: var(--ciu-spacing);
  padding-bottom: var(--ciu-spacing);
}

.ciu-component > hr {
  border-bottom: 1px var(--ciu-on-surface) solid;
  border-left: none;
  border-right: none;
  border-top: none;
  margin-bottom: var(--ciu-spacing);
  margin-top: var(--ciu-spacing);
  width: 80%;
}
</style>
