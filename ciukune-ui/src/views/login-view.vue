<template lang="pug">
ciu-screen-center
  ciu-component
    header Ciu Kune - Login
    ciu-input(placeholder="Username")
    ciu-input(placeholder="Password")
    ciu-button(type="submit") Login
    hr
    div
      a(href='#') Register
      a(href='#') Forgot Password ?
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
