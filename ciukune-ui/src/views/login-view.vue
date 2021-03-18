<template lang="pug">
ciu-screen-center
  ciu-component
    header Ciu Kune - Login
    ciu-input(placeholder="Username")
    ciu-input(placeholder="Password")
    ciu-button(type="submit") Login
    a(href='#') Forgot Password
    a(href='#') Register
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
