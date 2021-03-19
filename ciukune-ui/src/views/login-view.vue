<template lang="pug">
ciu-screen-center
  ciu-component
    header {{ $t('login-view.title') }}
    ciu-input(:placeholder="$t('login-view.email')" v-model="resource.email")
    ciu-input(:placeholder="$t('login-view.password')" v-model="resource.password")
    ciu-button(type="submit" @click="login") {{ $t('login-view.login') }} 
    hr
    div(class="links-area")
      a(href='#') {{ $t('login-view.reset-password') }}
      a(href='#') {{ $t('login-view.register') }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getLoginResource } from '../lib/resources/auth/login'

export default defineComponent({
    setup() {
      let resource = getLoginResource()
      return {
        login: async () => {
          await resource.refresh()
        },
        resource: resource
      }
    },
})
</script>

<style scoped>
.links-area {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.links-area > *:last-child {
  border-left: 1px var(--ciu-muted-color) solid;
  margin-left: var(--ciu-spacing);
  padding-left: var(--ciu-spacing);
}
</style>
