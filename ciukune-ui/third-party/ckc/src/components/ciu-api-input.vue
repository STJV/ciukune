<template lang="pug">
//- This components injects a resource for child components (inputs, error feedback, loading feedback...) to access it.
ciu-input(:errors="errors")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed } from 'vue'
import { getCurrentResource } from '@ciukune/ckc'

export default defineComponent({
  props: {
    'field': {
        type: String,
        required: true
    },
  },
  setup(props) {
    let resource = getCurrentResource()
    let errors = computed(() => resource.fieldsErrors[props.field])
    return {
        resource,
        errors: errors
    }
  },
})
</script>
