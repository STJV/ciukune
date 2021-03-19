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
  padding-top: calc(var(--ciu-font-size) * 0.8);
}

.ciu-input > input {
  background: transparent;
  border-bottom: 1px var(--ciu-color) solid;
  border-left: none;
  border-right: none;
  border-top: none;
  font: var(--ciu-font);
  grid-area: 1 / 1;
  transition: border-bottom 0.2s;
}

.ciu-input > input:focus {
  outline: none;
  border-bottom: 1px var(--ciu-active-color) solid;
}

.ciu-input-placeholder {
  color: var(--ciu-muted-color);
  display: flex;
  grid-area: 1 / 1;
  font-size: 90%;
  transition-duration: 0.2s;
  transition-property: transform font-size;
  z-index: -1;
}

.ciu-input-placeholder > div {
  align-self: center;
}

.ciu-input > input:focus + .ciu-input-placeholder {
  font-size: 80%;
  transform: translate(0px, calc(var(--ciu-font-size) * -1.1));
}

.ciu-input > input:not(:placeholder-shown) + .ciu-input-placeholder {
  font-size: 80%;
  transform: translate(0px, calc(var(--ciu-font-size) * -1.1));
}
</style>
