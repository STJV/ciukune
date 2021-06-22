<template lang="pug">
div(class="ciu-flex-row ciu-primary-dark")
  div(class=ciu-navbar-brand)
    slot(name="brand")
  div(class=ciu-navbar-links)
    slot
  div(class=ciu-navbar-end)
    slot(name="end")
</template>

<style>
.ciu-navbar > .ciu-navbar-brand, .ciu-navbar-end {
  flex-grow: 0;
}

.ciu-navbar > .ciu-navbar-main {
  flex-grow: 1;
}

.ciu-navbar > div > * {
  margin-right: var(--ciu-control-spacing);
}

.ciu-navbar a {
  text-transform: uppercase;
}
</style>

