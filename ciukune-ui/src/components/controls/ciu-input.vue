<template lang="pug">
div(class="ciu-control ciu-input")
  slot
  div(class="ciu-input-errors")
    div(v-for="error in errors" :key="error.id") {{ error }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue'

export default defineComponent({
    props: {
      'errors': {
        type: Object as PropType<String[]>,
        default: []
      }
    },
    setup() {
        
    },
})
</script>

<style>
.ciu-input-errors {
  color: var(--ciu-error-color);
  font-size: 80%;
  margin-top: 2px;
}
</style>
