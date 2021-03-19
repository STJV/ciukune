<template lang="pug">
ciu-screen-center
  ciu-component
    header Ciu Kune - Login
    ciu-input(placeholder="Username")
    ciu-input(placeholder="Password")
    ciu-button(type="submit") Login
    hr
    div(class="links-area")
      a(href='#') Reset&nbsp;Password
      a(href='#') Create Account
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
.links-area {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.links-area > * {
  flex: 1 1 1px;
}

.links-area > *:last-child {
  border-left: 1px var(--ciu-muted-color) solid;
  margin-left: var(--ciu-spacing);
  padding-left: var(--ciu-spacing);
}
</style>