<template lang="pug">
div(class="ciu-component")
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
  display: flex;
  flex-direction: column;
  padding: var(--ciu-spacing);
}

.ciu-component > header {
  border-bottom: 1px black solid;
  padding: var(--ciu-spacing);
  margin-bottom: var(--ciu-spacing);
}
</style>
