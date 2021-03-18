<template lang="pug">
button(class="ciu-control ciu-button")
  slot
</template>

<style>
.ciu-button {
  background: transparent;
  border-radius: var(--ciu-border-radius);
  border: 1px var(--ciu-active-color) solid;
  border: none;
  cursor: pointer;
  padding: var(--ciu-spacing);
  box-shadow: var(--ciu-box-shadow-small);
}

.ciu-button:focus {
  outline: none;
  text-decoration: underline;
}

.ciu-button:hover {
  background: var(--ciu-hint-color);
}
</style>