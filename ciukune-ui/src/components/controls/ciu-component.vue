<template lang="pug">
div(class="ciu-component ciu-flex-column")
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
  border-radius: var(--ciu-border-radius);
  box-shadow: var(--ciu-box-shadow);
  padding: var(--ciu-spacing);
}

.ciu-component > header {
  padding-bottom: var(--ciu-spacing);
  margin-bottom: var(--ciu-spacing);
}

.ciu-component > hr {
  border-bottom: 1px var(--ciu-color) solid;
  border-left: none;
  border-right: none;
  border-top: none;
  margin-bottom: var(--ciu-spacing);
  margin-top: var(--ciu-spacing);
  width: 80%;
}
</style>
