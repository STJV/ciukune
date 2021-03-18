<template lang="pug">
login-view
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginView from './views/login-view.vue'


export default defineComponent({
  name: 'App',
  components: {
    LoginView
  }
})
</script>

<style>
@import './assets/styles/ciu.css';

#app {
  height: 100vh;
}
</style>