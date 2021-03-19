<template lang="pug">
button(class="ciu-control ciu-ripple" :type="type")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    'type': String,
  },
  setup() {
    
  },
})
</script>
