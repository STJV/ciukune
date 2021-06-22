<template lang="pug">
ciu-navbar
  template(v-slot:brand)
    h1 Ciu Kune
  router-link(to="/") Home
  router-link(to="/test") Test
  template(v-slot:end)
    p profile
</template>
