<template lang="pug">
//- This components injects a resource for child components (inputs, error feedback, loading feedback...) to access it.
div(class="ciu-control ciu-resource-errors" v-if="error") {{ error }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed } from 'vue'
import { getCurrentResource } from '../core/current-resource'

export default defineComponent({
  props: {
  },
  setup(props) {
    let resource = getCurrentResource()
    let error = computed(() => resource.error)
    return {
        error: error
    }
  },
})
</script>

<style>
.ciu-resource-errors {
    font-size: 80%;
    color: var(--ciu-error);
}
</style>
