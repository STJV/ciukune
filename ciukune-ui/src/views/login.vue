<template lang="pug">
ciu-screen-center
  ciu-component
    header {{ $t('login-view.title') }}
    ciu-resource-form(:resource="login" @submit.prevent="refresh()")
      ciu-resource-errors
      ciu-resource-input(field="email")
        ciu-text-field(:placeholder="$t('login-view.email')" v-model="login.email")
      ciu-resource-input(field="password")
        ciu-text-field(password :placeholder="$t('login-view.password')" v-model="login.password")
      ciu-button(type="submit") {{ $t('login-view.login') }} 
    hr
    div(class="links-area")
      a(href='#') {{ $t('login-view.reset-password') }}
      a(href='#') {{ $t('login-view.register') }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getLoginResource } from '../lib/api/resources/auth/login'
import { getMeResource } from '../lib/api/resources/auth/me'

export default defineComponent({
    setup() {
      const login = getLoginResource()
      const me = getMeResource()

      async function refresh() {
        if(await login.refresh()) {
          await me.refresh()
        }
      }
      return {
        login: getLoginResource(),
        refresh: refresh
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
