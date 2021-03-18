<template lang="pug">
div(class="ciu-control ciu-input")
  input(placeholder=" ")
  div(class='ciu-input-placeholder')
    div {{placeholder}}

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
      'placeholder': String
    },
    setup() {
        
    },
})
</script>

<style>
.ciu-input {
  display: grid;
  height: 1.9rem;
  margin-top: 0.6rem;
}

.ciu-input > input {
  background: transparent;
  border-bottom: 1px var(--ciu-inactive-color) solid;
  border-left: none;
  border-right: none;
  border-top: none;
  font-family:var(--ciu-font-family);
  font-size: 1rem;
  font-weight: var(--ciu-font-weight);
  grid-area: 1 / 1;
  transition-duration: 0.2s;
  transition-property: border-bottom;
}

.ciu-input > input:focus {
  outline: none;
  border-bottom: 1px var(--ciu-active-color) solid;
}

.ciu-input-placeholder {
  color: var(--ciu-muted-color);
  display: flex;
  grid-area: 1 / 1;
  font-size: 0.9rem;
  transition-duration: 0.2s;
  transition-property: transform font-size;
  z-index: -1;
}

.ciu-input-placeholder > div {
  align-self: center;
}

.ciu-input > input:focus + .ciu-input-placeholder {
  font-size: 0.8rem;
  transform: translate(0px, -1.1rem);
}

.ciu-input > input:not(:placeholder-shown) + .ciu-input-placeholder {
  font-size: 0.8rem;
  transform: translate(0px, -1.1rem);
}
</style>
